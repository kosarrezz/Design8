import React from "react";
import lineUnderTitle from "../../assets/images/line-6.png"; 

const categories = [
  { id: 1, title: "برنامه‌نویسی" },
  { id: 2, title: "برنامه‌نویسی" },
  { id: 3, title: "برنامه‌نویسی" },
  { id: 4, title: "برنامه‌نویسی" },
  { id: 5, title: "برنامه‌نویسی" },
  { id: 6, title: "برنامه‌نویسی" },
  { id: 7, title: "برنامه‌نویسی" },
  { id: 8, title: "برنامه‌نویسی" },
  { id: 9, title: "برنامه‌نویسی" },
  { id: 10, title: "برنامه‌نویسی" },
  { id: 11, title: "برنامه‌نویسی" },
  { id: 12, title: "برنامه‌نویسی" },
  { id: 13, title: "برنامه‌نویسی" },
  { id: 14, title: "برنامه‌نویسی" },
  { id: 15, title: "برنامه‌نویسی" },
  { id: 16, title: "برنامه‌نویسی" },
];

export default function PopularCategories() {
  const row1 = categories.slice(0, 8);
  const row2 = categories.slice(8, 16);

  const renderItem = (cat) => (
    <div
      key={cat.id}
      className="flex-shrink-0 flex items-center justify-between gap-3 bg-white dark:bg-[#212121] 
                 border border-[#EAECF0] dark:border-[#333333] rounded-full 
                 px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                 hover:shadow-md hover:border-[#07687c] dark:hover:border-[#07687c] transition-all cursor-pointer select-none"
    >
      <div className="flex items-center justify-center px-2 py-0.5 rounded-lg border border-[#07687c] bg-[#07687c]/10 dark:bg-[#07687c]/20 dark:border-[#07687c] text-[#07687c] dark:text-[#a5d8e0] text-[11px] font-extrabold tracking-wide">
        API
      </div>

      <span className="text-[14px] font-bold text-[#1D2939] dark:text-white whitespace-nowrap">
        {cat.title}
      </span>

      <div className="w-6 h-6 rounded-full border border-[#D0D5DD] dark:border-[#444444] flex items-center justify-center text-[#98A2B3] dark:text-gray-400">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <section dir="rtl" className="w-full py-16 bg-[#FBFDFE] dark:bg-[#181818] overflow-hidden transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 text-center">

        <div className="flex flex-col items-center justify-center mb-2">
          <h2 className="text-[28px] md:text-[34px] font-black text-[#101828] dark:text-white">
            محبوب‌ترین دسته‌بندی‌ها
          </h2>
          <img 
            src={lineUnderTitle} 
            alt="underline" 
            className="w-[150px] -mt-2 pointer-events-none" 
          />
        </div>

        <p className="text-[#667085] dark:text-gray-400 text-[14px] md:text-[15px] mb-12">
          محبوب‌ترین دوره‌های آموزشی متخصصان ما را بررسی کنید.
        </p>
      </div>

      <div className="w-[120vw] -mr-[10vw] transform -rotate-[3deg] flex flex-col gap-4 py-4 select-none">
        <div className="flex flex-nowrap justify-center gap-4">
          {row1.map(renderItem)}
        </div>

        <div className="flex flex-nowrap justify-center gap-4 pr-12">
          {row2.map(renderItem)}
        </div>
      </div>
    </section>
  );
}
