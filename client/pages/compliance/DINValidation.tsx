// import React from 'react';

const DINValidation = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-navy">DIN Validation (DIR-3 KYC)</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What is DIN & DPIN?</h2>
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
          <h2 className="text-2xl font-semibold">What is eForm DIR-3 KYC & Who Needs to File It?</h2>
          <p>
            In September 2019, the MCA introduced eForm DIR-3 KYC to verify the identity and address of DIN/DPIN holders through relevant KYC documentation.
          </p>
          <p>
            According to Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014, every individual holding a DIN/DPIN as of March 31 must submit eForm DIR-3 KYC by September 30.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>All DIN/DPIN holders, regardless of appointment status</li>
            <li>Mandatory for active/approved DINs to avoid deactivation</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">DIR-3 KYC Web - A Simplified KYC Process</h2>
          <p>MCA allows online reconfirmation through DIR-3 KYC Web:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Available for individuals who have filed previously</li>
            <li>No changes in mobile, email, or personal details</li>
          </ul>
          <p>
            If there is a change, eForm DIR-3 KYC must be filed again.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Details Required in DIR-3 KYC Filing</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Full Name (as per PAN), Father's Name, DOB</li>
            <li>PAN, Mobile & Email (verified via OTP)</li>
            <li>Permanent & Current Address Proofs</li>
            <li>Passport (for NRIs), Voter ID, Driving License</li>
            <li>Self-attested identity docs, DSC, certification by CA/CS/CMA</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Step-by-Step Process for Filing DIR-3 KYC</h2>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>Download & fill DIR-3 KYC from MCA website</li>
            <li>Enter DIN, verify PAN, mobile & email via OTP</li>
            <li>Attach identity/address proofs, DSC, attestation</li>
            <li>Submit the form online (SRN is generated)</li>
            <li>Receive MCA acknowledgment email</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Penalties for Non-Filing & Late Submission</h2>
          <p>
            If not filed by September 30, DIN will be deactivated:
          </p>
          <p className="font-semibold">“Deactivated due to Non-Filing of DIR-3 KYC”</p>
          <p>
            Reactivation requires DIR-3 KYC submission and ₹5,000 penalty.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Choose Calzone for DIR-3 KYC Filing?</h2>
          <ul className="list-disc list-inside ml-4">
            <li>End-to-End Support – From start to submission</li>
            <li>Expert Filing – Avoid rejections and delays</li>
            <li>Verified by CA/CS – For full compliance</li>
            <li>Transparent Pricing – No hidden charges</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions (FAQs)</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Can I file DIR-3 KYC after the due date?</li>
            <li>Can I use DIR-3 KYC Web instead of eForm?</li>
            <li>What happens if my DIN is deactivated?</li>
            <li>Can Calzone help with DIN reactivation?</li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="font-medium">Need assistance with DIR-3 KYC? <span className="text-navy font-semibold">Let Calzone take care of it!</span></p>
        </div>
      </div>
    </section>
  );
};

export default DINValidation;