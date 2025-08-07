import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-white md:text-3xl ">
            <a href="/#home" className="">
              SAF
              <span className="inline-block font-bold text-primary">code</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Overview</li>
                    <li className="p-2 hover:bg-violet-200">Updates</li>
                    <li className="p-2 hover:bg-violet-200">Site Tour</li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Courses{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-xl font-semibold">
                        Trainings
                      </h1>
                      <p className="text-sm text-slate-600">
                      "Explora amplam varietatem cursuum peritorum curatam ad artes tuas et scientiam augendam. A certificationibus professionalibus ad progressionem personalem, nostra suggesta contentum interactivum et captans offert ad metas discendi tuas tuo ipsius gradu assequendas."
                      </p>
                      <div className="grid grid-cols-3 ">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Learning Paths
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Live Sessions
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Quizzes
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Certifications
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Categories
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Technical Skills
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Soft Skills
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Inter Training
                          </li>
                        </ul>
                        <div>
                          <img src="https://picsum.photos/180" alt="no image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor pointer">
                <a href="/#contact">Support</a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm">Contact</p>
                    <p className="text-lg">
                      {" "}
                      <a href="tel:+91123456789">+91 9876543210</a>
                    </p>
                  </div>
                </li>
              </div>
              {/* Light and dark mode switcher */}
              {theme === "light" ? (
                <BiSolidSun
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
