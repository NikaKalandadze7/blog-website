import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-14 p-4">
      <div className="flex flex-col justify-between items-center text-gray-400 text-base   gap-5">
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
        <div className="flex gap-3">
          <Link href={"#"}>Terms And Conditions</Link>
          <span>/</span>
          <Link href={"#"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
