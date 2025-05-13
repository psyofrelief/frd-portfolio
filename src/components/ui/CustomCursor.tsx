"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer =
        getComputedStyle(target).cursor === "pointer" ||
        target.closest("[role=button], a, button");

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${isPointer ? 3 : 1})`;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none size-6 rounded-full mix-blend-difference bg-white translate-x-[-50%] translate-y-[-50%] will-change-transform transition-transform duration-100 ease-out"
    />
  );
}
