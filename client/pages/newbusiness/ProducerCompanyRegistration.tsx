import { FaLeaf, FaUsers, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { MdChecklist, MdContactSupport } from 'react-icons/md';
// import { GiFarmTractor, GiReceiveMoney } from 'react-icons/gi';
import SectionNavigation from '../SectionNavigation';

const sections = [
    "Overview",
    "Key Features",
    "Benefits",
    "Eligibility",
    "Documents Required",
    "Step-by-Step Process",
    "Post-Registration Compliance",
    "Why Choose Calzone?"
];

export default function ProducerCompanyRegistration() {
    return (
        <div className="bg-white text-gray-800 mb-10">
            <section className="py-10 px-6 md:px-16">
                <h1 className="text-4xl font-bold mb-2">Producer Company Registration</h1>
                <p className="text-lg max-w-3xl">
                    Empowering Farmers & Producers with Calzone - Seamless Registration & Support
                </p>
            </section>

            <section className="px-6 md:px-16">
                <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
                <p className="mb-4">
                    India's economy is deeply rooted in agriculture, with over 60% of the population relying on farming and allied
                    sectors for their livelihood. However, individual farmers and small-scale producers often struggle due to market
                    inefficiencies, price fluctuations, and lack of organized infrastructure.
                </p>
                <p>
                    To support agricultural communities and enhance rural entrepreneurship, the government introduced the Producer Company model in 2002 under the Companies Act. This initiative enables farmers, producers, and agricultural entrepreneurs to form a collective entity, allowing them to pool resources, access better market opportunities, and improve their financial security.
                </p>
                <p>At Calzone, we assist farmers, agripreneurs, and producer groups in seamlessly registering their Producer Company, ensuring compliance with legal requirements while unlocking various government benefits and financial incentives.</p>
            </section>
            <SectionNavigation sections={sections} />
            <section className="bg-gray-100 md:px-16">
                <h2 className="text-2xl font-semibold mb-6">What is a Producer Company?</h2>
                <p className="mb-4">
                    A Producer Company is a registered entity formed by farmers or producers under the Companies Act, 2013. It focuses on:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Production & Harvesting</strong> - Enhancing efficiency in agriculture and allied sectors.</li>
                    <li><strong>Processing & Grading</strong> - Standardizing the quality of produce for better market value.</li>
                    <li><strong>Marketing & Sales</strong> - Providing direct market access to farmers, eliminating middlemen.</li>
                    <li><strong>Storage & Distribution</strong> - Setting up warehouses and distribution channels for supply chain efficiency.</li>
                    <li><strong>Exporting Agricultural Products</strong> - Enabling global market access for farmers.</li>
                    <li><strong>Providing Financial & Technical Support</strong> - Facilitating loans, grants, and technical training.</li>
                </ul>
                <p className="mt-4">
                    A Producer Company is designed to empower primary producers and ensure fair pricing, market accessibility, and better business opportunities.
                </p>
            </section>
            <section className="px-6 md:px-16">
                <h2 className="text-2xl font-semibold mb-6">Key Features of a Producer Company</h2>
                <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                        <FaLeaf className="mt-1" />
                        <span>
                            <strong>Registered under the Companies Act, 2013</strong> – Operates like a private limited company but is exclusively for producers.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaUsers className="mt-1" />
                        <span>
                            <strong>Only active producers can be members</strong> – Shareholding is limited to those actively involved in the production process.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="mt-1" />
                        <span>
                            <strong>One Person, One Vote System</strong> – Every member has equal voting rights, ensuring democratic decision-making.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FaFileAlt className="mt-1" />
                        <span>
                            <strong>Shares are not publicly tradable</strong> – However, they can be transferred among members.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MdChecklist className="mt-1" />
                        <span>
                            <strong>Mandatory Reserve Fund Creation</strong> – A portion of annual profit must be allocated to the reserve fund.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MdContactSupport className="mt-1" />
                        <span>
                            <strong>Dispute Resolution Through Arbitration</strong> – Ensures smooth conflict resolution among members.
                        </span>
                    </li>
                </ul>

                <p className="mt-6 text-sm text-gray-600">
                    Calzone ensures that your Producer Company is structured efficiently, maximizing benefits for all members.
                </p>
            </section>
            <section className="px-6 md:px-16">
                <h2 className="text-2xl font-semibold mb-4">Benefits of Registering a Producer Company</h2>
                <ul className="list-disc list-inside space-y-2 ">
                    <li>
                        <strong>Increased Market Access & Collective Bargaining Power</strong> – Farmers can negotiate better prices,
                        eliminate middlemen, and expand sales channels.
                    </li>
                    <li>
                        <strong>Financial Assistance & Subsidies</strong> – Eligible for government loans, grants, and credit support schemes.
                    </li>
                    <li>
                        <strong>Technical & Educational Support</strong> – Access to modern farming techniques, training programs,
                        and R&D facilities.
                    </li>
                    <li>
                        <strong>Risk Mitigation & Cost Reduction</strong> – Members can pool resources for bulk purchases, reducing input costs.
                    </li>
                    <li>
                        <strong>Tax Benefits</strong> – Certain tax exemptions and lower tax rates for agricultural operations.
                    </li>
                    <li>
                        <strong>Sustainable Growth & Employment</strong> – Supports rural economies by creating jobs and stabilizing incomes.
                    </li>
                </ul>
                <p className="mt-4 text-gray-600">
                    Calzone ensures that your Producer Company takes full advantage of financial and operational benefits.
                </p>
            </section>
            <section className="px-6 md:px-16 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Eligibility Criteria for Producer Company Registration</h2>
                <p className="text-gray-600 mb-6">
                    To register a Producer Company in India, the following eligibility requirements must be fulfilled:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <span className="font-medium">Minimum of 10 Individual Farmers/Producers</span> – Or at least 2 producer institutions/entities.
                    </li>
                    <li>
                        <span className="font-medium">Minimum 5 Directors Required</span> – Directors must be individuals and actively involved in production activities.
                    </li>
                    <li>
                        <span className="font-medium">Must Engage in Primary Production Activities</span> – Such as farming, livestock, fishing, forestry, or related sectors.
                    </li>
                </ul>
                <p className="mt-6 text-sm font-medium">
                    Calzone simplifies the eligibility assessment and ensures a hassle-free registration process.
                </p>
            </section>
            <section className="px-6 md:px-16 py-10">
                <h2 className="text-2xl font-semibold mb-4">Documents Required for Producer Company Registration</h2>
                <p className="mb-4 text-gray-700">
                    Calzone assists in preparing and submitting all necessary documents to avoid delays in your Producer Company registration process.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    <li><strong>Identity & Address Proof:</strong> PAN, Aadhaar, Voter ID, or Passport</li>
                    <li><strong>Proof of Business Premises:</strong> Rental agreement, electricity bill, or ownership document</li>
                    <li><strong>DIN & DSC:</strong> Mandatory for all directors</li>
                    <li><strong>Producer Certification:</strong> Issued by the local agricultural authority</li>
                    <li><strong>MoA & AoA:</strong> Governing documents of the company</li>
                </ul>
            </section>
            <section className="px-6 md:px-16 bg-white">
                <h2 className="text-2xl font-bold">Step-by-Step Process for Producer Company Registration with Calzone</h2>
                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="text-lg font-semibold">Step 1: Gather Required Members & Directors</h3>
                        <p>Minimum 10 producer members or 2 producer entities.<br />
                            At least 5 directors must be appointed.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Step 2: Name Reservation for Producer Company</h3>
                        <p>Name must include <strong>“Producer Company Limited”</strong> and comply with MCA & Trademark regulations.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Step 3: Obtain Digital Signature Certificate (DSC) & Director Identification Number (DIN)</h3>
                        <p>All proposed directors must obtain a valid DSC & DIN before proceeding with registration.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Step 4: Prepare & File Incorporation Documents (SPICe+ Form)</h3>
                        <p>Submit the Memorandum of Association (MoA), Articles of Association (AoA), producer certification, and business objectives via the SPICe+ form on the MCA portal.<br />
                            Attach necessary documents and pay applicable processing fees.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Step 5: Register for GST, EPFO, and ESIC (if applicable)</h3>
                        <p>File the AGILE PRO form along with SPICe+ to obtain GST, EPF, and ESIC registrations if required.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Step 6: Submission & Approval from the Registrar of Companies (RoC)</h3>
                        <p>Upon successful verification, the RoC issues the Certificate of Incorporation, officially recognizing the Producer Company.</p>
                    </div>
                    <p className="mt-6 font-medium">Calzone ensures quick and smooth registration, minimizing paperwork and bureaucratic delays.</p>
                </div>
            </section>


            <section className="bg-gray-100 px-6 md:px-16">
                <h2 className="text-2xl font-semibold mb-6">Post-Registration Compliance for Producer Companies</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Maintain Financial Records & File Annual Returns – Submit profit and loss statements, balance sheets, and tax filings.</li>
                    <li>Conduct Regular Board Meetings – Required for governance and strategic decision-making.</li>
                    <li>Create & Maintain a Reserve Fund – A portion of annual profits must be allocated.</li>
                    <li>Issue Member Benefits & Share Profits – Can distribute dividends and financial support to members.</li>
                    <li>File GST & Tax Returns (if applicable) – Ensure compliance with financial regulations.</li>
                    <li><strong>Calzone provides ongoing compliance support</strong> to ensure smooth operations.</li>
                </ul>
            </section>

            <section className="px-6 md:px-16">
                <h2 className="text-2xl font-semibold mb-6">Why Choose Calzone for Producer Company Registration?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Expert Assistance from Start to Finish – We handle everything from documentation to approvals.</li>
                    <li>Hassle-Free Process – No more complex legal formalities or regulatory confusion.</li>
                    <li>Government Scheme Guidance – Helping you access financial assistance, loans, and subsidies.</li>
                    <li>Affordable & Transparent Pricing – No hidden fees, only straightforward services.</li>
                    <li>Ongoing Compliance Support – Ensuring that your company remains compliant with all regulations.</li>
                </ul>
            </section>

        </div>
    );
}
