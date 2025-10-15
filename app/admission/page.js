import AdmissionHero from "@/components/Admissions/AdmissionHero";
import Announcement from "@/components/Admissions/Announcement";
import OnlineBanner from "@/components/Admissions/OnlineBanner";
import AdmissionCTA from "@/components/Admissions/AdmissionCTA";


export default function Admissions() {
  return (
    <div className="min-h-screen">
      <main>
        <AdmissionHero/>
        <Announcement/>
        <OnlineBanner/>
        <AdmissionCTA/>
        
       
      </main>
    </div>
  );
}
