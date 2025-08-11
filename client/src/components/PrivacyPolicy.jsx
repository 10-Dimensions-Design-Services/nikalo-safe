
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-700">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how <strong>Nikalo Safe</strong> collects,
        uses, and protects the personal and building-related information you
        provide when using our fire safety and evacuation system.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Occupant Data:</strong> Optional contact details provided for
          rescue communication.
        </li>
        <li>
          <strong>Location Data:</strong> QR code scan location for calculating
          evacuation paths.
        </li>
        <li>
          <strong>Building Data:</strong> Refuge areas, exits, and fire safety
          infrastructure details.
        </li>
        <li>
          <strong>Sensor Data:</strong> Fire alarm triggers, hazard zones, and
          live fire status from IoT devices or fire panel systems.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. How We Use the Information</h2>
      <p className="mb-4">
        We use collected data to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide real-time evacuation routes to occupants.</li>
        <li>Alert and inform firefighting teams of incident details.</li>
        <li>Enhance situational awareness during fire emergencies.</li>
        <li>Improve our platform and safety algorithms.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We only share relevant data with authorized emergency responders during
        an active incident. We do not sell or rent personal data to third
        parties.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement encryption and secure transmission protocols to protect
        your information. However, no internet-based system can be guaranteed
        100% secure.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request deletion of your personal data from our system after an
        incident has been resolved, subject to legal and safety requirements.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. Changes to Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any updates will be
        posted on this page.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
