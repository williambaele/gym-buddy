import React from "react";

const Header = () => {
  const menu = [
    {
      title: "Profile",
      svg: "",
    },
    {
      title: "History",
      svg: "",
    },
    {
      title: "Workout",
      svg: "",
    },
    {
      title: "Exercices",
      svg: "",
    },
    {
      title: "Measure",
      svg: "",
    },
  ];
  return (
    <div className="w-full bg-[#312E7F] h-16 shadow-md grid grid-cols-5">
      {menu.map((item, index) => (
        <div
          key={index}
          className="bg-[#312E7F] flex items-center justify-center text-white font-bold"
        >
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
