import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Fq } from "@/comps/fq";

export default function FAQ(){
return (
<div className="w-full overflow-y-hidden">
<Header/>
<section className="relative w-full py-4 h-[500px] flex items-center justify-center">
              
              <img
                  src="https://nestednurturers.com/wp-content/uploads/2024/10/newborn-baby-boy-sucking-milk-from-mothers-breast-portrait-of-mom-and-breastfeeding-baby-e1634613320759.jpg"
                  alt="Birth and Postpartum Support"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
             
              <div className="relative z-10 text-center px-6 max-w-2xl">
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                     
                  Frequently Asked Questions
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed">
                     
                  Take A look at what people ask us
                  </p>
                  <a
                      href="#consultation"
                      className="inline-block bg-pr_btn mb-2 hover:bg-pr_btn text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                  >
                     
                      BOOK YOUR CONSULTATION
                  </a>
              </div>
          </section>
<section>
<div className="text-center mb-20">
<h2 className="font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide">
Frequently Asked Questions

        </h2>
              <p className="pt-5 leading-relaxed text-lg text-gray-700">
              At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood. Our services are carefully crafted to nurture both parents and babies, ensuring that you feel confident, empowered, and connected as you begin this incredible journey
              </p>
              <div className="w-32 h-px bg-[#8B7355]/60 mx-auto mt-6"></div>
            </div>
</section>
<section className="w-full">
<Fq/>
</section>
<section>
<Contact/>
</section>

<Footer/>
</div>

)


}