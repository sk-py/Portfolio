import "./globals.css";
// import { Inter } from "next/font/google";
import Theming from "@/components/providers/Theme";
// import UiProvider from "@/components/providers/UiProvider";
import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";
// import Resume from "./Resume/page";

export const metadata = {
  title: "Shaikh's Portfolio",
  description:
    "A Full-Stack dev evolving into backend wizard. Crafted web chats, job boards and many interesting projects. Explored PHP, ASP.NET, Java, Python for college gigs. However, my primary focus nowadays is on the MERN Stack. Git savvy, version control maestro. Let's code the future together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
