import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.webp";
import Img2 from "../../assets/blog2.png";
import Img3 from "../../assets/blog3.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Specialized Trainings
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2022</p>
              <p className="line-clamp-1"> By Rachel</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Emerging Topics
              </h1>
              <p className="line-clamp-2">
              Emergentia cybersecuritatis themata, sicut intelligentia artificialis et machinae discendae securitas, magnam provocationem systematibus globalibus afferunt. Internet rerum (IoT) vulnerabilitas crescit, dum nexus et machinae multiplices orbis terrarum coalescunt. Computatio quantica etiam cryptographiae traditionali minatur, novum aevum post-quantum enuntians. Defensiones modernas et solutiones ingeniosas ad has provocationes requiruntur, ut systemata securemaneant et pericula futura mitigentur.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Jan 3, 2023</p>
              <p className="line-clamp-1"> By Tej</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                General Awareness to All
              </h1>
              <p className="line-clamp-2">
              Lorem ipsum cybersecurity amet, omnes utentes debent scire fundamenta securitatis digitalis. Phishing emails evitandi, passwords fortes creandi, et MFA utens sunt clavis ad protegendum informationem personalem et professionalem. Cavete socialem engineering et sites suspectos, semper data sensitiva cum cura tractate. Memor esto: securitas digitalis non solum IT responsabilitas est, sed etiam omnium!
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2024</p>
              <p className="line-clamp-1"> By Molly</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Cloud Security
              </h1>
              <p className="line-clamp-2">
              Lorem ipsum cloudus securitatis, protectio datae in nubilum computandi maximus est. Encryptio informationis et accessum restrictio ad systemata criticos defendunt contra vulnerabilitates. Multi-factor authenticatio et monitio continua sunt claves ad securitatem robustam. Servitia nubilum necessitant regulas stricte et vigilantiam constantem ad minationes necnon brechas mitigandas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
