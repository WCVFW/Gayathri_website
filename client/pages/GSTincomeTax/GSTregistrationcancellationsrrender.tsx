// src/pages/GstCancellation.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GstCancellation = () => {
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
    'reasons',
    'procedure',
    'documents',
    'consequences',
    'revocation',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">GST Registration Cancellation/Surrender</h1>

      <section className="space-y-10">
        {/* Sticky Nav */}
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
          <h2 className="text-2xl font-semibold mb-4">Understanding GST Registration Cancellation</h2>
          <p className="text-gray-700">
            Cancellation or surrender of Goods and Services Tax (GST) registration refers to the formal process of deactivating a registered taxpayer's GSTIN (GST Identification Number). Once cancelled, the taxpayer is no longer required to collect or pay GST, nor file GST returns. This process is essential for businesses that have ceased operations, undergone significant changes, or no longer meet the criteria for mandatory GST registration.
          </p>
        </div>

        {/* Section: Reasons */}
        <div id="reasons" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Reasons for Cancelling GST Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Cessation of Business Operations:</strong> The business has been discontinued or closed permanently.</li>
            <li><strong>Transfer of Business Ownership:</strong> The business has been sold, merged, demerged, or transferred, requiring new GST registration.</li>
            <li><strong>Change in Business Constitution:</strong> Such as converting from partnership to sole proprietorship, resulting in PAN change.</li>
            <li><strong>Non-Requirement Under GST:</strong> Business turnover falls below threshold and does not involve interstate supplies.</li>
            <li><strong>Death of the Sole Proprietor:</strong> Legal heirs may apply for cancellation in such cases.</li>
            <li><strong>Voluntary Cancellation:</strong> Due to restructuring or personal/business decisions.</li>
          </ul>
        </div>

        {/* Section: Procedure */}
        <div id="procedure" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Procedure for Cancelling GST Registration</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Access the GST Portal:</strong> Log in using your credentials.</li>
            <li><strong>Navigate to Cancellation Application:</strong> Go to <code>Services &gt; Registration &gt; Application for Cancellation of Registration</code>.</li>
            <li><strong>Provide Details:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Confirm basic information like GSTIN, name, and address.</li>
                <li>Update address for future correspondence if required.</li>
                <li>Select appropriate reason for cancellation.</li>
                <li>Specify effective date of cancellation.</li>
                <li>Disclose if tax invoices were issued.</li>
              </ul>
            </li>
            <li><strong>Verification:</strong> Select authorized signatory and location.</li>
            <li><strong>Submission:</strong> Submit using DSC or EVC as applicable.</li>
            <li><strong>Acknowledgment:</strong> ARN (Application Reference Number) is generated after submission.</li>
          </ol>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for GST Cancellation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>PAN Card:</strong> Of business or proprietor.</li>
            <li><strong>Aadhaar Card:</strong> Identification of authorized signatory.</li>
            <li><strong>GST Registration Certificate:</strong> Existing proof of registration.</li>
            <li><strong>Details of Last GST Return Filed:</strong> Most recent filing record.</li>
            <li><strong>Business Closure Proof:</strong> Declaration or dissolution certificate.</li>
            <li><strong>Bank Account Statement:</strong> Recent statement showing transactions.</li>
            <li><strong>Authorization Letter:</strong> If filed by a representative.</li>
          </ul>
        </div>

        {/* Section: Consequences */}
        <div id="consequences" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Consequences of GST Registration Cancellation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Cessation of GST Obligations:</strong> No need to collect, pay GST, or file returns post cancellation.</li>
            <li><strong>Liability for Past Activities:</strong> Taxpayer remains liable for any dues before cancellation date.</li>
            <li><strong>Restriction on Business Operations:</strong> Taxable supply without registration is illegal and penalizable.</li>
          </ul>
        </div>

        {/* Section: Revocation */}
        <div id="revocation" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Revocation of GST Registration Cancellation</h2>
          <p className="text-gray-700 mb-4">
            If cancellation was done by authorities, the taxpayer can apply for revocation within 30 days of the cancellation order:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Filing an Application:</strong> Submit Form GST REG-21 via GST portal.</li>
            <li><strong>Providing Reasons:</strong> Clearly mention reasons for revocation and respond to cancellation grounds.</li>
            <li><strong>Compliance Rectification:</strong> File all pending returns and pay outstanding dues.</li>
            <li><strong>Awaiting Decision:</strong> Tax officer will review and communicate approval or rejection.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default GstCancellation;
