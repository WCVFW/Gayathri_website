import React from "react";

const DINSurrender = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-navy">DIN Surrender</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What is DIN Surrender?</h2>
        <p>
          DIN Surrender refers to the process where a Director Identification Number (DIN)
          is voluntarily or compulsorily surrendered to the Central Government. Once a DIN is
          surrendered, the individual cannot be appointed as a director until they apply for
          and obtain a new DIN.
        </p>
        <p className="mt-2">
          Under the Companies Act, 2013, there are specific circumstances where a DIN can be
          surrendered, canceled, or deactivated. At Calzone, we assist directors in legally
          surrendering their DIN, ensuring full compliance with MCA regulations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What is DIN (Director Identification Number)?</h2>
        <p>
          A DIN (Director Identification Number) is an 8-digit unique ID assigned to an
          individual who is appointed as a director of a company.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Mandatory for all company directors under Section 153 of the Companies Act, 2013.</li>
          <li>Obtained by filing Form DIR-3 with the Ministry of Corporate Affairs (MCA).</li>
          <li>A person can have only one DIN for a lifetime, usable across multiple companies.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Reasons for DIN Surrender or Cancellation</h2>
        <h3 className="text-lg font-semibold mt-4">1. Voluntary Surrender of DIN</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Never been appointed as a director in any company.</li>
          <li>The DIN was never used for filing any documents with the MCA.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">2. Compulsory Cancellation or Deactivation</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Duplicate DIN</li>
          <li>Fraudulent DIN</li>
          <li>Unsound Mind</li>
          <li>Insolvency</li>
          <li>Death of the director</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">How to Surrender a DIN?</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Log in to the MCA Portal and download Form DIR-5.</li>
          <li>Fill out required details (Name, DIN, Reason, PAN, Address, Email, Phone).</li>
          <li>Attach documents (ID proof, address proof, court order, or death certificate).</li>
          <li>Sign the form with a DSC and get it attested by CA/CS/Cost Accountant.</li>
          <li>Pay government fees through MCA portal.</li>
          <li>Wait for MCA verification and DIN deactivation.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Documents Required</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Self-attested identity proof: Voter ID, Passport, Driving License</li>
          <li>Address proof: Utility bill, Aadhaar card, Rent Agreement</li>
          <li>Court order or death certificate (if applicable)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Calzone?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>End-to-End Support</li>
          <li>Error-Free Documentation</li>
          <li>Expert Legal Guidance</li>
          <li>Affordable & Transparent Pricing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Can I apply for a new DIN after surrendering my previous one?</li>
          <li>How long does the DIN surrender process take?</li>
          <li>What happens if I don't surrender a duplicate DIN?</li>
          <li>Can a director surrender a DIN if they were previously appointed?</li>
          <li>How does Calzone help in the DIN surrender process?</li>
        </ul>
      </section>
    </div>
  );
};

export default DINSurrender;
