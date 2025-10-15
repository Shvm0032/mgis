import AlumniHero from "@/components/Alumni/AlumniHero";
import AlumniConnect from "@/components/Alumni/AlumniConnect";
import OurAlumni from "@/components/Alumni/OurAlumni";
import AlumniComments from "@/components/Alumni/AlumniComments";


export default function Admissions() {
  return (
    <div className="min-h-screen">
      <main>
       <AlumniHero/>
       <AlumniConnect/>
       <OurAlumni/>
       <AlumniComments/>
      </main>
    </div>
  );
}
