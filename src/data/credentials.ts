export type Education = { institution: string; qualification: string; detail?: string; period?: string };
export type Certification = { name: string; issuer: string; issued: string; credentialId?: string };

export const education: Education[] = [
  {
    institution: "BCS, The Chartered Institute for IT",
    qualification: "Level 4 Data Analyst",
    detail: "Merit",
  },
  {
    institution: "University of Derby",
    qualification: "Bachelor of Laws",
    period: "2012 – 2015",
  },
];

// Newest first.
export const certifications: Certification[] = [
  { name: "Data Modeling in Power BI", issuer: "Microsoft", issued: "Aug 2026", credentialId: "VLQMX1CVV0MI" },
  { name: "Extract, Transform and Load Data in Power BI", issuer: "Microsoft", issued: "Jul 2026", credentialId: "83F2LAW13AGF" },
  { name: "Harnessing the Power of Data with Power BI", issuer: "Microsoft", issued: "May 2026", credentialId: "1L7L8020M94B" },
  { name: "Preparing Data for Analysis with Microsoft Excel", issuer: "Microsoft", issued: "Mar 2026", credentialId: "GDU4M17M69ZE" },
  { name: "Qlik Sense Essential Training", issuer: "LinkedIn Learning · Nathanial Bibby", issued: "May 2023" },
  { name: "Decoded Data Academy Certified", issuer: "Decoded", issued: "Mar 2023" },
  { name: "Power BI Advanced", issuer: "Acuity Training", issued: "Feb 2023", credentialId: "TC021954-35676" },
  { name: "SAS® 9.4 Cert Prep: Part 02 Accessing Data", issuer: "LinkedIn Learning · Nathanial Bibby", issued: "Apr 2022" },
  { name: "SAS® 9.4 Cert Prep: Part 01 SAS Programming Essentials", issuer: "LinkedIn Learning · Nathanial Bibby", issued: "Apr 2022" },
];
