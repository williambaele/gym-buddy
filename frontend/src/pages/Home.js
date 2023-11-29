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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Home = ({ user }) => {
  const menu = [
    {
      title: "Profile",
      svg: <FiUser />,
      component: <Profile user={user} />,
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
    <div className="flex flex-col h-screen">
      <div className="fixed bottom-0 left-0 right-0">
        <Header
          menu={menu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="flex-grow p-4 bg-[#F6F6FE] pb-20">
        {menu.find((item) => item.title === activeMenu)?.component}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Home;
