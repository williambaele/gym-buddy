import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex gap-2 h-full ">
      <div className="h-full w-20">
        <img
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/12/16630035401268.jpg"
          className="rounded-full object-cover h-full"
          alt="profile"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <h2 className="text-xl font-bold">William</h2>
        <p className="text-md">200 workouts</p>
      </div>
    </div>
  );
};

export default ProfileCard;
