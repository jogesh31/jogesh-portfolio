/* ============================================================================
   PORTFOLIO CONTENT CONFIG — Jogesh Kumar Sharma
   ----------------------------------------------------------------------------
   Every string, list and link the site renders lives here. Sourced from his
   2026 résumé and his GitHub (github.com/jogesh31). Edit this one file to
   change the site.
   ============================================================================ */

import type { LucideIcon } from "lucide-react";
import {
  BarChart3, Database, Workflow, Github, Linkedin, Mail, Phone,
  Terminal, LayoutTemplate, GraduationCap, Award, Snowflake,
  Building2, ScanSearch, Boxes, Sparkles,
} from "lucide-react";

/* --------------------------------- Identity -------------------------------- */
export const PROFILE = {
  name: "Jogesh Kumar Sharma",
  firstName: "Jogesh",
  lastName: "Sharma",
  roles: [
    "Data Analyst",
    "Power BI Developer",
    "BI Tool Builder",
    "PL-300 Certified (2×)",
  ],
  tagline:
    "PL-300 certified Data Analyst with 5+ years turning 20M+ record datasets into executive dashboards, automated reporting, and the developer tools that make BI teams faster.",
  headline:
    "Microsoft PL-300 Certified Power BI Data Analyst | SQL | Advanced Excel | Snowflake | Python | ETL | Power Automate | Claude AI",
  location: "Chandigarh, India",
  availability: "Open to Data Analyst / Power BI roles",
  email: "jogeshkumar3112@gmail.com",
  phone: "+91 79867 97829",
  resumeUrl: "/resume.pdf",
} as const;

export const NAV_LINKS: { id: string; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "tools", label: "AI Tools" },
  { id: "work", label: "Projects" },
];

/* --------------------------------- Metrics --------------------------------- */
export type Metric = { value: string; label: string };
export const METRICS: Metric[] = [
  { value: "5+", label: "Years in analytics" },
  { value: "20M+", label: "Records per dataset" },
  { value: "2×", label: "PL-300 certified" },
];

/* ---------------------------------- Tools ---------------------------------- */
export type Tool = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  icon: LucideIcon;
  accent: "azure" | "glacier" | "gold";
  links: { demo?: string; github?: string };
  flagship?: boolean;
};

export const TOOLS: Tool[] = [
  {
    id: "dax-slayer",
    name: "DAX Slayer",
    tagline: "A Power BI external tool that finds dead DAX — and deletes it safely.",
    description:
      "Scans a Power BI model's dependency graph to find unused DAX, shows the blast radius before deleting, and cleans up safely with an automatic backup before every write. Runs 100% locally — no AI API, no external calls.",
    features: [
      "Full dependency graph via a real DAX tokenizer, not regex",
      "Shows the blast radius of a deletion before you commit",
      "Automatic .bim backup before every write — fully reversible",
      "Offline DAX assistant: explain, format, autocomplete",
    ],
    stack: ["Python", "TOM / XMLA", "Power BI External Tool", "Local server"],
    icon: ScanSearch,
    accent: "azure",
    links: { github: "https://github.com/jogesh31/DAX-Slayer" },
    flagship: true,
  },
  {
    id: "wireframe-builder",
    name: "Dashboard Wireframe Builder",
    tagline: "Design a Power BI report layout before a single measure is written.",
    description:
      "A browser-based wireframing tool with a Power BI-style catalog of 65+ visual types. Managers structure dashboard pages; analysts build from the wireframe as the spec. Adopted by Product Delivery Managers, cutting design-to-delivery time by ~38%.",
    features: [
      "65+ Power BI-style visual, filter and container types",
      "Wireframe-as-spec, with comments and data schema attached",
      "Auto-saves; exports .wfd.json / PDF / JPG",
    ],
    stack: ["JavaScript (ES modules)", "IndexedDB", "Canvas / export"],
    icon: LayoutTemplate,
    accent: "glacier",
    links: {
      demo: "https://dashboard-wireframe.onrender.com/",
      github: "https://github.com/jogesh31/Dashboard-Wireframe",
    },
  },
  {
    id: "pl300-quiz",
    name: "PL-300 Quiz",
    tagline: "An adaptive prep platform for the Power BI Data Analyst exam.",
    description:
      "An adaptive PL-300 prep platform — quizzes re-weight toward weak areas, every answer comes with an explanation, and progress carries across sessions.",
    features: [
      "Adaptive quizzing that re-weights toward weak areas",
      "Explanations on every answer, not just right/wrong",
    ],
    stack: ["Web app", "Adaptive logic"],
    icon: GraduationCap,
    accent: "gold",
    links: { demo: "https://powerbi-quiz.onrender.com/" },
  },
];

/* ------------------------- Dashboards / work gallery ----------------------- */
export type Work = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  repo: string;
  icon: LucideIcon;
  images?: string[];
};

export const WORK: Work[] = [
  {
    id: "student-outcomes",
    title: "Student Learning Outcomes Monitor",
    blurb: "Government education monitoring — attendance and outcome tracking across state programs, flagging schools below the 70% attendance threshold.",
    tags: ["Power BI", "GovTech", "DAX"],
    repo: "https://github.com/jogesh31/Student-Learning-Outcomes-Monitoring-Dashboard",
    icon: BarChart3,
    images: [
      "/dashboards/student-outcomes/page-1.png",
      "/dashboards/student-outcomes/page-2.png",
      "/dashboards/student-outcomes/page-3.png",
    ],
  },
  {
    id: "jcbl",
    title: "JCBL Group — Operational Dashboard",
    blurb: "Operational KPI cockpit consolidating performance across an enterprise group.",
    tags: ["Power BI", "Operations"],
    repo: "https://github.com/jogesh31/JCBL-Group---Operational-Dashboard",
    icon: Building2,
    images: [
      "/dashboards/jcbl/overview.jpg",
      "/dashboards/jcbl/production-summary.jpg",
      "/dashboards/jcbl/detailed-view.jpg",
    ],
  },
  {
    id: "workforce",
    title: "Workforce & Attrition Analysis",
    blurb: "HR analytics on headcount, attrition drivers and workforce trends.",
    tags: ["Power BI", "HR analytics"],
    repo: "https://github.com/jogesh31/Workforce-and-Attrition-Analysis",
    icon: Boxes,
    images: [
      "/dashboards/workforce/page-1.png",
      "/dashboards/workforce/page-2.png",
      "/dashboards/workforce/page-3.png",
    ],
  },
];

/* -------------------------------- Experience ------------------------------- */
export type Job = {
  id: string;
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
};

export const EXPERIENCE: Job[] = [
  {
    id: "convegenius",
    role: "Data Analyst",
    org: "ConveGenius.ai",
    location: "Shimla, Himachal Pradesh",
    period: "Apr 2025 — Present",
    points: [
      "Transformed and analyzed 20M+ records per dataset across Government of Himachal Pradesh, Gujarat, Telangana and Sikkim education programs.",
      "Built executive Power BI dashboards and KPI frameworks used by IAS officers, State Project Directors and senior government stakeholders to drive policy decisions.",
      "Designed a Power BI Wireframe Builder adopted by Product Delivery Managers — reduced dashboard design-to-delivery cycle time by ~38%.",
      "Built a Government Finance & Contracts dashboard over 12+ state contracts, cutting reconciliation effort by 27%.",
      "Shipped a School Attendance dashboard whose interventions lifted average attendance by 22% across underperforming schools in two quarters.",
      "Mentored 4 junior analysts on Power BI best practices and AI-assisted development, cutting average report load times by 35%.",
    ],
    tags: ["Power BI", "DAX", "GovTech", "Mentoring"],
  },
  {
    id: "knack",
    role: "Business Analyst",
    org: "Knack RCM",
    location: "Mohali, Punjab",
    period: "Nov 2024 — Present",
    points: [
      "Partnered with the Senior Director (National Distribution & Contracting Inc.) to turn requirements into SQL Server queries and Power BI dashboards for CEO and vendor-client decisions.",
      "Built Sales Trackers, Daily Performance Metrics and Distributor Query Status dashboards — cut manual reporting time by 40%.",
      "Automated recurring reporting with VBA, Power Automate and DOMO ETL — 60% efficiency gain, 75% less manual processing.",
      "Migrated MS Access reports to SQL Server and SSRS, reducing refresh issues by 35%.",
    ],
    tags: ["SQL Server", "Power BI", "Power Automate", "SSRS"],
  },
  {
    id: "bolster",
    role: "Medical Analyst",
    org: "Bolster Legal Services",
    location: "Bangalore, Karnataka",
    period: "Dec 2022 — Oct 2024",
    points: [
      "Extracted and analyzed medical data for Jacoby & Meyers and the Law Offices of Larry H. Parker — delivered 70+ reports under strict deadlines.",
      "Used advanced Excel, PivotTables and Power BI on accidental-injury datasets, improving reporting accuracy by 40%.",
      "Built Power BI funnel dashboards tracking case progression (intake → settlement) and mentored 10+ interns.",
    ],
    tags: ["Power BI", "Excel", "Legal analytics"],
  },
  {
    id: "parexel",
    role: "Drug Safety Associate II",
    org: "Parexel International",
    location: "Mohali, Punjab",
    period: "Jan 2022 — Dec 2022",
    points: [
      "Built a pharmacovigilance case-tracking dashboard for workload and TAT-vs-SLA monitoring — cut assignment delays by ~25%.",
      "Delivered 100+ reports for Novartis surfacing actionable trends.",
      "Built a team-performance tracker and executive summaries of monthly case volumes.",
    ],
    tags: ["Dashboards", "Pharma", "SLA / TAT"],
  },
  {
    id: "learnify",
    role: "Junior Associate",
    org: "TransWeb Educational Services (Learnify)",
    location: "Noida, Uttar Pradesh",
    period: "Jan 2021 — Jan 2022",
    points: [
      "Resolved financial discrepancies and managed PayPal / Stripe disputes in Excel, improving data accuracy via Google Sheets.",
      "Trained and supervised 5+ interns on data-management and analysis tasks.",
    ],
    tags: ["Excel", "Data quality"],
  },
];

/* ------------------------------- Skill groups ------------------------------ */
export type SkillGroup = { key: string; title: string; icon: LucideIcon; skills: string[] };
export const SKILLS: SkillGroup[] = [
  {
    key: "bi",
    title: "BI & Reporting",
    icon: BarChart3,
    skills: ["Power BI", "DAX", "Power Query", "Data Modeling", "RLS", "Dataflows", "Tableau", "SSRS", "Advanced Excel", "Python (Pandas, Matplotlib)"],
  },
  {
    key: "data",
    title: "Databases & Warehousing",
    icon: Database,
    skills: ["SQL Server", "Azure SQL Database", "Snowflake", "Microsoft Fabric", "BigQuery", "MS Access"],
  },
  {
    key: "automation",
    title: "Integration & Automation",
    icon: Workflow,
    skills: ["Azure Data Factory", "Power Automate", "VBA", "DOMO", "Alteryx"],
  },
];

/* --------------------------- Education & credentials ----------------------- */
export type Edu = { id: string; title: string; org: string; period: string };
export const EDUCATION: Edu[] = [
  { id: "msc", title: "M.Sc. Bioinformatics", org: "GGDSD College, Panjab University, Chandigarh", period: "2018 — 2020" },
  { id: "bsc", title: "B.Sc. Biotechnology (Hons.)", org: "PG Government College, Panjab University, Chandigarh", period: "2015 — 2018" },
];

export type Credential = { id: string; name: string; issuer: string; note: string; icon: LucideIcon };
export const CREDENTIALS: Credential[] = [
  { id: "pl300", name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", note: "Earned 2×· renewed Dec 2025", icon: Award },
  { id: "star", name: "Star Performer (2×)", issuer: "Bolster Legal", note: "Excellence in analysis & reporting", icon: Sparkles },
  { id: "quarterly", name: "Quarterly Performer", issuer: "Learnify", note: "Process improvement & strategic insight", icon: Award },
];

export const SUMMARY =
  "PL-300 certified Data Analyst based in Chandigarh with 5+ years owning BI end to end — from requirements with senior leadership (IAS officers, State Project Directors, CEOs) to deployed dashboards and automated reporting. Background in bioinformatics, which built the discipline to stay rigorous with messy, high-volume data — today that means turning 20M+ record datasets into executive dashboards, and building the developer tools (DAX Slayer, Dashboard Wireframe Builder) that make BI teams faster.";

export const CONTACT_METHODS: { label: string; value: string; href: string; icon: LucideIcon }[] = [
  { label: "Email", value: "jogeshkumar3112@gmail.com", href: "mailto:jogeshkumar3112@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 79867 97829", href: "tel:+917986797829", icon: Phone },
  { label: "LinkedIn", value: "in/jogeshkumarsharma", href: "https://www.linkedin.com/in/jogeshkumarsharma/", icon: Linkedin },
  { label: "GitHub", value: "github.com/jogesh31", href: "https://github.com/jogesh31", icon: Github },
];

export const BRAND = { mark: Snowflake, wordmark: "Portfolio - Data Analyst", terminalIcon: Terminal };
