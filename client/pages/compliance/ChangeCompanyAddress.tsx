import React from 'react';

const ChangeCompanyAddress: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 md:px-20">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-navy">Change Company Address</h1>

        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          A registered office is the official address of a company, where all legal correspondence from government authorities is sent. As per Section 12 of the Companies Act, 2013, every company must declare a registered office address within 30 days of incorporation.
        </p>
        <p>
          If your business is relocating, it's mandatory to update the new registered office address with the Registrar of Companies (RoC) and the Ministry of Corporate Affairs (MCA) to ensure compliance.
        </p>
        <p>
          At Calzone, we streamline the process of changing your company's registered office, handling all legal formalities and documentation, so you can focus on growing your business.
        </p>

        <h2 className="text-2xl font-semibold">Why Is a Registered Office Address Important?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Official Communication Hub:</strong> All government notices and letters are sent here.</li>
          <li><strong>Determines Company Jurisdiction:</strong> Defines state laws and RoC regulations applicable to your company.</li>
          <li><strong>Legal Identity:</strong> Establishes the company's legal presence and determines applicable local laws.</li>
        </ul>
        <p>Keeping your registered office updated is crucial to avoiding penalties and legal complications.</p>

        <h2 className="text-2xl font-semibold">Types of Changes in Registered Office Address</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Within the same city</li>
          <li>Within the same state but different locality (same RoC jurisdiction)</li>
          <li>Within the same state but different RoC jurisdiction</li>
          <li>From one state to another</li>
        </ul>

        <h2 className="text-2xl font-semibold">How to Change a Registered Office Address?</h2>

        <h3 className="text-xl font-semibold mt-4">1. Change Within the Same City</h3>
        <ul className="list-disc list-inside">
          <li>Board Resolution</li>
          <li>File Form INC-22 with RoC within 30 days</li>
        </ul>
        <p><strong>Documents Required:</strong> Board Resolution, Utility Bill, NOC from Owner</p>

        <h3 className="text-xl font-semibold mt-4">2. Change Within the Same State (Different Locality)</h3>
        <ul className="list-disc list-inside">
          <li>Board Meeting and EGM for Special Resolution</li>
          <li>File Forms MGT-14 & INC-22</li>
        </ul>
        <p><strong>Documents Required:</strong> Board Resolution, Special Resolution, Utility Bill, NOC, Rent Agreement</p>

        <h3 className="text-xl font-semibold mt-4">3. Change Within Same State but Different RoC</h3>
        <ul className="list-disc list-inside">
          <li>Special Resolution and Regional Director Approval</li>
          <li>File Forms MGT-14, INC-22, INC-28, and INC-23</li>
        </ul>
        <p><strong>Documents Required:</strong> Resolutions, List of Creditors, Declarations, Utility Bills, NOC</p>

        <h3 className="text-xl font-semibold mt-4">4. Change from One State to Another</h3>
        <ul className="list-disc list-inside">
          <li>Special Resolution via EGM</li>
          <li>Public Notice in regional and English newspapers</li>
          <li>File INC-23, then INC-28 and INC-22 upon approval</li>
        </ul>
        <p><strong>Documents Required:</strong> List of Directors, Creditors, MoA, AoA, COI, Public Notices, Financials</p>

        <h2 className="text-2xl font-semibold">Post-Compliance After Changing Address</h2>
        <ul className="list-disc list-inside">
          <li>Update stationery and address on all company documents</li>
          <li>Update PAN & TAN</li>
          <li>Notify stakeholders and publish newspaper notice</li>
          <li>Update with banks, GST, and utility providers</li>
          <li>Display new address at premises</li>
        </ul>

        <h2 className="text-2xl font-semibold">Why Choose Calzone?</h2>
        <ul className="list-disc list-inside">
          <li>End-to-End Legal Compliance</li>
          <li>Hassle-Free Documentation & Filings</li>
          <li>Expert Guidance & Support</li>
          <li>Affordable & Transparent Pricing</li>
        </ul>

        <h2 className="text-2xl font-semibold">Frequently Asked Questions (FAQs)</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Do I need to notify RoC for every office address change?</li>
          <li>How long does the address change process take?</li>
          <li>What happens if I don't update my registered office address?</li>
          <li>Can Calzone manage the entire process?</li>
        </ol>
      </div>
    </div>
  );
};

export default ChangeCompanyAddress;
