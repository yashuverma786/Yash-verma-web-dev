"use client";

import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { MessageSquare, X, Send, Sparkles, Trash2 } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
  isError?: boolean;
};

const SUGGESTED_QUESTIONS = [
  "What technologies does Yash know?",
  "Tell me about Yash's experience",
  "What projects has Yash worked on?",
  "Is Yash available for work?",
];

function FormattedMessage({ content, isUser }: { content: string; isUser: boolean }) {
  if (isUser) {
    return <span className="whitespace-pre-wrap">{content}</span>;
  }

  // 1. Fix detached bullet dashes: merge lines where a bullet is alone on a line
  const rawLines = content.split(/\r?\n/);
  const normalizedLines: string[] = [];

  for (let i = 0; i < rawLines.length; i++) {
    const trimmed = rawLines[i].trim();
    // If line is just a bullet marker (- or * or •) and there is a next line
    if ((trimmed === "-" || trimmed === "*" || trimmed === "•") && i + 1 < rawLines.length) {
      normalizedLines.push(`- ${rawLines[i + 1].trim()}`);
      i++; // skip next line as it's merged
    } else {
      normalizedLines.push(rawLines[i]);
    }
  }

  // Inline token renderer for bold, links, raw URLs
  const renderInline = (text: string) => {
    // Pattern matches: [label](url), **bold**, or raw URLs
    const pattern = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(\*\*([^*]+)\*\*)|(https?:\/\/[^\s]+)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let keyIdx = 0;

    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1]) {
        // [label](url)
        const label = match[2];
        const url = match[3];
        parts.push(
          <a
            key={keyIdx++}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2 hover:opacity-80 break-all"
          >
            {label}
          </a>
        );
      } else if (match[4]) {
        // **bold**
        const boldText = match[5];
        parts.push(
          <strong key={keyIdx++} className="font-semibold text-slate-900 dark:text-white">
            {boldText}
          </strong>
        );
      } else if (match[6]) {
        // raw URL
        const rawUrl = match[6];
        parts.push(
          <a
            key={keyIdx++}
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2 hover:opacity-80 break-all"
          >
            {rawUrl}
          </a>
        );
      }

      lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const blocks: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push(
        <ul key={`list-${blocks.length}`} className="my-2 space-y-1.5 pl-0.5">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  normalizedLines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Check for bullet or numbered list
    const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/) || trimmed.match(/^\d+\.\s+(.*)$/);

    if (bulletMatch) {
      const itemText = bulletMatch[1];
      currentList.push(
        <li key={`li-${idx}`} className="flex items-start space-x-2 text-xs sm:text-sm">
          <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 select-none text-xs">●</span>
          <span className="flex-1 leading-relaxed">{renderInline(itemText)}</span>
        </li>
      );
    } else if (trimmed === "") {
      flushList();
      if (blocks.length > 0 && idx < normalizedLines.length - 1) {
        blocks.push(<div key={`space-${idx}`} className="h-1.5" />);
      }
    } else {
      flushList();
      blocks.push(
        <p key={`p-${idx}`} className="leading-relaxed text-xs sm:text-sm">
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return <div className="space-y-1">{blocks}</div>;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content:
        "Hi! I'm Yash's AI assistant. Ask me about his experience, skills, projects, or technologies.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    // Prepare conversation history for context (exclude initial greeting and error messages)
    const conversationHistory = messages
      .filter((m) => m.id !== "1" && !m.isError)
      .map((m) => ({
        role: m.role === "ai" ? ("assistant" as const) : ("user" as const),
        content: m.content,
      }));

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history: conversationHistory,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        const errorMessage =
          data?.message ||
          "I'm currently unable to answer. Please try again or reach out to Yash directly!";
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            content: errorMessage,
            isError: true,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "ai",
            content: data.reply,
          },
        ]);
      }
    } catch (err) {
      console.error("Chatbot request error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content:
            "A network error occurred while connecting to Yash's AI. Please try again.",
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        role: "ai",
        content:
          "Hi! I'm Yash's AI assistant. Ask me about his experience, skills, projects, or technologies.",
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 dark:bg-emerald-500 text-white shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-label="Open AI Chat"
        >
          <div className="absolute inset-0 rounded-full bg-slate-900 dark:bg-emerald-500 animate-pulse-slow opacity-50" />
          <MessageSquare className="w-6 h-6 relative z-10" />
          <Sparkles className="w-4 h-4 absolute top-2 right-2 text-amber-300 z-10" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-none">
                Ask Yash&apos;s AI
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                AI assistant for Yash&apos;s portfolio
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={clearChat}
              title="Clear Chat"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === "user"
                    ? "bg-slate-900 dark:bg-emerald-500 text-white rounded-tr-sm"
                    : msg.isError
                    ? "bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/80 rounded-tl-sm"
                    : "bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 rounded-tl-sm border border-slate-200/60 dark:border-slate-800/60"
                }`}
              >
                <FormattedMessage content={msg.content} isUser={msg.role === "user"} />
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="flex flex-col gap-2 mt-4 animate-fade-in">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium px-1">
                Suggested questions:
              </p>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-left text-sm px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center space-x-1.5 shadow-sm">
                <div
                  className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <div
                  className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-950/50 rounded-b-2xl">
          <form onSubmit={onSubmit} className="relative flex items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="w-full max-h-32 min-h-[52px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-xl pl-4 pr-12 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none scrollbar-thin"
              rows={1}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 bottom-2 p-2 rounded-lg bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-600 text-white disabled:opacity-50 disabled:hover:bg-slate-900 dark:disabled:hover:bg-emerald-500 transition-colors focus:outline-none"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              Press Enter to send, Shift + Enter for new line
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
