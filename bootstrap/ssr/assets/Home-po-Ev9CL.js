import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { S as Seo, H as Header, C as Contact, F as Footer } from "./SEO-CcsoXETz.js";
import { useState } from "react";
import "react-datepicker";
import "date-fns";
import "formik";
import "yup";
import "axios";
import "react-transition-group";
import "../ssr.js";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-dom";
const SinglePriceTemp = () => {
  let visitContact = () => {
    window.open("/services");
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container px-6 py-12 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold text-gray-800 capitalize dark:text-white", children: "Our Pricing Plan" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-center items-center space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block w-40 h-1 bg-blue-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-1 bg-blue-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block w-1 h-1 bg-blue-500 rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium text-gray-500 dark:text-gray-300", children: "You can get All Access by selecting your plan!" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 w-full flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col h-full", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white", children: "DAY DOULA SUPPORT" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 dark:text-gray-300", children: "Personalized postpartum care during daytme" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300", children: [
          "$1560.00 ",
          /* @__PURE__ */ jsx("span", { className: "text-base font-medium", children: "/4days a week" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            role: "button",
            onClick: visitContact,
            className: "w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:ring-blue-300 focus:ring-opacity-80",
            children: "Contact Us"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full   dark:bg-gray-800 flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "p-6 flex flex-col h-full", children: /* @__PURE__ */ jsx("button", { onClick: () => {
        window.open("/pricing");
      }, className: "w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:pr_btn focus:ring-opacity-80", children: "View More Packages" }) }) })
    ] })
  ] }) });
};
function ServiceCard() {
  const [services, setServices] = useState([
    {
      image: "images/services/mom-and-baby-boy-1-e1634546528976.jpg",
      title: "Birth Doula Support",
      description: "Our birth doula services are designed to provide continuous emotional, physical, and informational support throughout pregnancy, labor, and delivery. We help you feel confident and prepared by offering personalized birth planning, comfort techniques, breathing guidance, and advocacy during labor. Whether you’re planning a hospital birth, birth center experience, or home birth, our trained doulas are by your side every step of the way. From early labor support to immediate postpartum care, we are committed to creating a calm, empowering birth experience for you and your family."
    },
    {
      image: "images/services/mom-holds-happy-baby-while-drinking-coffee.jpg",
      title: "Postpartum Doula Services",
      description: `We offer holistic day doula, overnight doula and newborn care specialist services personalized care to support your physical and emotional well-being during the postpartum period. We assist with newborn care, infant soothing, feeding support, and light household help, ensuring you feel confident, rested, and supported as you transition into parenthood.`
    },
    {
      image: "images/services/black-mother-taking-car-her-child_23-2149836804.jpg",
      title: "Sibling Doula Support",
      description: "Welcoming a new baby can be a big transition for older siblings. Our sibling doula support helps children feel included and cared for during this exciting time. We provide gentle guidance, fun engagement, and reassurance, allowing parents to focus on labor, recovery, and bonding with the new baby while knowing their other children are supported with love and care."
    },
    {
      image: "images/services/birth-labor-doula-support-services.jpg",
      title: "Sleep Training Consultation & Support",
      description: "We understand how challenging sleep can be for both parents and babies. Our sleep training consultation services offer customized solutions to address your child’s sleep needs. From gentle sleep methods to establishing healthy sleep habits, we work with you to create a plan that fits your family’s goals and lifestyle, ensuring peaceful nights and well-rested days."
    }
  ]);
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row flex-wrap justify-start w-full", children: services.map((service, idx) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex flex-col items-center gap-3 px-2 py-2 text-center flex-[0_0_33.333%] md:max-w-[33.333%]",
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/contact",
          className: "flex h-full w-full flex-col items-center overflow-hidden rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-md",
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden mb-4 h-64 w-full", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: service.image,
                alt: "Mama-Ngina-Front",
                className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-4 px-6 text-2xl font-light tracking-wide text-gray-900", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "flex-grow px-6 pb-5 text-lg leading-relaxed text-gray-600", children: service.description }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact",
                className: "mb-6 mt-3 inline-flex items-center justify-center rounded bg-pr_btn px-6 py-3 font-semibold text-white shadow transition-transform hover:-translate-y-1 hover:shadow-lg",
                children: "Book Now"
              }
            )
          ]
        }
      )
    },
    idx
  )) }) });
}
function Reviews() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { class: "elfsight-app-6a2a443e-03d6-4e83-abc4-415d78705fc1", "data-elfsight-app-lazy": true }) });
}
function Home({ uscities }) {
  const HeroSection = () => {
    return /* @__PURE__ */ jsx("section", { className: "bg-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex flex-col md:flex-row items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 md:pr-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-snug", children: "Looking for guidance as you prepare for birth and the first weeks of parenthood?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "At Nested Nurturers, we believe that every family deserves compassionate, personalized support as they navigate the beautiful yet challenging journey of early parenthood. Our team of certified postpartum doulas and sleep consultants is dedicated to empowering parents with the tools, guidance, and encouragement they need to create peaceful, nurturing environments for their growing families." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            "aria-label": "contact-page",
            type: "button",
            className: "inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition",
            children: "Book Your Free Consultation"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 md:mt-0 md:w-1/2 flex justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images\\services\\mom-and-baby-transparent-smaller-white-outline.png",
          alt: "Parent holding baby",
          className: "w-full max-w-md"
        }
      ) })
    ] }) });
  };
  const ChooseSection = () => {
    return /* @__PURE__ */ jsx("section", { className: "bg-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex  flex-col  md:flex-row items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-8 md:mt-0 md:w-1/2 h-full flex justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images\\services\\smiling-mother-clapping-and-looking-at-happy-toddler-sitting-on-couch-in-living-room-1024x683.jpg",
          alt: "Parent holding baby",
          className: "w-full max-w-md"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 md:pr-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-snug", children: "Why Choose Us?" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-snug", children: "Your Partner in Peaceful Postpartum Transitions" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Nested Nurturers is your trusted partner for postpartum care and sleep training services, offering compassionate support to help families bond, rest, and grow together. Let us ease the transition into parenthood with personalized guidance and gentle care." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            type: "button",
            "aria-label": "contact us",
            className: "inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition",
            children: "Learn More"
          }
        )
      ] })
    ] }) });
  };
  let TodaysDate = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxs("div", { className: "overflow-y-hidden", children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Doula  Support Services",
        description: "Nested Nurturers provides compassionate doula support in the Bay Area, California, offering prenatal, birth, and postpartum care to support and empower growing families.",
        url: "/",
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "",
              url: "",
              name: "Nested Nurturers | Doulas Services SF Bay",
              isPartOf: {
                "@id": "https://nestednurturers.com/#website"
              },
              about: {
                "@id": "https://nestednurturers.com/#organization"
              },
              primaryImageOfPage: {
                "@id": "https://nestednurturers.com/#primaryimage"
              },
              image: {
                "@id": "https://nestednurturers.com/#primaryimage"
              },
              thumbnailUrl: "https://nestednurturers.com/images/logo.webp",
              datePublished: TodaysDate,
              dateModified: TodaysDate,
              description: "Nested Nurturers offers compassionate, personalized doula support in the Bay Area, California. We provide prenatal, birth, and postpartum care to help families feel confident, supported, and empowered throughout their parenthood journey",
              breadcrumb: {
                "@id": "https://nestednurturers.com/#breadcrumb"
              },
              inLanguage: "en-US",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://nestednurturers.com/"]
                }
              ]
            },
            {
              "@type": "ImageObject",
              inLanguage: "en-US",
              "@id": "https://nestednurturers.com/#primaryimage",
              url: "https://nestednurturers.com/images/logo.webp",
              contentUrl: "https://nestednurturers.com/images/logo.webp",
              width: 1200,
              height: 799
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nestednurturers.com/#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nestednurturers.com"
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://nestednurturers.com/#website",
              url: "https://nestednurturers.com/",
              name: "Nested Nurturers",
              description: "Nested Nurturers|Nested Nurturers offers compassionate, personalized doula support in the Bay Area, California. We provide prenatal, birth, and postpartum care to help families feel confident, supported, and empowered throughout their parenthood journey",
              publisher: {
                "@id": "https://nestednurturers.com/#organization"
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://nestednurturers.com/?s={search_term_string}"
                  },
                  "query-input": {
                    "@type": "PropertyValueSpecification",
                    valueRequired: true,
                    valueName: "search_term_string"
                  }
                }
              ],
              inLanguage: "en-US"
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
                contentUrl: "https://nestednurturers.com/images/logo.webp",
                width: 240,
                height: 80,
                caption: "Nested Nurturers"
              },
              image: {
                "@id": "https://nestednurturers.com/images/logo.webp"
              }
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(HeroSection, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[#f0f1f3] ", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide", children: "Our Services" }),
          /* @__PURE__ */ jsx("p", { className: "pt-5 leading-relaxed text-lg text-gray-700", children: "At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood. Our services are carefully crafted to nurture both parents and babies, ensuring that you feel confident, empowered, and connected as you begin this incredible journey." }),
          /* @__PURE__ */ jsx("div", { className: "w-32 h-px bg-pr/60 mx-auto mt-6" })
        ] }),
        /* @__PURE__ */ jsx(ServiceCard, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/services",
          type: "button",
          className: "inline-block mt-6 px-6 py-3 bg-pr_btn hover:bg-pr_btn text-white font-semibold rounded-lg shadow  transition",
          children: "View More Services"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(ChooseSection, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(SinglePriceTemp, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Contact, { cities: uscities }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Reviews, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};
//# sourceMappingURL=Home-po-Ev9CL.js.map
