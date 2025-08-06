// src/components/SectionNavigation.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SectionNavigationProps {
  sections: string[];
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      navigate(`?section=${id}`);
      setActiveSection(id);
    }
  };

  return (
    <div className="mb-5">
      <div className="sticky top-16 z-10 bg-white shadow-sm">
        <div className="flex flex-wrap gap-2 justify-start ">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 
                ${activeSection === id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-800 hover:text-green-600 hover:border-green-600'
                } bg-transparent border-b-2 border-transparent focus:outline-none`}
            >
              {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation;
