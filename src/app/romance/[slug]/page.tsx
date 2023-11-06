"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import {} from "@/service";
import { useQuery } from "@tanstack/react-query";
import { ShowSinglePost } from "@/components/ShowSinglePost";
import { HorrorLayout } from "@/components/Layout/HorrorLaout";
const Page: FC = () => {
  const path = usePathname();
  const slug = path.split("/")[2];
  const catgery = path.split("/")[1];

  // const { data, isLoading } = useQuery({
  //   queryKey: ["singlepost"],
  //   queryFn: () => singlePost(slug).then((data) => data["data"]["data"]),
  // });

  // if (isLoading) return <>loadin</>;
  return (
    <main className="text-white relative">
      <ShowSinglePost slug={slug} type="poems" catgery={catgery} />
    </main>
  );
};

export default Page;
