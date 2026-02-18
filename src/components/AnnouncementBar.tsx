"use client";
import React from "react";
import NumericText from "./NumericText";

export default function AnnouncementBar() {
  // Using NumericText component will handle the directionality better directly in the JSX
  // Splitting the message to handle numbers specifically
  const phone = "0540668896";
  const discount = "25%";
  
  const MarqueeContent = () => (
    <>
      &nbsp;&nbsp;خصم <NumericText>{discount}</NumericText> لكافة خدماتنا بكافة أحياء الرياض لفترة محدودة&nbsp;&nbsp;•&nbsp;&nbsp;اتصل الآن: <NumericText>{phone}</NumericText>&nbsp;&nbsp;•
    </>
  );

  return (
    <div className="bg-[#D4AF37] text-[#002855] overflow-hidden py-2 relative z-50" dir="ltr">
      <div className="animate-marquee flex whitespace-nowrap font-black text-sm md:text-lg">
      <div className="animate-marquee flex whitespace-nowrap font-black text-sm md:text-lg">
        {/* We need two sets of content. Each set must be wider than the screen. 
            Repeating 10 times should be sufficient for even 4k screens. */}
        <span dir="rtl" className="flex items-center">
          {Array(10).fill(null).map((_, i) => <React.Fragment key={i}><MarqueeContent /></React.Fragment>)}
        </span>
        <span dir="rtl" className="flex items-center">
          {Array(10).fill(null).map((_, i) => <React.Fragment key={i}><MarqueeContent /></React.Fragment>)}
        </span>
      </div>
      </div>
    </div>
  );
}
