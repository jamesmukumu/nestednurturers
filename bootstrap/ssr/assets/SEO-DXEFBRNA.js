import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import { S as Sidebar } from "./sidebar.esm-Dou14AQP.js";
import { B as Button } from "./Button-phcvJh3z.js";
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { class: "bg-pr", children: /* @__PURE__ */ jsxs("div", { class: "container px-6 py-12 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { class: " md:-mx-3 md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl", children: "Serving Bay Area And Beyond" }),
      /* @__PURE__ */ jsx("p", { class: "p-2 text-m font-semibold tracking-tight text-white md:mx-3 xl:text-xl", children: "We are trusted and approved by Carrot and Medi-Cal." })
    ] }),
    /* @__PURE__ */ jsx("hr", { class: "my-6 border-white-200 md:my-10" }),
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "font-semibold text-xl text-white", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              "aria-label": "home-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/about",
              "aria-label": "about-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "About"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/services",
              "aria-label": "services-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Services"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/blogs",
              "aria-label": "blogs-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Blog"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/pricing",
              "aria-label": "pricing-link",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Price"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              "aria-label": "contact-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              "aria-label": "contact",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Career (Are you a doula? Contact us to serve our community)"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { class: "font-semibold text-xl text-white", children: "Benefits" }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "/services",
              class: "transition-colors text-white duration-300 hover:underline",
              children: "Carrot Fertility"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "/services",
              class: "transition-colors text-white duration-300 hover:underline",
              children: "Medi-cal"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold text-white", children: "Location" }),
        /* @__PURE__ */ jsx("div", { class: "flex flex-col items-start mt-5 space-y-2", children: /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: "/",
            class: "transition-colors text-white duration-300 hover:underline",
            children: "Bay Area&Beyond"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold text-white", children: "Connect with us" }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center space-x-5 text-white", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-facebook text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-instagram text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-tiktok text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-yelp text-xl hover:text-pr transition" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+1 (925) 316-8311",
              class: "text-white transition-colors duration-300 hover:underline",
              children: "+1 (925) 316-8311"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@nestednurturers.com",
              class: "text-white transition-colors duration-300 hover:underline",
              children: "info@nestednurturers.com"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-center justify-between sm:flex-row", children: [
      /* @__PURE__ */ jsx("a", { href: "/", class: "mt-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          class: "w-auto h-14",
          src: "images/bottom-logo.jpeg",
          alt: "logo"
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { class: "mt-4 text-sm sm:mt-0 text-white", children: [
        "© Copyright ",
        year,
        ".",
        " ",
        /* @__PURE__ */ jsx("a", { class: "underline text-white", href: "/", target: "blank", children: "NestedNurturers" }),
        " ",
        "All Rights Reserved."
      ] })
    ] })
  ] }) });
}
function Header() {
  const { url } = usePage();
  const currentPath = url.split("?")[0];
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const isActive = (path) => currentPath === path;
  const linkClass = (path) => `transition ${isActive(path) ? "text-pr" : "text-black hover:text-pr"}`;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const resizeObserver = new ResizeObserver(() => {
      setHeaderHeight(header.offsetHeight);
    });
    resizeObserver.observe(header);
    setHeaderHeight(header.offsetHeight);
    return () => resizeObserver.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { ref: headerRef, className: "fixed top-0 left-0 z-50 w-full bg-white shadow-md", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-pr text-white py-2 border-b border-pr", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone text-lg" }),
            /* @__PURE__ */ jsx("span", { children: "+1 (925) 316-8311" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-regular fa-envelope text-lg" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@nestednurturers.com", className: "text-white", children: "info@nestednurturers.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-5 text-white", children: [
          /* @__PURE__ */ jsx("a", { "aria-label": "Facebook link", href: "https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook text-xl  cursor-pointer transition" }) }),
          /* @__PURE__ */ jsx("a", { "aria-label": "Instagram link", href: "https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram text-xl cursor-pointer transition" }) }),
          /* @__PURE__ */ jsx("a", { "aria-label": "Tiktok link", href: "https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-tiktok text-xl cursor-pointer transition" }) }),
          /* @__PURE__ */ jsx("a", { "aria-label": "yelp-account", href: "https://www.yelp.com/biz/nested-nurturers-martinez", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-yelp text-xl cursor-pointer transition" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            "aria-label": "logo",
            href: "/",
            className: "transition-all duration-300 ease-in-out h-[90px]",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/updates-logo.jpeg",
                alt: "Logo",
                className: "h-full w-auto object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-8 text-base font-medium", children: [
          /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "home-page", className: linkClass("/"), children: "Home" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative",
              onMouseEnter: () => setOpenDropdown("hotels"),
              onMouseLeave: () => setOpenDropdown(null),
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/services",
                    "aria-label": "services-page",
                    className: `flex items-center gap-2 ${linkClass("/services")}`,
                    children: [
                      "Services",
                      /* @__PURE__ */ jsx(
                        "i",
                        {
                          className: `fa-solid fa-chevron-down text-xs transition-transform duration-200 ${openDropdown === "hotels" ? "rotate-180" : ""}`
                        }
                      )
                    ]
                  }
                ),
                openDropdown === "hotels" && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full pt-2", children: /* @__PURE__ */ jsx("div", { className: "w-56 rounded-xl bg-white shadow-xl z-50", children: /* @__PURE__ */ jsxs("ul", { className: "py-2 text-sm", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      "aria-label": "services-page",
                      href: "/services",
                      className: "block px-4 py-2 hover:bg-gray-100 transition",
                      children: "Birth Support"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/services",
                      "aria-label": "services-page",
                      className: "block px-4 py-2 hover:bg-gray-100 transition",
                      children: "Postpartum Support"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/services",
                      "aria-label": "services-page",
                      className: "block px-4 py-2 hover:bg-gray-100 transition",
                      children: "Sibling Support"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/services",
                      "aria-label": "services-page",
                      className: "block px-4 py-2 hover:bg-gray-100 transition",
                      children: "Night Doula Care"
                    }
                  ) })
                ] }) }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("a", { href: "/about", "aria-label": "about-page", className: linkClass("/about"), children: "About" }),
          /* @__PURE__ */ jsx("a", { href: "/pricing", "aria-label": "pricing-page", className: linkClass("/pricing"), children: "Pricing" }),
          /* @__PURE__ */ jsx("a", { href: "/faq", "aria-label": "faq-page", className: linkClass("/faq"), children: "FAQ" }),
          /* @__PURE__ */ jsx("a", { href: "/blogs", "aria-label": "blogs-page", className: linkClass("/blogs"), children: "Blog" }),
          /* @__PURE__ */ jsx(Button, { href: "/contact", children: "Contact Us" })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            iconOnly: true,
            "aria-label": "Open navigation menu",
            onClick: () => setShowSideMenu(true),
            className: "lg:hidden text-black",
            children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "currentColor", children: [
              /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Sidebar, { visible: showSideMenu, onHide: () => setShowSideMenu(false), children: [
        /* @__PURE__ */ jsx("a", { "aria-label": "logo", href: "/", children: /* @__PURE__ */ jsx("img", { className: "w-auto h-13", src: "/images/updates-logo.jpeg", alt: "Logo" }) }),
        /* @__PURE__ */ jsx("div", { class: "flex flex-col justify-between flex-1 mt-6", children: /* @__PURE__ */ jsx("nav", { class: "-mx-3 space-y-6", children: /* @__PURE__ */ jsxs("div", { class: "space-y-3", children: [
          /* @__PURE__ */ jsx("label", { class: "px-3 text-xs text-gray-500 uppercase" }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Home page", class: `px-3 py-2 rounded-lg ${isActive("/") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Home" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "See what services we do offer", class: `px-3 py-2 rounded-lg ${isActive("/services") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/services", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Who are nested nurturers check more about us", class: `px-3 py-2 rounded-lg ${isActive("/about") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/about", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "About" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Check our frequently asked question", class: `px-3 py-2 rounded-lg ${isActive("/faq") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/faq", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "FAQ" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Read our latest articles", class: `px-3 py-2 rounded-lg ${isActive("/blogs") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/blogs", children: [
            /* @__PURE__ */ jsx("i", { class: "pi pi-book w-5", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Blog" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Check our affordable pricing", class: `px-3 py-2 rounded-lg ${isActive("/pricing") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, target: "_blank", href: "/pricing", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Pricing" })
          ] }),
          /* @__PURE__ */ jsxs("a", { "aria-label": "Contact Us to get a free consultation", class: `px-3 py-2 rounded-lg ${isActive("/contact") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, target: "_blank", href: "/contact", children: [
            /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
            /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Contact Us" })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", style: { height: headerHeight } })
  ] });
}
const SITE_NAME = "Nested Nurturers";
const SITE_URL = "https://nestednurturers.com";
const DEFAULT_TITLE = "Nested Nurturers | Prenatal, Birth & Postpartum Support";
const DEFAULT_DESCRIPTION = "Nested Nurturers provides compassionate prenatal, birth, and postpartum doula support in the Bay Area, California, helping families feel supported, confident, and cared for through pregnancy and early parenthood.";
const DEFAULT_KEYWORDS = "postpartum doula Bay Area, birth doula California, prenatal support, newborn care, sleep support, family support, Bay Area postpartum care";
function normalizeUrl(value) {
  if (!value) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}
function normalizeImageUrl(value) {
  if (!value) return `${SITE_URL}/images/updates-logo.jpeg`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}
function buildPageTitle(title) {
  if (!title) return DEFAULT_TITLE;
  if (title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}
function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogTitle = "",
  ogDescription = "",
  ogType = "website",
  ogUrl = "",
  twitterCard = "summary_large_image",
  twitterTitle = "",
  twitterDescription = "",
  url = "",
  schema = null,
  image = "images/updates-logo.jpeg"
}) {
  const finalUrl = normalizeUrl(ogUrl || url);
  const finalImage = normalizeImageUrl(image);
  const pageTitle = buildPageTitle(title);
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageKeywords = keywords || DEFAULT_KEYWORDS;
  const ogMetaTitle = ogTitle || pageTitle;
  const ogMetaDescription = ogDescription || pageDescription;
  const twitterMetaTitle = twitterTitle || pageTitle;
  const twitterMetaDescription = twitterDescription || pageDescription;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: pageTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: finalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: SITE_NAME }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogMetaTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: ogMetaDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: finalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: finalImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: ogMetaTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: twitterCard }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: twitterMetaTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: twitterMetaDescription }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: finalImage }),
    schema ? /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) : null
  ] });
}
export {
  Footer as F,
  Header as H,
  Seo as S
};
//# sourceMappingURL=SEO-DXEFBRNA.js.map
