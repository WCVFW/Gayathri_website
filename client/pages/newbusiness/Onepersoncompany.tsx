import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
// import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-semibold text-navy mt-10 mb-4 border-l-4 border-navy pl-3">{title}</h2>
);

const sections = [
    "Overview",
    "Why Choose",
    "Documents",
    "Step-by-Step",
    "Timelines",
    "Compliance",
    "Checklist",
    "Person vs Private",
    "Why Choose Us"
];



// const ListItem: React.FC<{ text: string }> = ({ text }) => (
//     <li className="flex items-start gap-2 text-gray-700 mb-1">
//         <FaCheckCircle className="text-[#306590] mt-1" />
//         <span>{text}</span>
//     </li>
// );

const Publiclimitedcompany: React.FC = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('');
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            navigate(`?section=${id}`);
            setActiveSection(id);
        }
    };
    return (
        <div className="px-6 md:px-16 py-8">
            <h1 className="text-4xl font-bold mb-2 text-navy">
                One Person Company
                Registration
            </h1>
            <p className="">
                One Person Company (OPC) Registration with Calzone - Empowering Solo Entrepreneurs
            </p>
            <div className="text-base leading-7">
                <SectionHeading title="Introduction" />
                <p>
                    Starting a business as a solo entrepreneur can be challenging, but a One Person Company (OPC) offers a perfect balance between independence, limited liability, and business growth potential.
                </p>
                <p className="mt-3">
                    A One Person Company (OPC) is a type of private limited company, designed for individuals who want to run a business on their own while enjoying the legal benefits of a corporate structure. It allows a single individual to be the director and shareholder, ensuring full control and decision-making power.
                </p>
                <p className="mt-3">
                    At Calzone, we simplify the OPC registration process, ensuring that your business is legally compliant and ready to scale.
                </p>
                <div className="mb-5">
                    <div className="sticky top-16 z-10 bg-white shadow-sm py-2">
                        <div className="flex flex-wrap gap-2 justify-start px-4">
                            {sections.map((id) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 
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
                </div>
                <SectionHeading title="What is a One Person Company (OPC)?" />
                <p>
                    An OPC is a legally recognized business structure under the Companies Act, 2013,
                    designed to empower sole entrepreneurs with the benefits of a Private Limited Company.
                </p>

                <p className="mt-3 font-semibold">Key Features of OPC:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Single Owner & Director</strong> – One individual controls 100% of the company.</li>
                    <li><strong>Separate Legal Entity</strong> – Business and personal assets are treated separately.</li>
                    <li><strong>Limited Liability</strong> – Personal assets remain protected from business liabilities.</li>
                    <li><strong>Perpetual Succession</strong> – The business continues even after the owner's demise (subject to nominee approval).</li>
                    <li><strong>No Minimum Capital Requirement</strong> – Start with any capital amount.</li>
                    <li><strong>No Mandatory AGM or Board Meetings</strong> – Compliance is simpler than a traditional private limited company.</li>
                </ul>

                <p className="mt-3 font-semibold">Best suited for:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Solo entrepreneurs who want a corporate structure.</li>
                    <li>Freelancers, consultants, and small business owners.</li>
                    <li>Individuals looking to raise funds in the future while maintaining ownership.</li>
                </ul>

                <p className="mt-4">
                    At Calzone, we help you seamlessly incorporate an OPC, so you can focus on growing your business.
                </p>
                <section className="bg-white">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                            Why Choose an OPC with Calzone?
                        </h2>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                <strong>Full Ownership & Control</strong> – No need for multiple partners or investors.
                            </li>
                            <li>
                                <strong>Tax & Compliance Benefits</strong> – Avoid complex annual compliance requirements of a Private Limited Company.
                            </li>
                            <li>
                                <strong>Easy to Incorporate & Manage</strong> – Requires minimal documentation and legal formalities.
                            </li>
                            <li>
                                <strong>Higher Credibility & Business Growth</strong> – Having a registered company boosts customer and investor trust.
                            </li>
                            <li>
                                <strong>Better Loan & Funding Opportunities</strong> – Easier access to business loans and investment options.
                            </li>
                        </ul>
                        <p className="mt-6 text-gray-700">
                            Calzone ensures a smooth and efficient registration process with expert guidance.
                        </p>
                    </div>
                </section>

                <section className="bg-white">
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                        Documents Required for OPC Registration
                    </h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-3 text-base sm:text-lg">
                        <li>
                            <strong>Identity Proof</strong> of Director & Nominee (PAN, Aadhaar, Passport).
                        </li>
                        <li>
                            <strong>Address Proof</strong> of Director & Nominee (Utility Bills, Voter ID, Passport).
                        </li>
                        <li>
                            <strong>Registered Office Address Proof</strong> (Electricity Bill, Rent Agreement, NOC from Landlord).
                        </li>
                        <li>
                            <strong>Director Identification Number (DIN)</strong> for Director.
                        </li>
                        <li>
                            <strong>Digital Signature Certificate (DSC)</strong> for Director.
                        </li>
                        <li>
                            <strong>Memorandum of Association (MOA)</strong> – Defines business objectives.
                        </li>
                        <li>
                            <strong>Articles of Association (AOA)</strong> – Governs company operations.
                        </li>
                        <li>
                            <strong>Nominee Consent Form (INC-3)</strong> – The nominee takes over in case of the owner's demise.
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-800 font-medium">
                        Calzone ensures that your documentation is complete and error-free for quick approvals.
                    </p>
                </section>
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-bold text-center mb-8 text-navy">
                        Step-by-Step Process for OPC Registration with Calzone
                    </h1>

                    {/* Step 1 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 1: Apply for Digital Signature Certificate (DSC)</h2>
                        <p className="mt-2 text-gray-700">Required for digitally signing official documents.</p>
                        <p className="text-gray-700">Calzone helps in obtaining a DSC from authorized certifying authorities.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 2: Apply for Director Identification Number (DIN)</h2>
                        <p className="mt-2 text-gray-700">DIN is mandatory for the director of the OPC.</p>
                        <p className="text-gray-700">Calzone manages the DIN application process through the MCA portal.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 3: Reserve a Unique Business Name</h2>
                        <p className="mt-2 text-gray-700">The company name must be unique and comply with MCA guidelines.</p>
                        <p className="text-gray-700">Must include “(OPC) Private Limited” at the end of the company name.</p>
                        <p className="text-gray-700">Name reservation is done via SPICe+ Part A Form.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 4: Prepare & File Incorporation Documents</h2>
                        <p className="mt-2 text-gray-700">Draft and file MOA & AOA, specifying company objectives and rules.</p>
                        <p className="text-gray-700">Obtain nominee consent via Form INC-3.</p>
                        <p className="text-gray-700">Calzone ensures that all documents are professionally drafted for hassle-free approval.</p>
                    </div>

                    {/* Step 5 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 5: Submit Incorporation Application</h2>
                        <p className="mt-2 text-gray-700">Apply through SPICe+ Part B Form along with all required documents.</p>
                        <p className="text-gray-700">Submit AGILE Form to register for GST, EPF, and open a bank account.</p>
                    </div>

                    {/* Step 6 */}
                    <div className="mb-6 border-l-4 border-navy pl-4">
                        <h2 className="text-xl font-semibold text-gray-800">Step 6: Certificate of Incorporation Issuance</h2>
                        <p className="mt-2 text-gray-700">After successful verification, Registrar of Companies (ROC) issues the Certificate of Incorporation.</p>
                        <p className="text-gray-700">Company PAN & TAN are also generated automatically.</p>
                        <p className="text-gray-700">Calzone ensures a smooth and timely registration process, so you can launch your business faster.</p>
                    </div>
                </div>
                <section className="bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Timeline for OPC Registration
                    </h2>

                    <div className="space-y-6 text-sm md:text-base">
                        <div className="">
                            <h3 className="font-semibold ">Digital Signature & DIN Application</h3>
                            <p className="mt-1 text-gray-600">1-2 working days.</p>
                        </div>

                        <div className="">
                            <h3 className="font-semibold ">Company Name Reservation</h3>
                            <p className="mt-1 text-gray-600">3-5 working days.</p>
                        </div>

                        <div className="">
                            <h3 className="font-semibold ">Submission of SPICe+ Form & Approval</h3>
                            <p className="mt-1 text-gray-600">5-7 working days.</p>
                        </div>

                        <div className="">
                            <h3 className="font-semibold ">Certificate of Incorporation Issuance</h3>
                            <p className="mt-1 text-gray-600">10-12 working days.</p>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-gray-800 font-medium">
                        With <span className="font-semibold">Calzone</span>, you get fast-tracked approvals and expert compliance support.
                    </p>
                </section>
                <section className="bg-white">
                    <div className="">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Compliance Requirements for OPCs
                        </h2>
                        <p className="text-gray-600 mb-6">
                            While an OPC has fewer compliance obligations than a Private Limited Company, certain requirements must be met:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                            <li>
                                <strong>Annual Financial Statements</strong> – Balance Sheet & Profit and Loss Account must be filed.
                            </li>
                            <li>
                                <strong>Annual Return Filing (Form MGT-7A & AOC-4)</strong> – Must be submitted yearly.
                            </li>
                            <li>
                                <strong>Income Tax & GST Filings</strong> – Must file returns as per tax regulations.
                            </li>
                            <li>
                                <strong>Board Meetings</strong> – At least one meeting every six months.
                            </li>
                            <li>
                                <strong>Audit Requirements</strong> – Mandatory if turnover exceeds 2 crore.
                            </li>
                        </ul>
                        <p className="mt-6 font-semibold">
                            Calzone provides comprehensive compliance services to keep your OPC legally secure.
                        </p>
                    </div>
                </section>
                <section className="">
                    <h2 className="text-3xl font-bold mb-6">
                        Checklist for OPC Registration
                    </h2>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">One Director & One Nominee.</span>
                        </li>

                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">Minimum Authorized Capital of 1 Lakh.</span>
                        </li>

                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">Unique Business Name Approval.</span>
                        </li>

                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">Memorandum & Articles of Association Drafting.</span>
                        </li>

                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">Registered Office Address Proof.</span>
                        </li>

                        <li className="flex items-start gap-3 ">
                            <FaCheckCircle className="text-green-600 mt-1" />
                            <span className="text-gray-800 text-base">GST & Tax Registrations (if applicable).</span>
                        </li>
                    </ul>

                    <div className="mt-8">
                        <p className="text-lg">
                            <strong>Calzone</strong> ensures a hassle-free registration experience with expert assistance.
                        </p>
                    </div>
                </section>
                <div className=" mx-auto bg-white ">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        One Person Company vs Private Limited Company - Which One to Choose?
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2 text-left">Feature</th>
                                    <th className="border px-4 py-2 text-left">One Person Company (OPC)</th>
                                    <th className="border px-4 py-2 text-left">Private Limited Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Shareholders</td>
                                    <td className="border px-4 py-2">Only 1</td>
                                    <td className="border px-4 py-2">Minimum 2, Maximum 200</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Public Investment</td>
                                    <td className="border px-4 py-2">Not Allowed</td>
                                    <td className="border px-4 py-2">Allowed</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Compliance Requirements</td>
                                    <td className="border px-4 py-2">Low</td>
                                    <td className="border px-4 py-2">Moderate</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Liability Protection</td>
                                    <td className="border px-4 py-2">Limited</td>
                                    <td className="border px-4 py-2">Limited</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Scalability</td>
                                    <td className="border px-4 py-2">Limited</td>
                                    <td className="border px-4 py-2">High</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Mandatory Board Meetings</td>
                                    <td className="border px-4 py-2">Once every 6 months</td>
                                    <td className="border px-4 py-2">Frequent Meetings Required</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 space-y-3 ">
                        <p>
                            <strong>Choose an OPC if:</strong> You want full control, limited liability, and easy compliance.
                        </p>
                        <p>
                            <strong>Choose a Private Limited Company if:</strong> You plan to scale, raise capital, or attract investors.
                        </p>
                        <p className="mt-3 font-medium">
                            At Calzone, we help businesses choose the right structure based on their goals.
                        </p>
                    </div>
                    <section className="bg-white">
                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold  mb-6">
                                Why Choose Calzone for OPC Registration?
                            </h2>
                            <div className="text-left space-y-4">
                                <p className="">
                                    <span className="font-semibold">End-to-End Assistance:</span> From documentation to filing with the ROC.
                                </p>
                                <p className="">
                                    <span className="font-semibold">Expert Business Consultation:</span> Guidance on compliance, taxation, and structuring.
                                </p>
                                <p className="">
                                    <span className="font-semibold">Quick Processing:</span> Fast registration within 10-12 days.
                                </p>
                                <p className="">
                                    <span className="font-semibold">Affordable & Transparent Pricing:</span> No hidden fees, only straightforward solutions.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Publiclimitedcompany;
