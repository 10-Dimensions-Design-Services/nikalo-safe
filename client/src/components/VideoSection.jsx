import React from "react";
import Video1Image from "../assets/Images/Video1.png";
import Video2Image from "../assets/Images/Video2.png";

const VideoSection = () => {
  return (
    <section className="relative overflow-hidden pb-24 bg-white">
      <div className="container-max px-2.5">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Using Nikalo Safe is as Simple as a{" "}
            <span className="text-primary">Scan</span>
          </h2>
        </div>

        {/* Video Thumbnails */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[20px] justify-center items-center max-w-5xl mx-auto">
          {/* Video 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[571px] lg:h-[380.67px] aspect-video">
            <img
              src={Video1Image}
              alt="Nikalo Safe Demo 1"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary hover:bg-red-700 text-white rounded-full p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Video 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[571px] lg:h-[380.67px] aspect-video">
            <img
              src={Video2Image}
              alt="Nikalo Safe Demo 2"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#F4003B] hover:bg-red-700 text-white rounded-full p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
