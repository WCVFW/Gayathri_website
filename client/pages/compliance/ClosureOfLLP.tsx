// import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaGavel, FaRegFileAlt, FaRegClock, FaBalanceScale, FaQuestionCircle, FaMinus, FaPlus } from 'react-icons/fa';

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
const ClosureOfLLP = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white text-gray-800 px-4 md:px-16 py-12 space-y-12">

      {/* Section: Header */}
      <section id="llpClosure" className="">
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">
          Closure of LLP
        </h2>

        <p className="text-black text-sm sm:text-base">
          A Limited Liability Partnership (LLP) is a legally recognized business entity formed under the LLP Act, 2008, where each partner's liability is limited to their capital contribution.
        </p>

        <p className="mt-3 text-black text-sm sm:text-base">
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

        <p className="mt-4 text-sm sm:text-base text-black">
          Calzone ensures a smooth and legally compliant LLP closure process, handling all documentation and filings with the MCA.
        </p>
      </section>

      {/* Section: Legal Provisions */}
      <section className="">
        <h2 className="text-[20px] font-semibold mb-3 flex items-center gap-2 text-black">
          <FaGavel className="text-black" />
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
        <h2 className="text-[20px] font-semibold mb-4 flex items-center gap-2 text-black">
          <FaRegClock className="text-black" />
          Step-by-Step Process to Close an LLP
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-[15px] text-black ml-4 leading-relaxed">
          <li>Obtain partner approval and pass a special resolution.</li>
          <li>File Form 1 with the MCA within 30 days of resolution.</li>
          <li>
            Submit a debt clearance declaration stating:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>LLP has no outstanding debts, OR</li>
              <li>All debts will be cleared within one year.</li>
            </ul>
          </li>
          <li>File Form 4 with financial report and declaration of no intent to defraud.</li>
          <li>Get written consent from at least two-thirds of creditors.</li>
          <li>Appoint a liquidator and file Form 6 with their signed statement.</li>
          <li>Finalize LLP accounts and submit Form 9 to the MCA.</li>
          <li>File Form 24 along with all required closure documents.</li>
          <li>ROC publishes a closure notice on the MCA portal for one month.</li>
          <li>LLP is struck off, and closure is finalized in the Official Gazette.</li>
        </ol>

        <p className="mt-4 text-[15px] text-black leading-relaxed">
          Calzone ensures a fast, hassle-free LLP closure by managing all MCA and ROC filings on your behalf.
        </p>
      </section>
      {/* Section: Documents Required */}
      <section className="">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaRegFileAlt className="text-black" />
          Documents Required
        </h2>

        <p className="text-sm font-medium mb-2 text-gray-800">
          As per Rule 37 of LLP Rules (Amendment, 2017):
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>
            Statement of Accounts (CA certified, no older than 30 days)
          </li>
          <li>
            Affidavit from designated partners about inactivity & no liabilities
          </li>
          <li>
            Bank closure letter or confirmation that bank never opened
          </li>
          <li>
            Income Tax Return acknowledgment (if applicable)
          </li>
          <li>
            Initial LLP Agreement copy (if not filed earlier)
          </li>
          <li>
            PAN, Aadhaar & address proof of all partners
          </li>
        </ul>

        <p className="text-sm text-gray-600 mt-4">
          <strong>Calzone ensures</strong> all documents are correctly submitted to avoid MCA rejections or delays.
        </p>
      </section>

      {/* Section: Conditions */}
      <section className="">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBalanceScale className="text-black" />
          Conditions for LLP Closure
        </h2>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>The LLP must be inactive for at least 1 year OR never started business</li>
          <li>All financial obligations must be cleared</li>
          <li>Consent from all partners is mandatory</li>
          <li>All ROC filings (Form 8 & 11) must be up-to-date</li>
        </ul>

        <p className="mt-4 text-sm text-green-700">
          Calzone ensures all pre-closure requirements are met before submitting Form 24.
        </p>
      </section>

      {/* Section: Why Calzone */}
      <section className="">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaCheckCircle className="text-black" />
          Why Choose Calzone?
        </h2>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>End-to-end support with Forms 1, 4, 24 & MCA filings</li>
          <li>Drafting of affidavits, partner consents, and closure declarations</li>
          <li>Compliance ensured by Chartered Accountants & legal experts</li>
          <li>Transparent pricing with no hidden fees</li>
        </ul>

        <p className="mt-4 text-sm font-medium text-gray-800">
          Need help closing your LLP?{" "}
          <span className="text-red-600 underline cursor-pointer">
            Contact Calzone now
          </span>{" "}
          for expert assistance!
        </p>
      </section>
      {/* Section: FAQs */}
      <section className="">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-black">
        <FaQuestionCircle className="text-black" /> Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex justify-between items-center w-full text-left text-sm font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-black" />
              ) : (
                <FaPlus className="text-black" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>

    </div >
  );
};

export default ClosureOfLLP;
