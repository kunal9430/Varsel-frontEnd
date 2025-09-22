import { TwitterIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from '../assets/Icons/SocialMediaIcons';
// Export other icons as needed

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FooterData {
  companyName: string;
  copyrightText: string;
  socialLinks: SocialLink[];
  contactInfo: {
    directorEmail: string;
    companyTimings: string;
  };
  websiteBy: string;
}

export const footerData: FooterData = {
  companyName: "Think ERP Solutions",
  copyrightText: "2025 Think ERP Solutions. All Rights Reserved.",
  socialLinks: [
    {
      name: "Twitter",
      href: "#",
      icon: TwitterIcon,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: LinkedInIcon,
    },
    {
      name: "Facebook",
      href: "#",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "#",
      icon: InstagramIcon,
    },
  ],
  contactInfo: {
    directorEmail: "kunalkumarh2003@gmail.com",
    companyTimings: "10:00 AM - 07:00 PM",
  },
  websiteBy: "Website by Think ERP Solutions",
};