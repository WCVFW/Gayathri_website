'use client';


export default function GSTModification() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        GST Registration Modification
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Understanding GST Registration Modification</h2>
        <p className="text-lg leading-relaxed">
          GST registration modification refers to the process of updating or amending the details furnished during the initial GST registration. Businesses may need to modify their GST registration due to changes in business information, such as a change in business name, address, or the addition of new business premises. Timely and accurate updates ensure compliance with GST laws and maintain the accuracy of taxpayer information on the GST portal.
        </p>
      </section>

      {/* Types of Amendments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Types of Amendments</h2>
        <p className="text-lg leading-relaxed mb-2">
          Amendments to GST registration are categorized into two types:
        </p>
        <ul className="list-disc pl-5 text-lg leading-relaxed space-y-2">
          <li>
            <strong>Core Field Amendments:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Business Details: Changes to the legal name (without PAN change) or principal place.</li>
              <li>Stakeholder Information: Adding/removing partners, directors, or signatories.</li>
              <li>Principal Place of Business: Address modifications.</li>
            </ul>
          </li>
          <li>
            <strong>Non-Core Field Amendments:</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Contact Information: Update phone numbers or emails.</li>
              <li>Bank Account Details: Add or change bank information.</li>
              <li>Additional Business Locations: Add or edit extra premises.</li>
              <li>Goods/Services: Modify HSN/SAC codes or descriptions.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Procedure for Modifying GST Registration</h2>
        <ol className="list-decimal pl-5 text-lg leading-relaxed space-y-2">
          <li>Log in to the GST Portal with your credentials.</li>
          <li>
            Navigate to Amendment Section:
            <ul className="list-disc pl-5 mt-1">
              <li>Core Fields: <code>Services → Registration → Amendment of Registration Core Fields</code></li>
              <li>Non-Core Fields: <code>Services → Registration → Amendment of Registration Non-Core Fields</code></li>
            </ul>
          </li>
          <li>Select the relevant section needing modification.</li>
          <li>Update all necessary information accurately.</li>
          <li>Upload supporting documents (e.g., address proof or board resolution).</li>
          <li>Provide a clear reason for amendment.</li>
          <li>Verify and submit using DSC or EVC.</li>
          <li>Note the Application Reference Number (ARN) for tracking.</li>
        </ol>
      </section>

      {/* Documents Required */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for GST Registration Modification</h2>
        <ul className="list-disc pl-5 text-lg leading-relaxed space-y-2">
          <li>Proof of change (e.g., business name certificate, address proof).</li>
          <li>Authorization documents for new authorized signatory.</li>
          <li>Identity/address proof: PAN, Aadhaar, passport, etc.</li>
          <li>Proof of business location: rent agreement, utility bill, or consent letter.</li>
        </ul>
      </section>

      {/* Important Considerations */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Important Considerations</h2>
        <ul className="list-disc pl-5 text-lg leading-relaxed space-y-2">
          <li><strong>Timely Submission:</strong> File within 15 days of the change.</li>
          <li>
            <strong>Approval Process:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Core Field Amendments: Require tax officer approval (within 15 working days).</li>
              <li>Non-Core Field Amendments: Auto-approved upon submission.</li>
            </ul>
          </li>
          <li><strong>Changes to PAN/State:</strong> Require new registration, as GSTINs are state/PAN-specific.</li>
          <li><strong>Track Status:</strong> Use ARN to monitor amendment application progress.</li>
        </ul>
      </section>
    </section>
  );
}