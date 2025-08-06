import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EwayBill = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(section);
        }, 200);
      }
    }
  }, [location.search]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };

  const sections: string[] = [
    'overview',
    'features',
    'requirement',
    'who',
    'validity',
    'documents',
    'generate',
    'penalties',
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">GST E-Way Bill</h1>
      <p className="text-gray-700 mb-8">
        GST E-Way Bill: Meaning, Rules, Compliance, and More
      </p>

      <section className="space-y-10">
        {/* Sticky Nav */}
        <div className="sticky top-20 z-10 bg-white shadow-sm">
          <div className="flex flex-wrap max-w-screen-xl">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                  } border-b-2 border-transparent bg-transparent focus:outline-none`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}

        {/* Overview */}
        <div id="overview" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is a GST E-Way Bill?</h2>
          <p className="text-gray-700">
           An Electronic Way Bill (E-Way Bill) is a mandatory document under the Goods and Services Tax (GST) regime in India, required for the movement of goods exceeding a specified value. It serves as a compliance mechanism, ensuring that goods being transported adhere to GST laws and facilitating the tracking of goods in transit. The E-Way Bill is generated electronically on the GST portal before the commencement of movement of goods.
          </p>
        </div>

        <div id="features" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features of the GST E-Way Bill</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>Digital Compliance:</strong> The E-Way Bill system replaces traditional paper-based documentation with a digital interface, streamlining the process of goods movement.
            </li>
            <li>
              <strong>Real-Time Tracking:</strong> Authorities can monitor the movement of goods in real-time, reducing tax evasion and ensuring compliance.
            </li>
            <li>
              <strong>Nationwide Applicability:</strong> The E-Way Bill system is uniform across all states in India, promoting consistency in goods transportation.
            </li>
          </ul>
        </div>


        {/* Requirement */}
        <div id="requirement" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">When is an E-Way Bill Required?</h2>
          <p className="text-gray-700 mb-4">
            An E-Way Bill is required when there is a movement of goods of consignment value exceeding ₹50,000 in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>In Relation to a Supply:</strong> For goods supplied in the course of business.
            </li>
            <li>
              <strong>For Reasons Other Than Supply:</strong> Such as returns, job work, or exhibitions.
            </li>
            <li>
              <strong>Due to Inward Supply from an Unregistered Person:</strong> When a registered entity receives goods from an unregistered supplier.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            However, certain goods and specific situations may be exempt from the requirement of generating an E-Way Bill.
          </p>
        </div>

        {/* Who */}
        <div id="who" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Should Generate the E-Way Bill?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <strong>Registered Person:</strong> If you are a consignor or consignee transporting goods in your own or hired conveyance, by railways, by air, or by vessel, you must generate the E-Way Bill.
            </li>
            <li>
              <strong>Unregistered Person:</strong> If an unregistered person supplies goods to a registered recipient, the recipient must ensure that all compliance requirements are met.
            </li>
            <li>
              <strong>Transporter:</strong> If the supplier or recipient has not generated the E-Way Bill and the value of goods is more than ₹50,000, the transporter carrying the goods by road must generate the E-Way Bill.
            </li>
          </ul>
        </div>


        {/* Validity */}
        <section className="px-4 py-8 bg-white text-gray-800">
          {/* Validity */}
          <p>The validity of an E-Way Bill depends on the distance the goods have to be transported:</p>
          <div id="validity" className="my-6">
            <h2 className="text-2xl font-semibold mb-4">Validity of the E-Way Bill</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Up to 100 km:</strong> Valid for 1 day.</li>
              <li><strong>Every additional 100 km or part thereof:</strong> Adds 1 day.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Validity starts from the time of E-Way Bill generation.
            </p>
          </div>

          {/* Documents */}
          <div id="documents" className="my-6">
            <h2 className="text-2xl font-semibold mb-4">Documents Required for Generating an E-Way Bill</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Invoice / Bill of Supply / Delivery Challan</li>
              <li>Transporter ID or Vehicle Number</li>
              <li>
                Transport Document Number (Goods Receipt, Railway Receipt, Airway Bill,
                or Bill of Lading)
              </li>
            </ul>
          </div>
        </section>

        {/* Generate */}
        {/* How to Generate an E-Way Bill Online */}
        <div id="generate" className="my-10">
          <h2 className="text-3xl font-bold mb-5">How to Generate an E-Way Bill Online</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-800 text-base leading-relaxed">
            <li><span className="font-medium">Log in:</span> Access the E-Way Bill system through the official GST portal.</li>
            <li><span className="font-medium">Generate:</span> Navigate to the <em>‘Generate E-Way Bill’</em> option on the dashboard.</li>
            <li><span className="font-medium">Enter Details:</span> Fill in consignor and consignee details, goods description, HSN code, quantity, and transport information.</li>
            <li><span className="font-medium">Submit:</span> Verify and submit the form to generate your E-Way Bill.</li>
            <li><span className="font-medium">Print or Carry:</span> Keep a printed or digital copy with the goods during transit.</li>
          </ol>
        </div>

        {/* Compliance and Penalties */}
        <div id="penalties" className="my-10">
          <h2 className="text-3xl font-bold mb-5">Compliance and Penalties</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base leading-relaxed">
            <li><strong>Monetary Fines:</strong> A minimum of ₹10,000 or the tax evaded—whichever is higher.</li>
            <li><strong>Detention and Seizure:</strong> Non-compliance may lead to confiscation of goods and the transporting vehicle.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Tip:</strong> Always generate and carry the E-Way Bill to avoid penalties and ensure smooth logistics.
          </p>
        </div>

      </section>
    </div>
  );
};

export default EwayBill;
