import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
    "Public vs Private",
    "Why Choose Us"
];


const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-2 text-gray-700 mb-1">
        <FaCheckCircle className="text-[#306590] mt-1" />
        <span>{text}</span>
    </li>
);

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
        <div className="max-w-5xl mx-auto py-8 text-gray-800">
            <h1 className="text-4xl font-bold mb-2 text-navy">
                Public Limited Company Registration
                in 10 working days
            </h1>
            <p className="">
                Public Limited Company Registration with Calzone - Unlocking Growth & Transparency
            </p>
            <div className="text-base leading-7">
                <SectionHeading title="Introduction" />
                <p>
                    A Public Limited Company (PLC) is a business entity that allows public investment and limited liability for its shareholders.
                    It is ideal for entrepreneurs looking to scale their business, raise capital from investors, and list on the stock exchange.
                </p>
                <p className="mt-3">
                    At Calzone, we simplify the Public Limited Company registration process, ensuring compliance with government regulations while allowing businesses to expand with ease.
                </p>
                <p className="mt-3">
                    A Public Limited Company operates under the Companies Act, 2013, and must adhere to strict corporate governance and disclosure norms to protect investors.
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
                <SectionHeading title="What is a Public Limited Company?" />
                <p>
                    A Public Limited Company (PLC) is a type of business entity where shares can be traded publicly,
                    allowing the company to raise capital through an Initial Public Offering (IPO). It offers limited
                    liability to its shareholders, meaning they are only liable up to the amount they invest.
                </p>
                <p>
                    Public Limited Companies are subject to more stringent regulatory compliance and disclosure requirements,
                    enhancing trust and transparency. They require a minimum of 3 directors and 7 shareholders, with no upper
                    limit on the number of shareholders. A minimum capital requirement (usually ₹5 lakh) applies, signaling
                    credibility and growth potential.
                </p>
                <p>
                    <strong>Best suited for:</strong><br />
                    • Large businesses aiming for significant expansion.<br />
                    • Companies planning to raise public funds.<br />
                    • Enterprises intending to list on the stock exchange.
                </p>
                <p>
                    At Calzone, we ensure your Public Limited Company registration process is smooth, compliant, and efficient.
                </p>
                <SectionHeading title="Why Choose a Public Limited Company?" />
                <ul className="list-none mt-2 ml-1">
                    <ListItem text="Access to Public Capital – Raise large-scale funding through public investors." />
                    <ListItem text="Enhanced Credibility – Gains investor confidence due to regulatory oversight." />
                    <ListItem text="Liquidity of Shares – Easy transferability attracts more investors." />
                    <ListItem text="Growth-Driven Structure – Ideal for businesses planning expansions or IPOs." />
                    <ListItem text="Calzone Advantage – Seamless registration with full legal compliance and support." />
                </ul>
                <p>Calzone simplifies the process of setting up a Public Limited Company, ensuring hassle-free registration and compliance.</p>

                <SectionHeading title="Documents Required for Public Limited Company Registration" />
                <p className="mb-4 text-gray-700">
                    To register your Public Limited Company, you will need to submit the following documents:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>Identity Proof of Directors & Shareholders (PAN, Aadhaar, Passport).</li>
                    <li>Address Proof of Directors & Shareholders (Utility Bills, Voter ID, Passport).</li>
                    <li>
                        Proof of Registered Office Address (Electricity Bill, Rent Agreement, No Objection Certificate
                        from Landlord).
                    </li>
                    <li>Director Identification Number (DIN) for Directors.</li>
                    <li>Digital Signature Certificate (DSC) for Directors.</li>
                    <li>Memorandum of Association (MOA) - Defines business objectives.</li>
                    <li>Articles of Association (AOA) - Governs company operations.</li>
                </ul>
                <p className="mt-4 text-gray-700">
                    <strong>Calzone</strong> ensures your documentation is complete and error-free for fast approvals.
                </p>
                <SectionHeading title="Step-by-Step Process for Public Limited Company Registration with Calzone" />
                <ol className="list-decimal ml-6 text-gray-800 space-y-4">
                    <li>
                        <p>
                            <strong>Step 1: Apply for Digital Signature Certificate (DSC)</strong><br />
                            Directors need a DSC to sign documents digitally.<br />
                            <span className="font-medium">Calzone helps in obtaining DSC from authorized certifying authorities.</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 2: Apply for Director Identification Number (DIN)</strong><br />
                            DIN is mandatory for all directors.<br />
                            <span className="font-medium">Calzone manages the DIN application process through the MCA (Ministry of Corporate Affairs) portal.</span>
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 3: Reserve a Unique Business Name</strong><br />
                            Proposed company name should comply with naming guidelines.<br />
                            Can be applied through <span className="font-medium">SPICe+ Form</span> or <span className="font-medium">RUN (Reserve Unique Name)</span> service.<br />
                            The name must end with "<span className="italic">Limited</span>" to indicate a Public Limited Company.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 4: File SPICe+ Form for Incorporation</strong><br />
                            Once the name is approved, apply for company incorporation.<br />
                            Submit all required documents, including <span className="font-medium">MOA & AOA</span>.<br />
                            After verification, the Registrar of Companies (RoC) issues the <span className="font-medium">Certificate of Incorporation</span>.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 5: Obtain Certificate of Commencement</strong><br />
                            Within 180 days of incorporation, apply for <span className="font-medium">Form INC-20A</span> to obtain the Certificate of Commencement.<br />
                            Failure to obtain this certificate prevents business operations.
                        </p>
                    </li>
                </ol>
                <p className="mt-4 text-gray-700">
                    <strong>Calzone</strong> ensures a smooth and timely registration process so you can focus on business growth.
                </p>



                <SectionHeading title="Timeline for Public Limited Company Registration" />

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>
                        <span className="font-medium">Digital Signature Certificate (DSC) & Director Identification Number (DIN):</span> Typically completed within 1–2 working days.
                    </li>

                    <li>
                        <span className="font-medium">Company Name Reservation:</span> Takes approximately 3–5 working days via the RUN or SPICe+ Part A process.
                    </li>

                    <li>
                        <span className="font-medium">SPICe+ Form Submission & Government Approval:</span> Usually processed within 5–7 working days after document submission.
                    </li>

                    <li>
                        <span className="font-medium">Certificate of Incorporation (COI):</span> Issued within 10–15 working days upon approval of all documents.
                    </li>
                </ul>

                <p className="mt-4 text-gray-700">
                    With Calzone, experience fast-track approvals, dedicated expert guidance, and seamless end-to-end compliance support for your Public Limited Company registration.
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Compliance Requirements for Public Limited Companies</h2>
                <p className="text-gray-700 mb-4">
                    As a Public Limited Company, regular compliance is mandatory to ensure transparency and maintain investor confidence.
                </p>

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>
                        <span className="font-medium">Board Meetings:</span> Must be conducted within 30 days of incorporation.
                    </li>
                    <li>
                        <span className="font-medium">Annual Financial Statements:</span> Balance Sheet, Director's Report, and Auditor's Report must be filed.
                    </li>
                    <li>
                        <span className="font-medium">Annual Return Filing (MGT-7 & AOC-4):</span> Must be submitted within 30 days of AGM.
                    </li>
                    <li>
                        <span className="font-medium">Income Tax & GST Filings:</span> Returns must be filed as per applicable tax regulations.
                    </li>
                    <li>
                        <span className="font-medium">Secretarial Audit:</span> Mandatory if paid-up capital exceeds ₹0 crore or turnover crosses ₹50 crore.
                    </li>
                    <li>
                        <span className="font-medium">SEBI Compliances:</span> Applicable if the company is listed on the stock exchange.
                    </li>
                </ul>

                <p className="mt-4 text-gray-700">
                    Calzone offers end-to-end compliance management to keep your company legally secure.
                </p>
                <div className="mt-8 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Checklist for Public Limited Company Registration
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Minimum 3 Directors & 7 Shareholders.</li>
                        <li>Minimum Capital of ₹1 Lakh.</li>
                        <li>Company Name Approval from ROC.</li>
                        <li>MOA & AOA Drafting.</li>
                        <li>Registered Office Address Proof.</li>
                        <li>GST & Tax Registrations (if applicable).</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        Calzone ensures your business meets all legal and compliance requirements effortlessly.
                    </p>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Public Limited Company vs Private Limited Company - Which One to Choose?
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300 text-left text-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="border px-4 py-2">Feature</th>
                                    <th className="border px-4 py-2">Public Limited Company</th>
                                    <th className="border px-4 py-2">Private Limited Company</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800">
                                <tr>
                                    <td className="border px-4 py-2">Shareholders</td>
                                    <td className="border px-4 py-2">Minimum 7 (No Maximum)</td>
                                    <td className="border px-4 py-2">Minimum 2, Maximum 200</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Public Investment</td>
                                    <td className="border px-4 py-2">Allowed via IPO</td>
                                    <td className="border px-4 py-2">Not allowed</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Share Trading</td>
                                    <td className="border px-4 py-2">Shares traded publicly</td>
                                    <td className="border px-4 py-2">Shares privately held</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Compliance Requirements</td>
                                    <td className="border px-4 py-2">High</td>
                                    <td className="border px-4 py-2">Moderate</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Liability Protection</td>
                                    <td className="border px-4 py-2">Limited</td>
                                    <td className="border px-4 py-2">Limited</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Listing on Stock Exchange</td>
                                    <td className="border px-4 py-2">Yes</td>
                                    <td className="border px-4 py-2">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-gray-700 space-y-3 text-sm">
                        <p>
                            <strong>Choose a Public Limited Company if:</strong> You want to raise public capital and expand at scale.
                        </p>
                        <p>
                            <strong>Choose a Private Limited Company if:</strong> You want limited compliance with controlled ownership.
                        </p>
                        <p>
                            At <strong>Calzone</strong>, we help businesses choose the right structure based on their goals.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Publiclimitedcompany;
