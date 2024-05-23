import React, { useState } from "react";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between  xl:justify-end p-4 ">
      <div className="flex xl:hidden">
        <Icons iconType="menu" data={20} />
      </div>
      <div className="flex gap-5 ">
        <Icons iconType="bell" data={20} />
        <RightActionButton />
      </div>
    </div>
  );
};

const RightActionButton = () => {
  const [isOptions, setIsOptions] = useState(false);

  return (
    <div
      onClick={() => setIsOptions((e) => !e)}
      className="w-60 gap-1 cursor-pointer flex reltive justify-center items-center"
    >
      <img
        className="size-5 rounded-full"
        src="https://s9trucks-dev.s3.us-east-2.amazonaws.com/1713256325990%20-%20Admin.png"
        alt=""
      />
      <span> Hi Admin</span>

      {isOptions ? (
        <div className="flex w-40 absolute top-16 flex-col shadow-2xl overflow-hidden border  rounded-lg">
          <Link className="border-b-2 justify-center hover:bg-gray-100  items-center w-full flex border-b-gray-200 p-3">
            Profile
          </Link>
          <Link className="border-b-2 justify-center hover:bg-gray-100 items-center w-full flex border-b-gray-200 p-3">
            Tasks
          </Link>
          <Link className="justify-center hover:bg-gray-100 items-center w-full flex p-3">
            Logout
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
