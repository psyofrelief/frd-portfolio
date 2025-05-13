"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ElementType } from "react";

export default function TypeText({
  text,
  className = "",
  delay = 0,
  speed = 0.04, // seconds between each character
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: ElementType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const chars = text.split("");
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="[display:inline-block]"
          variants={{
            hidden: { display: "none" },
            visible: { display: "inline-block" },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}
