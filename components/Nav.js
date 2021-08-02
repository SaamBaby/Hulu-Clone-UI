import requests from "../utils/Requests";
function Nav() {
  return (
    <nav>
      <div className=" flex px-5 sm:px-20 text-xs whitespace-nowrap space-x-10 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <p
            key={key}
            className="  last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover: text-white active:text-red-500 "
          >
            {title}
          </p>
        ))}
      </div>
      <div className='absolute top-0'/>
    </nav>
  );
}

export default Nav;
