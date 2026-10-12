import React from "react";
import subtractImg from "../assets/Subtract.png"; 

export default function WhyUsSection() {
  return (
    <section 
      dir="rtl" 
      className="cursor-pointer hidden lg:block w-full py-14 px-6 bg-white dark:bg-[#212121] select-none transition-colors duration-200"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[400px]">
            <img 
              src={subtractImg} 
              alt="گروهی از یادگیرندگان" 
              className="w-full h-[450px] object-cover rounded-[40px] shadow-sm"
            />

            <div className="absolute top-85 right-58 w-[170px] h-[155px] bg-[#00C5EB] rounded-[32px] flex flex-col justify-center items-center text-white shadow-xl z-10">
              <span className="text-[38px] font-black tracking-tighter leading-none mb-1">
                +20
              </span>
              <p className="text-[12px] font-bold text-center leading-[1.6] px-2">
                سال سابقه آموزش<br />در برنامه‌نویسان
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center items-start text-right max-w-[430px] mx-auto lg:mx-0">
          <h2 className="text-[22px] md:text-[26px] font-black text-[#101828] dark:text-white leading-[1.35] mb-3.5 transition-colors duration-200">
            چرا به یک جامعه‌ی یادگیرندگان مادام‌العمر نیاز داریم؟
          </h2>

          <p className="text-[13px] font-normal text-[#667085] dark:text-gray-300 leading-[1.9] mb-5 text-justify transition-colors duration-200">
            زیرا برنامه‌نویسی فقط یک مهارت فنی نیست؛ راهی است برای تقویت تفکر منطقی، حل مسئله و ساختن آینده‌ای روشن‌تر. با همراهی یک جامعه فعال و پشتیبان، می‌توانی بر چالش‌ها مسلط شوی و مسیر رشد خود را با اعتماد بیشتری طی کنی.
          </p>

          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#E0F7FA] dark:bg-cyan-500/10 flex items-center justify-center shrink-0 text-[#00C5EB] transition-colors duration-200">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14.5px] font-bold text-[#101828] dark:text-white mb-0.5 transition-colors duration-200">
                رهبر مؤثر آینده باش
              </h3>
              <p className="text-[12.5px] text-[#667085] dark:text-gray-400 leading-[1.7] transition-colors duration-200">
                کلاس‌های برنامه‌نویسی ما طوری طراحی شده‌اند که بتوانی در هر سطحی که هستی، مهارت‌هایی واقعی و کاربردی کسب کنی.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#E0F7FA] dark:bg-cyan-500/10 flex items-center justify-center shrink-0 text-[#00C5EB] transition-colors duration-200">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M10 10h10" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14.5px] font-bold text-[#101828] dark:text-white mb-0.5 transition-colors duration-200">
                مسیر پیشرفت شفاف و قابل اندازه‌گیری
              </h3>
              <p className="text-[12.5px] text-[#667085] dark:text-gray-400 leading-[1.7] transition-colors duration-200">
                در هر مرحله می‌توانی رشد خود را ببینی، پروژه‌هایت را توسعه دهی و نتایج واقعی به دست بیاوری.
              </p>
            </div>
          </div>

          <button className="bg-[#00C5EB] text-white font-bold text-[13px] px-6 py-2.5 rounded-full hover:bg-[#00b2d4] transition-all cursor-pointer shadow-sm hover:shadow">
            درباره سفر ما بیشتر بدانید
          </button>
        </div>

      </div>
    </section>
  );
}
