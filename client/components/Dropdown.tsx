import { useRef, useEffect, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  title: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  children: ReactNode;
  positionClass?: string;
  panelWidthClass?: string;
}

function Dropdown({
  title,
  open,
  setOpen,
  children,
  positionClass = 'left-0',
  panelWidthClass = 'w-[280px]',
}: DropdownProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-1 cursor-pointer text-gray-800 hover:text-green-600 transition-colors py-2 px-1">
        <span className="capitalize text-sm font-medium">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      <div
        className={`
          absolute top-full ${positionClass} z-50 mt-2
          transform transition-all duration-200 ease-out
          ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          bg-white shadow-xl rounded-xl ${panelWidthClass} p-3
          text-xs leading-snug
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
