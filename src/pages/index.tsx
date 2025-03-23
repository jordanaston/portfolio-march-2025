import HeroSection from "@/components/HeroSection";
import NarBar from "@/components/NarBar";
import SocialLinks from "@/components/SocialLinks";
import TextCard from "@/components/TextCard";
import { About, Info } from "@/content/TextContent";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProjectCard from "@/components/ProjectCard";
import {
  ECommerceApp,
  GlueNetwork,
  LocalPegs,
  NbmForum,
} from "@/content/ProjectsContent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NarBar />
      <div className="relative z-30 w-screen">
        <div className="mt-24 grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] sm:mt-32 md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)]">
          <HeroSection />
          <div className="col-start-1 flex flex-col items-start justify-center" />
          <div className="col-start-2 mt-8 flex flex-col items-start justify-center sm:mt-16">
            <SocialLinks />
            <ScrollIndicator />
            <div className="h-[60vh]" />
            <div className="mb-24 flex flex-col">
              <TextCard section={About()} fontWeight="medium" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[90vw] space-y-32 py-32">
        <ProjectCard section={ECommerceApp()} />
        <ProjectCard section={NbmForum()} />
        <ProjectCard section={GlueNetwork()} />
        <ProjectCard section={LocalPegs()} />
      </div>

      <div className="w-screen">
        <div className="grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)]">
          <div className="col-start-2 flex flex-col">
            <div className="mb-24 flex flex-col">
              <TextCard section={Info()} size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
