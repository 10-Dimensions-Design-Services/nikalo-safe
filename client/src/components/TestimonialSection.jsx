import React, { useRef, useState } from "react";
import user1 from '../assets/Images/shashank sir.jpeg';
import user2 from '../assets/Images/user2.jpg';

const testimonials = [
  {
    name: "Shashank Kulkarni",
    role: "Software Professional",
    text: "It's incredibly user-friendly—like having a personal safety assistant right in your pocket. I strongly recommend that all types of establishments consider investing in safety through Nikalo Safe.",
    image: user1,
    rating: 5,
  },
  {
    name: "Vishwajeet Patil",
    role: "Senior Manager",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
  {
    name: "xxxx xxx",
    role: "xxxxxx",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
  {
    name: "xxxx xxx",
    role: "xxxxxx",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
  {
    name: "xxxx xxx",
    role: "xxxxxx",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
  {
    name: "xxxx xxx",
    role: "xxxxxx",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
  {
    name: "xxxx xxx",
    role: "xxxxxx",
    text: "Safety has become a top priority for modern real estate, especially in high-density commercial spaces. Nikalo Safe will help us strengthen our emergency response and add more value to our developments.",
    image: user2,
    rating: 5,
  },
];

const TestimonialSection = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  return (
    <section className="pb-24 bg-white">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          cursor: grab;
          user-select: none;
        }
        .scroll-container:active {
          cursor: grabbing;
        }
      `}</style>
      <div className="container-max px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
          Stories That Reinforce Why We Built{" "}
          <span className="text-red-600">This</span>
        </h2>

        {/* Testimonials Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 scrollbar-hide scroll-container px-4 sm:px-6 md:px-8"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 flex flex-col flex-shrink-0"
              style={{
                width: '280px',
                height: '320px',
                minWidth: '280px',
                boxShadow: '4px 4px 10px rgba(45, 103, 219, 0.24)'
              }}
            >
              {/* Profile Section */}
              <div className="flex items-center p-4 sm:p-6 pb-2">
                <div className="relative mr-3 sm:mr-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4
                    className="font-semibold text-gray-900 mb-1"
                    style={{ fontSize: '20px', letterSpacing: '-2%', lineHeight: '24px' }}
                  >
                    {item.name}
                  </h4>
                  <p
                    className="text-red-600 font-medium"
                    style={{ fontSize: '12px', letterSpacing: '-2%', lineHeight: '16px' }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="px-4 sm:px-6 pt-0 flex-grow">
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px'
                  }}
                >
                  "{item.text}"
                </p>
              </div>

              {/* Star Rating */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                <div className="text-red-500 text-base sm:text-lg">
                  {"★".repeat(item.rating)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - item.rating)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
