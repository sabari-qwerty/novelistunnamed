import "./globals.css";
import "./goback.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Provider } from "@/util/provider";
import { Goback } from "@/components/goback";
import { ReviewButton } from "@/components/reviewButton";
import { CustomToastContainer } from "@/components/ToastContainer";
import { toast } from "react-toastify";
import { Toaster } from "react-hot-toast";

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
  const ShowToast = () => {
    toast.success("Thanks for your support ❤", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        backgroundColor: "#7e22ce",
        color: "#FFF",
        fontWeight: "bold",
      },
      icon: false,
      progressStyle: {
        backgroundColor: "#fff",
      },
    });
  };
  return (
    <html lang="en">
      <body className={` bg-[#1d232a]`}>
        <Provider>{children}</Provider>
        <Goback />
        <ReviewButton />
        <CustomToastContainer />
        <Toaster />
      </body>
    </html>
  );
}
