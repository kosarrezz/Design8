import React from "react";
import cssIcon from "../../assets/images/Rectangle 10.png"; 
import { StarIcon, UserMultiple02Icon } from "hugeicons-react";

const coursesData = [
  {
    id: 1,
    title: "آموزش Node.js",
    instructor: "دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
  {
    id: 2,
    title: "آموزش Node.js",
    instructor: "دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
  {
    id: 3,
    title: "آموزش Node.js",
    instructor: "دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
  {
    id: 4,
    title: "آموزش Node.js",
    instructor: "دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
  {
    id: 5,
    title: "آموزش Node.js",
    instructor: " دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
  {
    id: 6,
    title: "آموزش Node.js",
    instructor: "دکتر بحرالعلومی",
    rating: 5,
    students: "22",
    oldPrice: "400.000 تومان",
    price: "400.000 تومان",
    discount: "20%",
  },
];

export default function BestCoursesSection() {
  return (
    <section dir="rtl" className="w-full py-16 bg-[#F8FAFC] dark:bg-[#2E2E2E] font-sans transition-colors duration-200 hidden md:block">
      <div className="max-w-[1240px] mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-[30px] md:text-[34px] font-black text-[#101828] dark:text-white">
              برترین دوره ها
            </h2>
            <svg
              className="absolute -bottom-2 left-0 w-full h-[10px] text-[#00B4D8]"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.5C45 2.5 115 1.5 157 7"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="relative w-full max-w-[360px] bg-[#1E40AF] dark:bg-[#1e293b] rounded-[24px] pt-12 pb-3 px-3 shadow-md overflow-hidden flex flex-col justify-end transition-colors duration-200"
            >
              <div
                style={{
                  clipPath:
                    "polygon(50% 0%, 65% 15%, 85% 15%, 85% 35%, 100% 50%, 85% 65%, 85% 85%, 65% 85%, 50% 100%, 35% 85%, 15% 85%, 15% 65%, 0% 50%, 15% 35%, 15% 15%, 35% 15%)",
                }}
                className="absolute top-3 left-3 w-14 h-14 bg-[#EF4444] text-white font-black flex flex-col items-center justify-center shadow-md z-10 select-none leading-tight"
              >
                <span className="text-[11px]">{course.discount}</span>
                <span className="text-[8px]">تخفیف</span>
              </div>

              <div className="flex justify-center items-center my-4">
                <img
                  src={cssIcon}
                  alt="CSS Icon"
                  className="h-16 w-auto object-contain drop-shadow"
                />
              </div>

              <div className="bg-white dark:bg-[#212121] rounded-[20px] p-4 text-right shadow-sm mt-3 border border-transparent dark:border-[#333333] transition-colors duration-200">
                
                <div className="w-10 h-1 bg-[#FBBF24] rounded-full mb-3" />

                <h3 className="text-[17px] font-black text-[#101828] dark:text-white mb-3">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-[#333333]">
                  <div className="flex items-center gap-1.5 bg-[#0CBDE2] dark:bg-[#0369a1]/30 text-[#0284C7] dark:text-[#38bdf8] text-[11px] font-bold px-2 py-1 rounded-lg">
                    <span>{course.instructor}</span>
                  </div>

                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={14} fill="#F59E0B" className="text-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#10B981] font-black text-[13px]">
                      {course.price}
                    </span>
                    <span className="text-red-500 line-through text-[11px]">
                      {course.oldPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-[#F1F5F9] dark:bg-[#2c2c2c] text-[#64748B] dark:text-gray-300 text-[11px] px-2 py-0.5 rounded-lg">
                    <UserMultiple02Icon size={13} />
                    <span>{course.students}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
