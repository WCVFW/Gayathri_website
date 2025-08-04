// src/pages/MoaAoaAmendments.tsx

import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {MdOutlineCompareArrows } from 'react-icons/md';
// import { GiReceiveMoney } from 'react-icons/gi';
// import { IoMdHelpCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const faqData = [
  {
    question: 'How long does an MOA or AOA amendment take?',
    answer:
      'MOA amendments (name, registered office, object clause) typically take 30–60 days. AOA amendments generally take 15–30 days.',
  },
  {
    question: 'Do all amendments require shareholder approval?',
    answer:
      'Yes, major amendments require passing a Special Resolution with at least 75% shareholder approval.',
  },
  {
    question: 'Can Calzone manage the entire amendment process?',
    answer:
      'Absolutely! Calzone takes care of documentation, resolutions, RoC filings, and legal approvals, ensuring a smooth and compliant process from start to finish.',
  },
];

const sections = [
  'moa-and-aoa',
  'moa',
  'aoa',
  'how-to-amend',
  'aoa-amendment-procedure',
  'key-differences',
  'why-choose',
  'faqs',
];

const MoaAoaAmendments: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
   const [activeSection, setActiveSection] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };
  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold mb-8  text-navy">MOA & AOA Amendments</h1>
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
        <h2 className="text-xl font-semibold flex items-center gap-2 text-navy">What Are MOA and AOA?</h2>
        <p>
          The Memorandum of Association (MOA) and Articles of Association (AOA) are the charter documents of a company, defining its constitution, objectives, management, and governance.
        </p>
        <p>
          These documents are finalized at the time of incorporation, but as businesses grow and evolve, amendments to the MOA and AOA become necessary to adapt to new operational needs.
        </p>
        <p>
          At <strong>Calzone</strong>, we simplify the process of MOA & AOA amendments, ensuring seamless legal compliance with the Companies Act, 2013 and handling all necessary documentation and filings.
        </p>
      </section>

      <hr className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-navy">
           What is the Memorandum of Association (MOA)?
        </h2>
        <p>
          The MOA is the company's constitution, defining its purpose, scope, and operational boundaries. The Articles of Association (AOA) cannot override MOA provisions, making it the primary governing document of a company.
        </p>
        <p>
          MOA is structured as per Section 4 of the Companies Act, 2013, and includes the following key clauses:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Name Clause:</strong> Specifies the legal name of the company. Private companies must include "Private Limited", while public companies must add "Limited" to their name.
          </li>
          <li>
            <strong>Registered Office Clause:</strong> Determines the jurisdiction of the Registrar of Companies (RoC) and specifies the state in which the company is registered.
          </li>
          <li>
            <strong>Object Clause:</strong> Defines the main objectives of the company. Includes incidental objectives necessary to achieve the main objectives.
          </li>
          <li>
            <strong>Liability Clause:</strong> Specifies member liability, which may be:
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Limited by Shares - Liability is restricted to the unpaid share amount.</li>
              <li>Limited by Guarantee - Members contribute a fixed amount in case of winding up.</li>
              <li>Unlimited - Members are fully liable for company obligations.</li>
            </ul>
          </li>
          <li>
            <strong>Capital Clause:</strong> Defines the company's authorized share capital, number of shares, and their value.
          </li>
          <li>
            <strong>Special Clause for One Person Company (OPC):</strong> OPCs must specify a nominee who will become the sole shareholder in case of the owner's demise.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-navy mt-10">
           What is the Articles of Association (AOA)?
        </h2>
        <p>
          The AOA lays down the company's rules and regulations, governing its internal management, administration, and decision-making processes.
        </p>
        <p>
          AOA is governed under <strong>Section 5 of the Companies Act, 2013</strong>, and its format varies based on the type of company, as illustrated below:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Table F:</strong> Company limited by shares</li>
          <li><strong>Table G:</strong> Company limited by guarantee with share capital</li>
          <li><strong>Table H:</strong> Company limited by guarantee without share capital</li>
          <li><strong>Table I:</strong> Unlimited company with share capital</li>
          <li><strong>Table J:</strong> Unlimited company without share capital</li>
        </ul>

        <h3 className="font-semibold text-lg mt-4">Key Provisions in AOA</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Share Capital & Share Transfers</li>
          <li>Dividends & Reserves</li>
          <li>Board & General Meetings</li>
          <li>Voting Rights & Proxies</li>
          <li>Key Managerial Personnel (KMP) & Borrowing Powers</li>
          <li>Winding Up & Liquidation</li>
        </ul>

        <p className="mt-4">
          <strong>Calzone</strong> ensures your AOA amendments are executed seamlessly, aligning with your business goals.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-navy">
           How to Amend MOA and AOA?
        </h2>

        {/* MOA Amendment */}
        <div>
          <h3 className="text-xl font-semibold mb-2">MOA Amendment Procedure</h3>
          <p className="mb-2">The procedure depends on which clause of the MOA is being amended:</p>

          <ul className="list-decimal ml-6 space-y-3 text-gray-700">
            <li>
              <strong>Change in Company Name</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Pass a Special Resolution in a General Meeting.</li>
                <li>File Form INC-24 with RoC.</li>
                <li>Approval from the Central Government (except in private-public conversions).</li>
                <li>RoC issues a fresh Certificate of Incorporation.</li>
              </ul>
            </li>
            <li>
              <strong>Change in Registered Office Address</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>File Form INC-23 for approval.</li>
                <li>If moving to another state, obtain Central Government approval.</li>
                <li>Ensure no pending creditor dues before the move.</li>
                <li>File updated MoA with RoC of both states.</li>
              </ul>
            </li>
            <li>
              <strong>Change in Object Clause</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Pass a Special Resolution.</li>
                <li>Publish the amendment in an English and regional newspaper.</li>
                <li>Dissenting shareholders must be given an exit option.</li>
                <li>File Form MGT-14 with RoC for approval.</li>
              </ul>
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-600">
            <strong>Note:</strong> Calzone handles all RoC filings, document verifications, and legal approvals for MOA amendments.
          </p>
        </div>

        {/* AOA Amendment */}
        <div>
          <h3 className="text-xl font-semibold mb-2">AOA Amendment Procedure</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Board Meeting:</strong> Pass a resolution to approve AOA amendments.</li>
            <li><strong>Extraordinary General Meeting (EGM):</strong> Shareholders vote on the amendment.</li>
            <li><strong>Special Resolution Passed:</strong> Approval required from at least 75% of voting shareholders.</li>
            <li><strong>File Form MGT-14:</strong> Submit to RoC to register the changes.</li>
          </ul>

          <p className="mt-4 text-sm text-gray-600">
            <strong>Note:</strong> Calzone ensures a legally sound amendment process, minimizing compliance risks.
          </p>
        </div>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-[#306590]">
          <MdOutlineCompareArrows className="text-2xl" /> Key Differences Between MOA and AOA
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-[#306590] text-white text-left">
                <th className="border px-4 py-3">Feature</th>
                <th className="border px-4 py-3">MOA</th>
                <th className="border px-4 py-3">AOA</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-3 font-medium">Purpose</td>
                <td className="border px-4 py-3">Defines company’s constitution & objectives</td>
                <td className="border px-4 py-3">Regulates company management & operations</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-3 font-medium">Clauses</td>
                <td className="border px-4 py-3">Fixed (5 main clauses)</td>
                <td className="border px-4 py-3">Flexible (governs various internal functions)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-3 font-medium">Mandatory Filing</td>
                <td className="border px-4 py-3">Must be filed at incorporation</td>
                <td className="border px-4 py-3">Optional but recommended at incorporation</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-3 font-medium">Amendments</td>
                <td className="border px-4 py-3">Cannot be retrospective</td>
                <td className="border px-4 py-3">Can be retrospective</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-navy"> Why Choose Calzone?
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li><strong>✅ End-to-End Compliance</strong> – We handle resolutions, filings, and approvals with RoC and MCA.</li>
          <li><strong>✅ Hassle-Free Documentation</strong> – From board meetings to government approvals, we manage everything.</li>
          <li><strong>✅ Expert Legal Assistance</strong> – Minimize compliance risks with our professional guidance.</li>
          <li><strong>✅ Affordable & Transparent Pricing</strong> – No hidden charges—just reliable, fast service.</li>
        </ul>
        <p>Need to amend your MOA or AOA? Contact Calzone today!</p>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow cursor-pointer bg-navy"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center ">
              <h3 className="font-semibold text-gray-800 text-white">{item.question}</h3>
              {openIndex === index ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-white">{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MoaAoaAmendments;
