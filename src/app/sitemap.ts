import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...siteConfig.services.map((service) => ({
      url: `${siteConfig.url}${service.path}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
