import Image from "next/image";

const HeroBranding = () => (
  <span className="flex items-center gap-4">
    <div className="p-2 bg-yellow-300 rounded-full inline-block">
      <Image src="/assets/v.svg" alt="Logo" width={25} height={25} />
    </div>
    <span className="font-semibold text-h6">
      Vibloo.<span className="text-purple-600">creative</span>
    </span>
  </span>
);

export default HeroBranding;
