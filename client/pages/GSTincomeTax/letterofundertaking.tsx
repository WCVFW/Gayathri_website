'use client';


export default function LutFiling() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        Letter of Undertaking (LUT)
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">What is a Letter of Undertaking (LUT)?</h2>
        <p className="text-lg leading-relaxed">
          A Letter of Undertaking (LUT) is a formal document that enables exporters to undertake exports without the payment of Integrated Goods and Services Tax (IGST). By furnishing an LUT, exporters commit to adhering to all GST provisions, allowing for a smoother export process without the financial strain of upfront tax payments.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Benefits of Furnishing an LUT</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Tax-Free Exports:</strong> Ship goods/services without paying IGST upfront, improving cash flow.</li>
          <li><strong>Simplified Compliance:</strong> Avoid complex refund procedures for IGST.</li>
          <li><strong>Enhanced Liquidity:</strong> Funds retained can be reinvested into the business.</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Eligibility Criteria for LUT</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>GST Registration:</strong> Exporter must have a valid GST registration.</li>
          <li><strong>No Serious Offenses:</strong> Exporter must not be prosecuted for tax evasion exceeding ₹2.5 crore.</li>
        </ul>
      </section>

      {/* Documents */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for LUT Application</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li>GST Registration Certificate</li>
          <li>PAN Card of the business entity</li>
          <li>Authorized Signatory KYC details</li>
          <li>Names and addresses of two independent witnesses</li>
        </ul>
      </section>

      {/* Validity */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Validity of LUT</h2>
        <p className="text-lg leading-relaxed">
          An LUT is valid for the financial year in which it is furnished. Exporters must submit a fresh LUT each financial year to continue exporting without paying IGST.
        </p>
      </section>

      {/* Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Procedure to Furnish LUT Online</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>Log in to the GST Portal with your credentials.</li>
          <li>Navigate to: <em>Services &gt; User Services &gt; Furnish Letter of Undertaking (LUT)</em>.</li>
          <li>Select the applicable financial year.</li>
          <li>Fill in the required details including witness information.</li>
          <li>Upload any necessary supporting documents.</li>
          <li>Sign and submit the form using DSC or EVC.</li>
          <li>Note the Application Reference Number (ARN) for future reference.</li>
        </ol>
      </section>

      {/* Considerations */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Important Considerations</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Timely Submission:</strong> Submit the LUT before initiating exports to claim IGST exemption.</li>
          <li><strong>Compliance Adherence:</strong> Follow all GST rules to maintain eligibility for LUT benefits.</li>
          <li><strong>Record Maintenance:</strong> Retain all documents and acknowledgments for audits.</li>
        </ul>
      </section>
    </section>
  );
}