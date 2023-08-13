"use client";
import { HorrorLayout } from "@/components/Layout/HorrorLaout";
import { ShowCatgaryData } from "@/components/ShowCatgaryData";
import { useState } from "react";

const HorrorPage = () => {
  const [count, setCount] = useState(0);

  return (
    <ShowCatgaryData
      catgrayname="horror-novels"
      catgaryid="clkwnaw8b0qgo0bo593msdfdh"
      skip={count}
    />
  );
};

export default HorrorPage;
