import React from "react";

const solutionCards = [
  {
    title: "Stand Alone Solution",
    description:
      "This solution works independently with built-in sensors and shows safe escape routes.",
    image: "/assets/images/standalone.png",
  },
  {
    title: "Integrable Solution",
    description:
      "It integrates with FM tools and asset management tools to provide synchronized evacuation guidance.",
    image: "/assets/images/integrable.png",
  },
  {
    title: "Customized Solution",
    description:
      "Tailored safety based on your specific needs. Perfect for events, industrial campuses and complex sites.",
    image: "/assets/images/customized.png",
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-primary title-h2">Solutions </span>
          <span className="text-black title-h2">We Provide</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="h-[514px] flex flex-col bg-white rounded-lg overflow-hidden shadow-lg border"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[354px] object-cover object-right"
              />
              <div className="bg-secondary text-white px-6 py-4 h-[160px] flex flex-col justify-center gap-y-4">
                <h3 className="text-base sm:text-lg title-h3 text-center flex items-end justify-center">
                  {card.title}
                </h3>
                <p className="paragraph-regular text-center h-[64px] flex items-start justify-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolutionsSection;
