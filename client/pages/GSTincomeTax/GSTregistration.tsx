// src/pages/GstRegistration.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GstRegistration = () => {
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

  const sections: { id: string; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'who-needs-it', label: 'Who' },
    { id: 'documents', label: 'Documents' },
    { id: 'process', label: 'Process' },
    { id: 'types', label: 'Types' },
    { id: 'returns', label: 'GST Return Filing' },
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins px-4">
      <h1 className="text-3xl font-semibold mb-6">GST Registration</h1>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-10 bg-white shadow-sm border-b mb-10">
        <div className="flex flex-wrap">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 text-sm font-medium uppercase transition-all duration-200 border-b-2 ${
                activeSection === id
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-600 border-transparent hover:text-green-600 hover:border-green-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Section: Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is GST Registration?</h2>
        <p>
          GST (Goods and Services Tax) registration is a mandatory process for businesses in India
          that meet the turnover criteria set by the government. GST simplifies taxation by
          integrating multiple indirect taxes into a single framework, ensuring compliance and
          smooth business operations.
        </p>
      </section>

      {/* Section: Benefits */}
      <section id="benefits" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits of GST Registration</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Legally Recognized Business:</strong> Obtaining GST registration gives legal recognition to your business and enables seamless operations across India.
          </li>
          <li>
            <strong>Input Tax Credit (ITC):</strong> Businesses can claim ITC on purchases, reducing their overall tax burden.
          </li>
          <li>
            <strong>Ease of Compliance:</strong> GST simplifies the tax filing process through an online portal, reducing paperwork.
          </li>
          <li>
            <strong>Facilitates E-Commerce:</strong>Mandatory for businesses selling online through platforms like Amazon, Flipkart, and their websites.
          </li>
          <li>
            <strong>Competitive Edge:</strong> Enhances business credibility and trustworthiness among customers and suppliers.
          </li>
        </ul>
      </section>

      {/* Section: Who Needs GST Registration */}
      <section id="who-needs-it" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Who Needs GST Registration?</h2>
        <p className="mb-2">GST registration is compulsory for:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Businesses with annual turnover exceeding ₹40 lakh (₹10 lakh for special states).</li>
          <li><strong>E-commerce sellers</strong> or aggregators.</li>
          <li><strong>Interstate businesses</strong> selling outside their state.</li>
          <li><strong>Casual taxable persons</strong> (e.g., businesses operating seasonal or temporary stalls/events).</li>
          <li><strong>Input Service Distributors (ISD)</strong> and agents.</li>
          <li><strong>Reverse charge mechanism (RCM) entities.</strong></li>
          <li><strong>Non-resident taxable persons (NRTPs)</strong>operating in India.</li>
        </ol>
      </section>

      {/* Section: Documents Required */}
      <section id="documents" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Documents Required for GST Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Proprietorship Firm</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>PAN Card of the owner</li>
              <li>Aadhaar Card</li>
              <li>Business address proof (Electricity bill, rent agreement, etc.)</li>
              <li>Bank account details (Cancelled cheque or bank statement)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Partnership Firm</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>PAN Card of firm and partners</li>
              <li>Aadhaar & Address proof of partners</li>
              <li>Partnership deed</li>
              <li>Business address proof</li>
              <li>Bank account details</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Private Limited / LLP</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>PAN of the company</li>
              <li>Certificate of Incorporation</li>
              <li>MOA & AOA / LLP Agreement</li>
              <li>Address proof of business</li>
              <li>Director's Aadhaar, PAN & Photograph</li>
              <li>Bank details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: GST Registration Process */}
      <section id="process" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">GST Registration Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Visit the GST Portal:</strong>{' '}
            <a
              href="https://www.gst.gov.in/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              gst.gov.in
            </a>
          </li>
          <li><strong>Fill Part A of Form GST REG-01:</strong> Provide PAN, mobile number, and email ID.</li>
          <li><strong>OTP Verification:</strong> Submit OTP received.</li>
          <li><strong>Business Details:</strong> Type, name, turnover, etc.</li>
          <li><strong>Upload Documents:</strong> ID, address & bank proof.</li>
          <li><strong>Receive ARN:</strong> Track status online.</li>
          <li><strong>Get GST Certificate:</strong> After approval, download it.</li>
        </ol>
      </section>

      {/* Section: Types of GST Registration */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Types of GST Registration</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Regular GST Registration:</strong> For businesses above threshold.</li>
          <li><strong>Composition Scheme:</strong> For small businesses (turnover under 1.5 crores) with reduced tax rates.</li>
          <li><strong>Casual Registration:</strong> For seasonal or temporary businesses.</li>
          <li><strong>Non-Resident Registration:</strong> For foreign businesses in India.</li>
        </ul>
      </section>

      {/* Section: GST Return Filing */}
      <section id="returns" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">GST Return Filing</h2>
        <p className="mb-2">Once registered, businesses must file the following returns:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>GSTR-1:</strong> Monthly/quarterly for outward supplies.</li>
          <li><strong>GSTR-3B:</strong> Monthly summary return.</li>
          <li><strong>GSTR-9:</strong> Annual return.</li>
          <li><strong>GSTR-4:</strong> For composition scheme taxpayers.</li>
        </ul>
      </section>
    </div>
  );
};

export default GstRegistration;
