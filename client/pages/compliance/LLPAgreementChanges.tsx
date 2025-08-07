import React, { useState } from 'react';
import { FaBuilding, FaChartPie, FaGavel, FaMapMarkerAlt, FaMoneyBillWave, FaRupeeSign, FaUserCog, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const changes = [
  {
    title: "General modifications",
    description: "Updates to business activities or terms.",
  },
  {
    title: "LLP name change",
    description: "Rebranding or restructuring.",
  },
  {
    title: "Changes in objectives",
    description: "Expanding or altering business operations.",
  },
  {
    title: "Registered office relocation",
    description: "Moving within the same jurisdiction or to another state.",
  },
  {
    title: "Adding or removing partners",
    description: "New partner induction, resignation, or removal.",
  },
  {
    title: "Transfer of LLP rights",
    description: "In case of a partner's death or retirement.",
  },
  {
    title: "Complete LLP ownership transfer",
    description: "Selling LLP to a new group.",
  },
  {
    title: "Change in profit & loss ratio",
    description: "Adjusting partner earnings.",
  },
];

const sections = [
  'Overview & Why Modify',
  'Changes',
  'Reasons',
  'Documents Required',
  'Step-by-Step',
  'Deadlines',
  'Why Choose',
  'FAQs',
];

const faqs = [
  {
    question: 'What is the time limit for modifying an LLP Agreement?',
    answer: 'All LLP Agreement changes must be filed with the ROC within 30 days of approval by the partners.',
  },
  {
    question: 'Is stamp duty mandatory for LLP modifications?',
    answer: 'Yes, stamp duty must be paid according to your respective state’s regulations.',
  },
  {
    question: 'What if I miss the ROC filing deadline?',
    answer: 'Failure to file within 30 days may lead to penalties and legal consequences.',
  },
  {
    question: 'How can Calzone help with LLP modifications?',
    answer: 'Calzone provides end-to-end assistance including drafting, filing, and legal compliance at an affordable cost.',
  },
];

const LLPAgreementChanges: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };
  return (
   <section className="px-6 md:px-16 py-8 text-navy font-poppins">
      <div className="bg-white  lg:p-10">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Changes in LLP Agreement
          </h1>
          <div className="sticky top-20 z-10 bg-white shadow-sm">
            <div className="flex flex-wrap max-w-screen-xl">
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-1.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-navy hover:text-green-600 hover:border-green-600'
                    } border-b-2 border-transparent bg-transparent focus:outline-none`}
                >
                  {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </div>


        <section className="bg-white">
          <div className="">
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
              What is an LLP Agreement & Why Modify It?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              The <strong>LLP Agreement</strong> is a legal document that outlines the terms, rights, responsibilities, and structure of a Limited Liability Partnership (LLP).
            </p>

            <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
              Can the LLP Agreement be Changed?
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Yes!</strong> The LLP Agreement can be modified anytime with mutual consent from partners.
            </p>
            <p className="text-gray-700 text-lg flex items-start gap-2">
              However, any modification must be reported to the <strong>Registrar of Companies (ROC)</strong> within <strong>30 days</strong> of the change.
            </p>
          </div>
        </section>
        <section className="bg-gray-50">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Why Modify the LLP Agreement?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Businesses evolve, and changes may be required in:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <FaMoneyBillWave className="text-pink-600" />
                Capital contributions
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <FaChartPie className="text-blue-600" />
                Profit & loss sharing ratios
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <FaUserTie className="text-green-600" />
                Partner roles and responsibilities
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <FaBuilding className="text-yellow-600" />
                LLP name or business objectives
              </li>
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <FaMapMarkerAlt className="text-purple-600" />
                Registered office location
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              <strong>Calzone</strong> makes LLP Agreement modifications easy, ensuring full compliance with the <strong>LLP Act, 2008</strong>.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="">
            <h2 className="text-3xl font-bold text-navy mb-8">
              Common Changes in an LLP Agreement
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {changes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-5 rounded-xl shadow-sm border hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 mt-10">
              Whatever the reason, <strong>Calzone</strong> ensures your LLP Agreement amendments are processed quickly and accurately.
            </p>
          </div>
        </section>
        <section className="bg-gray-50">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-10">
              Common Reasons for Modifying an LLP Agreement
            </h2>

            {/* Capital Adjustment */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border">
              <div className="flex items-center gap-3 mb-3">
                <FaRupeeSign className="text-green-600 text-xl" />
                <h3 className="text-xl font-semibold text-navy">
                  Capital Adjustment
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                As businesses grow, they require more capital investment.
                Capital contribution ratios and profit-sharing structures may need to be updated.
              </p>
            </div>

            {/* Changes in Partner Roles */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border">
              <div className="flex items-center gap-3 mb-3">
                <FaUserCog className="text-blue-600 text-xl" />
                <h3 className="text-xl font-semibold text-navy">
                  Changes in Partner Roles & Responsibilities
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Partners may take on new roles, responsibilities, or restrictions.
                Administrative powers, voting rights, and decision-making processes may need modification.
              </p>
            </div>

            {/* Legal & Structural Changes */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border">
              <div className="flex items-center gap-3 mb-3">
                <FaGavel className="text-red-600 text-xl" />
                <h3 className="text-xl font-semibold text-navy">
                  Legal & Structural Changes
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Updates to LLP jurisdiction, resignation terms, notice periods, or partnership duration.
                Addition, removal, or modification of any key clauses.
              </p>
            </div>

            {/* Final line */}
            <p className="text-lg text-gray-700 mt-10">
              <strong>Calzone</strong> ensures smooth modifications while maintaining your LLP’s legal integrity.
            </p>
          </div>
        </section>
        <section className="bg-gray-50">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8">
              Documents Required to Modify an LLP Agreement
            </h2>

            {/* Documents for Form 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Documents for Form 3 (Modification of LLP Agreement)
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Original LLP Agreement</li>
                <li>Consent of all partners</li>
                <li>Modified LLP Agreement</li>
                <li>Authorization/Resolution proof (name & address verification)</li>
                <li>Additional Deed (if applicable)</li>
                <li>Proof of LLP name change (if applicable)</li>
              </ul>
            </div>

            {/* Documents for Form 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Documents for Form 4 (If Changing Partners)
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Resolution approving the changes (passed in a Partner's Meeting)</li>
                <li>Corporate Resolution (if a company is a partner)</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mt-6">
              <strong>Calzone</strong> assists in preparing and filing all required documents with the ROC.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-10">
              Step-by-Step Process to Modify an LLP Agreement
            </h2>

            {/* Step 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Step 1: Consultation with Calzone Experts
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Get started with a simple online form on our website.</li>
                <li>Schedule a call with our experts to discuss required changes.</li>
                <li>Provide necessary details & documents for agreement modification.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Step 2: Drafting & Legal Compliance
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>We draft the required resolutions and supplementary LLP agreement.</li>
                <li>Stamp duty is paid as per legal requirements.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                Step 3: Submission & Approval
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>File Form 3 with the ROC to register the modified agreement.</li>
                <li>If partner changes are involved, Form 4 must also be filed.</li>
                <li>ROC reviews and approves the modifications within 12–15 working days.</li>
              </ul>
            </div>

            <p className="text-lg text-navy mt-6">
              <strong>Calzone</strong> ensures your LLP Agreement modification is approved quickly without legal hassles.
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="">
            {/* Compliance Section */}
            <h2 className="text-3xl font-bold text-navy mb-6">
              LLP Agreement Changes – Government Compliance & Deadlines
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2 mb-10">
              <li>
                All LLP Agreement modifications must be filed with the ROC within <strong>30 days</strong> of approval by the partners.
              </li>
              <li>
                Failure to report modifications on time may result in penalties and legal consequences.
              </li>
              <li>
                Stamp duty must be paid as per the respective state's regulations.
              </li>
              <li>
                <strong>Calzone</strong> ensures full compliance with ROC and MCA regulations, avoiding penalties and legal risks.
              </li>
            </ul>

            {/* Why Choose Calzone */}
            <h3 className="text-2xl font-bold text-navy mb-4">
              Why Choose Calzone for LLP Agreement Modifications?
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              <li>
                <strong>Hassle-Free Process</strong> – We handle document drafting, legal compliance, and ROC filings.
              </li>
              <li>
                <strong>Error-Free Documentation</strong> – Avoid rejections with our expert-prepared filings.
              </li>
              <li>
                <strong>Expert Legal Assistance</strong> – Our team of Chartered Accountants & Legal Professionals ensures accuracy.
              </li>
              <li>
                <strong>Affordable & Transparent Pricing</strong> – No hidden charges—just reliable, fast service.
              </li>
            </ul>

            <p className="mt-6 text-lg font-medium">
              Need to modify your LLP Agreement? <span className="">Contact Calzone today</span> for expert assistance!
            </p>
          </div>
        </section>
        <section className="text-white">
          <div className="">
            <h2 className="text-3xl font-bold mb-8 text-navy">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 py-4 bg-navy px-4 rounded-md mb-4">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left text-white text-lg font-medium focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default LLPAgreementChanges;
