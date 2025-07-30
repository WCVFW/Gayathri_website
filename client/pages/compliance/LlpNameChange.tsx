// src/pages/LlpNameChange.tsx

import React from 'react';

const LlpNameChange: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-violet-700 mb-6">LLP Name Change</h1>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          A Limited Liability Partnership (LLP) is a legally recognized business entity under the LLP Act, 2008,
          where each partner's liability is limited to their investment in the business.
        </p>
        <p>
          The name of an LLP is one of its most important identity markers. Whether due to rebranding, a change
          in business objectives, or regulatory requirements, an LLP name change must follow a structured legal
          process as per the LLP Act, 2008.
        </p>
        <p>
          At Calzone, we provide end-to-end support for LLP name changes, ensuring seamless approvals from the
          Ministry of Corporate Affairs (MCA) and the Registrar of Companies (ROC).
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Reasons for Changing an LLP Name</h2>
        <p>Under the LLP Act, 2008, an LLP can change its name for the following reasons:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Voluntary Name Change by Partners</strong>: For reasons such as rebranding, change in
            ownership, or business direction.
          </li>
          <li>
            <strong>Direction from the Central Government</strong>: If the name is undesirable or too similar to
            another entity (Section 17, LLP Act, 2008).
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Effects of Changing an LLP Name</h2>
        <ul className="list-disc ml-6">
          <li>The LLP remains the same legal entity.</li>
          <li>Legal proceedings remain unaffected.</li>
          <li>Rights and liabilities stay intact.</li>
          <li>A new Certificate of Incorporation is issued by MCA.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Documents Required</h2>
        <ul className="list-disc ml-6">
          <li>Consent of all partners (certified copy)</li>
          <li>Existing LLP agreement (certified copy)</li>
          <li>Trademark application or certificate (if applicable)</li>
          <li>Other necessary documents as per the case</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Step-by-Step Procedure</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Check LLP agreement for provisions on name change</li>
          <li>Obtain partner consent via resolution</li>
          <li>Check name availability on MCA portal</li>
          <li>Apply for name approval using RUN-LLP form</li>
          <li>File Form 5 to notify ROC post approval</li>
          <li>ROC issues Certificate of Incorporation</li>
          <li>Update LLP Agreement with supplementary agreement and file Form 3</li>
        </ol>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">LLP Name Availability Guidelines</h2>
        <ul className="list-disc ml-6">
          <li>Name should not resemble an existing company or LLP</li>
          <li>Must not infringe on trademarks</li>
          <li>Should not be misleading, offensive, or undesirable</li>
          <li>Special terms like “Finance” require prior approval</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Supplementary LLP Agreement</h2>
        <p>
          After name change, the LLP agreement must be updated. A supplementary agreement should be filed with
          Form 3 within 30 days of receiving the new Certificate of Incorporation.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold">Penalties for Non-Compliance</h2>
        <ul className="list-disc ml-6">
          <li>LLP: ₹10,000 to ₹5,00,000 fine</li>
          <li>Designated Partners: ₹10,000 to ₹1,00,000 per partner</li>
        </ul>
        <p>Calzone ensures full compliance to avoid penalties and delays.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Calzone?</h2>
        <ul className="list-disc ml-6">
          <li>End-to-end legal support</li>
          <li>Hassle-free documentation</li>
          <li>Expert compliance assistance</li>
          <li>Affordable, transparent pricing</li>
        </ul>
      </section>
    </div>
  );
};

export default LlpNameChange;
