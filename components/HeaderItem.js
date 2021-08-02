// in  es6 we can do something called destructuring
function HeaderItem({ Icon, title }) {
  return (
    // flex col makes it in column
    // itemcenter to make it center, and cursor pinter to have  cursor on hover
    <div className="flex flex-col items-center group  cursor-pointer w-10 sm:w-10 hover:text-white">
      <Icon className=" stroke-current text-gray-300 h-5 mb-1 transition duration-800 group-hover:-translate-y-1" />
      <p className="opacity-0 text-xs font-mono group-hover:opacity-100  tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
