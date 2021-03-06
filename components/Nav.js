import requests from "../utils/Requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  return (
    <nav>
      <div className=" flex px-5 sm:px-20 text-xs whitespace-nowrap space-x-10 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <p
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover: text-white active:text-red-500 font-mono"
          >
            {title}
          </p>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
