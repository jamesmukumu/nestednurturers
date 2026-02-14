import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Seo } from "@/comps/SEO";

export default function About(){
return (
<div>
    <Seo description="About Us Home About Us Welcome to Nested Nurturers At Nested Nurturers, we believe that every family deserves compassionate, personalized support as they navigate the beautiful yet challenging journey of early parenthood. Our team of certified postpartum doulas and sleep consultants is dedicated to empowering parents with the tools, guidance, and encouragement they need to" title="About Us" url="/about"/>
<Header/>
<section className="bg-white py-12">
                {" "}
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                  
                    <div className="md:w-1/2 md:pr-12">
                        {" "}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                        Welcome to Nested Nurturers
                        </h1>{" "}
                        <p className="mt-4 text-lg text-gray-600">
                            {" "}
                            At Nested Nurturers, we believe that every family deserves compassionate, personalized support as they navigate the beautiful yet challenging journey of early parenthood. Our team of certified postpartum doulas and sleep consultants is dedicated to empowering parents with the tools, guidance, and encouragement they need to create peaceful, nurturing environments for their growing families.
                        </p>{" "}
                        <a
                            href="/consult"
                            type="button"
                            className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                        >
                        Contact Us
                        </a>{" "}
                    </div>{" "}
             
                    {/* <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                     
                        <img
                            src="https://www.doulasbythebay.com/wp-content/uploads/2022/06/mom-and-baby-transparent-smaller-white-outline.png"
                            alt="Parent holding baby"
                            className="w-full max-w-md"
                        />
                    </div> */}

<div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
  <div className="w-full max-w-md aspect-[4/5] rounded-full overflow-hidden shadow-lg">
    <img
      src="images\services\mom-and-baby-boy.jpg"
      alt="Group photo"
      className="w-full h-full object-cover"
    />
  </div>
</div>

                </div>
            </section>


            <section className="bg-white py-12">
             
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                  
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
  <div className="w-full max-w-md aspect-[4/5] rounded-full overflow-hidden shadow-lg">
    <img
      src="images\services\mother-playing-with-baby-helping-her-crawl-on-bed-indoor-e1634117890229-1024x682.jpg"
      alt="Group photo"
      className="w-full h-full object-cover"
    />
  </div>
</div>
                    <div className="md:w-1/2 md:pr-12">
                        {" "}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                        Why Choose Us
                        </h1>
                        <h2 className="text-lg md:text-2xl py-2 font-bold text-gray-800 leading-snug">
                        Your Partner in Peaceful Postpartum Transitions
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            
                            Nested Nurturers is your trusted partner for postpartum care and sleep training services, offering compassionate support to help families bond, rest, and grow together. Let us ease the transition into parenthood with personalized guidance and gentle care."
                        </p>
                        <a
                            href="/consult"
                            type="button"
                            className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                        >
                        Contact Us
                        </a>{" "}
                    </div>{" "}
             
                    {/* <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                     
                        <img
                            src="https://www.doulasbythebay.com/wp-content/uploads/2022/06/mom-and-baby-transparent-smaller-white-outline.png"
                            alt="Parent holding baby"
                            className="w-full max-w-md"
                        />
                    </div> */}



                </div>
            </section>
<section>
<Contact/>
</section>
        <Footer/>
</div>

)
}