import React from "react";
import rect5 from "../../../assets/images/Rectangle 5.png";
import rect6 from "../../../assets/images/Rectangle 6.png";
import rect2 from "../../../assets/images/Rectangle 2.png";

export default function HeroStats() {
  const cards = [
    {
      id: 1,
      type: "image",
      src: rect2,
      alt: "تیم برنامه‌نویسی",
      boxSize: "w-44 h-56 lg:w-48 lg:h-64",
    },
    {
      id: 2,
      type: "stat",
      count: "+20",
      text: "سال سابقه آموزش \n در برنامه‌نویسان",
      bgClass: "bg-[#e2e8f0] dark:bg-[#2a2a2a] dark:border dark:border-[#333333]",
      textCount: "text-slate-800 dark:text-white",
      textLabel: "text-slate-700 dark:text-gray-300",
      boxSize: "w-36 h-48 lg:w-40 lg:h-52",
    },
    {
      id: 3,
      type: "image",
      src: rect6,
      alt: "کدنویسی",
      boxSize: "w-40 h-32 lg:w-44 lg:h-36 self-center",
    },
    {
      id: 4,
      type: "stat",
      count: "+1000",
      text: "دانشجوی فعال و شاغل \n در سر تا سر جهان",
      bgClass: "bg-[#a5f3fc] dark:bg-[#07687c] dark:border dark:border-[#07687c]/30",
      textCount: "text-slate-800 dark:text-white",
      textLabel: "text-slate-700 dark:text-cyan-100",
      boxSize: "w-36 h-48 lg:w-40 lg:h-52",
    },
    {
      id: 5,
      type: "image",
      src: rect5,
      alt: "محیط توسعه",
      boxSize: "w-44 h-56 lg:w-48 lg:h-64",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4">
        {cards.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer rounded-[24px] overflow-hidden shadow-sm flex-shrink-0 transition-transform duration-300 hover:-translate-y-1 ${
              item.boxSize
            } ${
              item.type === "stat"
                ? `${item.bgClass} p-4 flex flex-col items-center justify-center text-center`
                : ""
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <span className={`text-2xl lg:text-3xl font-black ${item.textCount}`}>
                  {item.count}
                </span>
                <p className={`mt-2 text-xs lg:text-sm font-semibold whitespace-pre-line leading-relaxed ${item.textLabel}`}>
                  {item.text}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex md:hidden flex-col items-center gap-4 w-full max-w-xs mx-auto">
        {cards
          .filter((item) => item.type === "stat")
          .map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer w-full h-36 rounded-[22px] p-4 flex flex-col items-center justify-center text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 ${item.bgClass}`}
            >
              <span className={`text-2xl font-black ${item.textCount}`}>
                {item.count}
              </span>
              <p className={`mt-2 text-xs font-semibold whitespace-pre-line leading-snug ${item.textLabel}`}>
                {item.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
