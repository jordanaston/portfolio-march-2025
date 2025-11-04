import {
  SiNextdotjs,
  SiReactquery,
  SiTypescript,
  SiTrpc,
  SiZod,
  SiShadcnui,
  SiMongodb,
  SiJira,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaSlack, FaNode, FaPython, FaGitAlt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoVercel, IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiFramer } from "react-icons/si";

const techIcons = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: FaReact, label: "React" },
  { icon: TbBrandReactNative, label: "React Native" },
  { icon: SiReactquery, label: "React Query" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTrpc, label: "tRPC" },
  { icon: SiZod, label: "Zod" },
  { icon: IoLogoVercel, label: "Vercel" },
  { icon: SiShadcnui, label: "shadcn/ui" },
  { icon: RiTailwindCssFill, label: "Tailwind" },
  { icon: SiFramer, label: "Framer Motion" },
  { icon: IoLogoFigma, label: "Figma" },
  { icon: FaNode, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: FaPython, label: "Python" },
  { icon: SiFlask, label: "Flask" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: VscVscode, label: "VS Code" },
  { icon: FaGitAlt, label: "Git" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiJira, label: "Jira" },
  { icon: FaSlack, label: "Slack" },
  { icon: RiNotionFill, label: "Notion" },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-x-10 gap-y-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {techIcons.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex cursor-pointer flex-col items-center gap-2"
          >
            <Icon className="h-8 w-8 transition-all group-hover:scale-125" />
            <span className="text-muted-foreground text-xs whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
