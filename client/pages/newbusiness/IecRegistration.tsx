// src/pages/IecRegistration.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const IecRegistration = () => {
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
    'why-iec',
    'documents',
    'how-to-register',
    'who-needs-iec',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Importer Exporter Code (IEC) Registration</h1>
      <p className="mb-6 text-gray-700">
        Expand Your Business Globally with Calzone's IEC Registration Assistance!
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
          <h2 className="text-2xl font-semibold mb-4">IEC Registration - Your Gateway to International Trade</h2>
          <p className="text-gray-700">
            Importer Exporter Code (IEC) is a mandatory requirement for businesses involved in international trade. Issued by the Directorate General of Foreign Trade (DGFT), IEC ensures seamless import and export operations while unlocking global market opportunities. With Calzone, you can register hassle-free and focus on growing your business beyond borders.
          </p>
        </div>

        {/* Section: Why IEC */}
        <div id="why-iec" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why is IEC Registration Important?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Global Market Access:</strong> Enables businesses to import and export goods.</li>
            <li><strong>Legal Trade Compliance:</strong> Required for customs clearance and foreign transactions.</li>
            <li><strong>Government Benefits & Schemes:</strong> Access to duty drawbacks, subsidies, and incentives.</li>
            <li><strong>Easy International Transactions:</strong> Mandatory for remittances and foreign dealings.</li>
            <li><strong>No Annual Compliance:</strong> Once obtained, IEC is valid for a lifetime without renewal.</li>
            <li><strong>Enhances Business Credibility:</strong> Establishes trust with global partners and financial institutions.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for IEC Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>PAN Card:</strong> Business or individual PAN as applicable.</li>
            <li><strong>Aadhaar Card/Voter ID/Passport:</strong> Identity proof for the applicant.</li>
            <li><strong>Business Address Proof:</strong> Electricity bill, rent agreement, or property documents.</li>
            <li><strong>Bank Details:</strong> Cancelled cheque or bank certificate for verification.</li>
            <li><strong>Digital Signature (if applicable):</strong> Required for online verification.</li>
            <li><strong>Valid Email & Mobile Number:</strong> For DGFT communication and OTP authentication.</li>
          </ul>
        </div>

        {/* Section: How to Register */}
        <div id="how-to-register" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to Register for IEC with Calzone?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Visit the Calzone website or connect with our experts for assistance.</li>
            <li>Fill out the online IEC application form with required details.</li>
            <li>Upload scanned copies of all necessary documents.</li>
            <li>Pay the government fees and submit the application.</li>
            <li>Receive your IEC Certificate within a few working days via email.</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Processing Time:</strong> IEC Registration is typically completed within 3–7 working days.
          </p>
        </div>

        {/* Section: Who Needs IEC */}
        <div id="who-needs-iec" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs IEC Registration?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Manufacturers & Traders:</strong> For importing raw materials or exporting finished goods.</li>
            <li><strong>E-Commerce Businesses:</strong> For selling products globally on platforms like Amazon, eBay, and Alibaba.</li>
            <li><strong>Service Providers:</strong> Businesses receiving foreign payments, including IT firms and consultants.</li>
            <li><strong>Custom Clearance Agents:</strong> Required for facilitating import-export transactions.</li>
            <li><strong>Individuals Engaged in Import-Export:</strong> Freelancers, exporters, and importers dealing with foreign clients.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IecRegistration;
