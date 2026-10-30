import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILL_CATEGORIES,
  SERVICES,
  WORK_PROCESS,
  HIGHLIGHT_STATS,
} from "@/data/portfolioData";

// Basic In-Memory Rate Limiting: 15 requests per minute per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodically clean up old IPs to prevent memory leak
  if (rateLimitMap.size > 2000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const active = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  return false;
}

// Build comprehensive, fact-grounded system prompt from portfolio data
const SYSTEM_PROMPT = `You are the official AI Assistant for Yash Verma's developer portfolio website.
Your role is to answer visitor, recruiter, and client inquiries about Yash Verma professionally, warmly, concisely, and accurately.

CRITICAL RULES:
1. ONLY provide facts grounded in Yash's verified portfolio information provided below.
2. NEVER invent, hallucinate, or assume facts, companies, technologies, or achievements that are not listed here.
3. If asked about something outside Yash's background, work, or skills, politely acknowledge that and invite them to reach out directly to Yash via email or the Contact form.
4. Keep answers concise, clear, and easy to read (typically 1 to 3 short paragraphs or bullet points).
5. Always represent Yash in a professional, humble, yet confident developer voice.
6. Do NOT provide or mention any phone number under any circumstance. Direct all communication inquiries to email, LinkedIn, or the website Contact form.
7. FORMATTING RULES:
   - Provide direct, concise answers in clean, readable paragraphs.
   - When using bullet points, write each bullet directly on a new line (e.g., "- **Email:** yashverma.u786@gmail.com"). NEVER put a solitary bullet dash on its own line.
   - For links, use clean descriptive labels: "[Yash's LinkedIn](${PERSONAL_INFO.linkedIn})". Never duplicate the URL as the label text.
   - Keep total response length within 2-3 brief paragraphs.

=== YASH VERMA PORTFOLIO DATA ===
- Name: ${PERSONAL_INFO.name}
- Current Role: ${PERSONAL_INFO.role} (${PERSONAL_INFO.subTitle})
- Experience: ${PERSONAL_INFO.experienceYears} of production experience building business websites, enterprise dashboards, and web applications.
- Location: ${PERSONAL_INFO.location}
- Email: ${PERSONAL_INFO.email}
- LinkedIn: ${PERSONAL_INFO.linkedIn}
- GitHub: ${PERSONAL_INFO.gitHub}
- Education: ${PERSONAL_INFO.education}
- Headline: "${PERSONAL_INFO.headline}"
- Key Stats: ${HIGHLIGHT_STATS.map((s) => `${s.label}: ${s.value}`).join(", ")}

=== WORK EXPERIENCE ===
${EXPERIENCES.map(
  (exp) => `
* ${exp.role} at ${exp.company} (${exp.location}) | ${exp.period} ${exp.isCurrent ? "[Current Role]" : ""}
  Responsibilities:
  ${exp.responsibilities.map((r) => `  - ${r}`).join("\n")}
  Technologies used: ${exp.technologies.join(", ")}
`
).join("")}

=== FEATURED PROJECTS ===
${PROJECTS.map(
  (p) => `
* ${p.title} (${p.category}) - ${p.website}
  Stack: ${p.stack.join(", ")}
  Description: ${p.description}
  Key Highlights:
  ${p.highlights.map((h) => `  - ${h}`).join("\n")}
`
).join("")}

=== TECHNICAL SKILLS ===
${SKILL_CATEGORIES.map(
  (c) => `* ${c.category}: ${c.skills.map((s) => `${s.name} (${s.level})`).join(", ")}`
).join("\n")}

=== SERVICES OFFERED ===
${SERVICES.map(
  (s) => `* ${s.title}: ${s.description} (Key Tags: ${s.tags.join(", ")})`
).join("\n")}

=== DEVELOPMENT PROCESS ===
${WORK_PROCESS.map((w) => `${w.step}. ${w.title}: ${w.description}`).join(" -> ")}

=== AVAILABILITY & HIRING ===
Yash is available for full-time roles, freelance projects, technical consulting, and remote web development contracts.
Visitors can use the Contact form on the site or directly email ${PERSONAL_INFO.email} or connect on LinkedIn (${PERSONAL_INFO.linkedIn}).
`;

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "rate_limited",
          message:
            "You are sending messages too quickly. Please pause for a moment and try again in 1 minute.",
        },
        { status: 429 }
      );
    }

    // 2. Server API Key check
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY environment variable is not defined");
      return NextResponse.json(
        {
          error: "api_key_missing",
          message:
            "Groq API key is not configured on the server. Please ensure GROQ_API_KEY is set in the server environment.",
        },
        { status: 500 }
      );
    }

    // 3. Body & Input Validation
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "invalid_json", message: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const { message, history } = body || {};

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        {
          error: "invalid_input",
          message: "Please provide a valid, non-empty message string.",
        },
        { status: 400 }
      );
    }

    // Length limit: max 600 characters per message
    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 600) {
      return NextResponse.json(
        {
          error: "message_too_long",
          message:
            "Message exceeds maximum allowed length of 600 characters. Please shorten your question.",
        },
        { status: 400 }
      );
    }

    // Validate and limit conversation history (max 8 messages)
    const formattedHistory: {
      role: "user" | "assistant";
      content: string;
    }[] = [];

    if (Array.isArray(history)) {
      const recentHistory = history.slice(-8);
      for (const item of recentHistory) {
        if (
          item &&
          typeof item.content === "string" &&
          item.content.trim() &&
          (item.role === "user" || item.role === "assistant" || item.role === "ai")
        ) {
          formattedHistory.push({
            role: item.role === "ai" || item.role === "assistant" ? "assistant" : "user",
            content: item.content.slice(0, 800), // sanitize max length per history item
          });
        }
      }
    }

    // Append current message
    formattedHistory.push({
      role: "user",
      content: trimmedMessage,
    });

    // 4. Initialize Groq SDK on server
    const groq = new Groq({
      apiKey: apiKey,
    });

    const model = process.env.GROQ_MODEL || "qwen/qwen3.8-27b";

    // 5. Call Groq Chat Completions API
    let completion;
    try {
      completion = await groq.chat.completions.create({
        model: model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...formattedHistory,
        ],
        temperature: 0.6,
        max_completion_tokens: 700,
      });
    } catch (modelErr: unknown) {
      const apiErr = modelErr as { status?: number; code?: string; message?: string };
      // Fallback if the requested model is deprecated or not enabled on this specific Groq account tier
      if (apiErr?.status === 404 || apiErr?.code === "model_not_found") {
        console.warn(`Groq model ${model} not accessible. Falling back to qwen/qwen3.8-27b`);
        completion = await groq.chat.completions.create({
          model: "qwen/qwen3.8-27b",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...formattedHistory,
          ],
          temperature: 0.6,
          max_completion_tokens: 700,
        });
      } else {
        throw modelErr;
      }
    }

    const reply =
      completion.choices[0]?.message?.content?.trim() ||
      "I'm sorry, I couldn't generate a response. Please ask again or contact Yash directly.";

    return NextResponse.json({
      success: true,
      reply: reply,
    });
  } catch (error: unknown) {
    console.error("Groq chat API route error:", error);

    // Specific Groq Rate Limit / Quota error handling (429)
    const err = error as { status?: number; statusCode?: number; message?: string; code?: string };
    const status = err?.status || err?.statusCode;
    const isRateLimit =
      status === 429 ||
      err?.code === "rate_limit_exceeded" ||
      (typeof err?.message === "string" && err.message.toLowerCase().includes("rate limit"));

    if (isRateLimit) {
      return NextResponse.json(
        {
          error: "rate_limit_exceeded",
          message:
            "Yash's AI assistant is currently experiencing high demand. Please try again in a few moments, or feel free to reach out directly via the Contact Form!",
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      {
        error: "internal_error",
        message:
          "Unable to process your request at the moment. Please try again later or contact Yash via email.",
      },
      { status: 500 }
    );
  }
}
