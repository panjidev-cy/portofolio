import PaddingScreen from "@/components/shared/PaddingScreen";
import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TiArrowRightThick } from "react-icons/ti";
interface Category {
  id: number;
  title: string;
  description: string;
}

const CategoryShowcase: React.FC = () => {
  const categories: Category[] = [
    { id: 1, title: "UI/UX Design", description: "Deskripsi kategori 1" },
    { id: 2, title: "Frontend Development", description: "Deskripsi kategori 2" },
    { id: 3, title: "Data Science", description: "Deskripsi kategori 3" },
  ];

  return (
    <div className="w-full h-auto py-10  ">
      <PaddingScreen>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-4 rounded-2xl shadow-md w-full max-w-sm mx-auto flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <div className="w-13 h-13 bg-yellow-300 rounded-full border-slate-400 border-2 overflow-hidden p-0.5">
                    <div
                      className="w-full h-full bg-white rounded-full
                    "
                    ></div>
                  </div>
                  <div className="">
                    <span className="block font-semibold text-[12px] font-jakarta text-slate-600">
                      lorem <span className="text-slate-400 font-medium text-[11px] ml-1">ipsum</span>
                    </span>
                    <span className="text-sm font-semibold font-jakarta">{category.title}</span>
                  </div>
                </div>

                <div className="">
                  <div className="px-1 py-[2.5px] rounded-sm border-blue-500/50 border-[1.4px] flex items-center justify-center gap-1">
                    {" "}
                    <span className="text-slate-600 font-poppins font-semibold text-[10px]">save</span>
                    <BiSolidBadgeCheck className="text-blue-500 text-sm" />
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-wrap gap-2 w-full  mt-3">
                  <span className="px-3 py-1 text-[10px] font-semibold font-jakarta text-slate-600 bg-slate-100 rounded-sm">design</span>
                  <span className="px-3 py-1 text-[10px] font-semibold font-jakarta text-slate-600 bg-slate-100 rounded-sm">javasript</span>
                  <span className="px-3 py-1 text-[10px] font-semibold font-jakarta text-slate-600 bg-slate-100 rounded-sm">python</span>
                  <span className="px-3 py-1 text-[10px] font-semibold font-jakarta text-slate-600 bg-slate-100 rounded-sm">canva</span>
                  <span className="px-3 py-1 text-[10px] font-semibold font-jakarta text-slate-600 bg-slate-100 rounded-sm">excel</span>
                </div>
              </div>
              <div className="border-t-[1.5px] border-blue-200/50 flex justify-between items-center pt-2 mt-5">
                <div className="text-sm font-semibold font-jakarta text-slate-600 ml-2">show now</div>
                <div className="p-3  bg-slate-900 rounded-lg">
                  <TiArrowRightThick className="text-yellow-300 text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </PaddingScreen>
    </div>
  );
};

export default CategoryShowcase;
