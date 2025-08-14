"use client";

import React from "react";
// import { ThemeProvider } from "@material-tailwind/react";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  // return <ThemeProvider>{children}</ThemeProvider>;
  return <>{children}</>;
}

export default SiteLayout;
