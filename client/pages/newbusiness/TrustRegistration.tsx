import SectionNavigation from "../SectionNavigation";


const trustRegistrationSections = [
    "Overview",
    "Why & Who",
    "Types",
    "Step-by-Step",
    "Key Benefits",
    "Post-Registration",
    "Why Choose"
];

const TrustRegistration = () => {
    return (
        <div className="px-6 md:px-16 py-8">
            <h1 className="text-3xl font-bold">Trust Registration</h1>
            <p>
                Establish Your Trust with Confidence and Legal Protection
            </p>
            <SectionNavigation sections={trustRegistrationSections} />
            <section>
                <h2 className="text-2xl font-semibold">What is Trust Registration?</h2>
                <p>
                    A trust is a legal entity created when an individual or organization
                    (Settlor) transfers property to another individual or entity
                    (Trustee) to manage it for the benefit of a third party (Beneficiary).
                    Trusts serve a range of purposes, from charitable activities to
                    private wealth management, and registration ensures legal
                    recognition, financial security, and compliance with tax
                    regulations.
                </p>
                <p>
                    At Calzone, we simplify the trust registration process, ensuring
                    seamless compliance while you focus on making an impact.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold">Why Register a Trust?</h3>
                <ul className="list-disc ml-6">
                    <li>Legal Recognition - A registered trust becomes a separate legal entity.</li>
                    <li>Tax Benefits - Eligible for tax exemptions under the Income Tax Act.</li>
                    <li>Trust Property Protection - Prevents misuse or unauthorized claims.</li>
                    <li>Structured Governance - Clearly defines roles, duties, and rights.</li>
                    <li>Public Credibility - Builds trust with donors, beneficiaries, and stakeholders.</li>
                    <li>No Need for Probate - Simplifies inheritance planning and wealth transfer.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Who Can Create a Trust?</h3>
                <ul className="list-disc ml-6">
                    <li>Any individual, group, or organization can establish a trust, provided:</li>
                    <li>The intent to create a trust is clear.</li>
                    <li>The purpose of the trust is lawful.</li>
                    <li>The trustee is capable of managing trust affairs.</li>
                    <li>The trust deed is properly drafted and executed.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold">Public Trust</h3>
                <p>
                    A Public Trust is set up for the benefit of society, focusing on
                    charitable, educational, religious, or public welfare activities.
                    Examples include:
                </p>
                <ul className="list-disc ml-6">
                    <li>Educational institutions</li>
                    <li>Healthcare & medical facilities</li>
                    <li>Religious organizations</li>
                    <li>Environmental & social welfare initiatives</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Private Trust</h3>
                <p>
                    A Private Trust is created for the benefit of specific individuals or
                    groups, such as family members or organizations. These are commonly
                    used for:
                </p>
                <ul className="list-disc ml-6">
                    <li>Wealth & Estate Planning - Protecting family assets.</li>
                    <li>Corporate Trusts - Managing business succession.</li>
                    <li>Employee Benefit Trusts - Incentivizing employees with financial security.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Step-by-Step</h2>
                <ol className="list-decimal ml-6">
                    <li>
                        <strong>Define Your Trust's Purpose & Name</strong>
                        <p>
                            Choose a unique name that aligns with your trust’s objectives. We
                            conduct a trust name search to ensure hassle-free approval.
                        </p>
                    </li>
                    <li>
                        <strong>Draft a Trust Deed</strong>
                        <p>A Trust Deed is a legal document outlining:</p>
                        <ul className="list-disc ml-6">
                            <li>Name and objectives of the trust</li>
                            <li>Names & addresses of settlor, trustees, and beneficiaries</li>
                            <li>Terms of governance and succession</li>
                            <li>Rules regarding fund management and property usage</li>
                            <li>Duration & dissolution clauses</li>
                            <li>Appointment & resignation of trustees</li>
                            <li>Conflict resolution mechanisms</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Execute the Trust Deed</strong>
                        <p>
                            Signed on stamp paper as per state laws by settlor and trustees in
                            presence of two witnesses. ID proofs & photos required.
                        </p>
                    </li>
                    <li>
                        <strong>Submit the Trust Deed for Registration</strong>
                        <p>Submit at local sub-registrar’s office with:</p>
                        <ul className="list-disc ml-6">
                            <li>Original Trust Deed (Signed & notarized)</li>
                            <li>Registered Office Proof + NOC from Owner</li>
                            <li>Trustee ID Proofs</li>
                            <li>Two Witnesses with ID proofs</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Receive the Trust Registration Certificate</strong>
                        <p>Issued within 7–14 days depending on the state.</p>
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Key Benefits</h2>
                <ul className="list-disc ml-6">
                    <li>Legal Safeguards – Property protection & compliance</li>
                    <li>Tax Benefits – Exemptions under 12A & 80G</li>
                    <li>Operational Transparency – Clear governance framework</li>
                    <li>Efficient Wealth Transfer – Avoids probate; secures legacy</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Post-Registration</h2>
                <ul className="list-disc ml-6">
                    <li>Obtain PAN Card for Trust</li>
                    <li>Maintain Financial Records & Accounts</li>
                    <li>File Annual Income Tax Returns</li>
                    <li>GST Registration (if applicable)</li>
                    <li>Audit Reports for Large Trusts</li>
                    <li>Apply for 80G & 12A Exemption</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Why Choose</h2>
                <ul className="list-disc ml-6">
                    <li>Expert Legal Guidance – Trust deed & documentation</li>
                    <li>Quick Registration – Timely follow-ups & processing</li>
                    <li>Tax Planning – Maximize exemptions and benefits</li>
                    <li>Transparent Pricing – No hidden charges</li>
                </ul>
            </section>
        </div>
    );
};

export default TrustRegistration;
