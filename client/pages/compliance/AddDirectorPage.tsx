// src/pages/AddDirector.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import {
//   FaUserTie,
//   FaRegClock,
//   FaCheckCircle,
//   FaClipboardList,
//   FaFileSignature,
//   FaIdCard,
// } from 'react-icons/fa';

const AddDirector = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };


  const sections = [
    'why-appoint',
    'types-of-directors',
    'step-by-step',
    'appointment-procedure',
    'required-documents',
    'board-resolution',
    'why-choose-us',
  ];


  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 ">Adding a Director</h1>
      <section className="space-y-10">
        <div id="introduction" className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Introduction</h2>
          <p className="mb-2">
            Adding a director to a company may seem complex, but following the correct legal procedures ensures a valid and compliant appointment. The process may vary depending on the company's structure and jurisdiction, but some general steps are common across all companies.
          </p>
          <p>
            At Calzone, we simplify the entire process, ensuring compliance with the Companies Act, 2013 and helping businesses appoint the right directors with ease.
          </p>
        </div>
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

        <div id="why-appoint" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Appoint a New Director?</h2>
          <p className="mb-4 text-gray-700">
            A company may need to appoint or replace a director for various strategic and regulatory reasons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Board Expansion</strong> – To enhance leadership and decision-making.</li>
            <li><strong>Replacing a Retiring or Resigning Director</strong> – Due to voluntary exit or unforeseen circumstances.</li>
            <li><strong>Adding Specialized Expertise</strong> – Appointing a director with specific skills or industry knowledge.</li>
            <li><strong>Regulatory Compliance</strong> – If a director becomes disqualified or ineligible to hold office.</li>
            <li><strong>Ownership Changes</strong> – If there is a change in shareholding structure or management.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Calzone</span> ensures the seamless appointment of directors, helping businesses maintain compliance while strengthening their leadership team.
          </p>
        </div>

        <div id="types-of-directors" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Directors in a Company</h2>
          <p className="mb-4 text-gray-700">
            Different types of directors serve unique roles within a company:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>
              <strong>Executive Directors:</strong> Actively involved in the day-to-day operations of the company.
              Typically hold titles like <em>CEO</em>, <em>CFO</em>, <em>COO</em>, or <em>Managing Director</em>.
            </li>
            <li>
              <strong>Non-Executive Directors:</strong> Not involved in daily operations but provide strategic oversight.
              Often serve on advisory boards or corporate committees.
            </li>
            <li>
              <strong>Independent Directors:</strong> Non-executive directors with no financial or business ties to the company.
              Appointed to safeguard shareholder interests and promote strong corporate governance.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Calzone</span> helps you identify and appoint the right type of director based on your company’s unique needs and compliance requirements.
          </p>
        </div>

        <div id="step-by-step" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process for Adding a Director to a Company</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            <li>
              <strong>Check the Articles of Association (AOA):</strong>
              <p className="ml-5 mt-1 text-gray-700">
                Verify if the AOA permits the appointment of new directors. If not, amend it via a special resolution.
              </p>
            </li>
            <li>
              <strong>Obtain Director's Consent:</strong>
              <p className="ml-5 mt-1 text-gray-700">
                The proposed director must provide written consent using <em>Form DIR-2</em> to accept the role.
              </p>
            </li>
            <li>
              <strong>Pass a Board Resolution:</strong>
              <p className="ml-5 mt-1 text-gray-700">
                Convene a Board Meeting and pass a resolution approving the appointment.
              </p>
            </li>
            <li>
              <strong>Obtain DSC & DIN:</strong>
              <p className="ml-5 mt-1 text-gray-700">
                The new director must get a <em>Digital Signature Certificate (DSC)</em>. If they don't have a <em>Director Identification Number (DIN)</em>, apply through <em>Form DIR-3</em>.
              </p>
            </li>
            <li>
              <strong>File Forms with the ROC:</strong>
              <p className="ml-5 mt-1 text-gray-700">
                Submit <em>Form DIR-12</em> within 30 days of appointment and <em>Form DIR-8</em> confirming no disqualification.
              </p>
            </li>
            <li>
              <strong>Compliance & Documentation:</strong>
              <p className="ml-5 mt-1 text-gray-700">
                Once filings are done, the director can officially assume their position. Maintain proper records for audit and governance.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">At Calzone</span>, we manage every step—ensuring a seamless, compliant, and stress-free director appointment process.
          </p>
        </div>

        <div id="appointment-procedure">
          <h2 className="text-2xl font-semibold mb-2">Procedure for Appointment of Directors</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Identify the Need for a Director:</strong> Resignation, expansion, or compliance.</li>
            <li><strong>Evaluate & Shortlist Candidates:</strong> Internal or external professionals.</li>
            <li><strong>Conduct Due Diligence:</strong> Check qualifications and conflicts of interest.</li>
            <li><strong>Board & Shareholder Approval:</strong> Pass resolutions at meetings.</li>
            <li><strong>ROC Filings & Documentation:</strong> Submit required forms like DIR-2, DIR-8, and DIR-12.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Calzone</strong> ensures every step is completed accurately and efficiently, avoiding delays or compliance issues.
          </p>
        </div>


        <div id="required-documents">
          <h2 className="text-2xl font-semibold mb-2">Documents Required for Appointing a Director</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>PAN Card:</strong> Government-issued identity proof.</li>
            <li><strong>Identification Proof:</strong> Aadhaar, Voter ID, or Driving License.</li>
            <li><strong>Address Proof:</strong> Utility bill or Rental Agreement.</li>
            <li><strong>Passport-size Photograph:</strong> Recent color photo.</li>
            <li><strong>Digital Signature Certificate (DSC):</strong> For online ROC filings.</li>
            <li><strong>Form DIR-2:</strong> Consent to act as a director.</li>
            <li><strong>Form DIR-12:</strong> Filed with ROC for appointment.</li>
            <li><strong>Board Resolution:</strong> Formal approval of appointment.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Calzone</strong> experts will assist in collecting and filing these documents to ensure a hassle-free and compliant process.
          </p>
        </div>


        <div id="board-resolution">
          <h2 className="text-2xl font-semibold mb-2">Resolution for the Appointment of a Director</h2>
          <p className="mb-3">
            A <strong>Board Resolution</strong> (or Shareholder Resolution) is required to formally appoint a director. The resolution should include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Director’s Name</strong></li>
            <li><strong>Date of Appointment</strong></li>
            <li><strong>Term of Appointment</strong> (if any)</li>
            <li><strong>Qualifications and Experience</strong></li>
            <li><strong>Reference to the Company’s AOA</strong></li>
          </ul>
          <p className="mt-4 text-gray-700">
            The resolution must comply with the <strong>Companies Act, 2013</strong> and the company’s AOA. In some cases, <strong>shareholder approval</strong> may be necessary.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Calzone</strong> ensures your resolutions are professionally drafted, approved, and filed, eliminating compliance risks.
          </p>
        </div>

        <div id="why-choose-us">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Calzone for Director Appointment?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>End-to-End Assistance</strong> – From documentation to ROC filing, we manage the entire process.
            </li>
            <li>
              <strong>Expert Legal Guidance</strong> – Full compliance with the Companies Act, 2013 and corporate laws.
            </li>
            <li>
              <strong>Quick & Hassle-Free Processing</strong> – Efficient execution without delays.
            </li>
            <li>
              <strong>Affordable & Transparent Pricing</strong> – No hidden fees or surprises.
            </li>
          </ul>
          <p className="mt-3 text-gray-700">
            With <strong>Calzone</strong>, director appointment becomes a smooth, worry-free process.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AddDirector;
