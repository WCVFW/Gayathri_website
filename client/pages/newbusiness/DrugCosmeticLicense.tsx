// src/pages/DrugCosmeticLicense.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DrugCosmeticLicense = () => {
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
    'types',
    'eligibility',
    'documents',
    'process',
    'validity',
    'why-choose',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Drug & Cosmetic License Registration</h1>

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
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700">
            The Drug & Cosmetic License is a mandatory legal requirement for businesses involved in the manufacturing, distribution, and sale of drugs and cosmetics in India. Regulated under the Drugs and Cosmetics Act, 1940, this license ensures that only authorized entities engage in pharmaceutical and cosmetic-related activities, maintaining safety and quality standards.
          </p>
        </div>

        {/* Section: Types */}
        <div id="types" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Drug & Cosmetic Licenses</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Manufacturing License:</strong> Required for manufacturers of drugs and cosmetics. Issued by the State Drug Control Department.</li>
            <li><strong>Loan License:</strong> Issued to manufacturers who do not own manufacturing premises but operate using another licensed manufacturer's facility.</li>
            <li><strong>Wholesale Drug License:</strong> Required for businesses engaged in the wholesale distribution of drugs. Granted by the Central Drugs Standard Control Organization (CDSCO) or State Licensing Authority.</li>
            <li><strong>Retail Drug License:</strong> Needed by pharmacies and chemists selling medicines directly to consumers.</li>
            <li><strong>Import License:</strong> Mandatory for businesses involved in the import of drugs or cosmetics. Issued by CDSCO.</li>
          </ul>
        </div>

        {/* Section: Eligibility */}
        <div id="eligibility" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <p className="mb-2 text-gray-700 font-medium">For Retail & Wholesale Licenses:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
            <li>The applicant must be a registered pharmacist or have a competent person with the necessary qualifications.</li>
            <li>The establishment must adhere to proper storage conditions (temperature control, ventilation, etc.).</li>
          </ul>
          <p className="mb-2 text-gray-700 font-medium">For Manufacturing Licenses:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>The manufacturing site must comply with Good Manufacturing Practices (GMP).</li>
            <li>The company must appoint technically qualified personnel.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Wholesale & Retail Drug License</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Application Form as per prescribed format</li>
                <li>Cover letter with details of the applicant</li>
                <li>Proof of business premises (rental agreement/ownership proof)</li>
                <li>Blueprint/layout of premises</li>
                <li>Identity & Address proof (Aadhaar Card, PAN Card) of proprietor/partners/directors</li>
                <li>Qualification certificates of the competent person/pharmacist</li>
                <li>Refrigerator purchase bill (for temperature-sensitive drugs)</li>
                <li>Affidavit declaring compliance with regulatory norms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Manufacturing License</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Site plan and layout of the manufacturing facility</li>
                <li>List of equipment and machinery</li>
                <li>Details of the technical staff, including qualification and experience</li>
                <li>NOC from Pollution Control Board</li>
                <li>Quality control procedures and safety measures adopted</li>
                <li>Proof of GMP compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-600 mb-2">For Import License</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Application Form in the prescribed format</li>
                <li>Registration certificate issued by the CDSCO</li>
                <li>Manufacturing and free sale certificate (for imported goods)</li>
                <li>Product labels and formula compositions</li>
                <li>Business registration documents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Process */}
        <div id="process" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Registration Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Determine the License Type:</strong> Identify whether the business requires a retail, wholesale, manufacturing, or import license.</li>
            <li><strong>Document Preparation:</strong> Gather all necessary documents as per the license type.</li>
            <li><strong>Application Submission:</strong> Apply through the State Drug Control Department or CDSCO portal and pay the prescribed fee.</li>
            <li><strong>Inspection & Verification:</strong> Authorities conduct a site inspection to verify the compliance of storage, safety, and technical standards.</li>
            <li><strong>Grant of License:</strong> Upon successful verification, the license is issued within 30–60 days.</li>
          </ol>
        </div>

        {/* Section: Validity */}
        <div id="validity" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Validity & Renewal</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>The Drug & Cosmetic License is typically valid for 3–5 years.</li>
            <li>Renewal should be applied for at least 3 months before the expiry date to avoid penalties or business disruptions.</li>
          </ul>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for Your Drug & Cosmetic License?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Expert Guidance:</strong> We simplify the licensing process with end-to-end assistance.</li>
            <li><strong>Hassle-Free Documentation:</strong> Our professionals handle all necessary paperwork.</li>
            <li><strong>Faster Processing:</strong> Minimize delays with our streamlined application process.</li>
            <li><strong>Regulatory Compliance:</strong> Ensure adherence to all legal and regulatory requirements.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DrugCosmeticLicense;
