'use client';

export default function GstRegistration() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        GST Registration
      </h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">What is GST Registration?</h2>
        <p className="text-lg leading-relaxed">
          GST (Goods and Services Tax) registration is a mandatory process for businesses in India that meet the turnover criteria set by the government. GST simplifies taxation by integrating multiple indirect taxes into a single framework, ensuring compliance and smooth business operations.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Benefits of GST Registration</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Legally Recognized Business:</strong> Enables seamless operations across India.</li>
          <li><strong>Input Tax Credit (ITC):</strong> Claim ITC on purchases to reduce tax burden.</li>
          <li><strong>Ease of Compliance:</strong> Simplified online tax filing process.</li>
          <li><strong>Facilitates E-Commerce:</strong> Mandatory for online sellers.</li>
          <li><strong>Competitive Edge:</strong> Enhances credibility and trustworthiness.</li>
        </ul>
      </section>

      {/* Who Needs GST Registration */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Who Needs GST Registration?</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li>Businesses with annual turnover over ₹40 lakh (₹10 lakh for special category states).</li>
          <li>E-commerce sellers or aggregators.</li>
          <li>Interstate suppliers of goods or services.</li>
          <li>Casual taxable persons (e.g., seasonal stalls or events).</li>
          <li>Input Service Distributors (ISD) and agents.</li>
          <li>Reverse charge mechanism (RCM) entities.</li>
          <li>Non-resident taxable persons (NRTPs).</li>
        </ul>
      </section>

      {/* Documents */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for GST Registration</h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <div>
            <h3 className="font-bold text-pink-500">Proprietorship Firm</h3>
            <ul className="list-disc pl-5">
              <li>PAN Card of the owner</li>
              <li>Aadhaar Card</li>
              <li>Business address proof (electricity bill, rent agreement, etc.)</li>
              <li>Bank account details (cancelled cheque or bank statement)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-500">Partnership Firm</h3>
            <ul className="list-disc pl-5">
              <li>PAN Card of firm and partners</li>
              <li>Aadhaar & Address proof of partners</li>
              <li>Partnership deed</li>
              <li>Business address proof</li>
              <li>Bank account details</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-500">Private Limited / LLP</h3>
            <ul className="list-disc pl-5">
              <li>PAN of the company</li>
              <li>Certificate of Incorporation</li>
              <li>MOA & AOA / LLP Agreement</li>
              <li>Address proof of business</li>
              <li>Director's Aadhaar, PAN & Photograph</li>
              <li>Bank details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">GST Registration Process</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>Visit the GST Official Portal.</li>
          <li>Fill Part A of Form GST REG-01 (PAN, mobile, email).</li>
          <li>Verify with OTP received on registered contacts.</li>
          <li>Submit business details including turnover.</li>
          <li>Upload identity, address, and bank documents.</li>
          <li>Receive ARN (Application Reference Number).</li>
          <li>Download your GST certificate upon approval.</li>
        </ol>
      </section>

      {/* Types of Registration */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Types of GST Registration</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Regular Registration:</strong> For businesses above turnover threshold.</li>
          <li><strong>Composition Scheme:</strong> For small businesses under ₹1.5 crore.</li>
          <li><strong>Casual Registration:</strong> For seasonal or temporary businesses.</li>
          <li><strong>Non-Resident Registration:</strong> For foreign entities operating in India.</li>
        </ul>
      </section>

      {/* GST Return Filing */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">GST Return Filing</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>GSTR-1:</strong> Monthly/quarterly return for outward supplies.</li>
          <li><strong>GSTR-3B:</strong> Monthly summary return.</li>
          <li><strong>GSTR-9:</strong> Annual return for registered businesses.</li>
          <li><strong>GSTR-4:</strong> For taxpayers under the composition scheme.</li>
        </ul>
      </section>
    </section>
  );
}