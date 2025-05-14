"use client";

import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Button from "./ui/Button";

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = Cookie.get("consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    Cookie.set("consent", String(accepted), {
      sameSite: "strict",
      expires: 365,
    });
    setVisible(false);
    document.body.style.overflow = "scroll";
  };

  if (
    !visible ||
    ["privacy-policy", "cookie-policy"].some((page) =>
      window.location.href.includes(page),
    )
  ) {
    return null;
  }

  return (
    <div
      id="cookie_consent_banner"
      className="fixed shadow-xl bottom-0 left-0 w-full xs:max-w-fit h-full max-h-fit  z-50 bg-background border border-outline flex flex-col gap-y-md p-sm"
    >
      <p className="max-w-[300px] text-2xs">
        We use optional cookies to enhance your browsing experience and
        understand how our site is used.
      </p>
      <div className="flex gap-sm">
        <Button
          className="w-full !text-2xs py-1 px-xs"
          onClick={() => handleConsent(true)}
        >
          Accept all
        </Button>
        <Button
          className="!text-2xs py-1 px-xs w-full"
          onClick={() => handleConsent(false)}
        >
          Required
        </Button>
      </div>
    </div>
  );
}
