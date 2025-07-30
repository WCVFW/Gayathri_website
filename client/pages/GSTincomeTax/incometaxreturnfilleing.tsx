'use client';

export default function ITRGuide() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-inter text-gray-800 mt-20 space-y-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        Income Tax Return Filing – Complete Guide by Calzone
      </h1>

      <p className="text-lg">
        Filing an Income Tax Return (ITR) is an essential responsibility of every taxpayer. It ensures compliance with the Income Tax Act, 1961, helps claim tax refunds, and serves as proof of income for various financial transactions. At <strong>Calzone</strong>, we provide hassle-free ITR filing services to individuals, businesses, and organizations, ensuring accuracy, timely compliance, and maximum tax benefits.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">What is an Income Tax Return (ITR)?</h2>
        <p className="text-lg">
          An Income Tax Return (ITR) is a form submitted to the Income Tax Department, declaring the income earned, deductions claimed, and taxes paid during a financial year. ITR filing enables individuals and businesses to report their taxable income and fulfill tax obligations.
        </p>
        <p className="text-lg mt-2">Income for ITR filing can be from:</p>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Salary & Pension</li>
          <li>House Property (Rental Income)</li>
          <li>Business & Profession (Profit & Gains)</li>
          <li>Capital Gains (Stocks, Mutual Funds, Property Sales)</li>
          <li>Other Sources (Dividends, Lottery Winnings, Interest Income)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Who Should File an Income Tax Return?</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Individuals with income above exemption limits</li>
          <li>Companies and firms (regardless of profit/loss)</li>
          <li>Residents holding foreign assets</li>
          <li>High-value transaction holders (e.g. deposits, foreign travel)</li>
          <li>Tax refund claimants</li>
          <li>Loan or Visa applicants</li>
          <li>Non-Residents earning in India</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Should You File an ITR?</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li><strong>Legal Compliance:</strong> Avoid penalties and notices</li>
          <li><strong>Tax Refunds:</strong> Get refund of excess TDS</li>
          <li><strong>Proof of Income:</strong> Required for loans/visas</li>
          <li><strong>Carry Forward Losses:</strong> Offset future income</li>
          <li><strong>Eligibility for Tenders:</strong> ITR proof required</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Types of ITR Forms</h2>
        <div className="overflow-auto">
          <table className="table-auto border border-gray-300 w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">ITR Form</th>
                <th className="border px-4 py-2">Applicability</th>
                <th className="border px-4 py-2">Who Should File?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">ITR 1 (Sahaj)</td>
                <td className="border px-4 py-2">Salaried up to ₹50L</td>
                <td className="border px-4 py-2">Employees, pensioners</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 2</td>
                <td className="border px-4 py-2">Individuals & HUFs</td>
                <td className="border px-4 py-2">Capital gains, foreign assets</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 3</td>
                <td className="border px-4 py-2">Business/Profession income</td>
                <td className="border px-4 py-2">Freelancers, proprietors</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 4 (Sugam)</td>
                <td className="border px-4 py-2">Presumptive income</td>
                <td className="border px-4 py-2">Small businesses & professionals</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 5</td>
                <td className="border px-4 py-2">Firms, LLPs, AOPs</td>
                <td className="border px-4 py-2">Partnerships & societies</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 6</td>
                <td className="border px-4 py-2">Companies (non-Section 11)</td>
                <td className="border px-4 py-2">Private/public companies</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ITR 7</td>
                <td className="border px-4 py-2">Section 139(4A)-139(4D)</td>
                <td className="border px-4 py-2">Trusts, NGOs, political parties</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Due Dates for ITR Filing</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Individuals & HUFs (no audit): <strong>31st July</strong></li>
          <li>Companies & firms (audit required): <strong>30th September</strong></li>
          <li>Businesses with transfer pricing: <strong>30th November</strong></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Late Filing Consequences</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Late Fee (u/s 234F): ₹1,000 to ₹10,000</li>
          <li>Interest on unpaid tax (u/s 234A): 1% per month</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">How to File ITR Online</h2>
        <ol className="list-decimal ml-6 text-lg space-y-1">
          <li>Calculate income and applicable tax</li>
          <li>Verify deductions & TDS using Form 26AS</li>
          <li>Login to <code>incometax.gov.in</code></li>
          <li>Select the ITR form and fill in details</li>
          <li>Validate, submit, and e-verify</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Filing Without Form 16</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Use salary slips to calculate income</li>
          <li>Check Form 26AS for TDS</li>
          <li>Compute other income, claim deductions</li>
          <li>File and e-verify return</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Calzone?</h2>
        <ul className="list-disc ml-6 text-lg space-y-1">
          <li>Expert Tax Professionals</li>
          <li>100% Online & Hassle-Free</li>
          <li>Maximize Refunds & Tax Savings</li>
          <li>Personalized Support & Secure Filing</li>
        </ul>
      </section>
    </div>
  );
}