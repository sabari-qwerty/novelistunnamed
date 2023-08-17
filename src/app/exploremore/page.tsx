"use client";
import { ShowCatgaryData } from "@/components/ShowCatgaryData";
import { useState } from "react";

const Exploremore = () => {
  const [count, setCount] = useState(0);
  return (
    <ShowCatgaryData
      catgrayname="exploremore"
      catgaryid="clkwk9mgw06ma0bpmrsqv7g76"
      skip={count}
    />
  );
};

export default Exploremore;
