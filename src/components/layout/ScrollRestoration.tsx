"use client";
import { useEffect } from "react";

export function ScrollRestoration({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
