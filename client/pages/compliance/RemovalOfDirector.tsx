// components/RemovalOfDirector.tsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = [
  'overview',
  'director-removal',
  'director',
  'director-removal-way',
  'step-by-step',
  'checklist',
  'special-case',
  'form-dir-12',
  'why-choose',
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      <div
        className="cursor-pointer text-xl font-semibold text-navy hover:underline"
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      {open && <div className="mt-2 text-gray-700 text-base">{children}</div>}
    </div>
  );
};

export default function RemovalOfDirector() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

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
  return (
    <div className="py-10 max-w-6xl mx-auto text-gray-800 font-poppins">
      <h1 className="text-4xl font-bold text-navy mb-10">Removal of Director</h1>
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
      <Section title="overview">
        <div className="text-gray-800 space-y-4">
          <p>
            The removal of a director is a formal process governed by the provisions of the <strong>Companies Act, 2013</strong>, along with the company’s Articles of Association and internal policies. Whether in a private limited or public company, strict compliance with legal and procedural requirements is essential to ensure a lawful and conflict-free transition.
          </p>

          <p>
            <strong>At Calzone</strong>, we assist businesses in navigating this process seamlessly — from issuing notices and drafting resolutions to filing statutory forms like <strong>DIR-12</strong> — ensuring complete compliance with <strong>Ministry of Corporate Affairs (MCA)</strong> regulations.
          </p>
        </div>
      </Section>


      <Section  title="When Can a Director Be Removed?">
        <div className="text-gray-800 space-y-4" id='director-removal'>
          <p>
            A company may need to remove a director under certain circumstances to ensure corporate integrity, regulatory compliance, or strategic alignment. Common reasons include:
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Breach of fiduciary duties or misconduct</strong> – Any unethical or unlawful behavior may warrant removal.</li>
            <li><strong>Non-compliance with statutory obligations</strong> – Failure to meet responsibilities under the Companies Act.</li>
            <li><strong>Shareholder dissatisfaction</strong> – If shareholders lose confidence in the director’s actions or leadership.</li>
            <li><strong>Long-term absenteeism</strong> – Absence from board meetings for 12 months leads to automatic vacation of office (Section 167).</li>
            <li><strong>Voluntary resignation</strong> – A director may choose to resign for personal or professional reasons.</li>
            <li><strong>Court or Tribunal orders</strong> – Legal intervention due to fraud, mismanagement, or other serious issues.</li>
          </ul>

          <p>
            <strong>Calzone</strong> ensures the removal process is fully compliant with the Companies Act, 2013, while minimizing disruptions to your business operations.
          </p>
        </div>
      </Section>

      <Section title="Who is a Director Under the Companies Act, 2013?">
        <div className="text-gray-800 space-y-4"id='director'>
          <p>
            A <strong>director</strong> is an individual appointed by a company to manage its affairs, ensure regulatory compliance, and drive strategic decisions. Under the Companies Act, 2013, directors are key to a company’s governance and fiduciary responsibilities.
          </p>

          <p>
            Directors play a critical role in upholding transparency, protecting stakeholder interests, and maintaining financial discipline. The Companies Act outlines various types of directors based on their roles and independence.
          </p>

          <div>
            <h4 className="font-semibold text-base mb-1">Types of Directors:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Executive Directors</strong> – Actively involved in day-to-day operations (e.g., CEO, CFO, COO).
              </li>
              <li>
                <strong>Non-Executive Directors</strong> – Provide strategic input but do not manage daily affairs.
              </li>
              <li>
                <strong>Independent Directors</strong> – Appointed to ensure objectivity and protect minority shareholders; have no financial interest in the company.
              </li>
            </ul>
          </div>

          <p>
            If a director fails to fulfill their statutory duties or acts against the interest of the company, they can be removed through a structured legal process in compliance with the Companies Act.
          </p>
        </div>
      </Section>

      <Section title="Ways to Remove a Director from a Company">
        <div className="space-y-6 text-gray-800">
          <div>
            <h4 className="font-semibold text-lg">1. Voluntary Resignation</h4>
            <p className="mt-1 mb-2">
              A director may step down voluntarily by submitting a formal resignation letter. The process involves the following steps:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Director submits a written resignation to the Board.</li>
              <li>Board acknowledges and accepts the resignation via resolution.</li>
              <li>Company files <strong>Form DIR-12</strong> with the ROC to update official records.</li>
              <li>Once accepted by the ROC, the director is officially removed from company records.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">2. Compulsory Removal</h4>
            <p className="mt-1 mb-2">
              In cases of non-performance, misconduct, or legal conflict, a director may be removed by shareholders or through a legal order:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Initiated under <strong>Section 169</strong> of the Companies Act, 2013.</li>
              <li>Shareholders issue a <strong>special notice</strong> at least 14 days before the General Meeting.</li>
              <li>The director is given the opportunity to submit a written representation or defend themselves.</li>
              <li>Shareholders pass an <strong>ordinary resolution</strong> for removal during the meeting.</li>
              <li>The company files <strong>Form DIR-12</strong> with the ROC to formalize the removal.</li>
              <li>In severe cases (fraud, oppression, etc.), the <strong>NCLT</strong> can intervene and order removal.</li>
            </ul>
          </div>

          <p className="mt-4 text-gray-700">
            <strong>Calzone</strong> ensures that all director removal processes—voluntary or compulsory—are handled with precision, compliance, and full confidentiality.
          </p>
        </div>
      </Section>

      <Section title="Step-by-Step Process for Removal of a Director">
        <ol className="list-decimal ml-5 space-y-2 text-gray-700" id='step-by-step'>
          <li>
            <strong>Issue a Special Notice:</strong> In accordance with Section 115 of the Companies Act, 2013, issue a special notice to initiate the director removal process. Notify the concerned director and all shareholders.
          </li>
          <li>
            <strong>Allow the Director to Respond:</strong> The director has the right to submit a written representation defending their position. This must be shared with all shareholders prior to voting.
          </li>
          <li>
            <strong>Conduct a General Meeting:</strong> Hold an Extraordinary General Meeting (EGM) or Annual General Meeting (AGM) where shareholders vote on the removal by passing an ordinary resolution.
          </li>
          <li>
            <strong>File Form DIR-12 with ROC:</strong> Upon passing the resolution, file Form DIR-12 with the Registrar of Companies (ROC), along with the board/shareholder resolution and any resignation letter (if applicable).
          </li>
          <li>
            <strong>Update Company Records:</strong> Reflect the change in all internal records, statutory registers, and regulatory documents. If required, initiate the process to appoint a replacement director.
          </li>
        </ol>
        <p className="mt-4 text-gray-800">
          <strong>Calzone</strong> manages the entire removal process—ensuring every step is executed with legal accuracy and zero hassle.
        </p>
      </Section>

      <Section title="Checklist for Director Removal">
        <ul className="list-disc ml-5 space-y-1 text-gray-700"id='checklist'>
          <li>Issue a <strong>special notice</strong> under Section 115, Companies Act 2013</li>
          <li>Allow the director an opportunity to <strong>submit a written response</strong></li>
          <li>Hold a <strong>General Meeting</strong> and allow voting on the removal</li>
          <li><strong>Pass a resolution</strong> for removal of the director</li>
          <li><strong>File Form DIR-12</strong> with the ROC within 30 days</li>
          <li><strong>Update internal records</strong> and notify stakeholders</li>
        </ul>
      </Section>


      <Section title="Special Cases of Director Removal">
        <div id="SpecialRemovalCases" className="mb-12">
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-1">1. Absence from Board Meetings for 12 Months</h4>
            <p className="text-gray-700">
              Under <strong>Section 167 of the Companies Act, 2013</strong>, if a director fails to attend any board meetings for 12 consecutive months, their office is automatically vacated.
              The company must file <strong>Form DIR-12</strong> with the ROC to record the removal.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-1">2. Suo-Moto Removal by the Board</h4>
            <p className="text-gray-700">
              In cases of <strong>misconduct or non-performance</strong>, the Board may initiate removal by calling an <strong>Extraordinary General Meeting (EGM)</strong>.
              Upon passing a resolution, the company must file <strong>Form DIR-12</strong> with the ROC.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-1">3. Removal by National Company Law Tribunal (NCLT)</h4>
            <p className="text-gray-700">
              If a director is involved in <strong>fraud, oppression, or mismanagement</strong>, the <strong>NCLT</strong> may order their removal.
              An application can be submitted by shareholders, regulators, or the company. After hearings, if removal is ordered,
              it must be executed immediately and <strong>Form DIR-12</strong> must be filed accordingly.
            </p>
          </div>
        </div>

      </Section>

      <Section title="Form DIR-12 – Filing Requirements for Director Removal">
        <div id="form-dir-12" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4"></h3>
          <p className="text-gray-700 mb-3">
            Filing <strong>Form DIR-12</strong> is mandatory under the <strong>Companies Act, 2013</strong> to officially remove a director from MCA records.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Company Name & Corporate Identification Number (CIN)</li>
            <li>Director's Name & Director Identification Number (DIN)</li>
            <li>Date of Removal & Reason for Removal</li>
            <li>Type of Meeting & Resolution Details</li>
            <li>Attachments: Board Resolution, Notice of Meeting, Consent/Resignation Letter</li>
          </ul>
        </div>


        <br />
        <strong>Penalties for Late Filing of Form DIR-12</strong>
        <table className="table-auto w-full border border-gray-300 mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Delay Period</th>
              <th className="border px-4 py-2">Penalty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Up to 30 days</td>
              <td className="border px-4 py-2">2x normal fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">30–60 days</td>
              <td className="border px-4 py-2">4x normal fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">60–90 days</td>
              <td className="border px-4 py-2">6x normal fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">90–180 days</td>
              <td className="border px-4 py-2">10x normal fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">180+ days</td>
              <td className="border px-4 py-2">12x normal fee</td>
            </tr>
          </tbody>
        </table>
        <div id="Dir12Penalty" className="mb-12">
          <p className="text-gray-700 mb-2">
            <strong>Non-filing of Form DIR-12</strong> can attract a penalty of <strong>₹50,000</strong> for the company and <strong>₹500 per day</strong> for continued non-compliance.
          </p>
          <p className="text-gray-700">
            At <strong>Calzone</strong>, we ensure <strong>timely and accurate filings</strong> to help you avoid legal penalties and disputes.
          </p>
        </div>
      </Section>

      <Section title="Why Choose Calzone for Director Removal?">
        <ul className="list-disc list-inside text-gray-700 space-y-2"id='why-choose'>
          <li><strong>Complete Legal Compliance</strong> – We ensure 100% adherence to the Companies Act, 2013.</li>
          <li><strong>Hassle-Free Documentation</strong> – We prepare and file Form DIR-12, special notices, and resolutions.</li>
          <li><strong>Expert Guidance & Support</strong> – From Board Meetings to ROC filings, we handle everything.</li>
          <li><strong>Cost-Effective & Transparent Pricing</strong> – No hidden charges, just reliable service.</li>
        </ul>
      </Section>
    </div>
  );
}
