"use client";
import { ShowCatgaryData } from "@/components/ShowCatgaryData";
import { FC, useState } from "react";

const Poems: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <ShowCatgaryData
      catgaryid="clkwfxa5t02wg0bpmzq1ud8qn"
      catgrayname="poem"
      skip={count}
    />
  );
};

export default Poems;
