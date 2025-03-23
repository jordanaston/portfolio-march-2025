import type { ProjectContentSection } from "@/components/ProjectCard";

export enum ImageDeviceType {
  MACBOOK = "macbook",
  IPHONE = "iphone",
}

export function ECommerceApp(): ProjectContentSection {
  return {
    title: "E-COMMERCE WEB APP",
    subTitle: "PERSONAL PROJECT",
    paragraphs: [
      "Fullstack e-commerce web app built with Next.js / Typescript / Trpc / Tailwind / MongoDB.",
    ],
    image: "/images/e-commerce-app-macbook.png",
    deviceType: ImageDeviceType.MACBOOK,
  };
}

export function NbmForum(): ProjectContentSection {
  return {
    title: "NBM FORUM",
    subTitle: "INTERNSHIP PROJECT",
    paragraphs: [
      "Fullstack e-commerce web app built with Next.js / Typescript / Trpc / Tailwind / MongoDB.",
    ],
    image: "/images/nbm-forum-iphone.png",
    reverseContent: true,
    deviceType: ImageDeviceType.IPHONE,
  };
}

export function GlueNetwork(): ProjectContentSection {
  return {
    title: "GLUE NETWORK",
    subTitle: "COMPANY CONTRIBUTION",
    paragraphs: [
      "Fullstack e-commerce web app built with Next.js / Typescript / Trpc / Tailwind / MongoDB.",
    ],
    image: "/images/glue-network-macbook.png",
    deviceType: ImageDeviceType.MACBOOK,
  };
}

export function LocalPegs(): ProjectContentSection {
  return {
    title: "LOCAL PEGS",
    subTitle: "COMPANY CONTRIBUTION",
    paragraphs: [
      "Fullstack e-commerce web app built with Next.js / Typescript / Trpc / Tailwind / MongoDB.",
    ],
    image: "/images/local-pegs-iphone.png",
    reverseContent: true,
    deviceType: ImageDeviceType.IPHONE,
  };
}
