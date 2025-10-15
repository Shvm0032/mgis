import StudentHero from "@/components/StudentLife/StudentHero";
import StudentActivities from "@/components/StudentLife/StudentActivities";


export default function StudentLife() {
  return (
    <div className="min-h-screen">
      <main>
        <StudentHero/>
        <StudentActivities/>
       
      </main>
    </div>
  );
}
