import SectionNavigation from "../SectionNavigation";

const sections = [
    "Overview",
    "Why Register",
    "Permitted Activities",
    "Taxation",
    "Compliance",
    "Documents",
    "Step-by-Step",
    "Why Choose"
];


const BranchOfficeRegistration = () => {
    return (
        <div className="px-6 md:px-16 py-8">
            <h1 className="text-3xl font-bold mb-6">Branch Office Registration in India with Calzone</h1>
            <p>Branch Office Registration in India with Calzone</p>
            <p className="text-lg text-gray-700 mb-4">
                Expand Your Business Presence in India with Ease
            </p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-gray-700 mb-2">
                    As businesses grow and seek new markets, establishing a branch office in India is an excellent way to expand operations while maintaining a direct presence. A branch office allows a foreign company to conduct business activities in India without setting up a separate legal entity.
                </p>
                <p>At Calzone, we specialize in seamless branch office registration, ensuring that businesses comply with Indian laws and regulatory requirements while enjoying the benefits of an established local presence.</p>
            </section>
            <SectionNavigation sections={sections}/>
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">What is a Branch Office?</h2>
                <p className="text-gray-700 mb-2">
                    A branch office is an extension of a foreign company that operates in India under the same name and brand. Unlike a subsidiary, a branch office is not a separate legal entity—it remains connected to its parent company.
                </p>
                <p className="text-gray-700 font-medium mb-2">Key Features of a Branch Office:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Operates in the same name as the parent company</li>
                    <li>Permitted to conduct similar business activities as the parent company</li>
                    <li>Cannot engage in manufacturing or retail trading</li>
                    <li>Liabilities of the branch remain with the parent company</li>
                    <li>Subject to Foreign Exchange Management Act (FEMA) regulations</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Why Register a Branch Office in India?</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Expand Business Presence - Establish a direct footprint in India while staying connected to the parent company.</li>
                    <li>Tax & Regulatory Benefits - A branch office can operate legally, access financial services, and enter contracts.</li>
                    <li>Access to Indian Markets - Leverage India's growing consumer base and business ecosystem.</li>
                    <li>Ease of Business Operations - Conduct commercial activities, technical services, and liaison work efficiently.</li>
                    <li>Brand Recognition - Operate under the same name as the parent company, strengthening brand value.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Permitted Activities for a Branch Office in India</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Market Research & Promotional Activities</li>
                    <li>Technical & Consultancy Services</li>
                    <li>Import & Export of Goods</li>
                    <li>Liaison Work</li>
                    <li>Financial & Investment Support</li>
                </ul>
                <p className="font-medium text-gray-800 mb-1">Not Allowed:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Cannot engage in manufacturing or retail trading in India.</li>
                    <li>Cannot undertake direct revenue-generating business without RBI approval.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Taxation for a Branch Office in India</h2>
                <p className="text-gray-700 mb-2">
                    A branch office in India is considered a foreign entity, and its profits are taxed at 40% plus applicable surcharges and cess.
                </p>
                <p className="text-gray-700 font-medium mb-2">Additional Taxes & Compliances:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>GST Registration - Required if turnover exceeds the threshold limit.</li>
                    <li>Tax Deduction and Collection Account Number (TAN) - For withholding tax.</li>
                    <li>Annual Income Tax Filing - Comply with Indian tax laws and reporting requirements.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Annual Compliance Requirements for a Branch Office</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Annual Activity Certificate (AAC)</li>
                    <li>Audited Financial Statements</li>
                    <li>Income Tax & GST Returns</li>
                    <li>Regulatory Reporting</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Documents Required for Branch Office Registration</h2>
                <p className="text-lg font-medium text-gray-800 mb-2">From the Parent Company:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Certificate of Incorporation</li>
                    <li>Memorandum of Association (MoA) & Articles of Association (AoA)</li>
                    <li>List of Directors & Key Executives</li>
                    <li>Details of Shareholders</li>
                    <li>Audited Financial Statements</li>
                    <li>Banker's Report from Home Country</li>
                </ul>
                <p className="text-lg font-medium text-gray-800 mb-2">For Indian Branch Office Address:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Utility Bills (Electricity, Water, Telephone)</li>
                    <li>No Objection Certificate (NOC) from Property Owner</li>
                    <li>Rental Agreement (if applicable)</li>
                </ul>
                <p className="text-lg font-medium text-gray-800 mb-2">For Appointed Representatives in India:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Passport Copies</li>
                    <li>Valid Business Visa</li>
                    <li>Address Proof (Utility Bills, Bank Statements)</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process for Branch Office Registration in India</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>
                        <strong>Filing Application with RBI (via AD Bank)</strong> - Submit Form FNC and documents. AD Bank verifies and gives preliminary approval.
                    </li>
                    <li>
                        <strong>RBI Approval & Unique Identification Number (UIN)</strong> - AD Bank forwards to RBI for UIN allocation.
                    </li>
                    <li>
                        <strong>Register with Ministry of Corporate Affairs (MCA)</strong> - File Form FC-1 within 30 days of RBI approval. Obtain DIN and DSC.
                    </li>
                    <li>
                        <strong>Tax & Financial Setup</strong> - Apply for PAN & TAN. Open a corporate bank account.
                    </li>
                    <li>
                        <strong>Import-Export Compliance (If Applicable)</strong> - Obtain IEC if involved in international trade.
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for Branch Office Registration?</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Expert Regulatory Compliance - 100% compliance with RBI, MCA, and tax regulations.</li>
                    <li>Faster Processing & Documentation - No delays, no errors—just smooth approvals.</li>
                    <li>End-to-End Assistance - From registration to annual compliance, we handle everything.</li>
                    <li>Foreign Business Support - We specialize in helping international companies enter the Indian market.</li>
                    <li>Transparent & Affordable Pricing - No hidden fees, just cost-effective solutions.</li>
                </ul>
            </section>
        </div>
    );
};

export default BranchOfficeRegistration;
