import AboutHero from '../../components/About/AboutHero';
import AboutSchool from '@/components/About/AboutSchool';
import OurInspiration from '@/components/About/OurInspiration';
import AboutPrinciple from '@/components/About/AboutPrinciple';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import AboutStatement from '@/components/About/AboutStatement';
import AboutFocus from '@/components/About/AboutFocus';
import AboutFilm from '@/components/About/AboutFilm';


export default function About() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero/>
        <AboutSchool/>
        <OurInspiration/>
        <AboutPrinciple/>
        <OurPhilosophy/>
        <AboutStatement/>
        <AboutFocus/>
        <AboutFilm/>
        
      </main>
    </div>
  );
}
