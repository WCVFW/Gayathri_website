import React from "react";
import { FaBuilding, FaClipboardCheck, FaFileAlt, FaFileUpload, FaIdCard, FaMapMarkerAlt, FaRegCheckCircle, FaRegFileAlt, FaSearch, FaUserCheck, FaUserPlus, FaUsersCog, FaUserTie, FaVoteYea } from "react-icons/fa";

const AddDirectorPage = () => {
  return (
    <div className="bg-white font-sans text-left">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Heading */}
          <section>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-700 mb-6 flex items-center gap-2">
              <FaUserPlus className="text-navy-700" />
              Adding a Director
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Adding a director to a company may seem complex, but following the correct legal
              procedures ensures a <strong>valid and compliant appointment.</strong> The process may
              vary depending on the company's structure and jurisdiction, but some general steps are
              common across all companies.
            </p>
            <p className="text-lg text-gray-700">
              At <strong>Calzone,</strong> we simplify the entire process, ensuring compliance with the
              <strong> Companies Act, 2013</strong> and helping businesses appoint the right directors
              with ease.
            </p>
          </section>

          {/* Sticky Navigation */}
          <nav className="sticky top-0 z-10 bg-white shadow-sm py-3 mb-10 border-y border-gray-200">
            <ul className="flex flex-wrap gap-6 justify-start text-sm font-medium text-blue-700">
              <li><a href="#AppnDir" className="hover:underline">Why Appoint</a></li>
              <li><a href="#TypeDirector" className="hover:underline">Types of Directors</a></li>
              <li><a href="#StepBStep" className="hover:underline">Step-by-Step</a></li>
              <li><a href="#AppntPro" className="hover:underline">Procedure</a></li>
              <li><a href="#Dcrequired" className="hover:underline">Documents</a></li>
              <li><a href="#Rsln" className="hover:underline">Resolution</a></li>
              <li><a href="#Why-Choose" className="hover:underline">Why Calzone</a></li>
            </ul>
          </nav>

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
            <div id="Dcrequired" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800 flex items-center gap-2">
                <FaFileAlt className="text-indigo-600" />
                Documents Required
              </h3>
              <ul className="text-gray-700 space-y-3 text-base">
                <li className="flex items-start gap-3"><FaIdCard className="text-gray-500 mt-1" /> PAN Card</li>
                <li className="flex items-start gap-3"><FaIdCard className="text-gray-500 mt-1" /> ID Proof (Aadhaar, Voter ID, etc.)</li>
                <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-gray-500 mt-1" /> Address Proof (Utility Bill, Rent Agreement)</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Passport-size Photo</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> DSC (Digital Signature Certificate)</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Form DIR-2 (Consent to act)</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Form DIR-12 (Appointment filing)</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Board Resolution copy</li>
              </ul>
              <p className="mt-6 text-gray-700">
                Our <strong>Calzone experts</strong> assist in collecting and filing all required documents to ensure a <strong>hassle-free process</strong>.
              </p>
            </div>

            {/* Appointment Resolution */}
            <div id="Rsln" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800 flex items-center gap-2">
                <div className="text-indigo-600" />
                Appointment Resolution
              </h3>
              <p className="text-gray-700 mb-4">A resolution must include:</p>
              <ul className="text-gray-700 space-y-3 text-base">
                <li className="flex items-start gap-3"><FaUserCheck className="text-gray-500 mt-1" /> Director's Name</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Appointment Date</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Term (if applicable)</li>
                <li className="flex items-start gap-3"><div className="text-gray-500 mt-1" /> Qualifications & Experience</li>
              </ul>
              <p className="mt-6 text-gray-700">
                <strong>Calzone</strong> ensures your resolution is <strong>legally sound</strong> and properly <strong>filed with the authorities</strong>.
              </p>
            </div>

            {/* Why Choose Calzone */}
            <div id="Why-Choose" className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800 flex items-center gap-2">
                <FaRegCheckCircle className="text-indigo-600" />
                Why Choose Calzone?
              </h3>
              <ul className="text-gray-700 space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <div className="text-gray-500 mt-1" />
                  <span><strong>End-to-End Support</strong> – We handle all paperwork and filings from start to finish.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-gray-500 mt-1" />
                  <span><strong>Expert Guidance</strong> – We ensure full compliance with the Companies Act, 2013.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCheck className="text-gray-500 mt-1" />
                  <span><strong>Quick & Hassle-Free</strong> – No delays or errors during appointment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-gray-500 mt-1" />
                  <span><strong>Transparent Pricing</strong> – No hidden charges or last-minute surprises.</span>
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
