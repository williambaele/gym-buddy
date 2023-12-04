import React from "react";
import { FiSettings } from "react-icons/fi";
import ProfileCard from "../components/ProfileCard";
import WelcomeChart from "../charts/WelcomeChart";

const Profile = ({ user, userWorkouts }) => {
  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between h-20">
        <ProfileCard user={user} userWorkouts={userWorkouts} />
        <FiSettings style={{ fontSize: "24px" }} className="cursor-pointer" />
      </div>
      <WelcomeChart />
    </div>
  );
};

export default Profile;
