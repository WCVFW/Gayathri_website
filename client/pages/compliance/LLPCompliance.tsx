// import React from 'react';
import { FaCheckCircle, FaBalanceScale, FaExclamationTriangle, FaGavel, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const LLPCompliance = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-16 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-violet-700 mb-4">LLP ROC Compliance</h1>
        <p className="text-lg text-gray-800">
          A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the limited liability of a company.
          Unlike traditional partnerships, LLPs protect partners from personal liability beyond their capital contributions.
        </p>
        <p className="mt-3 text-gray-700">
          While LLPs have fewer compliances than companies, they must still fulfill regulatory requirements set by the
          Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA).
        </p>
        <p className="mt-3 font-medium text-green-700">
          At Calzone, we specialize in LLP ROC and non-ROC compliance services, ensuring 100% legal adherence and hassle-free filings.
        </p>
      </section>

      {/* Section 2: Why It Matters */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-black">
          <FaBalanceScale className="text-violet-700" />
          Why LLP ROC Compliance Matters?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800 text-sm ml-2">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span>
              <strong>Avoid Hefty Penalties:</strong> ₹100 per day per form for delayed filing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span>
              <strong>Maintain Legal Standing:</strong> Prevent LLP disqualification or legal action.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span>
              <strong>Ensure Financial Transparency:</strong> Easier loan approvals and investment opportunities.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Calzone ensures full compliance, protecting your LLP from penalties and legal risks.
        </p>
      </section>
      <section className="text-black">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaFileAlt className="text-black" />
          LLP ROC Compliance Checklist
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold">
              1. Filing LLP Agreement – <span className="text-black font-medium">Form 3</span>
            </h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: Within 30 days of LLP incorporation</li>
              <li>Details: LLP Agreement with roles, responsibilities, and profit-sharing ratio</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">
              2. Filing Annual Return – <span className="text-black font-medium">Form 11</span>
            </h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: By May 30th each year</li>
              <li>Includes: Partner details, capital contribution, business activities</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">
              3. Filing Statement of Accounts & Solvency – <span className="text-black font-medium">Form 8</span>
            </h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: By October 30th each year</li>
              <li>Includes: Turnover declaration, charge details, financial responsibility</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">4. Audit Requirement for LLPs</h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Mandatory if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh</li>
              <li>LLPs below this can submit Form 8 with self-declaration and partner confirmation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold">5. Calzone Support</h3>
            <p className="text-sm ml-4">
              Calzone handles all ROC filings and compliance documents, ensuring timely submissions to avoid penalties.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        {/* Non-ROC Compliance */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
            <FaBalanceScale className="text-black" /> Non-ROC Compliance for LLPs
          </h2>
          <p className="text-sm mb-2">
            In addition to ROC filings, LLPs must also comply with income tax, GST, and other regulatory laws.
          </p>
          <h3 className="text-sm font-semibold text-black">Income Tax Return (ITR) Filing</h3>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Due Date: July 31st (Non-audited LLPs), September 30th (Audited LLPs)</li>
            <li>Audit Thresholds:
              <ul className="list-disc list-inside ml-4">
                <li>Business turnover exceeds ₹1 crore</li>
                <li>Professional receipts exceed ₹50 lakh</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-sm font-semibold text-black mt-4">Other Tax Obligations:</h3>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>TDS/TCS compliance</li>
            <li>Advance Tax Payments</li>
            <li>Alternate Minimum Tax (AMT) compliance</li>
          </ul>

          <h3 className="text-sm font-semibold text-black mt-4">GST Compliance (If Registered):</h3>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>GSTR-1: Monthly/Quarterly sales return</li>
            <li>GSTR-3B: Monthly summary return</li>
            <li>GSTR-9: Annual GST Return (Mandatory if turnover exceeds ₹2 crore)</li>
          </ul>

          <h3 className="text-sm font-semibold text-black mt-4">Other Legal Compliance:</h3>
          <p className="text-sm ml-4">
            LLPs engaged in import/export, finance, or professional services may require additional licenses or filings.
          </p>

          <p className="text-sm text-green-700 mt-3">
            Calzone ensures full tax compliance, from ITR to GST filings, keeping your LLP tax-ready.
          </p>
        </div>

        {/* Audit Requirement */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-black">
            <FaGavel className="text-black" /> Audit Requirement for LLPs
          </h2>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Turnover exceeds ₹40 lakh</li>
            <li>Capital contribution exceeds ₹25 lakh</li>
          </ul>
          <p className="text-sm mt-2">
            LLPs below these thresholds can submit a self-declaration in <strong>Form 8</strong>.
          </p>
          <p className="text-sm text-green-700 mt-2">
            Calzone handles all ROC filings, ensuring timely submissions to avoid penalties.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaExclamationTriangle /> Non-ROC Compliance for LLPs</h2>
        <h3 className="text-lg font-bold">Income Tax Return (ITR) Filing</h3>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Due Date: July 31 (Non-audited) | September 30 (Audited)</li>
          <li>Audit: Mandatory if turnover  ₹1 crore or professional receipts  ₹50 lakh</li>
          <li>Includes TDS, Advance Tax, AMT compliance</li>
        </ul>
        <h3 className="text-lg font-bold mt-4">GST Compliance</h3>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>GSTR-1 & GSTR-3B monthly/quarterly</li>
          <li>GSTR-9 mandatory for turnover  ₹2 crore</li>
        </ul>
        <p className="text-sm mt-2">Calzone ensures full tax compliance, from ITR to GST filings, keeping your LLP tax-ready.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-black">
          <FaExclamationTriangle className="text-black" />
          Consequences of Non-Compliance
        </h2>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1">
          <li>₹100 per day penalty for each ROC form (Form 8 & Form 11)</li>
          <li>Legal action or disqualification of LLP partners</li>
          <li>LLP status marked as ‘defaulting’, affecting credibility</li>
          <li>Possible dissolution of the LLP by the ROC</li>
        </ul>
        <p className="text-sm text-red-600 mt-2">
          Avoid penalties. Stay compliant with Calzone’s expert services.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaCheckCircle /> How Calzone Helps?</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Complete ROC filing (Form 3, 8, 11)</li>
          <li>Income tax & GST return filing</li>
          <li>Audit support & advisory</li>
          <li>Transparent pricing with no hidden costs</li>
        </ul>
        <p className="text-sm font-medium mt-2">Need help? <span className="text-violet-600 underline cursor-pointer">Contact Calzone today</span> for expert assistance!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaQuestionCircle /> Frequently Asked Questions (FAQs)</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>What happens if I don't file LLP Form 11 or Form 8?</li>
          <li>Is audit mandatory for all LLPs?</li>
          <li>Can Calzone handle LLP compliance filings for me?</li>
          <li>How long does LLP ROC compliance filing take?</li>
        </ol>
      </section>
    </div>
  );
};

export default LLPCompliance;
