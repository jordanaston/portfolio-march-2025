import HeroSection from "@/components/HeroSection";
import NarBar from "@/components/NarBar";
import SocialLinks from "@/components/SocialLinks";
import TextContent from "@/components/TextCard";
import { About, Info } from "@/content/TextContent";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NarBar />
      <div className="w-screen">
        <div className="mt-24 grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] sm:mt-32 md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)]">
          <HeroSection />
          <div className="col-start-1 flex flex-col items-start justify-center" />
          <div className="col-start-2 mt-8 flex flex-col items-start justify-center gap-8 sm:mt-16">
            <SocialLinks />
            <ScrollIndicator />
            <div className="mt-4 flex flex-col md:mt-100">
              <TextContent section={About()} />
            </div>
            <div className="mt-48 flex flex-col">
              <TextContent section={Info()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
