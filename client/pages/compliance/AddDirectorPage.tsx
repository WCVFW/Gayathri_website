// import React from "react";
import { FaBuilding, FaClipboardCheck, FaFileAlt, FaFileUpload, FaIdCard, FaMapMarkerAlt, FaRegCheckCircle, FaRegFileAlt, FaSearch, FaUserCheck, FaUserPlus, FaUsersCog, FaUserTie, FaVoteYea } from "react-icons/fa";

const AddDirectorPage = () => {
  return (
    <div className="font-sans text-left">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Heading */}
          <section className="px-4 sm:px-8 lg:px-16 py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-700 mb-4 flex items-center gap-2">
              <FaUserPlus className="text-navy-700 w-6 h-6" />
              Adding a Director
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
              Adding a director to a company may seem complex, but following the correct legal
              procedures ensures a <strong>valid and compliant appointment.</strong> The process may
              vary depending on the company's structure and jurisdiction, but some general steps are
              common across all companies.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              At <strong>Calzone,</strong> we simplify the entire process, ensuring compliance with the
              <strong> Companies Act, 2013</strong> and helping businesses appoint the right directors
              with ease.
            </p>
          </section>
          {/* Sticky Navigation */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 tracking-wide leading-snug">
              Things to Know
            </h2>
            <nav className="sticky top-0 z-20 bg-white shadow-sm py-3 mb-6 border-y border-gray-200">
              <ul className="flex flex-wrap gap-4 sm:gap-6 px-4 text-sm sm:text-base font-medium text-blue-700">
                <li><a href="#AppnDir" className="hover:underline">Why Appoint</a></li>
                <li><a href="#TypeDirector" className="hover:underline">Types of Directors</a></li>
                <li><a href="#StepBStep" className="hover:underline">Step-by-Step</a></li>
                <li><a href="#AppntPro" className="hover:underline">Procedure</a></li>
                <li><a href="#Dcrequired" className="hover:underline">Documents</a></li>
                <li><a href="#Rsln" className="hover:underline">Resolution</a></li>
                <li><a href="#Why-Choose" className="hover:underline">Why Calzone</a></li>
              </ul>
            </nav>
          </div>

          {/* Sections */}
          <div id="AppnDir" className="mb-12 bg-white px-4 md:px-8 py-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-indigo-800">
              <div className="text-indigo-600" />
              Why Appoint a New Director?
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
              <li><strong>Board Expansion</strong> – To enhance leadership and decision-making.</li>
              <li><strong>Replacing a Director</strong> – Voluntary exit or unforeseen circumstances.</li>
              <li><strong>Adding Expertise</strong> – Specific skills or industry knowledge.</li>
              <li><strong>Compliance</strong> – Due to disqualification or ineligibility.</li>
              <li><strong>Ownership Changes</strong> – Shareholding or management shifts.</li>
            </ul>

            <p className="mt-4 text-gray-700 text-base">
              <strong>Calzone</strong> ensures the <strong>seamless appointment</strong> of directors,
              helping businesses maintain compliance while strengthening leadership.
            </p>
          </div>

          <div id="TypeDirector" className="mb-12 bg-white px-4 md:px-8 py-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-indigo-800">
              <FaUsersCog className="text-indigo-600" />
              Types of Directors in a Company
            </h3>

            <ul className="space-y-6 text-gray-700 text-base">
              <li>
                <p className="font-bold flex items-center gap-2">
                  <FaUserTie className="text-gray-500" /> Executive Directors
                </p>
                <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                  <li>Actively involved in the day-to-day operations of the company.</li>
                  <li>Hold titles like CEO, CFO, COO, or Managing Director.</li>
                </ul>
              </li>

              <li>
                <p className="font-bold flex items-center gap-2">
                  <FaUsersCog className="text-gray-500" /> Non-Executive Directors
                </p>
                <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                  <li>Do not participate in daily operations but provide strategic oversight.</li>
                  <li>Often serve on advisory boards or corporate committees.</li>
                </ul>
              </li>

              <li>
                <p className="font-bold flex items-center gap-2">
                  <FaUserCheck className="text-gray-500" /> Independent Directors
                </p>
                <ul className="list-disc list-inside ml-6 mt-1 text-sm">
                  <li>Non-executive directors with no financial or business ties to the company.</li>
                  <li>Appointed to protect the interests of shareholders and ensure corporate governance.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-6 text-gray-700 text-base">
              At <strong>Calzone,</strong> we help you identify the <strong>right type of director</strong> for your business needs.
            </p>
          </div>

          <div id="StepBStep" className="mb-12 bg-white px-4 md:px-8 py-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-800 flex items-center gap-2">
              <FaUserPlus className="text-indigo-600" />
              Step-by-Step Process for Adding a Director
            </h3>

            <ol className="list-decimal list-inside text-gray-700 space-y-4 text-base">
              <li className="flex gap-2">
                <FaBuilding className="text-gray-500 mt-1" />
                <div>
                  <strong>Check the Articles of Association (AOA)</strong><br />
                  Verify if the AOA permits adding a director. If not, amend it through a special resolution.
                </div>
              </li>

              <li className="flex gap-2">
                <FaRegFileAlt className="text-gray-500 mt-1" />
                <div>
                  <strong>Obtain Director's Consent</strong><br />
                  Get written consent (Form DIR-2) from the proposed director to accept the position.
                </div>
              </li>

              <li className="flex gap-2">
                <FaVoteYea className="text-gray-500 mt-1" />
                <div>
                  <strong>Pass a Board Resolution</strong><br />
                  Conduct a Board Meeting and pass a resolution approving the appointment.
                </div>
              </li>

              <li className="flex gap-2">
                <FaIdCard className="text-gray-500 mt-1" />
                <div>
                  <strong>Obtain DSC & DIN</strong><br />
                  Acquire a Digital Signature Certificate (DSC). Apply for DIN via DIR-3 if not already held.
                </div>
              </li>

              <li className="flex gap-2">
                <FaRegFileAlt className="text-gray-500 mt-1" />
                <div>
                  <strong>File Forms with ROC</strong><br />
                  File DIR-12 within 30 days of appointment and DIR-8 declaration confirming eligibility.
                </div>
              </li>

              <li className="flex gap-2">
                <FaRegCheckCircle className="text-gray-500 mt-1" />
                <div>
                  <strong>Final Compliance & Documentation</strong><br />
                  After approvals and filings, the director officially assumes office.
                </div>
              </li>
            </ol>

            <p className="mt-6 text-gray-700">
              At <strong>Calzone</strong>, we handle every step of the process, ensuring a <strong>smooth and legally compliant appointment</strong>.
            </p>
          </div>

          <div id="AppntPro" className="mb-12 bg-white px-4 md:px-8 py-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-800 flex items-center gap-2">
              <FaUsersCog className="text-indigo-600" />
              Appointment Procedure
            </h3>

            <ul className="text-gray-700 space-y-5 text-base">
              <li className="flex gap-3">
                <FaSearch className="mt-1 text-gray-500" />
                <div>
                  <strong>Identify the Need for a Director:</strong><br />
                  Triggered by resignation, business growth, or legal compliance.
                </div>
              </li>

              <li className="flex gap-3">
                <FaUserCheck className="mt-1 text-gray-500" />
                <div>
                  <strong>Identify & Evaluate Candidates:</strong><br />
                  Consider internal promotions, external hires, or industry recommendations.
                </div>
              </li>

              <li className="flex gap-3">
                <FaClipboardCheck className="mt-1 text-gray-500" />
                <div>
                  <strong>Conduct Due Diligence:</strong><br />
                  Validate qualifications, experience, and check for potential conflicts.
                </div>
              </li>

              <li className="flex gap-3">
                <FaUsersCog className="mt-1 text-gray-500" />
                <div>
                  <strong>Board Approval & General Meeting:</strong><br />
                  Director is reviewed and approved via resolution at a meeting.
                </div>
              </li>

              <li className="flex gap-3">
                <FaFileUpload className="mt-1 text-gray-500" />
                <div>
                  <strong>File Necessary Documents with ROC:</strong><br />
                  Submit consent (DIR-2), declaration (DIR-8), and appointment form (DIR-12).
                </div>
              </li>
            </ul>

            <p className="mt-6 text-gray-700">
              <strong>Calzone</strong> ensures every step is <strong>accurately and efficiently</strong> handled to avoid delays and compliance issues.
            </p>
          </div>
          <div className="space-y-12">

            {/* Documents Required */}
            <div id="procedure" className="">
              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-800 flex items-center gap-2">
                <FaUserCheck className="text-indigo-600 text-lg sm:text-xl" />
                Procedure for Appointment of Directors
              </h3>

              <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-sm sm:text-base">
                <li>
                  <strong>Identify the Need for a Director:</strong> Determine if a director is needed due to resignation, expansion, or regulatory compliance.
                </li>
                <li>
                  <strong>Identify & Evaluate Candidates:</strong> Consider internal promotions, external hiring, or industry referrals.
                </li>
                <li>
                  <strong>Conduct Due Diligence:</strong> Verify the candidate's qualifications, experience, and potential conflicts of interest.
                </li>
                <li>
                  <strong>Board Approval & General Meeting:</strong> The Board reviews the candidate and, if approved, a resolution is passed in a general meeting.
                </li>
                <li>
                  <strong>File Necessary Documents with ROC:</strong> Submit required forms, including the director's consent and declaration of eligibility.
                </li>
              </ol>

              <p className="mt-6 text-gray-700 text-sm sm:text-base">
                <strong>Calzone</strong> ensures every step is completed accurately and efficiently, avoiding delays or compliance issues.
              </p>
            </div>
            <div id="Dcrequired" className="">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-indigo-800 flex items-center gap-2">
                <FaFileAlt className="text-indigo-600 text-base sm:text-lg" />
                Documents Required for Appointing a Director
              </h3>

              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                To appoint a director, the following documents are required:
              </p>

              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <FaIdCard className="text-indigo-500 mt-1" />
                  PAN Card of the Director
                </li>
                <li className="flex items-start gap-3">
                  <FaIdCard className="text-indigo-500 mt-1" />
                  Identification Proof (Aadhaar card, Voter ID, or Driver's License)
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                  Proof of Residence (Utility bill or Rental Agreement)
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-indigo-500 mt-1" />
                  Passport-Size Photograph
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-indigo-500 mt-1" />
                  Digital Signature Certificate (DSC)
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-indigo-500 mt-1" />
                  Form DIR-2 (Consent to act as a director)
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-indigo-500 mt-1" />
                  Form DIR-12 (Appointment details filed with ROC)
                </li>
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-indigo-500 mt-1" />
                  Board Resolution for Appointment
                </li>
              </ul>

              <p className="mt-6 text-gray-700 text-sm sm:text-base">
                Our <strong>Calzone experts</strong> will assist in collecting and filing these documents to ensure a <strong>hassle-free process</strong>.
              </p>
            </div>
            {/* Appointment Resolution */}
            <div id="Rsln" className="bg-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-indigo-800 flex items-center gap-2">
                <FaUserCheck className="text-indigo-600 text-lg sm:text-xl" />
                Appointment Resolution
              </h3>

              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                A Board or Shareholder Resolution is required to appoint a director. The resolution must include:
              </p>

              <ul className="text-gray-700 space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  Director's Name
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  Appointment Date
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  Term of Appointment (if applicable)
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  Relevant Qualifications & Experience
                </li>
              </ul>

              <p className="mt-6 text-gray-700 text-sm sm:text-base">
                The resolution must be passed in accordance with the company’s AOA and, in some cases, may require shareholder approval.
              </p>

              <p className="mt-4 text-gray-700 text-sm sm:text-base">
                <strong>Calzone</strong> ensures your resolution is <strong>legally sound</strong> and properly <strong>filed with the authorities</strong> to avoid any compliance issues.
              </p>
            </div>
            {/* Why Choose Calzone */}
            <div id="Why-Choose" className="">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-indigo-800 flex items-center gap-2">
                <FaRegCheckCircle className="text-indigo-600 text-lg sm:text-xl" />
                Why Choose Calzone?
              </h3>
              <ul className="text-gray-700 space-y-4 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  <span>
                    <strong>End-to-End Support</strong> – We handle all paperwork and ROC filings from start to finish.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  <span>
                    <strong>Expert Guidance</strong> – Full compliance with the <span className="whitespace-nowrap">Companies Act, 2013.</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  <span>
                    <strong>Quick & Hassle-Free</strong> – No delays or errors during the appointment process.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-indigo-500 mt-1" />
                  <span>
                    <strong>Transparent Pricing</strong> – No hidden fees or surprise costs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddDirectorPage;
