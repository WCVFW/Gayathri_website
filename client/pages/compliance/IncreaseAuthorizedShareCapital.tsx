import React from 'react';

const IncreaseAuthorizedShareCapital: React.FC = () => {
  return (
    <div className="bg-white px-4 md:px-10 py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Increase Authorized Share Capital
      </h1>

      <h2 className="text-2xl font-semibold text-navy mb-4">Procedure and Key Documents</h2>

      <p className="mb-6">
        At the time of company incorporation, promoters determine the authorized share capital based on initial funding needs. However, as the business expands, the company may need additional funds—often requiring the issuance of more shares.
        But how can a company issue more shares if it has already exhausted its current authorized capital? The answer lies in increasing the authorized share capital, a formal process governed by the Companies Act, 2013.
      </p>

      <h2 className="text-xl font-semibold text-navy mb-3">What is Authorized Capital?</h2>
      <p className="mb-6">
        As per <strong>Section 2(8) of the Companies Act, 2013</strong>, authorized capital (also called nominal capital) is the maximum share capital that a company is legally permitted to issue, as defined in its <strong>Memorandum of Association (MOA)</strong>.
      </p>
      <p className="mb-6">
        Simply put, it represents the cap on the total value of shares a company can issue to shareholders. To issue shares beyond this limit, the company must follow a formal procedure to increase the authorized capital by altering the capital clause in its MOA.
      </p>

      <p className="">Checklist for Increasing the Authorised Share Capital</p>
      <p>Following is the checklist for increasing the authorised share capital:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Check the AOA</li>
        <li>Alter the AOA (if required)</li>
        <li>Conduct a Board Meeting</li>
        <li>Conduct an Extraordinary General Meeting</li>
        <li>Pass an Ordinary Resolution</li>
        <li>Intimate the registrar regarding the increase in the authorised share capital</li>
      </ul>

      <h2 className="text-xl font-semibold text-navy mb-3">
        How to Increase the Authorized Share Capital – Step-by-Step Process
      </h2>

      <div className="space-y-4 mb-6 text-gray-800">
        <p>After passing the resolution, the company shall file the following forms with the registrar of the company along with the payment of prescribed fees:</p>
        <h2 className="text-xl font-semibold text-navy mb-4">
          Frequently Asked Questions (FAQs) – Increasing Authorised Share Capital
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-navy">1. Do I need to check the Articles of Association before increasing authorised share capital?</h3>
            <p>
              Yes, the Articles of Association (AOA) must include a provision allowing the company to increase its authorised share capital.
              If this clause is missing, the AOA needs to be amended first by passing a <em>special resolution</em> at a general meeting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-navy">2. What is the role of the Board Meeting in this process?</h3>
            <p>
              A Board Meeting must be held to propose the increase in authorised share capital and to approve the convening of an
              <em> Extraordinary General Meeting (EGM)</em>. All directors must receive a notice of this meeting at least 7 days in advance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-navy">3. What happens during the Extraordinary General Meeting (EGM)?</h3>
            <p>
              A formal notice of the EGM must be sent to shareholders, stating the date, time, location, agenda, and method of voting.
              This notice should be issued at least 21 days before the meeting (unless a shorter notice is agreed upon). During the EGM,
              an <em>ordinary resolution</em> must be passed to approve the increase in authorised share capital.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-navy mb-3">Filings with the Registrar of Companies</h2>
      <p className="mb-4">The following forms must be filed with the ROC after the resolution:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>eForm MGT-14:</strong> Filed within 30 days of the resolution with required attachments.
        </li>
        <li>
          <strong>eForm SH-7:</strong> Filed to inform the ROC of the capital increase, also within 30 days.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-navy mb-3">
        Documents Required
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>Digital Signature Certificate (DSC) of the authorised director</li>
        <li>Director Identification Number (DIN) of the concerned director</li>
        <li>Memorandum of Association (MoA)</li>
        <li>Articles of Association (AoA)</li>
        <li>PAN Card of the company</li>
        <li>Certificate of Incorporation</li>
        <li>Notice of the Extraordinary General Meeting (EGM) along with the explanatory statement</li>
        <li>Certified copy of the resolution passed at the EGM</li>
      </ul>
    </div>
  );
};

export default IncreaseAuthorizedShareCapital;
