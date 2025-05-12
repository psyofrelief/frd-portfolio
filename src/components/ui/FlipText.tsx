"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function FlipText({
  children,
  className = "",
  duration = 1,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, {
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });

    tl.fromTo(
      ref.current,
      { rotationX: 180, opacity: 0 },
      {
        rotationX: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
      },
    ).to(
      ref.current,
      {
        rotationX: 180,
        opacity: 0,
        duration,
        ease: "power2.in",
      },
      `+=0.1`,
    );

    return () => {
      tl.kill();
    };
  }, [duration, delay]);

  return (
    <div
      ref={ref}
      className={`text-center [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}
