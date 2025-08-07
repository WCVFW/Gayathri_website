// import React from 'react';

import { useState } from "react";
import { FaBalanceScale, FaFileContract, FaUserEdit, } from "react-icons/fa";
import { MdAccountBalance, MdHowToVote, MdOutlineGavel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const sections = [
  "Introduction",
  "When Company Be Closed",
  "Step-by-Step",
  "Documents Required",
  "Key Points",
  "How Calzone Help You"
];


export default function ClosureOfPrivateLimitedCompany() {
  const navigate = useNavigate();
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <div className="px-6 md:px-16 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-navy mb-8 ">Closure of Private Limited Company</h1>
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
      <section className="mb-10 px-4 md:px-10 py-6 bg-white ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-navy">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Since 2015-16 (Post-Demonetization), the Ministry of Corporate Affairs (MCA) and the Government of India have introduced several measures to support businesses, stakeholders, and directors. These initiatives include exemptions for private limited companies, the CODS Scheme (2018), the Companies Amendment Bill (2017), and even zero incorporation fees for new companies. These changes were widely welcomed by business owners and stakeholders.
        </p>
        <p className="text-gray-700 mb-4">
          However, on the flip side, many companies failed to comply with essential requirements such as opening a bank account, filing income tax returns, annual returns, and audited financial statements on the MCA portal.
        </p>
        <p className="text-gray-700 mb-4">
          To address this issue, the MCA enforced stricter regulations against non-compliant businesses, shell companies, and defaulting directors. Several key amendments were introduced, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Disqualification of Director Identification Numbers (DIN) for five years</li>
          <li>Mandatory e-Form INC-20A (Proof of opening a company bank account)</li>
          <li>Yearly KYC compliance for directors via e-Form DIR-3 KYC (Non-compliance leads to a ₹5,000 penalty per director)</li>
          <li>Filing of DPT-3 for secured/unsecured loans & deposits (from 2019)</li>
          <li>Introduction of Form MSME-1</li>
          <li>Late filing penalty of ₹100 per day for AOC-4, AOC-4 CFS, AOC-4 XBRL (Financial Statements) and MGT-7 (Annual Returns)</li>
          <li>Introduction of MGT-7A for OPC and small companies</li>
        </ul>
        <p className="text-gray-700">
          To streamline the process for defunct or inoperative private limited companies, the MCA has simplified the closure process. Below are the key provisions for closing a private limited company under Calzone's expert guidance.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">
          When Can a Private Limited Company Be Closed?
        </h2>
        <p className="mb-4">
          A private limited company can apply for closure under the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-medium">No Business Activity Since Incorporation</span> – If the company has not commenced operations within one year of incorporation.
          </li>
          <li>
            <span className="font-medium">No Business Activity in the Past Two Financial Years</span> – If the company has not carried out any business transactions in the last two years and has not applied for Dormant Company status under Section 455 of the Companies Act, 2013.
          </li>
          <li>
            <span className="font-medium">Non-Payment of Subscription Money</span> – If the subscribers to the Memorandum of Association (MOA) have not paid their subscription money within 180 days of incorporation.
          </li>
        </ul>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Step-by-Step Process for Closing a Private Limited Company</h2>
        <p className="mb-4">
          According to Rule 11 of the Companies (Appointment and Qualification of Directors) Rules, 2014, a DIN may be surrendered,
          canceled, or deactivated under the following circumstances:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <span className="font-semibold">Settle All Liabilities</span>
            <p className="pl-4 text-gray-700">Before applying for closure, the company must clear all outstanding liabilities.</p>
          </li>
          <li>
            <span className="font-semibold">Conduct a Board Meeting</span>
            <ul className="list-disc pl-8 text-gray-700 space-y-1">
              <li>Hold a Board Meeting to approve the voluntary closure.</li>
              <li>Issue a notice for an Extraordinary General Meeting (EGM).</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Convene the EGM</span>
            <p className="pl-4 text-gray-700">Pass a special resolution approving the closure.</p>
          </li>
          <li>
            <span className="font-semibold">File e-Form MGT-14</span>
            <p className="pl-4 text-gray-700">File e-Form MGT-14 with the Registrar of Companies (ROC) to report the special resolution.</p>
          </li>
          <li>
            <span className="font-semibold">Submit e-Form STK-2</span>
            <p className="pl-4 text-gray-700">File an application for strike-off with ROC using e-Form STK-2 along with mandatory documents (listed below).</p>
          </li>
          <li>
            <span className="font-semibold">ROC Approval & Strike-Off Notice</span>
            <ul className="list-disc pl-8 text-gray-700 space-y-1">
              <li>Once the ROC verifies the application, the company name is removed from the records.</li>
              <li>The strike-off is published in the official gazette via Form STK-7.</li>
            </ul>
          </li>
        </ol>
        <p className="font-medium">
          Need to surrender your DIN? Calzone ensures a legally compliant and quick process.
        </p>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Documents Required</h2>
        <ul className="space-y-3 pl-2">
          <li className="flex items-start gap-3">
            <FaFileContract className="text-[#306590] mt-1" />
            <span>
              <strong>Indemnity Bond (Notarized):</strong> Form STK-3, signed by all directors.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaBalanceScale className="text-[#306590] mt-1" />
            <span>
              <strong>Financial Statement (STK-8):</strong> A recent statement of assets & liabilities (not older than 30 days), certified by a Chartered Accountant.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaUserEdit className="text-[#306590] mt-1" />
            <span>
              <strong>Affidavit (STK-4):</strong> Signed by each director.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MdHowToVote className="text-[#306590] mt-1" />
            <span>
              <strong>Certified Special Resolution:</strong> OR consent from 75% of shareholders (in terms of paid-up capital) as of the application date.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MdOutlineGavel className="text-[#306590] mt-1" />
            <span>
              <strong>Litigation Status Statement:</strong> Details of any pending legal matters involving the company.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <MdAccountBalance className="text-[#306590] mt-1" />
            <span>
              <strong>Regulatory NOC (if applicable):</strong> If the company is registered with SEBI, RBI, or any other regulatory body, a No Objection Certificate (NOC) is required.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">Key Points to Note Before Filing for Voluntary Closure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Flat Statutory Fee: The e-Form STK-2 filing fee is ₹10,000.</li>
          <li>Pending Filings Must Be Cleared: Any overdue AOC-4 and MGT-7 forms must be filed before applying for closure.</li>
          <li>Certification by a Professional: The e-Form STK-2 must be certified by a practicing Company Secretary, Chartered Accountant, or Cost Accountant.</li>
          <li>
            <p className="font-medium">Restrictions on Closure:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The company has changed its name or shifted its registered office to another state in the last three months.</li>
              <li>Disposed of any property or assets, except in the ordinary course of business.</li>
              <li>Engaged in any activity except for closure-related formalities.</li>
              <li>Applied for a compromise or arrangement with creditors, which is still pending before a tribunal.</li>
              <li>Is currently undergoing winding-up proceedings under the Companies Act, 2013 or IBC 2016.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-navy">How Calzone Can Help You</h2>
        <p className="mb-2">
          Closing a private limited company requires expert guidance to ensure compliance with MCA regulations and avoid penalties. At Calzone, we provide:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hassle-free consultation to assess your eligibility for closure.</li>
          <li>End-to-end documentation support, including preparing & filing necessary forms.</li>
          <li>ROC communication & compliance handling to streamline the process.</li>
          <li>Affordable pricing with zero hidden charges.</li>
        </ul>
      </section>

    </div>
  );
}
