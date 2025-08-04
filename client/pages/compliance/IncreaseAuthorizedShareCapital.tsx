import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
const faqData = [
  {
    question: 'eForm MGT-14: This form must be filed within 30 days of passing the resolution on the MCA portal containing the following details:',
    answer: (
      <>
        After passing the resolution to increase the authorised share capital, the company must file the following forms with the Registrar of Companies (ROC):
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li className='text-white'><strong>Details of the company</strong> along with its Corporate Identification Number (CIN)</li>
          <li className='text-white'><strong>The purpose</strong> for which the form is being filed (e.g., increase in authorised capital)</li>
          <li className='text-white'><strong>Date of dispatch</strong> of the notice for the board/general meeting</li>
          <li className='text-white'><strong>Date of passing</strong> the resolution during the meeting</li>
          <li className='text-white'><strong>Details of the resolution</strong> that was passed</li>
          <li className='text-white'><strong>Digital Signatures</strong> of the authorised signatory and Director Identification Number (DIN), wherever required</li>
        </ul>
      </>
    ),
  },
  {
    question: 'The following attachments shall be uploaded while filing the form',
    answer: (
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li className='text-white'>
          <strong>Notice of the EGM:</strong> A formal notice issued to shareholders regarding the Extraordinary General Meeting.
        </li>
        <li className='text-white'>
          <strong>Explanatory Statement:</strong> Annexed to the notice as required under Section 102, explaining the purpose and implications of the resolution.
        </li>
        <li className='text-white'>
          <strong>Certified Copy of the Resolution:</strong> Passed at the Extraordinary General Meeting, to be filed with relevant forms.
        </li>
        <li className='text-white'>
          <strong>Altered Memorandum of Association (MOA):</strong> Reflecting the revised authorised share capital.
        </li>
        <li className='text-white'>
          <strong>Altered Articles of Association (AOA):</strong> If applicable, to align with the changes in capital structure.
        </li>
      </ul>
    ),
  },
  {
    question: 'eForm SH-7: This form shall also be filed within 30 days of passing the resolution in the EGM to intimate the registrar regarding the increase in the authorised share capital containing the following details:',
    answer: (
      <>
        {/* The required attachments typically include: */}
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li className='text-white'>
            <strong>Company Details with CIN:</strong> Includes the legal name and Corporate Identification Number.
          </li>
          <li className='text-white'>
            <strong>Type of Resolution Passed:</strong> Specifies whether it was an ordinary or special resolution.
          </li>
          <li className='text-white'>
            <strong>Date of the Meeting:</strong> The date on which the resolution was approved.
          </li>
          <li className='text-white'>
            <strong>MGT-14 Service Request Number (SRN):</strong> Reference number generated upon successful filing.
          </li>
          <li className='text-white'>
            <strong>Authorised Capital Details:</strong> Indicates the original and revised authorised share capital.
          </li >
          <li className='text-white'>
            <strong>Breakup of Additional Capital:</strong> Provides a detailed structure of the increased capital.
          </li>
          <li className='text-white'>
            <strong>Stamp Duty Particulars:</strong> Information regarding the payment of applicable stamp duty.
          </li>
          <li className='text-white'>
            <strong>DSCs and DINs:</strong> Digital signatures and Director Identification Numbers, if required.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'The following attachments shall be uploaded while filing the form',
    answer: (
      <>
        {/* The required attachments typically include: */}
        <div className="space-y-3 mt-2 pl-2 border-l-4 border-blue-500 text-white">
          <p className='text-white'>
            <strong>Certified Copy of the Resolution:</strong> Passed in the EGM for alteration of the authorised capital.
          </p  >
          <p className='text-white'>
            <strong>Altered Memorandum of Association (MOA):</strong> Copy reflecting the updated authorised capital.
          </p>
          <p className='text-white'>
            <strong>Altered Articles of Association (AOA):</strong> If applicable, include the revised AOA document.
          </p>
          <p className='text-white'>
            <strong>Optional Attachments:</strong> Any other supporting documents as required or relevant.
          </p>
        </div>

      </>
    ),
  },
];

const IncreaseAuthorizedShareCapital: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(section);
        }, 200);
      }
    }
  }, [location.search]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };


  const sections = [
    'procedure-and-documents',
    'what-is-authorised-capital',
    'how-to-increase',
    'filings-with-registrar',
    'documents-required',
  ];

  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
        Increase Authorized Share Capital
      </h1>
      <div className="sticky top-20 z-10 bg-white shadow-sm">

        <div className="flex flex-wrap max-w-screen-xl ">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-300 ${activeSection === id
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } border-b-2 border-transparent bg-transparent focus:outline-none`}
            >
              {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
      <section id="increase-authorised-share-capital" className="mb-10">
        <h2 className="text-xl font-semibold text-navy mb-3">
          Increase Authorised Share Capital: Procedure and Documents
        </h2>

        <p className="mb-4 text-gray-700">
          While incorporating a company, the promoters need to decide upon the authorised share capital of the company. Generally, the authorised share capital is decided based on the requirements of the company at the time of incorporation. However, as the company grows, the fund requirements of the company grow thus necessitating the issue of more shares. But how can more shares be issued by a company if it has already issued all the shares? Let's see!
        </p>
      </section>

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

      <section id="increase-capital" className="mb-10">
        <h2 className="text-xl font-semibold text-navy mb-3">
          How to Increase the Authorized Share Capital – Step-by-Step Process
        </h2>

        <p className="mb-4 text-gray-700">
          Following is the procedure to increase the authorised share capital of the company:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>
            <strong>Check the Articles of Association:</strong> The Articles of Association must contain a clause to authorize the company to increase its authorised share capital. If such a clause is absent, then articles shall be amended by passing a special resolution in the general meeting to insert this clause. It is only after the authorization of the articles that the company can increase its authorised share capital.
          </li>

          <li>
            <strong>Holding a Board Meeting:</strong> A board meeting shall be held to call an Extraordinary General Meeting. Notice shall be sent to all the directors of the company to their registered addresses at least 7 days before the meeting. In the board meeting, the board must resolve to call an Extraordinary General Meeting (EGM) to present the resolution for the alteration of the authorised share capital.
          </li>

          <li>
            <strong>Holding the Extraordinary General Meeting:</strong> A notice for the extraordinary general meeting shall be sent to the shareholders of the company including the date, time, place, and agenda of the meeting.
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-700">
              <li>The notice must also state the method of voting in the EGM to be adopted for passing the resolution.</li>
              <li>The notice shall be given not less than 21 days prior to the conduct of the meeting. A shorter notice can be served on fulfillment of requisite conditions.</li>
              <li>In the meeting, an ordinary resolution shall be passed to increase the authorised share capital of the company.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* <div className="space-y-4 mb-6 text-gray-800">
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
      </div> */}

      <div className="space-y-4 text-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-3">
          Filings with the Registrar of Companies
        </h2>

        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white bg-navy focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-white bg-navy">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>


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
