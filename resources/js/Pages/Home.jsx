import { Header } from "../comps/Header";
import { Footer } from "../comps/Foot";
import {Contact} from '../comps/Contact'
export default function Home() {
    const HeroSection = () => {
        return (
            <section className="bg-white py-12">
                {" "}
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                  
                    <div className="md:w-1/2 md:pr-12">
                        {" "}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            {" "}
                            Looking for guidance as you prepare for birth and
                            the first weeks of parenthood?{" "}
                        </h1>{" "}
                        <p className="mt-4 text-lg text-gray-600">
                            {" "}
                            At Nested Nurturers, we believe that every family deserves compassionate, personalized support as they navigate the beautiful yet challenging journey of early parenthood. Our team of certified postpartum doulas and sleep consultants is dedicated to empowering parents with the tools, guidance, and encouragement they need to create peaceful, nurturing environments for their growing families.
                        </p>{" "}
                        <a
                            href="#consult"
                            type="button"
                            className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                        >
                            {" "}
                            Book Your Free Consult{" "}
                        </a>{" "}
                    </div>{" "}
             
                    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                        {" "}
                        <img
                            src="https://www.doulasbythebay.com/wp-content/uploads/2022/06/mom-and-baby-transparent-smaller-white-outline.png"
                            alt="Parent holding baby"
                            className="w-full max-w-md"
                        />{" "}
                    </div>{" "}
                </div>{" "}
            </section>
        );
    };



    const ChooseSection = () => {
        return (
            <section className="bg-white py-12">
                {" "}
                <div className="container mx-auto px-6 flex  flex-col  md:flex-row items-center">
                <div className="mt-8 md:mt-0 md:w-1/2 h-full flex justify-center">
                       
                       <img
                           src="https://nestednurturers.com/wp-content/uploads/2024/10/smiling-mother-clapping-and-looking-at-happy-toddler-sitting-on-couch-in-living-room-1024x683.jpg"
                           alt="Parent holding baby"
                           className="w-full max-w-md"
                       />
                   </div>
                    <div className="md:w-1/2 md:pr-12">
                     
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                        Why Choose Us?
                        </h1>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                        Your Partner in Peaceful Postpartum Transitions
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                           
                            Nested Nurturers is your trusted partner for postpartum care and sleep training services, offering compassionate support to help families bond, rest, and grow together. Let us ease the transition into parenthood with personalized guidance and gentle care.
                        </p>
                        <a
                            href="#consult"
                            type="button"
                            className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                        >
                        
                            Learn More
                        </a>
                    </div>
             
               
                </div>
            </section>
        );
    };


    return (
        <div className="overflow-y-hidden">
            <Header />
            <section>
            <HeroSection/>
             
            </section>
            {/* Section */}
        <section className="py-24 bg-[#f0f1f3]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide">
              Our  Services

              </h2>
              <p className="pt-5 leading-relaxed text-lg text-gray-700">
              At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood. Our services are carefully crafted to nurture both parents and babies, ensuring that you feel confident, empowered, and connected as you begin this incredible journey.
              </p>
              <div className="w-32 h-px bg-pr/60 mx-auto mt-6"></div>
            </div>
  
            {/* Grid */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 ">
              {/* Card 1 */}
              <a href="/attraction/Mama-Ngina-Waterfront" className="flex flex-col items-center text-center flex-1">
              <div className="relative flex items-center justify-center mb-1 h-64 w-full">
    <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-lg">
      <i className="fa-solid fa-baby text-[#ced79e] text-6xl"></i>
    </div>
  </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Postpartum Doula Services
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Our postpartum doula services offer holistic, personalized care to support your physical and emotional well-being. We help with newborn care, infant soothing, breastfeeding, and providing light household assistance
                </p>
             
              </a>
  
              {/* Card 2 */}
              <a href="/attraction/Diani-Beach" className="flex flex-col cursor-pointer items-center text-center flex-1">
              <div className="relative flex items-center justify-center mb-1 h-64 w-full">
    <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-lg">
      <i className="fa-solid fa-baby-carriage text-[#ced79e] text-6xl"></i>
    </div>
  </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Daytime Doula Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Daytime support provides an extra set of hands when you need it most. From infant care and breastfeeding support to light household tasks and meal preparation, we're here to ease your load. 
                </p>
            
              </a>
  
              <a
  href="/attraction/Wild-Waters-Mombasa"
  className="flex flex-col cursor-pointer items-center text-center flex-1"
>
  {/* Icon container */}
  <div className="relative flex items-center justify-center mb-1 h-64 w-full">
    <div className="w-32 h-32 rounded-full  flex items-center justify-center shadow-lg">
      <i className="fa-solid fa-person-breastfeeding text-[#ced79e] text-6xl"></i>
    </div>
  </div>

  <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
    Night Doula Care
  </h3>
  <p className="text-gray-600 text-lg leading-relaxed flex-grow">
    Our night doula services are designed to give parents the gift of rest. We
    care for your baby overnight, tending to feeding, soothing, and diaper
    changes, so you can wake up feeling refreshed.
  </p>
</a>

            </div>
          </div>
        </section>
<section>
<ChooseSection/>
</section>
<section>
<Contact/>
</section>
            <Footer />
        </div>
    );
}
