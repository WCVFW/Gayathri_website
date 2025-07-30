import React from "react";

const LlpRegistration: React.FC = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
      {/* Intro */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">LLP Registration</h1>
        <p>LLP Registration with Calzone - A Smart Choice for Business Owners</p>
      </section>
      <section className="bg-white text-gray-800 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
        <p className="mb-4">
          Starting a business is an exciting journey, but choosing the right structure is essential for success.
          A <strong>Limited Liability Partnership (LLP)</strong> is an ideal business model for entrepreneurs who want the flexibility of a partnership while enjoying limited liability protection like a private limited company.
        </p>
        <p className="mb-4">
          With minimum compliance, no compulsory audits, and no restriction on the number of partners, LLPs have become a popular choice for small businesses, consultants, service providers, and professionals.
        </p>
        <p>
          At <span className="font-semibold text-indigo-600">Calzone</span>, we simplify the LLP registration process, ensuring quick approvals and hassle-free compliance.
        </p>
      </section>
      {/* What is LLP */}
      <section className="mb-10 rounded-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">What is an LLP?</h2>
        <p className="text-gray-700 mb-4">
          A <strong>Limited Liability Partnership (LLP)</strong> is a business structure that combines the advantages
          of both a traditional partnership and a private limited company.
        </p>
        <p className="text-gray-700 mb-4">
          It provides:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
          <li><strong>Limited Liability Protection</strong> – Partners are not personally liable for business debts.</li>
          <li><strong>Separate Legal Entity</strong> – The LLP exists separately from its owners.</li>
          <li><strong>Flexible Management</strong> – Less compliance compared to companies.</li>
          <li><strong>Perpetual Succession</strong> – LLP continues to exist even if partners change.</li>
        </ul>
        <p className="text-gray-700">
          Unlike traditional partnerships, where partners are personally liable for business obligations,
          an LLP limits each partner's liability to the amount they invest in the business.
        </p>
      </section>
      {/* Why Choose LLP */}
      <section className="mb-10 rounded-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Choose an LLP with Calzone?
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            <strong>Ideal for Professionals & Service-Based Businesses</strong> – Suitable for consultants, agencies, IT firms, and law/accounting firms.
          </li>
          <li>
            <strong>No Minimum Capital Requirement</strong> – LLPs can be formed with low investment.
          </li>
          <li>
            <strong>Less Compliance Than a Private Limited Company</strong> – No mandatory audits if turnover is below 40 lakh.
          </li>
          <li>
            <strong>Limited Liability Protection</strong> – Partners are not personally responsible for company debts.
          </li>
          <li>
            <strong>Flexible Business Structure</strong> – Partners can define their roles and rights in an LLP Agreement.
          </li>
          <li>
            <strong>Faster Registration with Calzone</strong> – We handle everything from documentation to compliance.
          </li>
        </ul>
      </section>
      {/* Eligibility */}
      <section className="mb-10 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Eligibility for LLP Registration</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Minimum 2 Partners</strong> – No limit on the maximum number.</li>
          <li><strong>One Resident Partner</strong> – At least one must be a resident of India.</li>
          <li><strong>LLP Agreement</strong> – A legal agreement is required to define partnership terms.</li>
          <li><strong>Company Partner</strong> – Must appoint a natural person as nominee.</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-10 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Advantages of Registering an LLP</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>No Minimum Capital Requirement</strong> – Start with any amount.</li>
          <li><strong>Tax Benefits</strong> – Flat 30% with no dividend distribution tax.</li>
          <li><strong>Low Compliance</strong> – No annual audits if turnover is below ₹40L.</li>
          <li><strong>Separate Legal Entity</strong> – Can own property and sue in its own name.</li>
          <li><strong>Unlimited Partners</strong> – No restriction on number of partners.</li>
          <li><strong>Seamless Registration with Calzone</strong> – Fast and fully compliant process.</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Disadvantages of LLP
        </h2>
        <ul className="list-disc ml-6 text-gray-800 space-y-3">
          <li>
            <span className="font-semibold">Higher Tax Rate</span> – LLPs are taxed at 30%, which is
            higher than the 25% rate for companies with turnover up to ₹400 crore.
          </li>
          <li>
            <span className="font-semibold">Cannot Raise Equity Capital</span> – LLPs cannot issue
            shares or attract venture/private equity funding like private limited companies.
          </li>
          <li>
            <span className="font-semibold">Difficult Ownership Transfer</span> – Transfer of ownership
            or rights requires the consent of all existing partners.
          </li>
          <li>
            <span className="font-semibold">Strict Penalties</span> – LLPs are penalized ₹100/day for
            delays in mandatory filings like annual returns or statements of accounts.
          </li>
        </ul>
      </section>


      {/* Step-by-Step Process */}
      <section className="mb-12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          Step-by-Step Process for LLP Registration with Calzone
        </h2>
        <ol className="list-decimal ml-6 space-y-4 text-gray-800">
          <li>
            <p className="font-semibold">Obtain Digital Signature Certificate (DSC)</p>
            <p className="ml-4">
              All designated partners must have a DSC to digitally sign documents. Calzone helps obtain DSCs from certified authorities.
            </p>
          </li>
          <li>
            <p className="font-semibold">Apply for Designated Partner Identification Number (DPIN/DIN)</p>
            <p className="ml-4">
              Each partner requires a DPIN or DIN. Calzone manages the entire application process.
            </p>
          </li>
          <li>
            <p className="font-semibold">Name Reservation for LLP</p>
            <p className="ml-4">
              Select a unique business name and submit two preferences to the MCA. Calzone ensures name approval and compliance.
            </p>
          </li>
          <li>
            <p className="font-semibold">File Incorporation Application (FiLLiP Form)</p>
            <p className="ml-4">
              Submit incorporation documents through the FiLLiP form, including partner details and office address. Certificate of Incorporation is issued upon approval.
            </p>
          </li>
          <li>
            <p className="font-semibold">Draft & File LLP Agreement</p>
            <p className="ml-4">
              The LLP Agreement outlines partner duties and must be filed within 30 days using Form-3. Calzone ensures expert drafting.
            </p>
          </li>
        </ol>
      </section>
      {/* Documents */}
      <section className="mb-12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Documents Required for LLP Registration
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">For Partners</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">PAN Card</span> and{" "}
              <span className="font-medium">Aadhaar Card</span>
            </li>
            <li>
              <span className="font-medium">Address Proof:</span> Voter ID, Driving
              License, or Passport
            </li>
            <li>
              <span className="font-medium">Residence Proof:</span> Latest utility
              bill or bank statement (not older than 2 months)
            </li>
            <li>
              <span className="font-medium">Passport</span> (mandatory for NRIs and
              Foreign Nationals)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            For LLP Registration
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Registered Office Proof:</span>{" "}
              Electricity or water bill (not older than 2 months)
            </li>
            <li>
              <span className="font-medium">Rental Agreement</span> and{" "}
              <span className="font-medium">NOC</span> from property owner (if the
              premises are rented)
            </li>
            <li>
              <span className="font-medium">LLP Agreement:</span> To be filed within
              30 days of incorporation
            </li>
          </ul>
        </div>
      </section>

      {/* Compliance */}
      <section className="mb-10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Compliance Requirements for LLPs
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Annual Return Filing (Form 11):</span>{" "}
            Must be filed within 60 days from the end of the financial year.
          </li>
          <li>
            <span className="font-medium">Statement of Accounts & Solvency (Form 8):</span>{" "}
            Due within 30 days after the completion of 6 months from the financial year-end.
          </li>
          <li>
            <span className="font-medium">Income Tax Returns:</span>{" "}
            LLPs are required to file income tax returns annually.
          </li>
          <li>
            <span className="font-medium">GST Returns (if applicable):</span>{" "}
            Mandatory for LLPs registered under GST.
          </li>
        </ul>
        <p className="mt-4 ">
           Late filing attracts a penalty of ₹100 per day until compliance is completed.
        </p>
      </section>

      {/* Cost Table (text-based) */}
      <section className="mb-12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Cost of LLP Registration with Calzone
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-gray-800">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-3 px-4 border-b font-semibold">Service</th>
                <th className="py-3 px-4 border-b font-semibold">Estimated Fees (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Digital Signature Certificate (DSC) for 2 Partners</td>
                <td className="py-2 px-4 border-b">1,000 - 1,500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Designated Partner Identification Number (DPIN/DIN)</td>
                <td className="py-2 px-4 border-b">500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Name Reservation</td>
                <td className="py-2 px-4 border-b">200</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">Government Registration Fee</td>
                <td className="py-2 px-4 border-b">500 - 2,000 (varies by capital contribution)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">LLP Agreement Stamp Duty</td>
                <td className="py-2 px-4 border-b">Varies by state</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Calzone */}
      <section id="why-choose" className="mb-12 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why Choose Calzone for LLP Registration?
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-800">
          <li>
            <span className="font-medium text-gray-900">End-to-End Assistance:</span> From obtaining DSC to filing the LLP Agreement, Calzone takes care of the entire process.
          </li>
          <li>
            <span className="font-medium text-gray-900">Expert Business Consultation:</span> Professional advice on compliance, tax planning, and business growth strategies.
          </li>
          <li>
            <span className="font-medium text-gray-900">Quick Processing:</span> Hassle-free and fast LLP registration with a dedicated team.
          </li>
          <li>
            <span className="font-medium text-gray-900">Affordable Pricing:</span> Transparent and competitive pricing with no hidden charges.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default LlpRegistration;
