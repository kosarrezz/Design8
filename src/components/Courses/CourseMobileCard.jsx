import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, IdCardIcon } from "@hugeicons/core-free-icons";

export default function CourseMobileCard() {
  return (
    <div
      dir="rtl"
      className="w-full max-w-[320px] mx-auto bg-white dark:bg-[#212121] rounded-[28px] overflow-hidden shadow-sm border border-gray-100 dark:border-[#333333] flex flex-col select-none transition-colors duration-200"
    >
      <div className="w-full h-[175px] bg-[#FFD000] flex flex-col items-center justify-center relative">
        <div className="w-[68px] h-[68px] bg-white rounded-[14px] flex items-center justify-center shadow-sm mb-1.5">
          <span className="text-black font-black text-[26px] tracking-tight">JS</span>
        </div>
        <span className="text-black font-black text-[21px] tracking-tight">
          JavaScript
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 bg-white dark:bg-[#212121]">
        <h3 className="text-[18px] font-black text-[#1E293B] dark:text-white text-right leading-tight mb-2">
          دوره آموزش جامع HTML5
        </h3>

        <p className="text-[13px] text-[#475467] dark:text-gray-300 text-right leading-[1.8] line-clamp-2 mb-4 font-normal">
          خواه شما مبتدی باشید یا به دنبال پیشرفت در مهارت‌های برنامه‌نویسی خود باشید، دوره‌های آم...
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="bg-[#48CAE4] dark:bg-[#07687c] text-white px-3 py-1.5 rounded-[12px] flex items-center gap-1.5 shadow-sm">
            <span className="text-[13px] font-bold tracking-tight">
              دکتر بحرالعلومی
            </span>
            <svg
              className="w-4 h-4 shrink-0 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="7" y="3" width="14" height="18" rx="3" />
              <line x1="12" y1="8" x2="17" y2="8" />
              <line x1="12" y1="12" x2="16" y2="12" />
              <circle cx="4.5" cy="11.5" r="2" />
              <path d="M2.5 17.5c0-1.8 1.4-2.5 3-2.5 1.4 0 2.5.7 3.5 2" />
            </svg>
          </div>

          <div className="flex items-center gap-0.5 text-[#FFB800]">
            {[...Array(5)].map((_, index) => (
              <HugeiconsIcon
                key={index}
                icon={StarIcon}
                size={18}
                className="fill-[#FFB800] text-[#FFB800]"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-[13px] text-[#22C55E]">
              400.000 تومان
            </span>
            <span className="text-[12px] text-[#EF4444] line-through decoration-1 opacity-90">
              600.000 تومان
            </span>
          </div>

          <div className="bg-[#F0F9FF] dark:bg-[#07687c]/10 text-[#0284C7] dark:text-[#07687c] px-2.5 py-1 rounded-[10px] text-[13px] font-bold flex items-center gap-1 shrink-0">
            <span>22</span>
            <HugeiconsIcon icon={IdCardIcon} size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
