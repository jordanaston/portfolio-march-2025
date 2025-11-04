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
  PostApocalypseTradeHub,
  WeatherApp,
} from "@/content/ProjectContent";
import MoreProjects from "@/components/MoreProjects";
import ContactForm from "@/components/ContactForm";
import TechStack from "@/components/TechStack";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="mb-24 min-h-screen">
      <NarBar />
      <section id="home" className="relative z-30 w-screen">
        <div className="mt-24 grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] sm:mt-32 md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)] 2xl:mt-38">
          <HeroSection />
          <div className="col-start-1 flex flex-col items-start justify-center" />
          <div className="col-start-2 mt-8 flex flex-col items-start justify-center sm:mt-16">
            <SocialLinks />
            <ScrollIndicator />
            <div className="h-[60vh]" />
            <div className="flex flex-col">
              <TextCard section={About()} fontWeight="normal" />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto mt-24 max-w-[90vw]">
        <ProjectCard section={GlueNetwork()} />
        <ProjectCard section={LocalPegs()} />
        <ProjectCard section={PostApocalypseTradeHub()} />
        <ProjectCard section={WeatherApp()} />
        <ProjectCard section={ECommerceApp()} />
        <ProjectCard section={NbmForum()} />
      </section>

      <section id="info" className="mt-36 w-screen">
        <div className="grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)]">
          <div className="col-start-2 flex flex-col">
            <div className="flex flex-col">
              <TextCard section={Info()} size="small" />
              <div className="mt-40">
                <p className="mb-4 text-[clamp(0.75rem,1vw+0.5rem,1rem)]">
                  MORE PROJECTS
                </p>
                <MoreProjects />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto mt-40 max-w-[90vw]">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-[clamp(1.25rem,2vw,1.75rem)] font-medium">
            GET IN TOUCH
          </h2>
          <ContactForm />
        </div>
      </section>
      <div className="mx-auto mt-56 max-w-[70vw]">
        <TechStack />
      </div>
      <BackToTop />
    </div>
  );
}
