import React from "react";

import lineUnderTitle from "../../assets/images/line-6.png";
import waveDesktop from "../../assets/icons/Frame 237766.svg";
import htmlIcon from "../../assets/icons/Rectangle (1).svg";
import cssIcon from "../../assets/icons/Rectangle.svg";
import jsIcon from "../../assets/icons/Rectangle (2).svg";
import reactIcon from "../../assets/icons/Rectangle (3).svg";
import figmaIcon from "../../assets/icons/Rectangle (4).svg";
import waveMobile from "../../assets/icons/Group 11314.svg";

export default function RoadmapSection() {
  const steps = [
    {
      id: 1,
      title: (
        <span>
          <span className="text-[#FF5722]">HTML</span>
          <span className="text-[#101828] dark:text-white"> & </span>
          <span className="text-[#2965F1]">CSS</span>
        </span>
      ),
      desc: "برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی شد",
    },
    {
      id: 2,
      title: (
        <span>
          <span className="text-[#FAFF00]">JAVA</span>
          <span className="text-[#333333] dark:text-[#E0E0E0]">SCRIPT</span>
        </span>
      ),
      desc: "برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی شد",
    },
    {
      id: 3,
      title: <span className="text-[#61DAFB]">REACT JS</span>,
      desc: "برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی شد",
    },
    {
      id: 4,
      title: (
        <span className="inline-flex tracking-normal">
          <span className="text-[#F24E1E]">F</span>
          <span className="text-[#FF7262]">I</span>
          <span className="text-[#A259FF]">G</span>
          <span className="text-[#1ABCFE]">M</span>
          <span className="text-[#0ACF83]">A</span>
        </span>
      ),
      desc: "برای شروع باید از زبان های مارکاپ استفاده کرد و بعد وارده استایل دهی شد",
    },
  ];

  return (
    <section 
      dir="rtl" 
      className="w-full py-16 px-4 md:px-8 select-none bg-white dark:bg-[#212121] transition-colors duration-200"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="relative inline-block">
            <img
              src={lineUnderTitle}
              alt=""
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-3 w-[150px] md:w-[180px] object-contain z-0 pointer-events-none"
            />
            <h2 className="relative z-10 text-[28px] md:text-[34px] font-black text-[#101828] dark:text-white tracking-tight">
              نقشه راه شما
            </h2>
          </div>

          <p className="text-[13px] md:text-[14px] text-[#667085] dark:text-gray-300 mt-3 font-medium">
            ما اینجا هستیم تا بشما کمک کنیم راه خود را پیدا کنید
          </p>
        </div>

        <div className="hidden lg:block w-full max-w-[1025px] mx-auto pb-16">
          <div className="relative w-full h-[240px]">
            <img
              src={waveDesktop}
              alt="مسیر یادگیری"
              className="w-full h-full object-fill pointer-events-none"
            />

            <div className="absolute top-[55%] left-[17%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="relative w-[145px] h-[145px] hover:scale-105 transition-transform duration-200">
                <img src={cssIcon} alt="CSS" className="absolute left-0 top-3 w-[108px] h-[108px] object-contain drop-shadow-md" />
                <img src={htmlIcon} alt="HTML" className="absolute right-0 top-0 w-[114px] h-[114px] object-contain drop-shadow-xl z-10" />
              </div>
            </div>

            <div className="absolute top-[50%] left-[39%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <img src={jsIcon} alt="JavaScript" className="w-[112px] h-[112px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200" />
            </div>

            <div className="absolute top-[48%] left-[61%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <img src={reactIcon} alt="React JS" className="w-[168px] h-[168px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200" />
            </div>

            <div className="absolute top-[50%] left-[82%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <img src={figmaIcon} alt="Figma" className="w-[135px] h-[135px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200" />
            </div>
          </div>

          <div dir="ltr" className="grid grid-cols-4 gap-6 w-full mt-24 text-center">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center px-2">
                <h3 className="text-[20px] font-black tracking-wider mb-2 font-sans">{step.title}</h3>
                <p dir="rtl" className="text-[12px] text-[#667085] dark:text-gray-300 leading-[1.8] max-w-[210px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center w-full mt-10">
          <div className="relative w-full max-w-[280px]">
            <img
              src={waveMobile}
              alt="مسیر یادگیری موبایل"
              className="w-full h-auto object-contain pointer-events-none"
            />
            
            <div className="absolute top-[62%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
              <img 
                src={reactIcon} 
                alt="React JS" 
                className="w-[168px] h-[168px] object-contain drop-shadow-md hover:scale-105 transition-transform" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full mt-10 text-center">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center px-4">
                <h3 className="text-[18px] font-black tracking-wider mb-1 font-sans">{step.title}</h3>
                <p className="text-[12px] text-[#667085] dark:text-gray-300 leading-[1.8] max-w-[280px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
