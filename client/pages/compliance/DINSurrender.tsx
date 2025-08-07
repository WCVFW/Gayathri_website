// import React from "react";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: 'Can I apply for a new DIN after surrendering my previous one?',
    answer: 'Yes, but only if you meet the eligibility criteria and reapply through Form DIR-3.',
  },
  {
    question: 'How long does the DIN surrender process take?',
    answer: 'The MCA typically processes Form DIR-5 within 15-30 days after submission.',
  },
  {
    question: "What happens if I don't surrender a duplicate DIN?",
    answer: 'Failure to surrender a duplicate DIN may result in penalties and legal consequences.',
  },
  {
    question: 'Can a director surrender a DIN if they were previously appointed?',
    answer: 'No, DIN can only be surrendered if it was never used in any company filings.',
  },
  {
    question: 'How does Calzone help in the DIN surrender process?',
    answer: 'Calzone manages everything – from document preparation to MCA approvals, ensuring a fast and hassle-free process.',
  },
];

const sections = [
  "Overview",
  "What is DIN",
  "Reasons",
  "How to Surrender",
  "Documents Required",
  "Why Choose",
  "FAQs"
];


const DINSurrender = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-6 md:px-16 py-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-navy">DIN Surrender</h1>
      <div className="sticky top-20 z-10 bg-white shadow-sm">
        <div className="flex flex-wrap max-w-screen-xl">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1.5 transition-all duration-300 border-b-2 border-transparent bg-transparent focus:outline-none 
          text-[16px] font-bold leading-6 tracking-wide
          ${activeSection === id
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-800 hover:text-green-600 hover:border-green-600'}
        `}
              style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(34, 34, 34, 0.8)' }}
            >
              {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">What is DIN Surrender?</h2>
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
        <h2 className="text-2xl font-semibold mb-2 text-navy">What is DIN (Director Identification Number)?</h2>
        <p>
          A DIN (Director Identification Number) is an 8-digit unique ID assigned to an
          individual who is appointed as a director of a company.
        </p>
        <h5>Key Points About DIN:</h5>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Mandatory for all company directors under Section 153 of the Companies Act, 2013.</li>
          <li>Obtained by filing Form DIR-3 with the Ministry of Corporate Affairs (MCA).</li>
          <li>A person can have only one DIN for a lifetime, usable across multiple companies.</li>
        </ul>
        <p>Calzone ensures hassle-free DIN applications, modifications, and surrenders.</p>
      </section>

      <section id="reasons" className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">Reasons for DIN Surrender or Cancellation</h2>
        <p className="text-base text-gray-700 mb-4">
          According to <strong>Rule 11</strong> of the Companies (Appointment and Qualification of Directors) Rules, 2014, a DIN may be surrendered, canceled, or deactivated under the following circumstances:
        </p>

        <h3 className="text-lg font-semibold mt-4">1. Voluntary Surrender of DIN</h3>
        <p className="text-sm text-gray-700 mb-2">
          A director can voluntarily surrender their DIN if:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
          <li>They have never been appointed as a director in any company.</li>
          <li>The DIN has never been used for filing any company documents with the MCA.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">2. Compulsory Cancellation or Deactivation</h3>
        <p className="text-sm text-gray-700 mb-2">
          The MCA or Regional Director may cancel or deactivate a DIN under these conditions:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
          <li>Duplicate DIN – If the same individual has been issued multiple DINs.</li>
          <li>Fraudulent DIN – If the DIN was obtained through false information.</li>
          <li>Unsound Mind – If a competent court declares the director mentally incapacitated.</li>
          <li>Insolvency – If the director is declared bankrupt by a court.</li>
          <li>Death – If the director has passed away, the legal representatives can apply for surrender.</li>
        </ul>

        <p className="text-sm text-gray-700 mt-6">
          <strong>Need to surrender your DIN?</strong> Calzone ensures a legally compliant and quick process.
        </p>
      </section>


      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-navy">How to Surrender a DIN?</h1>
        <p className="text-gray-700 mb-6">
          The process for surrendering a Director Identification Number (DIN) involves submitting an application to the Ministry of Corporate Affairs (MCA) using <strong>Form DIR-5</strong>. This is required in cases where the DIN is no longer needed or is being surrendered due to death, disqualification, or duplication.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Step-by-Step Process to Surrender DIN</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Log in to the MCA Portal:</span>
            Download <strong>Form DIR-5</strong> from the official MCA website mca.gov.in
          </li>
          <li>
            <span className="font-semibold">Fill Out the Required Details:</span>
            The director must enter the following:
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Name of the director</li>
              <li>DIN to be surrendered</li>
              <li>Reason for surrender</li>
              <li>PAN (Permanent Account Number)</li>
              <li>Residential address</li>
              <li>Email ID & Contact number</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Attach Required Documents:</span> Include:
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Self-attested ID proof (Voter ID, Passport, or Driving License)</li>
              <li>Proof of residence (Utility bill, Aadhaar card, or Rent Agreement)</li>
              <li>Court order (if declared insolvent or mentally unsound)</li>
              <li>Death certificate (if surrendering due to the director's death)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Digital Signature & Professional Attestation:</span>
            The form must be signed with the director’s <strong>Digital Signature Certificate (DSC)</strong> and attested by a <strong>practicing CA, CS, or Cost Accountant</strong>.
          </li>
          <li>
            <span className="font-semibold">Payment of Prescribed Fees:</span>
            Submit the applicable government fee through the <strong>MCA portal</strong>.
          </li>
          <li>
            <span className="font-semibold">MCA Verification & DIN Deactivation:</span>
            After verifying the details, the MCA will approve the surrender and <strong>deactivate the DIN permanently</strong>.
          </li>
        </ol>

        <div className="mt-6 text-blue-900">
          <p><strong>Note:</strong> Calzone handles the entire DIN surrender process, ensuring compliance and error-free filings.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">Documents Required for DIN Surrender</h2>
        <p className="mb-4 text-gray-700">
          To surrender a Director Identification Number (DIN), the following documents must be submitted along with Form DIR-5:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <span className="font-medium">Self-attested identity proof (any one):</span> Voter ID, Passport, Driving License, or Unique Identification Number (UIN)
          </li>
          <li>
            <span className="font-medium">Proof of residence:</span> Latest Utility Bill, Aadhaar Card, or Rent Agreement
          </li>
          <li>
            <span className="font-medium">Additional documents (if applicable):</span>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Court order – if the director is declared insolvent or mentally unsound</li>
              <li>Death certificate – in case of surrender on behalf of a deceased director</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          At <span className="font-semibold ">Calzone</span>, we help you prepare and submit all required documents to ensure a hassle-free DIN surrender process.
        </p>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-navy">Why Choose Calzone for DIN Surrender?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <span className="font-medium">End-to-End Support:</span> We manage the entire DIN surrender process, ensuring 100% compliance from start to finish.
          </li>
          <li>
            <span className="font-medium">Error-Free Documentation:</span> Avoid delays or rejections with our meticulously prepared forms and supporting documents.
          </li>
          <li>
            <span className="font-medium">Expert Legal Guidance:</span> Our experienced team of Company Secretaries and Chartered Accountants ensures your case is handled with precision.
          </li>
          <li>
            <span className="font-medium">Affordable & Transparent Pricing:</span> Clear pricing with no hidden fees — just dependable service you can trust.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          Need to surrender your DIN? <span className="font-semibold">Contact Calzone</span> today and experience hassle-free service.
        </p>
      </section>

      <section id="FAQs" className="my-10">
        <h2 className="text-2xl font-bold mb-6 text-navy">Frequently Asked Questions (FAQs)</h2>
        <div className=" mx-auto divide-y border border-gray-300 rounded-md ">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-navy">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full text-left text-lg font-medium text-white text-navy"
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === index ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 bg-navy transition-all duration-300 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DINSurrender;
