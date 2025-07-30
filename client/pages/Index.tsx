import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  BarChart3,
  PieChart,
  Receipt,
  Briefcase,
  DollarSign,
} from 'lucide-react';

export function Index() {
  const services = [
    {
      icon: FileText,
      title: 'Financial Records Management',
      description: 'Comprehensive bookkeeping and financial record maintenance to keep your business compliant and organized.',
      features: ['Digital bookkeeping', 'Monthly reconciliation', 'Financial statements']
    },
    {
      icon: BarChart3,
      title: 'Profit & Loss and Balance Sheet',
      description: 'Detailed financial reports providing insights into your business performance and financial position.',
      features: ['P&L statements', 'Balance sheets', 'Cash flow analysis']
    },
    {
      icon: Receipt,
      title: 'Tax Services (GST & Income Tax)',
      description: 'Complete tax compliance and optimization services to minimize your tax burden legally.',
      features: ['GST filing', 'Income tax returns', 'Tax planning']
    },
    {
      icon: Shield,
      title: 'Compliance & Legal Advisory',
      description: 'Ensure your business follows all regulatory requirements and stays compliant with changing laws.',
      features: ['Regulatory compliance', 'Legal documentation', 'Policy advisory']
    },
    {
      icon: PieChart,
      title: 'Budget Planning & Cost Control',
      description: 'Strategic financial planning to optimize your budget and control operational costs effectively.',
      features: ['Budget preparation', 'Cost analysis', 'Financial forecasting']
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Advisory',
      description: 'Expert guidance on business expansion, investment decisions, and strategic financial planning.',
      features: ['Growth strategies', 'Investment advice', 'Financial planning']
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Complete payroll processing and employee-related payment management with compliance.',
      features: ['Salary processing', 'PF/ESI compliance', 'Employee benefits']
    },
    {
      icon: Briefcase,
      title: 'Audit & Assurance',
      description: 'Independent audit services to ensure accuracy of financial statements and compliance.',
      features: ['Internal audit', 'Statutory audit', 'Risk assessment']
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: '25+', label: 'Years Experience' },
    { number: '1000+', label: 'Tax Returns Filed' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Managing Director, TechCorp Solutions',
      content: 'GT Associates has been instrumental in managing our financial compliance. Their expertise in tax planning saved us significant costs.',
    },
    {
      name: 'Priya Sharma',
      position: 'Founder, Creative Designs',
      content: 'Professional, reliable, and always available when needed. They simplified our complex financial requirements beautifully.',
    },
    {
      name: 'Mohammed Ali',
      position: 'CEO, Export House India',
      content: 'Their GST and export documentation expertise helped us expand internationally with confidence.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gold text-gold-foreground hover:bg-gold/90">
                  Professional CA Services Since 1995
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your Trusted
                  <span className="text-gold block">Financial Partner</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Expert chartered accountancy services for businesses of all sizes. 
                  From tax compliance to strategic financial planning, we've got you covered.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-sm">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-sm">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span className="text-sm">Expert CA Team</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <div className="text-center space-y-4">
                  <Award className="h-16 w-16 text-gold mx-auto" />
                  <h3 className="text-2xl font-bold">Gayathri Thiruvengadam</h3>
                  <p className="text-blue-200">Chartered Accountant</p>
                  <p className="text-sm text-blue-100">CA License: 12345 | GSTIN: 33ABCDE1234F1Z5</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center space-y-1">
                      <div className="text-2xl font-bold text-gold">{achievement.number}</div>
                      <div className="text-sm text-blue-200">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-navy text-navy-foreground">Our Expertise</Badge>
            <h2 className="text-4xl font-bold text-navy">Comprehensive CA Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a full range of chartered accountancy services to help your business 
              thrive while staying compliant with all regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="space-y-4">
                  <div className="bg-navy/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-navy group-hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gold text-gold-foreground">Why Choose GT Associates</Badge>
                <h2 className="text-4xl font-bold text-navy">
                  Professional Excellence You Can Trust
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 25 years of experience, we combine traditional expertise 
                  with modern technology to deliver exceptional results for our clients.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Calculator,
                    title: 'Expert Knowledge',
                    description: 'Deep understanding of Indian tax laws and regulations'
                  },
                  {
                    icon: DollarSign,
                    title: 'Cost Effective',
                    description: 'Competitive pricing with transparent fee structure'
                  },
                  {
                    icon: Shield,
                    title: 'Confidential & Secure',
                    description: 'Your financial data is completely safe and confidential'
                  },
                  {
                    icon: Calendar,
                    title: 'Timely Delivery',
                    description: 'Never miss a deadline with our proactive approach'
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
                    Book a free consultation today and discover how we can help 
                    streamline your financial operations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gold" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gold" />
                      <span>info@gtassociates.com</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                    Schedule Free Consultation
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-3xl font-bold text-navy">{achievement.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{achievement.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-navy text-navy-foreground">Client Success Stories</Badge>
            <h2 className="text-4xl font-bold text-navy">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 h-full">
                <div className="space-y-6">
                  <div className="text-4xl text-gold">"</div>
                  <p className="text-gray-600 italic leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Let our experienced team handle your financial complexity while you focus on growing your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8">
                <Link to="/services" className="flex items-center">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
