"use client";
import { FC } from "react";
import { getCatgary } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { ShowCatgaryData as SCD, posts } from "@/interface/types";
import Link from "next/link";

export const ShowCatgaryData: FC<SCD> = ({ catgrayname, catgaryid, skip }) => {
  const { data, isLoading } = useQuery({
    queryKey: [catgrayname],
    queryFn: () =>
      getCatgary(catgaryid, skip).then(
        (data) => data["data"]["data"]["categaries"][0]["posts"]
      ),
  });

  if (isLoading) return <>loading</>;

  return (
    <div className="w-full h-full bg-[#1d232a]">
      <div className="flex flex-col space-y-8 xl:w-3/5 lg:w-4/5 bg-[#1d232a] sm:w-[90%] mx-auto text-[#ffffffb6]">
        {data.map((data: posts, key: number) => (
          <Link
            href={`/${catgrayname}/${data.slug}`}
            key={key}
            className="card lg:card-side  shadow-xl bg-[#1d232a]"
          >
            <div className=" sm:w-full lg:w-fit sm:mx-auto flex lg:justify-start lg:mx-0 sm:justify-center">
              <figure className="min-w-[200px] min-h-[400px] max-w-[200px] max-h-[400px] ">
                <img
                  src={data.featuredImages.url}
                  alt="Album"
                  className="rounded-md"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.excerot}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
