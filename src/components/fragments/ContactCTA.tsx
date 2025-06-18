// import PaddingScreen from "../shared/PaddingScreen";

// export default function ContactCTA() {
//   return (
//     <div className="w-full h-auto">
//       <PaddingScreen>
//         <div className="font-jakarta w-full h-auto bg-blue-200 rounded-2xl flex justify-center items-center-safe px-5 py-4">
//           <div className=" flex flex-col w-1/2 ">
//             <h4>Tertarik bekerja sama?</h4>
//             <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">Saya siap membantu mewujudkan ide menjadi realita digital.</p>
//           </div>
//           <div className="">
//             <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-2xl hover:bg-zinc-800 transition-colors text-lg font-medium">
//               Hubungi Saya
//             </a>

//             <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">Balasan cepat dalam 24 jam, langsung dari saya.</p>
//           </div>
//         </div>
//       </PaddingScreen>
//     </div>
//   );
// }
"use client";

import PaddingScreen from "../shared/PaddingScreen";

export default function ContactCTA() {
  return (
    <div className="w-full h-auto">
      <PaddingScreen>
        <div className="font-jakarta bg-blue-200 dark:bg-zinc-800 rounded-2xl px-6 py-8 md:py-12 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Kolom Kiri */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Tertarik bekerja sama?</h4>
            <p className="text-lg text-zinc-700 dark:text-zinc-400">Saya siap membantu mewujudkan ide menjadi realita digital.</p>
          </div>

          {/* Kolom Kanan - Meletakkan ke kiri */}
          <div className="w-full md:w-auto space-y-4 text-left">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-2xl hover:bg-zinc-800 transition-colors text-lg font-medium">
              Hubungi Saya
            </a>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Balasan cepat dalam 24 jam, langsung dari saya.</p>
          </div>
        </div>
      </PaddingScreen>
    </div>
  );
}
