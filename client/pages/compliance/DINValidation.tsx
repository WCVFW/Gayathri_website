import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import React from 'react';
const faqData = [
  {
    question: "1. Can I file DIR-3 KYC after the due date?",
    answer: "Yes, but you will be required to pay a late fee of ₹5,000 to reactivate your DIN.",
  },
  {
    question: "2. Can I use DIR-3 KYC Web instead of eForm DIR-3 KYC?",
    answer: "You can use DIR-3 KYC Web only if there are no changes in your contact or personal details.",
  },
  {
    question: "3. What happens if my DIN is deactivated?",
    answer: "Your DIN will remain inactive until you file DIR-3 KYC with a penalty fee.",
  },
  {
    question: "4. Can Calzone help with DIN reactivation?",
    answer: "Absolutely! Calzone handles late KYC filings and penalty payments, ensuring quick DIN reactivation.",
  },
];

const sections = [
  "DIN & DPIN",
  "eForm DIR-3",
  "KYC Process",
  "Details Required",
  "Step-by-Step",
  "Penalties",
  "Why Choose",
  "FAQs"
];

const DINValidation = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const toggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
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
    <section className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-navy">DIN Validation (DIR-3 KYC)</h1>
        <div className="sticky top-20 z-10 bg-white shadow-sm">
          <div className="flex flex-wrap max-w-screen-xl">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 transition-all duration-300 border-b-2 border-transparent bg-transparent focus:outline-none 
          text-[16px] font-bold leading-6 tracking-wide
          ${activeSection === id
                    ? 'text-green-600 border-green-600'
                    : 'text-gray-800 hover:text-green-600 hover:border-green-600'}
        `}
                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(34, 34, 34, 0.8)' }}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-navy">What is DIN & DPIN?</h2>
          <p>
            A Director Identification Number (DIN) and a Designated Partner Identification Number (DPIN) are 8-digit unique identification numbers issued to individuals appointed as:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Directors of a company</li>
            <li>Designated partners of a Limited Liability Partnership (LLP)</li>
          </ul>
          <p>
            Under Section 153 of the Companies Act, 2013, any individual intending to be appointed as a director or designated partner must apply for a DIN/DPIN through Form DIR-3 submitted to the Ministry of Corporate Affairs (MCA).
          </p>
          <p>
            <strong>Need to apply for a DIN or validate your existing DIN?</strong> Calzone ensures a smooth and error-free process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-navy">What is eForm DIR-3 KYC & Who Needs to File It?</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              In September 2019, the MCA introduced eForm DIR-3 KYC to verify the identity and address of DIN/DPIN holders through relevant KYC documentation.
            </li>
            <li>
              According to Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014, every individual holding a DIN/DPIN as of March 31 must submit eForm DIR-3 KYC by September 30.
            </li>
          </ul>
          <h3 className="text-lg font-medium">Who Must File DIR-3 KYC?</h3>
          <ul className="list-disc list-inside ml-4">
            <li>All DIN/DPIN holders, regardless of appointment status</li>
            <li>Mandatory for active/approved DINs to avoid deactivation</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-navy">DIR-3 KYC Web - A Simplified KYC Process</h2>
          <p>
            To simplify the annual KYC filing, the Ministry of Corporate Affairs (MCA) introduced <strong>DIR-3 KYC Web</strong>, allowing directors to reconfirm their existing details online without re-submitting documents.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-gray-700">Who Can Use DIR-3 KYC Web?</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Individuals who have already filed DIR-3 KYC in a previous financial year</li>
            <li>Only if there are no changes in mobile number, email ID, or personal details</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 text-gray-700">Who Needs to File eForm DIR-3 KYC Again?</h3>
          <p>If there is a change in any of the following:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Mobile number or email ID</li>
            <li>Personal details (Address, PAN, etc.)</li>
          </ul>

          <p className="text-sm text-gray-600">
            <strong>Calzone</strong> helps you determine whether you need to file <strong>DIR-3 KYC Web</strong> or <strong>eForm DIR-3 KYC</strong>, ensuring full compliance.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-navy">Details Required in DIR-3 KYC Filing</h2>
          <p>
            Every individual holding a DIN/DPIN must furnish the following details. Calzone helps you determine whether you
            need to file <strong>DIR-3 KYC Web</strong> or <strong>eForm DIR-3 KYC</strong>, ensuring full compliance.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <span className="font-medium">Personal Information:</span> Full Name (as per PAN), Father's Name, Date of Birth
            </li>
            <li>
              <span className="font-medium">Identity & Contact:</span> PAN (mandatory for Indian citizens), Mobile Number &
              Email (verified via OTP)
            </li>
            <li>
              <span className="font-medium">Address Verification:</span> Permanent & Current Address Proofs (Aadhaar, Utility
              Bills, Passport, etc.)
            </li>
            <li>
              <span className="font-medium">Additional Documents:</span> Passport (for NRIs), Voter ID, Driving License (if
              applicable)
            </li>
            <li>
              <span className="font-medium">Attestation & Verification:</span> Self-attested documents, DSC, and attestation by
              a CA, CS, or Cost Accountant
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Calzone assists in gathering and verifying all required documents for a seamless filing process.
          </p>
        </div>
        <div className="space-y-8 px-4 py-6">
          {/* Step-by-Step Process */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-navy">Step-by-Step Process for Filing DIR-3 KYC</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li>
                <strong>Download & Fill the DIR-3 KYC Form</strong><br />
                Log in to the MCA website and download eForm DIR-3 KYC. <br />
                Enter your approved DIN (if deactivated, it can be reactivated with a penalty fee).
              </li>
              <li>
                <strong>Enter Personal & Contact Details</strong><br />
                Verify PAN by clicking the “Verify PAN with Income Tax Database” option.<br />
                Enter and verify Mobile Number & Email ID via OTP.<br />
                <span className="text-sm italic text-gray-600">
                  Note: OTP can be generated up to 10 times per day and twice every 30 minutes per form.
                </span>
              </li>
              <li>
                <strong>Attach Required Documents</strong><br />
                Upload self-attested identity and address proofs.<br />
                Attach digital signature certificate (DSC).<br />
                Get the form attested by a practicing CA, CS, or Cost Accountant.
              </li>
              <li>
                <strong>Submit the Form</strong><br />
                Click the “Submit” button to complete the filing.<br />
                A Service Request Number (SRN) is generated for tracking.
              </li>
              <li>
                <strong>Acknowledgment from MCA</strong><br />
                Upon successful verification, MCA will send an approval email confirming KYC compliance.
              </li>
            </ol>
            <p className="mt-4 font-semibold">
              Calzone ensures timely filing and tracking of your DIR-3 KYC submission, preventing deactivation risks.
            </p>
          </div>

          {/* Penalties Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-navy">Penalties for Non-Filing & Late Submission of DIR-3 KYC</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li>
                If a DIN/DPIN holder fails to file DIR-3 KYC by <strong>September 30</strong>, their DIN/DPIN will be deactivated with the status:<br />
                <span className="font-semibold">“Deactivated due to Non-Filing of DIR-3 KYC”</span>
              </li>
              <li>
                <strong>How to Reactivate a Deactivated DIN?</strong><br />
                File DIR-3 KYC along with a penalty fee of <strong>₹5,000</strong>.<br />
                Once the fee is paid and verification is complete, the DIN will be reactivated.
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              Calzone ensures you never miss your deadline! Get reminders and quick filing assistance.
            </p>
          </div>
        </div>
        <div className="space-y-4 bg-white mx-auto">
          <h2 className="text-2xl font-semibold text-navy ">
            Penalties for Non-Filing & Late Submission of DIR-3 KYC
          </h2>

          <p className="text-gray-700">
            If a DIN/DPIN holder fails to file DIR-3 KYC by <span className="font-semibold">September 30</span>, their DIN/DPIN will be deactivated with the status:
          </p>

          <p className="font-semibold italic">
            “Deactivated due to Non-Filing of DIR-3 KYC”
          </p>

          <h3 className="text-lg font-medium text-gray-800 pt-2">How to Reactivate a Deactivated DIN?</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
            <li>File <span className="font-semibold">DIR-3 KYC</span> along with a penalty fee of ₹5,000.</li>
            <li>Upon successful payment and verification, the DIN will be <span className="font-semibold">reactivated</span>.</li>
          </ul>

          <p className="text-sm  font-semibold mt-4">
            Calzone ensures you never miss your deadline – get reminders and quick filing assistance!
          </p>
        </div>

        <div className="space-y-4 bg-white  mx-auto">
          <h2 className="text-2xl font-semibold text-navy" >Why Choose Calzone for DIR-3 KYC Filing?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li><span className="font-medium">End-to-End Filing Support</span> – From document collection to final submission, we handle everything.</li>
            <li><span className="font-medium">Error-Free Processing</span> – Avoid rejections and re-filings with our expert guidance.</li>
            <li><span className="font-medium">Expert Assistance</span> – Certified Chartered Accountants & Company Secretaries ensure compliance.</li>
            <li><span className="font-medium">Affordable & Transparent Pricing</span> – No hidden charges—just fast and reliable service.</li>
          </ul>
          <p className=" font-semibold mt-4">
            Need to file your DIR-3 KYC? <span className="">Contact Calzone today</span> for seamless filing assistance!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg  mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-navy">Frequently Asked Questions (FAQs)</h2>
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
                <div className="px-4 py-3 text-white bg-navy">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="font-medium">Need assistance with DIR-3 KYC? Let Calzone take care of it!</p>
        </div>
      </div>
    </section>
  );
};

export default DINValidation;