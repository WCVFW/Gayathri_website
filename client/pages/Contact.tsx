import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle,
  Send,
  Building,
  Navigation,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service Inquiry - ${formData.service}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Required: ${formData.service}

Message:
${formData.message}

---
This inquiry was submitted through the GT Associates website.
    `);

    const mailtoLink = `mailto:info@gtassociates.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactMethods = [
    { icon: Phone, title: 'Call Us', details: ['+91-9655771091'] },
    { icon: Mail, title: 'Email Us', details: ['deepak@hado.co.in'] },
    { icon: MapPin, title: 'Visit Our Office', details: ['32, 1St Main Road, Ayyappa Nagar, Virugambakkam, Chennai-600092.'] },
  ];

  const services = [
    'Tax Consultation', 'Financial Audit', 'GST Services', 'Business Registration',
    'Payroll Management', 'Financial Planning', 'Compliance Services', 'Other Services',
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gold text-gold-foreground">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Let's Discuss Your
              <span className="text-gold block">Financial Needs</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to streamline your financial operations? Contact us today for a free consultation and discover how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-navy text-white text-sm px-4 py-1 rounded-full shadow-md">
              Multiple Ways to Reach Us
            </Badge>
            <h2 className="text-4xl font-extrabold text-navy">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team. We're here to help you with all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="relative group">
                <span className="absolute bottom-0 left-1/2 h-[4px] w-0 bg-navy transition-all duration-700 ease-in group-hover:left-0 group-hover:w-full" />
                <Card className="text-center border rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="space-y-4">
                    <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-transform duration-700 ease-in group-hover:rotate-[360deg] group-hover:bg-navy group-hover:text-white">
                      <method.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {method.details.map((detail, i) => (
                      <p key={i} className="font-semibold text-navy">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-navy">Find Us on the Map</h2>
            <p className="text-gray-600">
              Our office is conveniently located in the heart of Chennai's business district.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31094.44701680275!2d80.18261340000002!3d13.048025100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753430281367!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute bottom-4 right-4 z-10">
              <a href="https://www.google.com/maps?q=13.0480251,80.1826134" target="_blank" rel="noopener noreferrer">
                <Button className="bg-navy hover:bg-navy/90 text-white">Open in Google Maps</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
