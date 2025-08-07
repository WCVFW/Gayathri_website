// import React from 'react';
import { useState } from 'react';
import {FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const faqs = [
  {
    question: "How long does it take to close an LLP?",
    answer: "It typically takes 2 to 3 months to close an LLP, depending on ROC processing times and document completeness.",
  },
  {
    question: "Can an LLP be closed without clearing outstanding debts?",
    answer: "No. All dues and liabilities must be settled before applying for LLP closure.",
  },
  {
    question: "What happens if LLP compliance filings are overdue?",
    answer: "Overdue filings like Form 8 & 11 must be completed before submitting Form 24 to the ROC.",
  },
  {
    question: "Can an LLP be revived after closure?",
    answer: "Once an LLP is struck off, it cannot be revived unless challenged legally with strong grounds.",
  },
  {
    question: "How does Calzone help with LLP closure?",
    answer: "Calzone manages the full process—document drafting, filings, approvals—with expert legal and CA support.",
  },
];
const sections = [
  "Overview",
  "Legal Provisions",
  "Step-by-Step",
  "Documents Required",
  "Conditions",
  "Why Choose",
  "FAQs"
];

const ClosureOfLLP = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  
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
    <div className="px-6 md:px-16 py-8 font-poppins">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Closure of LLP
        </h1>
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
      </div>
      {/* Section: Header */}
      <section id="llpClosure" className="py-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-3 ">
          What is LLP Closure?
        </h2>

        <p className="text-black text-sm sm:text-base leading-relaxed">
          A Limited Liability Partnership (LLP) is a legally recognized business entity formed under the LLP Act, 2008, where each partner's liability is limited to their capital contribution.
        </p>

        <p className="mt-3 text-black text-sm sm:text-base leading-relaxed">
          However, an LLP may need to shut down due to non-operation, financial constraints, or business restructuring. The closure of an LLP involves striking off its name from the MCA register, ensuring it no longer has legal or financial obligations.
        </p>

        <p className="mt-4 font-medium text-sm sm:text-base text-black">
          Key Reasons for Closing an LLP:
        </p>

        <ul className="list-disc list-inside ml-3 mt-2 text-sm sm:text-base text-black space-y-1">
          <li>The LLP has not started operations within one year of incorporation.</li>
          <li>The LLP has been inactive (no business transactions) for at least one year.</li>
          <li>The partners mutually decide to dissolve the LLP.</li>
        </ul>

        <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
          Calzone ensures a smooth and legally compliant LLP closure process, handling all documentation and filings with the MCA.
        </p>
      </section>

      {/* Section: Legal Provisions */}
      <section className="">
        <h2 className="text-[20px] font-semibold mb-3 flex items-center gap-2 text-navy">
          Legal Provisions for LLP Closure
        </h2>

        <p className="text-[15px] text-black leading-relaxed">
          <strong>Section 75 of the LLP Act, 2008:</strong> If the Registrar of Companies (ROC) has reasonable cause to believe that an LLP is not carrying on business, it may strike off the LLP from the register.
        </p>

        <p className="mt-2 text-[15px] text-black leading-relaxed">
          <strong>Rule 37 of LLP Rules, 2009:</strong> LLPs not in operation for one year or more can apply for closure by filing Form 24 with the ROC, with consent from all partners.
        </p>

        <p className="mt-2 text-[15px] text-black leading-relaxed">
          Calzone ensures your LLP closure follows the correct legal procedure, avoiding penalties and compliance issues.
        </p>
      </section>
      {/* Section: Step-by-Step */}
      <section className="">
        <h2 className="text-[20px] font-semibold mb-4 flex items-center gap-2 text-navy">
          Step-by-Step Process to Close an LLP
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-[15px] text-black ml-4 leading-relaxed">
          <li>
            <strong>Obtain Partner Approval:</strong> Pass a special resolution in a partner's meeting, approving the LLP closure. Obtain consent from all partners for the strike-off.
          </li>
          <li>
            <strong>File Form 1 with MCA:</strong> Submit Form 1 within 30 days of passing the special resolution.
          </li>
          <li>
            <strong>Debt Clearance Declaration:</strong> At least two designated partners must declare that:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>The LLP has no outstanding debts, OR</li>
              <li>The LLP will clear all debts within one year.</li>
            </ul>
          </li>
          <li>
            <strong>File Form 4 & Submit Financial Report:</strong> File Form 4 along with a report detailing the LLP's assets & liabilities. Submit a declaration stating the LLP closure is not intended to defraud anyone.
          </li>
          <li>
            <strong>Obtain Creditor Consent:</strong> Secure written consent from at least two-thirds of LLP creditors.
          </li>
          <li>
            <strong>Appoint a Liquidator:</strong> Appoint a liquidator to finalize the LLP's financials. Obtain a liquidator's statement and file Form 6 with MCA within 14 days.
          </li>
          <li>
            <strong>Finalize LLP Accounts:</strong> Prepare final financial statements and submit Form 9 to the MCA.
          </li>
          <li>
            <strong>File Form 24 for LLP Closure:</strong> File Form 24 with the Registrar, along with all required documents.
          </li>
          <li>
            <strong>ROC Publishes Notice of LLP Closure:</strong> The ROC publishes a closure notice on the MCA website for one month.
          </li>
          <li>
            <strong>LLP Name is Struck Off & Closure is Finalized:</strong> If no objections arise, the Registrar removes the LLP's name from the register. A closure notice is published in the Official Gazette, legally closing the LLP.
          </li>
        </ol>

        <p className="mt-4 text-[15px] text-black leading-relaxed">
          Calzone ensures a fast, hassle-free LLP closure by managing all MCA and ROC filings on your behalf.
        </p>
      </section>
      {/* Section: Documents Required */}
      <section className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-navy">
          Documents Required for LLP Closure
        </h2>

        <p className="text-sm font-medium mb-2 text-gray-800">
          As per Rule 37 of the LLP Amendment Rules, 2017, Form 24 must be submitted along with:
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-1">Financial Statements & Declarations</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Statement of Accounts (certified by a Chartered Accountant) showing zero assets & liabilities,
              not older than 30 days from filing.
            </li>
            <li>
              Affidavit signed by designated partners confirming:
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>The LLP never commenced business OR ceased operations from a specific date.</li>
                <li>The LLP has no liabilities and will indemnify any future liabilities.</li>
                <li>The LLP never opened a bank account OR has closed it (attach bank closure statement).</li>
              </ul>
            </li>
            <li>Income Tax Return acknowledgment, if the LLP filed any tax returns.</li>
            <li>Copy of Initial LLP Agreement (if not filed previously).</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-1">Partner & Business Identification Proof</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>PAN card of all partners.</li>
            <li>Aadhaar card of all partners.</li>
            <li>Latest address proof of all partners.</li>
          </ul>
        </div>

        <p className="text-sm font-medium mt-4">
          Calzone ensures all required documents are correctly filed to avoid MCA rejections or delays.
        </p>
      </section>
      {/* Section: Conditions */}
      <section className="bg-white px-6 py-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-navy">
          {/* <FaBalanceScale className="text-blue-600" /> */}
          Conditions for LLP Closure
        </h2>

        <p className="text-sm text-gray-700 mb-3">
          Before filing for LLP closure, the following conditions must be met:
        </p>

        <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
          <li>The LLP must have been inactive for at least one year OR never commenced operations.</li>
          <li>All financial obligations must be cleared before applying for strike-off.</li>
          <li>Consent from all partners is mandatory.</li>
          <li>All overdue ROC filings (Form 8 & Form 11) must be completed up to the last active financial year.</li>
        </ul>

        <p className="mt-4 text-smfont-medium">
          Calzone ensures all pre-closure compliance requirements are met before submitting Form 24.
        </p>
      </section>
      {/* Section: Why Calzone */}
      <section className="bg-gray-100 px-6 py-8 rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-navy">
          Why Choose Calzone for LLP Closure?
        </h2>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>
            <span className="font-medium">End-to-End Legal Support</span> – We handle Form 1, Form 4, Form 24 filings and manage ROC & MCA approvals.
          </li>
          <li>
            <span className="font-medium">Hassle-Free Documentation</span> – We assist in drafting affidavits, partner consents, and financial statements.
          </li>
          <li>
            <span className="font-medium">Expert Advisory</span> – Our team of Chartered Accountants & Legal Professionals ensures compliance.
          </li>
          <li>
            <span className="font-medium">Affordable & Transparent Pricing</span> – No hidden fees—just fast & reliable service.
          </li>
        </ul>

        <p className="mt-5 text-sm font-medium text-gray-800">
          Need to close your LLP?{" "}
          <span className="cursor-pointer hover:text-red-700 transition">
            Contact Calzone today
          </span>{" "}
          for expert assistance!
        </p>
      </section>
      {/* Section: FAQs */}
      <section id="FAQs" className="my-10">
        <h2 className="text-2xl font-bold mb-6 text-navy">Frequently Asked Questions (FAQs)</h2>
        <div className=" mx-auto divide-y border border-gray-300 rounded-md ">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-navy">
              <button
                onClick={() => toggleFAQ(index)}
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

    </div >
  );
};

export default ClosureOfLLP;
