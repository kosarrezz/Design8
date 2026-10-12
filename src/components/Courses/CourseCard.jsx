import React from "react";

export default function CourseCard({ title, desc, price, discount, variant = "default" }) {
  if (variant === "featured") {
    return (
      <div className="bg-[#00C5EB] rounded-[44px] p-8 text-white flex flex-col items-center justify-center shadow-lg w-full max-w-[380px] aspect-square">
        <div className="text-6xl mb-4">⚛️</div>
        <h3 className="text-3xl font-black">{title}</h3>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-[#EAECF0] p-6 flex flex-col items-center text-center transition hover:shadow-md">
      <h3 className="font-bold text-lg text-[#101828] mb-2">{title}</h3>
      <p className="text-sm text-[#475467] mb-5 line-clamp-2 leading-relaxed">{desc}</p>
      <button className="mt-auto w-full bg-[#00C5EB] hover:bg-[#00b4d8] text-white py-2.5 rounded-xl font-bold transition">
        مشاهده دوره
      </button>
    </div>
  );
}
