// import React from "react";

import SectionNavigation from "../SectionNavigation";

// import { Link } from "react-router-dom";
const sections = [
  "Overview",
  "Why Register",
  "Eligibility",
  "Documents",
  "Step-by-Step",
  "Post-Registration"
];

const IndianSubsidiaryRegistration = () => {
    return (
        <div className="px-6 md:px-16 py-10 space-y-12">
            <section>
                <h1 className="text-3xl font-bold mb-4">Indian Subsidiary Registration</h1>
                <p className="text-lg text-gray-700 mb-2">
                    Indian Subsidiary Registration with Calzone - Expand Your Business in India with Ease
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                    As businesses seek to expand and tap into new markets, forming a subsidiary company is one of the most effective ways to establish a strong presence. A subsidiary company allows a foreign or domestic parent company to set up an independent entity while maintaining operational control.
                </p>
                <p className="text-gray-700 mb-4">
                    India, with its booming economy, vast consumer base, and supportive government policies, has become a hotspot for global businesses. Whether you are a foreign company looking to establish operations in India or a domestic company expanding into new sectors, registering a subsidiary company is the ideal approach.
                </p>
                <p className="text-gray-700">
                    At Calzone, we simplify the entire subsidiary registration process, ensuring that your business is legally compliant, tax-efficient, and ready to operate.
                </p>
            </section>
            <SectionNavigation sections={sections}/>
            <section>
                <h2 className="text-2xl font-semibold mb-4">What is an Indian Subsidiary?</h2>
                <p className="text-gray-700 mb-2">
                    An Indian subsidiary is a company incorporated under Indian law where more than 50% of the shareholding is controlled by another company (parent company). The parent company can be a domestic or foreign entity, but the subsidiary operates as an independent company in India.
                </p>
                <p className="text-gray-700 mb-2 font-semibold">Types of Indian Subsidiaries:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Wholly Owned Subsidiary (WOS) - The parent company owns 100% of the shares.</li>
                    <li>Partially Owned Subsidiary - The parent company owns more than 50% but less than 100% of the shares.</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Why Register a Subsidiary in India?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Market Expansion - Gain direct access to India's massive consumer base.</li>
                    <li>Brand Independence - Operate under a separate brand identity while retaining parent company control.</li>
                    <li>Operational Control - The parent company controls decision-making and management.</li>
                    <li>Tax & Financial Benefits - Subsidiaries can avail tax incentives, funding opportunities, and government subsidies.</li>
                    <li>Separate Legal Identity - A subsidiary is legally independent, ensuring limited liability protection.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                    Calzone ensures that your subsidiary setup is smooth, efficient, and fully compliant with Indian regulations.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria for Indian Subsidiary Registration</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Minimum 2 Directors - At least one director must be a resident of India.</li>
                    <li>Minimum 2 Shareholders - The parent company must own at least 50% of shares.</li>
                    <li>No Minimum Capital Requirement - You can start with any amount of capital.</li>
                </ul>
                <p className="text-gray-700 mt-2">
                    Calzone guides you through eligibility checks and ensures all legal formalities are met.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Documents Required for Indian Subsidiary Registration
                </h2>

                <p className="text-lg font-medium text-gray-800 mb-2">
                    For Directors & Shareholders
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Passport-size photographs.</li>
                    <li>PAN Card & Aadhaar Card.</li>
                    <li>Valid ID proof (Voter ID, Driving License, or Passport).</li>
                    <li>Residential proof (Utility bill, Bank statement).</li>
                </ul>

                <p className="text-lg font-medium text-gray-800 mb-2">
                    For Parent Company (if applicable)
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Certificate of Incorporation.</li>
                    <li>Board resolution authorizing the investment.</li>
                    <li>Notarized/Apostilled charter documents (MoA & AoA).</li>
                </ul>

                <p className="text-lg font-medium text-gray-800 mb-2">
                    For Registered Office in India
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Utility bill of the business premises (Electricity, Gas, Water).</li>
                    <li>Rental agreement & No Objection Certificate from the owner (if rented).</li>
                </ul>

                <p className="text-gray-700 mt-2">
                    Calzone assists in preparing and verifying all necessary documents to avoid delays.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">
                    Step-by-Step Process for Subsidiary Company Registration with Calzone
                </h2>
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                    <li>
                        <strong>Digital Signature Certificate (DSC) for Directors:</strong> Directors must obtain a DSC to sign electronic documents.
                    </li>
                    <li>
                        <strong>Director Identification Number (DIN) Application:</strong> A unique DIN is issued to directors, allowing them to hold a legal position in the company.
                    </li>
                    <li>
                        <strong>Name Reservation on MCA Portal:</strong> The subsidiary's name must be unique and approved by the Ministry of Corporate Affairs (MCA). Can be reserved through <em>SPICe+ Part-A</em> form.
                    </li>
                    <li>
                        <strong>Filing Incorporation Documents (SPICe+ Part-B):</strong> File incorporation documents, including MoA & AoA. Apply for PAN, TAN, EPFO, ESIC, and Professional Tax.
                    </li>
                    <li>
                        <strong>Submission & Approval from the Registrar of Companies (RoC):</strong> The RoC verifies documents and issues the Certificate of Incorporation.
                    </li>
                    <li>
                        <strong>Open a Bank Account & Start Operations:</strong> Once incorporated, the subsidiary must open a bank account and deposit the investment capital.
                    </li>
                </ol>
                <p className="text-gray-700 mt-4">
                    <strong>Calzone handles everything</strong>, from document filing to final approval, ensuring a hassle-free experience.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Post-Registration Compliance for Indian Subsidiaries</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>Annual General Meetings (AGM)</strong> – Must be held within 9 months of the financial year-end.
                    </li>
                    <li>
                        <strong>Board Meetings</strong> – Minimum 4 meetings per year (one every 120 days).
                    </li>
                    <li>
                        <strong>Filing Financial Statements (AOC-4)</strong> – Submit annual financial reports to the RoC.
                    </li>
                    <li>
                        <strong>Filing Annual Returns (MGT-7)</strong> – Mandatory compliance filing for all companies.
                    </li>
                    <li>
                        <strong>Statutory Registers & Tax Filings</strong> – Maintain registers of members, debenture holders, and related party transactions.
                    </li>
                    <li>
                        <strong>GST & Income Tax Returns</strong> – File periodic GST & tax returns to remain compliant.
                    </li>
                </ul>
                <p className="text-gray-700 mt-4">
                    Calzone offers ongoing compliance support to keep your subsidiary in good legal standing.
                </p>
            </section>
        </div>
    );
};

export default IndianSubsidiaryRegistration;
