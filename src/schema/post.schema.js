import { z } from 'zod';

const contentSchema = z.union([
  z
    .string()
    .trim()
    .min(5, "Content must be at least 5 characters")
    .max(2000000, "Content must be at most 2,000,000 characters"),
  z.record(
    z.record(z.any()) // You can replace z.any() with a more specific structure if needed
  )
]);

const metaSchema = z.object({
  title: z.string().trim().min(1, "Meta title is required"),
  slug: z.string().trim().min(1, "Meta slug is required"),
  description: z.string().trim().min(1, "Meta description is required"),
  keywords: z.string().trim(), // Assumes comma-separated tags as a string
  ogTitle: z.string().trim(),
  ogDescription: z.string().trim(),
  ogImage: z.string().url({ message: "OG image must be a valid URL" }),
  twitterCard: z.enum(["summary", "summary_large_image", "app", "player"]),
  twitterCreator: z.string().optional(),
  noIndex: z.boolean(),
  noFollow: z.boolean(),
  datePublished: z.string().nullable(), // Should be ISO string or null
  dateModified: z.string(),             // Must be ISO string
  authorName: z.string().trim(),
  publisherName: z.string().url({ message: "Publisher name must be a valid URL" }),
  publisherLogo: z.string().url({ message: "Publisher logo must be a valid URL" }),
  focusKeyword: z.string().trim()
});

export const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be at most 200 characters"),

  slug: z
    .string()
    .trim()
    .min(5, "Slug must be at least 5 characters")
    .max(200, "Slug must be at most 200 characters"),

  description: z
    .string()
    .trim()
    .min(5, "Description must be at least 5 characters")
    .max(20000, "Description must be at most 20,000 characters"),

  content: contentSchema,

  tag: z
    .string()
    .trim()
    .min(1, "Tag is required"),

  selectedCategories: z
    .array(z.string().trim().min(1, "Category can't be empty"))
    .min(1, "At least one category is required"),

  uploadedUrl: z
    .string()
    .url("Uploaded URL must be a valid URL"),

  status: z.enum(["draft", "published"]),

  meta: metaSchema
});
