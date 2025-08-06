import SectionNavigation from "../SectionNavigation";

const sections = [
    "Overview",
    "Types",
    "Government Schemes",
    "Eligibility",
    "Documents",
    "Step by Step",
    "Tax Benefits",
    "Why Choose"
];

const StartupRegistration = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Startup Business Registration</h1>
            <p className="mb-6">Startup Business Registration with Calzone - Your Journey to Entrepreneurship Begins Here</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p className="mb-2">
                    Starting a business is an exciting journey that requires the right guidance, structure, and support. As
                    entrepreneurship is booming, many individuals are taking the leap into innovation and business ownership. The
                    Indian government actively encourages startups through various schemes, subsidies, and tax exemptions to help
                    new businesses thrive.
                </p>
                <p>
                    At Calzone, we simplify the startup registration process, ensuring that entrepreneurs get the best legal,
                    financial, and compliance support to set up and scale their businesses seamlessly.
                </p>
                <p>From choosing the right business structure to registering your startup and accessing government benefits, Calzone provides end-to-end support to help you turn your vision into reality.</p>
            </section>
            <SectionNavigation sections={sections} />
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Choosing the Right Business Structure for Your Startup</h2>
                <p className="mb-2">Selecting the right structure is crucial, as it determines the legal, financial, and operational aspects of your business.</p>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Business Structure</th>
                                <th className="border p-2">Best Suited For</th>
                                <th className="border p-2">Minimum Members</th>
                                <th className="border p-2">Ease of Registration</th>
                                <th className="border p-2">Raising Capital</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">One Person Company (OPC)</td>
                                <td className="border p-2">Solopreneurs who want corporate benefits</td>
                                <td className="border p-2">1</td>
                                <td className="border p-2">Moderate</td>
                                <td className="border p-2">Difficult</td>
                            </tr>
                            <tr>
                                <td className="border p-2">Private Limited Company</td>
                                <td className="border p-2">Startups aiming for growth and investors</td>
                                <td className="border p-2">2</td>
                                <td className="border p-2">Moderate</td>
                                <td className="border p-2">Easy</td>
                            </tr>
                            <tr>
                                <td className="border p-2">Limited Liability Partnership (LLP)</td>
                                <td className="border p-2">Service-based firms or partnerships</td>
                                <td className="border p-2">2</td>
                                <td className="border p-2">Easy</td>
                                <td className="border p-2">Moderate</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Calzone helps entrepreneurs choose the most suitable structure based on their business goals and future plans.</p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
                    Types of Startup Business Registration in India
                </h2>

                <div className="space-y-6  text-base sm:text-lg leading-relaxed">
                    {/* One Person Company */}
                    <div>
                        <h3 className="font-bold text-lg ">1. One Person Company (OPC) - Best for Solo Entrepreneurs</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Ideal for individuals who want full control over their business.</li>
                            <li>Enjoys limited liability, separate legal status, and corporate credibility.</li>
                            <li>No mandatory conversion into a Private Limited Company once revenue crosses a specific threshold.</li>
                            <li>Easy to transition into a Private Limited Company as the business scales.</li>
                        </ul>
                    </div>

                    {/* Private Limited Company */}
                    <div>
                        <h3 className="font-bold text-lg ">2. Private Limited Company - Best for Growing Startups</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>The most preferred structure for startups seeking investors and venture capital.</li>
                            <li>Provides limited liability, perpetual succession, and high market credibility.</li>
                            <li>Suitable for tech startups, e-commerce, and businesses planning long-term growth.</li>
                        </ul>
                    </div>

                    {/* Limited Liability Partnership */}
                    <div>
                        <h3 className="font-bold text-lg ">3. Limited Liability Partnership (LLP) - Best for Small & Service-Based Businesses</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>A hybrid model combining flexibility of partnerships with limited liability benefits.</li>
                            <li>Governed by agreements rather than strict company laws.</li>
                            <li>Best for professionals, consultants, legal firms, and small businesses.</li>
                            <li>Requires low compliance and easy registration.</li>
                        </ul>
                    </div>

                    {/* Calzone Note */}
                    <p className="text-md font-medium">
                        Calzone ensures seamless registration and compliance, no matter which structure you choose.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Government Schemes for Startups
                </h2>
                <p className="text-gray-600 mb-4">
                    The Indian government offers various schemes to encourage and support startups. Here are some of the most beneficial ones:
                </p>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700">1. Startup India Initiative</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Provides tax benefits, funding support, and incubation for startups.</li>
                            <li>Offers easier compliance, faster patent approvals, and networking opportunities.</li>
                            <li>Encourages innovation, wealth creation, and employment generation.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700">2. ASPIRE</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Focuses on entrepreneurship in rural areas and agriculture-based businesses.</li>
                            <li>Provides financial assistance, skill development, and infrastructure support.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700">3. MSME/Udyam Registration Scheme</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Designed to support Micro, Small, and Medium Enterprises (MSMEs).</li>
                            <li>Provides access to lower-interest business loans, tax benefits, and reduced IPR fees.</li>
                            <li>Helps businesses gain government contracts and subsidies.</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-gray-700">
                    <strong>Calzone</strong> helps startups register under these schemes and maximize their benefits.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] mb-4">The eligibility criteria vary depending on the business structure, but here are some common requirements:</h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>The business owner must be above 18 years old and of sound mind.</li>
                    <li>The business must have a valid identity, address proof, and business objective.</li>
                </ul>

                <p className="mt-4 text-lg font-semibold text-gray-800">Structure-Specific Requirements:</p>
                <section className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">Registration Requirements</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">

                        {/* OPC Registration */}
                        <div className="bg-white shadow rounded-lg p-5 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">OPC Registration</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>One Indian citizen as a member.</li>
                                <li>One nominee in case of unforeseen circumstances.</li>
                                <li>Principal place of business.</li>
                                <li>A unique business name.</li>
                            </ul>
                        </div>

                        {/* Private Limited Company */}
                        <div className="bg-white shadow rounded-lg p-5 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">Private Limited Company</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>At least two directors and two shareholders.</li>
                                <li>At least one director must be a resident of India.</li>
                                <li>Defined business objectives.</li>
                                <li>A unique company name.</li>
                            </ul>
                        </div>

                        {/* LLP Registration */}
                        <div className="bg-white shadow rounded-lg p-5 border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">LLP Registration</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Minimum of two partners.</li>
                                <li>At least one designated partner must be a resident of India.</li>
                                <li>A unique business name.</li>
                            </ul>
                        </div>

                    </div>
                </section>
                <p className="mt-4 text-gray-600">
                    <strong>Note:</strong> Calzone assists with all aspects of registration, ensuring a smooth and error-free process.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
                <div className=" gap-4 text-gray-700">
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Identity & Address Proof:</strong> PAN, Aadhaar, Voter ID, Passport.
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Business Address Proof:</strong> Rental Agreement, Utility Bill, NOC from Landlord.
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Passport Size Photographs:</strong> For all directors/partners.
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Company Name & Business Details:</strong> Proposed name and objective of the business.
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Proof of Registered Office:</strong> Utility bill or legal agreement.
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-pink-600 mt-1">•</span>
                        <p>
                            <strong>Details of Share Capital & Business Operations</strong>
                        </p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Calzone ensures hassle-free documentation and government approvals.
                </p>
            </section>
            {/* Step-by-Step Registration Section */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6">
                    Step-by-Step Startup Registration Process
                </h2>

                <div className=" text-sm">
                    <div className="">
                        <h3 className="font-semibold text-base mb-1">1. Define Your Business Idea</h3>
                        <p>Evaluate capital, target market, and growth potential.</p>
                    </div>

                    <div className="">
                        <h3 className="font-semibold text-base mb-1">2. Choose a Unique Business Name</h3>
                        <p>The name should be distinct and not violate trademark laws.</p>
                    </div>

                    <div className="">
                        <h3 className="font-semibold text-base mb-1">3. Select the Right Business Structure</h3>
                        <p>
                            Decide between OPC, Pvt Ltd, or LLP based on business needs.
                            <br />
                            <span className="italic">Calzone provides expert guidance in choosing the best structure.</span>
                        </p>
                    </div>

                    <div className="">
                        <h3 className="font-semibold text-base mb-1">4. File Registration Documents</h3>
                        <p>
                            Submit MOA, AOA, LLP Agreement, and apply for GST, MSME, and tax registrations.
                        </p>
                    </div>

                    <div className=" md:col-span-2">
                        <h3 className="font-semibold text-base mb-1">5. Obtain Business Registration Certificate</h3>
                        <p>
                            Once documents are verified, the Certificate of Incorporation is issued.
                            <br />
                            <span className="italic">Calzone handles everything from document preparation to final approvals.</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Tax Benefits & Exemptions for Startups
                </h2>

                <div className="">
                    <div className="">
                        <h3 className="text-xl font-semibold ">Tax Holiday for Startups</h3>
                        <p className="text-gray-700">
                            Eligible startups enjoy <strong>100% tax exemption</strong> for 3 years within a block of 7 years.
                            <br />
                            Applicable for startups with an annual turnover of less than ₹25 crore.
                        </p>
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold ">Exemption on Investments Above FMV</h3>
                        <p className="text-gray-700">
                            Angel investors and seed funding investments enjoy tax exemptions under certain conditions, even if the investment is above Fair Market Value.
                        </p>
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold ">Long-Term Capital Gains Exemption</h3>
                        <p className="text-gray-700">
                            Capital gains reinvested in government-notified funds are eligible for tax exemptions.
                            <br />
                            <strong>Maximum investment limit:</strong> ₹50 lakh with a 3-year lock-in period.
                        </p>
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold mb-2 ">Calzone Assistance</h3>
                        <p className="text-gray-800">
                            Calzone helps startups identify and maximize all eligible tax benefits and exemptions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Why Choose Calzone for Startup Registration?</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Expert Business Consultation – Helping you choose the best business structure.</li>
                    <li>End-to-End Registration Support – From documentation to approvals.</li>
                    <li>Access to Government Schemes & Benefits – We assist in securing tax exemptions and startup subsidies.</li>
                    <li>Ongoing Compliance Support – Ensuring tax filings, GST, and annual reports are handled.</li>
                    <li>Fast & Hassle-Free Process – Get registered in just a few days.</li>
                </ul>
            </section>

        </div>
    );
};

export default StartupRegistration;
