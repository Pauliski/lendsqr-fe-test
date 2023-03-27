interface sidebarNavProp {
  icon: string;
  text: string;
  alt: string;
}

export const sidebarNav: sidebarNavProp[] = [
  { icon: "/images/users.svg", text: "Users", alt: "users" },
  { icon: "/images/guarantor.svg", text: "Guarantors", alt: "guarantor" },
  { icon: "/images/loan.svg", text: "Loans", alt: "loan" },
  { icon: "/images/decision.svg", text: "Decision Models", alt: "decision" },
  { icon: "/images/saving.svg", text: "Savings", alt: "saving" },
  { icon: "/images/request.svg", text: "Loan Request", alt: "request" },
  { icon: "/images/whitelist.svg", text: "Whitelist", alt: "whitelist" },
  { icon: "/images/karma.svg", text: "Karma", alt: "karma" },
];

export const businessNav: sidebarNavProp[] = [
  { icon: "/images/switch.svg", text: "Organization", alt: "organization" },
  { icon: "/images/request.svg", text: "Loan Products", alt: "product" },
  { icon: "/images/sproduct.svg", text: "Saving Products", alt: "sproduct" },
  { icon: "/images/fee.svg", text: "Fees and Charges", alt: "fee" },
  { icon: "/images/transact.svg", text: "Transactions", alt: "transact" },
  { icon: "/images/service.svg", text: "Services", alt: "service" },
  { icon: "/images/account.svg", text: "Service Account", alt: "account" },
  { icon: "/images/settle.svg", text: "Settlements", alt: "settle" },
  { icon: "/images/report.svg", text: "Reports", alt: "report" },
];

export const settingsNav: sidebarNavProp[] = [
  { icon: "/images/preference.svg", text: "Preferences", alt: "preferences" },
  { icon: "/images/pricing.svg", text: "Fees and Pricing", alt: "pricing" },
  { icon: "/images/audit.svg", text: "Audit Logs", alt: "audit" },
];

export const cardDetails = [
  {
    icon: "/images/user.svg",
    text: "USERS",
    alt: "user",
    value: "2,453",
  },
  {
    icon: "/images/active.svg",
    text: "Active Users",
    alt: "active",
    value: "2,453",
  },
  {
    icon: "/images/loanuser.svg",
    text: "Users with Loans",
    alt: "loan",
    value: "12,453",
  },
  {
    icon: "/images/save.svg",
    text: "Users with Savings",
    alt: "save",
    value: "102,453",
  },
];

export const userTableHeader = [
  "organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

export const userTableHead = [
  {
    text: "organization",
    isActive: false,
  },
  {
    text: "Username",
    isActive: false,
  },
  {
    text: "Email",
    isActive: false,
  },
  {
    text: "Phone number",
    isActive: false,
  },
  {
    text: "Date joined",
    isActive: false,
  },
  {
    text: "Status",
    isActive: false,
  },
];

export const detailsPages = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export const statusArray = ["Active", "Inactive", "Pending", "Blacklist"];

export const filterObject = {
  organization: "",
  userName: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: "",
};

export const filterSelectObject = {
  orgName: "",
  status: "",
};
