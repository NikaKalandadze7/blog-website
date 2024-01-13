import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white pl-2 border-[1px] border-solid border-[#c7c7c7] overflow-hidden h-10">
      <input
        type="text"
        placeholder="Search.."
        className="text-xs  w-[80%] h-8 pl-2"
      />
    </div>
  );
};

export default SearchBar;
