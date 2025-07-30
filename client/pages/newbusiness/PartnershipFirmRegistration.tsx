import React, { useState, useEffect } from "react";

const sections = [
  "overview",
  "why-register",
  "documents",
  "understanding-the-partnership",
  "step-by-step",
  "timelines",
  "checklist",
  "why-choose",
];

const PartnershipFirmRegistration: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 text-gray-900 font-[Poppins]">
        <h1 className="text-3xl font-bold mb-2 text-left text-[#306590]">
          Partnership Firm Registration with Calzone
        </h1>
        <p className="text-left text-sm text-gray-600 mb-6">
          Partnership Firm Registration with Calzone - A Simplified Guide
        </p>
        {/* Sections */}
        <section id="overview" className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-3 text-left text-[#306590]">Introduction</h2>
          <p className="mb-2 text-gray-700 text-left leading-relaxed">
            Starting a business with like-minded partners can be an excellent way to build a strong, collaborative,
            and scalable enterprise. A Partnership Firm allows two or more individuals to come together, share
            responsibilities, and divide profits based on a mutual agreement.
          </p>
          <p className="mb-2 text-gray-700 text-left leading-relaxed">
            At Calzone, we help entrepreneurs set up their Partnership Firms legally and seamlessly, ensuring proper
            documentation, registration, and compliance to protect business interests.
          </p>
          <p className="text-gray-700 text-left leading-relaxed">
            A Partnership Firm is a flexible, low-compliance business structure governed by the Indian Partnership
            Act, 1932. It is best suited for small and medium-sized businesses, traders, professionals, and service
            providers looking for a cost-effective business model.
          </p>
        </section>
        {/* Sticky Navigation */}
        <div className="sticky top-16 z-10 bg-white shadow-sm py-1">
          <div className="flex flex-wrap gap-2 justify-start px-2 overflow-x-auto">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-all duration-300 whitespace-nowrap
                  ${activeSection === id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                  } bg-transparent border-b-2 border-transparent focus:outline-none`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
        <section id="what-is-partnership" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">What is a Partnership Firm?</h2>
          <p className="text-left mb-3">
            A Partnership Firm is a business entity formed when two or more people agree to manage and operate a business while sharing profits and responsibilities.
          </p>
          <p className="text-left mb-3">
            Unlike a Private Limited Company or LLP, a Partnership Firm is <strong>not a separate legal entity</strong>, meaning the partners are personally responsible for business liabilities. However, it remains a popular business structure due to its <strong>ease of setup</strong> and minimal legal formalities.
          </p>
          <p className="text-left mb-2 font-medium">Best suited for:</p>
          <ul className="list-disc ml-6 space-y-1 text-left">
            <li>Small and medium-sized businesses</li>
            <li>Family businesses or professional firms</li>
            <li>Service-based enterprises (law firms, consultancies, financial advisors)</li>
            <li>Traders, retailers, and wholesalers</li>
          </ul>
          <p className="text-left mt-3">
            At <strong>Calzone</strong>, we simplify the entire registration process, ensuring that your firm is legally compliant and ready to operate.
          </p>
        </section>

        <section id="why-register" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Why Should You Register a Partnership Firm?</h2>
          <p className="text-left mb-3">
            Although Partnership Firm registration is <strong>not mandatory</strong>, it is highly recommended as a registered firm enjoys multiple legal benefits:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-left">
            <li><strong>Legal Protection</strong> – A registered firm can sue or be sued in its own name</li>
            <li><strong>Business Credibility</strong> – Better for banks, clients, and investors</li>
            <li><strong>Tax Benefits & Compliance</strong> – GST and tax deductions</li>
            <li><strong>Smooth Dispute Resolution</strong> – Clear legal resolution path via Partnership Deed</li>
          </ul>
          <p className="text-left mt-3">
            At <strong>Calzone</strong>, we ensure that your Partnership Firm registration is done the right way, helping you maximize its legal and financial benefits.
          </p>
        </section>

        <section id="documents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-left">Documents Required for Partnership Firm Registration</h2>
          <p className="mb-3 text-left">
            Below are the documents needed for registering a Partnership Firm:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-left">
            <li>Application for registration of the partnership firm (<strong>Form 1</strong>).</li>
            <li>Certified copy of the <strong>Partnership Deed</strong>.</li>
            <li><strong>Affidavit</strong> confirming the accuracy of details in the Partnership Deed.</li>
            <li><strong>PAN Card & Address Proof</strong> of all partners.</li>
            <li><strong>Proof of the principal place of business</strong> (Rental Agreement, Ownership Deed, or Utility Bill).</li>
            <li><strong>Bank Account Details</strong> for the firm (for business transactions).</li>
          </ul>
          <p className="mt-4 text-left">
            Once these documents are submitted, the Registrar of Firms verifies them and issues a <strong>Partnership Firm Registration Certificate</strong>.
          </p>
          <p className="mt-2 text-left">
            <strong>Calzone</strong> handles all document verification and filing, ensuring fast approval.
          </p>
        </section>

        <section id="understanding-deed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-left">Understanding the Partnership Deed</h2>
          <p className="mb-3 text-left">
            A <strong>Partnership Deed</strong> is a legal agreement between the partners that outlines business operations, financial arrangements, and roles. A well-drafted deed prevents disputes and ensures smooth business operations.
          </p>

          <div className="mb-3">
            <h3 className="text-lg font-medium mb-2 text-left">General Details Included:</h3>
            <ul className="list-disc ml-6 space-y-2 text-left">
              <li><strong>Firm Name & Address</strong> – The official business name and location.</li>
              <li><strong>Partner Names & Addresses</strong> – The personal details of all partners involved.</li>
              <li><strong>Business Nature</strong> – The type of trade, service, or business activities undertaken.</li>
              <li><strong>Capital Contribution</strong> – Amount each partner invests in the firm.</li>
              <li><strong>Profit & Loss Sharing Ratio</strong> – How profits and losses will be divided among partners.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-left">Specific Clauses to Prevent Disputes:</h3>
            <ul className="list-disc ml-6 space-y-2 text-left">
              <li><strong>Interest on Capital, Loans & Drawings</strong> – Rules for handling finances.</li>
              <li><strong>Partner Salaries & Commissions</strong> – Structure for compensating active partners.</li>
              <li><strong>Roles & Responsibilities</strong> – Duties of each partner in managing the business.</li>
              <li><strong>Retirement or Death of a Partner</strong> – Terms for partner exit or dissolution.</li>
              <li><strong>Dispute Resolution Mechanism</strong> – Legal procedures for handling disagreements.</li>
            </ul>
          </div>

          <p className="mt-4 text-left">
            At <strong>Calzone</strong>, we provide a professionally drafted <strong>Partnership Deed</strong> tailored to your business needs.
          </p>
        </section>

        <section id="step-by-step" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-left">Step-by-Step Process for Partnership Firm Registration with Calzone</h2>
          <ol className="list-decimal ml-6 space-y-4 text-left">
            <li>
              <strong>Choose a Business Name</strong><br />
              Select a unique and legally acceptable name for the firm.<br />
              Avoid names that are similar to existing trademarks or registered businesses.
            </li>
            <li>
              <strong>Draft the Partnership Deed</strong><br />
              Define capital contribution, profit sharing ratio, partner roles, and legal terms.<br />
              The deed must be <strong>notarized</strong> and signed by all partners.
            </li>
            <li>
              <strong>Obtain PAN & TAN</strong><br />
              Apply for a <strong>PAN (Permanent Account Number)</strong> for income tax filing.<br />
              Apply for <strong>TAN</strong> if the firm will deduct Tax at Source (TDS).
            </li>
            <li>
              <strong>Register Under GST (if applicable)</strong><br />
              Required if turnover exceeds ₹20 lakh (services) or ₹40 lakh (goods).<br />
              Mandatory for interstate business or selling on e-commerce platforms.
            </li>
            <li>
              <strong>Register Under MSME (Udyam - Optional)</strong><br />
              Recommended to access <strong>government loans, subsidies, and benefits</strong>.
            </li>
            <li>
              <strong>File the Registration Application</strong><br />
              Submit <strong>Form 1</strong>, Partnership Deed, and all supporting documents to the Registrar of Firms.<br />
              Once approved, you'll receive the <strong>Partnership Firm Registration Certificate</strong>.
            </li>
          </ol>

          <p className="mt-6 text-left">
            <strong>Calzone</strong> handles the entire registration process on your behalf—ensuring legal compliance, document accuracy, and quick approvals.
          </p>
        </section>
        <section id="timelines" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Timelines for Partnership Firm Registration</h2>
          <ul className="list-disc ml-6 space-y-2 text-left">
            <li><strong>Drafting of Partnership Deed:</strong> 1–2 working days</li>
            <li><strong>Application Submission to Registrar:</strong> 3–5 working days</li>
            <li><strong>Issuance of Registration Certificate:</strong> 7–10 working days (subject to approval)</li>
          </ul>
          <p className="mt-4 text-left">
            At <strong>Calzone</strong>, we ensure a quick and hassle-free registration process so you can focus on growing your business.
          </p>
        </section>

        <section id="checklist" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Checklist Before Registering a Partnership Firm</h2>
          <ul className="list-disc ml-6 space-y-2 text-left">
            <li>Minimum of <strong>two partners</strong> (maximum 100)</li>
            <li>Firm name must be <strong>unique</strong> and not conflict with existing businesses</li>
            <li>Properly <strong>drafted Partnership Deed</strong> with all essential clauses</li>
            <li><strong>Principal place of business</strong> must be documented</li>
            <li>PAN Card, GST registration, and <strong>bank account in firm’s name</strong></li>
          </ul>
          <p className="mt-4 text-left">
            <strong>Calzone</strong> assists at every step, ensuring smooth registration with zero hidden complications.
          </p>
        </section>

        <section id="comparison" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Partnership Firm vs Private Limited Company</h2>
          <div className="overflow-auto">
            <table className="min-w-full table-auto border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">Partnership Firm</th>
                  <th className="border px-4 py-2">Private Limited Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Legal Status</td>
                  <td className="border px-4 py-2">Not a separate entity</td>
                  <td className="border px-4 py-2">Separate legal entity</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Liability Protection</td>
                  <td className="border px-4 py-2">Unlimited liability</td>
                  <td className="border px-4 py-2">Limited to company assets</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Compliance Requirements</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Business Growth</td>
                  <td className="border px-4 py-2">Ideal for small/medium businesses</td>
                  <td className="border px-4 py-2">Best for scalability & funding</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Taxation</td>
                  <td className="border px-4 py-2">30% + individual partner’s tax</td>
                  <td className="border px-4 py-2">25% (for small companies)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Investment Options</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Can raise capital from investors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-left">
            <strong>Choose a Partnership Firm</strong> if you want a simple, cost-effective structure with low compliance.<br />
            <strong>Choose a Private Limited Company</strong> if you plan to scale, attract investors, or raise funds.
          </p>
          <p className="mt-2 text-left">
            At <strong>Calzone</strong>, we help businesses choose the right structure based on their long-term goals.
          </p>
        </section>

        <section id="why-choose" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Why Choose Calzone for Partnership Firm Registration?</h2>
          <ul className="list-disc ml-6 space-y-2 text-left">
            <li><strong>End-to-End Assistance</strong> – From deed drafting to final registration</li>
            <li><strong>Expert Consultation</strong> – Advice on compliance, taxation, and setup</li>
            <li><strong>Quick Turnaround</strong> – Registration completed in just a few days</li>
            <li><strong>Transparent Pricing</strong> – No hidden charges, full clarity</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PartnershipFirmRegistration;
