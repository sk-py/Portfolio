"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { createContext } from "react";

export const PathNameContext = createContext("dark");

interface ThemeProviderProps {
  children: React.ReactNode
}

function Theming({ children }: ThemeProviderProps) {
  const pathName = usePathname();
  return (
    <PathNameContext.Provider value={pathName}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </PathNameContext.Provider>
  );
}
export default Theming;
