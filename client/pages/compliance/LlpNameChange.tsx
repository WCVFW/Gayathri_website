// src/pages/LlpNameChange.tsx
import { FaBuilding, FaGavel, FaBalanceScale, FaCertificate, FaBullhorn, FaSyncAlt, FaFileSignature, FaIdCard, FaFileContract, FaRegBuilding, FaExchangeAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
const sections = [
  "Overview",
  "Reasons",
  "Effects",
  "Documents Required",
  "Step-by-Step",
  "Guidelines",
  "LLP Agreement",
  "Penalties",
  "Why Choose"
];

const LlpNameChange: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };
  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h2 className="text-3xl font-bold text-navy">LLP Name Change </h2>
      <div className="sticky top-20 z-10 bg-white shadow-sm">
        <div className="flex flex-wrap max-w-screen-xl">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } border-b-2 border-transparent bg-transparent focus:outline-none`}
            >
              {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-navy mt-10">LLP Name Change - A Complete Guide </h2>
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
          At <strong>Calzone</strong>, we provide end-to-end support for LLP name changes, ensuring seamless approvals from the
          Ministry of Corporate Affairs (MCA) and the Registrar of Companies (ROC).
        </p>
      </section>

      {/* Reasons for Changing LLP Name */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-navy">
          <FaExchangeAlt className="text-blue-600 " />
          Reasons for Changing an LLP Name
        </h2>
        <p>Under the LLP Act, 2008, an LLP can change its name for the following reasons:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Voluntary Name Change by Partners</strong>: Rebranding, change in ownership or management, or change in business objectives.
          </li>
          <li>
            <strong>Direction from the Central Government</strong>: If the name is undesirable or too similar to an existing LLP or company (Section 17, LLP Act, 2008).
          </li>
        </ul>
      </section>

      {/* Effects of Changing an LLP Name */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-navy">
          <FaBalanceScale className="text-green-600" />
          Effects of Changing an LLP Name
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 list-none">
          <li className="flex items-start gap-3">
            <FaRegBuilding className="mt-1 text-blue-500" />
            <span>No impact on business continuity — The LLP remains the same legal entity.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaGavel className="mt-1 text-red-500" />
            <span>Legal proceedings remain unaffected — Cases continue under the new name.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaFileContract className="mt-1 text-purple-600" />
            <span>Rights & liabilities remain unchanged — Contracts and obligations stay intact.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaIdCard className="mt-1 text-pink-500" />
            <span>New Certificate of Incorporation — MCA issues a fresh certificate with the updated name.</span>
          </li>
        </ul>
        <p>
          <strong>Calzone</strong> ensures that your LLP name change is legally compliant and processed smoothly.
        </p>
      </section>

      {/* Supplementary LLP Agreement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-navy">
          <FaFileSignature className="text-yellow-600" />
          Supplementary LLP Agreement
        </h2>
        <p>
          After changing the LLP name, the existing LLP agreement must be updated to reflect the new name.
        </p>
        <p>
          A supplementary LLP agreement must be drafted and filed with <strong>Form 3</strong> within 30 days of receiving the
          new Certificate of Incorporation from the MCA.
        </p>
      </section>

      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Reasons for Changing an LLP Name</h2>
        <p className="text-gray-700">
          Under the LLP Act, 2008, an LLP can change its name for the following reasons:
        </p>

        {/* Voluntary Change */}
        <div className="flex items-start gap-3">
          <FaSyncAlt className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-800">Voluntary Name Change by Partners</p>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>Rebranding or expansion of business.</li>
              <li>Change in ownership or management.</li>
              <li>Modification in the business objectives.</li>
            </ul>
          </div>
        </div>

        {/* Government Directed Change */}
        <div className="flex items-start gap-3">
          <FaBullhorn className="text-red-600 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-800">
              Direction from the Central Government <span className="text-sm text-gray-500">(Section 17, LLP Act, 2008)</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              <li>The name is undesirable.</li>
              <li>The name is too similar to an existing LLP or company.</li>
              <li>If directed, the LLP must comply within 3 months.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Effects of Changing an LLP Name</h2>
        <p className="text-gray-700">
          Changing the name of an LLP does not affect its legal standing, contracts, or obligations. Below are the key effects:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FaBuilding className="text-blue-600 text-xl mt-1" />
            <div>
              <p className="font-medium text-gray-800">No impact on business continuity</p>
              <p className="text-gray-600">The LLP remains the same legal entity.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaGavel className="text-green-600 text-xl mt-1" />
            <div>
              <p className="font-medium text-gray-800">Legal proceedings remain unaffected</p>
              <p className="text-gray-600">Any pending legal cases continue under the new name.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaBalanceScale className="text-yellow-600 text-xl mt-1" />
            <div>
              <p className="font-medium text-gray-800">Rights & liabilities remain unchanged</p>
              <p className="text-gray-600">The LLP's contracts and obligations stay intact.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaCertificate className="text-purple-600 text-xl mt-1" />
            <div>
              <p className="font-medium text-gray-800">New Certificate of Incorporation</p>
              <p className="text-gray-600">MCA issues a fresh certificate with the updated name.</p>
            </div>
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          <strong>Calzone</strong> ensures that your LLP name change is legally compliant and processed smoothly.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-navy">Documents Required for LLP Name Change</h2>
        <p>
          To apply for an LLP name change, the following documents are required:
        </p>
        <ul className="list-disc ml-6">
          <li>Consent of all partners (certified copy)</li>
          <li>Existing LLP agreement (certified copy)</li>
          <li>Trademark application or registration certificate (if applicable)</li>
          <li>Any other relevant documents deemed necessary by the LLP</li>
        </ul>
        <p>
          Calzone assists in preparing and submitting all required documents for a hassle-free process.
        </p>
      </section>
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Step-by-Step Procedure to Change LLP Name</h2>

        <ol className="list-decimal ml-6 text-gray-700 space-y-3">
          <li>
            <strong>Check LLP Agreement Provisions:</strong> Verify if the LLP agreement permits a name change.
            If not, partners must unanimously approve the amendment.
          </li>

          <li>
            <strong>Obtain Consent from Partners:</strong> Pass a resolution in a board meeting, confirming the decision.
            Ensure all partners agree to the name change.
          </li>

          <li>
            <strong>Check Name Availability on MCA Portal:</strong> Conduct a name availability check on the MCA website.
            Ensure the proposed name is not identical to an existing LLP or trademark.
          </li>

          <li>
            <strong>Apply for Name Approval (RUN-LLP Form):</strong> File an application through RUN-LLP (Reserve Unique Name-LLP) with MCA.
            Provide at least two preferred name options. The ROC will approve or reject the name within 7-10 working days.
          </li>

          <li>
            <strong>File Form 5 for Name Change:</strong> Once MCA approves the new LLP name, file Form 5 within 30 days to officially notify the ROC.
            Attach the resolution approving the name change.
          </li>

          <li>
            <strong>Approval or Rejection by ROC:</strong> The ROC reviews the application and may request clarifications.
            If approved, a fresh Certificate of Incorporation is issued.
          </li>

          <li>
            <strong>Amend LLP Agreement (Supplementary Agreement):</strong> After receiving the new Certificate of Incorporation, draft a supplementary LLP agreement.
            File Form 3 within 30 days to update the LLP agreement with MCA.
          </li>
        </ol>

        <p className="text-gray-700">
          <strong>Calzone</strong> ensures your LLP name change is approved without unnecessary delays.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">LLP Name Availability Guidelines</h2>
        <p className="text-gray-700">
          While selecting a new LLP name, partners must comply with MCA naming guidelines:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>The name should not be identical to or resemble an already registered LLP or company.</li>
          <li>It must not infringe on any existing registered trademark.</li>
          <li>The name should not be misleading, undesirable, or offensive.</li>
          <li>If it suggests a government or financial association, prior approval is required.</li>
          <li>Words like <strong>"Finance"</strong>, <strong>"Chit Fund"</strong>, <strong>"Investment"</strong>, or <strong>"Securities"</strong> cannot be used unless relevant to the LLP’s business.</li>
        </ul>
        <p className="text-gray-700">
          <strong>Calzone</strong> helps verify and secure MCA name approval, ensuring a smooth transition.
        </p>
      </section>
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Supplementary LLP Agreement - Updating After Name Change</h2>
        <p className="text-gray-700">
          Once the LLP name is changed, its LLP agreement must be updated to reflect the new name.
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>A supplementary LLP agreement must be drafted and filed with <strong>Form 3</strong>.</li>
          <li>It must be submitted within <strong>30 days</strong> of receiving the new Certificate of Incorporation.</li>
        </ul>
      </section>
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Penalties for Non-Compliance in LLP Name Change</h2>
        <p className="text-gray-700">
          If an LLP fails to comply with the Central Government's directive for a name change, the following penalties apply:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><strong>For LLP:</strong> Fine ranging from ₹10,000 to ₹5,00,000.</li>
          <li><strong>For Designated Partners:</strong> Fine between ₹10,000 to ₹1,00,000 per partner.</li>
        </ul>
        <p className="font-medium">
          Avoid penalties! Let <span className="font-semibold">Calzone</span> handle your LLP name change before deadlines.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-navy">Why Choose Calzone for Your LLP Name Change?</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            <strong>End-to-End Legal Support</strong> – From name availability checks to final approval.
          </li>
          <li>
            <strong>Hassle-Free Documentation</strong> – Complete RUN-LLP, Form 5, and Form 3 filings.
          </li>
          <li>
            <strong>Expert Compliance Assistance</strong> – Ensuring smooth MCA & ROC approvals.
          </li>
          <li>
            <strong>Affordable & Transparent Pricing</strong> – No hidden costs, just fast and efficient service.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LlpNameChange;
