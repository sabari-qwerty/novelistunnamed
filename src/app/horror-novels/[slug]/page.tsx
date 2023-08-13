"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import {} from "@/service";
import { useQuery } from "@tanstack/react-query";
import { ShowSinglePost } from "@/components/ShowSinglePost";
import { HorrorLayout } from "@/components/Layout/HorrorLaout";
const page = () => {
  const slug = usePathname().split("/")[2];

  // const { data, isLoading } = useQuery({
  //   queryKey: ["singlepost"],
  //   queryFn: () => singlePost(slug).then((data) => data["data"]["data"]),
  // });

  // if (isLoading) return <>loadin</>;
  return (
    <main className="text-white">
      <HorrorLayout>
        <ShowSinglePost slug={slug} />
      </HorrorLayout>
    </main>
  );
};

export default page;
