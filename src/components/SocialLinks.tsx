import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
    email: "jordanaston93@gmail.com",
  },
] as const;

export default function SocialLinks() {
  const handleClick = (link: (typeof socialLinks)[number]) => {
    if ("email" in link) {
      navigator.clipboard.writeText(link.email);
      toast.success("Email copied to clipboard!");
      return;
    }
    window.open(link.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex w-full flex-col items-center justify-between gap-[clamp(0.2rem,0.8vw+0.25rem,1rem)]">
      <p className="text-[clamp(0.35rem,0.7vw+0.3rem,0.875rem)]">
        FIND ME ONLINE
      </p>
      <div className="flex w-full flex-row items-center justify-between gap-[clamp(0.15rem,0.8vw+0.25rem,1rem)]">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Button
              key={link.name}
              variant="outline"
              className="h-[clamp(1rem,2vw+1rem,2.5rem)] rounded-none"
              onClick={() => handleClick(link)}
            >
              <div className="flex flex-row items-center justify-center gap-[clamp(0.1rem,0.4vw+0.15rem,0.5rem)] px-0 sm:px-[clamp(0.2rem,1.5vw+0.5rem,2rem)]">
                <Icon className="size-[clamp(0.5rem,1.2vw+0.5rem,1.5rem)]" />
                <p className="text-[clamp(0.4rem,0.8vw+0.3rem,1rem)]">
                  {link.name}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
