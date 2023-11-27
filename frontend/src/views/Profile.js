import React from "react";
import { FiSettings } from "react-icons/fi";
import ProfileCard from "../components/ProfileCard";
import WelcomeChart from "../charts/WelcomeChart";

const Profile = () => {
  return (
    <div className="h-full space-y-6">
      <div className="flex justify-between items-center h-20">
        <ProfileCard />
        <FiSettings style={{ fontSize: "24px" }} className="cursor-pointer" />
      </div>
      <WelcomeChart />
    </div>
  );
};

export default Profile;
