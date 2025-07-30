'use client';



export default function EWayBill() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 font-inter text-gray-800">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        GST E-Way Bill
      </h1>
      <p className="text-lg text-center mb-12 text-gray-700">
        Meaning, Rules, Compliance, and More
      </p>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">What is a GST E-Way Bill?</h2>
        <p className="text-lg leading-relaxed">
          An Electronic Way Bill (E-Way Bill) is a mandatory document under the Goods and Services Tax (GST) regime in India, required for the movement of goods exceeding a specified value. It serves as a compliance mechanism, ensuring that goods being transported adhere to GST laws and facilitating the tracking of goods in transit. The E-Way Bill is generated electronically on the GST portal before the commencement of movement of goods.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Key Features of the GST E-Way Bill</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Digital Compliance:</strong> Replaces paper documentation with a digital system.</li>
          <li><strong>Real-Time Tracking:</strong> Allows authorities to monitor goods movement instantly.</li>
          <li><strong>Nationwide Applicability:</strong> Applies uniformly across all Indian states.</li>
        </ul>
      </section>

      {/* When Required */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">When is an E-Way Bill Required?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Required when consignment value exceeds ₹50,000:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>In Relation to Supply:</strong> For goods supplied in the course of business.</li>
          <li><strong>Other Than Supply:</strong> For returns, job work, exhibitions, etc.</li>
          <li><strong>From Unregistered Person:</strong> Registered recipients must comply when sourcing from unregistered suppliers.</li>
        </ul>
      </section>

      {/* Who Should Generate */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Who Should Generate the E-Way Bill?</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Registered Person:</strong> As consignor or consignee using own/hired transport, rail, air, or vessel.</li>
          <li><strong>Unregistered Person:</strong> Recipient ensures compliance.</li>
          <li><strong>Transporter:</strong> If no one generates, transporter must do so when value exceeds ₹50,000.</li>
        </ul>
      </section>

      {/* Validity */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Validity of the E-Way Bill</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Up to 100 km:</strong> Valid for 1 day</li>
          <li><strong>Every additional 100 km or part thereof:</strong> Add 1 day</li>
        </ul>
        <p className="text-lg mt-2">Validity starts from the time the E-Way Bill is generated.</p>
      </section>

      {/* Required Documents */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Documents Required for Generating an E-Way Bill</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li>Invoice/Bill of Supply/Delivery Challan</li>
          <li>Transporter ID or Vehicle Number</li>
          <li>Transport Document Number (GRN, Railway Receipt, Airway Bill, Bill of Lading)</li>
        </ul>
      </section>

      {/* Generation Procedure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">How to Generate an E-Way Bill Online</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg leading-relaxed">
          <li>Log in to the GST Portal and access the E-Way Bill system.</li>
          <li>Select "Generate E-Way Bill".</li>
          <li>Fill in consignor, consignee, goods, HSN code, quantity, and transport details.</li>
          <li>Verify and submit to generate the E-Way Bill.</li>
          <li>Print or carry a digital copy during transit.</li>
        </ol>
      </section>

      {/* Penalties */}
      <section>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Compliance and Penalties</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
          <li><strong>Monetary Fine:</strong> Minimum ₹10,000 or tax evaded amount, whichever is higher.</li>
          <li><strong>Detention/Seizure:</strong> Goods and transport vehicles may be seized.</li>
        </ul>
        <p className="text-lg mt-2">Ensure timely and accurate generation to avoid penalties.</p>
      </section>
    </section>
  );
}