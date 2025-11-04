import Link from "next/link";
import { cn } from "@/lib/utils";

const moreProjects = [
  {
    title: "UNISWAP CLONE",
    link: "https://github.com/jordanaston/uniswap-blockchain-webapp/",
  },
  {
    title: "PLANTAPP.",
    link: "https://github.com/jordanaston/T1A3-terminal-application/",
  },
  {
    title: "VINYL DATA API",
    link: "https://github.com/jordanaston/T2A2_vinyl_data_API/",
  },
  {
    title: "TRIVIA APP (WIP)",
    link: "https://github.com/jordanaston/multiplayer-trivia-game/",
  },
  {
    title: "BINANCE TRADING BOT",
    link: "https://github.com/jordanaston/trading-bot/",
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
            "dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted/50 cursor-pointer border-b p-2 text-[clamp(40px,4vw+1.5rem,72px)] font-medium opacity-80 transition-colors dark:opacity-100",
            index === 0 && "border-t"
          )}
        >
          <p className="transition-[margin] duration-300 ease-out hover:ml-8">
            {project.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
