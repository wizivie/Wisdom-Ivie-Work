export type SkillGroup = { name: string; items: string[] };

// Drawn from Wisdom's LinkedIn roles, skills and certifications; the AI group reflects
// the First Central AI Engineer secondment (Jun 2026).
export const skills: SkillGroup[] = [
  {
    name: "BI & visualisation",
    items: ["Power BI", "DAX", "Power Query", "Power BI Service", "KPI scorecards", "Qlik Sense"],
  },
  {
    name: "Data & analysis",
    items: ["SQL", "SAS", "Data modelling", "Data integration", "Excel & VBA", "Forecasting"],
  },
  {
    name: "Governance & delivery",
    items: [
      "Data governance",
      "Data quality",
      "TCF & regulatory compliance",
      "Requirements gathering",
      "Incident root-cause analysis",
      "Technical documentation",
    ],
  },
  {
    name: "AI engineering",
    items: ["Agentic AI", "Large language models", "Prompt engineering", "AI evaluation", "Responsible AI"],
  },
  {
    name: "Domain",
    items: ["Insurance", "Credit risk", "Collections", "Enterprise billing", "Financial services"],
  },
  {
    name: "Leadership",
    items: ["Stakeholder management", "Senior presentations", "Training & upskilling", "Process improvement"],
  },
];
