// src/pages/GstModification.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GstModification = () => {
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
    'types-of-amendments',
    'procedure',
    'documents',
    'important-considerations',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">GST Registration Modification</h1>

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
          <h2 className="text-2xl font-semibold mb-4">Understanding GST Registration Modification</h2>
          <p className="text-gray-700">
            GST registration modification refers to the process of updating or amending the details furnished during the initial GST registration. Businesses may need to modify their GST registration due to changes in business information, such as a change in business name, address, or the addition of new business premises. Timely and accurate updates ensure compliance with GST laws and maintain the accuracy of taxpayer information on the GST portal.
          </p>
        </div>

        {/* Section: Types of Amendments */}
        <div id="types-of-amendments" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Amendments</h2>
          <p className="text-gray-700 mb-4">
            Amendments to GST registration are categorized into two types:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>Core Field Amendments:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Business Details:</strong> Changes to legal name (without PAN change) or principal place of business.</li>
                <li><strong>Stakeholder Information:</strong> Addition/removal of partners, directors, or authorized signatories.</li>
                <li><strong>Principal Place of Business:</strong> Change in address of the primary business location.</li>
              </ul>
            </li>
            <li>
              <strong>Non-Core Field Amendments:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Contact Information:</strong> Updates to phone numbers or email addresses.</li>
                <li><strong>Bank Account Details:</strong> Adding or modifying bank information.</li>
                <li><strong>Additional Places of Business:</strong> Updating or adding new business locations.</li>
                <li><strong>Goods and Services Details:</strong> Updates to product/service descriptions or HSN/SAC codes.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Section: Procedure */}
        <div id="procedure" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Procedure for Modifying GST Registration</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Access the GST Portal:</strong> Log in using your credentials.</li>
            <li><strong>Navigate to Amendment Section:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>For Core Fields: <code>Services &gt; Registration &gt; Amendment of Registration Core Fields</code>.</li>
                <li>For Non-Core Fields: <code>Services &gt; Registration &gt; Amendment of Registration Non-Core Fields</code>.</li>
              </ul>
            </li>
            <li><strong>Select the Relevant Tab:</strong> Pick the section like Business Details, Promoter/Partners, or Address.</li>
            <li><strong>Update Information:</strong> Modify the necessary fields with correct data.</li>
            <li><strong>Upload Supporting Documents:</strong> Upload documents like address proof, resolutions, etc.</li>
            <li><strong>Provide Reason:</strong> Clearly mention the reason for modification.</li>
            <li><strong>Verification and Submission:</strong> Submit using DSC or EVC.</li>
            <li><strong>Acknowledgment:</strong> ARN will be generated post submission for tracking.</li>
          </ol>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for GST Registration Modification</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Proof of Change:</strong> Certificate for name change, updated address proof, new partnership deed, etc.</li>
            <li><strong>Authorization Documents:</strong> Authorization letter or board resolution for new signatories.</li>
            <li><strong>Identity & Address Proof:</strong> For new stakeholders or signatories – PAN, Aadhaar, passport, etc.</li>
            <li><strong>Proof of Business Premises:</strong> Rent agreements, tax receipts, utility bills, or NOC from owner.</li>
          </ul>
        </div>

        {/* Section: Important Considerations */}
        <div id="important-considerations" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Timely Submission:</strong> File within 15 days of the change to avoid non-compliance.</li>
            <li><strong>Approval Process:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Core Field Amendments:</strong> Require officer approval, usually processed in 15 working days.</li>
                <li><strong>Non-Core Field Amendments:</strong> Auto-approved instantly after submission.</li>
              </ul>
            </li>
            <li><strong>No PAN/State Change:</strong> For changes in PAN or state, a new GST registration is required.</li>
            <li><strong>Track Status:</strong> Use ARN to monitor the status on the GST portal.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GstModification;
