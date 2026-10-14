import React from "react";
import instructorImg from "../../assets/images/Rectangle-5122-1 1.png";

function InstructorCard({ instructor }) {
  return (
    <article className="cursor-pointer group flex flex-col items-center">
      <div className="relative mb-4 flex h-[250px] w-[230px] items-end justify-center">
        <div className="absolute bottom-0 left-0 h-[190px] w-full rounded-2xl bg-[#07687c]/20 dark:bg-[#07687c]/30 overflow-hidden">
          <div className="absolute left-0 top-0 h-[55px] w-[65px] rounded-br-[30px] bg-white dark:bg-[#212121] transition-colors duration-200" />
        </div>

        <img
          src={instructorImg}
          alt={instructor.name}
          className="relative z-10 h-[240px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="text-center">
        <h3 className="text-[18px] font-black text-[#1E293B] dark:text-white transition-colors duration-200">
          {instructor.name}
        </h3>
        <p className="text-[14px] font-medium text-[#475467] dark:text-gray-300 mt-1 transition-colors duration-200">
          {instructor.role}
        </p>
        <p className="text-[14px] font-medium text-[#475467] dark:text-gray-400 transition-colors duration-200">
          تعداد دوره‌ها: {instructor.coursesCount}
        </p>
      </div>
    </article>
  );
}

export default function TopInstructors() {
  const instructors = [
    { id: 1, name: "دکتر بحرالعلوم", role: "طراحی وب سایت", coursesCount: "3 دوره" },
    { id: 2, name: "دکتر بحرالعلوم", role: "طراحی وب سایت", coursesCount: "3 دوره" },
    { id: 3, name: "دکتر بحرالعلوم", role: "طراحی وب سایت", coursesCount: "3 دوره" },
    { id: 4, name: "دکتر بحرالعلوم", role: "طراحی وب سایت", coursesCount: "3 دوره" },
  ];

  return (
    <section
      dir="rtl"
      className="w-full bg-white px-4 py-8 transition-colors duration-200 dark:bg-[#212121] md:py-12 select-none"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-[28px] font-black text-[#101828] dark:text-white tracking-tight">
            اساتید برتر
          </h2>
          <p className="mx-auto max-w-[650px] text-[14px] leading-6 text-[#475467] dark:text-gray-300 font-medium">
            کلاس‌های مسترلاین توسط رهبران صنعت آموزش داده می‌شود که خود بسیار
            هیجان‌زده هستند ابزارها، تکنیک‌ها و سفرهای حرفه‌ای خود را با شما به
            اشتراک بگذارند.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#0CBDE2] dark:bg-[#07687C] hover:bg-[#065a6b] dark:hover:bg-[#055363] text-white rounded-2xl px-10 py-3 text-[15px] font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer">
            دوست داری بیشتر ببینی
          </button>
        </div>
      </div>
    </section>
  );
}
