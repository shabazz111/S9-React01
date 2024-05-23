import React from "react";
import truck from "/truck01.svg";
import trips from "/trips.svg";
import standard from "/standard.svg";
import truckowner from "/truck-owner.svg";
import adminUser from "/admin-user.svg";
import driver from "/driver.svg";

const DashBoardCard = ({ cardData, allCards }) => {
  const imageData = {
    adminUsers: adminUser,
    customers: standard,
    driver: driver,
    trips: trips,
    truckowners: truckowner,
    trucks: truck,
  };

  return (
    <div className="flex my-2 mx-3 flex-col gap-2 w-80 min-h-52 items-start p-5 rounded-md bg-gray-100">
      <img src={imageData[cardData]} className=" h-16" alt="" />
      <span className="text-primary font-bold text-xl">{cardData}</span>
      <span className="text-4xl font-bold ">{allCards[cardData]}</span>
    </div>
  );
};

export default DashBoardCard;
