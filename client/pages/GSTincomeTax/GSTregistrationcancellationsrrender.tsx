'use client';



export default function GSTCancellation() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        GST Registration Cancellation/Surrender
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Understanding GST Registration Cancellation</h2>
        <p className="text-lg leading-relaxed">
          Cancellation or surrender of Goods and Services Tax (GST) registration refers to the formal process of deactivating a registered taxpayer's GSTIN (GST Identification Number). Once cancelled, the taxpayer is no longer required to collect or pay GST, nor file GST returns. This process is essential for businesses that have ceased operations, undergone significant changes, or no longer meet the criteria for mandatory GST registration.
        </p>
      </section>

      {/* Reasons */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Reasons for Cancelling GST Registration</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Cessation of Business Operations:</strong> Business has permanently closed.</li>
          <li><strong>Transfer of Business Ownership:</strong> Business is sold, merged, or transferred to another entity.</li>
          <li><strong>Change in Business Constitution:</strong> Legal structure has changed (e.g., partnership to proprietorship).</li>
          <li><strong>Non-Requirement Under GST:</strong> Turnover falls below the threshold and GST is no longer mandatory.</li>
          <li><strong>Death of the Sole Proprietor:</strong> Legal heirs may cancel the registration.</li>
          <li><strong>Voluntary Cancellation:</strong> Chosen by taxpayer due to restructuring or other reasons.</li>
        </ul>
      </section>

      {/* Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Procedure for Cancelling GST Registration</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>Log in to the GST Portal with your credentials.</li>
          <li>Navigate to <strong>Services → Registration → Application for Cancellation of Registration</strong>.</li>
          <li>Provide required details including:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Basic and correspondence information</li>
              <li>Reason and effective date for cancellation</li>
              <li>Whether tax invoices were issued during the period</li>
            </ul>
          </li>
          <li>Complete verification using DSC or EVC.</li>
          <li>Submit the application to receive an ARN for tracking.</li>
        </ol>
      </section>

      {/* Documents */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for GST Cancellation</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li>PAN Card of the business or proprietor</li>
          <li>Aadhaar Card of the authorized signatory</li>
          <li>GST Registration Certificate</li>
          <li>Details of the last GST return filed</li>
          <li>Proof of business closure or dissolution</li>
          <li>Recent bank account statement</li>
          <li>Authorization letter (if filed by a representative)</li>
        </ul>
      </section>

      {/* Consequences */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Consequences of GST Registration Cancellation</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Cessation of GST Obligations:</strong> No need to collect/remit GST or file returns.</li>
          <li><strong>Liability for Past Activities:</strong> Taxpayer still liable for dues incurred before cancellation.</li>
          <li><strong>Restriction on Business:</strong> Cannot make taxable supplies without GSTIN post-cancellation.</li>
        </ul>
      </section>

      {/* Revocation */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Revocation of GST Registration Cancellation</h2>
        <p className="text-lg leading-relaxed mb-4">
          If cancellation was initiated by the tax authority, the taxpayer can apply for revocation within 30 days via Form GST REG-21 on the portal.
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>File the application with valid reasons and supporting documents.</li>
          <li>Address all grounds of cancellation and ensure full compliance.</li>
          <li>Tax officer reviews the case and communicates the final decision.</li>
        </ol>
      </section>
    </section>
  );
}