import React, { useState } from "react";
import {
  FiPlus,
  FiUser,
  FiSliders,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";
import Header from "../components/Header";
import Profile from "../views/Profile";
import Workout from "../views/Workout";
import Measurement from "../views/Measurement";
import History from "../views/History";
import Exercice from "../views/Exercice";

const Home = () => {
  const menu = [
    {
      title: "Profile",
      svg: <FiUser />,
      component: <Profile />,
    },
    {
      title: "History",
      svg: <FiCalendar />,
      component: <History />,
    },
    {
      title: "Workout",
      svg: <FiPlus />,
      component: <Workout />,
    },
    {
      title: "Exercises",
      svg: <FiActivity />,
      component: <Exercice />,
    },
    {
      title: "Measure",
      svg: <FiSliders />,
      component: <Measurement />,
    },
  ];

  const [activeMenu, setActiveMenu] = useState("Profile");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed bottom-0 left-0 right-0">
        <Header
          menu={menu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="flex-grow p-4 bg-[#F6F6FE]">
        {menu.find((item) => item.title === activeMenu)?.component}
      </div>
    </div>
  );
};

export default Home;
