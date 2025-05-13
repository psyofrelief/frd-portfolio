"use client";

import { useEffect, useState } from "react";

export default function PerthClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const perthTime = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Perth",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(perthTime);
    };

    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time || "12:45 pm"}</span>;
}
