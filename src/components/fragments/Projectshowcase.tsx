"use client";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProjectCard from "./projectshowcase/ProjectCard";
gsap.registerPlugin(TextPlugin, ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ProjectShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // useLayoutEffect(() => {
  //   if (!sectionRef.current || !titleRef.current || !contentRef.current) return;
  //   const lockScroll = () => {
  //     document.body.style.overflow = "hidden";
  //   };

  //   const unlockScroll = () => {
  //     document.body.style.overflow = "";
  //   };
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: false,
  //         once: true,
  //         onEnter: () => {
  //           lockScroll();
  //           gsap.to(window, {
  //             scrollTo: sectionRef.current!,
  //             duration: 0.5,
  //             ease: "power1.in",
  //           });
  //         },
  //       },
  //     });

  //     tl.to(contentRef.current, {
  //       filter: "blur(20px)",
  //       duration: 0.5,
  //     })
  //       .to(
  //         titleRef.current,
  //         {
  //           delay: 0.1,
  //           y: "50vh",
  //           ease: "power3.out",
  //           duration: 1.5,
  //         },
  //         "<"
  //       )
  //       .to(titleRef.current, {
  //         opacity: 0,
  //         duration: 0.2,
  //       })
  //       // Ganti langsung tanpa animasi huruf
  //       .set(titleRef.current, {
  //         text: "Code",
  //       })
  //       .to(titleRef.current, {
  //         opacity: 1,
  //         duration: 1,
  //       })
  //       .to(titleRef.current, {
  //         opacity: 0,
  //         delay: 0.2,
  //         duration: 0.2,
  //       })
  //       .set(titleRef.current, {
  //         text: "Creative",
  //       })
  //       .to(titleRef.current, {
  //         opacity: 1,
  //         duration: 1,
  //       })
  //       .to(titleRef.current, {
  //         opacity: 0,
  //         delay: 0.2,
  //         duration: 0.2,
  //       })
  //       .to(
  //         contentRef.current,
  //         {
  //           filter: "blur(0px)",
  //           duration: 1,
  //         },
  //         "<"
  //       )
  //       .call(() => {
  //         unlockScroll();
  //       });
  //   }, sectionRef);

  //   return () => {
  //     unlockScroll();
  //     ctx.revert();
  //   };
  // }, []);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!sectionRef.current || !titleRef.current || !contentRef.current) return;

      const lockScroll = () => {
        document.body.style.overflow = "hidden";
      };

      const unlockScroll = () => {
        document.body.style.overflow = "";
      };

      gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: false,
            once: true,
            onEnter: () => {
              lockScroll();
              gsap.to(window, {
                scrollTo: sectionRef.current!,
                duration: 0.5,
                ease: "power1.in",
              });
            },
          },
        });

        tl.to(contentRef.current, {
          filter: "blur(20px)",
          duration: 0.5,
        })
          .to(
            titleRef.current,
            {
              delay: 0.1,
              y: "50vh",
              ease: "power3.out",
              duration: 1.5,
            },
            "<"
          )
          .to(titleRef.current, {
            opacity: 0,
            duration: 0.2,
          })
          .set(titleRef.current, { text: "Code" })
          .to(titleRef.current, {
            opacity: 1,
            duration: 1,
          })
          .to(titleRef.current, {
            opacity: 0,
            delay: 0.2,
            duration: 0.2,
          })
          .set(titleRef.current, { text: "Creative" })
          .to(titleRef.current, {
            opacity: 1,
            duration: 1,
          })
          .to(titleRef.current, {
            opacity: 0,
            delay: 0.2,
            duration: 0.2,
          })
          .to(
            contentRef.current,
            {
              filter: "blur(0px)",
              duration: 1,
            },
            "<"
          )
          .call(() => {
            unlockScroll();
            gsap.delayedCall(1, () => ScrollTrigger.refresh());
          });
      }, sectionRef);
    });

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-start justify-center font-jakarta">
      <motion.h1 ref={titleRef} initial={{ opacity: 1 }} className="absolute z-30 top-0 text-purple-600 text-5xl font-bold font-jakarta">
        My Cool Title
      </motion.h1>

      {/* content */}
      <div ref={contentRef} className=" w-full h-full flex items-center justify-center">
        <ProjectCard></ProjectCard>
      </div>
    </section>
  );
};

export default ProjectShowcase;
