
import AcademicHero from '../../components/Academic/AcademicHero';
import AcademicProgramme from '../../components/Academic/AcademicProgramme';
import Curriculum from '@/components/Academic/Curriculum';
import SchoolTiming from '@/components/Academic/SchoolTiming';
import Classes from '@/components/Academic/Classes';
import AcademicOffer from '@/components/Academic/AcademicOffer';


export default function About() {
  return (
    <div className="min-h-screen">
      <main>
        <AcademicHero/>
        <AcademicProgramme/>
        <Curriculum/> 
        <SchoolTiming/> 
        <Classes/>  
        <AcademicOffer/>
      </main>
    </div>
  );
}
