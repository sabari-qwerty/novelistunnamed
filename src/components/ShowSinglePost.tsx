import { singlePost } from "@/interface/types";
import { getSinglePost } from "@/service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FC } from "react";

interface ShowSinglePost {
  slug: string;
}

export const ShowSinglePost: FC<ShowSinglePost> = ({ slug }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["single"],
    queryFn: () =>
      getSinglePost(slug)
        .then((data) => data[0])
        .catch((err) => err),
  });

  if (isLoading) return <div className="w-full bg-black h-screen"></div>;
  return (
    <main className="flex  sm:flex-col lg:flex-row -z-10">
      <div
        className={`flex flex-col space-y-8      justify-center items-center pb-10 ${
          [...data["connections"][0]["post"]].length > 0
            ? "lg:w-3/5  sm:w-4/5   mx-auto"
            : "lg:w-3/5"
        } `}
      >
        <h1 className="text-2xl font-bold">{data["title"]}</h1>
        <div className="max-w-[400px] max-h-[600px] overflow-hidden">
          <img src={data["featuredImages"]["url"]} alt="featuredImages" />
        </div>
        <div>
          <div className="flex  text-sm w-[95%]  items-center justify-center">
            <img
              src={data["authors"][0]["photo"]["url"]}
              alt="data"
              className="w-10 h-10 rounded-full"
            />
            <div className="pl-4 flex flex-col space-y-1">
              <span>{data["authors"][0]["name"]}</span>
              <p>{data["authors"][0]["bio"]}</p>
            </div>
          </div>
        </div>
        <div
          className="pt-6 w-3/5 flex justify-center flex-col space-y-4 text-center"
          dangerouslySetInnerHTML={{
            __html: data["content"]["html"],
          }}
        ></div>
      </div>
      <div
        className={`   ${
          [...data["connections"][0]["post"]].length > 1
            ? "right-0  lg:w-2/5 sm:w-4/5  mx-auto     flex justify-center"
            : "hidden"
        } `}
      >
        <div className="     flex  lg:flex-col    lg:w-full    overflow-scroll  items-center space-y-6">
          {[...data["connections"][0]["post"]]
            .filter((data) => data["slug"] != slug)
            .map((data, key) => (
              <div
                className="card sm:min-w-[400px]  lg:w-96 bg-base-100 shadow-xl "
                key={key}
              >
                <div className="card-body">
                  <h2 className="card-title">{data["title"]}</h2>
                  <p>{data["excerot"]}</p>
                  <Link
                    href={`/horror-novels/${data["slug"]}`}
                    className="card-actions justify-end"
                  >
                    <button className="btn btn-primary">Read more</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};