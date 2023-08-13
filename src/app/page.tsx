"use client";
import { LandingPage } from "@/components/LandingPage";
import { ShowCatgaryData } from "@/components/ShowCatgaryData";
// import { grapql_catgery_id } from "@/components/CommonContent";
// import { LandingPage } from "@/components/LandingPage";
import { getCatgary } from "@/service";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  return (
    // <ShowCatgaryData
    //   catgrayname="horror"
    //   catgaryid="clkwfxa5t02wg0bpmzq1ud8qn"
    //   skip={0}
    // />
    <LandingPage />
  );
}
