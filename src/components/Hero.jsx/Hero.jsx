import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
          CyberSecurity Awareness and Training         </h1>
            <p className="">
            "Explora amplam varietatem cursuum peritorum curatam ad artes tuas et scientiam augendam. A certificationibus professionalibus ad progressionem personalem, nostra suggesta contentum interactivum et captans offert ad metas discendi tuas tuo ipsius gradu assequendas."
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Trial for 7 Days
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Register
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
