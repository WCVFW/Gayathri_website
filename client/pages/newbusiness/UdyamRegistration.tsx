// src/pages/UdyamRegistration.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UdyamRegistration = () => {
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

  const sections = [
    'overview',
    'why',
    'documents',
    'how-to-register',
    'for-existing-msmes',
    'classification',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Udyam Registration</h1>
      <p className="text-gray-700 mb-8">
        Register Your MSME with Calzone & Unlock Exclusive Benefits!
      </p>

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
          <h2 className="text-2xl font-semibold mb-4">Udyam Registration - A Gateway to Growth</h2>
          <p className="text-gray-700">
            Micro, Small, and Medium Enterprises (MSMEs) are the backbone of India's economy, contributing significantly to employment and GDP. Recognizing their importance, the Indian government introduced Udyam Registration to offer formal recognition and extensive benefits to MSMEs. If you're an entrepreneur, securing Udyam Registration through Calzone ensures easy access to financial aid, subsidies, and market opportunities.
          </p>
        </div>

        {/* Section: Why */}
        <div id="why" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Udyam Registration Matters?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Access to Loans & Credit:</strong> Avail collateral-free loans and financial assistance.</li>
            <li><strong>Government Schemes & Subsidies:</strong> Gain eligibility for various financial incentives.</li>
            <li><strong>Tax Benefits:</strong> Enjoy income tax exemptions and deductions.</li>
            <li><strong>Priority in Government Tenders:</strong> MSMEs get preferential treatment in procurement.</li>
            <li><strong>Easy Licensing & Approvals:</strong> Simplified process for industrial permits.</li>
            <li><strong>Protection Against Late Payments:</strong> Secure timely payments from clients.</li>
            <li><strong>Export & Market Expansion:</strong> Explore national and international trade benefits.</li>
            <li><strong>Enhanced Credibility:</strong> Establish your MSME as a trusted and professional entity.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for Udyam Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Aadhaar Number:</strong> Mandatory for registration.</li>
            <li><strong>PAN Card:</strong> Business or individual PAN as applicable.</li>
            <li><strong>Business Details:</strong> Name, address, type, and organization structure.</li>
            <li><strong>Bank Details:</strong> Account number and IFSC code.</li>
            <li><strong>Investment & Employee Data:</strong> Machinery, equipment value, and workforce size.</li>
            <li><strong>Industry Classification:</strong> Specify business category and sector.</li>
            <li><strong>Email & Mobile Number:</strong> For verification and confirmation.</li>
          </ul>
        </div>

        {/* Section: How to Register */}
        <div id="how-to-register" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to Register for Udyam with Calzone?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Visit the official Udyam Registration Portal or register through Calzone for expert assistance.</li>
            <li>Enter Aadhaar and PAN details for authentication.</li>
            <li>Provide business information, bank details, and industry classification.</li>
            <li>Upload required documents and review details for accuracy.</li>
            <li>Submit the application and receive your Udyam Registration Certificate via email.</li>
          </ol>
          <p className="text-gray-700 mt-2"><strong>Processing Time:</strong> Registration is typically completed within a few working days.</p>
        </div>

        {/* Section: For Existing MSMEs */}
        <div id="for-existing-msmes" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Udyam Registration for Existing MSMEs</h2>
          <p className="text-gray-700">
            Already registered under the old MSME system? Transition to Udyam Registration to continue enjoying benefits like government subsidies, low-interest loans, and priority in tenders. Calzone ensures a seamless migration to the new framework with expert guidance.
          </p>
        </div>

        {/* Section: Classification */}
        <div id="classification" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">MSME Classification Based on Turnover & Investment</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Enterprise Type</th>
                  <th className="border border-gray-300 px-4 py-2">Investment in Plant & Machinery</th>
                  <th className="border border-gray-300 px-4 py-2">Annual Turnover</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Micro</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹1 crore</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹5 crore</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Small</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹10 crore</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹50 crore</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medium</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹50 crore</td>
                  <td className="border border-gray-300 px-4 py-2">Up to ₹250 crore</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-2">
            Ensure your business aligns with the latest MSME classification for maximum benefits.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UdyamRegistration;
