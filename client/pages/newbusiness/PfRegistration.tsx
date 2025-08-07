// src/pages/PfRegistration.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PfRegistration = () => {
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
    'benefits',
    'who-needs-to-register',
    'documents',
    'process',
    'contribution-structure',
    'non-compliance',
    'why-choose',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Provident Fund (PF) Registration</h1>

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
          <h2 className="text-2xl font-semibold mb-4">What is PF Registration?</h2>
          <p className="text-gray-700">
            Provident Fund (PF) registration is a mandatory requirement for businesses under the Employees' Provident Fund and Miscellaneous Provisions Act, 1952. It ensures that employees receive retirement benefits and social security. Employers with 20 or more employees must register for PF, although voluntary registration is also an option for smaller businesses.
          </p>
        </div>

        {/* Section: Benefits */}
        <div id="benefits" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Benefits of PF Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Retirement Savings:</strong> Ensures financial security for employees post-retirement.</li>
            <li><strong>Tax Benefits:</strong> Contributions made towards PF are eligible for tax exemptions.</li>
            <li><strong>Risk Coverage:</strong> Provides financial protection to employees in case of unexpected events.</li>
            <li><strong>Pension Benefits:</strong> A portion of PF contributions goes towards the Employee Pension Scheme (EPS).</li>
            <li><strong>Easy Withdrawals:</strong> Employees can withdraw PF for emergencies, medical treatment, home purchase, etc.</li>
            <li><strong>Employee Retention:</strong> A structured PF system boosts employee morale and job satisfaction.</li>
          </ul>
        </div>

        {/* Section: Who Needs to Register */}
        <div id="who-needs-to-register" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs to Register for PF?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Any organization with 20 or more employees must register under EPFO.</li>
            <li>Organizations with less than 20 employees can apply voluntarily.</li>
            <li>Every employee earning less than ₹15,000 per month must contribute to PF.</li>
            <li>Employees earning above ₹15,000 per month can voluntarily opt-in.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for PF Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-800">
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Employers</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>PAN card of the business/organization</li>
                <li>Certificate of Incorporation (Partnership Deed, GST Certificate, etc.)</li>
                <li>Address proof of business (Electricity Bill, Rent Agreement, etc.)</li>
                <li>Cancelled cheque or bank statement of the company</li>
                <li>Digital signature of the employer</li>
                <li>List of employees with salary, Aadhaar, PAN, and bank details</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Employees</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Aadhaar card</li>
                <li>PAN card</li>
                <li>Bank account details</li>
                <li>Passport-size photograph</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Process */}
        <div id="process" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">PF Registration Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Visit the EPFO official portal: <a href="https://www.epfindia.gov.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">epfindia.gov.in</a></li>
            <li>Click on 'Establishment Registration' and sign up on the Unified Shram Suvidha Portal (USSP).</li>
            <li>Log in and fill out Form DSC (Digital Signature Certificate) registration.</li>
            <li>Provide all employer and employee details.</li>
            <li>Upload the required documents.</li>
            <li>Submit the application and get the PF registration certificate & unique establishment code.</li>
          </ol>
        </div>

        {/* Section: Contribution Structure */}
        <div id="contribution-structure" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">PF Contribution Structure</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border border-gray-300">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="border px-4 py-2">Contribution Type</th>
                  <th className="border px-4 py-2">Employer’s Share (%)</th>
                  <th className="border px-4 py-2">Employee’s Share (%)</th>
                  <th className="border px-4 py-2">Total Contribution (%)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border px-4 py-2">Employees’ Provident Fund (EPF)</td>
                  <td className="border px-4 py-2">3.67%</td>
                  <td className="border px-4 py-2">12%</td>
                  <td className="border px-4 py-2">15.67%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Employees’ Pension Scheme (EPS)</td>
                  <td className="border px-4 py-2">8.33%</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">8.33%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Employees’ Deposit Linked Insurance (EDLI)</td>
                  <td className="border px-4 py-2">0.50%</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">0.50%</td>
                </tr>
                <tr className="font-semibold bg-gray-50">
                  <td className="border px-4 py-2">Total</td>
                  <td className="border px-4 py-2">12%</td>
                  <td className="border px-4 py-2">12%</td>
                  <td className="border px-4 py-2">24%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: Non-Compliance */}
        <div id="non-compliance" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Penalties for Non-Compliance</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Interest on delayed payments:</strong> 12% per annum</li>
            <li><strong>Late filing penalty:</strong> Ranges from ₹1 to ₹5 per day</li>
            <li><strong>Failure to pay contributions:</strong> Can attract imprisonment for up to 3 years</li>
          </ul>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for PF Registration?</h2>
          <p className="text-gray-700 mb-4">At Calzone, we provide expert assistance to simplify your PF registration process. Our team ensures:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Quick and hassle-free registration</li>
            <li>Complete document verification & submission</li>
            <li>Guidance on PF compliance & benefits</li>
            <li>End-to-end support for your business needs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PfRegistration;
