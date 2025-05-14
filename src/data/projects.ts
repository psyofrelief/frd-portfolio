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
    website: "https://www.scantek.com",
    paragraph1:
      "Scantek is Australia's leader in identity verification technology. We were brought in to rescue an incomplete website and enhance accessibility, consistency, and responsiveness while preserving the brand's existing identity.",
    paragraph2:
      "Built in WordPress with Elementor, we repaired broken carousels, forms, and responsiveness issues. Our updates ensured WCAG compliance, optimized performance, and improved the overall UX across all devices.",
    aspect: "4/3",
    coverImg: "/images/projects/scantek/cover.webp",
    coverImgMobile: "/images/projects/scantek/cover-mobile.webp",
    gallerySrc: "/images/projects/scantek/gallery",
    techStack: ["WordPress", "Elementor", "HubSpot", "WCAG", "JavaScript"],
    featured: true,
  },

  {
    id: "prekoda",
    idx: 2,
    name: "Prekoda",
    shortDesc: "Culture-Inspired Streetwear",
    type: "Ecommerce",
    year: "2025",
    source: null,
    website: "https://www.aywa2dawrld.com",
    paragraph1:
      "AYWA is a fashion brand inspired by cultural heritage and ambition. We created a bold, scalable ecommerce experience rooted in strong visual identity and clarity.",
    paragraph2:
      "Built with a headless stack using Next.js and Shopify Storefront API. Branding and visuals were designed in-house, backed by a Laravel backend and tested with Jest for reliability.",
    aspect: "3/4",

    className: "max-w-[600px] justify-self-end",
    coverImg: "/images/projects/prekoda/cover.webp",
    coverImgMobile: "/images/projects/prekoda/cover-mobile.webp",
    gallerySrc: "/images/projects/prekoda/gallery",
    techStack: ["Next.js", "TailwindCSS", "Shopify API", "Laravel", "Jest"],

    featured: true,
  },

  {
    id: "capblitz",
    idx: 3,
    name: "CapBlitz",
    shortDesc: "Culture-Inspired Streetwear",
    type: "Ecommerce",
    year: "2025",
    source: "github.com/psyofrelief/capblitz",
    website: "https://www.aywa2dawrld.com",
    paragraph1:
      "AYWA is a fashion brand inspired by cultural heritage and ambition. We created a bold, scalable ecommerce experience rooted in strong visual identity and clarity.",
    paragraph2:
      "Built with a headless stack using Next.js and Shopify Storefront API. Branding and visuals were designed in-house, backed by a Laravel backend and tested with Jest for reliability.",
    aspect: "4/3",
    className: "max-w-[600px]",
    coverImg: "/images/projects/capblitz/cover.webp",
    coverImgMobile: "/images/projects/capblitz/cover-mobile.webp",
    gallerySrc: "/images/projects/capblitz/gallery",
    techStack: ["Next.js", "TailwindCSS", "Shopify API", "Laravel", "Jest"],

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
    website: "https://www.p-s.co",
    paragraph1:
      "PathSnap is a modern link management and QR tool that lets users create, manage, and track short links with ease. Built from the ground up to prioritise clarity and speed.",
    paragraph2:
      "Next.js + Laravel architecture with server-rendered pages, QR code generation, and full link control. Future plans include analytics, expiration, and rate limiting.",
    aspect: "3/4",
    className: "justify-self-end max-w-[600px]",
    coverImg: "/images/projects/pathsnap/cover.webp",
    coverImgMobile: "/images/projects/pathsnap/cover-mobile.webp",
    gallerySrc: "/images/projects/pathsnap/gallery",
    techStack: ["Next.js", "TailwindCSS", "Laravel", "MySQL", "QR Code API"],
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
      "AYWA is a fashion brand inspired by cultural heritage and ambition. We created a bold, scalable ecommerce experience rooted in strong visual identity and clarity.",
    paragraph2:
      "Built with a headless stack using Next.js and Shopify Storefront API. Branding and visuals were designed in-house, backed by a Laravel backend and tested with Jest for reliability.",
    aspect: "16/9",
    coverImg: "/images/projects/aywa/cover.webp",
    coverImgMobile: "/images/projects/aywa/cover-mobile.webp",
    gallerySrc: "/images/projects/aywa/gallery",
    techStack: ["Next.js", "TailwindCSS", "Shopify API", "Laravel", "Jest"],

    featured: false,
  },
];
