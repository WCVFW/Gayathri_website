import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EsiRegistration = () => {
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
    'who-needs-it',
    'benefits',
    'documents',
    'process',
    'compliance',
    'non-compliance',
    'why-choose',
  ];

  return (
    <div className="px-6 md:px-16 py-8 font-poppins">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">ESI Registration</h1>

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
          <h2 className="text-2xl font-semibold mb-4">What is ESI Registration?</h2>
          <p className="text-gray-700">
            Employee State Insurance (ESI) is a self-financing social security scheme initiated by the Government of India to provide medical and financial benefits to employees. The scheme is managed by the Employee State Insurance Corporation (ESIC) under the Ministry of Labour and Employment.
          </p>
        </div>

        {/* Section: Who Needs It */}
        <div id="who-needs-it" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Who Needs ESI Registration?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              Businesses with 10 or more employees (20 in some states) earning a salary of up to ₹21,000 per month (₹25,000 for persons with disabilities).
            </li>
            <li>
              Applicable to factories, commercial establishments, restaurants, cinemas, educational institutions, and shops meeting the employee threshold.
            </li>
            <li>
              Employees under the scheme contribute <strong>0.75%</strong> of their wages, while employers contribute <strong>3.25%</strong>.
            </li>
          </ul>
        </div>

        {/* Section: Benefits */}
        <div id="benefits" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Benefits of ESI Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Medical Benefits:</strong> Comprehensive medical care for employees and their dependents.</li>
            <li><strong>Sickness Benefits:</strong> Employees receive 70% of their wages during medical leave.</li>
            <li><strong>Maternity Benefits:</strong> Paid maternity leave for women employees.</li>
            <li><strong>Disability Benefits:</strong> Financial aid for temporary or permanent disabilities.</li>
            <li><strong>Dependent Benefits:</strong> Family pension in case of the employee’s death due to occupational hazards.</li>
            <li><strong>Funeral Expenses:</strong> Financial assistance for funeral costs.</li>
            <li><strong>Unemployment Allowance:</strong> Support in case of job loss due to closure or retrenchment.</li>
          </ul>
        </div>

        {/* Section: Documents */}
        <div id="documents" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Documents Required for ESI Registration</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Business Registration:</strong> GST Certificate, Shops & Establishment Act or Factories Act Registration, MOA/AOA or Partnership Deed.</li>
            <li><strong>Employer’s Details:</strong> PAN Card, Address Proof.</li>
            <li><strong>Employee’s Details:</strong> PAN, Aadhaar, salary breakup, family details, nominee info.</li>
            <li><strong>Bank Details:</strong> Cancelled cheque of employer’s bank account.</li>
            <li><strong>Digital Signature Certificate (DSC):</strong> Required for authentication.</li>
          </ul>
        </div>

        {/* Section: Process */}
        <div id="process" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">ESI Registration Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li><strong>Online Application:</strong> Visit <a href="https://www.esic.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">esic.gov.in</a> and click on 'Sign Up'.</li>
            <li><strong>Form Submission:</strong> Log in and fill Form-1 with employee and employer details.</li>
            <li><strong>Upload Documents:</strong> Attach all required scanned documents.</li>
            <li><strong>ESI Code Generation:</strong> Receive a unique ESI Code Number after successful submission.</li>
            <li><strong>Employee Enrollment:</strong> Add employee details in the ESIC system.</li>
            <li><strong>Monthly Contributions:</strong> Deposit ESI contributions before the 15th of every month.</li>
          </ol>
        </div>

        {/* Section: Compliance */}
        <div id="compliance" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Compliance & Post-Registration Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Maintain Records:</strong> Detailed employee wage and contribution records.</li>
            <li><strong>Timely Payments:</strong> Monthly contributions must be paid on time to avoid penalties.</li>
            <li><strong>Inspections:</strong> Cooperate during ESIC audits or inspections.</li>
            <li><strong>Returns:</strong> File half-yearly ESI returns (April–September and October–March).</li>
          </ul>
        </div>

        {/* Section: Non-Compliance */}
        <div id="non-compliance" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Penalties for Non-Compliance</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Delayed Payment:</strong> Interest at 12% per annum on late contributions.</li>
            <li><strong>False Information:</strong> Fines or legal consequences for misreporting.</li>
            <li><strong>Non-payment:</strong> May lead to prosecution under the ESI Act.</li>
          </ul>
        </div>

        {/* Section: Why Choose */}
        <div id="why-choose" className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for ESI Registration?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Hassle-Free Process:</strong> Our experts handle the complete registration and documentation.</li>
            <li><strong>Compliance Assurance:</strong> We ensure timely ESI contributions and filings.</li>
            <li><strong>Dedicated Support:</strong> Get round-the-clock assistance from our professionals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EsiRegistration;
