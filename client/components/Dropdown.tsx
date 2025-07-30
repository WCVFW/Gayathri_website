import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Make sure you have lucide-react installed

function Dropdown({ title, open, setOpen, children }) {
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending close timeout
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // 150ms delay is a good balance for most users
  };

  useEffect(() => {
    // Clear timeout on component unmount to prevent memory leaks
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger */}
      <div className="flex items-center cursor-pointer space-x-1 hover:text-green-600 transition-colors py-2"> {/* Added py-2 for better hit area */}
        <span className="capitalize">{title}</span>
        {/* Rotate ChevronDown based on 'open' state */}
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown Panel */}
      {open && (
        <div
          className={`
            absolute
            top-full
            left-0
            mt-2 {/* Consistent margin from the trigger */}
            z-50
            bg-white
            shadow-xl
            rounded-xl
            p-5
            text-sm
            opacity-0
            scale-95
            transition-all
            duration-200
            ease-out
            group-hover:opacity-100
            group-hover:scale-100
            transform
          `}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;