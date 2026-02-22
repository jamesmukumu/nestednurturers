import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Seo } from "@/comps/SEO";
import { Fq } from "@/comps/fq";

export default function FAQ(){
var TodaysDate = new Date()
return (
<div className="w-full overflow-y-hidden">
<Seo 
title="FAQ" 
description="A postpartum doula provides compassionate, non-medical support to families during the early weeks after birth. This includes guidance on newborn care, breastfeeding support, emotional reassurance, and light household assistance to help parents recover, adjust, and feel confident in their new roles." 
url="/faq"
schema={{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "",
            url: "",
            name: "Nested Nurturers | Doulas Services SF Bay",
            isPartOf: {
                "@id": "https://nestednurturers.com/#website",
            },
            about: {
                "@id": "https://nestednurturers.com/#organization",
            },
            primaryImageOfPage: {
                "@id": "https://nestednurturers.com/#primaryimage",
            },
            image: {
                "@id": "https://nestednurturers.com/#primaryimage",
            },
            thumbnailUrl: "https://nestednurturers.com/images/logo.webp",
            datePublished: TodaysDate,
            dateModified: TodaysDate,
            description:
                "Nested Nurturers offers compassionate, personalized doula support in the Bay Area, California. We provide prenatal, birth, and postpartum care to help families feel confident, supported, and empowered throughout their parenthood journey",
            breadcrumb: {
                "@id": "https://nestednurturers.com/#breadcrumb",
            },
            inLanguage: "en-US",
            potentialAction: [
                {
                    "@type": "ReadAction",
                    target: ["https://nestednurturers.com/"],
                },
            ],
        },
        {
            "@type": "ImageObject",
            inLanguage: "en-US",
            "@id": "https://nestednurturers.com/#primaryimage",
            url: "https://nestednurturers.com/images/logo.webp",
            contentUrl: "https://nestednurturers.com/images/logo.webp",
            width: 1200,
            height: 799,
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://nestednurturers.com/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "FAQ",
                    item: "https://nestednurturers.com/faq",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Home",
                    item: "https://nestednurturers.com",
                },

            ],
        },
        {
            "@type": "WebSite",
            "@id": "https://nestednurturers.com/#website",
            url: "https://nestednurturers.com/",
            name: "Nested Nurturers",
            description:
                "Nested Nurturers|Nested Nurturers offers compassionate, personalized doula support in the Bay Area, California. We provide prenatal, birth, and postpartum care to help families feel confident, supported, and empowered throughout their parenthood journey",
            publisher: {
                "@id": "https://nestednurturers.com/#organization",
            },
            potentialAction: [
                {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                            "https://nestednurturers.com/?s={search_term_string}",
                    },
                    "query-input": {
                        "@type": "PropertyValueSpecification",
                        valueRequired: true,
                        valueName: "search_term_string",
                    },
                },
            ],
            inLanguage: "en-US",
        },
        {
            "@type": "Organization",
            "@id": "https://nestednurturers.com/#organization",
            name: "Nested Nurturers",
            url: "https://nestednurturers.com/",
            logo: {
                "@type": "ImageObject",
                inLanguage: "en-US",
                "@id": "https://nestednurturers.com/#/schema/logo/image/",
                url: "https://nestednurturers.com/images/logo.webp",
                contentUrl:
                    "https://nestednurturers.com/images/logo.webp",
                width: 240,
                height: 80,
                caption: "Nested Nurturers",
            },
            image: {
                "@id": "https://nestednurturers.com/images/logo.webp",
            },
        },
    ],
}

}

/>
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
                     
                  Frequently Asked Questions
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-8 leading-relaxed">
                     
                  Take A look at what people ask us
                  </p>
                  <a
                      href="/contact"
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