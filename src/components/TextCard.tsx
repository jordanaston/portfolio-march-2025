import { cn } from "@/lib/utils";

export type TextContentSection = {
  title: string;
  paragraphs: string[];
};

type TextCardProps = {
  section: TextContentSection;
  className?: string;
  size?: "default" | "small";
  fontWeight?: "normal" | "medium";
};

export default function TextCard({
  section,
  className,
  size = "default",
  fontWeight = "normal",
}: TextCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-[clamp(0.75rem,1vw+0.5rem,1rem)]">{section.title}</p>
      <div
        className={cn(
          "flex flex-col gap-6 tracking-[-0.02em] sm:gap-10",
          size === "default" &&
            "text-[clamp(1.25rem,2vw+1rem,3.2rem)] leading-[1.1]",
          size === "small" &&
            "text-[clamp(1rem,1.5vw+0.75rem,2.5rem)] leading-[1.2]",
          fontWeight === "medium" && "font-medium"
        )}
      >
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
