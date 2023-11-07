"use client";
import { FC, useEffect, useState } from "react";

import "../app/goback.css";

import { usePathname, useRouter } from "next/navigation";

export const Goback: FC = () => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <>
      {pathname !== "/" && (
        <button
          className="fixed top-4 left-4 z-50 sm:invisible lg:visible  opacity-20 hover:opacity-100"
          onClick={() => router.back()}
        >
          <div className="center-con">
            <div className="round  flex w-[40px] h-[40px] justify-center items-center mx-auto ">
              <div id="cta ">
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
};
