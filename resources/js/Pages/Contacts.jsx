import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";

export default function Contacts(){
return (
<div>
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
                     
                  Contact Us
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed">
                     
                  Compassionate Support Tailored For Your Family
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
            <Contact/>
          </section>

<Footer/>
</div>

)
}