// src/components/ExpandableFAQ.tsx
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  title: string;
  content: string;
}

interface ExpandableFAQProps {
  faqs: FAQItem[];
}

const ExpandableFAQ = ({ faqs }: ExpandableFAQProps) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <ExpandableItem key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};

const ExpandableItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b p-4 bg-navy">
      <button
        className="flex justify-between items-center w-full text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{title}</span>
        {isOpen ? <FaMinus className="text-white" /> : <FaPlus className="text-white" />}
      </button>
      {isOpen && <div className="mt-2 text-sm text-white whitespace-pre-line">{content}</div>}
    </div>
  );
};

export default ExpandableFAQ;
