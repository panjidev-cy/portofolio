"use client";

import PaddingScreen from "@/components/shared/PaddingScreen";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiSolidBadgeCheck } from "react-icons/bi";
// import { TiArrowRightThick } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

interface Category {
  id: number;
  title: string;
  description: string;
  color: string; // sekarang bebas, bisa "#fff", "rgb(255,255,0)", dll
}

const CategoryShowcase: React.FC = () => {
  const cardRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    cardRef.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 3,
            scrollTrigger: {
              trigger: ref, // Gunakan elemen individual sebagai trigger
              start: "top bottom",
              end: "top 80%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  // useEffect(() => {
  //   // Pastikan setiap elemen kartu animasi dengan scroll trigger
  //   ScrollTrigger.batch(cardRef.current, {
  //     start: "top bottom", // Memulai animasi ketika elemen berada di bagian bawah viewport
  //     onEnter: (batch) => {
  //       batch.forEach((ref, index) => {
  //         gsap.fromTo(
  //           ref,
  //           { opacity: 0, y: 100 }, // Kondisi awal
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.8, // Durasi animasi untuk tiap kartu
  //             delay: index * 0.5, // Menambahkan delay agar animasi berurutan
  //             ease: "power3.out",
  //             scrollTrigger: {
  //               trigger: ref,
  //               start: "top 90%", // Menentukan kapan animasi dipicu
  //               end: "top 70%", // Mengakhiri trigger di posisi tertentu
  //               scrub: false, // Tidak mengikuti scroll (langsung animasi)
  //             },
  //           }
  //         );
  //       });
  //     },
  //   });

  //   // Membersihkan ScrollTrigger untuk menghindari duplikasi
  //   return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  // }, []);

  const categories: Category[] = [
    { id: 1, title: "UI/UX Design", description: "Deskripsi kategori 1", color: "#FDE68A" },
    { id: 2, title: "Frontend Development", description: "Deskripsi kategori 2", color: "#E0E7FF" },
    { id: 3, title: "Data Science", description: "Deskripsi kategori 3", color: "#BFDBFE" },
  ];

  return (
    <div className="w-full h-auto py-20">
      <PaddingScreen>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, i) => (
            <div
              key={category.id}
              ref={(e) => {
                if (e) cardRef.current[i] = e;
              }}
              style={{ backgroundColor: category.color }}
              className=" rounded-xl py-2 shadow-md w-full max-w-sm mx-auto flex flex-col gap-2 opacity-0 translate-y-[100px]"
            >
              <div className="w-full bg-white flex flex-col gap-2 p-4 rounded-xl">
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
                      <span className="text-slate-600 font-poppins font-semibold text-[10px] ml-1">save</span>
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
                {/* <div className="border-t-[1.5px] border-blue-200/50 flex justify-between items-center pt-2 mt-5">
                <div className="text-sm font-semibold font-jakarta text-slate-600 ml-2">show now</div>
                <div className="p-3  bg-slate-900 rounded-lg">
                  <TiArrowRightThick className="text-yellow-300 text-sm" />
                </div>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </PaddingScreen>
    </div>
  );
};

export default CategoryShowcase;

// !! TUGAS SELANJUTNYA OPTIMASI KOMPONEN MEMCAH KOMPONEN LOGIC ANIMASI SCROLL DENGAN CARD SENDIRI DAN KOMPONEN CARD BISA REUSABLE UNTUK LAIN LAINNYA SESUAI KEBUTUHAN
