import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" py-2 mx-2 group cursor-pointer ease in transition duration-200 transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        alt={`${BASE_URL}${result.poster_path}`}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div>
        <p className="truncate mt-2 font-serif text-xs max-w-md">
          {result.overview}
        </p>
        <h2 className="font-mono mt-2 text-l text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="font-mono group-hover:opacity-100 opacity-0 flex items_center text-xs">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .{""}
          <ThumbUpIcon className="h-4 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
