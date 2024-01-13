import Link from "next/link";
import React from "react";
import { SearchBar } from "@Components";

const Header = () => {
  return (
    <div className=" border-gray-300 border-b-[1px]">
      <header className="container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          <SearchBar />
          <h1 className="text-lg font-bold">
            <Link href={"/"}>BLOG WEBSITE</Link>
          </h1>
          <div className="flex gap-2">
            <Link href={"/login"}>Login</Link>
            <Link href={"#"}>Sign up</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
