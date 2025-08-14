import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";

import feedbackuser1 from "../assets/Images/Vishwajisir.jpeg";
import feedbackuser2 from "../assets/Images/shashank sir.jpeg";
import feedbackuser3 from "../assets/Images/CarolWilliams.jpg";
import feedbackuser4 from "../assets/Images/Prasanna.jpg";
import feedbackuser5 from "../assets/Images/Maruthi.jpg";
import feedbackuser6 from "../assets/Images/Devendra.jpg";
import feedbackuser7 from "../assets/Images/Paparao.jpg";
import feedbackuser8 from "../assets/Images/Venky.jpg";
import feedbackuser9 from "../assets/Images/Anand.jpg";
import feedbackuser10 from "../assets/Images/Manjusha.jpg";


const feedbacks = [
  {
    photo: feedbackuser1,
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments. It can give our occupants the confidence that their well-being is being actively protected. It’s surely a smart investment.",
    name: "Vishwajeet Patil",
    profession: "Senior Manager, K Raheja Corp, Mumbai, India",
  },
  {
    photo: feedbackuser2,
    text: "As an IT professional, I’ve explored and worked with many modern apps—but Nikalo Safe truly stands out. Developed by the talented team at 10D, this app is not just innovative but also potentially life-saving. It's incredibly user-friendly—like having a personal safety assistant right in your pocket. I’m genuinely impressed by Mr. Dharmendra’s vision and commitment to saving human lives. Hats off. I strongly recommend that all types of establishments—whether commercial buildings, railway stations, malls, museums, resorts, or others—consider investing in safety through Nikalo Safe. A small step towards safety can make a big difference.",
    name: "Shashank Kulkarni",
    profession: "Software Professional, Pune, India",
  },
  {
    photo: feedbackuser3,
    text: "Nikalo Safe doesn’t just alert - it equips you with the right information at the right time, making all the difference when it matters most.",
    name: "Carol Williams",
    profession: "Electrical, Fire Alarm, Public address system design professional",
  },
  {
    photo: feedbackuser4,
    text: "As a structural engineer, I must say that structural stability is the most important aspect of any building. However, nowadays, along with structural stability, the fire safety of the building has also become equally important. While many buildings are designed with fire safety measures, the main problem during a fire emergency is that people are often unable to find the safest exit path. This is where Nikalo Safe comes in - it helps people find the right escape route during a fire. It also assists firefighters by providing detailed information about the building, enabling them to take quick and effective action.",
    name: "Prasanna Mutalikdesai",
    profession: "B.E Civil M.Tech in Structural Engineering",
  },
  {
    photo: feedbackuser5,
    text: "Nikalo Safe helps reduce panic during fire emergencies by providing occupants with precise fire location data. This clarity empowers people to evacuate quickly and calmly, even when guiding children or elderly family members. The system supports self-rescue efforts and increases the chances of protecting every life in the building.",
    name: "Maruti Sulebhavikar",
    profession: "B.E Civil M.Tech in Structural Engineering",
  },
  {
    photo: feedbackuser6,
    text: "Nikalo Safe can be a game changer safety tool which is connecting physical world to the digital world. It is not just a digital transformation tool for the safety of life but a light in the darkness for the people who may face danger. It is also useful for the fire department who are the brave saviors for the people during such danger situations. This tool can give more precise solutions to them to save the life of the people with more fast pace.",
    name: "Devendra Shriniwas Rairikar",
    profession: "B.Arch, M.Arch in Digital Architecture",
  },
  {
    photo: feedbackuser7,
    text: "If implemented widely, Nikalo Safe could standardize evacuation procedures across buildings, making emergency response far more predictable and organized for both civilians and rescue teams.",
    name: "Mogali Paparao",
    profession: "BTech (EEE), MTech Power Electronics",
  },
  {
    photo: feedbackuser8,
    text: "The brilliance of Nikalo Safe lies in its ability to turn moments of chaos into moments of clarity. By giving people personalized, it transforms fear into action and uncertainty into safety.",
    name: "Venky Gandrothu",
    profession: "BTech(CSE), Software Developer",
  },
  {
    photo: feedbackuser9,
    text: "What excites me most about Nikalo Safe is its simplicity. There’s no app to download, no technical barrier - just a QR code that can guide anyone, anywhere, to safety, while simultaneously helping rescue teams plan their approach.",
    name: "Anand Kalvakolanu",
    profession: "BTech(CSE), Software Developer",
  },
  {
    photo: feedbackuser10,
    text: "What I love about the concept is its simplicity. QR codes are inexpensive, universally accessible, and require no app downloads. That means the solution is not just for tech-savvy people — it’s for everyone, everywhere.",
    name: "Ar. Manjusha Mahajan",
    profession: "B.Arch, BIM Architect",
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
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white mb-6"
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

            {/* Card counter */}
            <div className="mt-4 text-paragraph sm:text-base">
              {idx + 1} / {feedbacks.length}
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
