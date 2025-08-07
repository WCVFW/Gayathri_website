// import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaBalanceScale, FaExclamationTriangle, FaFileAlt, FaRupeeSign } from 'react-icons/fa';

const faqs = [
  {
    question: "1. What happens if I don't file LLP Form 11 or Form 8?",
    answer: <p className='text-white'>A penalty of ₹100 per day applies from the due date until filing is completed.</p>,
  },
  {
    question: '2. Is audit mandatory for all LLPs?',
    answer: (
      <div>
        <p>No, only if:</p>
        <ul className="list-disc ml-5 mt-1 space-y-1">
          <li className='text-white'>Turnover exceeds ₹40 lakh, or</li>
          <li className='text-white'>Capital contribution exceeds ₹25 lakh.</li>
        </ul>
      </div>
    ),
  },
  {
    question: '3. Can Calzone handle LLP compliance filings for me?',
    answer: <p className='text-white'>Absolutely! Calzone takes care of all ROC filings, tax returns, and GST compliance.</p>,
  },
  {
    question: '4. How long does LLP ROC compliance filing take?',
    answer: <p className='text-white'>With Calzone, compliance filings are completed within 3-5 working days.</p>,
  },
];

const LLPCompliance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
   <section className="px-6 md:px-16 py-8 font-poppins">
      <section id="llpCompliance" className="py-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-3">
          whatis LLP Compliance ?
        </h2>

        <p className="text-black text-sm sm:text-base mb-3">
          A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the limited liability of a company. Unlike traditional partnerships, LLPs protect partners from personal liability beyond their capital contributions.
        </p>

        <p className="text-black text-sm sm:text-base mb-3">
          While LLPs have fewer compliances than companies, they must still fulfill regulatory requirements set by the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA).
        </p>

        <p className="text-black text-sm sm:text-base">
          At <span className="font-semibold">Calzone</span>, we specialize in LLP ROC and non-ROC compliance services, ensuring 100% legal adherence and hassle-free filings.
        </p>
      </section>
      <section id="llpRocCompliance" className="py-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-3">
          Why LLP ROC Compliance Matters?
        </h2>

        <p className="text-black text-sm sm:text-base mb-4">
          A Designated Partner has specific legal and administrative responsibilities in an LLP, including:
        </p>

        <ul className="list-disc list-inside ml-3 space-y-2 text-sm sm:text-base text-black">
          <li>
            <span className="font-medium">Avoid Hefty Penalties</span> – Failure to file ROC forms on time attracts a penalty of ₹100 per day per form, accumulating indefinitely.
          </li>
          <li>
            <span className="font-medium">Maintain Legal Standing</span> – Non-compliance can lead to LLP disqualification or legal action.
          </li>
          <li>
            <span className="font-medium">Ensure Financial Transparency</span> – Proper compliance ensures a clear financial record, making it easier to secure loans or attract investors.
          </li>
        </ul>

        <p className="mt-4 text-sm sm:text-base text-black">
          <span className="font-semibold">Calzone</span> ensures full compliance, protecting your LLP from penalties and legal risks.
        </p>
      </section>
      <section id="rocComplianceChecklist" className="py-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 text-navy">
          LLP ROC Compliance Checklist
        </h2>

        {/* Filing LLP Agreement - Form 3 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black">Filing LLP Agreement – Form 3</h3>
          <p className="text-black text-sm mt-1"><strong>Timeline:</strong> Within 30 days of LLP incorporation.</p>
          <p className="text-black text-sm mt-1"><strong>Details Required:</strong></p>
          <ul className="list-disc list-inside ml-4 text-black text-sm space-y-1">
            <li>LLP Agreement outlining roles, responsibilities, and profit-sharing ratio.</li>
            <li>Must be executed and notarized by all partners.</li>
          </ul>
          <p className="text-sm mt-1"><strong>Late Filing Penalty:</strong> ₹100 per day.</p>
        </div>

        {/* Filing Annual Return - Form 11 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black">Filing Annual Return – Form 11</h3>
          <p className="text-black text-sm mt-1"><strong>Timeline:</strong> By May 30th each year.</p>
          <p className="text-black text-sm mt-1"><strong>Details Required:</strong></p>
          <ul className="list-disc list-inside ml-4 text-black text-sm space-y-1">
            <li>Basic LLP details (partners, capital contribution, business activities).</li>
            <li>Any penalty notices or compounding of offenses received during the year.</li>
          </ul>
          <p className="text-sm mt-1"><strong>Late Filing Penalty:</strong> ₹100 per day.</p>
        </div>

        {/* Filing Statement of Accounts & Solvency - Form 8 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black">Filing Statement of Accounts & Solvency – Form 8</h3>
          <p className="text-black text-sm mt-1"><strong>Timeline:</strong> By October 30th each year.</p>
          <p className="text-black text-sm mt-1"><strong>Details Required:</strong></p>
          <ul className="list-disc list-inside ml-4 text-black text-sm space-y-1">
            <li>Declaration of turnover (above or below ₹40 lakh).</li>
            <li>Statement confirming charge creation, modification, or satisfaction.</li>
            <li>Partners confirmation on record-keeping and financial responsibility.</li>
          </ul>
          <p className="text-sm mt-1"><strong>Late Filing Penalty:</strong> ₹100 per day.</p>
        </div>

        {/* Audit Requirement */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black">Audit Requirement for LLPs</h3>
          <p className="text-black text-sm mt-1">Mandatory Audit if:</p>
          <ul className="list-disc list-inside ml-4 text-black text-sm space-y-1">
            <li>Turnover exceeds ₹40 lakh OR</li>
            <li>Capital contribution exceeds ₹25 lakh.</li>
          </ul>
          <p className="text-black text-sm mt-1">
            LLPs below these thresholds can opt for self-declaration in Form 8, confirming that the partners have maintained proper books of accounts.
          </p>
        </div>

        <p className="text-black text-sm mt-4">
          <strong>Calzone</strong> handles all ROC filings, ensuring timely submissions to avoid penalties.
        </p>
      </section>
      <section className="bg-white p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-navy">
          <FaFileAlt className="text-navy" />
          Non-ROC Compliance for LLPs
        </h2>

        <p className="text-sm text-gray-700 mb-4">
          In addition to ROC filings, LLPs must also comply with income tax, GST, and other regulatory laws.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">Income Tax Return (ITR) Filing</h3>
            <p className="text-sm text-gray-700">
              <strong>Due Date:</strong> July 31st (For non-audited LLPs) | September 30th (For audited LLPs).
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Threshold for Mandatory Audit:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
              <li>Business turnover exceeding ₹1 crore.</li>
              <li>Professional receipts exceeding ₹50 lakh.</li>
            </ul>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Other Tax Obligations:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
              <li>TDS/TCS compliance.</li>
              <li>Advance Tax Payments.</li>
              <li>Alternate Minimum Tax (AMT) compliance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">GST Compliance (If Registered under GST Act)</h3>
            <p className="text-sm text-gray-700">Regular GST Filings:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
              <li><strong>GSTR-1</strong> - Monthly/Quarterly sales return.</li>
              <li><strong>GSTR-3B</strong> - Monthly summary return.</li>
              <li><strong>Annual GST Return (GSTR-9)</strong> - Mandatory for turnover exceeding ₹2 crore.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">Compliance with Other Laws (If Applicable)</h3>
            <p className="text-sm text-gray-700">
              If the LLP is engaged in specific business activities like import/export, finance, or professional services,
              it may need additional licenses or filings.
            </p>
          </div>

          <p className="text-sm  mt-4">
            Calzone ensures full tax compliance, from ITR to GST filings, keeping your LLP tax-ready.
          </p>
        </div>
      </section>
      <section className="bg-white p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-navy">
          <FaExclamationTriangle className="text-red-500" />
          Consequences of Non-Compliance
        </h2>

        <p className="text-sm text-gray-700 mb-4">
          Missing LLP ROC filings leads to:
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 ml-4 space-y-1">
          <li>₹100 per day penalty per form (Form 8 & Form 11).</li>
          <li>LLP partners facing legal action or disqualification.</li>
          <li>LLP status marked as <strong>'defaulting'</strong> affecting credibility.</li>
          <li>Possible dissolution of the LLP by the ROC.</li>
        </ul>

        <p className="text-sm  mt-4">
          Calzone ensures your LLP stays compliant, preventing unnecessary penalties.
        </p>
      </section>
      <section className="bg-gray-50 p-6 rounded-lg  mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-navy">
          How Calzone Helps with LLP Compliance?
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-[#306590] mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">End-to-End Compliance Management</h3>
              <p className="text-sm text-gray-700">
                We handle Form 3, Form 8, Form 11 filings and ensure timely ROC submissions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaBalanceScale className="text-[#306590] mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">Tax Compliance & GST Filings</h3>
              <p className="text-sm text-gray-700">
                From ITR to GST filings, we ensure your LLP meets all tax obligations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-[#306590] mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">Audit & Financial Advisory</h3>
              <p className="text-sm text-gray-700">
                We help LLPs determine if an audit is required and facilitate the process.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaRupeeSign className="text-[#306590] mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">Affordable & Transparent Pricing</h3>
              <p className="text-sm text-gray-700">
                No hidden charges—just expert legal & financial services.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm  mt-5">
          Need help with LLP ROC compliance? <strong>Contact Calzone today</strong> for expert assistance!
        </p>
      </section>
      <div id="FAQs" className="my-10">
        <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md ">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 bg-navy transition flex justify-between items-center"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className='text-white'>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-white bg-navy">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default LLPCompliance;
