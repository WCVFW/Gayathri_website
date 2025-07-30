import React from 'react';
import { FaCheckCircle, FaGavel, FaRegFileAlt, FaRegClock, FaBalanceScale, FaQuestionCircle } from 'react-icons/fa';

const ClosureOfLLP = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-16 py-12 space-y-12">
      
      {/* Section: Header */}
      <section>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Closure of LLP</h1>
        <p className="text-lg">A Limited Liability Partnership (LLP) is a legally recognized business entity formed under the LLP Act, 2008, where each partner's liability is limited to their capital contribution.</p>
        <p className="mt-2">However, an LLP may need to shut down due to non-operation, financial constraints, or business restructuring. The closure of an LLP involves striking off its name from the MCA register, ensuring it no longer has legal or financial obligations.</p>
        <p className="mt-4 font-medium">Key Reasons for Closing an LLP:</p>
        <ul className="list-disc list-inside ml-4 text-sm mt-1">
          <li>LLP has not started operations within one year of incorporation.</li>
          <li>LLP has been inactive for at least one year.</li>
          <li>Mutual decision of partners to dissolve the LLP.</li>
        </ul>
        <p className="mt-2 text-sm text-green-700">Calzone ensures a smooth and legally compliant LLP closure process, handling all documentation and filings with the MCA.</p>
      </section>

      {/* Section: Legal Provisions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaGavel /> Legal Provisions</h2>
        <p className="text-sm"><strong>Section 75 of the LLP Act, 2008:</strong> ROC can strike off inactive LLPs.</p>
        <p className="text-sm mt-2"><strong>Rule 37 of LLP Rules, 2009:</strong> Inactive LLPs for 1 year+ can file Form 24 for closure with partner consent.</p>
        <p className="mt-2 text-sm text-gray-600">Calzone ensures your LLP closure follows the correct legal procedure.</p>
      </section>

      {/* Section: Step-by-Step */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaRegClock /> Step-by-Step Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm ml-2">
          <li>Pass special resolution and obtain partner consent.</li>
          <li>File Form 1 within 30 days of resolution.</li>
          <li>Submit debt clearance declaration (no debts OR debts cleared within one year).</li>
          <li>File Form 4 with financial report and declaration of no fraud.</li>
          <li>Obtain creditor consent (minimum two-thirds).</li>
          <li>Appoint a liquidator and file Form 6 with their statement.</li>
          <li>Finalize financials and submit Form 9.</li>
          <li>File Form 24 with all required documents.</li>
          <li>ROC publishes closure notice on MCA portal.</li>
          <li>LLP is struck off and closure published in Gazette.</li>
        </ol>
        <p className="mt-2 text-sm text-green-700">Calzone handles the entire closure flow, ensuring smooth execution and MCA coordination.</p>
      </section>

      {/* Section: Documents Required */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaRegFileAlt /> Documents Required</h2>
        <p className="text-sm font-medium">As per Rule 37 of LLP Rules (Amendment, 2017):</p>
        <ul className="list-disc list-inside ml-4 text-sm mt-1">
          <li>Statement of Accounts (CA certified, no older than 30 days)</li>
          <li>Affidavit from designated partners about inactivity & no liabilities</li>
          <li>Bank closure letter or confirmation that bank never opened</li>
          <li>Income Tax Return acknowledgment (if applicable)</li>
          <li>Initial LLP Agreement copy (if not filed earlier)</li>
          <li>PAN, Aadhaar & address proof of all partners</li>
        </ul>
        <p className="text-sm text-gray-600 mt-2">Calzone ensures all documents are correctly submitted to avoid rejections.</p>
      </section>

      {/* Section: Conditions */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaBalanceScale /> Conditions for LLP Closure</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>LLP must be inactive for at least 1 year OR never started business</li>
          <li>No outstanding financial obligations</li>
          <li>Partner consent from all members</li>
          <li>All ROC filings (Form 8 & 11) up to date</li>
        </ul>
        <p className="mt-2 text-sm text-green-700">Calzone ensures all pre-closure requirements are met before applying.</p>
      </section>

      {/* Section: Why Calzone */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaCheckCircle /> Why Choose Calzone?</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li>Complete support with Forms 1, 4, 24 & MCA liaison</li>
          <li>Drafting of affidavits, consents, and closure declarations</li>
          <li>Team of CAs & legal experts to ensure compliance</li>
          <li>No hidden charges, transparent pricing</li>
        </ul>
        <p className="mt-2 text-sm font-medium">Need help closing your LLP? <span className="text-red-600 underline cursor-pointer">Contact Calzone now</span> for expert assistance!</p>
      </section>

      {/* Section: FAQs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaQuestionCircle /> Frequently Asked Questions (FAQs)</h2>
        <ol className="list-decimal list-inside text-sm space-y-2">
          <li>How long does it take to close an LLP?</li>
          <li>Can an LLP be closed without clearing outstanding debts?</li>
          <li>What happens if LLP compliance filings are overdue?</li>
          <li>Can an LLP be revived after closure?</li>
          <li>How does Calzone help with LLP closure?</li>
        </ol>
      </section>

    </div>
  );
};

export default ClosureOfLLP;
