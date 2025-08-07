import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FssaiRegistration = () => {
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
    'documents',
    'how-to-register',
    'who-needs-it',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">FSSAI Registration</h1>

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
          <h2 className="text-2xl font-semibold mb-4">FSSAI Registration - A Must for Every Food Business</h2>
          <p className="text-gray-700">
            Food safety is a top priority for businesses in India, and the Food Safety and Standards Authority of India (FSSAI)
            regulates the industry to ensure quality and hygiene. Any entity involved in food manufacturing, processing,
            storage, distribution, or sale must obtain an FSSAI License. Registering with Calzone guarantees a hassle-free
            process and compliance with all regulations.
          </p>
        </div>

        {/* Section: Why */}
        <div id="why" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why is FSSAI Registration Essential?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Legal Requirement:</strong> Avoid penalties and legal complications.</li>
            <li><strong>Enhanced Business Credibility:</strong> Builds trust with customers and investors.</li>
            <li><strong>Market Expansion:</strong> Enables participation in government and private contracts.</li>
            <li><strong>International Recognition:</strong> Required for food exports.</li>
            <li><strong>Improved Consumer Awareness:</strong> Displays commitment to food safety.</li>
            <li><strong>Brand Protection:</strong> Safeguards against fraudulent activities and competitors.</li>
          </ul>
        </div>

        {/* Section: Types */}
        <div id="types" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of FSSAI Licenses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border border-gray-300">License Type</th>
                  <th className="p-2 border border-gray-300">Applicability</th>
                  <th className="p-2 border border-gray-300">Annual Turnover</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">Basic Registration</td>
                  <td className="p-2 border border-gray-300">Small food businesses, petty retailers, home-based kitchens</td>
                  <td className="p-2 border border-gray-300">Up to ₹12 lakh</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">State License</td>
                  <td className="p-2 border border-gray-300">Medium-sized manufacturers, storage units, transporters, restaurants</td>
                  <td className="p-2 border border-gray-300">₹12 lakh to ₹20 crore</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Central License</td>
                  <td className="p-2 border border-gray-300">Large-scale businesses, import/export units, e-commerce platforms</td>
                  <td className="p-2 border border-gray-300">Above ₹20 crore</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">Calzone helps you determine the right license category based on your business model.</p>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for FSSAI Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>PAN Card - For business verification</li>
            <li>Aadhaar Card - Mandatory for identity confirmation</li>
            <li>Business Address Proof - Utility bill, rental agreement, or property papers</li>
            <li>Food Safety Management Plan - Declaration of food safety measures</li>
            <li>Trade License - Proof of business operations</li>
            <li>List of Food Products - Details of items to be manufactured or sold</li>
            <li>NOC from Municipality or Local Authority - For businesses in regulated zones</li>
            <li>Bank Account Details - Passbook or canceled cheque</li>
            <li>GST & Incorporation Certificate - If applicable</li>
          </ul>
        </div>

        {/* Section: How to Register */}
        <div id="how-to-register" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to Register for FSSAI with Calzone?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Visit the official FSSAI website or apply through Calzone for expert assistance.</li>
            <li>Choose the appropriate FSSAI license type based on your business category.</li>
            <li>Submit all required documents and business details.</li>
            <li>Pay the applicable government fees.</li>
            <li>Receive your FSSAI Registration Certificate and start operating legally.</li>
          </ol>
          <p className="mt-4 text-gray-700">
            <strong>Processing Time:</strong> Basic registration takes 7–10 working days, while State/Central licenses may take up to 30 days.
          </p>
        </div>

        {/* Section: Who Needs It */}
        <div id="who-needs-it" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs FSSAI Registration?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Home-Based Food Businesses - Bakers, home chefs, tiffin services</li>
            <li>Restaurants & Cafes - Food outlets, canteens, and caterers</li>
            <li>Food Manufacturers - Large and small-scale food processors</li>
            <li>Food Transporters & Storage Units - Warehouses, cold storage units</li>
            <li>Retailers & Wholesalers - Kirana stores, supermarkets, food suppliers</li>
            <li>E-commerce Food Sellers - Online food businesses, cloud kitchens</li>
            <li>Importers & Exporters - Food-related international trade</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Not sure if your business needs an FSSAI license? <strong>Calzone provides expert consultation!</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FssaiRegistration;
