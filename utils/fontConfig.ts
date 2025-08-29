import { Work_Sans } from "next/font/google";

export const fontWorkSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-work-sans",
  display: "swap",
});