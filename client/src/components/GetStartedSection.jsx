import React from "react";

const GetStartedSection = () => {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-[#F4003B]">Let’s get started </span>
          <span className="text-black">with your project</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Contact Info */}
          <div className="flex-1 max-w-[470px] text-[#1A1A1A] text-sm">
            <p className="mb-6 font-medium">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <div className="mb-4">
              📧{" "}
              <a href="mailto:Corporate@nikalosafe.com" className="underline">
                Corporate@nikalosafe.com
              </a>
            </div>
            <div className="mb-4">
              📍 3rd Floor, Shree towers, Jagtap Dairy Rd, opposite 24K Glitterati, near Aundh, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027
            </div>
            <div>
              📞 <a href="tel:+918390703746">+91 83907 03746</a>
            </div>
          </div>

          {/* Form */}
          <form className="flex-1 max-w-[470px] space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Contact No."
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full border border-[#F4003B] text-[#F4003B] hover:bg-[#F4003B] hover:text-white transition-colors duration-200 font-medium py-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
