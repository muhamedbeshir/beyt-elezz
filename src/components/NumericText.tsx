
import React from "react";

interface NumericTextProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Forces the direction of the text. Defaults to 'ltr' for numbers which
   * usually should be displayed Left-to-Right even in Arabic contexts (like phone numbers).
   */
  dir?: "ltr" | "rtl" | "auto";
  /**
   * If true, keeps the logical structure of the content isolated from surrounding text direction.
   */
  isolate?: boolean;
}

/**
 * A utility component to ensure numbers (phone numbers, dates, prices) are displayed correctly
 * in RTL layouts. By default, it enforces LTR direction which prevents phone numbers
 * from having their segments flipped or operators misplaced.
 */
export default function NumericText({ 
  children, 
  className = "", 
  dir = "ltr",
  isolate = true
}: NumericTextProps) {
  // unicode-bidi: isolate ensures that the directionality of this span doesn't affect
  // the surrounding text, and vice versa.
  const style: React.CSSProperties = isolate ? { unicodeBidi: "isolate" } : {};

  return (
    <span dir={dir} className={className} style={style}>
      {children}
    </span>
  );
}
