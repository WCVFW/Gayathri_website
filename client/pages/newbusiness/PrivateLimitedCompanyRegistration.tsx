import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ExpandableFAQ from '@/pages/ExpandableFAQ';
import { useNavigate } from 'react-router-dom';

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-semibold text-navy mt-10 mb-4 border-l-4 border-navy pl-3">{title}</h2>
);
const faqs = [
    {
        title: "Can a foreign national become a Director in a Private Limited Company in India?",
        content: `Yes. A foreign national can be appointed as a Director in an Indian Private Limited Company, provided:\n• At least one Director is an Indian resident.\n• The foreign director obtains a DIN (Director Identification Number).\n• Passport and address proof are notarized & apostilled.`,
    },
    {
        title: "How much does it cost to register a Private Limited Company in India?",
        content: `The cost varies based on:\n• Authorized Share Capital.\n• Number of Directors & Shareholders.\n• Professional Fees & Government Fees.\n• Additional services (GST, Trademark, etc.).\nYou can consult a company registration expert for an exact breakdown.`,
    },
    {
        title: "Can a Private Limited Company be converted into a Public Limited Company?",
        content: `Yes, a Pvt Ltd company can be converted into a Public Limited Company by:\n• Increasing the number of shareholders to at least 7.\n• Removing restrictions on share transfers.\n• Filing necessary documents with MCA.\n• Passing a special resolution in a general meeting.\n• Applying for a fresh certificate of incorporation.`,
    },
    {
        title: "Can a Private Limited Company be converted into an LLP (Limited Liability Partnership)?",
        content: `Yes. A Private Limited Company can be converted into an LLP if:\n• All shareholders agree to the conversion.\n• There are no outstanding debts or liabilities.\n• An LLP Agreement is drafted and filed with MCA.`,
    },
    {
        title: "Is it mandatory to have a physical office for company registration?",
        content: `Yes, a Registered Office Address is mandatory, but it can be:\n• A residential or commercial address.\n• A rented space with a No Objection Certificate (NOC) from the owner.`,
    },
    {
        title: "Can a Private Limited Company issue shares to the public?",
        content: `No. A Private Limited Company cannot issue shares to the public or be listed on a stock exchange. To do so, it must convert into a Public Limited Company.`,
    },
    {
        title: "What are the annual compliance requirements for a Private Limited Company?",
        content: `• Filing of Annual Returns (MGT-7) & Financial Statements (AOC-4) with MCA.\n• Conducting Annual General Meeting (AGM) within 6 months of the financial year-end.\n• Filing of Income Tax Returns & maintaining proper accounting records.\n• GST returns if applicable.`,
    },
    {
        title: "What is the difference between Authorized Capital & Paid-up Capital?",
        content: `• Authorized Capital: Maximum share capital a company is legally allowed to issue.\n• Paid-up Capital: The actual amount of capital paid by shareholders.\nExample: If a company has an authorized capital of ₹10 lakh but has issued only ₹5 lakh worth of shares, the paid-up capital is ₹5 lakh.`,
    },
    {
        title: "How long does a Private Limited Company remain valid?",
        content: `A Pvt Ltd company has perpetual succession, meaning it continues to exist until legally dissolved.`,
    },
];

const sections = [
    "Overview",
    "Eligibility & Requirements",
    "Documents",
    "Step-by-Step",
    "Post-Incorporation",
    "Why Register",
    "Why Choose",
    "FAQ'S"
];

const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-2 text-gray-700 mb-1">
        <FaCheckCircle className="text-[#306590] mt-1" />
        <span>{text}</span>
    </li>
);

const PrivateLimitedCompanyRegistration: React.FC = () => {
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
                Private Limited Company
            </h1>
            <p className="">
                Start your Private Limited Company Registration in India
            </p>
            <p>Things to Know Before starting a private Limited Company.</p>
            <p>Private Limited Company Registration in India - A Complete Guide</p>
            <div className="text-base leading-7">
                <SectionHeading title="Introduction" />
                <p>
                    Starting a business is an exciting journey, but choosing the right structure is crucial
                    for long-term success. A Private Limited Company (Pvt Ltd) is one of the most preferred
                    business structures in India due to its legal security, limited liability, ease of
                    expansion, and credibility in the market.
                </p>
                <p className="mt-3">
                    Whether you're an entrepreneur, a startup founder, or an established business looking to
                    incorporate, understanding the process, benefits, and compliance requirements is
                    essential. This guide walks you through everything you need to know about Private Limited
                    Company registration in India.
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
                <SectionHeading title="What is a Private Limited Company?" />
                <p>
                    A Private Limited Company is a legally recognized business entity under the Companies Act,
                    2013, where the liability of shareholders is limited to their shareholding. It operates as
                    a separate legal entity, ensuring business continuity regardless of ownership changes.
                </p>

                <SectionHeading title="What is a Private Limited Company?" />
                <p>A Private Limited Company is a legally recognized business entity under the Companies Act, 2013, where the liability of shareholders is limited to their shareholding. It operates as a separate legal entity, ensuring business continuity regardless of ownership changes.</p>
                <strong>Key Features of a Private Limited Company</strong>
                <ul className="list-none mt-2 ml-1">
                    <ListItem text="Limited Liability – Personal assets of shareholders are protected from business liabilities." />
                    <ListItem text="Separate Legal Entity – The company operates independently from its owners." />
                    <ListItem text="Perpetual Succession – The business continues even if ownership changes." />
                    <ListItem text="Easy Fundraising – Eligible for bank loans, venture capital, and angel investment." />
                    <ListItem text="Better Credibility – A Pvt Ltd company is recognized as a trustworthy entity in India." />
                </ul>

                <SectionHeading title="Eligibility & Requirements for Private Limited Company Registration" />
                <p>Before registering your company, ensure you meet the following criteria:</p>
                <ul className="list-disc ml-6">
                    <li>Minimum 2 Directors (at least one must be an Indian resident)</li>
                    <li>Minimum 2 Shareholders (directors can also be shareholders)</li>
                    <li>Registered Office Address (commercial or residential)</li>
                    <li>Authorized Share Capital (no minimum, but must be defined)</li>
                    <li>Compliance with the Companies Act, 2013</li>
                </ul>

                <SectionHeading title="Documents Required for Private Limited Company Registration" />

                <h3 className="text-lg font-semibold mt-6 mb-2 text-[#1c3d5a]">For Directors & Shareholders</h3>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>Passport-sized photographs</li>
                    <li>PAN Card & Aadhaar Card (mandatory for Indian citizens)</li>
                    <li>
                        <span className="font-medium">Any one of the following as Identity Proof:</span>
                        <ul className="list-disc ml-6 mt-1">
                            <li>Voter ID</li>
                            <li>Driving License</li>
                            <li>Passport</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium">Any one of the following as Residential Proof (not older than 2 months):</span>
                        <ul className="list-disc ml-6 mt-1">
                            <li>Electricity Bill</li>
                            <li>Bank Statement</li>
                            <li>Telephone Bill</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2 text-[#1c3d5a]">For Registered Office Address</h3>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>Utility Bill (Electricity/Water Bill)</li>
                    <li>NOC from the property owner (if the premises are rented)</li>
                    <li>Rent Agreement or Property Documents</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2 text-[#1c3d5a]">For Foreign Nationals (if applicable)</h3>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>Passport (Notarized & Apostilled)</li>
                    <li>Residential Proof (Foreign Bank Statement / Utility Bill)</li>
                    <li>Business Visa (if planning to reside in India)</li>
                </ul>
                <SectionHeading title="Step-by-Step Process for Private Limited Company Registration" />

                <ol className="list-decimal ml-6 text-gray-800 space-y-4">
                    <li>
                        <p>
                            <strong>Step 1: Obtain Digital Signature Certificate (DSC)</strong><br />
                            The first step is obtaining DSC for all proposed directors, as all filings with the Registrar of Companies (RoC) are done electronically.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 2: Apply for Director Identification Number (DIN)</strong><br />
                            Every director must have a unique Director Identification Number (DIN), which is obtained through the Ministry of Corporate Affairs (MCA) portal.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 3: Reserve Your Company Name</strong><br />
                            Choosing a unique business name is crucial. The proposed name must comply with naming guidelines and should not be identical to an existing registered company or trademark. The application is submitted through the RUN (Reserve Unique Name) service on the MCA portal.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 4: Draft & File MOA and AOA</strong><br />
                            <span className="font-medium">Memorandum of Association (MOA)</span> – Defines the company's objectives and scope of operations.<br />
                            <span className="font-medium">Articles of Association (AOA)</span> – Lays out the company's internal rules and management structure.<br />
                            Both documents must be filed electronically.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 5: Submit Incorporation Forms</strong><br />
                            <span className="font-medium">SPICe+ Form</span> – A simplified online form for company incorporation, DIN allotment, PAN, TAN, GSTIN, EPFO, ESIC, and bank account opening.<br />
                            <span className="font-medium">e-MOA & e-AOA</span> – Required for electronic submission of Memorandum & Articles of Association.<br />
                            Once submitted, the RoC will review the application and approve the incorporation.
                        </p>
                    </li>

                    <li>
                        <p>
                            <strong>Step 6: Certificate of Incorporation</strong><br />
                            Upon approval, the Certificate of Incorporation (COI) is issued, along with the Corporate Identification Number (CIN). This document legally recognizes the company.
                        </p>
                    </li>
                </ol>

                <SectionHeading title="Post-Incorporation Compliance & Next Steps" />

                <p className="mb-4 text-gray-700">
                    After incorporation, certain post-registration compliance activities are necessary to legally operate and maintain the Private Limited Company. These are essential to ensure financial and legal compliance with Indian corporate laws.
                </p>

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>
                        <span className="font-medium">Open a Corporate Bank Account</span> – All financial transactions should be conducted through the company’s official bank account to maintain clear separation between personal and business finances.
                    </li>

                    <li>
                        <span className="font-medium">Apply for PAN & TAN</span> – These are mandatory for taxation and TDS (Tax Deducted at Source) compliance. PAN is required to file income tax returns and TAN is used for deducting and depositing TDS.
                    </li>

                    <li>
                        <span className="font-medium">GST Registration (if applicable)</span> – If the company's turnover exceeds ₹20 lakh for service providers or ₹40 lakh for goods suppliers, GST registration becomes mandatory.
                    </li>

                    <li>
                        <span className="font-medium">Professional Tax Registration</span> – This is a state-specific requirement and must be obtained depending on the location of your registered office.
                    </li>

                    <li>
                        <span className="font-medium">Annual ROC Filings</span> – Companies are required to file annual returns, financial statements, and other compliance forms with the Registrar of Companies (RoC) every financial year.
                    </li>

                    <li>
                        <span className="font-medium">Accounting & Tax Filings</span> – Maintain proper accounting records, get your accounts audited (if applicable), and file necessary income tax and GST returns.
                    </li>
                </ul>

                <SectionHeading title="Why Register as a Private Limited Company?" />

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>
                        <span className="font-medium">Attract Investors & Secure Funding</span> – A Pvt Ltd company structure is preferred by venture capitalists, angel investors, and banks, making it easier to raise capital.
                    </li>
                    <li>
                        <span className="font-medium">Business Continuity & Growth</span> – The company enjoys perpetual succession, allowing it to continue operations irrespective of changes in ownership or directors.
                    </li>
                    <li>
                        <span className="font-medium">Legal Protection</span> – Shareholders have limited liability, which means their personal assets are protected against business losses or debts.
                    </li>
                    <li>
                        <span className="font-medium">Tax Benefits & Deductions</span> – Eligible for various deductions under the Income Tax Act, which can help reduce the overall tax liability of the company.
                    </li>
                    <li>
                        <span className="font-medium">Brand Credibility & Trust</span> – A registered Private Limited Company is considered more credible and trustworthy by customers, partners, and government authorities.
                    </li>
                </ul>

                <SectionHeading title="Why Choose Us for Your Private Limited Company Registration?" />

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    <li>
                        <span className="font-medium">End-to-End Assistance</span> – We handle everything from choosing your company name to completing post-registration compliance.
                    </li>
                    <li>
                        <span className="font-medium">Expert Guidance</span> – Get advice from experienced professionals in legal, taxation, and compliance domains to avoid costly mistakes.
                    </li>
                    <li>
                        <span className="font-medium">Quick & Hassle-Free Process</span> – We streamline your registration through efficient documentation and online submission via the MCA portal.
                    </li>
                    <li>
                        <span className="font-medium">Affordable & Transparent Pricing</span> – No hidden charges. You get a clear breakdown of all costs upfront.
                    </li>
                    <li>
                        <span className="font-medium">Ongoing Support</span> – Beyond incorporation, we help you manage tax filings, annual ROC compliance, and more throughout the year.
                    </li>
                </ul>

                <SectionHeading title="FAQs" />
                <p className="italic text-sm text-gray-600">
                    <ExpandableFAQ faqs={faqs} />

                </p>
            </div>
        </div>
    );
};

export default PrivateLimitedCompanyRegistration;
