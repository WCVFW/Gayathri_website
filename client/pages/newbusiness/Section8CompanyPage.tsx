// src/pages/Section8CompanyPage.tsx

import SectionNavigation from "../SectionNavigation";

// import React from 'react';
const sections = [
    'KeyFeatures',
    'WhyChoose',
    'Eligibility',
    'Documents',
    'StepbyStep',
    'Compliance',
    'Timeline',
    'Section8Company',
    'WhyTrust',
]
const Section8CompanyPage = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 text-gray-800" id="section-8">
            <div className="container main-table">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="main-heading mb-4 text-xl font-bold">Section 8 Company <br /> Registration</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p>Section 8 Company Registration - A Comprehensive Guide by Calzone</p>
                        <h3 className="sub-heading text-xl font-bold ">Understanding Section 8 Company Registration</h3>
                        <p>
                            A Section 8 Company is a type of entity formed to promote charitable objectives such as commerce, arts,
                            science, education, research, sports, social welfare, environmental protection, and other similar causes.
                            Unlike profit-driven companies, Section 8 companies do not distribute dividends to their members but
                            instead reinvest their profits into their mission.
                        </p>
                        <p>
                            Calzone offers expert guidance in registering Section 8 companies, ensuring full compliance with
                            government regulations and seamless incorporation.
                        </p>
                        <SectionNavigation sections={sections} />
                        <div id="KeyFeatures">
                            <h2 className="sub-heading">Key Features of a Section 8 Company</h2>
                            <ul>
                                <li><b>Non-Profit Nature - </b> Profits and income must be used exclusively for promoting the company's objectives.</li>
                                <li><b>No Minimum Share Capital - </b> There is no prescribed capital requirement, making it cost-effective for new organizations.</li>
                                <li><b>Limited Liability - </b> Members' liability is limited to their shareholding.</li>
                                <li><b>Government Licensing - </b> A license from the Central Government is mandatory to operate as a Section 8 Company.</li>
                                <li><b>Exemptions & Tax Benefits - </b> Section 8 Companies can avail of tax exemptions under Section 80G and 12AA of the Income Tax Act.</li>
                                <li><b>Use of Names - </b> Unlike private or public companies, Section 8 Companies do not require 'Private Limited' or 'Limited' in their name.</li>
                                <li><b>Increased Credibility - </b> They hold higher credibility over trusts and societies due to government regulations.</li>
                            </ul>
                        </div>

                        <div id="WhyChoose">
                            <h2 className="sub-heading">Why Choose Calzone for Section 8 Company Registration?</h2>
                            <ul>
                                <li><b>End-to-End Assistance - </b> From documentation to final approval, we handle everything.</li>
                                <li><b>Expert Consultation - </b> Guidance from professionals experienced in NGO and non-profit setups.</li>
                                <li><b>Compliance Support - </b> Ensuring smooth legal compliance and annual reporting.</li>
                            </ul>
                        </div>

                        <div id="Eligibility">
                            <h2 className="sub-heading">Eligibility Criteria for Section 8 Company Registration</h2>
                            <ul>
                                <li>Minimum two directors are required.</li>
                                <li>At least one director must be a resident of India.</li>
                                <li>The company should have a clear charitable objective.</li>
                                <li>No dividend distribution to members.</li>
                                <li>Profits and income must be utilized solely for the advancement of its objectives.</li>
                            </ul>
                        </div>

                        <div id="Documents">
                            <h2 className="sub-heading">Documents Required for Section 8 Company Registration</h2>
                            <div className="row">
                                <div className="col-lg-4">
                                    <p className="title">For Directors & Shareholders</p>
                                    <ul>
                                        <li>Self-attested PAN Card & Aadhaar Card</li>
                                        <li>Recent bank statement, electricity/phone bill as address proof</li>
                                        <li>Passport-size photos</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <p className="title">For Registered Office</p>
                                    <ul>
                                        <li>Property ownership documents or rental agreement</li>
                                        <li>Utility bill (electricity/gas/phone) for address verification</li>
                                        <li>No Objection Certificate (NOC) from the owner</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <p className="title">Other Documents</p>
                                    <ul>
                                        <li>Memorandum of Association (MoA) and Articles of Association (AoA)</li>
                                        <li>INC-9 Affidavit from each director</li>
                                        <li>INC-15 Declaration by each subscriber</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="StepbyStep" className="my-10">
                            <h2 className="sub-heading mb-4">Step-by-Step Section 8 Company Registration Process</h2>
                            <ul className="space-y-4 list-disc pl-5 text-gray-800 text-sm">
                                <li>
                                    <b>Step 1: Obtain Digital Signature Certificate (DSC)</b>
                                    <ul className="list-disc pl-5">
                                        <li>The first step is to obtain DSCs for all proposed directors through government-certified agencies.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Step 2: Apply for Director Identification Number (DIN)</b>
                                    <ul className="list-disc pl-5">
                                        <li>Once DSCs are obtained, directors need to apply for DIN by submitting Form DIR-3 with the Registrar of Companies (RoC).</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Step 3: Name Reservation</b>
                                    <ul className="list-disc pl-5">
                                        <li>A unique name for the company is reserved by filing Form INC-1 with RoC. Calzone ensures that the name complies with naming guidelines.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Step 4: Apply for License</b>
                                    <ul className="list-disc pl-5">
                                        <li>A license application (Form INC-12) is filed with RoC, including supporting documents like MoA, AoA, and other declarations. Once approved, a license under Section 8 is granted.</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Step 5: Incorporation of the Company</b>
                                    <ul className="list-disc pl-5">
                                        <li>Upon obtaining the license, incorporation documents are filed using SPICe+ forms with RoC. Once approved, RoC issues a Certificate of Incorporation with a unique Corporate Identification Number (CIN).</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                                🧾 Section 8 Company – Annual Compliance Requirements
                            </h2>

                            {/* Annual Financial Filings */}
                            <div className="mb-6">
                                <h3 className="">📊 Annual Financial Filings</h3>
                                <p className="text-gray-700 mb-1">
                                    <strong>AOC-4:</strong> File financial statements with the Registrar of Companies (RoC) within <strong>30 days</strong> of the Annual General Meeting (AGM).
                                </p>
                                <p className="text-gray-700">
                                    <strong>MGT-7:</strong> Submit annual returns within <strong>60 days</strong> of the AGM.
                                </p>
                            </div>

                            {/* Tax Filings */}
                            <div className="mb-6">
                                <h3 className="">💰 Tax Filings</h3>
                                <p className="text-gray-700 mb-1">
                                    <strong>Income Tax Return:</strong> Must be filed <strong>before September 30th</strong> of every financial year.
                                </p>
                                <p className="text-gray-700">
                                    <strong>GST Filings:</strong> If applicable, file <strong>monthly or quarterly GST returns</strong> based on turnover and registration type.
                                </p>
                            </div>

                            {/* Board & General Meetings */}
                            <div className="mb-6">
                                <h3 className="">📅 Board & General Meetings</h3>
                                <p className="text-gray-700 mb-1">
                                    <strong>Board Meetings:</strong> At least <strong>one board meeting every six months</strong> is mandatory.
                                </p>
                                <p className="text-gray-700">
                                    <strong>AGM:</strong> Must be conducted <strong>before September 30th</strong> each year, with a <strong>minimum 21-day prior notice</strong> to all members.
                                </p>
                            </div>

                            {/* Auditor Appointment & Reports */}
                            <div className="mb-6">
                                <h3 className="">👨‍💼 Auditor Appointment & Reports</h3>
                                <p className="text-gray-700 mb-1">
                                    <strong>Auditor Appointment (Form ADT-1):</strong> An auditor must be appointed <strong>within 15 days</strong> of company incorporation.
                                </p>
                                <p className="text-gray-700">
                                    <strong>Director’s Report:</strong> A report summarizing the <strong>financial and operational performance</strong> must be prepared and submitted annually.
                                </p>
                            </div>

                            {/* Maintain Statutory Registers */}
                            <div className="mb-6">
                                <h3 className="">📚 Maintain Statutory Registers</h3>
                                <p className="text-gray-700">Maintain proper and up-to-date records for:</p>
                                <ul className="list-disc list-inside text-gray-700 mt-2">
                                    <li>Register of Members</li>
                                    <li>Register of Loans</li>
                                    <li>Register of Board Meetings</li>
                                    <li>Register of Charges (if any)</li>
                                </ul>
                            </div>
                        </div>


                        <div id="Timeline">
                            <h2 className="sub-heading">Timeline for Section 8 Company Registration</h2>
                            <p>
                                The entire registration process takes approximately 20-30 days, depending on government approvals and
                                timely document submission.
                            </p>
                        </div>

                        <div id="Section8Company">
                            <h2 className="sub-heading">Section 8 Company Registration Fees</h2>
                            <table className="table-auto border border-gray-300 w-full mt-6 text-sm text-left">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border px-4 py-2 font-semibold text-gray-700">Service</th>
                                        <th className="border px-4 py-2 font-semibold text-gray-700">Estimated Cost (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">DSC & DIN</td>
                                        <td className="border px-4 py-2">₹3,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">Name Reservation</td>
                                        <td className="border px-4 py-2">₹1,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">Govt & Incorporation Fees</td>
                                        <td className="border px-4 py-2">₹6,000 - ₹8,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">Notary & Stamp Charges</td>
                                        <td className="border px-4 py-2">₹2,000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-danger">Note: Prices may vary based on regulatory changes and additional services required</p>
                        </div>

                        <div id="WhyTrust">
                            <h2 className="sub-heading">Why Trust Calzone for Your Section 8 Company Registration?</h2>
                            <ul>
                                <li>Hassle-Free Documentation & Filing</li>
                                <li>Quick & Transparent Process</li>
                                <li>Expert Guidance for Post-Registration Compliance</li>
                                <li>Affordable Pricing with No Hidden Costs</li>
                            </ul>
                            <p>
                                Let Calzone assist you in making a difference. Start your Section 8 Company today! Contact us for expert
                                consultation and registration support.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8CompanyPage;
