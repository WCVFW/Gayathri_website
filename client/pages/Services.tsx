import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  BarChart3,
  Receipt,
  Shield,
  PieChart,
  TrendingUp,
  Users,
  Briefcase,
  Calculator,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  Building,
  FileCheck,
  ClipboardList,
  // TrendingDown,
  Target,
  BookOpen,
  // CreditCard,
  // Banknote,
  Scale,
} from 'lucide-react';

export function Services() {
  const serviceCategories = [
    {
      id: 'accounting',
      title: 'Accounting & Bookkeeping',
      description: 'Comprehensive financial record management and reporting',
      services: [
        {
          icon: FileText,
          title: 'Financial Records Management',
          description: 'Complete bookkeeping and financial record maintenance',
          features: [
            'Digital bookkeeping systems',
            'Monthly bank reconciliation',
            'Accounts payable/receivable',
            'General ledger maintenance',
            'Financial statements preparation',
            'Cash flow management'
          ],
          pricing: 'Starting from ₹5,000/month'
        },
        {
          icon: BarChart3,
          title: 'Financial Reporting',
          description: 'Detailed profit & loss and balance sheet preparation',
          features: [
            'Monthly P&L statements',
            'Balance sheet preparation',
            'Cash flow statements',
            'Trial balance reports',
            'Management reporting',
            'Comparative analysis'
          ],
          pricing: 'Starting from ₹3,000/month'
        },
        {
          icon: Calculator,
          title: 'Management Accounting',
          description: 'Strategic financial analysis and planning',
          features: [
            'Cost accounting',
            'Budgeting & forecasting',
            'Variance analysis',
            'KPI dashboards',
            'Financial modeling',
            'Break-even analysis'
          ],
          pricing: 'Starting from ₹8,000/month'
        }
      ]
    },
    {
      id: 'taxation',
      title: 'Taxation Services',
      description: 'Complete tax compliance and optimization',
      services: [
        {
          icon: Receipt,
          title: 'GST Services',
          description: 'Complete GST compliance and filing services',
          features: [
            'GST registration',
            'Monthly GST returns (GSTR-1, GSTR-3B)',
            'Annual GST returns',
            'Input tax credit optimization',
            'GST audit support',
            'Notice handling'
          ],
          pricing: 'Starting from ₹2,500/month'
        },
        {
          icon: FileCheck,
          title: 'Income Tax Services',
          description: 'Personal and corporate income tax solutions',
          features: [
            'ITR filing (individuals & companies)',
            'Tax planning & optimization',
            'TDS compliance',
            'Advance tax calculations',
            'Tax notice responses',
            'Refund processing'
          ],
          pricing: 'Starting from ₹1,500/return'
        },
        {
          icon: Scale,
          title: 'Tax Planning & Advisory',
          description: 'Strategic tax planning to minimize tax burden',
          features: [
            'Tax-efficient business structure',
            'Investment planning',
            'Salary structuring',
            'Capital gains planning',
            'International taxation',
            'Transfer pricing'
          ],
          pricing: 'Starting from ₹10,000/consultation'
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Legal',
      description: 'Regulatory compliance and legal advisory',
      services: [
        {
          icon: Shield,
          title: 'Regulatory Compliance',
          description: 'Comprehensive compliance management',
          features: [
            'ROC compliance',
            'Annual filings',
            'Board resolutions',
            'Statutory registers',
            'Compliance calendar',
            'Legal documentation'
          ],
          pricing: 'Starting from ₹15,000/year'
        },
        {
          icon: Building,
          title: 'Company Formation',
          description: 'Business registration and incorporation services',
          features: [
            'Private limited company registration',
            'LLP registration',
            'Partnership firm registration',
            'Sole proprietorship setup',
            'License applications',
            'MSME registration'
          ],
          pricing: 'Starting from ₹8,000'
        },
        {
          icon: ClipboardList,
          title: 'Secretarial Services',
          description: 'Company secretarial and governance support',
          features: [
            'Board meeting management',
            'AGM/EGM conduct',
            'Share capital management',
            'Director appointments',
            'Regulatory filings',
            'Corporate governance'
          ],
          pricing: 'Starting from ₹20,000/year'
        }
      ]
    },
    {
      id: 'advisory',
      title: 'Business Advisory',
      description: 'Strategic financial and business consulting',
      services: [
        {
          icon: TrendingUp,
          title: 'Business Growth Advisory',
          description: 'Strategic guidance for business expansion',
          features: [
            'Business plan development',
            'Financial projections',
            'Investment advisory',
            'Merger & acquisition support',
            'Due diligence',
            'Valuation services'
          ],
          pricing: 'Starting from ₹25,000/project'
        },
        {
          icon: PieChart,
          title: 'Financial Planning',
          description: 'Comprehensive financial planning and analysis',
          features: [
            'Budget preparation',
            'Cash flow forecasting',
            'Working capital management',
            'Debt restructuring',
            'Investment planning',
            'Risk assessment'
          ],
          pricing: 'Starting from ₹12,000/month'
        },
        {
          icon: Target,
          title: 'CFO Services',
          description: 'Part-time CFO services for growing businesses',
          features: [
            'Financial strategy development',
            'Monthly board presentations',
            'Investor relations',
            'Financial controls implementation',
            'Team management',
            'Compliance oversight'
          ],
          pricing: 'Starting from ₹50,000/month'
        }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Services',
      description: 'Industry-specific and specialized offerings',
      services: [
        {
          icon: Briefcase,
          title: 'Audit & Assurance',
          description: 'Independent audit and assurance services',
          features: [
            'Statutory audit',
            'Internal audit',
            'Tax audit',
            'Stock audit',
            'Bank audit',
            'Concurrent audit'
          ],
          pricing: 'Starting from ₹25,000/audit'
        },
        {
          icon: Users,
          title: 'Payroll Management',
          description: 'Complete payroll and HR compliance',
          features: [
            'Salary processing',
            'PF/ESI compliance',
            'Payroll tax management',
            'Employee onboarding',
            'Leave management',
            'Provident fund services'
          ],
          pricing: 'Starting from ₹150/employee/month'
        },
        {
          icon: BookOpen,
          title: 'Training & Education',
          description: 'Professional development and training programs',
          features: [
            'GST training workshops',
            'Accounting software training',
            'Tax update seminars',
            'Compliance training',
            'Financial planning workshops',
            'Custom training programs'
          ],
          pricing: 'Starting from ₹5,000/session'
        }
      ]
    }
  ];

  const industries = [
    'Manufacturing', 'Trading', 'Services', 'Real Estate', 'Healthcare',
    'Education', 'IT/Software', 'E-commerce', 'Construction', 'Hospitality'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gold text-gold-foreground">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Comprehensive
              <span className="text-gold block">Accounting Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From basic bookkeeping to strategic financial advisory, we provide 
              complete chartered accountancy services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="accounting" className="space-y-12">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold text-navy">Service Categories</h2>
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5 h-auto">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-navy data-[state=active]:text-white p-4 text-center"
                  >
                    <div className="space-y-2">
                      <div className="font-medium">{category.title}</div>
                      <div className="text-xs opacity-70 hidden md:block">
                        {category.description}
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-navy">{category.title}</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, index) => (
                    <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="space-y-4">
                        <div className="bg-navy/10 w-12 h-12 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="text-gray-600 mt-2">
                            {service.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="space-y-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-navy">{service.pricing}</span>
                            <DollarSign className="h-5 w-5 text-gold" />
                          </div>
                          <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                            Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-navy text-navy-foreground">Industries We Serve</Badge>
            <h2 className="text-4xl font-bold text-navy">Expertise Across Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team has extensive experience serving clients across various industries, 
              understanding their unique challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:bg-navy hover:text-white transition-colors cursor-pointer">
                <CardContent className="p-0">
                  <div className="font-medium">{industry}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gold text-gold-foreground">Why Choose GT Associates</Badge>
                <h2 className="text-4xl font-bold text-navy">
                  Professional Excellence in Every Service
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We combine deep expertise with modern technology to deliver 
                  exceptional results that help your business thrive.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: 'Qualified Professionals',
                    description: 'Team of certified CAs with 25+ years combined experience'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Technology-Driven',
                    description: 'Modern accounting software and digital solutions'
                  },
                  {
                    icon: Shield,
                    title: 'Data Security',
                    description: 'Bank-level security for all your financial information'
                  },
                  {
                    icon: Calendar,
                    title: 'Timely Delivery',
                    description: 'Never miss deadlines with our proactive approach'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-navy">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-navy text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                  <p className="text-blue-100">
                    Let's discuss your specific requirements and create a 
                    customized solution for your business.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gold" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gold" />
                      <span>Schedule Free Consultation</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                    Get Custom Quote
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle>Service Packages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Startup Package</span>
                      <span className="text-navy font-bold">₹8,000/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Business Package</span>
                      <span className="text-navy font-bold">₹15,000/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Enterprise Package</span>
                      <span className="text-navy font-bold">₹25,000/month</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Compare Packages
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Transform Your Financial Management
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Partner with GT Associates for comprehensive accounting solutions that 
              drive business growth and ensure complete compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
