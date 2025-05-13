"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ElementType, ReactNode } from "react";

export default function FadeUp({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
