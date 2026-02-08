import { Calendar } from "primereact/calendar";

export function Contact() {
  const FormCalendar = () => {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
         Schedule Consultation
        </h1>
        <Calendar inline className="w-full" minDate={new Date()} disabledDays={[0,6]} />
      <div className="flex flex-col">
    <label htmlFor="name">Enter Your Name</label>
      <input
    
                name="name"
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Provide your name"
              />

      </div>
      <div className="flex flex-col mt-2">
    <label htmlFor="name">Enter Your Email</label>
      <input
    
                name="email"
                id="email"
                type="email"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Provide your email"
              />

      </div>
      </div>
    );
  };

  const NextSteps = () => {
    return (
      <section className="bg-white rounded-2xl shadow-lg p-8 h-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Reach Us
        </h2>
        <p className="leading-relaxed text-lg text-gray-700">
 Kindly choose one of the options to get in touch with us.
        </p>
        <div className="space-y-6">
          {/* Email */}
<p className="flex flex-wrap items-start text-lg text-gray-700">
  <i className="fa-solid fa-envelope text-green-600 mr-3 text-xl"></i>
  <a
    href="mailto:info@nestednurturers.com"
    className="hover:text-green-700 transition leading-relaxed font-medium break-words"
  >
    info@nestednurturers.com
  </a>
</p>



  
          {/* Phone */}
          <p className="flex items-center text-lg text-gray-700">
            <i className="fa-solid fa-phone text-green-600 mr-3 text-xl"></i>
            <a
              href="tel:+254700000000"
              className="hover:text-green-700 transition font-medium"
            >
              +1 (925) 316-8311
            </a>
          </p>
  
          {/* Location */}
          <p className="flex items-center text-lg text-gray-700">
            <i className="fa-solid fa-location-dot text-green-600 mr-3 text-xl"></i>
            <span className="font-medium">
              Bay Area,California
            </span>
          </p>
        </div>
      </section>
    );
  };
  

  return (
    <div className="bg-[#f0f1f3] py-16">
      {/* Heading + intro text */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="font-serif text-5xl font-light text-gray-900 mb-6 tracking-wide">
        Ready for Compassionate Birth & Postpartum Support?
        </h2>
        <p className="leading-relaxed text-lg text-gray-700">
        Your free consultation is the first step toward feeling supported, confident, and fully prepared for your journey into parenthood. 
        </p>
      </div>

      {/* Calendar + Next Steps side by side */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-stretch justify-center">
        <div className="flex-1">
          <FormCalendar />
        </div>
        <div className="flex-1">
          <NextSteps />
        </div>
      </div>
    </div>
  );
}
