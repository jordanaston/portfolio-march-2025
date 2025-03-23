import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "./ui/button";

const socialLinks = [
  {
    icon: FaGithub,
    name: "Github",
    url: "https://github.com/jordanaston",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/jordanaston",
  },
  {
    icon: FaDiscord,
    name: "Discord",
    url: "https://discordapp.com/users/816549164186992671",
  },
  {
    icon: SiGmail,
    name: "Mail",
    url: `mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL!}`,
  },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-[clamp(0.2rem,0.8vw+0.25rem,1rem)]">
      <p className="text-[clamp(0.35rem,0.7vw+0.3rem,0.875rem)]">
        FIND ME ONLINE
      </p>
      <div className="flex w-full flex-row items-center justify-between gap-[clamp(0.15rem,0.8vw+0.25rem,1rem)]">
        {socialLinks.map(({ icon: Icon, name, url }) => (
          <Button
            key={name}
            variant="outline"
            className="h-[clamp(1rem,2vw+1rem,2.5rem)] rounded-none"
            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          >
            <div className="flex flex-row items-center justify-center gap-[clamp(0.1rem,0.4vw+0.15rem,0.5rem)] px-0 sm:px-[clamp(0.2rem,1.5vw+0.5rem,2rem)]">
              <Icon className="size-[clamp(0.5rem,1.2vw+0.5rem,1.5rem)]" />
              <p className="text-[clamp(0.4rem,0.8vw+0.3rem,1rem)]">{name}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
