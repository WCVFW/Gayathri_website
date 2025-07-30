'use client';


export default function NriTaxGuide() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        NRI Income Tax Planning & Filing
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Non-Resident Indians (NRIs) primarily earn income outside India. While they are taxed under the laws of their resident country, certain situations bring them under Indian tax laws, making it essential to plan and file their income tax correctly.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        At <strong>Calzone</strong>, we provide expert NRI tax planning & filing services to help you minimize tax liabilities, comply with Indian tax regulations, and maximize deductions.
      </p>

      <section className="space-y-8 text-lg leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Who is a Non-Resident Indian (NRI)?
          </h2>
          <p>
            An NRI is an Indian citizen residing outside India, but for taxation purposes, the Income Tax Act, 1961 defines an NRI based on residential status under Section 6.
          </p>
          <p className="mt-2">
            <strong>Considered NRI if:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>They reside in India for less than 182 days in a financial year</li>
              <li>Or less than 60 days in that FY & less than 365 days in previous 4 years</li>
            </ul>
          </p>
          <p className="mt-2">
            <strong>Special Cases:</strong> Visiting Indian Citizens/PIOs may get an extended threshold up to 182 days. High-income earners (₹15L+) may be considered RNOR even with 120+ days of stay.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            What Income is Taxable for NRIs in India?
          </h2>
          <ul className="list-disc pl-6">
            <li>Salary received in India: <strong>Yes</strong></li>
            <li>Rental income from Indian property: <strong>Yes</strong></li>
            <li>Capital gains on Indian assets: <strong>Yes</strong></li>
            <li>Interest on NRO accounts: <strong>Yes</strong></li>
            <li>Foreign salary or income: <strong>No</strong></li>
            <li>Interest on NRE/FCNR accounts: <strong>No</strong></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            What is the Tax-Free Income for NRIs?
          </h2>
          <ul className="list-disc pl-6">
            <li>Interest on NRE & FCNR accounts</li>
            <li>Foreign income</li>
            <li>Dividends from foreign investments</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            NRI Tax Deductions
          </h2>
          <ul className="list-disc pl-6">
            <li>Section 80C: LIC, ELSS, Home Loan Principal (No PPF or NSC)</li>
            <li>Section 80D: Medical insurance</li>
            <li>Section 80E: Education loan interest</li>
            <li>Section 80G: Donations</li>
            <li>Section 80TTA: Interest on savings accounts (₹10,000 limit)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            NRI Tax Slabs (Old Regime)
          </h2>
          <table className="w-full text-left border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Income Slab (₹)</th>
                <th className="p-2 border">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">0 – 2,50,000</td><td className="p-2 border">NIL</td></tr>
              <tr><td className="p-2 border">2,50,001 – 5,00,000</td><td className="p-2 border">5%</td></tr>
              <tr><td className="p-2 border">5,00,001 – 10,00,000</td><td className="p-2 border">20%</td></tr>
              <tr><td className="p-2 border">Above 10,00,000</td><td className="p-2 border">30%</td></tr>
            </tbody>
          </table>
          <p className="mt-2">*No special slabs for senior/super senior citizens</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Section 115BAC - New Regime
          </h2>
          <p>
            NRIs can opt for the new regime with lower rates but without exemptions.
          </p>
          <table className="w-full text-left border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Income Slab (₹)</th>
                <th className="p-2 border">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">0 – 2,50,000</td><td className="p-2 border">NIL</td></tr>
              <tr><td className="p-2 border">2,50,001 – 5,00,000</td><td className="p-2 border">5%</td></tr>
              <tr><td className="p-2 border">5,00,001 – 7,50,000</td><td className="p-2 border">10%</td></tr>
              <tr><td className="p-2 border">7,50,001 – 10,00,000</td><td className="p-2 border">15%</td></tr>
              <tr><td className="p-2 border">10,00,001 – 12,50,000</td><td className="p-2 border">20%</td></tr>
              <tr><td className="p-2 border">12,50,001 – 15,00,000</td><td className="p-2 border">25%</td></tr>
              <tr><td className="p-2 border">Above 15,00,000</td><td className="p-2 border">30%</td></tr>
            </tbody>
          </table>
          <p className="mt-2">
            *Surcharge 10–37% for high incomes, plus 4% cess.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Does an NRI Need to File an ITR?
          </h2>
          <ul className="list-disc pl-6">
            <li>YES: Income in India exceeds ₹2.5L</li>
            <li>YES: Claiming refund on TDS</li>
            <li>NO: Only exempt income (like NRE interest)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Step-by-Step Guide to File ITR as an NRI
          </h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Check residential status</li>
            <li>Gather Form 26AS, AIS, bank & capital gain statements</li>
            <li>Use ITR-2 (no business) or ITR-3 (with business/firm)</li>
            <li>File online at <a href="https://www.incometax.gov.in" className="text-blue-600 underline">incometax.gov.in</a></li>
            <li>E-verify return and track refund/notices</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Why Choose Calzone?
          </h2>
          <ul className="list-disc pl-6">
            <li>Expert NRI tax consultants</li>
            <li>Maximize DTAA and deduction benefits</li>
            <li>Quick, online, and secure filing</li>
            <li>Advisory for NRI wealth & investment planning</li>
          </ul>
        </div>
      </section>
    </div>
  );
}