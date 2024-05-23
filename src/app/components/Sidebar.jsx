import React, { useEffect, useState } from "react";
import { ADMIN_ROUTES } from "../Constants/app-constant";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";

const Sidebar = () => {
  const [tab, setTab] = useState(location.pathname);

  useEffect(() => {
    setTab(location.pathname);
  }, [tab]);

  return (
    <div className="flex xl:relative fixed z-99   flex-col p-3 bg-gray-300 w-80 items-center shadow-lg h-screen">
      <span className="text-3xl text-primary w-full justify-end items-center  my-5 flex gap-3 ">
        <div className="flex w-1/2 justify-between">
          S9
          <div className="flex xl:hidden">
            <Icons iconType={"cross"} />
          </div>
        </div>
      </span>
      {ADMIN_ROUTES.map((e, i) => (
        <SidebarTab e={e} key={i} tab={tab} setTab={setTab} />
      ))}
    </div>
  );
};

const SidebarTab = ({ e, tab, setTab }) => {
  const navigate = useNavigate();
  return (
    <>
      {tab == e.route ? (
        <span className="w-full bg-primary my-4 cursor-pointer rounded-sm text-white flex justify-center p-2">
          {e?.name}
        </span>
      ) : (
        <span
          className="my-4 cursor-pointer"
          onClick={() => {
            navigate(e?.route);
            setTab(e?.route);
          }}
        >
          {e?.name}
        </span>
      )}
    </>
  );
};

export default Sidebar;
