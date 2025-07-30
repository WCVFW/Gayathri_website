// src/pages/SoleProprietorshipRegistration.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUniversity, FaFileInvoiceDollar, FaRegClock, FaBuilding, } from 'react-icons/fa';
import { FaIdCard, FaMapMarkedAlt, FaStore } from 'react-icons/fa';
import { FaHandsHelping, FaUserTie, FaClock, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';




const SoleProprietorshipRegistration = () => {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };

  const sections = [
    'overview',
    'how-to-register',
    'documents',
    'compliance',
    'timelines',
    'checklist',
    'why-choose'
  ];


  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold text-left mb-4 tracking-wide leading-snug">
        Sole Proprietorship Registration
      </h1>

      <p className="text-base text-left mb-8 tracking-normal leading-relaxed">
        Sole Proprietorship Registration with Calzone - Your First Step Towards Business Success
      </p>

      <div id="introduction" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide leading-snug">
          Introduction
        </h2>
        <p className="font-poppins text-[15px] font-normal text-[rgb(34,34,34)] leading-[20px] mb-3">
          Starting a business is an exciting journey, and choosing the right structure is crucial. A Sole Proprietorship is the simplest and most widely chosen business model, especially for freelancers, small traders, retail shop owners, and independent professionals.
        </p>
        <p className="font-poppins text-[15px] font-normal text-[rgb(34,34,34)] leading-[20px] mb-3">
          At Calzone, we help entrepreneurs set up their Sole Proprietorship effortlessly, ensuring compliance with tax regulations, GST, and business registrations.
        </p>
        <p className="font-poppins text-[15px] font-normal text-[rgb(34,34,34)] leading-[20px]">
          With minimal paperwork, complete control, and tax benefits, a Sole Proprietorship is the best way to launch and operate a business with low investment and high flexibility.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide leading-snug">
          Things to Know
        </h2>
        <div className="sticky top-16 z-10 bg-white shadow-sm py-2">
          <div className="flex flex-wrap gap-3 justify-start px-4">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 
          ${activeSection === id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                  } bg-transparent border-b-2 border-transparent focus:outline-none`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="space-y-10">
        <div id="what">
          <h2 className="text-2xl font-semibold mb-2">What is a Sole Proprietorship?</h2>
          <p>A Sole Proprietorship is a business owned, managed, and controlled by one individual. Unlike companies or LLPs, a Sole Proprietorship has no legal distinction between the owner and the business, meaning the owner is personally responsible for all profits and liabilities.</p>
          <p className="font-bold">It is ideal for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Small business owners and shopkeepers</li>
            <li>Freelancers and consultants</li>
            <li>Home-based businesses</li>
            <li>Service providers (designers, writers, tutors, etc.)</li>
            <li>Independent professionals (CA, doctors, lawyers, etc.)</li>
          </ul>
          <p>At Calzone, we guide you through the entire registration process and help you access business banking, GST, and tax benefits with ease.</p>
        </div>

        <div id="why-choose">
          <h2 className="text-2xl font-semibold mb-2">Why Choose a Sole Proprietorship with Calzone?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Quick & Easy Setup- Start your business in just a few days with minimal compliance.</li>
            <li>Full Control & Ownership- You make all decisions and retain 100% profits.</li>
            <li>Low Cost & Minimum Compliance- No complex legal requirements like companies.</li>
            <li>Less Tax Burden - Sole Proprietorships are taxed as individuals, avoiding corporate tax rates.</li>
            <li>Easy Scalability- Convert to a Private Limited Company or LLP anytime as your business grows.</li>
          </ul>
        </div>

        <div id="how-to-register" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            How to Register a Sole Proprietorship?
          </h2>
          <p className="text-[15px] font-normal text-[rgb(34,34,34)] leading-[20px] mb-4 font-poppins">
            There is no mandatory legal registration required for a Sole Proprietorship, but for business credibility and legal compliance, you may need the following:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li>
              <span className="font-semibold">Obtain PAN & Aadhaar</span><br />
              PAN (Permanent Account Number) for tax compliance.<br />
              Aadhaar-linked bank account for business transactions.
            </li>
            <li>
              <span className="font-semibold">Open a Business Bank Account</span><br />
              Required to maintain business transactions separately from personal funds.<br />
              Requires PAN, Aadhaar, and business address proof.
            </li>
            <li>
              <span className="font-semibold">Choose Business Name & Address</span><br />
              Select a unique business name.<br />
              Provide a business address for registration purposes.
            </li>
            <li>
              <span className="font-semibold">Register Under GST (If Required)</span><br />
              Mandatory for businesses with turnover above ₹20 lakh (services) or ₹40 lakh (goods).<br />
              Essential for businesses involved in interstate trade or e-commerce platforms.
            </li>
            <li>
              <span className="font-semibold">Register Under MSME (Udyam Registration - Optional but Beneficial)</span><br />
              Helps in accessing business loans, subsidies, and tax benefits.<br />
              Recognizes your business under the Micro, Small, and Medium Enterprises (MSME) Act.
            </li>
            <li>
              <span className="font-semibold">Get Registration Under Shops & Establishment Act (If Required)</span><br />
              If you have a physical store, office, or retail outlet, this registration is needed.<br />
              Helps in business banking and obtaining government licenses.
            </li>
          </ol>
          <p className="mt-4 text-[15px] font-normal text-[rgb(34,34,34)] leading-[20px] font-poppins">
            <strong>Calzone</strong> helps you with hassle-free registration and compliance for your business!
          </p>
        </div>

        <div id="documents" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            Documents Required for Sole Proprietorship Registration
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li>
              <span className="font-semibold">PAN Card & Aadhaar Card of the Proprietor</span><br />
              Identity and address proof are essential for registration and banking.
            </li>
            <li>
              <span className="font-semibold">Business Name & Address Proof</span><br />
              Electricity Bill, Rent Agreement, or Property Deed are valid documents for address verification.
            </li>
            <li>
              <span className="font-semibold">GST Registration Certificate (if applicable)</span><br />
              Mandatory if turnover exceeds limits or if operating in interstate trade/e-commerce.
            </li>
            <li>
              <span className="font-semibold">Udyam Registration Certificate</span><br />
              Required if availing MSME benefits; helps in loans, subsidies, and recognition.
            </li>
            <li>
              <span className="font-semibold">Bank Account in Business Name</span><br />
              Opened with KYC documents like PAN, Aadhaar, and business proof.
            </li>
          </ul>
          <p className="mt-4 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <strong>At Calzone</strong>, we ensure all documentation is error-free and properly filed for smooth approval.
          </p>
        </div>
        <div id="compliance" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            Compliance Requirements for a Sole Proprietorship
          </h2>
          <ul className="list-disc list-inside space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li>
              <span className="font-semibold">Income Tax Return Filing</span><br />
              The business owner must file personal income tax, including income earned through the proprietorship.
            </li>
            <li>
              <span className="font-semibold">GST Return Filing (if applicable)</span><br />
              Monthly or quarterly GST returns must be filed if the business is registered under GST.
            </li>
            <li>
              <span className="font-semibold">TDS Compliance (if applicable)</span><br />
              If the business deducts TDS, it must file timely TDS returns with the Income Tax Department.
            </li>
          </ul>
          <p className="mt-4 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <strong>Calzone</strong> provides complete tax and compliance support to keep your business running smoothly!
          </p>
        </div>
        <div id="timelines" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            Timelines for Sole Proprietorship Registration
          </h2>
          <ul className="space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li className="flex items-start gap-2">
              <FaUniversity className="mt-1 text-gold text-2xl" />
              <span><strong>Business Bank Account Opening:</strong> 1–2 working days</span>
            </li>
            <li className="flex items-start gap-2">
              <FaFileInvoiceDollar className="mt-1 text-gold text-2xl" />
              <span><strong>GST Registration (if required):</strong> 5–7 working days</span>
            </li>
            <li className="flex items-start gap-2">
              <FaRegClock className="mt-1 text-gold text-2xl" />
              <span><strong>MSME Registration (Udyam):</strong> 1–2 working days</span>
            </li>
            <li className="flex items-start gap-2">
              <FaBuilding className="mt-1 text-gold text-2xl" />
              <span><strong>Shops & Establishment Registration:</strong> Varies by state (7–15 days average)</span>
            </li>
          </ul>
        </div>
        <div id="checklist" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            Checklist Before Registering a Sole Proprietorship
          </h2>
          <ul className="space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li className="flex items-start gap-2">
              <FaIdCard className="mt-1 text-gold text-2xl" />
              <span><strong>PAN & Aadhaar Card of the Proprietor</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkedAlt className="mt-1 text-gold text-2xl" />
              <span><strong>Business Name & Address Confirmation</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <FaUniversity className="mt-1 text-gold text-2xl" />
              <span><strong>Separate Business Bank Account</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <FaFileInvoiceDollar className="mt-1 text-gold text-2xl" />
              <span><strong>GST Registration (if applicable)</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <FaStore className="mt-1 text-gold text-2xl" />
              <span><strong>Shops & Establishment Act Registration (if required)</strong></span>
            </li>
          </ul>
          <p>Calzone offers personalized assistance to meet all registration and compliance needs.</p>
        </div>
        <div id="comparison">
          <h2 className="text-2xl font-semibold mb-2">Sole Proprietorship vs Private Limited Company- Which One is Right for You?</h2>
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Sole Proprietorship</th>
                <th className="px-4 py-2">Private Limited Company</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Ownership</td><td className="border px-4 py-2">Single Owner</td><td className="border px-4 py-2">Multiple Shareholders</td></tr>
              <tr><td className="border px-4 py-2">Legal Compliance</td><td className="border px-4 py-2">Minimal</td><td className="border px-4 py-2">Higher</td></tr>
              <tr><td className="border px-4 py-2">Taxation</td><td className="border px-4 py-2">Individual Tax</td><td className="border px-4 py-2">Corporate Tax</td></tr>
              <tr><td className="border px-4 py-2">Liability Protection</td><td className="border px-4 py-2">No</td><td className="border px-4 py-2">Yes</td></tr>
              <tr><td className="border px-4 py-2">Annual Filings</td><td className="border px-4 py-2">Not Mandatory</td><td className="border px-4 py-2">Mandatory</td></tr>
              <tr><td className="border px-4 py-2">Business Growth</td><td className="border px-4 py-2">Limited</td><td className="border px-4 py-2">Scalable</td></tr>
            </tbody>
          </table>
          <ul>
            <li>Choose Sole Proprietorship if: You want a simple, low-cost business with minimum compliance.</li>
            <li>Choose Pvt Ltd if: You want to scale, attract investors, or raise capital.</li>
          </ul>
          <p>At Calzone, we help businesses choose the best structure based on their goals.</p>
        </div>
        <div id="why-calzone" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[rgb(34,34,34)] font-poppins">
            Why Choose Calzone?
          </h2>
          <ul className="space-y-3 text-[15px] text-[rgb(34,34,34)] font-poppins leading-[20px]">
            <li className="flex items-start gap-2">
              <FaHandsHelping className="mt-1 text-gold text-2xl" />
              <span><strong>Hassle-Free Registration Assistance</strong> – From GST to MSME, we handle everything.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaUserTie className="mt-1 text-gold text-2xl" />
              <span><strong>Expert Business Consultation</strong> – Get guidance on tax, compliance, and future scalability.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="mt-1 text-gold text-2xl" />
              <span><strong>Quick Turnaround Time</strong> – Get your registration done without delays.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaRupeeSign className="mt-1 text-gold text-2xl" />
              <span><strong>Affordable Pricing</strong> – No hidden costs, just straightforward pricing.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 text-gold text-2xl" />
              <span><strong>Ongoing Compliance Support</strong> – We help manage tax filings, TDS, and GST returns.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SoleProprietorshipRegistration;
