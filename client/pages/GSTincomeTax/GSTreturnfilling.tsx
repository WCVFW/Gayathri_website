import SectionNavigation from '../SectionNavigation';

const GstReturnFiling = () => {

  const sections = [
    'overview',
    'benefits',
    'who-should-file',
    'documents',
    'types',
    'process',
    'penalties',
    'why-choose',
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">GST Return Filing</h1>

      <section className="space-y-10">
        {/* Sticky Navigation */}
        <SectionNavigation sections={sections} />
        {/* Overview */}
        <div id="overview" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is GST Return Filing?</h2>
          <p className="text-gray-700">
            Goods and Services Tax (GST) return filing is a mandatory process for registered businesses in India, requiring them to report their sales, purchases, tax collected, and tax paid. This ensures transparency and enables the government to assess tax liabilities accurately.
          </p>
        </div>

        {/* Benefits */}
        <div id="benefits" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Timely GST Return Filing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Legal Compliance:</strong> Adhering to GST regulations helps businesses avoid penalties and legal complications.</li>
            <li><strong>Input Tax Credit (ITC) Eligibility:</strong> Regular filing allows businesses to claim ITC, reducing their overall tax burden.</li>
            <li><strong>Enhanced Business Credibility:</strong> Maintaining compliance boosts trust among stakeholders and customers.</li>
            <li><strong>Facilitates Seamless Operations:</strong> Proper GST management ensures uninterrupted business activities and smooth inter-state transactions.</li>
          </ul>
        </div>

        {/* Who Should File */}
        <div id="who-should-file" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs to File GST Returns?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Regular Businesses:</strong> Entities with an annual turnover exceeding the prescribed threshold.</li>
            <li><strong>Composition Scheme Dealers:</strong> Businesses availing the composition scheme with a turnover up to 1.5 crore.</li>
            <li><strong>E-commerce Operators:</strong> Platforms facilitating online sales.</li>
            <li><strong>Input Service Distributors (ISD):</strong> Entities distributing input tax credit to branches.</li>
            <li><strong>Non-Resident Taxable Persons:</strong> Individuals or businesses residing outside India but supplying goods/services within the country.</li>
          </ul>
        </div>

        {/* Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for GST Return Filing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>GSTIN:</strong> Goods and Services Tax Identification Number.</li>
            <li><strong>Sales and Purchase Invoices:</strong> Detailed records of all transactions.</li>
            <li><strong>Debit and Credit Notes:</strong> If applicable.</li>
            <li><strong>HSN/SAC Codes:</strong> Harmonized System of Nomenclature/Service Accounting Codes for goods/services.</li>
            <li><strong>Tax Payment Challans:</strong> Proof of GST payments made.</li>
            <li><strong>Bank Account Statements:</strong> For reconciliation purposes.</li>
          </ul>
        </div>

        {/* Types of GST Returns */}
        <div id="types" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Types of GST Returns and Their Due Dates</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>
              <strong>GSTR-1:</strong> Details of outward supplies (sales).<br />
              <span className="text-gray-600 text-sm">Due: 11th of next month (monthly) / 13th of the month after quarter (quarterly).</span>
            </li>
            <li>
              <strong>GSTR-3B:</strong> Summary of outward & inward supplies.<br />
              <span className="text-gray-600 text-sm">Due: 20th of the next month.</span>
            </li>
            <li>
              <strong>GSTR-4:</strong> Return for composition scheme taxpayers.<br />
              <span className="text-gray-600 text-sm">Due: 30th April (annually).</span>
            </li>
            <li>
              <strong>GSTR-9:</strong> Annual return for regular taxpayers.<br />
              <span className="text-gray-600 text-sm">Due: 31st December (annually).</span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">*Due dates are subject to government notifications. Always check the latest circulars.</p>
        </div>

        {/* GST Filing Process */}
        <div id="process" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">GST Return Filing Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Log in to the GST Portal:</strong> Access the official GST website using your credentials.</li>
            <li><strong>Navigate to 'Returns Dashboard':</strong> Under the 'Services' tab, select 'Returns' and then 'Returns Dashboard'.</li>
            <li><strong>Select the Return Period:</strong> Choose the relevant financial year and return filing period.</li>
            <li><strong>Prepare the Return:</strong> Select the appropriate return form (e.g., GSTR-1, GSTR-3B) and enter the required details.</li>
            <li><strong>Upload Invoices:</strong> Ensure all sales and purchase invoices are accurately uploaded.</li>
            <li><strong>Review and Submit:</strong> Verify the information, make necessary corrections, and submit the return.</li>
            <li><strong>Payment of Tax:</strong> If there's any tax liability, pay it through the available payment modes on the portal.</li>
            <li><strong>Filing Confirmation:</strong> After successful submission, download the acknowledgment for your records.</li>
          </ol>
        </div>

        {/* Penalties */}
        <div id="penalties" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Penalties for Late Filing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Late Fees:</strong> ₹50/day (₹25 CGST + ₹25 SGST); ₹20/day for nil returns.</li>
            <li><strong>Interest:</strong> 18% per annum on unpaid tax amount.</li>
          </ul>
        </div>

        {/* Why Choose Calzone */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for GST Return Filing?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Expert Assistance:</strong> Accurate and timely filing by professionals.</li>
            <li><strong>Compliance Assurance:</strong> Stay updated with regulations.</li>
            <li><strong>Simplified Process:</strong> We handle the complexities for you.</li>
            <li><strong>Dedicated Support:</strong> Prompt help for all GST-related queries.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GstReturnFiling;
