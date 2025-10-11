import HeroSection from "@/components/Home/HeroSection";
import HomeVision from "@/components/Home/HomeVision";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeMission from "@/components/Home/HomeMission";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection/>
        <HomeVision/>
        <HomeAbout/>
        <HomeMission/>
      </main>
    </div>
  );
}
