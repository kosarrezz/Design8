import React, { useState } from "react";
import { Button } from "@heroui/react";
import { UserMultiple02Icon, Book02Icon } from "hugeicons-react";
import pythonBg from "../assets/Rectangle 19266 (1).png";

const categories = ["دسته بندی ها", "دسته بندی ها", "دسته بندی ها"];

const newsCards = [
  {
    id: 1,
    title: "پایتون",
    description:
      "دوره های ما مرتباً به روز می شوند، بنابراین شما همیشه از آخرین اطلاعات کار می کنید.",
    views: "13 بازدید",
    lessons: "2 دروس",
  },
  {
    id: 2,
    title: "پایتون",
    description:
      "دوره های ما مرتباً به روز می شوند، بنابراین شما همیشه از آخرین اطلاعات کار می کنید.",
    views: "13 بازدید",
    lessons: "2 دروس",
  },
  {
    id: 3,
    title: "پایتون",
    description:
      "دوره های ما مرتباً به روز می شوند، بنابراین شما همیشه از آخرین اطلاعات کار می کنید.",
    views: "13 بازدید",
    lessons: "2 دروس",
  },
];

export default function LatestNewsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      dir="rtl"
      className="w-full bg-white py-16 font-sans dark:bg-gray-950"
    >
      <div className=" cursor-pointer mx-auto flex w-full max-w-[1180px] flex-col items-center px-4">
        <div className="mb-10 text-center">
          <div className="relative inline-block pb-3">
            <h2 className="text-[28px] font-black tracking-tight text-[#101828] dark:text-white md:text-[34px]">
              جدیدترین اخبار
            </h2>

            <svg
              className="absolute bottom-0 left-0 w-full h-[14px] text-[#00bcd4] -translate-y-1"
              viewBox="0 0 220 20"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 5 12 C 45 4, 90 3, 140 10 C 175 15, 205 13, 215 9"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-3 text-[13px] text-[#98A2B3] dark:text-gray-400 md:text-[14px]">
            محبوب ترین دوره های آموزشی نویسندگان متخصص ما را بررسی کنید.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`rounded-full px-5 py-1.5 text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#00bcd4] text-white border border-[#00bcd4] shadow-sm"
                    : "border border-[#00bcd4] text-[#00bcd4] bg-white hover:bg-[#00bcd4]/10 dark:bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 grid w-full grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {newsCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[440px] md:h-[460px] w-full max-w-[340px] overflow-hidden rounded-[28px] shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={pythonBg}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1320] via-[#0b1320]/60 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 text-white">
                <h3 className="mb-2 text-right text-[20px] font-black">
                  {card.title}
                </h3>

                <p className="mb-4 text-right text-[12px] leading-relaxed text-gray-200 line-clamp-3">
                  {card.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/15 pt-3 text-[12px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <UserMultiple02Icon size={16} />
                    <span>{card.views}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Book02Icon size={16} />
                    <span>{card.lessons}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          radius="full"
          className="rounded-full bg-[#00bcd4] px-8 py-3 text-[14px] font-bold text-white shadow-md transition-all hover:bg-[#00acc1] cursor-pointer"
        >
          دوست داری بیشتر ببینی
        </Button>
      </div>
    </section>
  );
}
