import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Contact <span className="text-red-600">Us</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-12">
          If you have any query, feel free to discuss with our experts. 
          We assure best solution to your query.
        </p>

        {/* Contact Info */}
        <div className="space-y-8 text-left">
          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-red-600 w-6 h-6" />
            <p className="text-gray-800 font-medium">
              Corporate@nikalosafe.com
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="text-red-600 w-6 h-6 mt-1" />
            <p className="text-gray-800 font-medium leading-relaxed">
              3rd Floor, Shree towers, Jagtap Dairy Rd, opposite 24K Glitterati, <br />
              near Aundh, Vishal Nagar, Pimple Nilakh, Pune, Maharashtra 411027, India
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-red-600 w-6 h-6" />
            <p className="text-gray-800 font-medium">+918390703746</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
