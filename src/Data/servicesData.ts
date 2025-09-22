import { 
  ImplementationIcon, 
  CustomizationIcon, 
  SupportIcon, 
  IntegrationIcon, 
  MigrationIcon, 
  ConsultingIcon 
} from '../assets/Icons/servicesIcons';

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
  features: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Implementation",
    description: "End-to-end implementation of Dynamics 365 tailored to your specific business processes and requirements.",
    bgColor: "bg-blue-900",
    iconColor: "text-blue-400",
    features: ["Requirements analysis", "System configuration", "Data migration", "User training"],
    icon: ImplementationIcon
  },
  {
    id: 2,
    title: "Customization",
    description: "Extend and customize Dynamics 365 to meet your unique business needs with tailored solutions.",
    bgColor: "bg-purple-900",
    iconColor: "text-purple-400",
    features: ["Custom workflows", "UI modifications", "Integration development", "Custom reporting"],
    icon: CustomizationIcon
  },
  {
    id: 3,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance services to keep your system running smoothly and efficiently.",
    bgColor: "bg-green-900",
    iconColor: "text-green-400",
    features: ["24/7 technical support", "Regular system updates", "Performance optimization", "Troubleshooting & bug fixes"],
    icon: SupportIcon
  },
  {
    id: 4,
    title: "Integration Services",
    description: "Seamlessly connect Dynamics 365 with your existing systems and third-party applications.",
    bgColor: "bg-orange-900",
    iconColor: "text-orange-400",
    features: ["API development", "Third-party integrations", "Data synchronization", "Legacy system integration"],
    icon: IntegrationIcon
  },
  {
    id: 5,
    title: "Migration Services",
    description: "Smooth transition from legacy systems to Dynamics 365 with minimal business disruption.",
    bgColor: "bg-pink-900",
    iconColor: "text-pink-400",
    features: ["Data assessment", "Migration planning", "Data cleansing", "Post-migration validation"],
    icon: MigrationIcon
  },
  {
    id: 6,
    title: "Consulting",
    description: "Strategic guidance to optimize your business processes with Dynamics 365.",
    bgColor: "bg-teal-900",
    iconColor: "text-teal-400",
    features: ["Business process review", "Solution architecture", "Best practices guidance", "ROI analysis"],
    icon: ConsultingIcon
  }
];