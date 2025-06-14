import Hero from "@/components/fragments/Hero";
import CategoryShowcase from "@/components/fragments/CategoryShowcase";
import ProjectShowcase from "@/components/fragments/Projectshowcase";
export default function Home() {
  return (
    <div className=" h-full ">
      <Hero />
      <CategoryShowcase />

      <ProjectShowcase />
      <div className="mt-99"></div>
    </div>
  );
}
