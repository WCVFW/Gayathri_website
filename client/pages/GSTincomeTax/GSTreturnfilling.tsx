'use client';

export default function GstReturnFiling() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        GST Return Filing
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">What is GST Return Filing?</h2>
        <p className="text-lg leading-relaxed">
          Goods and Services Tax (GST) return filing is a mandatory process for registered businesses in India, requiring them to report their sales, purchases, tax collected, and tax paid. This ensures transparency and enables the government to assess tax liabilities accurately.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Benefits of Timely GST Return Filing</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Legal Compliance:</strong> Avoid penalties and legal complications.</li>
          <li><strong>Input Tax Credit (ITC) Eligibility:</strong> Claim ITC and reduce tax burden.</li>
          <li><strong>Enhanced Business Credibility:</strong> Build trust among stakeholders.</li>
          <li><strong>Facilitates Seamless Operations:</strong> Ensure smooth interstate transactions.</li>
        </ul>
      </section>

      {/* Who Needs to File */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Who Needs to File GST Returns?</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Regular Businesses:</strong> Annual turnover above the threshold.</li>
          <li><strong>Composition Scheme Dealers:</strong> Turnover up to ₹1.5 crore.</li>
          <li><strong>E-commerce Operators:</strong> Platforms facilitating online sales.</li>
          <li><strong>Input Service Distributors (ISD):</strong> Entities distributing ITC.</li>
          <li><strong>Non-Resident Taxable Persons:</strong> Foreign suppliers operating in India.</li>
        </ul>
      </section>

      {/* Documents Required */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for GST Return Filing</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li>GSTIN (Goods and Services Tax Identification Number)</li>
          <li>Sales and Purchase Invoices</li>
          <li>Debit and Credit Notes (if applicable)</li>
          <li>HSN/SAC Codes</li>
          <li>Tax Payment Challans</li>
          <li>Bank Account Statements</li>
        </ul>
      </section>

      {/* Types of Returns */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Types of GST Returns and Their Due Dates</h2>
        <div className="space-y-4 text-lg leading-relaxed">
          <div>
            <strong>GSTR-1:</strong> Details of outward supplies (sales).<br />
            <span className="text-gray-600">Due: 11th of next month (monthly) / 13th of the month after quarter (quarterly).</span>
          </div>
          <div>
            <strong>GSTR-3B:</strong> Summary of outward & inward supplies.<br />
            <span className="text-gray-600">Due: 20th of the next month.</span>
          </div>
          <div>
            <strong>GSTR-4:</strong> Return for composition scheme taxpayers.<br />
            <span className="text-gray-600">Due: 30th April (annually).</span>
          </div>
          <div>
            <strong>GSTR-9:</strong> Annual return for regular taxpayers.<br />
            <span className="text-gray-600">Due: 31st December (annually).</span>
          </div>
          <p className="text-sm text-gray-500">*Due dates are subject to government notifications. Always check the latest circulars.</p>
        </div>
      </section>

      {/* Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">GST Return Filing Process</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>Log in to the official GST portal using your credentials.</li>
          <li>Navigate to the ‘Returns Dashboard’ under the 'Services' tab.</li>
          <li>Select the return period and financial year.</li>
          <li>Choose the appropriate return form and enter transaction details.</li>
          <li>Upload all required sales and purchase invoices.</li>
          <li>Review and verify the information, then submit the return.</li>
          <li>Pay any outstanding tax using the payment options available.</li>
          <li>Download the filing acknowledgment for your records.</li>
        </ol>
      </section>

      {/* Penalties */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Penalties for Late Filing</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Late Fees:</strong> ₹50/day (₹25 CGST + ₹25 SGST); ₹20/day for nil returns.</li>
          <li><strong>Interest:</strong> 18% per annum on unpaid tax amount.</li>
        </ul>
      </section>

      {/* Why Choose */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why Choose Calzone for GST Return Filing?</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Expert Assistance:</strong> Accurate and timely filing by professionals.</li>
          <li><strong>Compliance Assurance:</strong> Stay updated with regulations.</li>
          <li><strong>Simplified Process:</strong> We handle the complexities for you.</li>
          <li><strong>Dedicated Support:</strong> Prompt help for all GST-related queries.</li>
        </ul>
      </section>
    </section>
  );
}