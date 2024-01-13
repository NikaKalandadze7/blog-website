import Image from "next/image";
import React from "react";

const Card = ({ image, categories, date, title, description, author }) => {
  return (
    <div className="w-2/6 ">
      <Image
        src={image}
        alt={title}
        width={"550"}
        height={"500"}
        className="rounded-lg"
      />
      <div className="flex flex-row mt-6 gap-2 items-center">
        <span className="font-bold text-sm">
          {categories.map((category) => category)}
        </span>
        <span className="text-xs text-gray-400">-{date}</span>
      </div>
      <h3 className="mt-2 mb-4 font-bold text-lg">{title}</h3>
      <div className="mb-3 text-gray-500 text-base">{description}</div>
      <div className="flex flex-row items-center gap-3">
        <div
          className="rounded-[50%] w-12 h-12 bg-cover bg-top "
          style={{ backgroundImage: `url(${author.authorPic})` }}
        ></div>
        <div className="flex gap-1 flex-col">
          <p className="font-bold">{author.authorName}</p>
          <span className="text-xs text-gray-400">{author.authorPosition}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
