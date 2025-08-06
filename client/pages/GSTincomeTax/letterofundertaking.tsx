import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LutFiling = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

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
    'benefits',
    'eligibility',
    'documents',
    'validity',
    'procedure',
    'considerations',
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Letter of Undertaking (LUT)</h1>

      <section className="space-y-10">
        {/* Sticky Navigation */}
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
          <h2 className="text-2xl font-semibold mb-4">What is a Letter of Undertaking (LUT)?</h2>
          <p className="text-gray-700">
            A Letter of Undertaking (LUT) is a formal document that enables exporters to undertake exports without the payment of Integrated Goods and Services Tax (IGST). By furnishing an LUT, exporters commit to adhering to all GST provisions, allowing for a smoother export process without the financial strain of upfront tax payments.
          </p>
        </div>

        {/* Benefits */}
        <div id="benefits" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Furnishing an LUT</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>Tax-Free Exports:</strong> Exporters can ship goods and services without the immediate payment of IGST, enhancing cash flow and operational efficiency.
            </li>
            <li>
              <strong>Simplified Compliance:</strong> Eliminates the need for complex refund processes associated with IGST payments on exports.
            </li>
            <li>
              <strong>Enhanced Liquidity:</strong> Retaining funds that would otherwise be paid as tax allows businesses to reinvest in growth and expansion activities.
            </li>
          </ul>
        </div>

        {/* Eligibility */}
        <div id="eligibility" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria for LUT</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>GST Registration:</strong> The exporter holds valid GST registration.
            </li>
            <li>
              <strong>No Serious Offenses:</strong> The exporter has not been prosecuted for tax evasion exceeding ₹2.5 crore under the CGST Act, IGST Act, or any existing laws.
            </li>
          </ul>
        </div>

        {/* Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for LUT Application</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>GST Registration Certificate: Proof of GST registration.</li>
            <li>PAN Card: Permanent Account Number of the business entity.</li>
            <li>Authorized Signatory Information: Details and KYC documents of the person authorized to sign the LUT.</li>
            <li>Witness Information: Names and addresses of two independent witnesses.</li>
          </ul>
        </div>

        {/* Validity */}
        <div id="validity" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Validity of LUT</h2>
          <p className="text-gray-700">
            An LUT is valid for the financial year in which it is furnished. Exporters must submit a new LUT for each financial year to continue exporting without IGST payment.
          </p>
        </div>

        {/* Procedure */}
        <div id="procedure" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Procedure to Furnish LUT Online</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Access the GST Portal: Log in to the GST Portal using your credentials.</li>
            <li>Navigate to LUT Application: Go to 'Services' &gt; 'User Services' &gt; 'Furnish Letter of Undertaking (LUT)'.</li>
            <li>Select Financial Year: Choose the financial year for which the LUT is being filed.</li>
            <li>Fill in Required Details: Enter necessary information, including the names and addresses of two witnesses.</li>
            <li>Upload Documents: Attach any required documents, such as previous LUTs if applicable.</li>
            <li>Sign and Submit: The authorized signatory must sign the application using a Digital Signature Certificate (DSC) or Electronic Verification Code (EVC).</li>
            <li>Acknowledgment: Upon successful submission, an Application Reference Number (ARN) will be generated for future reference.</li>
          </ol>
        </div>

        {/* Considerations */}
        <div id="considerations" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>Timely Submission:</strong> Ensure the LUT is furnished before proceeding with exports to avail IGST exemption.
            </li>
            <li>
              <strong>Compliance Adherence:</strong> Strictly follow all the conditions and requirements stipulated under the GST laws to maintain eligibility for LUT benefits.
            </li>
            <li>
              <strong>Record Maintenance:</strong> Keep all relevant documents and acknowledgments safely for future reference and potential audits.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LutFiling;
