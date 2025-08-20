"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class" // uses class="dark"
      defaultTheme="light" // light/dark/system
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
