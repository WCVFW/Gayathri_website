import React from "react";
import SectionNavigation from "../SectionNavigation";
const societyRegistrationSections = [
    "Overview",
    "Register",
    "Step-by-Step",
    "Key Purposes",
    "Documents",
    "Why Choose"
];

const SocietyRegistration: React.FC = () => {
    return (
        <div className="px-6 md:px-16 py-8">
            <h1 className="text-3xl font-bold">Society Registration</h1>
            <p className="mt-2">Establish Your Non-Profit Organization the Right Way</p>
            <SectionNavigation sections={societyRegistrationSections} />
            <section>
                <h2 className="text-2xl font-semibold">What is Society Registration?</h2>
                <p>
                    A society is a group of individuals who come together for a common cause—whether it's promoting education, art, culture, sports, science, charity, or any other social welfare activity. Society registration provides a legal identity to these organizations, allowing them to function transparently while enjoying various benefits.
                </p>
                <p>
                    At Calzone, we simplify the society registration process so you can focus on your mission without getting tangled in legal formalities.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Why Register a Society?</h2>
                <ul className="list-disc list-inside">
                    <li>Legal Recognition - A registered society is a recognized legal entity.</li>
                    <li>Property Ownership - Only registered societies can own assets in their name.</li>
                    <li>Better Credibility - Government bodies, donors, and financial institutions prefer registered entities.</li>
                    <li>Eligibility for Grants & Funds - Access government and corporate grants with ease.</li>
                    <li>Limited Liability for Members - Protection from individual financial liability.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Who Can Form a Society?</h2>
                <p>
                    A minimum of seven individuals can form a society. Additionally, Indian citizens, businesses, foreigners, or even registered societies can apply for society registration.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Steps for Society Registration with Calzone</h2>

                <h3 className="text-xl font-semibold">Step 1: Choose a Unique Name</h3>
                <p>
                    The society name must be unique and must not:
                </p>
                <ul className="list-disc list-inside">
                    <li>Be similar to an existing registered society.</li>
                    <li>Imply government association or approval.</li>
                    <li>Violate the Emblems & Names Act, 1950.</li>
                </ul>
                <p><strong>Pro Tip:</strong> We conduct a name search to ensure quick approval.</p>

                <h3 className="text-xl font-semibold">Step 2: Draft the Memorandum of Association (MoA)</h3>
                <p>The MoA is a vital document outlining the objectives and structure of the society. It includes:</p>
                <ul className="list-disc list-inside">
                    <li>Society's name and registered address</li>
                    <li>Objectives and purpose of the society</li>
                    <li>Names and details of all members</li>
                    <li>Details of governance and decision-making processes</li>
                </ul>

                <h3 className="text-xl font-semibold">Step 3: Prepare Rules & Regulations</h3>
                <p>This document outlines how the society will be managed, covering:</p>
                <ul className="list-disc list-inside">
                    <li>Membership rules and eligibility</li>
                    <li>Governing body roles and responsibilities</li>
                    <li>Frequency and format of meetings</li>
                    <li>Rules for managing society funds</li>
                    <li>Dispute resolution mechanism</li>
                    <li>Dissolution procedure (if required)</li>
                </ul>

                <h3 className="text-xl font-semibold">Step 4: Gather Required Documents</h3>
                <p>We assist in collecting, organizing, and verifying all necessary documents:</p>
                <h4 className="text-lg font-medium">For Members</h4>
                <ul className="list-disc list-inside">
                    <li>PAN Card (for all founding members)</li>
                    <li>Identity Proof (Aadhar Card, Passport, Driving License, Voter ID)</li>
                    <li>Address Proof (Utility Bill, Bank Statement, or any official document)</li>
                </ul>

                <h4 className="text-lg font-medium">For Registered Office</h4>
                <ul className="list-disc list-inside">
                    <li>Proof of address (Electricity Bill/Water Bill)</li>
                    <li>No Objection Certificate (NOC) from the property owner (if rented)</li>
                </ul>

                <h4 className="text-lg font-medium">Additional Documents</h4>
                <ul className="list-disc list-inside">
                    <li>Affidavit stating the society's objectives and members' consent</li>
                    <li>Signed List of all members of the governing body</li>
                </ul>

                <h3 className="text-xl font-semibold">Step 5: Submission to the Registrar of Societies</h3>
                <p>
                    Once all documents are ready, we file your society registration application with the appropriate State Registrar of Societies.
                </p>

                <h3 className="text-xl font-semibold">Step 6: Verification & Approval</h3>
                <p>
                    The Registrar reviews the application and verifies all submitted documents. If everything is in order, a Certificate of Registration is issued.
                </p>
                <p><strong>Processing Time:</strong> Typically 30-45 days, depending on the state.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Key Purposes of Society Registration</h2>
                <p>Societies are primarily formed to benefit the public and serve social causes. As per Section 20 of the Societies Registration Act, 1860, societies can be registered for:</p>
                <ul className="list-disc list-inside">
                    <li>Education & Literacy - Schools, colleges, and research institutes</li>
                    <li>Charitable Causes - Support for underprivileged communities</li>
                    <li>Cultural & Artistic Development - Promotion of art, music, and literature</li>
                    <li>Environmental Conservation - Sustainable development initiatives</li>
                    <li>Scientific Research - Innovations in healthcare, agriculture, and technology</li>
                    <li>Libraries & Museums - Establishment of public knowledge centers</li>
                </ul>
                <p>At Calzone, we help societies of all kinds navigate the legal process and achieve their mission.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Required Documents for Society Registration</h2>
                <h3 className="text-xl font-medium">Member Documents:</h3>
                <ul className="list-disc list-inside">
                    <li>PAN Card for all founding members</li>
                    <li>Identity proof (Aadhar/Passport/Driving License)</li>
                    <li>Address proof (Utility Bill/Bank Statement)</li>
                </ul>
                <h3 className="text-xl font-medium">Society Documents:</h3>
                <ul className="list-disc list-inside">
                    <li>Memorandum of Association (MoA) - Society’s objectives and structure</li>
                    <li>Rules & Regulations - Internal governance policies</li>
                    <li>Registered Office Address Proof - Utility bill + NOC from owner (if rented)</li>
                    <li>List of Governing Body Members - With their signatures</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Why Choose Calzone for Society Registration?</h2>
                <ul className="list-disc list-inside">
                    <li>Hassle-Free Registration - We handle all paperwork, submission, and follow-ups.</li>
                    <li>Quick Processing - Faster approval through proper documentation.</li>
                    <li>Expert Guidance - Dedicated consultants for personalized support.</li>
                    <li>Post-Registration Support - Assistance with compliance and legal requirements.</li>
                </ul>
            </section>
        </div >
    );
};

export default SocietyRegistration;
