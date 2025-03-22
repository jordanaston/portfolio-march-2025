import HeroSection from "@/components/HeroSection";
import NarBar from "@/components/NarBar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NarBar />
      <div className="mx-auto">
        <div className="mt-32 grid grid-cols-[minmax(0,650px)_minmax(auto,850px)_auto]">
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
