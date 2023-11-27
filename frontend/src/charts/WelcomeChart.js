import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const WelcomeChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 4,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 4,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 3,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 4,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-2 shadow-sm">
      <h2 className="text-xl font-bold">Workouts per week</h2>
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />

            <Bar dataKey="uv" fill="#312E7F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WelcomeChart;
