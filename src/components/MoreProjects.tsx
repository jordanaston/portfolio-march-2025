import Link from "next/link";
import { cn } from "@/lib/utils";

const moreProjects = [
  {
    title: "WEATHER APP",
    link: "https://darlingsable.netlify.app/",
  },
  {
    title: "UNISWAP CLONE",
    link: "https://uniswap-blockchain-webapp.vercel.app/",
  },
  {
    title: "PLANTAPP.",
    link: "https://github.com/jordanaston/T1A3-terminal-application/",
  },
  {
    title: "VINYL DATA API",
    link: "https://github.com/jordanaston/T2A2_vinyl_data_API/",
  },
];

export default function MoreProjects() {
  return (
    <div className="flex w-full flex-col">
      {moreProjects.map((project, index) => (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.title}
          className={cn(
            "dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted/50 cursor-pointer border-b p-2 text-[clamp(40px,4vw+1.5rem,80px)] font-medium opacity-80 transition-colors dark:opacity-100",
            index === 0 && "border-t"
          )}
        >
          {project.title}
        </Link>
      ))}
    </div>
  );
}
