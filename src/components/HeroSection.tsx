import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const titleTextStyles = "text-[130px] leading-[0.85] font-medium";
  return (
    <>
      <div className="col-start-1 flex flex-col items-start justify-center">
        <div className="bg-foreground h-[80px] w-[12px]" />
      </div>
      <div className="col-start-2">
        <div className="flex flex-col">
          <p className={cn(titleTextStyles)}>WEB &</p>
          <p className={cn(titleTextStyles)}>MOBILE</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className={cn(titleTextStyles)}>APP</p>
          <div className="flex flex-col justify-end text-lg leading-none font-medium">
            <p>SOFTWARE ENGINEER</p>
            <p>DIGITAL DESIGNER</p>
          </div>
        </div>
        <p className={cn(titleTextStyles)}>DEVELOPER.</p>
      </div>
      <div className="col-start-3 flex flex-col items-end justify-center">
        <Button className="mr-[-66px] rotate-90 cursor-pointer rounded-none px-8 py-6 text-lg">
          RESUME / CV
        </Button>
      </div>
    </>
  );
}
