// import React from 'react';
import { FaCheckCircle, FaBalanceScale, FaExclamationTriangle, FaGavel, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const LLPCompliance = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-16 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-violet-700 mb-4">LLP ROC Compliance</h1>
        <p className="text-lg">A Limited Liability Partnership (LLP) combines the flexibility of a partnership with the limited liability of a company. Unlike traditional partnerships, LLPs protect partners from personal liability beyond their capital contributions.</p>
        <p className="mt-2">While LLPs have fewer compliances than companies, they must still fulfill regulatory requirements set by the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA).</p>
        <p className="mt-2 font-medium text-green-700">At Calzone, we specialize in LLP ROC and non-ROC compliance services, ensuring 100% legal adherence and hassle-free filings.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaBalanceScale /> Why LLP ROC Compliance Matters?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Avoid Hefty Penalties:</strong> ₹100 per day per form for delayed filing.</li>
          <li><strong>Maintain Legal Standing:</strong> Prevent LLP disqualification or legal action.</li>
          <li><strong>Ensure Financial Transparency:</strong> Easier loan approvals and investment opportunities.</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Calzone ensures full compliance, protecting your LLP from penalties and legal risks.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaFileAlt /> LLP ROC Compliance Checklist</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">1. Filing LLP Agreement – <span className="text-indigo-600">Form 3</span></h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: Within 30 days of LLP incorporation</li>
              <li>Details: LLP Agreement with roles, responsibilities, and profit-sharing ratio</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">2. Filing Annual Return – <span className="text-indigo-600">Form 11</span></h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: By May 30th each year</li>
              <li>Includes: Partner details, capital contribution, business activities</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">3. Filing Statement of Accounts & Solvency – <span className="text-indigo-600">Form 8</span></h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li>Timeline: By October 30th each year</li>
              <li>Includes: Turnover declaration, charge details, financial responsibility</li>
              <li>Penalty: ₹100 per day for late filing</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaGavel /> Audit Requirement for LLPs</h2>
        <p className="text-sm">Mandatory audit if:</p>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Turnover exceeds ₹40 lakh</li>
          <li>Capital contribution exceeds ₹25 lakh</li>
        </ul>
        <p className="text-sm mt-2">LLPs below this threshold may self-declare in Form 8.</p>
        <p className="text-sm text-green-700 mt-2">Calzone handles all ROC filings, ensuring timely submissions to avoid penalties.</p>
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

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaExclamationTriangle /> Consequences of Non-Compliance</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>₹100/day penalty for each ROC form</li>
          <li>Legal action or partner disqualification</li>
          <li>‘Defaulting’ LLP status hurts credibility</li>
          <li>Possible LLP dissolution by ROC</li>
        </ul>
        <p className="text-sm text-red-600 mt-2">Avoid penalties. Stay compliant with Calzone’s expert services.</p>
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
