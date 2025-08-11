

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-700">
      <h1 className="text-2xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        Welcome to <strong>Nikalo Safe</strong>. By accessing or using our web-based
        fire evacuation and safety assistance system, you agree to comply with
        and be bound by the following Terms of Use. If you do not agree with
        these terms, please do not use our services.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Purpose of the Service</h2>
      <p className="mb-4">
        Nikalo Safe provides real-time fire evacuation guidance and fire
        incident awareness through QR code scanning, IoT integration, and
        communication with rescue teams. The system is designed to assist
        occupants during emergencies and support firefighting teams with
        building information and live incident updates.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Use the system only for legitimate safety and evacuation purposes.</li>
        <li>Follow all local safety procedures and instructions from authorities.</li>
        <li>Do not attempt to tamper with, hack, or misuse the platform.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Accuracy and Availability</h2>
      <p className="mb-4">
        While we strive to provide accurate and timely information, Nikalo Safe
        cannot guarantee the absolute accuracy of evacuation routes or fire
        status updates. The system depends on sensor data and existing fire
        panel integrations, which may be affected by hardware, network, or
        environmental conditions.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        Nikalo Safe is an assistive tool and does not replace the need for
        personal judgment or compliance with emergency protocols. We are not
        liable for any loss, injury, or damage arising from the use or inability
        to use the system.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Use at any time. Continued use of the
        service after changes are posted means you accept the updated terms.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
