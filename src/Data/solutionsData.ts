import { 
  FinancialIcon, 
  SupplyChainIcon, 
  HumanResourcesIcon, 
  CRMIcon, 
  AnalyticsIcon, 
  ProductionIcon 
} from '../assets/Icons/solutionsIcons';

export interface Solution {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const solutionsData: Solution[] = [
  {
    id: 1,
    title: "Financial Management",
    description: "Centralize accounting, manage cash flow, and generate real-time financial reports for better control and compliance.",
    color: "text-green-500",
    icon: FinancialIcon
  },
  {
    id: 2,
    title: "Supply Chain Management",
    description: "Optimize inventory, logistics, and order management for a smooth, efficient supply chain.",
    color: "text-orange-500",
    icon: SupplyChainIcon
  },
  {
    id: 3,
    title: "Human Resources",
    description: "Manage your workforce effectively with integrated payroll, employee data, and talent management features.",
    color: "text-yellow-500",
    icon: HumanResourcesIcon
  },
  {
    id: 4,
    title: "Customer Relationship Management",
    description: "Nurture customer relationships, manage sales pipelines, and improve service with a unified client view.",
    color: "text-blue-500",
    icon: CRMIcon
  },
  {
    id: 5,
    title: "Business Intelligence & Analytics",
    description: "Turn raw data into actionable insights with powerful dashboards and reports for smarter decisions.",
    color: "text-blue-500",
    icon: AnalyticsIcon
  },
  {
    id: 6,
    title: "Production Control",
    description: "Monitor and control manufacturing operations for efficiency, compliance, and high-quality output.",
    color: "text-purple-500",
    icon: ProductionIcon
  }
];