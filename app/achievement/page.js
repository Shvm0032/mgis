import AchievementHero from "@/components/Achievement/AchievementHero";
import OurAchievement from "@/components/Achievement/OurAchievement";
import AchievementBanner from "@/components/Achievement/AchievementBanner";
import AchievementGallery from "@/components/Achievement/AchievementGallery";


export default function Admissions() {
  return (
    <div className="min-h-screen">
      <main>
        <AchievementHero/>
        <OurAchievement/>
        <AchievementBanner/>
        <AchievementGallery/>
      </main>
    </div>
  );
}
