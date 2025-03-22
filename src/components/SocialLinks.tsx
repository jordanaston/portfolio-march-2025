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
    url: "mailto:jordanaston93@gmail.com",
  },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4">
      <p className="text-sm">FIND ME ONLINE</p>
      <div className="flex flex-row items-center justify-between gap-4 w-full">
        {socialLinks.map(({ icon: Icon, name, url }) => (
          <Button
            key={name}
            variant="outline"
            className="h-10 cursor-pointer rounded-none"
            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          >
            <div className="flex flex-row items-center justify-center gap-2 p-4">
              <Icon className="size-6" />
              <p>{name}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
