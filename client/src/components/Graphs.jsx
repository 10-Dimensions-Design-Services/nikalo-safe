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
import { useInView } from "react-intersection-observer"; // Hook for scroll-based animations

// ============================================================================
// DATA DEFINITIONS
// ============================================================================

// Fire accident statistics showingtrend from 2014-2023
// Values represent relative frequency of fire accidents over the years
const barData = [
  { name: "2014", val: 20 },
  { name: "2015", val: 40 },
  { name: "2016", val: 39 },
  { name: "2017", val: 38 },
  { name: "2018", val: 33 },
  { name: "2019", val: 29 },
  { name: "2020", val: 27 },
  { name: "2021", val: 27 },
  { name: "2022", val: 22 },
  { name: "2023", val: 20 },
];

// Lives lost statistics showing trend from 2014-2023
// Values represent relative number of lives lost in fire accidents
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

// Radial chart data for percentage display
// uv: 50 means 50% of the circle will be filled
const radialData = [
  {
    name:  "Info Gap",
    uv: 50,     // This value drives the fill percentage (50% = half circle)
    fill: "#F4003B",  // Red color for fire theme
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function FireStats() {
  // ============================================================================
  // SCROLL ANIMATION SETUP
  // ============================================================================
  
  // useInView hook detects when the section comes into viewport
  // This enables scroll-triggered animations for the charts
  const { ref, inView } = useInView({
    triggerOnce: true,        // Animation only plays once per session
    threshold: 0.3,           // Triggers when 30% of section is visible
    rootMargin: '-50px 0px',  // 50px buffer before triggering
    initialInView: false,     // Prevents animation on page load
  });

  // ============================================================================
  // RADIAL CHART ANGLE CALCULATIONS
  // ============================================================================
  
  // Extract percentage value from radial data (e.g., 50 for 50%)
  const percentage = radialData[0].uv;
  
  // Start angle: 90° = top-center position (12 o'clock)
  const startAngle = 90;
  
  // Calculate end angle for clockwise fill
  // Formula: startAngle - (360 * percentage / 100)
  // Example: 90 - (360 * 50 / 100) = 90 - 180 = -90° (equivalent to 270°)
  const endAngle = startAngle - (360 * percentage / 100);

  return (
    // ============================================================================
    // MAIN SECTION LAYOUT
    // ============================================================================
    
    <section
      ref={ref}  // Attach ref for scroll detection
      className="relative overflow-hidden py-12 md:py-24 bg-[#F5F7FA]"
    >
      <div className="container-max px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          <span className="text-[#F4003B]">Learning </span>from the Past
        </h2>

        {/* ============================================================================
        // RESPONSIVE GRID LAYOUT
        // ============================================================================
        // Mobile: 1 column, Small screens: 2 columns, Large screens: 3 columns
        // Cards are centered and have responsive spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">

          {/* ============================================================================
          // CARD 1: BAR CHART - Fire Accidents Trend
          // ============================================================================
          // Shows decreasing trend of fire accidents from 2014-2023
          // Responsive design: Text on left, chart on right */}
          <div className="bg-white rounded-xl border shadow-[1px_2px_6px_1px_rgba(0,0,0,0.25)] flex items-center justify-between w-full max-w-[350px] h-[117px] px-4 mx-auto">
            {/* Text Content - Left Side */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">80k - 100k</h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Fire accidents<br />2014 - 2023
              </p>
            </div>
            
            {/* Chart Container - Right Side */}
            <div className="w-[140px] sm:w-[160px] lg:w-[180px] h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barCategoryGap="40%">
                  <XAxis dataKey="name" hide />  {/* Hide x-axis labels for cleaner look */}
                  <Bar
                    dataKey="val"
                    fill="#F4003B"              /* Red color for fire theme */
                    radius={[4, 4, 4, 4]}      /* Rounded top corners */
                    barSize={12}                /* Bar thickness */
                    isAnimationActive={inView}  /* Animate on scroll */
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ============================================================================
          // CARD 2: LINE CHART - Lives Lost Trend
          // ============================================================================
          // Shows decreasing trend of lives lost from 2014-2023
          // Responsive design: Text on left, chart on right */}
          <div className="bg-white rounded-xl border shadow-[1px_2px_6px_1px_rgba(0,0,0,0.25)] flex items-center justify-between w-full max-w-[350px] h-[117px] px-4 mx-auto">
            {/* Text Content - Left Side */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">50k - 70k</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Lives lost</p>
            </div>
            
            {/* Chart Container - Right Side */}
            <div className="w-[140px] sm:w-[160px] lg:w-[180px] h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="name" hide />  /* Hide x-axis labels for cleaner look */
                  <Line
                    type="monotone"              /* Smooth curve interpolation */
                    dataKey="val"
                    stroke="#F4003B"              /* Red color for fire theme */
                    strokeWidth={1.5}             /* Line thickness */
                    dot={{                       /* Custom dot styling */
                      fill: "#ffffff",            /* White fill */
                      stroke: "#F4003B",          /* Red border */
                      strokeWidth: 2,             /* Border thickness */
                      r: 2.5,                     /* Dot radius */
                    }}
                    isAnimationActive={inView}   /* Animate on scroll */
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ============================================================================
          // CARD 3: RADIAL GAUGE - Information Gap Percentage
          // ============================================================================
          // Shows percentage of lives lost due to information gaps
          // Dynamic circle that fills based on percentage value */}
          <div className="bg-white rounded-xl border shadow-[1px_2px_6px_1px_rgba(0,0,0,0.25)] flex items-center justify-between w-full max-w-[350px] h-[117px] px-4 mx-auto">
            {/* Text Content - Left Side */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">30% - 50%</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Lives lost due to info gaps</p>
            </div>
            
            {/* Chart Container - Right Side */}
            <div className="relative w-[60px] sm:w-[65px] lg:w-[70px] h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"                       /* Center x-coordinate */
                  cy="50%"                       /* Center y-coordinate */
                  innerRadius="65%"              /* Inner circle radius */
                  outerRadius="100%"             /* Outer circle radius */
                  barSize={5}                    /* Ring thickness */
                  startAngle={startAngle}        /* Start angle (90° = top) */
                  endAngle={endAngle}            /* End angle (calculated dynamically) */
                  data={radialData}
                >
                  <RadialBar
                    minAngle={15}                /* Minimum angle for visibility */
                    clockWise={false}            /* Counter-clockwise direction */
                    dataKey="uv"                 /* Data key for percentage */
                    cornerRadius={10}            /* Rounded corners */
                    fill="#F4003B"               /* Red fill color for fire theme */
                    isAnimationActive={inView}   /* Animate on scroll */
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              
              {/* Percentage Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-[#F4003B]">
                {percentage}%
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
