"use client";
import { ShowCatgaryData } from "@/components/ShowCatgaryData";
import { Goback } from "@/components/goback";
import Link from "next/link";
import { FC, useState } from "react";

const Romance = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <ShowCatgaryData
          catgaryid="clok5y12l0pqz0bpjg5wpk91y"
          catgrayname="romance"
          skip={count}
        />
      </div>
    </>
  );
};

export default Romance;
