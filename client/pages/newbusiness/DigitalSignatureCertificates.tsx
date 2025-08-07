// src/pages/DscRegistration.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DscRegistration = () => {
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
    'why',
    'types',
    'who-needs-it',
    'documents',
    'step-by-step',
    'renewal',
    'pricing',
    'why-choose',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Digital Signature Certificates (DSC)</h1>

      <section className="space-y-10">
        <div className="sticky top-20 z-10 bg-white shadow-sm">
          <div className="flex flex-wrap max-w-screen-xl">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
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
          <h2 className="text-2xl font-semibold mb-4">What is a Digital Signature Certificate (DSC)?</h2>
          <p className="text-gray-700 mb-4">
            A Digital Signature Certificate (DSC) is an electronic alternative to a physical signature. It validates the identity of the signer and ensures that digital documents remain tamper-proof.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Legally recognized under the Information Technology Act, 2000</li>
            <li>Ensures data integrity and authenticity</li>
            <li>Used in e-filing, tax returns, business registrations, e-tendering, contracts</li>
            <li>Helps in secure communication and encryption of sensitive information</li>
          </ul>
        </div>

        {/* Section: Why */}
        <div id="why" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why is DSC Important for Businesses & Individuals?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Enhanced Security:</strong> DSCs provide encryption and tamper-proof security, ensuring that digital documents remain unchanged after signing.</li>
            <li><strong>Legally Accepted:</strong> In India, DSCs are legally valid for online transactions, company registrations, and official filings.</li>
            <li><strong>Time & Cost Efficiency:</strong> DSCs eliminate paperwork, reducing processing time and costs associated with printing, scanning, and couriering documents.</li>
            <li><strong>E-Governance Compliance:</strong> Many government platforms require DSCs for tax filings, tenders, e-procurement, and online contracts.</li>
          </ul>
        </div>

        {/* Section: Types */}
        <div id="types" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Digital Signature Certificates (DSC)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Security Level</th>
                  <th className="px-4 py-2 border">Common Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Class 1</td>
                  <td className="px-4 py-2 border">Basic Security</td>
                  <td className="px-4 py-2 border">Email authentication, personal use</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Class 2</td>
                  <td className="px-4 py-2 border">Medium Security</td>
                  <td className="px-4 py-2 border">Company incorporation, tax filings, GST registration</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Class 3</td>
                  <td className="px-4 py-2 border">High Security</td>
                  <td className="px-4 py-2 border">E-tendering, e-procurement, e-auctions, banking transactions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-gray-700">
            Class 3 DSC requires in-person verification and is used for high-value transactions.
          </p>
        </div>

        {/* Section: Who Needs It */}
        <div id="who-needs-it" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs a Digital Signature Certificate?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Individuals:</strong> For income tax filing, signing contracts, banking transactions.</li>
            <li><strong>Businesses:</strong> For GST registration, company incorporation, ROC filings, and tenders.</li>
            <li><strong>Government Entities:</strong> For secure e-governance applications and document authentication.</li>
            <li><strong>Foreign Applicants:</strong> To conduct business transactions in India securely.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for DSC Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Individuals</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Aadhaar Card / PAN Card</li>
                <li>Passport-size photo</li>
                <li>Address proof (Utility Bill, Voter ID, Driving License)</li>
                <li>Active mobile number & email ID</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Businesses / Organizations</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Certificate of Incorporation (CIN)</li>
                <li>Business PAN Card</li>
                <li>GST Registration Certificate</li>
                <li>Authorization letter from the company</li>
                <li>Identity & address proof of the authorized signatory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Step-by-Step */}
        <div id="step-by-step" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process for DSC Registration</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Choose the Type of DSC:</strong> Select the class of DSC based on your business or personal requirements.</li>
            <li><strong>Submit the Application:</strong> Fill out the online application form and upload the required documents.</li>
            <li><strong>Identity Verification:</strong> Depending on the class of DSC, identity verification is conducted online or in person.</li>
            <li><strong>Payment and Approval:</strong> Make the payment, and once verified, the Certifying Authority will approve your application.</li>
            <li><strong>DSC Issuance:</strong> You will receive your Digital Signature Certificate on a USB token or as a downloadable file.</li>
          </ol>
        </div>

        {/* Section: Renewal */}
        <div id="renewal" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">DSC Renewal Process</h2>
          <p className="text-gray-700 mb-4">
            DSCs are valid for 1 to 3 years and must be renewed before expiry to avoid disruptions.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Choose renewal duration (1-3 years)</li>
            <li>Upload KYC documents for verification</li>
            <li>Complete mobile & video verification</li>
            <li>Receive the renewed DSC on a new USB token</li>
          </ol>
        </div>

        {/* Section: Pricing */}
        <div id="pricing" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">DSC Pricing in India</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Validity</th>
                  <th className="px-4 py-2 border">Approximate Cost (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Class 1</td>
                  <td className="px-4 py-2 border">1–2 years</td>
                  <td className="px-4 py-2 border">₹500 – ₹1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Class 2</td>
                  <td className="px-4 py-2 border">1–3 years</td>
                  <td className="px-4 py-2 border">₹1,000 – ₹1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Class 3</td>
                  <td className="px-4 py-2 border">1–3 years</td>
                  <td className="px-4 py-2 border">₹1,500 – ₹2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-gray-700">Additional costs may apply for USB tokens and express processing.</p>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for DSC Registration?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Hassle-Free Online Process:</strong> No need for physical visits, 100% digital application.</li>
            <li><strong>Quick Turnaround:</strong> Get your DSC issued within 24–48 hours.</li>
            <li><strong>Affordable Pricing:</strong> Competitive pricing with no hidden charges.</li>
            <li><strong>Expert Assistance:</strong> End-to-end support from document submission to installation.</li>
            <li><strong>Government Approved:</strong> We work with licensed Certifying Authorities (CAs) for DSC issuance.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DscRegistration;
