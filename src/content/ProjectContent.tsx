import type { ProjectContentSection } from "@/components/ProjectCard";

export enum ImageDeviceType {
  MACBOOK = "macbook",
  IPHONE = "iphone",
}

// https://mockuphone.com TO GENERATE DEVICE IMAGES

export function PostApocalypseTradeHub(): ProjectContentSection {
  return {
    title: "POST-APOCALYPSE TRADE HUB",
    subTitle: "PERSONAL PROJECT",
    paragraphs: [
      "A Next.js application simulating a post-apocalyptic trading hub where survivors can exchange essential supplies using a credit-based economy system. Features authentication, item trading with dynamic quantity and value updates, and an AI Materializer that generates custom items using DeepAI's image generation API. Built with Next.js / TypeScript / Tailwind / Docker / Swagger.",
    ],
    image: "/images/post-apocalypse-trade-hub-macbook.png",
    deviceType: ImageDeviceType.MACBOOK,
    link: "https://post-apocalypse-trade-hub.vercel.app/trade-hub",
  };
}

export function ECommerceApp(): ProjectContentSection {
  return {
    title: "E-COMMERCE WEB APP",
    subTitle: "PERSONAL PROJECT",
    paragraphs: [
      "A simple fullstack e-commerce web app where users can create an account, view products, add/remove them from cart, and checkout. Built with Next.js / Typescript / Trpc / Tailwind / MongoDB.",
    ],
    image: "/images/e-commerce-app-macbook.png",
    deviceType: ImageDeviceType.MACBOOK,
    link: "https://e-commerce-app-git-main-jordanastons-projects.vercel.app/",
  };
}

export function NbmForum(): ProjectContentSection {
  return {
    title: "NBM FORUM",
    subTitle: "INTERNSHIP PROJECT (MOONWARD APPS)",
    paragraphs: [
      "A mobile app serving as a communal space where users can initiate discussions, share insights, and network within a social interface inspired by Reddit for designers and developers. Built with React Native / Typescript / Expo / Tailwind.",
    ],
    image: "/images/nbm-forum-iphone.png",
    reverseContent: true,
    deviceType: ImageDeviceType.IPHONE,
    link: "https://github.com/jordanaston/nbm-forum",
  };
}

export function GlueNetwork(): ProjectContentSection {
  return {
    title: "GLUE NETWORK",
    subTitle: "COMPANY CONTRIBUTION (LABRYS)",
    paragraphs: [
      "A platform where users can trade, bridge, earn, and invest in crypto using Glue's own blockchain network. Currently working on a full interface redesign, implementing bug fixes, performance optimizations, and UX improvements across the app using Next.js, TypeScript, tRPC and Tailwind.",
    ],
    image: "/images/glue-network-macbook.png",
    deviceType: ImageDeviceType.MACBOOK,
    link: "https://glue.net/",
  };
}

export function LocalPegs(): ProjectContentSection {
  return {
    title: "LOCAL PEGS",
    subTitle: "COMPANY CONTRIBUTION (LABRYS)",
    paragraphs: [
      "A mobile app enabling users to discover and purchase from local merchants using an in-app currency system. Features an integrated social feed, marketplace, and interactive map for discovering nearby vendors. Built with React Native, tRPC, Tailwind, and MongoDB.",
    ],
    image: "/images/local-pegs-iphone.png",
    reverseContent: true,
    deviceType: ImageDeviceType.IPHONE,
    link: "https://apps.apple.com/au/app/pegs/id1606690018",
  };
}
