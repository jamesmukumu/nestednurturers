import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";

export default function Services() {
    return (
        <div>
            <Header />
            <section className="relative w-full py-4 h-[500px] flex items-center justify-center">
              
                <img
                    src="https://nestednurturers.com/wp-content/uploads/2024/10/cheerful-smiling-mother-and-little-baby-kid-child-family-motherhood-moments-e1634539716572.jpg"
                    alt="Birth and Postpartum Support"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
               
                <div className="relative z-10 text-center px-6 max-w-2xl">
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                       
                        Birth &amp; Postpartum Support Services
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed">
                       
                    At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood.
                    </p>
                    <a
                        href="#consultation"
                        className="inline-block bg-pr_btn mb-2 hover:bg-pr_btn text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                    >
                       
                        BOOK YOUR CONSULTATION
                    </a>
                </div>
            </section>



            <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide">
              What We Offer
              </h2>
              <p className="pt-5 leading-relaxed text-lg text-gray-700">
              At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood. Our services are carefully crafted to nurture both parents and babies, ensuring that you feel confident, empowered, and connected as you begin this incredible journey
              </p>
              <div className="w-32 h-px bg-[#8B7355]/60 mx-auto mt-6"></div>
            </div>
  
            {/* Grid */}
            <div className="flex flex-col md:flex-row flex-wrap lg:flex-row gap-16">
              {/* Card 1 */}
              <a href="/attraction/Mama-Ngina-Waterfront" className="flex flex-col items-center text-center flex-1 ">
                <div className="relative overflow-hidden mb-4 h-64 w-full ">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468373/mama-ngina_20240720125347_1_ktgxti.jpg"
                    alt="Mama-Ngina-Front"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Postpartum Doula Services
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
           
Postpartum Doula Services
Our postpartum doula services offer holistic, personalized care to support your physical and emotional well-being. We help with newborn care, infant soothing, breastfeeding, and providing light household assistance. Whether you need a comforting presence or practical support, we’re here to ensure your transition to parenthood is as smooth and stress-free as possible.
                </p>
                <a
                  href="/attraction/Mama-Ngina-Waterfront"
                  className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>
  
            
      
              <a href="/attraction/Wild-Waters-Mombasa" className="flex flex-col cursor-pointer items-center text-center flex-1 rounded-xl">
                <div className="relative overflow-hidden mb-3 h-64 w-full">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468373/wild-water_20240720131029_1_g95mxq.jpg"
                    alt="Culture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Night Doula Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Our night doula services are designed to give parents the gift of rest. We care for your baby overnight, tending to feeding, soothing, and diaper changes, so you can wake up feeling refreshed. Whether you're recovering postpartum, balancing work, or simply needing more sleep, our overnight care ensures both you and your baby get the restorative rest you need. 
                </p>
                <a
                  href="/attraction/Wild-Waters-Mombasa"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>

              <a href="/attraction/Wild-Waters-Mombasa" className="flex flex-col cursor-pointer items-center text-center flex-1 rounded-xl">
                <div className="relative overflow-hidden mb-3 h-64 w-full">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468373/wild-water_20240720131029_1_g95mxq.jpg"
                    alt="Culture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Night Doula Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Our night doula services are designed to give parents the gift of rest. We care for your baby overnight, tending to feeding, soothing, and diaper changes, so you can wake up feeling refreshed. Whether you're recovering postpartum, balancing work, or simply needing more sleep, our overnight care ensures both you and your baby get the restorative rest you need. 
                </p>
                <a
                  href="/attraction/Wild-Waters-Mombasa"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>
              
            </div>




            <div className="flex flex-col md:flex-row flex-wrap lg:flex-row gap-16 mt-2">
              {/* Card 1 */}
              <a href="/attraction/Mama-Ngina-Waterfront" className="flex flex-col items-center text-center flex-1 ">
                <div className="relative overflow-hidden mb-4 h-64 w-full ">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468373/mama-ngina_20240720125347_1_ktgxti.jpg"
                    alt="Mama-Ngina-Front"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Postpartum Doula Services
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
           
Postpartum Doula Services
Our postpartum doula services offer holistic, personalized care to support your physical and emotional well-being. We help with newborn care, infant soothing, breastfeeding, and providing light household assistance. Whether you need a comforting presence or practical support, we’re here to ensure your transition to parenthood is as smooth and stress-free as possible.
                </p>
                <a
                  href="/attraction/Mama-Ngina-Waterfront"
                  className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>
  
              {/* Card 2 */}
              <a href="/attraction/Diani-Beach" className="flex flex-col cursor-pointer items-center text-center flex-1">
                <div className="relative overflow-hidden mb-4 h-64 w-full">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468374/diani-beac_20240720130522_1_jwe8pw.jpg"
                    alt="Diani-Beach"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Daytime Doula Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Daytime support provides an extra set of hands when you need it most. From infant care and breastfeeding support to light household tasks and meal preparation, we're here to ease your load. We'll also help you establish comforting routines and ensure you feel confident and supported in your parenting journey.
                </p>
                <a
                  href="/attraction/Diani-Beach"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>
  
      
              <a href="/attraction/Wild-Waters-Mombasa" className="flex flex-col cursor-pointer items-center text-center flex-1 rounded-xl">
                <div className="relative overflow-hidden mb-3 h-64 w-full">
                  <img
                    src="https://res.cloudinary.com/dasrniwpk/image/upload/v1760468373/wild-water_20240720131029_1_g95mxq.jpg"
                    alt="Culture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Night Doula Care
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                Our night doula services are designed to give parents the gift of rest. We care for your baby overnight, tending to feeding, soothing, and diaper changes, so you can wake up feeling refreshed. Whether you're recovering postpartum, balancing work, or simply needing more sleep, our overnight care ensures both you and your baby get the restorative rest you need. 
                </p>
                <a
                  href="/attraction/Wild-Waters-Mombasa"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-pr text-white font-semibold rounded shadow hover:shadow-lg transition-transform hover:-translate-y-1"
                >
                  Explore
                </a>
              </a>

             
            </div>

          </div>
        </section>
         <section>
            <Contact/>
         </section>
            <Footer />
        </div>
    );
}
