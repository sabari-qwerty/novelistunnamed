"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { singlePost } from "@/service";
const Page: FC = () => {
  const slug = usePathname().split("/")[2];

  const { data, isLoading } = useQuery({
    queryKey: ["singlepost"],
    queryFn: () => singlePost(slug),
  });

  if (isLoading) return <>loadin</>;
  return (
    <main className="text-white">
      <div>{JSON.stringify(data)}</div>
    </main>
  );
};

export default Page;
