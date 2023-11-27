import React from "react";

const Header = ({ menu, activeMenu, setActiveMenu }) => {
  return (
    <div className="w-full h-16 shadow-md grid grid-cols-5 divide-x divide-gray-50">
      {menu.map((item, index) => (
        <div
          onClick={() => setActiveMenu(item.title)}
          key={index}
          className={`flex items-center justify-center text-white font-bold cursor-pointer ${
            activeMenu === item.title
              ? "bg-[#C8C7EB]"
              : "bg-[#312E7F] hover:bg-[#312E7F]/90"
          }`}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
};

export default Header;
