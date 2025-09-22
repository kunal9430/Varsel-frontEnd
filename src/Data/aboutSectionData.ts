export interface StatsData {
  id: number;
  value: string;
  label: string;
  color: string;
}

export interface SlidingBoxData {
  id: number;
  title: string;
  description: string;
  color: string;
}

export interface TestimonialData {
  id: number;
  text: string;
  author: string;
  position: string;
  initials: string;
  bgColor: string;
}

export const statsData: StatsData[] = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    color: "text-[#2563EB]"
  },
  {
    id: 2,
    value: "12+",
    label: "Team members",
    color: "text-[#10B981]"
  },
  {
    id: 3,
    value: "10+",
    label: "Projects Completed",
    color: "text-[#F59E0B]"
  },
  {
    id: 4,
    value: "98%",
    label: "Client Retention",
    color: "text-[#8B5CF6]"
  }
];

export const slidingBoxesData: SlidingBoxData[] = [
  {
    id: 1,
    title: "Expertise You Can Trust",
    description: "Our team consists of certified Microsoft Dynamics 365 experts with an average of 8+ years of experience in ERP implementations across various industries.",
    color: "text-[#2563EB]"
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all approaches. Every solution we deliver is customized to address your specific business challenges and goals.",
    color: "text-[#10B981]"
  },
  {
    id: 3,
    title: "End-to-End Support",
    description: "From initial consultation to post-implementation support, we're with you at every step of your digital transformation journey.",
    color: "text-[#F59E0B]"
  },
  {
    id: 4,
    title: "Proven Methodology",
    description: "Our implementation methodology ensures projects are delivered on time and within budget, with minimal disruption to your operations.",
    color: "text-[#8B5CF6]"
  }
];

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    text: "\"Think ERP Solutions transformed our business operations with their D365 implementation and increased efficiency by 40% within the first quarter post-implementation.\"",
    author: "John Davidson",
    position: "COO, Manufacturing Solutions Inc.",
    initials: "JD",
    bgColor: "bg-[#2563EB]"
  },
  {
    id: 2,
    text: "\"The migration from our legacy system was seamless thanks to the Think ERP Solutions team. Their expertise and support throughout the process were exceptional.\"",
    author: "Sarah Reynolds",
    position: "IT Director, Retail Chain Corp",
    initials: "SR",
    bgColor: "bg-[#10B981]"
  },
  {
    id: 3,
    text: "\"We have been working with Think ERP for over 3 years now, and the experience has been excellent. Their continuous support and commitment to improving system is major factor for our business growth.\"",
    author: "Michael Kwon",
    position: "Finance Director, Global Logistics Ltd",
    initials: "MK",
    bgColor: "bg-[#F59E0B]"
  }
];