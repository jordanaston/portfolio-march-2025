import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const titleTextStyles =
    "text-[clamp(58px,6vw+1.5rem,115px)] leading-[0.85] font-medium";
  return (
    <>
      <div className="col-start-1 flex flex-col items-start justify-center">
        <div className="bg-foreground h-[clamp(40px,5vw,80px)] w-[clamp(6px,0.8vw,12px)]" />
      </div>
      <div className="col-start-2">
        <div className="flex flex-col">
          <p className={cn(titleTextStyles)}>WEB &</p>
          <p className={cn(titleTextStyles)}>MOBILE</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className={cn(titleTextStyles)}>APP</p>
          <div className="mr-[clamp(8px,4vw+0.5rem,100px)] flex flex-col justify-end text-[clamp(0.8rem,1.1vw+0.4rem,1.05rem)] leading-none font-medium">
            <p>SOFTWARE ENGINEER</p>
            <p>DIGITAL DESIGNER</p>
          </div>
        </div>
        <p className={cn(titleTextStyles)}>DEVELOPER.</p>
      </div>
      <div className="col-start-3 flex flex-col items-end justify-center">
        <Button className="mr-[-66px] hidden rotate-90 cursor-pointer rounded-none px-[clamp(1.5rem,2vw+1rem,2rem)] py-[clamp(1rem,1.5vw+0.5rem,1.5rem)] text-[clamp(0.875rem,1.2vw+0.5rem,1.125rem)] md:inline-flex">
          RESUME / CV
        </Button>
      </div>
    </>
  );
}
