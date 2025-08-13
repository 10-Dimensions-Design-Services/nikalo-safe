// src/pages/PrivacyPolicy.js
import React from "react";

const lastUpdated = "August 11, 2025"; // <--- change to your actual publish date

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how <strong>Nikalo Safe</strong> collects, uses, and protects the
        personal and building-related information you provide when using our fire safety and evacuation system.
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Occupant Data:</strong> Optional contact details provided for rescue communication.
          </li>
          <li>
            <strong>Location Data:</strong> QR code scan location (floor/zone) for calculating evacuation paths.
          </li>
          <li>
            <strong>Building Data:</strong> Refuge areas, exits, staircases and other safety infrastructure details.
          </li>
          <li>
            <strong>Sensor Data:</strong> Fire alarm triggers, hazard zones, and live fire status from IoT devices or integrated panels.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use the Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide real-time evacuation routes to occupants.</li>
          <li>Alert and inform firefighting teams and emergency responders of incident details.</li>
          <li>Enable communication between occupants and rescue teams.</li>
          <li>Improve our platform, analytics, and safety algorithms.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
        <p>
          We only share relevant data with authorized emergency responders during an active incident. We do not sell
          or rent personal data to third parties. We may share aggregated, anonymized data for analytics or research.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement industry-standard security measures such as encryption in transit and at rest, access controls,
          and monitoring to protect collected data. However, no internet-based system can be guaranteed 100% secure.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">5. Retention & Deletion</h2>
        <p>
          We retain incident-related data for as long as necessary for safety, compliance, and quality-improvement purposes.
          You may request deletion of your personal data after an incident is resolved, subject to legal or regulatory obligations.
        </p>
      </section>
      
      <footer className="mt-8 text-sm text-gray-600">
        <p>Last updated: {lastUpdated}</p>
      </footer>
    </main>
  );
}
