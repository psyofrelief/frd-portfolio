export interface ProjectItemData {
  id: string;
  idx: number;
  name: string;
  shortDesc: string;
  type: string;
  year: string;
  source: string | null;
  website: string;
  paragraph1: string;
  paragraph2: string;
  aspect: string;
  coverImg: string;
  coverImgMobile: string;
  gallerySrc: string;
  techStack: string[];
  className?: string;
  featured?: boolean;
}

export const projectItems: ProjectItemData[] = [
  {
    id: "scantek",
    idx: 1,
    name: "Scantek",
    shortDesc: "Digital Identity Verification",
    type: "Corporate Website",
    year: "2025",
    source: null,
    website: "scantek.com",
    paragraph1:
      "Scantek, a leading Australian identity verification company, came to me with an unfinished site left by a previous agency. It had major accessibility issues, broken sections, and inconsistent design. My role was to clean up the build, improve usability, and ensure everything functioned properly without disrupting their existing visual identity.",
    paragraph2:
      "Worked within strict brand guidelines to unify design elements across the site, improve accessibility (WCAG compliance), and address contrast issues. The site, built on WordPress with Elementor, required careful adjustments to preserve templates and structure. Fixed HubSpot integrations, restored carousel functionality, and patched responsive layout issues. Updated outdated plugins to address security flaws and tested thoroughly across desktop, tablet, and mobile devices.",
    aspect: "4/3",
    coverImg: "/images/projects/scantek/cover.webp",
    coverImgMobile: "/images/projects/scantek/cover-mobile.webp",
    gallerySrc: "/images/projects/scantek/gallery",
    techStack: ["WordPress", "Elementor", "CSS"],
    featured: true,
  },

  {
    id: "prekoda",
    idx: 2,
    name: "Prekoda",
    shortDesc: "Creative Web & Branding Agency",
    type: "Digital Agency",
    year: "2025",
    source: null,
    website: "prekoda.com",
    paragraph1:
      "Prekoda is a creative web and branding studio I founded to help businesses build fast, functional, and memorable digital experiences. The focus spans full-stack web development, digital branding, and scalable product design—tailored specifically for startups, ecommerce, and service-based businesses.",
    paragraph2:
      "I handle everything in-house, from initial strategy to deployment - ensuring each project meets both creative and technical goals. The studio runs on a modern stack including Laravel, Next.js, and Tailwind CSS, with an emphasis on maintainability, performance, and long-term value.",
    aspect: "3/4",

    className: "max-w-[600px] justify-self-end",
    coverImg: "/images/projects/prekoda/cover.webp",
    coverImgMobile: "/images/projects/prekoda/cover-mobile.webp",
    gallerySrc: "/images/projects/prekoda/gallery",
    techStack: ["Next.js", "Laravel", "MySQL", "GSAP"],

    featured: true,
  },

  {
    id: "capblitz",
    idx: 3,
    name: "CapBlitz",
    shortDesc: "Typing Test",
    type: "Typing Test SaaS",
    year: "2024",
    source: "github.com/psyofrelief/capblitz",
    website: "capblitz.com",
    paragraph1:
      "CapBlitz is a responsive typing test built entirely with Next.js, Tailwind CSS, and TypeScript. Designed for public users, it delivers a clean and distraction-free interface that adapts seamlessly across devices. The app offers instant feedback on typing speed and accuracy, with multiple themes to customise the experience.",
    paragraph2:
      "The interface was developed from scratch, with particular attention to performance and mobile interaction. One of the most complex challenges was accurately syncing user input with visual feedback, especially handling success and error states across different screen sizes without a backend.",
    aspect: "4/3",
    className: "max-w-[600px]",
    coverImg: "/images/projects/capblitz/cover.webp",
    coverImgMobile: "/images/projects/capblitz/cover-mobile.webp",
    gallerySrc: "/images/projects/capblitz/gallery",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],

    featured: true,
  },
  {
    id: "pathsnap",
    idx: 4,
    name: "PathSnap",
    shortDesc: "Modern Link Shortener",
    type: "Link Shortener SaaS",
    year: "2025",
    source: "https://github.com/psyofrelief/pathsnap",
    website: "p-s.co",
    paragraph1:
      "PathSnap is a custom-built link shortener designed for fast performance and ease of use. It allows users to create, manage, and share clean short URLs and QR codes through a modern, reliable interface built from the ground up with speed and clarity in mind.",
    paragraph2:
      "Designed the entire brand and interface in Figma, with a focus on accessibility, simplicity, and responsive behavior. Built the frontend using Next.js, TypeScript, and TailwindCSS. On the backend, Laravel and MySQL handle routing, authentication, and link management via an API-first approach. Implemented features like copy-to-clipboard, QR code generation, server-side rendering, and performance optimisations. The system is structured for future scalability - ready for analytics, expiration rules, and rate limits.",
    aspect: "3/4",
    className: "justify-self-end max-w-[600px]",
    coverImg: "/images/projects/pathsnap/cover.webp",
    coverImgMobile: "/images/projects/pathsnap/cover-mobile.webp",
    gallerySrc: "/images/projects/pathsnap/gallery",
    techStack: ["Next.js", "Laravel", "TypeScript", "MySQL"],
    featured: false,
  },
  {
    id: "aywa",
    idx: 5,
    name: "AYWA",
    shortDesc: "Culture-Inspired Streetwear",
    type: "Ecommerce",
    year: "2025",
    source: null,
    website: "https://www.aywa2dawrld.com",
    paragraph1:
      "AYWA is a culture-driven streetwear brand that needed a scalable ecommerce platform with a clear visual identity. The goal was to build a fast, reliable shopping experience that reflects the brand’s ambition and cultural foundation while remaining easy to maintain and grow.",
    paragraph2:
      "Designed the brand’s identity and developed a custom frontend using Next.js and Shopify’s Storefront API. Built backend services with Laravel to manage user data, subscriptions, and authentication. Wrote SEO-optimised landing page content and designed all visuals to align with the brand’s tone and aesthetic. The site is password protected and prepared for launch.",
    aspect: "16/9",
    coverImg: "/images/projects/aywa/cover.webp",
    coverImgMobile: "/images/projects/aywa/cover-mobile.webp",
    gallerySrc: "/images/projects/aywa/gallery",
    techStack: ["Next.js", "Laravel", "TypeScript", "MySQL", "Shopify API"],

    featured: false,
  },
];
