import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const titleTextStyles =
    "text-[clamp(58px,6vw+1.5rem,108px)] leading-[0.85] font-medium dark:opacity-90";
  return (
    <>
      <div className="col-start-1 flex flex-col items-start justify-center"></div>
      <div className="col-start-2">
        <div className="mt-8 flex flex-col">
          <p className={cn(titleTextStyles)}>WEB &</p>
          <p className={cn(titleTextStyles)}>MOBILE</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className={cn(titleTextStyles)}>APP</p>
        </div>
        <p className={cn(titleTextStyles)}>DEVELOPER.</p>
      </div>
      <div className="col-start-3 flex flex-col items-end justify-center"></div>
      <Button
        asChild
        variant="outline"
        className="fixed top-[40%] right-0 z-50 mr-[-66px] hidden -translate-y-1/2 rotate-90 cursor-pointer rounded-none px-[clamp(1.5rem,2vw+1rem,2rem)] py-[clamp(1rem,1.5vw+0.5rem,1.5rem)] text-[clamp(0.875rem,1.2vw+0.5rem,1.125rem)] md:inline-flex"
      >
        <a
          href="/resume/Jordan Aston - Fullstack Developer Resume.pdf"
          download
        >
          RESUME / CV
        </a>
      </Button>
    </>
  );
}
