import { Header } from "../comps/Header";
import { Footer } from "../comps/Foot";
import { Contact } from "../comps/Contact";
import Pricing from "./Pricing";
import { PriceTemp, SinglePriceTemp } from "@/comps/PricingComp";
import { Seo } from "@/comps/SEO";
import { ServiceCard } from "@/comps/ServicesCard";
import { Reviews } from "../comps/Reviews";
export default function Home() {
    const HeroSection = () => {
        return (
            <section className="bg-white py-12">
                
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            Looking for guidance as you prepare for birth and
                            the first weeks of parenthood?
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            At Nested Nurturers, we believe that every family
                            deserves compassionate, personalized support as they
                            navigate the beautiful yet challenging journey of
                            early parenthood. Our team of certified postpartum
                            doulas and sleep consultants is dedicated to
                            empowering parents with the tools, guidance, and
                            encouragement they need to create peaceful,
                            nurturing environments for their growing families.
                        </p>
                        <a
                            href="/contact"
                            type="button"
                            className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                        >
                            Book Your Free Consultation
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                     
                        <img
                            src="images\services\mom-and-baby-transparent-smaller-white-outline.png"
                            alt="Parent holding baby"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>
        );
    };

    const ChooseSection = () => {
        return (
            <section className="bg-white py-12">
              
                <div className="container mx-auto px-6 flex  flex-col  md:flex-row items-center">
                    <div className="mt-8 md:mt-0 md:w-1/2 h-full flex justify-center">
                        <img
                            src="images\services\smiling-mother-clapping-and-looking-at-happy-toddler-sitting-on-couch-in-living-room-1024x683.jpg"
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
                            Nested Nurturers is your trusted partner for
                            postpartum care and sleep training services,
                            offering compassionate support to help families
                            bond, rest, and grow together. Let us ease the
                            transition into parenthood with personalized
                            guidance and gentle care.
                        </p>
                        <a
                            href="/contact"
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

    let TodaysDate = new Date();
    return (
        <div className="overflow-y-hidden">
            <Seo
                title="Doula  Support Services"
                description="Nested Nurturers offers compassionate, personalized doula support in the Bay Area, California. We provide prenatal, birth, and postpartum care to help families feel confident, supported, and empowered throughout their parenthood journey"
                url="/"
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
            <Header />
            <section>
                <HeroSection />
            </section>
            {/* Section */}
            <section className="py-24 bg-[#f0f1f3] ">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide">
                            Our Services
                        </h2>
                        <p className="pt-5 leading-relaxed text-lg text-gray-700">
                            At Nested Nurturers, we are dedicated to providing
                            families with the essential support they need to
                            flourish during the early stages of parenthood. Our
                            services are carefully crafted to nurture both
                            parents and babies, ensuring that you feel
                            confident, empowered, and connected as you begin
                            this incredible journey.
                        </p>
                        <div className="w-32 h-px bg-pr/60 mx-auto mt-6"></div>
                    </div>

                  <ServiceCard/>
                </div>
                <div className="w-full flex justify-center">
                    <a
                        href="/services"
                        type="button"
                        className="inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition"
                    >
                        View More Services
                    </a>
                </div>
            </section>
            <section>
                <ChooseSection />
            </section>
            <section>
              <SinglePriceTemp/>
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <Reviews/>
            </section>
            <Footer />
        </div>
    );
}
