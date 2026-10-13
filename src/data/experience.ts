// Sourced from Wisdom's LinkedIn profile (Oct 2026), plus the AI Engineer secondment
// at First Central that started in June 2026. The site shows the first `siteBullets`
// bullets per role; the CV shows them all.
export type Role = {
  title: string;
  period: string;
  location?: string;
  tag?: string;
  bullets: string[];
};

export type Employer = {
  company: string;
  sector: string;
  period: string;
  location: string;
  roles: Role[];
};

export const siteBullets = 3;

export const experience: Employer[] = [
  {
    company: "First Central",
    sector: "Insurance",
    period: "Jan 2024 – Present",
    location: "Manchester Area, UK · Remote",
    roles: [
      {
        title: "AI Engineer",
        tag: "Secondment",
        period: "Jun 2026 – Present",
        bullets: [
          "Seconded into AI engineering alongside the BI Developer role, bringing data-modelling, data-quality and governance expertise into AI initiatives.",
          "Exploring agentic AI patterns that ground large language models in governed, well-defined business data.",
          "Contributing to evaluation, guardrails and responsible-AI practice suited to a regulated insurance environment.",
        ],
      },
      {
        title: "Business Intelligence Developer",
        period: "Jan 2024 – Present",
        bullets: [
          "Deliver timely, accurate information, reports and Power BI dashboards that underpin management decision-making.",
          "Develop and maintain SAS and SQL queries and Power BI dashboards, and help design system data models, data integrations and automated data-management solutions.",
          "Partner with business teams on requirements gathering and live reporting issues, helping identify root causes and solutions for major incidents.",
          "Operate within the Data Governance and Data Quality frameworks, ensuring compliance with company standards and regulation, including Treating Customers Fairly (TCF).",
          "Monitor data and reporting platform performance, recommend BI improvements, maintain technical documentation and work effectively with third-party providers.",
        ],
      },
    ],
  },
  {
    company: "Vodafone",
    sector: "Telecommunications",
    period: "Mar 2018 – Nov 2023",
    location: "United Kingdom",
    roles: [
      {
        title: "Credit Risk Visualisation Analyst",
        period: "Mar 2022 – Nov 2023",
        bullets: [
          "Unearthed insights from credit risk and collections data to identify opportunities and improve decision-making.",
          "Built visual reports, dashboards and KPI scorecards in Power BI, from source connections and data transformation through to DAX measures, columns and tables.",
          "Presented consumer-centric reports to senior stakeholders, including Heads of and Directors, and managed scheduled reports and datasets in the Power BI Service.",
        ],
      },
      {
        title: "Credit Analyst",
        period: "Mar 2022 – Nov 2023",
        bullets: [
          "Automated routine Excel processes with VBA, saving 40+ hours of manual work a day (4 hours each for 10 colleagues).",
          "Built Excel forecast models (FORECAST, TREND) with dynamic charts that update as new data arrives.",
          "Created Excel dashboards aggregating key information for senior stakeholders.",
        ],
      },
      {
        title: "Billing & Operations Specialist",
        period: "Apr 2019 – Mar 2022",
        location: "Manchester",
        bullets: [
          "Managed critical long-term relationships with large enterprise customers, many of them FTSE 100 companies.",
          "Ensured accurate, timely production of ad-hoc project invoices; ran stakeholder workshops on invoice pain points and worked with service managers to define project scope.",
          "Recommended process efficiencies against best practice and created controls to mitigate customer risk.",
          "Rolled out and promoted a SharePoint site for the entire Enterprise Billing estate.",
        ],
      },
      {
        title: "Billing Analyst",
        period: "Apr 2019 – Mar 2022",
        bullets: [
          "Built an Excel data-retrieval model and dashboard to aggregate and visualise combined reports.",
          "Produced pivot tables, charts and KPI dashboards on sales and marketing data for divisional heads.",
        ],
      },
      {
        title: "Credit Collection Specialist",
        period: "Jul 2018 – Apr 2019",
        bullets: [
          "Designed and implemented the communication strategy to migrate 80+ agents’ data — thousands of gigabytes — from shared drives to OneDrive.",
          "Designed a call-statistics reporting model that analysed agent calling behaviour and automated insight into agent performance versus outbound activity.",
          "Onboarded and managed a team of temporary offshore agents for two months.",
        ],
      },
      {
        title: "Credit Controller",
        period: "Mar 2018 – Apr 2019",
        bullets: [
          "Managed a client ledger worth up to £9 million per month within regulatory frameworks, driving collections and cash realisation.",
          "Built strong stakeholder relationships across internal departments and directly with customers.",
        ],
      },
    ],
  },
  {
    company: "Moorcroft Debt Recovery Limited",
    sector: "Financial services",
    period: "Sep 2015 – Mar 2018",
    location: "Manchester Area, UK",
    roles: [
      {
        title: "Training Manager",
        period: "Jun 2017 – Mar 2018",
        bullets: [
          "Promoted for performance excellence to lead the training and upskilling of new and existing staff, creating best-practice documentation and scripts and presenting to wider agent groups.",
          "Recognised as the top case reviewer, contributing significantly to operational excellence across the contact centre.",
        ],
      },
      {
        title: "Collections Specialist",
        period: "Sep 2015 – Jun 2017",
        bullets: [
          "Achieved 85% payment-plan adherence by negotiating tailored repayment solutions, and reduced plan failures by 30% by proactively adjusting arrangements.",
          "Managed an active caseload of 120+ client accounts totalling $650K, running income and expenditure assessments for 100+ clients a month to build sustainable payment plans.",
        ],
      },
    ],
  },
];
