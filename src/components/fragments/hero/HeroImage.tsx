import Image from "next/image";

const HeroImage = () => (
  <div className="relative w-1/2 hidden lg:block items-center ">
    <Image src="/assets/dev.png" alt="Logo" width={300} height={300} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md" />
  </div>
);

export default HeroImage;
