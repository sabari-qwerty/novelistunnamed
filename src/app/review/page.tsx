import PinterestGrid from "@/components/showImage";
import { FC } from "react";

const data = ["bg-[#361e3b]", "bg-[#bc5493]", "bg-[#758a9b]", "bg-[#b0b0b0]"];

const Page: FC = () => {
  return (
    // <div className="">
    //   {data.map((data, key) => (
    //     <div
    //       key={key}
    //       className={`${data} w-8 h-8 text-white py-6 px-8 text-center rounded-lg `}
    //     >
    //       hello
    //     </div>
    //   ))}
    // </div>
    <PinterestGrid />
  );
};

export default Page;
