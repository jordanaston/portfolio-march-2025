import { ImageDeviceType } from "@/content/ProjectsContent";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type ProjectContentSection = {
  title: string;
  subTitle: string;
  paragraphs: string[];
  image: string;
  reverseContent?: boolean;
  deviceType: ImageDeviceType;
};

type ProjectCardProps = {
  section: ProjectContentSection;
  className?: string;
};

export default function ProjectCard({ section, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col-reverse items-center justify-center gap-8 rounded-lg p-8 transition-colors sm:flex-row sm:gap-12 lg:gap-24",
        "hover:bg-muted dark:hover:bg-muted/50 cursor-pointer",
        section.reverseContent && "sm:flex-row-reverse",
        className
      )}
    >
      <div className="flex w-full flex-col gap-3 sm:w-1/2 sm:gap-4">
        <h2 className="border-b text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-tight">
          {section.title}
        </h2>
        <p className="text-muted-foreground text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium">
          {section.subTitle}
        </p>
        <div className="text-muted-foreground max-w-[60ch] text-[clamp(0.875rem,2vw,1.2rem)]">
          {Array.isArray(section.paragraphs) &&
            section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
        </div>
      </div>
      <div className="transition-transform group-hover:scale-[1.02]">
        <Image
          src={section.image}
          alt={section.title}
          width={section.deviceType === ImageDeviceType.MACBOOK ? 400 : 200}
          height={section.deviceType === ImageDeviceType.MACBOOK ? 400 : 200}
          priority
        />
      </div>
    </div>
  );
}
