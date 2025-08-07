import React from 'react';
import SectionNavigation from '../SectionNavigation';

const registrationSections = [
  "Overview",
  "12A Registration",
  "80G & 12A",
  "Step-by-Step",
  "Validity & Renewal",
  "Documents",
  "Why Choose"
];

const EightyGAndTwelveA: React.FC = () => {
  return (
    <div className="px-6 md:px-16 py-8">
      {/* Hero Section */}
      <section>
        <div>
          <h1 className="text-3xl md:text-3xl font-bold mb-4">Get Your 80G & 12A Registration with Calzone</h1>
          <p className="text-lg md:text-xl">Unlock Tax Benefits & Boost Donations for Your Non-Profit Organization</p>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          For non-profit organizations, gaining trust and financial support is crucial. The 80G & 12A registration not only establishes credibility
          but also enables donors to claim tax deductions, making your NGO more attractive for donations.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Section 80G allows donors to claim deductions on their taxable income for donations made.</li>
          <li>Section 12A exempts the income of your organization from taxation, ensuring that funds received are used entirely for charitable purposes.</li>
        </ul>
        <p>
          At <strong>Calzone</strong>, we help non-profits streamline the registration process, ensuring compliance with tax regulations and maximizing funding opportunities.
        </p>
      </section>
      <SectionNavigation sections={registrationSections} />
      {/* What is 80G Registration */}
      <section>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is 80G Registration?</h2>
          <p className="mb-4">
            80G registration is a certification issued by the Income Tax Department, allowing donors to claim tax deductions on their donations to your organization.
            This significantly enhances your fundraising potential, as both individuals and corporations are more likely to contribute when they receive tax benefits.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Benefits of 80G Registration:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Encourages larger donations from individuals and businesses</li>
            <li>Enhances credibility and attracts more funding</li>
            <li>Applicable for domestic and corporate donations</li>
            <li>Provides a competitive edge over non-registered organizations</li>
          </ul>
        </div>
      </section>

      {/* What is 12A Registration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What is 12A Registration?</h2>
        <p className="mb-4">
          12A registration is essential for any NGO or non-profit organization to be recognized as a charitable entity under Indian tax laws.
          With this registration, your organization will not have to pay income tax on funds received, ensuring that donations and grants are used effectively.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Benefits of 12A Registration:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Complete tax exemption on NGO income</li>
          <li>Enhances eligibility for government & CSR funding</li>
          <li>Builds trust & accountability with donors</li>
          <li>Helps in securing foreign grants & international collaborations</li>
        </ul>
      </section>

      {/* Why Get 80G & 12A with Calzone */}
      <section>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Get 80G & 12A Registration with Calzone?</h2>
          <p className="mb-4">
            At Calzone, we specialize in helping non-profits, trusts, and Section 8 companies seamlessly register under 80G & 12A.
            Our expert team ensures that your organization meets all legal requirements and submits a flawless application.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Hassle-Free Process</strong> - We handle all the paperwork so you can focus on your mission.</li>
            <li><strong>Quick Turnaround</strong> - Get your registration completed in the shortest time possible.</li>
            <li><strong>Ongoing Compliance Support</strong> - We help you renew your certification every 5 years as per the latest rules.</li>
            <li><strong>Expert Guidance</strong> - Personalized assistance for smooth registration.</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Step-by-Step Registration Process</h2>
        <p className="mb-6">At Calzone, we ensure a seamless and efficient 80G & 12A registration process for your NGO:</p>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Application Submission:</strong> File Form 10A with the Commissioner of Income Tax (Exemptions) and attach all supporting documents.
          </li>
          <li>
            <strong>Document Verification:</strong> The Commissioner reviews your application. Additional information may be requested for clarity.
          </li>
          <li>
            <strong>Approval & Certification:</strong> Upon successful verification, the registration certificate is issued. If rejected, the application can be resubmitted with modifications.
          </li>
        </ol>
        <p className="mt-4"><strong>Processing Time:</strong> Typically 30-45 days, depending on the complexity of your case.</p>
      </section>

      {/* Validity & Renewal */}
      <section>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Validity & Renewal of 80G & 12A Registration</h2>
          <p className="mb-4">
            Previously, 80G & 12A registrations were permanent. However, as per recent government regulations:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Validity is now limited to 5 years.</li>
            <li>Renewal is mandatory before expiration.</li>
            <li>NGOs must revalidate their status online through the Income Tax e-filing portal.</li>
          </ul>
          <p>
            <strong>Calzone ensures</strong> you never miss a deadline by handling all revalidation procedures on time.
          </p>
        </div>
      </section>

      {/* Documents Required */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Documents Required for 80G & 12A Registration</h2>
        <p className="mb-4">To register under 80G & 12A, you will need:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>NGO Registration Certificate (Trust Deed / Section 8 Incorporation Certificate)</li>
          <li>PAN Card of the NGO</li>
          <li>Audited Financial Statements (last 3 years, if applicable)</li>
          <li>FCRA Registration ID (if accepting foreign donations)</li>
          <li>NGO Darpan ID (if available)</li>
          <li>Details of Charitable Activities undertaken by the NGO</li>
        </ul>
        <p className="mt-4">
          Don’t worry! If you're unsure about any documents, <strong>Calzone</strong> will assist you in organizing and filing them correctly.
        </p>
      </section>

      {/* Why Choose Calzone */}
      <section className="bg-green-50 py-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Calzone for 80G & 12A Registration?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Zero Hassles</strong> – We handle the legalities while you focus on your cause.</li>
            <li><strong>Expert Team</strong> – Professional support from tax & compliance specialists.</li>
            <li><strong>Affordable Pricing</strong> – No hidden charges, only transparent pricing.</li>
            <li><strong>End-to-End Support</strong> – From initial application to renewal reminders, we’ve got you covered.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EightyGAndTwelveA;
