import { jsx, jsxs } from "react/jsx-runtime";
import { S as Seo, H as Header, C as Contact, F as Footer } from "./SEO-CcsoXETz.js";
import React__default from "react";
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
const Fq = () => {
  const [openIndex, setOpenIndex] = React__default.useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is postpartum doula?",
      answer: "A postpartum doula provides non-medical support for new parents, offering guidance on newborn care, breastfeeding, and emotional support, along with light household help."
    },
    {
      question: "What Sleep Training Services Do You Offer?",
      answer: "We offer personalized pediatric sleep training consultations to help families establish healthy sleep routines and improve their child’s sleep habits with gentle, effective methods."
    },
    {
      question: "How do i know if i need postpartum doula?",
      answer: "If you're feeling overwhelmed, need help adjusting to life with a new baby, or want extra support with feeding and baby care, postpartum doula services can offer guidance and reassurance."
    },
    {
      question: "Do you offer breastfeeding support?",
      answer: "Yes, we offer breastfeeding guidance, including help with latch, milk supply, and overall feeding techniques"
    },
    {
      question: "What sleep training methods do you use?",
      answer: "We use gentle, evidence-based methods that focus on building positive sleep habits, creating a peaceful sleep environment, and minimizing stress for both parents and babies."
    },
    {
      question: "How long does sleep training take to work?",
      answer: "Results typically appear within a few days to a couple of weeks, depending on your child's needs and consistency with the plan"
    },
    {
      question: "Do you provide overnight doula support?",
      answer: "Yes, we offer overnight support to help with feedings and soothing, allowing you to rest and recharge."
    },
    {
      question: "How do I start sleep training?",
      answer: "Schedule a consultation, and we'll create a personalized sleep plan for your child and provide ongoing support to guide you through the process"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full flex flex-col items-center justify-center py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-neutral-900 mb-4", children: "Most asked FAQ's" }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-700 max-w-xl mx-auto text-sm", children: "We're here to help you and solve doubts. Find answers to the most common questions below." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap -mx-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => toggleFAQ(index),
        className: "w-full md:w-1/2 px-3 mb-4",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-slate-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg md:text-xl font-bold text-neutral-900", children: faq.question }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `text-slate-400 p-1 rounded transition-colors ${openIndex === index ? "bg-slate-200 text-slate-600" : "hover:bg-slate-300 hover:text-slate-500"}`,
                children: openIndex === index ? /* @__PURE__ */ jsx("i", { className: "fa-solid fa-minus" }) : /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plus" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 leading-relaxed", children: faq.answer })
            }
          )
        ] })
      },
      index
    )) })
  ] }) });
};
function FAQ() {
  var TodaysDate = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxs("div", { className: "w-full overflow-y-hidden", children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "FAQ",
        description: "A postpartum doula provides compassionate, non-medical support to families during the early weeks after birth. This includes guidance on newborn care, breastfeeding support, emotional reassurance, and light household assistance to help parents recover, adjust, and feel confident in their new roles.",
        url: "/faq",
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
                  name: "FAQ",
                  item: "https://nestednurturers.com/faq"
                },
                {
                  "@type": "ListItem",
                  position: 2,
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
    /* @__PURE__ */ jsxs("section", { className: "relative w-full py-4 h-[500px] flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "images\\services\\newborn-baby-boy-sucking-milk-from-mothers-breast-portrait-of-mom-and-breastfeeding-baby-e1634613320759.jpg",
          alt: "Birth and Postpartum Support",
          className: "absolute inset-0 w-full h-full object-cover rounded-2xl"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 rounded-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 max-w-2xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-2xl text-white mb-8 leading-relaxed", children: "Take A look at what people ask us" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "inline-block bg-pr_btn mb-2 hover:bg-pr_btn text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition",
            children: "BOOK YOUR CONSULTATION"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-5xl font-light text-gray-900 mb-4 tracking-wide", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "pt-5 leading-relaxed text-lg text-gray-700", children: "At Nested Nurturers, we are dedicated to providing families with the essential support they need to flourish during the early stages of parenthood. Our services are carefully crafted to nurture both parents and babies, ensuring that you feel confident, empowered, and connected as you begin this incredible journey" }),
      /* @__PURE__ */ jsx("div", { className: "w-32 h-px bg-[#8B7355]/60 mx-auto mt-6" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full", children: /* @__PURE__ */ jsx(Fq, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  FAQ as default
};
//# sourceMappingURL=Faq-Bdaf6JzN.js.map
