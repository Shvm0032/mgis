import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactMAp from "@/components/Contact/ContactMap";


export default function Admissions() {
  return (
    <div className="min-h-screen">
      <main>
        <ContactHero/>
        <ContactForm/>
        <ContactMAp/>
      </main>
    </div>
  );
}
