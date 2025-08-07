// src/pages/NriIncomeTax.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NriIncomeTax = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(section);
        }, 200);
      }
    }
  }, [location.search]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };

  const sections: string[] = [
    'overview',
    'who-is-nri',
    'when-nri',
    'taxable-income',
    'tax-free-income',
    'tax-planning',
    'slab-rates',
    'section-115bac',
    'filing-need',
    'filing-steps',
    'why-calzone',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        NRI Income Tax Planning & Filing - A Complete Guide
      </h1>

      <section className="space-y-10">
        <div className="sticky top-20 z-10 bg-white shadow-sm">
          <div className="flex flex-wrap max-w-screen-xl">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                  activeSection === id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } border-b-2 border-transparent bg-transparent focus:outline-none`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div id="overview" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700">
            Non-Resident Indians (NRIs) primarily earn income outside India. While they are taxed under the laws of their resident country, certain situations bring them under Indian tax laws, making it essential to plan and file their income tax correctly.
          </p>
          <p className="text-gray-700 mt-4">
            At Calzone, we provide expert NRI tax planning & filing services to help you minimize tax liabilities, comply with Indian tax regulations, and maximize deductions.
          </p>
        </div>

        {/* Who is an NRI */}
        <div id="who-is-nri" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who is a Non-Resident Indian (NRI)?</h2>
          <p className="text-gray-700">
            An NRI is an Indian citizen residing outside India. For taxation purposes, the Income Tax Act, 1961 defines an NRI based on residential status under Section 6.
          </p>
        </div>

        {/* When is an individual considered an NRI */}
        <div id="when-nri" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">When is an Individual Considered an NRI?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Resides in India for less than 182 days in the financial year</li>
            <li>Resides in India for less than 60 days in the year AND less than 365 days in the last 4 years</li>
          </ul>
          <h3 className="font-semibold mt-4">Special Cases:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mt-2">
            <li>For Indian citizens or PIOs visiting India, the 60-day rule becomes 182 days</li>
            <li>If Indian income exceeds ₹15 lakhs, 182-day rule becomes 120 days</li>
            <li>If not taxable in any other country but earns ₹15 lakhs+ in India → considered RNOR</li>
          </ul>
        </div>

        {/* Taxable Income */}
        <div id="taxable-income" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What Income is Taxable for NRIs in India?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Salary received in India:</strong> Yes</li>
            <li><strong>Salary received abroad:</strong> No</li>
            <li><strong>Rental income from Indian property:</strong> Yes</li>
            <li><strong>Capital gains on Indian property:</strong> Yes</li>
            <li><strong>Interest on NRO Account:</strong> Yes</li>
            <li><strong>Interest on NRE & FCNR Accounts:</strong> No</li>
            <li><strong>Dividends from Indian companies:</strong> Yes</li>
            <li><strong>Income from Indian mutual funds:</strong> Yes</li>
            <li><strong>Foreign income:</strong> No</li>
          </ul>
        </div>

        {/* Tax-Free Income */}
        <div id="tax-free-income" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is Tax-Free Income for NRIs?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Interest from NRE & FCNR accounts is fully exempt</li>
            <li>Foreign income is not taxable in India</li>
            <li>Dividends from foreign investments are not taxable in India</li>
          </ul>
        </div>

        {/* Tax Planning */}
        <div id="tax-planning" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">NRI Tax Planning - Reduce Your Tax Liability</h2>
          <p className="text-gray-700 mb-4">NRIs can reduce their tax burden using the following strategies:</p>

          <h3 className="font-bold mb-2">House Property Income</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
            <li>30% standard deduction on rental income</li>
            <li>Deduction on home loan principal (Section 80C) & interest (Section 24)</li>
          </ul>

          <h3 className="font-bold mb-2">Salary Income</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
            <li>Ensure salary is credited outside India to avoid Indian taxation</li>
            <li>Standard deduction of ₹50,000 (not in new tax regime)</li>
          </ul>

          <h3 className="font-bold mb-2">Tax Deductions Available</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm text-left text-gray-800">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Section</th>
                  <th className="border px-3 py-2">Allowed</th>
                  <th className="border px-3 py-2">Not Allowed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">80C</td><td className="border px-3 py-2">LIC, Tuition Fees, ELSS, ULIPs, Home Loan Principal</td><td className="border px-3 py-2">PPF, NSC, Post Office, SCSS</td></tr>
                <tr><td className="border px-3 py-2">80D</td><td className="border px-3 py-2">Health insurance premium</td><td className="border px-3 py-2">Senior citizen limit not applicable</td></tr>
                <tr><td className="border px-3 py-2">80E</td><td className="border px-3 py-2">Education loan interest</td><td className="border px-3 py-2">–</td></tr>
                <tr><td className="border px-3 py-2">80G</td><td className="border px-3 py-2">Donations</td><td className="border px-3 py-2">–</td></tr>
                <tr><td className="border px-3 py-2">80TTA</td><td className="border px-3 py-2">Savings interest (up to ₹10,000)</td><td className="border px-3 py-2">–</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Slab Rates */}
        <div id="slab-rates" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">NRI Income Tax Slab Rates</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>₹0 – ₹2.5L: NIL</li>
            <li>₹2.5L – ₹5L: 5%</li>
            <li>₹5L – ₹10L: 20%</li>
            <li>Above ₹10L: 30%</li>
          </ul>
          <p className="text-gray-700 mt-2">NRIs do not get senior citizen exemption limits.</p>
        </div>

        {/* Section 115BAC */}
        <div id="section-115bac" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Section 115BAC – New Tax Regime</h2>
          <p className="text-gray-700 mb-4">NRIs may opt for the new tax regime with reduced rates but no exemptions.</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>₹0 – ₹2.5L: NIL</li>
            <li>₹2.5L – ₹5L: 5%</li>
            <li>₹5L – ₹7.5L: 10%</li>
            <li>₹7.5L – ₹10L: 15%</li>
            <li>₹10L – ₹12.5L: 20%</li>
            <li>₹12.5L – ₹15L: 25%</li>
            <li>Above ₹15L: 30%</li>
          </ul>
          <p className="text-gray-700 mt-2">Surcharge of 10–37% applies. 4% Health & Education cess is added.</p>
        </div>

        {/* Filing Need */}
        <div id="filing-need" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Does an NRI Need to File ITR?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
            <li>Yes, if income in India exceeds ₹2.5L</li>
            <li>If TDS deducted and refund is needed</li>
            <li>If income from capital gains, rent, or business</li>
          </ul>
          <p className="text-gray-700">No return needed if only exempt LTCG or TDS-adjusted investments</p>
        </div>

        {/* Filing Steps */}
        <div id="filing-steps" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guide to Filing ITR</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Determine residential status</li>
            <li>Gather documents – Form 26AS, AIS, TIS, bank and capital gains statements</li>
            <li>Choose applicable ITR – ITR-2 or ITR-3</li>
            <li>Login to <a href="https://www.incometax.gov.in" className="text-blue-600 underline" target="_blank">incometax.gov.in</a></li>
            <li>Fill form, claim deductions, e-verify via OTP or Aadhaar</li>
            <li>Track refund status & notices</li>
          </ol>
        </div>

        {/* Why Calzone */}
        <div id="why-calzone" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Expert NRI Tax Consultants:</strong> Dedicated experts for accurate filing</li>
            <li><strong>Maximize Benefits:</strong> All deductions, exemptions & DTAA covered</li>
            <li><strong>100% Online:</strong> Quick, seamless and secure process</li>
            <li><strong>Advisory Services:</strong> Investments, repatriation & wealth planning</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NriIncomeTax;
