import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="flex h-full gap-2 ">
      <div className="w-20 h-full">
        <img
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/12/16630035401268.jpg"
          className="object-cover h-full rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-xl font-bold">{user.pseudo}</h2>
        <p className="text-md">200 workouts</p>
      </div>
    </div>
  );
};

export default ProfileCard;
