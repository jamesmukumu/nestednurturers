import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Seo } from "@/comps/SEO";

export default function Contacts(){
return (
<div>
<Seo title="Contact Us" description="Contact Nested Nurturers for compassionate prenatal, birth, and postpartum doula support in the Bay Area, California. Reach us at +1 (925) 316-8311 or info@nestednurturers.com
 to schedule a consultation and receive personalized care for your growing family." url="/contact"/>
<Header/>
<section className="relative w-full py-4 h-[500px] flex items-center justify-center">
              
              <img
                  src="images\services\newborn-baby-boy-sucking-milk-from-mothers-breast-portrait-of-mom-and-breastfeeding-baby-e1634613320759.jpg"
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
              
              </div>
          </section>
          <section>
            <Contact/>
          </section>

<Footer/>
</div>

)
}