import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";

import feedbackuser1 from "../assets/Images/shashank sir.jpeg";
import feedbackuser2 from "../assets/Images/Vishwajisir.jpeg";
import feedbackuser3 from "../assets/Images/user2.jpg";
import feedbackuser4 from "../assets/Images/istockphoto-1348209421-612x612.jpg";

const feedbacks = [
  {
    photo: feedbackuser1,
    text: "As an IT professional, I’ve explored and worked with many modern apps—but Nikalo Safe truly stands out. Developed by the talented team at 10D, this app is not just innovative but also potentially life-saving. It's incredibly user-friendly—like having a personal safety assistant right in your pocket. I’m genuinely impressed by Mr. Dharmendra’s vision and commitment to saving human lives. Hats off. I strongly recommend that all types of establishments—whether commercial buildings, railway stations, malls, museums, resorts, or others—consider investing in safety through Nikalo Safe. A small step towards safety can make a big difference.",
    name: "Shashank Kulkarni",
    profession: "Software Professional, Pune, India",
  },
  {
    photo: feedbackuser2,
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments. It can give our occupants the confidence that their well-being is being actively protected. It’s surely a smart investment.",
    name: "Vishwajeet Patil",
    profession: "Senior Manager, K Raheja Corp, Mumbai, India",
  },
  {
    photo: feedbackuser3,
    text: "Nikalo Safe doesn’t just alert - it equips you with the right information at the right time, making all the difference when it matters most.",
    name: "Carol Williams",
    profession: "Electrical, Fire Alarm, Public address system design professional",
  },
];

const FeedbackCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const prev = () => setIdx((i) => (i === 0 ? feedbacks.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === feedbacks.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const { photo, text, name, profession } = feedbacks[idx];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="container-max px-2.5 pb-24">
        {/* Background frame */}
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage:
              "url('/assets/images/feedback section background.jpg')",
            minHeight: "707px",
          }}
        >
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(0,0,0,0.7) 0%,
                rgba(0,0,0,0.8) 50%,
                rgba(0,0,0,0.7) 100%
              )`,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-12 px-4 sm:px-6"
            {...(isMobile ? swipeHandlers : {})}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 pt-8">
              Innovation <span className="text-primary">Feedback</span>
            </h2>

            <img
              src={photo}
              alt={name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white mb-6"
              loading="lazy"
            />

            <div
              className="max-w-full sm:max-w-3xl px-4 sm:px-0 mb-4"
              style={{ minHeight: "220px" }}
            >
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {text}
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg font-semibold">
              {name}
            </p>
            <p className="text-xs sm:text-sm md:text-base">{profession}</p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm sm:text-base px-6 py-2 bg-white text-[#333] rounded-full font-medium hover:bg-gray-100 transition mt-2 mb-6 sm:mb-12"> Add Yours </a>

            {/* Arrows for desktop */}
            <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 pointer-events-none z-20">
              <button
                onClick={prev}
                className="pointer-events-auto p-2 sm:p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
                aria-label="Previous feedback"
              >
                <ChevronLeftIcon size={24} />
              </button>

              <button
                onClick={next}
                className="pointer-events-auto p-2 sm:p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
                aria-label="Next feedback"
              >
                <ChevronRightIcon size={24} />
              </button>
            </div>

            {/* Dots for mobile */}
            <div className="lg:hidden flex justify-center items-center space-x-2 mb-6">
              {feedbacks.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === i ? "bg-white scale-110" : "bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
