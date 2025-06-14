import { FaFreeCodeCamp } from "react-icons/fa";
interface DescriptionHero {
  title: string;
  description: string;
}

function DescriptionHero() {
  const description = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Frontend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  return (
    <div className="flex flex-col gap-5 text-sm font-jakarta">
      {description.map((item, index) => (
        <div className="grid grid-cols-10 gap-5" key={index}>
          <div className="col-span-1 text-2xl text-slate-600">
            <FaFreeCodeCamp />
          </div>
          <div className="col-span-3 font-semibold text-slate-600">{item.title}</div>
          <div className="col-span-6 text-xs font-poppins italic font-medium text-slate-500">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default DescriptionHero;
