// src/pages/TermsOfUse.js
import React from "react";


const lastUpdated = "August 11, 2025";

export default function TermsOfUse() {
  return (
    
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <p className="mb-4">
        <strong>Welcome to Nikalo Safe.</strong> By accessing or using our web-based fire
        evacuation and safety assistance system (“Service”), you agree to comply with and be
        bound by these Terms of Use. If you do not agree with these terms, please do not use our
        services.
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">1. Purpose of the Service</h2>
        <p>
          Nikalo Safe provides real-time fire evacuation guidance and fire incident awareness through
          QR code scanning, IoT integration, and communication with rescue teams. The system is designed
          to assist occupants during emergencies and support firefighting teams with building information
          and live incident updates.
        </p>
        <p className="mt-2">
          The Service is intended as an <strong>assistive tool</strong> and is <strong>not a substitute for emergency services</strong> or professional judgement during an evacuation.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Use the system only for legitimate safety and evacuation purposes.</li>
          <li>Follow all local safety procedures and instructions from emergency authorities.</li>
          <li>Do not tamper with, hack, reverse-engineer, or misuse the platform.</li>
          <li>Do not use the Service for unlawful, fraudulent, or harmful purposes.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">3. Accuracy and Availability</h2>
        <p>
          While we strive to provide accurate and timely information, Nikalo Safe cannot guarantee that
          evacuation routes will always be available or hazard-free, or that fire status updates are
          complete or error-free. The Service depends on IoT sensors, fire panel integrations, and network
          connectivity, which may be affected by hardware malfunctions, data transmission issues, or environmental conditions.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content, software, designs, and materials provided by Nikalo Safe are owned by or licensed to
          us and are protected by applicable intellectual property laws. You may not copy, modify, distribute,
          or exploit any part of the Service without our prior written permission.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>
          Nikalo Safe is an assistive tool. We are not responsible for any loss, injury, or damage caused by
          relying solely on the Service during an emergency, or for technical failures, network issues, or
          incorrect data from third-party sensors or systems. To the maximum extent permitted by law, Nikalo Safe
          and its affiliates disclaim all warranties and will not be liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">6. Suspension or Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time if you violate these Terms, misuse
          the platform, or for operational or security reasons.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
        <p>
          We may update these Terms of Use at any time. Continued use of the Service after updates means you accept
          the new terms.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">8  . Governing Law</h2>
        <p>
          These Terms are governed by and interpreted under the laws of the jurisdiction where Nikalo Safe is registered,
          without regard to conflict of law principles. (Replace with specific jurisdiction if required.)
        </p>
      </section>

      <footer className="mt-8 text-sm text-gray-600">
        <p>Last updated: {lastUpdated}</p>
      </footer>
    </main>
  );
}
