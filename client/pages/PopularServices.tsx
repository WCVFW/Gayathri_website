import { useState } from 'react';
import bannerImg1 from '@/assets/ser_img1.png';
import bannerImg2 from '@/assets/ser_img2.jpg';
import bannerImg3 from '@/assets/ser_img3.jpg';

const tabs = ['All', 'New Business', 'Compliance', 'GST & Income Tax'];

const services = [
    {
        title: 'Limited Liability Partnership (LLP) Registration',
        image: bannerImg1, // 👈 use imported image
        points: [
            'Ideal for professionals & service businesses',
            'Limited liability protection to partners',
            'No minimum capital required',
            'Easier compliance than Pvt Ltd',
        ],
        link: '#',
        category: 'New Business',
    },
    {
        title: 'FSSAI Food License Registration',
        image: bannerImg2,
        points: [
            'Mandatory for food businesses',
            '3 Types: Basic, State, Central',
            'Legal compliance & customer trust',
            'License in 7-10 days',
        ],
        link: '#',
        category: 'Compliance',
    },
    {
        title: 'GST Registration',
        image: bannerImg3,
        points: [
            'Mandatory if turnover > ₹40 lakh',
            'Get GSTIN in 3-5 working days',
            'File GST returns easily',
            'Avoid penalties with timely compliance',
        ],
        link: '#',
        category: 'GST & Income Tax',
    },
];


const PopularServices = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredServices =
        activeTab === 'All'
            ? services
            : services.filter((service) => service.category === activeTab);

    return (
        <section className="py-20 px-4 bg-gray-50 min-h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold">Popular Services</h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-5 py-2 text-sm md:text-base font-medium transition text-gray-700
        ${activeTab === tab
                                ? 'text-[#306590] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-[#306590]'
                                : 'hover:text-[#306590] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-[2px] after:bg-[#306590]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="space-y-16 max-w-5xl mx-auto">
                {filteredServices.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={service.title}
                            className={`flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 bg-white rounded-2xl shadow-[0_6px_12px_rgba(0,0,0,0.1)] ${isEven ? '' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Image */}
                            <div className="md:w-1/2 w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-xl w-full h-72 object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2 text-left space-y-4">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                    {service.title}
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed">
                                    {service.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                <a
                                    href={service.link}
                                    className="inline-block mt-4 bg-[#306590] text-white px-6 py-2 rounded-full hover:bg-[#244d73] transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PopularServices;
