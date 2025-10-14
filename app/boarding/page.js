import BoardingHero from '@/components/Boarding/BoardingHero';
import BoardingCards from '@/components/Boarding/BoardingCards';
import BoardingFacility from '@/components/Boarding/BoardingFacility';
import BoardingAcc from '@/components/Boarding/BoardingAcc';


export default function About() {
  return (
    <div className="min-h-screen">
      <main>
        <BoardingHero/>
        <BoardingCards/>
        <BoardingFacility/>
        <BoardingAcc/>
      </main>
    </div>
  );
}
