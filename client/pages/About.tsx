import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Award,
  Users,
  Calendar,
  CheckCircle,
  GraduationCap,
  Target,
  Eye,
  Star,
  TrendingUp,
} from 'lucide-react';

export function About() {
  const milestones = [
    { year: '1995', event: 'Founded GT Associates' },
    { year: '2000', event: 'Expanded to corporate clients' },
    { year: '2005', event: 'Introduced digital accounting' },
    { year: '2010', event: 'GST implementation specialist' },
    { year: '2015', event: 'Tax advisory expansion' },
    { year: '2020', event: 'Digital transformation complete' },
    { year: '2024', event: '500+ satisfied clients' },
  ];

  const certifications = [
    'Institute of Chartered Accountants of India (ICAI)',
    'Certified Public Accountant (CPA)',
    'Goods and Services Tax Practitioner',
    'Corporate Law Certification',
    'Financial Planning Certification',
    'International Financial Reporting Standards (IFRS)',
  ];

  const teamMembers = [
    {
      name: 'Gayathri Thiruvengadam',
      position: 'Founder & Senior Partner',
      qualification: 'Chartered Accountant (CA)',
      experience: '25+ years',
      specialization: 'Tax Planning & Corporate Advisory',
    },
    {
      name: 'Arjun Krishnan',
      position: 'Partner',
      qualification: 'Chartered Accountant (CA)',
      experience: '15+ years',
      specialization: 'Audit & Assurance Services',
    },
    {
      name: 'Meera Raghavan',
      position: 'Senior Manager',
      qualification: 'Chartered Accountant (CA)',
      experience: '12+ years',
      specialization: 'GST & Indirect Taxation',
    },
    {
      name: 'Vikram Sharma',
      position: 'Manager',
      qualification: 'Chartered Accountant (CA)',
      experience: '8+ years',
      specialization: 'Corporate Finance & Planning',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gold text-gold-foreground">About GT Associates</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              25+ Years of 
              <span className="text-gold block">Professional Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Since 1995, we have been providing comprehensive chartered accountancy services, 
              helping businesses navigate complex financial landscapes with confidence and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy text-navy-foreground">Our Journey</Badge>
                <h2 className="text-4xl font-bold text-navy">Building Trust Through Expertise</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  What started as a small practice in 1995 has grown into one of Chennai's 
                  most trusted chartered accountancy firms, serving over 500 clients across 
                  various industries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy/10 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide exceptional financial services that empower businesses to 
                      achieve their goals while maintaining the highest standards of compliance and ethics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy/10 p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the leading chartered accountancy firm in South India, known for 
                      innovation, integrity, and client-centric solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy/10 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Our Values</h3>
                    <p className="text-gray-600">
                      Integrity, Excellence, Innovation, and Client Satisfaction are the 
                      cornerstones of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-gold/10 to-gold/5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-navy">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-navy">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-navy">1000+</div>
                    <div className="text-sm text-gray-600">Tax Returns</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-navy">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-navy" />
                    <span>Key Milestones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="text-sm text-gray-600">{milestone.event}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-navy text-navy-foreground">Our Expert Team</Badge>
            <h2 className="text-4xl font-bold text-navy">Meet Our Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced chartered accountants and financial experts 
              are dedicated to providing you with the best possible service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-gold" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4 text-gold" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gold text-gold-foreground">Professional Credentials</Badge>
                <h2 className="text-4xl font-bold text-navy">
                  Certified Excellence
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our team maintains the highest professional standards through 
                  continuous education and industry certifications.
                </p>
              </div>

              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{certification}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-navy hover:bg-navy/90 text-white">
                <Award className="mr-2 h-5 w-5" />
                View All Credentials
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-navy text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-gold" />
                    <h3 className="text-2xl font-bold">Professional Recognition</h3>
                  </div>
                  <ul className="space-y-3 text-blue-100">
                    <li>• ICAI Member in Good Standing</li>
                    <li>• GST Suvidha Provider Certification</li>
                    <li>• Digital Signature Certificate Authority</li>
                    <li>• ISO 9001:2015 Quality Management</li>
                    <li>• Member of Tax Practitioners Association</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-navy" />
                    <span>Continuous Growth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We invest heavily in professional development, ensuring our team 
                    stays current with the latest regulations, technology, and best practices 
                    in the accounting profession.
                  </p>
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
              Experience the GT Associates Difference
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Partner with a team that combines decades of experience with modern solutions 
              to help your business thrive in today's complex financial landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8">
                Schedule a Meeting
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8">
                Call +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
