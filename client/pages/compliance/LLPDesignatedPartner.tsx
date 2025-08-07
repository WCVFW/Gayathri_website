import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileSignature, FaClipboardList, FaRegCheckCircle, FaGavel, FaMoneyCheckAlt, FaMinus, FaPlus } from 'react-icons/fa';

const sections = [
  "Overview",
  "Role & Responsibilities",
  "Eligibility",
  "Can't be Appointed",
  "Min & Max Partners",
  "Penalty",
  "Process",
  "Why Choose",
  "FAQs"
];

const disqualifiedReasons = [
  {
    title: 'Undischarged Insolvent',
    description: 'Individuals declared bankrupt who have not settled their debts.',
  },
  {
    title: 'Convicted for Fraud or Dishonesty',
    description: 'Includes fraud, forgery, and financial crimes.',
  },
  {
    title: 'Convicted under the Companies Act, 2013',
    description: 'Includes offenses like insider trading and fraudulent business activities.',
  },
  {
    title: 'Persons Disqualified as Directors',
    description: 'Disqualified under SEBI or court orders.',
  },
  {
    title: 'Minors (Under 18 Years Old)',
    description: 'Cannot be appointed.',
  },
  {
    title: 'Body Corporate (LLPs, Companies, Trusts, etc.)',
    description: 'Only individuals can be designated partners.',
  },
];
const faqData = [
  {
    question: 'Can a foreign national be a Designated Partner in an LLP?',
    answer: 'Yes, but at least one Designated Partner must be a resident of India.',
  },
  {
    question: 'How long does it take to add a Designated Partner?',
    answer: 'The process usually takes 10–15 working days, depending on MCA approval.',
  },
  {
    question: 'Can I remove a Designated Partner from my LLP?',
    answer: 'Yes, an LLP can remove a Designated Partner through mutual agreement and MCA approval.',
  },
  {
    question: 'How does Calzone help in the process?',
    answer: 'We handle DPIN registration, documentation, legal filings, and MCA approvals, ensuring a seamless process.',
  },
];

const LLPDesignatedPartner: React.FC = () => {
  const navigate = useNavigate();
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
    <section className="px-6 md:px-16 py-8font-poppins">
      <div className="sticky top-20 z-10 bg-white p-6 bg-white ">
        <h3 className="text-3xl font-bold  mb-6 text-navy">
          LLP Adding a Designated Partner
        </h3>
        <div className="flex flex-wrap max-w-screen-xl">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1.5 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } border-b-2 border-transparent bg-transparent focus:outline-none`}
            >
              {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
      <section className="space-y-4 p-6 bg-white">
        <h2 className="text-2xl font-semibold text-navy">Designated Partner in LLP - A Complete Guide</h2>
        <p>
          A Limited Liability Partnership (LLP) requires at least two designated partners who are responsible for
          regulatory compliance and business management. These partners must be named in the LLP agreement and have a
          Designated Partner Identification Number (DPIN).
        </p>
        <p>
          Unlike other business structures, LLPs allow flexibility, making it easy to add or remove designated
          partners without disrupting business operations.
        </p>
        <p>
          At <span className="font-semibold">Calzone</span>, we simplify the process of adding, removing, or updating
          designated partners in an LLP, ensuring 100% legal compliance with the LLP Act, 2008.
        </p>
      </section>
      <section className="space-y-6 p-6 bg-white ">
        <h2 className="text-2xl font-semibold text-navy">Role & Responsibilities of a Designated Partner in an LLP</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <FaFileSignature className="text-[#306590] mt-1 text-xl" />
            <div>
              <p className="font-semibold">Signing Statement of Account & Solvency (Form 8)</p>
              <p className="text-sm text-gray-700">Ensures the LLP remains financially compliant.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClipboardList className="text-[#306590] mt-1 text-xl" />
            <div>
              <p className="font-semibold">Filing Annual Returns</p>
              <p className="text-sm text-gray-700">
                Must be submitted within 60 days after the financial year ends to avoid a penalty exceeding ₹10,000 per Designated Partner.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaRegCheckCircle className="text-[#306590] mt-1 text-xl" />
            <div>
              <p className="font-semibold">Ensuring Compliance with MCA & ROC</p>
              <p className="text-sm text-gray-700">Responsible for filing all necessary returns and documents.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGavel className="text-[#306590] mt-1 text-xl" />
            <div>
              <p className="font-semibold">Cooperating in Government Inquiries</p>
              <p className="text-sm text-gray-700">Must provide necessary documents and information when required by regulators.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMoneyCheckAlt className="text-[#306590] mt-1 text-xl" />
            <div>
              <p className="font-semibold">Reimbursing Investigation Costs</p>
              <p className="text-sm text-gray-700">If an inspector investigates the LLP, Designated Partners bear the cost of the inquiry.</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-800">
          <span className="font-semibold">Calzone</span> ensures your Designated Partner meets all legal obligations, reducing risks of penalties or non-compliance.
        </p>
      </section>

      <section className="space-y-6 p-6 bg-white">
        <h2 className="text-2xl font-semibold text-navy">Eligibility Criteria for Becoming a Designated Partner in an LLP</h2>

        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Must be at least 18 years old.</li>
          <li>Can be an individual or body corporate (except ineligible entities - see below).</li>
          <li>Must have a valid DPIN (Designated Partner Identification Number).</li>
          <li>At least one Designated Partner must be a resident of India.</li>
          <li>Should not be involved in fraudulent activities.</li>
          <li>Must be of sound mind and not declared bankrupt in the past 5 years.</li>
          <li>Should not have unresolved financial disputes with creditors in the last 5 years.</li>
          <li>Other Designated Partners must provide a consent letter and proof of identification.</li>
          <li>
            If a Designated Partner changes their name or address, they must notify the LLP within 15 days.
            The LLP must then file Form 4 with the Registrar of Companies (ROC) within 30 days.
          </li>
        </ul>

        <p className="mt-4 text-gray-800">
          Need to add a Designated Partner? <span className="font-semibold">Calzone</span> handles the entire process efficiently and ensures compliance with MCA regulations.
        </p>
      </section>
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-navy">
          Who Cannot Be Appointed as a Designated Partner in an LLP?
        </h2>
        <p className="text-gray-700 mb-6">
          Under the LLP Act, 2008, the following individuals cannot serve as a Designated Partner:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {disqualifiedReasons.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-800">
          <strong>Calzone</strong> ensures that only legally qualified individuals are added as Designated Partners in your LLP.
        </p>
      </section>
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-navy">
          Minimum & Maximum Number of Designated Partners in an LLP
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            <strong>Minimum:</strong> 2 Designated Partners are mandatory under the LLP Act, 2008.
          </li>
          <li>
            <strong>Maximum:</strong> There is no upper limit to the number of Designated Partners in an LLP.
          </li>
          <li>
            <strong>Replacement:</strong> If a Designated Partner resigns, dies, or is removed, the LLP must appoint a replacement within 30 days.
          </li>
          <li>
            <strong>Compliance:</strong> Failure to maintain at least two Designated Partners may result in the LLP being dissolved.
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          <strong>Calzone</strong> ensures compliance with LLP partner regulations, preventing legal complications.
        </p>
      </section>
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-navy">
          Penalty for Not Appointing a Designated Partner
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            <strong>Dissolution of LLP:</strong> The Registrar of LLPs may dissolve the LLP for non-compliance.
          </li>
          <li>
            <strong>Penalty on LLP:</strong> A fine of up to ₹1 lakh can be imposed on the LLP.
          </li>
          <li>
            <strong>Penalty on Designated Partners:</strong> Each Designated Partner may be fined from ₹10,000 to ₹1 lakh.
          </li>
          <li>
            <strong>Additional Legal Consequences:</strong> Liabilities or actions under the Companies Act, 2013 may also apply.
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          <strong>Avoid penalties!</strong> Calzone ensures your LLP maintains the required number of Designated Partners at all times.
        </p>
      </section>
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold  mb-4 text-navy">
          Process for Adding a Designated Partner in an LLP
        </h2>
        <p className="text-gray-700 mb-6">
          The addition of a Designated Partner in an LLP requires MCA approval and legal documentation.
        </p>

        <h3 className="text-xl font-medium text-gray-800 mb-4">Step-by-Step Process</h3>

        <ol className="space-y-6 list-decimal list-inside text-gray-800">
          <li>
            <strong>Obtain DPIN & Digital Signature Certificate (DSC):</strong><br />
            The new partner must apply for a DPIN through Form DIR-3. A Digital Signature Certificate (DSC) is also required for legal filings. <br />
            <span className="">Calzone assists in obtaining DPIN & DSC within 24-48 hours.</span>
          </li>
          <li>
            <strong>Obtain Partner's Consent:</strong><br />
            A written consent letter from the new partner is required.
          </li>
          <li>
            <strong>Pass a Resolution in a Partner's Meeting:</strong><br />
            The LLP must pass a resolution to approve the appointment. The supplementary LLP agreement should include the new partner's name.
          </li>
          <li>
            <strong>File Form 4 with the ROC:</strong><br />
            The LLP must file Form 4 within 30 days of the appointment. Attach the resolution and partner's consent letter.
          </li>
          <li>
            <strong>File Form 3 to Update LLP Agreement:</strong><br />
            Within 30 days of appointment, file Form 3 with an updated LLP Agreement.
          </li>
          <li>
            <strong>MCA Approval & LLP Database Update:</strong><br />
            Upon successful verification, the new Designated Partner's name will appear on the MCA website.
          </li>
        </ol>

        <p className="mt-6 text-gray-700">
          <strong>Calzone ensures a smooth process</strong> for adding a Designated Partner, handling all legal filings and approvals.
        </p>
      </section>
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-navy">
          Why Choose Calzone for Designated Partner Appointments?
        </h2>

        <ul className="space-y-4 text-gray-800 text-base">
          <li>
            ✅ <strong>Complete Legal Compliance</strong> – We handle DIN/DPIN, DSC, Form 3 & 4 filings.
          </li>
          <li>
            ✅ <strong>Hassle-Free Documentation</strong> – Avoid errors with expert-prepared forms & agreements.
          </li>
          <li>
            ✅ <strong>Expert Advisory</strong> – Our Chartered Accountants & Legal Experts ensure compliance.
          </li>
          <li>
            ✅ <strong>Affordable & Transparent Pricing</strong> – No hidden costs, just fast & reliable service.
          </li>
        </ul>

        <div className="mt-6">
          <p className=" ">
            Need to add a Designated Partner? <span className="">Contact Calzone today</span> for expert assistance!
          </p>
        </div>
      </section>
      <div id="FAQs" className=" my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4 ">
          {faqData.map((faq, index) => (
            <div key={index} className="border bg-navy ">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between px-4 py-3 text-left font-medium text-white bg-navy transition "
              >
                <span>{index + 1}. {faq.question}</span>
                <span className="text-gray-600">
                  {openIndex === index ? <FaMinus className='text-white' /> : <FaPlus className='text-white' />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 border-t text-white bg-navy ">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLPDesignatedPartner;
