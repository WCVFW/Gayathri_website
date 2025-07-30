import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '@/assets/gayathrilogo.png';
import Dropdown from './Dropdown';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const navigation = [
  { name: 'Contact Us', href: '/contact' },
];

const companyRegistrations = [
  'Sole Proprietorship Registration',
  'Partnership Firm Registration',
  'Limited Liability Partnership (LLP)',
  'Private Limited Company (Pvt Ltd)',
  'Public Limited Company',
  'One Person Company (OPC)',
  'Startup Registration',
  'Section 8 Company (NGO)',
  'Producer Company',
  'Indian Subsidiary',
  'Branch Office Registration',
  'Foreign Subsidiary Setup',
  '80G & 12A NGO Registration',
  'Society Registration',
  'Trust Registration',
];

const licenses = [
  'DSC',
  'Udyam Registration',
  'FSSAI Registration',
  'IEC Registration',
  'Drug & Cosmetic License Registration',
  'PF Registration',
  'ESI Registration',
];

const complianceItems = [
  'Adding Director',
  'Removal of Director',
  'Increase Authorized Share Capital',
  'Change Company Address',
  'MOM & AOA Amendments',
  'DIN Validation (Dir 3 KYC)',
  'DIN surrender',
  'Closure of Private Limited Company',
  'LLP Name Change',
  'LLP Adding a Designated Partner',
  'Changes in LLP Agreement',
  'LLP Roc Compliance',
  'Closure of LLP',
];

const gstServices = [
  'GST Registration',
  'GST Return Filing',
  'Letter of Undertaking',
  'GST E-Way Bill',
  'GST Registration Cancellation/Surrender',
  'GST Registration Modification',
];

const incomeTaxServices = [
  'Income Tax Return Filing',
  'Form 15CA & Form 15CB Filing',
  'NRI Income Tax Planning & Filing',
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (name: string, open: boolean) => {
    setDropdowns((prev) => ({ ...prev, [name]: open }));
  };

  const renderListLinks = (items: string[], base: string) =>
    items.map((item, index) => (
      <li key={index}>
        <Link
          to={`/services/${base}/${slugify(item)}`}
          className="block py-1 px-2 rounded hover:bg-green-100 hover:text-green-700 transition-all"
        >
          {item}
        </Link>
      </li>
    ));

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-[Poppins] text-sm text-[#0a2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Gayathri Thiruvengadam</h1>
              <p className="text-sm text-gray-600 leading-none">& Associates</p>
            </div>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden md:flex items-center gap-6 ml-8 text-[15px] font-medium relative">
            {/* Dropdown 1: New Business */}
            <Dropdown
              title="New Business"
              open={dropdowns.business}
              setOpen={(o) => toggleDropdown('business', o)}
              // The positionClass prop is used by the Dropdown component to correctly position the panel
              positionClass="left-1/2 -translate-x-1/2"
            >
              {/* This div now only contains the width and the internal grid layout */}
              <div className="w-[620px] grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-3 text-gray-800">Registrations</h3>
                  <ul className="space-y-2 text-gray-700">{renderListLinks(companyRegistrations, 'newbusiness')}</ul>
                </div>
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-3 text-gray-800">Licenses</h3>
                  <ul className="space-y-2 text-gray-700">{renderListLinks(licenses, 'newbusiness')}</ul>
                </div>
              </div>
            </Dropdown>

            {/* Dropdown 3: GST & Income Tax */}
            <Dropdown
              title="GST & Income Tax"
              open={dropdowns.tax}
              setOpen={(o) => toggleDropdown('tax', o)}
              // This dropdown is centered
              positionClass="left-1/2 -translate-x-1/2"
            >
              {/* This div now only contains the width and the internal grid layout */}
              <div className="w-[620px] grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-3 text-gray-800">GST</h3>
                  <ul className="space-y-2 text-gray-700">{renderListLinks(gstServices, 'gst')}</ul>
                </div>
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-3 text-gray-800">Income Tax</h3>
                  <ul className="space-y-2 text-gray-700">{renderListLinks(incomeTaxServices, 'income-tax')}</ul>
                </div>
              </div>
            </Dropdown>
            {/* Dropdown 2: Compliance */}
            <Dropdown
              title="Compliance"
              open={dropdowns.compliance}
              setOpen={(o) => toggleDropdown('compliance', o)}
              // This dropdown is left-aligned
              positionClass="left-0"
            >
              {/* This div now only contains the width and list */}
              <div className="w-[420px]">
                <ul className="space-y-2 text-gray-700">{renderListLinks(complianceItems, 'compliance')}</ul>
              </div>
            </Dropdown>


            {/* Static Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-green-600 transition-colors text-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl px-4 py-4 space-y-4 transition-all duration-300 ease-in-out">
            {/* New Business for Mobile */}
            <DropdownMobile title="New Business">
              <h4 className="font-semibold text-gray-800 mb-2">Registrations</h4>
              <ul className="space-y-1 text-gray-700">{renderListLinks(companyRegistrations, 'newbusiness')}</ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2">Licenses</h4>
              <ul className="space-y-1 text-gray-700">{renderListLinks(licenses, 'newbusiness')}</ul>
            </DropdownMobile>

            {/* Compliance for Mobile */}
            <DropdownMobile title="Compliance">
              <ul className="space-y-1 text-gray-700">{renderListLinks(complianceItems, 'compliance')}</ul>
            </DropdownMobile>

            {/* GST & Income Tax for Mobile */}
            <DropdownMobile title="GST & Income Tax">
              <h4 className="font-semibold text-gray-800 mb-2">GST</h4>
              <ul className="space-y-1 text-gray-700">{renderListLinks(gstServices, 'gst')}</ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2">Income Tax</h4>
              <ul className="space-y-1 text-gray-700">{renderListLinks(incomeTaxServices, 'income-tax')}</ul>
            </DropdownMobile>

            {/* Static Links for Mobile */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="block text-gray-800 hover:text-green-600 py-2 border-b border-gray-200 last:border-b-0"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// Desktop Dropdown Component
// function Dropdown({ title, open, setOpen, children }) {
//   return (
//     <div
//       className="relative group"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setTimeout(() => setOpen(false), 100)}
//     >
//       <div className="flex items-center cursor-pointer space-x-1 hover:text-green-600 transition-colors">
//         <span className="capitalize">{title}</span>
//         <ChevronDown className="" />
//       </div>

//       {/* Dropdown Panel */}
//       {open && (
//         <div
//           className="
//             absolute
//             top-full
//             left-0
//             z-50
//             bg-white
//             border
//             shadow-xl
//             rounded-lg
//             p-5
//             text-sm
//             transition-all
//           "
//         >
//           {/* children content inserted here */}
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// Mobile Dropdown Component
function DropdownMobile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-3 py-2 font-semibold text-left hover:text-green-600"
      >
        <span>{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="pl-3 pb-3">{children}</div>}
    </div>
  );
}
