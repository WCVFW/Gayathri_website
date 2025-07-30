import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '@/assets/gayathrilogo.png';
import Dropdown from './Dropdown';

// Dropdown state type
type DropdownState = {
  [key: string]: boolean;
};

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const navigation = [{ name: 'Contact Us', href: '/contact' }];

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
  const [dropdowns, setDropdowns] = useState<DropdownState>({});

  const toggleDropdown = (name: string, open: boolean) => {
    setDropdowns((prev) => ({ ...prev, [name]: open }));
  };

  const renderListLinks = (items: string[], base: string) =>
    items.map((item, index) => (
      <li key={index}>
        <Link
          to={`/services/${base}/${slugify(item)}`}
          onClick={() => {
            setDropdowns({});
            setIsMenuOpen(false); // Optional: close mobile menu too
          }}
          className="block py-1 px-2 rounded hover:bg-green-100 hover:text-green-700 transition-all text-xs leading-snug"
        >
          {item}
        </Link>
      </li>
    ));

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-poppins text-sm text-[#0a2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="text-xl font-bold leading-tight">Gayathri Thiruvengadam</h1>
              <p className="text-sm text-gray-600 leading-none">& Associates</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-8 text-[14px] font-medium relative">
            <Dropdown
              title="New Business"
              open={dropdowns.business}
              setOpen={(o) => toggleDropdown('business', o)}
              positionClass="left-1/2 -translate-x-1/2"
              panelWidthClass="w-[580px]"
            >
              <div className="text-xs leading-snug grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-2 text-gray-800 text-sm">Registrations</h3>
                  <ul className="space-y-1 text-gray-700">{renderListLinks(companyRegistrations, 'newbusiness')}</ul>
                </div>
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-2 text-gray-800 text-sm">Licenses</h3>
                  <ul className="space-y-1 text-gray-700">{renderListLinks(licenses, 'newbusiness')}</ul>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              title="GST & Income Tax"
              open={dropdowns.tax}
              setOpen={(o) => toggleDropdown('tax', o)}
              positionClass="left-1/2 -translate-x-1/2"
              panelWidthClass="w-[580px]"
            >
              <div className="text-xs leading-snug grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-2 text-gray-800 text-sm">GST</h3>
                  <ul className="space-y-1 text-gray-700">{renderListLinks(gstServices, 'gst')}</ul>
                </div>
                <div>
                  <h3 className="font-semibold border-b pb-2 mb-2 text-gray-800 text-sm">Income Tax</h3>
                  <ul className="space-y-1 text-gray-700">{renderListLinks(incomeTaxServices, 'income-tax')}</ul>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              title="Compliance"
              open={dropdowns.compliance}
              setOpen={(o) => toggleDropdown('compliance', o)}
              positionClass="left-0"
              panelWidthClass="w-[300px]"
            >
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">
                {renderListLinks(complianceItems, 'compliance')}
              </ul>
            </Dropdown>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-green-600 transition-colors text-gray-800 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl px-4 py-4 space-y-4 transition-all duration-300 ease-in-out">
            <DropdownMobile title="New Business">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Registrations</h4>
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">{renderListLinks(companyRegistrations, 'newbusiness')}</ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2 text-sm">Licenses</h4>
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">{renderListLinks(licenses, 'newbusiness')}</ul>
            </DropdownMobile>

            <DropdownMobile title="Compliance">
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">{renderListLinks(complianceItems, 'compliance')}</ul>
            </DropdownMobile>

            <DropdownMobile title="GST & Income Tax">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">GST</h4>
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">{renderListLinks(gstServices, 'gst')}</ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-2 text-sm">Income Tax</h4>
              <ul className="space-y-1 text-gray-700 text-xs leading-snug">{renderListLinks(incomeTaxServices, 'income-tax')}</ul>
            </DropdownMobile>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-800 hover:text-green-600 py-2 border-b border-gray-200 last:border-b-0 text-sm"
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

function DropdownMobile({ title, children }: { title: string; children: React.ReactNode }) {
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