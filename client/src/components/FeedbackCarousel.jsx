import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import feedbackuser1 from '../assets/Images/shashank sir.jpeg';
import feedbackuser2 from '../assets/Images/Vishwajisir.jpeg';
import feedbackuser3 from '../assets/Images/user2.jpg';
import feedbackuser4 from '../assets/Images/istockphoto-1348209421-612x612.jpg';

const feedbacks = [
  {
    photo: feedbackuser1,
    text: `As an IT professional, I’ve explored and worked with many modern apps—but Nikalo Safe truly stands out. Developed by the talented team at 10D, this app is not just innovative but also potentially life-saving. It's incredibly user-friendly—like having a personal safety assistant right in your pocket. I’m genuinely impressed by Mr. Dharmendra’s vision and commitment to saving human lives. hats off
    I strongly recommend that all types of establishments—whether commercial buildings, railway stations, malls, museums, resorts, or others—consider investing in safety through Nikalo Safe. A small step towards safety can make a big difference.`,
    name: 'Shashank Kulkarni',
    profession: 'Software Professional, Pune, India',
  },
  {
    photo: feedbackuser2,
    text: `“Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments. It can give our occupants the confidence that their well-being is being actively protected. It’s surely a smart investment.”`,
    name: 'Vishwajeet Patil',
    profession: 'Senior Manager, K Raheja Corp, Mumbai, India',
  },
  {
    photo: feedbackuser3,
    text: `“This technology has the potential to significantly reduce casualties. It will empower individuals to exit safely and efficiently-often before first responders arrive.” `,
    name: 'Rajesh Patil',
    profession: 'Senior Fire Officer, Mumbai, India',
  },
  {
    photo: feedbackuser4,
    text: `In high-stress situations, clear direction can prevent panic and save lives. A solution like this will help universities manage large-scale evacuations efficiently. It can offer students and faculty the confidence that their safety is prioritized. `,
    name: 'Dr. Kavita Sharma',
    profession: 'Dean, NIM, Delhi, India',
  },
];

const FeedbackCarousel = () => {
  const [idx, setIdx] = useState(0);
  const { photo, text, name, profession } = feedbacks[idx];

  const prev = () => setIdx(i => (i === 0 ? feedbacks.length - 1 : i - 1));
  const next = () => setIdx(i => (i === feedbacks.length - 1 ? 0 : i + 1));

  return (
    <section
      className="relative mx-auto my-16 w-full max-w-[1150px] px-4 sm:px-6"
      // max-w caps at 1150px, with padding on smaller screens
      style={{ aspectRatio: '1153 / 707' }} // maintain same aspect ratio for responsiveness
    >
      {/* Background image */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `url('/assets/images/feedback section background.jpg') center/cover no-repeat`,
          filter: 'brightness(0.8)',
        }}
      />

      {/* Strong gradient overlay */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.8) 50%,
              rgba(0,0,0,0.7) 100%
            )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 px-2 sm:px-0">
          Innovation <span className="text-[#F4003B]">Feedback</span>
        </h2>

        <img
          src={photo}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white mb-6"
          loading="lazy"
        />

        <p className="max-w-full sm:max-w-3xl text-[0.85rem] sm:text-base leading-relaxed mb-4 px-4 sm:px-0">
          {text}
        </p>
        <p className="font-medium text-base sm:text-lg">{name}</p>
        <p className="text-xs sm:text-sm opacity-75 mb-4">{profession}</p>

        <button className="px-6 py-2 bg-white text-[#333] rounded-full font-medium hover:bg-gray-100 transition mb-6 sm:mb-12">
          Add Yours
        </button>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous feedback"
        >
          <ChevronLeftIcon size={20} sm={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next feedback"
        >
          <ChevronRightIcon size={20} sm={24} />
        </button>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
