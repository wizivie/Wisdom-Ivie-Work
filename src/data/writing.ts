export type Category = "BI Development" | "Agentic AI";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: Category;
  date: string;
  readingTime: string;
};

export const posts: Post[] = [
  {
    slug: "bi-developers-are-already-ai-engineers",
    title: "BI developers are already halfway to AI engineering",
    description:
      "Semantic models, metric definitions and data quality are exactly what agents need. Notes from the first months of an AI Engineer secondment.",
    category: "Agentic AI",
    date: "2026-10-06",
    readingTime: "7 min",
  },
  {
    slug: "star-schemas-still-win",
    title: "Star schemas still win: modelling habits for a durable Power BI estate",
    description:
      "Why the boring shape is the fast shape. Grain, conformed dimensions, and the modelling mistakes that quietly make every report slower and less trustworthy.",
    category: "BI Development",
    date: "2026-09-22",
    readingTime: "8 min",
  },
  {
    slug: "letting-agents-query-your-semantic-model",
    title: "Letting agents query your semantic model safely",
    description:
      "Tool use, MCP and text-to-DAX: how to give an AI agent access to business data without giving up definitions, security or auditability.",
    category: "Agentic AI",
    date: "2026-09-08",
    readingTime: "9 min",
  },
  {
    slug: "dax-your-successor-can-read",
    title: "DAX your successor can read",
    description:
      "Measure naming, variables, display folders and documentation — practical conventions that keep a model understandable after its author moves on.",
    category: "BI Development",
    date: "2026-08-25",
    readingTime: "7 min",
  },
  {
    slug: "evaluating-ai-agents-in-regulated-industries",
    title: "Evaluating AI agents when the regulator is watching",
    description:
      "Accuracy is not enough. Golden datasets, trace review, human-in-the-loop thresholds and what 'good evidence' looks like for agentic AI in insurance.",
    category: "Agentic AI",
    date: "2026-08-11",
    readingTime: "9 min",
  },
  {
    slug: "ship-bi-like-software",
    title: "Ship BI like software: version control, tests and deployment pipelines",
    description:
      "PBIP projects, Git integration, automated checks and promotion between environments — moving a reporting team from 'publish and pray' to repeatable releases.",
    category: "BI Development",
    date: "2026-07-28",
    readingTime: "8 min",
  },
];

export const categories: Category[] = ["BI Development", "Agentic AI"];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
