import bannerImg from '@/assets/banner_img.png';
const stats = [
  { number: "200K+", label: "Business Registrations" },
  { number: "1K", label: "IT Filings per annum" },
  { number: "1K", label: "Happy Customers" },
];

export default function HeroSection() {
  return (
    <section className="bg-white text-black py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left content */}
          <div className="max-w-xl mx-auto lg:mx-0 space-y-10 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Your First Step <br />
              Towards Business Success
            </h1>
            <p className="text-xl max-w-md leading-relaxed mx-auto lg:mx-0 text-black">
              Starting a business is <br />
              an exciting journey.
            </p>

            <div
              className="mt-6 font-semibold text-white text-lg inline-block px-6 py-3 rounded-full"
              style={{ backgroundColor: "#306590" }}
            >
              Choose your service
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-6">
              {stats.map(({ number, label }, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-4xl font-extrabold">{number}</div>
                  <div className="text-lg text-black">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="mx-auto max-w-md lg:max-w-full">
            <img src={bannerImg} alt="Banner" className="w-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
