'use client';



export default function Form15CA15CBGuide() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        Form 15CA & 15CB Filing – Complete Guide
      </h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          When making payments to a non-resident, tax deduction at source (TDS) is a crucial compliance requirement. To ensure proper tax deduction and reporting, the Indian Income Tax Department mandates the filing of Form 15CA and Form 15CB before remitting payments abroad.
        </p>
        <p>
          At <strong>Calzone</strong>, we simplify Form 15CA & 15CB filing, ensuring accurate tax compliance, quick processing, and hassle-free online filing.
        </p>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">What is Form 15CA?</h2>
        <p>
          Form 15CA is a declaration submitted by a remitter before making foreign remittances. It confirms that TDS has been deducted and reported to the Income Tax Department.
        </p>
        <ul className="list-disc list-inside">
          <li>Ensures tax compliance on payments to non-residents</li>
          <li>Acts as proof of TDS deduction</li>
          <li>Helps the government track foreign transactions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">What is Form 15CB?</h2>
        <p>
          Form 15CB is a certificate issued by a Chartered Accountant confirming:
        </p>
        <ul className="list-disc list-inside">
          <li>The remittance is classified correctly</li>
          <li>Correct TDS rate is applied under Section 195</li>
          <li>DTAA provisions are followed</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">When is Form 15CA & 15CB Required?</h2>
        <table className="w-full mt-4 table-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-pink-100">
              <th className="border px-4 py-2 text-left">Scenario</th>
              <th className="border px-4 py-2 text-left">Form 15CA</th>
              <th className="border px-4 py-2 text-left">Form 15CB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Taxable remittance</td>
              <td className="border px-4 py-2">Yes</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Remittance  ₹5 lakh</td>
              <td className="border px-4 py-2">Yes</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Non-taxable remittance</td>
              <td className="border px-4 py-2">Yes (Part D)</td>
              <td className="border px-4 py-2">No</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Remittance ≤ ₹5 lakh</td>
              <td className="border px-4 py-2">Yes (Part A)</td>
              <td className="border px-4 py-2">No</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">RBI Exemptions</td>
              <td className="border px-4 py-2">No</td>
              <td className="border px-4 py-2">No</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">Different Parts of Form 15CA</h2>
        <ul className="list-disc list-inside">
          <li><strong>Part A:</strong> Remittance ≤ ₹5 lakh</li>
          <li><strong>Part B:</strong> Remittance  ₹5 lakh with AO certificate</li>
          <li><strong>Part C:</strong> Remittance  ₹5 lakh with Form 15CB</li>
          <li><strong>Part D:</strong> Remittance not chargeable to tax</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">How to File Form 15CA Online?</h2>
        <ol className="list-decimal list-inside">
          <li>Login to <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">incometax.gov.in</a></li>
          <li>Go to <strong>e-File &gt; Income Tax Forms</strong></li>
          <li>Select Form 15CA and the applicable part</li>
          <li>Fill in Remitter, Recipient, Remittance & TDS details</li>
          <li>Submit and verify the form</li>
          <li>View or withdraw within 7 days if needed</li>
        </ol>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">How to File Form 15CB Online?</h2>
        <ol className="list-decimal list-inside">
          <li>Login to portal and add your CA under <strong>Authorized Partners</strong></li>
          <li>Assign Form 15CB for preparation</li>
          <li>CA fills and signs it digitally</li>
          <li>You approve Form 15CB</li>
          <li>Proceed to file Form 15CA</li>
        </ol>

        <h2 className="text-2xl font-semibold text-pink-600 mt-10">Why Choose Calzone for 15CA & 15CB Filing?</h2>
        <ul className="list-disc list-inside">
          <li><strong>Expert CAs:</strong> Certified professionals to handle filing</li>
          <li><strong>100% Online Process:</strong> No paperwork, fast & efficient</li>
          <li><strong>Compliance Assurance:</strong> We ensure full Section 195 compliance</li>
          <li><strong>DTAA Optimization:</strong> Save tax via treaty benefits</li>
          <li><strong>Timely Filing:</strong> Avoid penalties, remit with peace of mind</li>
        </ul>
      </section>
    </div>
  );
}