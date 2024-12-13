import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AAA DEV. - Andreas Aagaard",
  description: "This is my Port Folio. Feel free to take a look, and contact me if you find anything interesting!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "AAA DEV. - Andreas Aagaard",
    description: "This is my Port Folio. Feel free to take a look, and contact me if you find anything interesting!",
    url: "https://aaadev.dk",
    image: "/opengraph-image-aaa.png",
    type: "website"
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased ")}>
        {children}
      </body>
    </html>
  );
}
