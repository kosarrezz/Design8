import React from "react";
import logoPart1 from "./assets/Untitled-1 3.svg";
import logoPart2 from "./assets/Untitled-1 4.svg";
import samandehiImg from "./assets/samandehi-ezgif 1.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer dir="rtl" className="w-full mt-24 relative select-none">
      
      <div className="absolute -top-[32px] left-[8%] md:left-[8%] z-10 w-24 h-24 bg-[#2E2E2E] dark:bg-[##2E2E2E] flex items-center justify-center rounded-2xl transition-colors duration-200">
        <button
          onClick={scrollToTop}
          aria-label="رفتن به بالای صفحه"
          className="w-20 h-20 bg-[#0BACCE] hover:bg-[#0096C7] text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className="w-full bg-[#f8fafc] dark:bg-[#212121] rounded-t-[48px] px-8 md:px-16 pt-20 pb-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-14 text-right">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <img src={logoPart1} alt="لوگو" className="h-10 w-auto" />
                <img src={logoPart2} alt="آکادمی" className="h-10 w-auto ml-16" />
              </div>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-7 font-light text-justify">
                «گروه بازرگانی آهن یک با بیش از یک دهه سابقه ، با نگاهی متفاوت پاسخگوی نیاز تمامی مشتریان در زمینه تامین و توزیع انواع مقاطع و ورق فولادی ،اتصالات ،شیرآلات صنعتی و سایر تجهیزات در صنایع نفت و گاز و پتروشیمی ، ساختمانی و آبرسانی با دو شعبه فعال در بازار آهن شاد آباد و پونک ، به دو صورت آنلاین و حضوری ، امکان تامین کالاهای مورد نیاز صنایع مطابق با استاندارد های روز دنیا را فراهم نموده است.»             
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 dark:text-white text-base">لینک های مفید</h3>
              <div className="w-10 h-1 bg-[#0BACCE] rounded-full mb-2"></div>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-300">
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">ارزش های ما</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">هیئت مشاوران ما</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">شرکای ما</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">شریک شدن</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">در Future Learn شرکت کنید</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">Quizlet Plus</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 dark:text-white text-base">شرکت ما</h3>
              <div className="w-10 h-1 bg-[#0BACCE] rounded-full mb-2"></div>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-300">
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">با ما تماس بگیرید</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">معلم شوید</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">وبلاگ</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">مربی</li>
                <li className="hover:text-[#0BACCE] dark:hover:text-[#0BACCE] cursor-pointer transition-colors">مناسب ها</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 dark:text-white text-base">در تماس باشید</h3>
              <div className="w-10 h-1 bg-[#0BACCE] rounded-full mb-2"></div>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-6">هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم</p>
            </div>

            <div className="space-y-3 flex flex-col items-center md:items-start justify-start md:mr-auto md:pr-8">
              <div className="bg-white dark:bg-[#1a1a1a] p-3 rounded-2xl shadow-sm border border-transparent dark:border-[#333333] transition-colors">
                <img src={samandehiImg} alt="ساماندهی" className="w-20 object-contain" />
              </div>
            </div>

          </div>

          <div className="bg-[#6A6A7A] dark:bg-[#181818] rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white transition-colors duration-200">
            <p className="text-[12px] opacity-90 text-center sm:text-right">
              تمام حقوق مادی و معنوی این طراحی متعلق به امیرمحمد خیرآبادی میباشد ©
            </p>

            <div className="flex items-center gap-3" dir="ltr">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-600 dark:bg-[#2a2a2a] flex items-center justify-center hover:bg-[#0BACCE] dark:hover:bg-[#0BACCE] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full bg-slate-600 dark:bg-[#2a2a2a] flex items-center justify-center hover:bg-[#0BACCE] dark:hover:bg-[#0BACCE] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-600 dark:bg-[#2a2a2a] flex items-center justify-center hover:bg-[#0BACCE] dark:hover:bg-[#0BACCE] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.5 0 9 1.5 9 4.714V8z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-slate-600 dark:bg-[#2a2a2a] flex items-center justify-center hover:bg-[#0BACCE] dark:hover:bg-[#0BACCE] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-600 dark:bg-[#2a2a2a] flex items-center justify-center hover:bg-[#0BACCE] dark:hover:bg-[#0BACCE] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
