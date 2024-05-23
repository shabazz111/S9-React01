import React, { useEffect, useState } from "react";
import DashBoardCard from "../../components/DashBoardCard";
import { handleDashBoardFetch } from "../../api/user-api";
import Header from "../../components/Header";
import PageHoc from "../../components/PageHoc";

const Compo = ({ setLoader }) => {
  const [data, setData] = useState([]);

  const fetchMyDashBoard = () => {
    handleDashBoardFetch({ setLoader, setData });
  };

  useEffect(() => {
    fetchMyDashBoard();
  }, []);

  return (
    <>
      <div id="right_bar" className="flex w-full h-fit p-10  flex-wrap">
        {Object.keys(data)?.map((e, i) => (
          <DashBoardCard key={i} cardData={e} allCards={data} />
        ))}
      </div>
    </>
  );
};

const Home = PageHoc(Compo);

export default Home;
