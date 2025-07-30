// import React from "react";
// import { ChevronRight } from "lucide-react";

const content = [
  {
    title: "MOA & AOA Amendments",
    points: [
      "MOA and AOA",
      "MOA",
      "AOA",
      "How to Amend",
      "AOA Amendment Procedure",
      "Key Differences",
      "Why Choose",
      "FAQs"
    ]
  },
  {
    title: "What Are MOA and AOA?",
    description:
      "The Memorandum of Association (MOA) and Articles of Association (AOA) are the charter documents of a company, defining its constitution, objectives, management, and governance. These documents are finalized at the time of incorporation, but as businesses grow and evolve, amendments to the MOA and AOA become necessary to adapt to new operational needs. At Calzone, we simplify the process of MOA & AOA amendments, ensuring seamless legal compliance with the Companies Act, 2013 and handling all necessary documentation and filings."
  },
  {
    title: "What is the Memorandum of Association (MOA)?",
    description:
      "The MOA is the company's constitution, defining its purpose, scope, and operational boundaries. The Articles of Association (AOA) cannot override MOA provisions, making it the primary governing document of a company. MOA is structured as per Section 4 of the Companies Act, 2013, and includes the following key clauses:",
    list: [
      "Name Clause: Specifies the legal name of the company.",
      "Registered Office Clause: Determines jurisdiction of RoC and state of registration.",
      "Object Clause: Defines main and incidental objectives.",
      "Liability Clause: Specifies liability type - Limited by Shares, Limited by Guarantee, or Unlimited.",
      "Capital Clause: Defines authorized share capital, number of shares, and value.",
      "Special Clause for OPC: Specifies nominee in case of owner's demise."
    ]
  },
  {
    title: "What is the Articles of Association (AOA)?",
    description:
      "The AOA lays down the company's rules and regulations, governing its internal management, administration, and decision-making processes. Governed under Section 5 of the Companies Act, 2013. Tables vary based on company type:",
    table: [
      { type: "Table F", company: "Company limited by shares" },
      { type: "Table G", company: "Company limited by guarantee with share capital" },
      { type: "Table H", company: "Company limited by guarantee without share capital" },
      { type: "Table I", company: "Unlimited company with share capital" },
      { type: "Table J", company: "Unlimited company without share capital" }
    ],
    list: [
      "Share Capital & Share Transfers",
      "Dividends & Reserves",
      "Board & General Meetings",
      "Voting Rights & Proxies",
      "KMP & Borrowing Powers",
      "Winding Up & Liquidation"
    ]
  },
  {
    title: "How to Amend MOA and AOA?",
    description:
      "MOA Amendment Procedure depends on the clause being amended:",
    steps: [
      "Change in Company Name: Special Resolution + Form INC-24 + CG approval + new Certificate",
      "Change in Registered Office: Form INC-23 + CG approval if interstate + filings with both RoCs",
      "Change in Object Clause: Special Resolution + newspaper ad + exit option to dissenters + Form MGT-14"
    ]
  },
  {
    title: "AOA Amendment Procedure",
    steps: [
      "Board Meeting to approve amendment",
      "EGM to pass Special Resolution",
      "File Form MGT-14 with RoC"
    ]
  },
  {
    title: "Key Differences Between MOA and AOA",
    table: [
      { feature: "Purpose", moa: "Defines company's constitution & objectives", aoa: "Regulates management & operations" },
      { feature: "Clauses", moa: "Fixed (5 main clauses)", aoa: "Flexible (various internal functions)" },
      { feature: "Mandatory Filing", moa: "Must be filed at incorporation", aoa: "Optional but recommended" },
      { feature: "Amendments", moa: "Cannot be retrospective", aoa: "Can be retrospective" }
    ]
  },
  {
    title: "Why Choose Calzone for MOA & AOA Amendments?",
    list: [
      "End-to-End Compliance",
      "Hassle-Free Documentation",
      "Expert Legal Assistance",
      "Affordable & Transparent Pricing"
    ]
  },
  {
    title: "FAQs",
    list: [
      "How long does an MOA or AOA amendment take?",
      "Do all amendments require shareholder approval?",
      "Can Calzone manage the entire amendment process?"
    ]
  }
];

export default function MOAAOAAmendments() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">MOA & AOA Amendments</h1>
      {content.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-navy">{section.title}</h2>
          {section.description && <p className="mb-4 text-gray-700 text-lg">{section.description}</p>}

          {section.points && (
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {section.points.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.list && (
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.steps && (
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {section.steps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )}

          {section.table && (
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border border-gray-300 mt-4">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(section.table[0]).map((col, i) => (
                      <th key={i} className="border px-4 py-2 capitalize">
                        {col.replace("moa", "MOA").replace("aoa", "AOA")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, i) => (
                    <tr key={i}>
                      {Object.values(row).map((val, j) => (
                        <td key={j} className="border px-4 py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
