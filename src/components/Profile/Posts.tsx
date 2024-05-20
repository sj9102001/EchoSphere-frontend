import Image from "next/image";
import React from "react";

const Posts = () => {
  return (
    <div id="posts" className="flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 py-4 min-w-fit ">
        <Image
          className="block  h-fit w-fit"
          src={"/favicon.ico"}
          width={144}
          height={144}
          alt=""
        ></Image>
        <Image
          className="block  h-fit w-fit"
          src={"/favicon.ico"}
          width={144}
          height={144}
          alt=""
        ></Image>
        <Image
          className="block  h-fit w-fit"
          src={"/favicon.ico"}
          width={144}
          height={144}
          alt=""
        ></Image>
        <Image
          className="block  h-fit w-fit"
          src={"/favicon.ico"}
          width={144}
          height={144}
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Posts;
