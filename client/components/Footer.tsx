import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  
  Linkedin, Twitter, Facebook,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import logo from '@/assets/gayathrilogo.png';

export function Footer() {
  const [showMoreBusiness, setShowMoreBusiness] = useState(false);
  const [showMoreComplianceServices, setShowMoreComplianceServices] = useState(false);
  const [showMoreVirtualCFOServices, setShowMoreVirtualCFOServices] = useState(false);

  const businessServices = [
    'Sole Proprietorship Registration',
    'Partnership Firm Registration',
    'LLP Registration',
    'Private Limited Company',
    'Public Limited Company',
    'One Person Company',
  ];
  const businessServices1 = [
    'Start Up-Business Registration',
    'Section 8 Company',
    'Producer Company',
    'Indian Subsidiary Registration',
    'Branch Office Registration',
    'Foreign Subsidiary',
    '80G & 12A Registration',
    'Society Registration',
    'Trust Registration',
  ];

  const complianceServices = [
    'Add Director',
    'Removal of Director',
    'Increase Authorized Share Capital',
    'Change company address',
    'MOM & AOA Amendments',
    'DIN Validation (Dir 3 KYC)',
  ];
  const complianceServices1 = [
    'DIN surrender',
    'Closure of Private Limited Company',
    'LLP Name Change',
    'LLP Adding a Designated Partner',
    'Changes in LLP Agreement',
    'LLP Roc Compliance',
    'Closure of LLP',
  ];

  const virtualCFO = [
    'Bookkeeping and Accounting',
    'Payroll Services',
    'Virtual CFO Services',
    'CMA Report Preparation',
    'Business Plan Preparation',
    'IND-AS',
  ];
  const virtualCFO1 = [
    'Valuation for Merger and Acquisition',
    'Taxation for Merger and Acquisition',
  ];

  const taxServices = [
    'GST Registration',
    'GST Return Filing',
    'Letter of Undertaking (LUT)',
    'GST E-Way Bill',
    'GST Registration surrender/Cancelation',
    'GST Registration Modification',
  ];
  const incometax = [
    'Income Tax Return Filing',
    'Form 15CA & Form 15CB Filing',
    'NRI Income Tax Planning and Filing',
  ];

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Query', href: '/query' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Terms & Condition', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="text-white text-sm font-[Poppins] leading-6 bg-[#306590]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg object-contain" />
              <div>
                <h3 className="text-base font-bold">Gayathri Thiruvengadam</h3>
                <p className="text-xs opacity-90 text-white ">& Associates</p>
              </div>
            </div>
            <p className="opacity-90 text-white ">
              Chartered Accountancy firm with over 25 years of expertise delivering business, compliance, and tax solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 opacity-80"><Linkedin size={18} /></a>
              <a href="#" className="hover:opacity-100 opacity-80"><Twitter size={18} /></a>
              <a href="#" className="hover:opacity-100 opacity-80"><Facebook size={18} /></a>
            </div>
          </div>

          {/* New Business + Virtual CFO */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-base mb-2">New Business</h3>
              <ul className="space-y-1">
                {businessServices.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
                {showMoreBusiness && businessServices1.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
              </ul>
              <button onClick={() => setShowMoreBusiness(!showMoreBusiness)} className="flex items-center gap-1 text-gold mt-1">
                {showMoreBusiness ? 'Show Less' : 'Show More'}
                {showMoreBusiness ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2 mt-6">Virtual CFO</h3>
              <ul className="space-y-1">
                {virtualCFO.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
                {showMoreVirtualCFOServices && virtualCFO1.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
              </ul>
              <button onClick={() => setShowMoreVirtualCFOServices(!showMoreVirtualCFOServices)} className="flex items-center gap-1 text-gold mt-1">
                {showMoreVirtualCFOServices ? 'Show Less' : 'Show More'}
                {showMoreVirtualCFOServices ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          {/* Compliance + Useful Links */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-base mb-2">Compliance</h3>
              <ul className="space-y-1">
                {complianceServices.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
                {showMoreComplianceServices && complianceServices1.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
              </ul>
              <button onClick={() => setShowMoreComplianceServices(!showMoreComplianceServices)} className="flex items-center gap-1 text-gold mt-1">
                {showMoreComplianceServices ? 'Show Less' : 'Show More'}
                {showMoreComplianceServices ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2 mt-6">Useful Links</h3>
              <ul className="space-y-1">
                {usefulLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="opacity-90 hover:text-gold text-white ">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tax & Income */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-base mb-2">GST Services</h3>
              <ul className="space-y-1">
                {taxServices.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2 mt-6">Income Tax Filing</h3>
              <ul className="space-y-1">
                {incometax.map(item => (
                  <li key={item} className="opacity-90 hover:text-gold text-white ">{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs opacity-80">
          © 2025 Gayathri Thiruvengadam & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
