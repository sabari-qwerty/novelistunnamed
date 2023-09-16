import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Provider } from "@/util/provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novelistunnamed",
  description: `A PLACE TO LET YOUR IMAGINATIONS RUN WILD
  Welcome to the land of mysteries, heebie-jeebies, cliffhanger, black comedy, and a dash of romance to spice it up
  `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-[#1d232a]`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
