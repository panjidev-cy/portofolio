import HeroImage from "@/components/fragments/hero/HeroImage";
import HeroBranding from "@/components/fragments/hero/HeroBranding";
import HeroHeading from "@/components/fragments/hero/HeroHeading";
import HeroButtons from "@/components/fragments/hero/HeroButtons";
import HeroArrow from "@/components/fragments/hero/HeroArrow";

function Hero() {
  return (
    <div className="flex items-center justify-between h-auto font-jakarta mx-6 pt-20">
      <HeroImage />

      <div className=" text-black flex-1 flex justify-between flex-col">
        <HeroBranding />
        <HeroHeading />
        <div className=" relative flex justify-between items-center w-full lg:w-2/3   mt-10 ">
          <HeroButtons />

          <HeroArrow />

          {/* description */}
        </div>
        <div className="w-4/5 mt-10"></div>
      </div>
    </div>
  );
}

export default Hero;
