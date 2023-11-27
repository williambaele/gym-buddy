// Home.js
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="fixed bottom-0 left-0 right-0">
        <Header />
      </div>
    </div>
  );
};

export default Home;
