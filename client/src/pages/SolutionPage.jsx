// src/pages/SolutionPage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SolutionPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-700 mb-6">
            Flexible safety solution for every building
          </p>
          <p className="text-gray-600">
            Nikalo Safe provides stand-alone, integrable, or customized solutions — ideal for malls,
            hospitals, apartments, airports, schools, and more. From independent QR-based evacuation
            guidance to integrating with fire panels, we ensure real-time hazard visualization with
            intelligent safety guidance.
          </p>
          <div className="mt-8">
            <img
              src="/assets/qr-scan-demo.png" // Replace with correct path
              alt="QR Code Solution"
              className="mx-auto w-60"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-12 text-red-600">Solutions We Provide</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/assets/standalone.jpg" // Replace with correct path
                alt="Stand Alone Solution"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Stand Alone Solution</h4>
                <p className="text-gray-600 text-sm">
                  This works without any backend integration. Just install QR boards and scan to get
                  predefined dynamic evacuation paths.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/assets/integrable.jpg" // Replace with correct path
                alt="Integrable Solution"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Integrable Solution</h4>
                <p className="text-gray-600 text-sm">
                  It integrates with building fire panels and IoT fire sensors to show dynamic and
                  real-time safe path directions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/assets/custom.jpg" // Replace with correct path
                alt="Customized Solution"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Customized Solution</h4>
                <p className="text-gray-600 text-sm">
                  We customize solutions based on your facility and technical requirements to meet
                  your safety goals precisely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-red-600">Let's get started with your project</h3>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Project Details"
              className="border border-gray-300 rounded px-4 py-2 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SolutionPage;
