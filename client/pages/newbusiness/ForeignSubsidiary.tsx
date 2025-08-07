import React from 'react';
import SectionNavigation from '../SectionNavigation';
// import { FaBuilding, FaClipboardCheck, FaFileAlt, FaGavel, FaGlobe, FaRegCheckCircle, FaUserTie } from 'react-icons/fa';

const overviewSections = [
    "Overview",
    "Why Register",
    "Eligibility",
    "Documents",
    "Step-by-Step",
    "Compliance",
    "Why Choose"
];

const ForeignSubsidiary: React.FC = () => {
    return (
        <div className="px-6 md:px-16 py-8">
            {/* Hero Section */}
            <section>
                <div>
                    <h1 className="text-3xl md:text-3xl font-bold mb-4">Foreign Subsidiary Incorporation with Calzone</h1>
                    <p className="text-lg md:text-xl">Foreign Subsidiary Incorporation with Calzone</p>
                    <p className="text-lg md:text-xl">Seamless Business Expansion into India</p>
                </div>
            </section>

            {/* Introduction */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="mb-4">
                    Expanding into India offers immense business opportunities due to its rapidly growing economy and consumer base.
                    However, managing operations from abroad can be challenging, making the incorporation of a foreign subsidiary a strategic move.
                </p>
                <p>
                    At <strong>Calzone</strong>, we specialize in providing end-to-end solutions for foreign companies looking to establish a presence in India.
                    From regulatory approvals to compliance management, we ensure a smooth transition into the Indian market.
                </p>
            </section>
            <SectionNavigation sections={overviewSections} />
            {/* What is a Foreign Subsidiary */}
            <section>
                <div className="">
                    <h2 className="text-2xl font-semibold mb-4">What is a Foreign Subsidiary?</h2>
                    <p className="mb-4">
                        A foreign subsidiary is a company in which a foreign entity holds more than 50% of the share capital.
                        In many cases, foreign businesses establish a Wholly Owned Subsidiary (WOS) in India, meaning 100% ownership is retained by the parent company.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Separate Legal Entity</strong> – Operates independently while being controlled by the parent company.</li>
                        <li><strong>Limited Liability</strong> – The foreign company's liability is limited to its investment in the subsidiary.</li>
                        <li><strong>Market Expansion</strong> – Allows direct access to Indian consumers and businesses.</li>
                        <li><strong>Tax Benefits</strong> – Subject to Indian corporate tax laws, which may be more favorable than direct foreign transactions.</li>
                        <li><strong>Regulatory Compliance</strong> – Must adhere to Companies Act, FEMA, RBI, and MCA guidelines.</li>
                    </ul>
                </div>
                <p>Calzone helps foreign companies establish subsidiaries while ensuring full legal compliance and operational efficiency.</p>
            </section>

            {/* Why Register */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Why Register a Foreign Subsidiary in India?</h2>
                <ul className="space-y-3 list-disc list-inside">
                    <li><strong>Strategic Market Expansion</strong> – Establish a local presence while maintaining global control.</li>
                    <li><strong>Reduced Tax Liabilities</strong> – Optimize tax structures through local corporate compliance.</li>
                    <li><strong>Ease of Operations</strong> – Conduct business directly in India without intermediaries.</li>
                    <li><strong>Global Brand Recognition</strong> – Leverage the parent company’s reputation while operating locally.</li>
                    <li><strong>Attract Investment & Funding</strong> – Eligible for Indian government schemes and foreign investments.</li>
                </ul>
                <p>Calzone provides expert guidance on structuring your subsidiary for long-term success.</p>
            </section>

            {/* Eligibility */}
            <section className="bg-gray-50  px-4">
                <div className="">
                    <h2 className="text-2xl font-semibold mb-4">Eligibility for Foreign Subsidiary Registration</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>At least two shareholders (including the parent company).</li>
                        <li>Minimum two directors, with at least one Indian resident director.</li>
                        <li>No minimum capital requirement.</li>
                        <li>Must comply with FEMA and RBI regulations.</li>
                    </ul>
                    <p>Calzone assists in meeting all legal and regulatory criteria efficiently.</p>
                </div>
            </section>

            {/* Documents Required */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Documents Required for Foreign Subsidiary Registration</h2>
                <h3 className="text-lg font-semibold mb-2">From the Foreign Parent Company:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Certificate of Incorporation (Notarized/Apostilled)</li>
                    <li>Memorandum & Articles of Association (Notarized/Apostilled)</li>
                    <li>Resolution approving subsidiary incorporation in India (Notarized/Apostilled)</li>
                    <li>ID proof of authorized representative (Notarized/Apostilled)</li>
                    <li>List of company directors and shareholders</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">For Indian Subsidiary:</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Proposed Name of the Company (As per MCA guidelines)</li>
                    <li>Director Identification Number (DIN) for directors</li>
                    <li>Digital Signature Certificate (DSC) for directors</li>
                    <li>Registered Office Address Proof (Rental Agreement, Utility Bills, NOC from Owner)</li>
                    <li>Identity & Address Proof of Directors and Shareholders (Passport, Aadhaar, Utility Bills)</li>
                </ul>
            </section>

            {/* Step-by-Step Process */}
            <section>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process for Foreign Subsidiary Incorporation in India</h2>
                    <ol className="list-decimal list-inside space-y-3">
                        <li>
                            <strong>Name Approval (SPICe+ Part A):</strong> Reserve company name. If using the parent company’s name, submit NOC, Apostilled Charter & Resolution.
                        </li>
                        <li>
                            <strong>Filing SPICe+ Part B:</strong> Submit director & shareholder info, MOA & AOA, office details, declarations.
                        </li>
                        <li>
                            <strong>Submission of Linked Forms:</strong> AGILE-PRO-S for GST (optional), EPFO, ESIC (mandatory), PT (if applicable), and bank account.
                        </li>
                        <li>
                            <strong>Obtain Certificate of Incorporation:</strong> ROC issues CIN, PAN & TAN.
                        </li>
                        <li>
                            <strong>Post-Incorporation Compliance:</strong> File INC-20A, obtain FIRC, issue share certificates, file FC-GPR, and update statutory records.
                        </li>
                    </ol>
                </div>
            </section>

            {/* Compliance Requirements */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Compliance Requirements for Foreign Subsidiaries</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Annual General Meetings (AGM)</strong> – First AGM within 9 months of financial year-end.</li>
                    <li><strong>Board Meetings</strong> – Minimum 4 meetings per year.</li>
                    <li><strong>Filing of Audited Financials (AOC-4)</strong> – Submit financials & director’s report to ROC.</li>
                    <li><strong>Annual Return (MGT-7)</strong> – File company annual return.</li>
                    <li><strong>Tax Compliance</strong> – Corporate Tax, GST, TDS filings.</li>
                    <li><strong>Related Party Transactions</strong> – Report transactions between parent and subsidiary.</li>
                </ul>
            </section>

            {/* Why Choose Calzone */}
            <section className="bg-indigo-50  px-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for Foreign Subsidiary Registration?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>End-to-End Service</strong> – From registration to compliance, we handle everything.</li>
                        <li><strong>Regulatory Expertise</strong> – Navigate FEMA, RBI, and MCA regulations with ease.</li>
                        <li><strong>Fast & Hassle-Free Process</strong> – Save time with our streamlined documentation and approval process.</li>
                        <li><strong>Dedicated Compliance Support</strong> – Ensure tax, legal, and financial adherence post-incorporation.</li>
                        <li><strong>Transparent & Affordable Pricing</strong> – No hidden costs—just value-driven solutions.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ForeignSubsidiary;
