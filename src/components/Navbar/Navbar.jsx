import { useState, useEffect } from "react";
import logoPart1 from "../../assets/Untitled-1 3.svg";
import logoPart2 from "../../assets/Untitled-1 4.svg";
import { Moon, Sun, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "صفحه اصلی", href: "#" },
  { id: 2, title: "دوره ها", href: "#courses" },
  { id: 3, title: "اساتید", href: "#teachers" },
  { id: 4, title: "اخبار و مقالات", href: "#articles" },
  { id: 5, title: "ارتباط با ما", href: "#contact" },
];

function FigmaMenuIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 12h11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 17h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark((prev) => !prev);
  }

  return (
    <header className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none mx-2 sm:mx-4 mt-3 px-3 sm:px-5 lg:px-8 py-2 transition-colors">
      <div className="max-w-[1320px] h-[52px] sm:h-[60px] mx-auto flex items-center justify-between font-bold">

        <div className="flex items-center gap-2 shrink-0">
          <img src={logoPart2} alt="لوگو" className="h-7 sm:h-8 w-auto shrink-0" />
          <img
            src={logoPart1}
            alt="آکادمی کد نویسی برتر"
            className="hidden lg:block h-8 w-auto shrink-0"
          />
        </div>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-[#0CBDE2] dark:hover:text-[#0CBDE2] text-sm transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
          
          <button
            type="button"
            onClick={toggleDarkMode}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="تغییر تم"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <button
            type="button"
            className="bg-[#0CBDE2] dark:bg-[#07687C] text-white h-9 sm:h-10 px-4 sm:px-6 rounded-full text-xs lg:text-sm flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            ورود یا ثبت نام
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center justify-center p-1 text-gray-800 dark:text-gray-100 hover:opacity-80 transition-opacity"
            aria-label="منو"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <FigmaMenuIcon className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-700 pt-4 pb-3 mt-2">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-700 dark:text-gray-200 hover:text-[#0CBDE2] dark:hover:text-[#0CBDE2] transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">حالت شب / روز</span>
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
