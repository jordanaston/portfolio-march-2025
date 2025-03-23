import { cn } from "@/lib/utils";

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type TextContentProps = {
  section: ContentSection;
  className?: string;
};

export default function TextContent({ section, className }: TextContentProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-[clamp(0.75rem,1vw+0.5rem,1rem)]">{section.title}</p>
      <div className="flex flex-col gap-6 text-[clamp(1.25rem,2vw+1rem,3.2rem)] leading-[1.1] font-medium tracking-[-0.02em] sm:gap-10">
        {Array.isArray(section.paragraphs) &&
          section.paragraphs.map((paragraph, i) => (
            <div key={i} className="[text-indent:clamp(6rem,16vw,16rem)]">
              {paragraph}
            </div>
          ))}
      </div>
    </div>
  );
}

export type { ContentSection };
