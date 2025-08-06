import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const IncomeTaxReturn = () => {
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
    'who-should-file',
    'why-file',
    'types',
    'due-dates',
    'how-to-file',
    'without-form16',
    'penalties',
    'why-choose',
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Income Tax Return Filing - Complete Guide</h1>

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

        {/* Section: Overview */}
        <div id="overview" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is an Income Tax Return (ITR)?</h2>
          <p className="text-gray-700 mb-4">
            An Income Tax Return (ITR) is a form submitted to the Income Tax Department, declaring the income earned,
            deductions claimed, and taxes paid during a financial year. Filing an ITR enables individuals and businesses
            to report taxable income and fulfill tax obligations.
          </p>
          <p className="text-gray-700">Income for ITR filing can be from:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Salary & Pension</li>
            <li>House Property (Rental Income)</li>
            <li>Business & Profession (Profit & Gains)</li>
            <li>Capital Gains (Stocks, Mutual Funds, Property Sales)</li>
            <li>Other Sources (Dividends, Lottery Winnings, Interest Income)</li>
          </ul>
        </div>

        {/* Section: Who Should File */}
        <div id="who-should-file" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Should File an Income Tax Return?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Individuals earning above basic exemption limit (₹2.5L / ₹3L / ₹5L based on age)</li>
            <li>All Companies & Firms (regardless of income)</li>
            <li>Residents with foreign assets or accounts</li>
            <li>Individuals with high-value transactions:
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>₹1 Cr+ deposited in current account</li>
                <li>₹2L+ spent on foreign travel</li>
                <li>₹1L+ paid as electricity bill</li>
              </ul>
            </li>
            <li>Claiming a tax refund</li>
            <li>Loan or Visa Applicants</li>
            <li>NRIs earning taxable income in India</li>
          </ol>
        </div>

        {/* Section: Why File */}
        <div id="why-file" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Should You File an ITR?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Legal Compliance:</strong> Avoid penalties and stay compliant.</li>
            <li><strong>Claim Tax Refunds:</strong> Get back excess TDS.</li>
            <li><strong>Proof of Income:</strong> Required for loans, visas, etc.</li>
            <li><strong>Carry Forward Losses:</strong> Reduce future tax liability.</li>
            <li><strong>Avoid Tax Notices:</strong> Stay on the right side of tax law.</li>
            <li><strong>Govt. Tenders Eligibility:</strong> Required for businesses.</li>
          </ul>
        </div>

        {/* Section: Types */}
        <div id="types" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of ITR Forms</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">ITR Form</th>
                  <th className="px-4 py-2">Applicability</th>
                  <th className="px-4 py-2">Who Should File?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 1 (Sahaj)</td>
                  <td className="px-4 py-2">Salaried income up to ₹50 lakh</td>
                  <td className="px-4 py-2">Employees, pensioners</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 2</td>
                  <td className="px-4 py-2">No business income</td>
                  <td className="px-4 py-2">Capital gains, multiple properties</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 3</td>
                  <td className="px-4 py-2">With business/profession income</td>
                  <td className="px-4 py-2">Freelancers, consultants</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 4 (Sugam)</td>
                  <td className="px-4 py-2">Presumptive taxation</td>
                  <td className="px-4 py-2">Small businesses, professionals</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 5</td>
                  <td className="px-4 py-2">Firms, LLPs, AOPs</td>
                  <td className="px-4 py-2">Partnerships, societies</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 6</td>
                  <td className="px-4 py-2">Companies</td>
                  <td className="px-4 py-2">Private/public companies</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">ITR 7</td>
                  <td className="px-4 py-2">Trusts, NGOs</td>
                  <td className="px-4 py-2">Charitable/religious institutions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-gray-700">Not sure which ITR form is right? Calzone experts will guide you!</p>
        </div>

        {/* Section: Due Dates */}
        <div id="due-dates" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Due Dates for ITR Filing</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Individuals & HUFs (no audit):</strong> 31st July</li>
            <li><strong>Companies & audit cases:</strong> 30th September</li>
            <li><strong>Transfer pricing cases:</strong> 30th November</li>
          </ul>
        </div>

        {/* Section: How to File */}
        <div id="how-to-file" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to File ITR Online?</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>Calculate income & deductions</li>
            <li>Verify Form 26AS for TDS</li>
            <li>Login to <a href="https://www.incometax.gov.in/" className="text-blue-600 underline" target="_blank" rel="noreferrer">incometax.gov.in</a></li>
            <li>Select correct ITR form</li>
            <li>Enter details & verify credits</li>
            <li>Validate and submit</li>
            <li>E-verify with Aadhaar OTP or net banking</li>
          </ol>
        </div>

        {/* Section: Without Form 16 */}
        <div id="without-form16" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to File ITR Without Form 16?</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>Calculate salary from payslips</li>
            <li>Download Form 26AS</li>
            <li>Include other income (interest, rent, gains)</li>
            <li>Claim deductions (80C, 80D, 80G)</li>
            <li>Compute tax and pay dues</li>
            <li>File ITR and e-verify</li>
          </ol>
        </div>

        {/* Section: Penalties */}
        <div id="penalties" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Late Fees, Penalties & Interest</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Late Fees (Sec 234F):</strong>
              <ul className="ml-4 list-disc list-inside space-y-1">
                <li>₹5,000 – after due date but before 31 Dec</li>
                <li>₹10,000 – after 31 Dec</li>
                <li>₹1,000 – if income &lt; ₹5L</li>
              </ul>
            </li>
            <li><strong>Interest (Sec 234A):</strong> 1% per month on unpaid tax</li>
          </ul>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for ITR Filing?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Expert Professionals:</strong> CAs & tax advisors ensure accuracy</li>
            <li><strong>100% Online:</strong> Paperless and hassle-free</li>
            <li><strong>Max Refunds:</strong> Claim every eligible deduction</li>
            <li><strong>One-on-One Help:</strong> Personalized tax support</li>
            <li><strong>Secure & Confidential:</strong> Your data is encrypted and safe</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IncomeTaxReturn;
