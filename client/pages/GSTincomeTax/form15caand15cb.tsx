import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Form15CA15CB = () => {
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
    'form15cb',
    'form15ca15cb',
    'different-parts',
    'how-to-file',
    'why-choose',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Form 15CA & 15CB Filing</h1>

      <section className="space-y-10">
        <div className="sticky top-20 z-10 bg-white shadow-sm">
          <div className="flex flex-wrap max-w-screen-xl">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                  activeSection === id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } border-b-2 border-transparent bg-transparent focus:outline-none`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Section: Overview */}
        <div id="overview" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is Form 15CA?</h2>
          <p className="text-gray-700 mb-4">
            Form 15CA is a declaration submitted by a remitter (payer) before making foreign remittances to non-residents. 
            This declaration confirms that TDS has been deducted on the payment, if applicable, and is reported to the Income Tax Department.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Ensures tax compliance on payments made to non-residents</li>
            <li>Acts as proof of TDS deduction before remittance</li>
            <li>Helps the government track foreign transactions</li>
          </ul>
          <p className="mt-2 text-gray-700">Filing Form 15CA is mandatory before making remittances that are taxable under the Income Tax Act.</p>
        </div>

        {/* Section: Form 15CB */}
        <div id="form15cb" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">What is Form 15CB?</h2>
          <p className="text-gray-700 mb-4">
            Form 15CB is a certificate issued by a Chartered Accountant (CA) before filing Form 15CA, confirming that:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>The nature of the remittance is specified correctly</li>
            <li>The correct TDS rate is applied under Section 195</li>
            <li>Double Taxation Avoidance Agreement (DTAA) provisions are complied with</li>
            <li>The transaction adheres to Indian tax laws</li>
          </ul>
        </div>

        {/* Section: Form 15CA & 15CB Requirement */}
        <div id="form15ca15cb" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">When is Form 15CA & 15CB Required?</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Scenario</th>
                  <th className="px-4 py-2">Form 15CA</th>
                  <th className="px-4 py-2">Form 15CB</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Remittance is taxable under Income Tax Act</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Remittance exceeds ₹5 lakh in a financial year</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Remittance is non-taxable</td>
                  <td className="px-4 py-2">Yes (Part D)</td>
                  <td className="px-4 py-2">No</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Remittance below ₹5 lakh</td>
                  <td className="px-4 py-2">Yes (Part A)</td>
                  <td className="px-4 py-2">No</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Exempted by RBI</td>
                  <td className="px-4 py-2">No</td>
                  <td className="px-4 py-2">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: Different Parts */}
        <div id="different-parts" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Different Parts of Form 15CA</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Part A:</strong> For remittances ≤ ₹5 lakh in a financial year</li>
            <li><strong>Part B:</strong> Remittance  ₹5 lakh and order/certificate from AO obtained</li>
            <li><strong>Part C:</strong> Remittance  ₹5 lakh with Form 15CB from CA</li>
            <li><strong>Part D:</strong> When remittance is not chargeable to tax</li>
          </ul>
        </div>

        {/* Section: How to File */}
        <div id="how-to-file" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">How to File Form 15CA & 15CB Online</h2>

          <h3 className="font-semibold text-green-600 mt-4 mb-2">Form 15CA Filing</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Visit <a href="https://www.incometax.gov.in/" className="text-blue-600 underline" target="_blank" rel="noreferrer">incometax.gov.in</a> and log in.</li>
            <li>Go to "e-File" → "Income Tax Forms" → Select Form 15CA.</li>
            <li>Choose the appropriate Part (A, B, C, or D).</li>
            <li>Fill in remitter, recipient, remittance, and TDS details.</li>
            <li>Submit the form after verification.</li>
            <li>To withdraw: Go to "My Account" → "View Form 15CA" (within 7 days).</li>
          </ol>

          <h3 className="font-semibold text-green-600 mt-6 mb-2">Form 15CB Filing</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Log in and go to "Authorised Partners" → "My Chartered Accountant".</li>
            <li>Add your CA using their membership number.</li>
            <li>Assign Form 15CB to the CA.</li>
            <li>CA fills in payment nature, TDS rate, DTAA applicability, and signs using DSC.</li>
            <li>Approve Form 15CB from your dashboard under “Pending Actions”.</li>
            <li>After approval, complete Form 15CA filing.</li>
          </ol>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for Form 15CA & 15CB Filing?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Expert Chartered Accountants:</strong> Form 15CB certified by experienced professionals.</li>
            <li><strong>Quick & Hassle-Free:</strong> 100% online and paperless process.</li>
            <li><strong>Compliance Guaranteed:</strong> We ensure proper Section 195 adherence.</li>
            <li><strong>DTAA Guidance:</strong> Reduce TDS using treaty provisions.</li>
            <li><strong>Timely Filing:</strong> No last-minute penalties or delays.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Form15CA15CB;
