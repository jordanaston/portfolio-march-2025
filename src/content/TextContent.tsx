import type { TextContentSection } from "@/components/TextCard";

export function About(): TextContentSection {
  return {
    title: "ABOUT",
    paragraphs: [
      "Hi, I'm Jordan.",
      "I'm a developer from Brisbane, Australia, passionate about building dynamic web and mobile applications.",
      "Here you'll find a selection of my most recent work, projects I've built with dedication and a love for development.",
    ],
  };
}

export function Info(): TextContentSection {
  return {
    title: "INFO",
    paragraphs: [
      <p key="1">
        After studying web development at Coder Academy Brisbane, I went on to
        complete an internship at{" "}
        <a
          href="https://www.moonward.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground dark:hover:text-accent underline transition-colors hover:no-underline"
        >
          Moonward Apps
        </a>{" "}
        in 2023, which gave me a solid foundation in modern app development. I
        currently work at{" "}
        <a
          href="https://labrys.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground dark:hover:text-accent underline transition-colors hover:no-underline"
        >
          Labrys
        </a>{" "}
        in Brisbane, where I&apos;ve been deep diving into blockchain and
        full-stack web2 development for the past year and a half.
      </p>,
      <p key="2">
        I thrive on learning new tech and solving tricky problems. Love working
        with teams where we can bounce ideas off each other and build cool stuff
        together. Always excited to jump into new projects and figure out
        creative solutions.
      </p>,
    ],
  };
}
