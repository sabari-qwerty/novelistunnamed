import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroPageContent } from "../CommonContent";

export const HeroPageBig: FC = () => {
  return (
    <div className=" bg-black w-full h-full sm:hidden lg:flex">
      {HeroPageContent.map((i, k) => (
        <Link
          href={i.dir}
          key={k}
          className="w-1/4 hover:w-2/3 h-full duration-500 hover-show"
        >
          <div className={`w-full h-full    `}>
            <Image
              src={i.img}
              width={600}
              height={800}
              alt="none"
              className="w-full h-full object-cover hover:object-fill opacity-80"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
