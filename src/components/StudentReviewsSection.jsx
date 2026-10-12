import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarGroup } from "@heroui/react";
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react";

import "swiper/css";

export default function StudentReviewsSection() {
  const swiperRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "امیر محمد",
      username: "@amirKh",
      comment:
        "«از لسی برای مربیگری، راهنمایی و دوستی که به من می‌دهی متشکرم. من برای همیشه سپاسگزار خواهم بود. من دوست دارم با آلیسا کار کنم و تصور می‌کردم با انگیزه از زمان با هم دور می‌شوم.»",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
    },
    {
      id: 2,
      name: "سارا رضایی",
      username: "@sara_rz",
      comment:
        "«دوره‌های آکادمی فوق‌العاده‌ست. نحوه تدریس و پشتیبانی بی‌نظیر باعث شد در کوتاه‌ترین زمان ممکن وارد بازار کار بشم. ممنون از دکتر و تیم خوبش.»",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
    },
    {
      id: 3,
      name: "علی کریمی",
      username: "@ali_dev",
      comment:
        "«بهترین تجربه‌ای بود که تو زمینه برنامه‌نویسی داشتم. پروژه‌محور بودن دوره‌ها واقعاً کمک می‌کند که مباحث رو عمیق یاد بگیریم.»",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
    },
    {
      id: 4,
      name: "نگار احمدی",
      username: "@negar_a",
      comment:
        "«توضیحات استاد روان و کاربردی بود. تمرین‌های دوره کمک کرد چیزهایی که یاد گرفتم را در پروژه‌های واقعی استفاده کنم.»",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
    },
  ];

  const handleNextSlide = () => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section
      dir="rtl"
      className=" cursor-pointer w-full py-20 bg-[#F9FAFB] dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="lg:w-5/12 w-full text-right select-none">
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#0284C7] dark:text-[#38BDF8] text-[14px] font-bold">
              نظرات دانشجویان
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                aria-label="نظر قبلی"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7] transition-all cursor-pointer"
              >
                <ArrowRight02Icon size={18} />
              </button>
              
              <button
                onClick={handleNextSlide}
                aria-label="نظر بعدی"
                className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#0284C7] hover:text-white hover:border-[#0284C7] transition-all cursor-pointer"
              >
                <ArrowLeft02Icon size={18} />
              </button>
            </div>
          </div>

          <h2 className="text-[28px] md:text-[36px] font-black text-[#101828] dark:text-white leading-tight mb-4">
            برای مزایا به برنامه آموزشی هوشمند دسترسی پیدا کنید.
          </h2>

          <p className="text-[#667085] dark:text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>

          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4">
              <AvatarGroup max={3} total={15} size="md">
                <Avatar src="https://i.pravatar.cc/150?img=1" />
                <Avatar src="https://i.pravatar.cc/150?img=2" />
                <Avatar src="https://i.pravatar.cc/150?img=3" />
              </AvatarGroup>

              <span className="text-xl font-black text-[#101828] dark:text-white">
                4.8
              </span>
            </div>

            <div
              dir="ltr"
              className="flex items-center gap-1 text-amber-400 text-sm"
              aria-label="امتیاز 5 از 5"
            >
              {"★".repeat(5)}
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.1 },
            }}
            className="w-full !py-6"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="!h-auto">
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-300 rounded-[24px] p-8 flex flex-col justify-between bg-white dark:bg-gray-800 border ${
                      isActive
                        ? "scale-100 opacity-100 shadow-xl border-[#0284C7] dark:border-[#0284C7]"
                        : "scale-95 opacity-40 blur-[0.4px] border-[#EAECF0] dark:border-gray-700"
                    }`}
                    style={{ minHeight: "320px" }}
                  >
                    <div>
                      <div
                        dir="ltr"
                        className="flex gap-1 text-amber-400 mb-4 text-sm justify-end"
                      >
                        {"★".repeat(rev.rating)}
                      </div>

                      <p className="text-[#344054] dark:text-gray-300 text-[14px] leading-relaxed mb-6">
                        {rev.comment}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-[#F2F4F7] dark:border-gray-700">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />

                      <div className="flex flex-col text-right">
                        <span className="font-bold text-[15px] text-[#1D2939] dark:text-white">
                          {rev.name}
                        </span>
                        <span className="text-[13px] text-[#667085] dark:text-gray-400">
                          {rev.username}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
