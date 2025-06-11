// import Image from "next/image";
// import SplitText from "@/components/elements/SplitText";
// import { TiArrowRightThick } from "react-icons/ti";
// function Hero() {
//   return (
//     <div className="flex items-center justify-between h-screen font-jakarta mx-6">
//       <div className="relative w-1/2 hidden lg:block  items-center">
//         <Image
//           src={"/assets/dev.png"}
//           alt="Logo"
//           width={300}
//           height={300}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2
//         -translate-y-1/2 rounded-md"
//         />
//       </div>
//       <div className=" text-black flex-1 flex justify-between flex-col">
//         <span className="flex items-center gap-4">
//           <div className="p-2  bg-yellow-300 rounded-full inline-block">
//             <Image src={"/assets/v.svg"} alt="Logo" width={25} height={25} />
//           </div>
//           <span className="font-semibold text-h6">
//             Vibloo.<span className="text-purple-600">creative</span>
//           </span>
//         </span>
//         <div className="mt-5">
//           <SplitText
//             text="Code, "
//             className=" font-semibold "
//             delay={100}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//             tag="h1"
//             sequenceDelay={0}
//           />
//           <SplitText
//             text="Creativity, and"
//             className=" font-semibold delay-150"
//             delay={100}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//             tag="h1"
//             sequenceDelay={1.5}
//           />{" "}
//           <br />
//           <SplitText
//             text="Lasting Impressions"
//             className=" font-semibold delay-300"
//             delay={100}
//             duration={1}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//             tag="h1"
//             sequenceDelay={2}
//           />
//         </div>
//         <div className="flex justify-between items-center w-full lg:w-2/3   mt-10 ">
//           <div className=" bg-blue-400 inline-flex items-center  overflow-hidden rounded-full font-semibold shadow-md">
//             <button className="bg-black text-white py-3.5 px-6 lg:py-4 lg:px-8 rounded-full whitespace-nowrap">
//               <p className="font-semibold text-sm">Get Started</p>
//             </button>
//             <button className="text-white  px-3 lg:px-6   whitespace-nowrap">
//               <p className="font-semibold text-sm">Learn More</p>
//             </button>
//           </div>

//           <div className="">
//             <div className="p-2 md:p-3 bg-yellow-300 rounded-full relative">
//               <TiArrowRightThick className="w-6 h-6" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import HeroImage from "@/components/fragments/hero/HeroImage";
import HeroBranding from "@/components/fragments/hero/HeroBranding";
import HeroHeading from "@/components/fragments/hero/HeroHeading";
import HeroButtons from "@/components/fragments/hero/HeroButtons";
import HeroArrow from "@/components/fragments/hero/HeroArrow";
// import DescriptionHero from "@/components/fragments/hero/DescriptionHero";

function Hero() {
  return (
    <div className="flex items-center justify-between h-auto font-jakarta mx-6 pt-20">
      <HeroImage />

      <div className=" text-black flex-1 flex justify-between flex-col">
        <HeroBranding />
        <HeroHeading />
        <div className="flex justify-between items-center w-full lg:w-2/3   mt-10 ">
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
