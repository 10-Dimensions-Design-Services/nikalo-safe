import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { useInView } from "react-intersection-observer"; // 👈 Add this

// Slightly decreasing fire accidents
const barData = [
  { name: "2014", val: 48 },
  { name: "2015", val: 40 },
  { name: "2016", val: 38 },
  { name: "2017", val: 42 },
  { name: "2018", val: 39 },
  { name: "2019", val: 35 },
  { name: "2020", val: 34 },
  { name: "2021", val: 32 },
  { name: "2022", val: 30 },
  { name: "2023", val: 29 },
];

// Slightly decreasing lives lost
const lineData = [
  { name: "2014", val: 40 },
  { name: "2015", val: 78 },
  { name: "2016", val: 75 },
  { name: "2017", val: 70 },
  { name: "2018", val: 60 },
  { name: "2019", val: 55 },
  { name: "2020", val: 50 },
  { name: "2021", val: 48 },
  { name: "2022", val: 40 },
  { name: "2023", val: 35 },
];

const radialData = [
  {
    name: "Info Gap",
    uv: 50,
    fill: "#fff",
  },
];

export default function FireStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 md:py-24 bg-[#F5F7FA]"
    >
      <div className="container-max px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          History That Shouldn't <span className="text-red-600">Repeat</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg border shadow text-center">
            <h3 className="text-xl font-semibold text-gray-900">80k - 100k</h3>
            <p className="text-gray-500 text-sm mb-2">
              Fire accidents
              <br />
              2014 - 2023
            </p>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={barData}>
                <XAxis dataKey="name" hide />
                <Bar
                  dataKey="val"
                  fill="#d63031"
                  radius={[4, 4, 0, 0]}
                  animationBegin={0}
                  animationDuration={1000}
                  isAnimationActive={inView} // 👈 Animate only on scroll
                  activeBar={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg border shadow text-center">
            <h3 className="text-xl font-semibold text-gray-900">50k–70k</h3>
            <p className="text-gray-500 text-sm mb-2">Lives lost</p>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" hide />
                <Line
                  type="monotone"
                  dataKey="val"
                  stroke="#e74c3c"
                  strokeWidth={2}
                  dot={true}
                  activeDot={false}
                  isAnimationActive={inView} // 👈 Animate only on scroll
                  animationBegin={0}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Card 3 */}
          <div className="bg-red-600 text-white p-4 rounded-lg shadow text-center relative overflow-hidden">
            <h3 className="text-lg font-medium">30% - 50%</h3>
            <p className="text-sm mb-2">Lives lost due to info gaps</p>
            <div className="flex justify-center items-center mt-2">
              <RadialBarChart
                width={100}
                height={100}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="90%"
                barSize={10}
                data={radialData}
              >
                <defs>
                  <linearGradient id="colorRedWhite" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#ff0000" />
                  </linearGradient>
                </defs>
                <RadialBar
                  minAngle={15}
                  clockWise
                  dataKey="uv"
                  cornerRadius={10}
                  fill="url(#colorRedWhite)" // 👈 Red to white gradient
                  isAnimationActive={inView} // 👈 Animate only on scroll
                />
              </RadialBarChart>
            </div>
            <div className="text-white text-xl font-bold absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              50%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 