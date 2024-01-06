"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { createContext } from "react";

export const PathNameContext = createContext();

function Theming({ children }) {
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
