import HeroSection from "@/components/HeroSection";
import NarBar from "@/components/NarBar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NarBar />
      <div className="w-screen">
        <div className="fixed mt-32 grid w-full grid-cols-[minmax(clamp(1rem,5vw,2rem),auto)_minmax(350px,1fr)_minmax(clamp(1rem,5vw,2rem),auto)] md:grid-cols-[minmax(20px,clamp(500px,30vw,750px))_minmax(350px,clamp(850px,50vw,1200px))_minmax(60px,1fr)]">
          <HeroSection />
          <div className="col-start-1 flex flex-col items-start justify-center" />
          <div className="col-start-2 mt-16 flex flex-col items-start justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
