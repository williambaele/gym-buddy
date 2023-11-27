import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const WelcomeChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 40, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 100, pv: 240, amt: 2400 },
  ];

  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-2">
      <h2 className="text-xl font-bold">Workouts per week</h2>
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WelcomeChart;
