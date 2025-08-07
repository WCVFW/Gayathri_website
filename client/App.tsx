import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Index } from "./pages/Index";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import NotFound from "./pages/NotFound";
// COmpliance
import AddDirectorPage from "./pages/compliance/AddDirectorPage";
import RemovalOfDirector from "./pages/compliance/RemovalOfDirector";
import IncreaseAuthorizedShareCapital from './pages/compliance/IncreaseAuthorizedShareCapital';
import ChangeCompanyAddress from './pages/compliance/ChangeCompanyAddress';
import MOAAOAAmendments from './pages/compliance/MOAAOAAmendments';
import DINValidation from './pages/compliance/DINValidation';
import DINSurrender from './pages/compliance/DINSurrender';
import ClosureOfPrivateLimitedCompany from './pages/compliance/ClosureOfPrivateLimitedCompany';
import LlpNameChange from './pages/compliance/LlpNameChange';
import LLPDesignatedPartner from './pages/compliance/LLPDesignatedPartner';
import LLPCompliance from './pages/compliance/LLPCompliance';
import LLPAgreementChanges from './pages/compliance/LLPAgreementChanges';
import ClosureOfLLP from './pages/compliance/ClosureOfLLP';
// business
import SoleProprietorshipRegistration from "./pages/newbusiness/SoleProprietorshipRegistration";
import PartnershipFirmRegistration from "./pages/newbusiness/PartnershipFirmRegistration";
import LLPRegistration from "./pages/newbusiness/LLPRegistration";
import PrivateLimitedCompanyRegistration from "./pages/newbusiness/PrivateLimitedCompanyRegistration";
import Publiclimitedcompany from "./pages/newbusiness/Publiclimitedcompany";
import Onepersoncompany from "./pages/newbusiness/Onepersoncompany";
import StartupRegistration from "./pages/newbusiness/Startupbusinessregistration";
import Section8CompanyPage from "./pages/newbusiness/Section8CompanyPage";
// GST
import Form15CA15CBGuide from "./pages/GSTincomeTax/form15caand15cb";
import GSTModification from "./pages/GSTincomeTax/GSTegistrationmodification";
import GSTCancellation from "./pages/GSTincomeTax/GSTregistrationcancellationsrrender";
import GstRegistration from "./pages/GSTincomeTax/GSTregistration";
import GstReturnFiling from "./pages/GSTincomeTax/GSTreturnfilling";
import GSTEwaybill from "./pages/GSTincomeTax/GSTEwaybill";
import NRIincometaxplanningandfiling from "./pages/GSTincomeTax/NRIincometaxplanningandfiling";
import ScrollToTop from './components/ScrollToTop';
import ITRGuide from "./pages/GSTincomeTax/incometaxreturnfilleing";
import LutFiling from "./pages/GSTincomeTax/letterofundertaking";
import ProducerCompanyRegistration from "./pages/newbusiness/ProducerCompanyRegistration";
import IndianSubsidiaryRegistration from "./pages/newbusiness/IndianSubsidiaryRegistration";
import BranchOfficeRegistration from "./pages/newbusiness/BranchOfficeRegistration";
import ForeignSubsidiary from "./pages/newbusiness/ForeignSubsidiary";
import EightyGAndTwelveA from "./pages/newbusiness/EightyGAndTwelveA";
import SocietyRegistration from "./pages/newbusiness/SocietyRegistration";
import TrustRegistration from "./pages/newbusiness/TrustRegistration";
import DscRegistration from "./pages/newbusiness/DigitalSignatureCertificates";
import UdyamRegistration from "./pages/newbusiness/UdyamRegistration";
import FssaiRegistration from "./pages/newbusiness/FSSAIRegistration";
import IecRegistration from "./pages/newbusiness/IecRegistration";
import PfRegistration from "./pages/newbusiness/PfRegistration";
import EsiRegistration from "./pages/newbusiness/EsiRegistration";
import DrugCosmeticLicense from "./pages/newbusiness/DrugCosmeticLicense";


const queryClient = new QueryClient();

// Placeholder component for routes not yet implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-navy mb-8">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        This page is under development. Please check back soon or contact us for more information.
      </p>
      <a
        href="tel:+919876543210"
        className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
      >
        Call +91 98765 43210
      </a>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              {/* // COmpliance */}
              <Route path="/services/compliance/adding-director" element={<AddDirectorPage />} />
              <Route path="/services/compliance/removal-of-director" element={<RemovalOfDirector />} />
              <Route path="/services/compliance/increase-authorized-share-capital" element={<IncreaseAuthorizedShareCapital />} />
              <Route path="/services/compliance/change-company-address" element={<ChangeCompanyAddress />} />
              <Route path="/services/compliance/mom-aoa-amendments" element={<MOAAOAAmendments />} />
              <Route path="/services/compliance/din-validation-dir-3-kyc" element={<DINValidation />} />
              <Route path="/services/compliance/din-surrender" element={<DINSurrender />} />
              <Route path="/services/compliance/Closure-of-Private-Limited-Company" element={<ClosureOfPrivateLimitedCompany />} />
              <Route path="/services/compliance/llp-name-change" element={<LlpNameChange />} />
              <Route path="/services/compliance/llp-adding-a-designated-partner" element={<LLPDesignatedPartner />} />
              <Route path="/services/compliance/changes-in-llp-agreement" element={<LLPAgreementChanges />} />
              <Route path="/services/compliance/llp-roc-compliance" element={<LLPCompliance />} />
              <Route path="/services/compliance/closure-of-llp" element={<ClosureOfLLP />} />
              {/* // business */}
              <Route path="/services/newbusiness/sole-proprietorship-registration" element={<SoleProprietorshipRegistration />} />
              <Route path="/services/newbusiness/partnership-firm-registration" element={<PartnershipFirmRegistration />} />
              <Route path="/services/newbusiness/limited-liability-partnership-llp" element={<LLPRegistration />} />
              <Route path="/services/newbusiness/private-limited-company-pvt-ltd" element={<PrivateLimitedCompanyRegistration />} />
              <Route path="/services/newbusiness/public-limited-company" element={<Publiclimitedcompany />} />
              <Route path="/services/newbusiness/one-person-company-opc" element={<Onepersoncompany />} />
              <Route path="/services/newbusiness/startup-registration" element={<StartupRegistration />} />
              <Route path="/services/newbusiness/section-8-company-ngo" element={<Section8CompanyPage />} />
              <Route path="/services/newbusiness/producer-company" element={<ProducerCompanyRegistration />} />
              <Route path="/services/newbusiness/indian-subsidiary" element={<IndianSubsidiaryRegistration />} />
              <Route path="/services/newbusiness/branch-office-registration" element={<BranchOfficeRegistration />} />
              <Route path="/services/newbusiness/foreign-subsidiary-setup" element={<ForeignSubsidiary />} />
              <Route path="/services/newbusiness/80g-12a-ngo-registration" element={<EightyGAndTwelveA />} />
              <Route path="/services/newbusiness/society-registration" element={<SocietyRegistration />} />
              <Route path="/services/newbusiness/trust-registration" element={<TrustRegistration />} />
              <Route path="/services/newbusiness/Dsc" element={<DscRegistration />} />
              <Route path="/services/newbusiness/Udyam-Registration" element={<UdyamRegistration />} />
              <Route path="/services/newbusiness/Fssai-Registration" element={<FssaiRegistration />} />
              <Route path="/services/newbusiness/Iec-Registration" element={<IecRegistration />} />
              <Route path="/services/newbusiness/Pf-Registration" element={<PfRegistration />} />
              <Route path="/services/newbusiness/Esi-Registration" element={<EsiRegistration />} />
              <Route path="/services/newbusiness/Drug-Cosmetic-License-Registration" element={<DrugCosmeticLicense />} />
              {/* // GST */}
              <Route path="/services/income-tax/form-15ca-form-15cb-filing" element={< Form15CA15CBGuide />} />
              <Route path="/services/gst/gst-registration-modification" element={< GSTModification />} />
              <Route path="/services/gst/gst-registration-cancellation-surrender" element={< GSTCancellation />} />
              <Route path="/services/gst/gst-registration" element={< GstRegistration />} />
              <Route path="/services/gst/gst-return-filing" element={< GstReturnFiling />} />
              <Route path="/services/gst/gst-e-way-bill" element={<GSTEwaybill />} />
              <Route path="/services/income-tax/nri-income-tax-planning-filing" element={<NRIincometaxplanningandfiling />} />
              <Route path="/services/income-tax/income-tax-return-filing" element={<ITRGuide />} />
              <Route path="/services/gst/letter-of-undertaking" element={<LutFiling />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
export default App;
