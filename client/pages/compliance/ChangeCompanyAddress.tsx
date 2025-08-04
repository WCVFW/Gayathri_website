import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const faqData = [
  // ... (your existing items)
  {
    question: 'Do I need to notify RoC for every office address change?',
    answer: (
      <p className="text-white">
        No, only the <strong>registered office address</strong> needs to be updated. Corporate, administrative, or branch office changes do not require RoC approval.
      </p>
    ),
  },
  {
    question: 'How long does the address change process take?',
    answer: (
      <p className="text-white">
        <strong>Same city/state changes:</strong> 7–15 business days<br />
        <strong>State-to-state changes:</strong> 2–3 months (requires Regional Director approval)
      </p>
    ),
  },
  {
    question: "What happens if I don't update my registered office address?",
    answer: (
      <p className="text-white">
        Failure to update your registered office address can lead to <strong>penalties</strong> and <strong>non-compliance issues</strong> with the Ministry of Corporate Affairs (MCA).
      </p>
    ),
  },
  {
    question: 'Can Calzone manage the entire process?',
    answer: (
      <p className="text-white">
        Absolutely! <strong>Calzone handles all legal formalities</strong>, ensuring a smooth and compliant transition of your registered office.
      </p>
    ),
  },
];

const sections = [
  "Overview",
  "Registered Office Address Important",
  "Types of Changes",
  "How to Change",
  "Post-Compliance",
  "Why Choose",
  "FAQs",
];


const ChangeCompanyAddress: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-navy">Change Company Address</h1>
        <div className="sticky top-20 z-10 bg-white shadow-sm">

          <div className="flex flex-wrap max-w-screen-xl ">
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

        <section className="">
          <div className="flex items-start gap-4 mb-4">
            {/* <div className="text-3xl text-indigo-600 mt-1" /> */}
            <h2 className="text-2xl font-semibold  text-navy">
              Registered Office Address Change – An Overview
            </h2>
          </div>

          <p className="text-gray-700 mb-4">
            A registered office is the official address of a company, where all legal correspondence from government authorities is sent.
            As per <strong>Section 12 of the Companies Act, 2013</strong>, every company must declare a registered office address within 30 days of incorporation.
          </p>

          <p className="text-gray-700 mb-4">
            If your business is relocating, it's mandatory to update the new registered office address with the
            <strong> Registrar of Companies (RoC)</strong> and the <strong>Ministry of Corporate Affairs (MCA)</strong> to ensure compliance.
          </p>

          <p className="text-gray-700">
            At <strong>Calzone</strong>, we streamline the process of changing your company's registered office,
            handling all legal formalities and documentation, so you can focus on growing your business.
          </p>
        </section>

        <div>
          <h2 className=' text-navy'>Why Is a Registered Office Address Important?</h2>
          <p>The registered office address is not just a formality—it serves several legal and operational purposes:</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-700">
              {/* <FaMailBulk className="mt-1 text-indigo-600" /> */}
              <div>
                <strong className="block">Official Communication Hub:</strong>
                <span>All government notices and letters are sent here.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              {/* <FaGavel className="mt-1 text-indigo-600" /> */}
              <div>
                <strong className="block">Determines Company Jurisdiction:</strong>
                <span>Defines state laws and RoC regulations applicable to your company.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              {/* <FaBuilding className="mt-1 text-indigo-600" /> */}
              <div>
                <strong className="block">Legal Identity:</strong>
                <span>Establishes the company's legal presence and determines applicable local laws.</span>
              </div>
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            Keeping your registered office updated is crucial to avoiding penalties and legal complications.
          </p>
        </div>

        <h2 className="text-2xl font-semibold  text-navy">Types of Changes in Registered Office Address</h2>
        <ul className="list-disc list-inside space-y-1">
          <p>The procedure for changing the registered office depends on where the company is relocating:</p>
          <li>Within the same city</li>
          <li>Within the same state but different locality (same RoC jurisdiction)</li>
          <li>Within the same state but different RoC jurisdiction</li>
          <li>From one state to another</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6  text-navy">How to Change a Registered Office Address?</h2>

        {/* 1. Same City */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold ">1. Change Within the Same City, Town, or Village</h3>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Board Resolution in a board meeting approving the address change</li>
            <li>File Form <strong>INC-22</strong> with RoC within 30 days</li>
          </ul>
          <p className="mt-2 text-gray-600"><strong>Documents Required:</strong> Board Resolution, Utility Bill (Electricity/Water/Gas), NOC from property owner (if rented)</p>
        </div>

        {/* 2. Same State - Different Locality */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">2. Change Within the Same State (Different Locality but Same RoC)</h3>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Board Resolution to call for EGM</li>
            <li>Special Resolution passed at the EGM</li>
            <li>File Forms <strong>MGT-14</strong> & <strong>INC-22</strong> within 30 days</li>
          </ul>
          <p className="mt-2 text-gray-600"><strong>Documents Required:</strong> Board & Special Resolutions, Updated Utility Bill, NOC from Property Owner, Rent Agreement (if any)</p>
        </div>

        {/* 3. Same State - Different RoC */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">3. Change Within the Same State but Different RoC Jurisdiction</h3>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Board Meeting and EGM to pass Special Resolution</li>
            <li>Approval from Regional Director required</li>
            <li>File Forms <strong>MGT-14</strong>, <strong>INC-22</strong>, <strong>INC-28</strong>, and <strong>INC-23</strong></li>
          </ul>
          <p className="mt-2 text-gray-600"><strong>Documents Required:</strong> Resolutions, Auditor-Certified List of Creditors, Employee Declaration, Utility Bills, NOC</p>
        </div>

        {/* 4. Different State */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">4. Change of Registered Office from One State to Another</h3>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
            <li>Special Resolution via EGM</li>
            <li>Publish Public Notice in regional and English newspapers</li>
            <li>File <strong>INC-23</strong> for approval → Then file <strong>INC-28</strong> & <strong>INC-22</strong> within 30 days</li>
          </ul>
          <p className="mt-2 text-gray-600"><strong>Documents Required:</strong> List of Directors & Shareholders, Auditor-Certified Creditors List, MoA, AoA, Certificate of Incorporation, Financials, Public Notice Copies, Address Proof, NOC</p>
        </div>

        <h2 className="text-2xl font-semibold text-navy mb-6">Post-Compliance After Changing the Registered Office Address</h2>
        <h5>Once your company's registered office is updated, certain compliance steps must be followed:</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Update Business Stationery
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Change address on letterheads, invoices, receipts, billheads, etc.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Update PAN & TAN Records
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Notify Income Tax Authorities of the change.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Notify Stakeholders
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Inform shareholders, customers, and vendors.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Publish Notice
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Advertise the change in a general newspaper notification.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Update Bank & Government Authorities
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Notify banks, GST, and utility service providers.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-white text-center bg-[#306590] px-6 py-3 rounded-lg shadow-md">
              Display Updated Address
            </h3>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>The new address must be clearly displayed outside office premises.</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-navy mb-4">Why Choose Calzone for Changing Your Company Address?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>End-to-End Legal Compliance</strong> – We ensure your company address update is 100% compliant.
          </li>
          <li>
            <strong>Hassle-Free Documentation & Filings</strong> – We prepare and file INC-22, MGT-14, INC-23, and INC-28.
          </li>
          <li>
            <strong>Expert Guidance & Support</strong> – Avoid errors and regulatory rejections with our professional assistance.
          </li>
          <li>
            <strong>Affordable & Transparent Pricing</strong> – No hidden charges—just reliable service.
          </li>
        </ul>

        <div className="space-y-4 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3  text-navy">
            Frequently Asked Questions (FAQs)
          </h2>

          {faqData.map((item, index) => (
            <div key={index} className="border rounded-md">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white bg-navy focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-white" />
                ) : (
                  <FaPlus className="text-white" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-white  bg-navy">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangeCompanyAddress;
