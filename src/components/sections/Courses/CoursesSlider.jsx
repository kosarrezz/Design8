import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import line6 from "../../../assets/images/line-6.png"; 
import vectorImage from "../../../assets/images/Vector.png"; 
import outerFrame from "../../../assets/images/Vector (1).png"; 
import CourseMobileCard from "./CourseMobileCard";

export default function CoursesSlider() {
  const courses = [
    {
      id: 1,
      title: "آموزش Node.js",
      desc: "Node.js یک پلتفرم قدرتمند برای توسعهٔ برنامه‌های سرور با استفاده از جاوااسکریپت است. با استفاده از Node.js میتوانید اپلیکیشنهای سریع و مقیاسپذیر بسازید. یادگیری آن آسان است، بهخصوص اگر با جاوااسکریپت آشنا باشید.",
      priceGreen: "3,600,000 تومان",
      discountBadge: "10%",
      priceRed: "4,000,000  تومان",
      image: vectorImage,
    },
    {
      id: 2,
      title: "آموزش React.js",
      desc: "ری‌اکت محبوب‌ترین کتابخانه جاوااسکریپت برای طراحی رابط‌های کاربری وب مدرن و تعاملی است. با ری‌اکت کامپوننت‌های قدرتمند، سریع و مقیاسپذیر برای وب بسازید.",
      priceGreen: "4,675,000 تومان",
      discountBadge: "15%",
      priceRed: "5,500,000 تومان",
      image: vectorImage,
    },
    {
      id: 3,
      title: "آموزش Next.js",
      desc: "فریم‌ورک قدرتمند ری‌اکت برای ساخت پروژه‌های فول‌استک با قابلیت SSR و سئوی فوق‌العاده. بهترین گزینه برای ورود به بازار کار حرفه‌ای فرانت‌اند.",
      priceGreen: "5,600,000 تومان",
      discountBadge: "20%",
      priceRed: "7,000,000 تومان",
      image: vectorImage,
    }
  ];

  return (
    <section className="cursor-pointer w-full max-w-[1240px] mx-auto pt-4 pb-12 px-4 select-none bg-transparent">
      
      <div className="flex flex-col items-center justify-center text-center mb-8" dir="rtl">
        <div className="relative inline-block pb-3">
          <h2 className="text-[28px] md:text-[34px] font-black text-[#101828] dark:text-white relative z-10 leading-tight">
            جدیدترین دوره‌های آنلاین
          </h2>
          <img 
            src={line6} 
            alt="" 
            className="absolute bottom-0 left-0 w-full h-auto max-h-[16px] object-contain z-0 pointer-events-none" 
          />
        </div>
        <p className="text-[#667085] dark:text-gray-400 text-[15px] mt-2 font-normal">
          محبوب‌ترین دوره‌های آموزشی نویسندگان متخصص ما را بررسی کنید.
        </p>
      </div>

      <div className="hidden md:block">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="courses-swiper pb-12"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="w-full px-2 py-4 box-border">
                <div 
                  className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24"
                  style={{ direction: "ltr" }}
                >
                  <div 
                    className="flex-1 w-full max-w-[500px] flex flex-col justify-start"
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <div>
                      <h3 className="text-[24px] md:text-[28px] font-extrabold text-[#101828] dark:text-white mb-3">
                        {course.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] font-normal text-[#475467] dark:text-gray-300 leading-[2.1] mb-6 text-justify">
                        {course.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <div 
                          className="h-11 pr-4 pl-1 rounded-full flex items-center justify-between gap-3 font-semibold text-[14px]"
                          style={{ backgroundColor: "#FFB6B6" }}
                        >
                          <span className="line-through decoration-[#E02D2D] text-[#E02D2D] font-bold">
                            {course.priceRed}
                          </span>
                          <span className="w-13 h-13 rounded-full bg-white dark:bg-[#212121] border border-[#475467] dark:border-[#333333] text-[#E02D2D] flex items-center justify-center text-[16px] font-extrabold shadow-sm shrink-0">
                            {course.discountBadge}
                          </span>
                        </div>

                        <div className="h-11 bg-[#D1FADF] dark:bg-[#064e3b]/50 text-[#039855] dark:text-[#34d399] px-5 rounded-full font-bold text-[15px] flex items-center justify-center">
                          {course.priceGreen}
                        </div>
                      </div>

                      <div className="w-full flex" style={{ justifyContent: "flex-start" }}>
                        <button className="bg-[#0CBDE2] dark:bg-[#07687C] hover:bg-[#065a6b] dark:hover:bg-[#055363] text-white px-6 py-2.5 rounded-xl font-bold text-[14px] flex items-center gap-2 shadow-[0_4px_14px_rgba(7,104,124,0.3)] transition-all duration-200 active:scale-95 cursor-pointer">
                          <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <rect x="3" y="5" width="18" height="14" rx="3" />
                            <line x1="7" y1="14" x2="11" y2="14" />
                            <line x1="15" y1="14" x2="17" y2="14" />
                          </svg>
                          <span>شروع یادگیری</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full flex justify-center items-center">
                    <div className="relative w-[365px] h-[269px] max-w-full flex items-center justify-center shrink-0">
                      <img 
                        src={outerFrame} 
                        alt="Frame Outer" 
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none" 
                      />
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-[350px] h-[260px] object-contain z-10 transition-transform duration-300 hover:scale-[1.02]" 
                      />
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-6 md:hidden px-2">
        {courses.map((course) => (
          <CourseMobileCard key={course.id} course={course} />
        ))}
      </div>

      <style>{`
        .courses-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #D0D5DD;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .dark .courses-swiper .swiper-pagination-bullet {
          background-color: #4B5563;
        }
        .courses-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 9999px;
          background-color: #07687c 
        }
      `}</style>

    </section>
  );
}
