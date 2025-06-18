import Hero from "@/components/fragments/Hero";
import CategoryShowcase from "@/components/fragments/CategoryShowcase";
import ProjectShowcase from "@/components/fragments/Projectshowcase";
import Motivation from "@/components/fragments/Motivation";
import ContactCTA from "@/components/fragments/ContactCTA";
export default function Home() {
  return (
    <div className=" h-full ">
      <Hero />
      <CategoryShowcase />

      <ProjectShowcase />
      <Motivation />
      <ContactCTA />
      <div className="mt-999"></div>
    </div>
  );
}
