import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AAA DEV. - Andreas Aagaard",
  description: "This is my Port Folio. Feel free to take a look, and contact me if you fint anything interesting!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased bg-gradient-to-br from-gray-800 to-black")}>
        {children}
      </body>
    </html>
  );
}
