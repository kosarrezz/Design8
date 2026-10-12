import React from "react";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="w-full pt-8 pb-14 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1e293b] dark:text-white leading-tight flex flex-wrap items-center justify-center gap-2">
          <span>آموزش</span>
          
          <span className="inline-flex items-center justify-center bg-[#00c5eb] text-white px-4 sm:px-6 py-1 sm:py-4.5 rounded-full text-xl sm:text-3xl md:text-4xl font-medium my-1 shadow-sm">
            برنامه‌نویسی
          </span>
          
          <span>آنلاین آسان</span>
        </h1>

        <h2 className="mt-3 text-lg sm:text-2xl md:text-3xl font-semibold text-[#1e293b] dark:text-slate-100">
          سریع و همیشه همراه شما
        </h2>

        <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light sm:font-normal">
          در وبسایت ما می‌توانید دوره‌ها و کلاس‌هایی را پیدا کنید که به شما کمک می‌کنند مهارت بیاموزید، پیشرفت کنید و در مسیر رشد شخصی و حرفه‌ای سرزنده بمانید.
        </p>

        <div className="mt-6 sm:mt-8">
          <button
            type="button"
            className="bg-[#00c5eb] hover:bg-[#00b4d8] text-white mt-2 font-medium text-xs sm:text-sm px-7 py-2.5 sm:px-8 sm:py-3 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            آموزش رو شروع کنیم
          </button>
        </div>
      </div>
        <HeroStats />
    </section>
  );
}
