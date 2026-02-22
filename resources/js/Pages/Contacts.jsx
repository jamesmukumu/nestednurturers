import { Contact } from "@/comps/Contact";
import { Footer } from "@/comps/Foot";
import { Header } from "@/comps/Header";
import { Seo } from "@/comps/SEO";

export default function Contacts(){
    let TodaysDate = new Date()
return (
<div>
<Seo 
title="Contact Us" 
description="Contact Nested Nurturers for compassionate prenatal, birth, and postpartum doula support in the Bay Area, California. Reach us at +1 (925) 316-8311 or info@nestednurturers.com
 to schedule a consultation and receive personalized care for your growing family." 
 url="/contact"
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
                    name: "Contact Us",
                    item: "https://nestednurturers.com/contact",
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