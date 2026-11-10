import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { T as Tag } from "./tag.esm-CsuX49Li.js";
import { B as Button } from "./Button-phcvJh3z.js";
import { S as Seo, H as Header, F as Footer } from "./SEO-DXEFBRNA.js";
/* empty css               */
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "./portal.esm-D9mKEukT.js";
import "react-dom";
import "./sidebar.esm-Dou14AQP.js";
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
function formattedDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function BlogShow({ blog }) {
  const overview = blog?.overview ?? "";
  const description = blog?.description ?? "";
  const pageUrl = `https://nestednurturers.com/blog/${blog?.slug ?? ""}`;
  const seoDescription = overview.replace(/<[^>]*>/g, "").slice(0, 160);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: blog?.title ?? "Blog",
        description: seoDescription,
        url: `/blog/${blog?.slug ?? ""}`,
        ogType: "article",
        image: blog?.image_url || void 0,
        schema: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog?.title ?? "Blog",
          description: seoDescription,
          image: blog?.image_url ? [blog.image_url] : void 0,
          datePublished: blog?.created_at,
          mainEntityOfPage: pageUrl
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "public-blog-article", children: [
      /* @__PURE__ */ jsx("div", { className: "public-blog-article__back", children: /* @__PURE__ */ jsx(Button, { href: "/blogs", variant: "secondary", leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-arrow-left", "aria-hidden": "true" }), children: "All articles" }) }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsxs("header", { className: "public-blog-article__header", children: [
          blog?.category && /* @__PURE__ */ jsx(Tag, { value: blog.category.title, className: "public-blog-article__category" }),
          /* @__PURE__ */ jsx("h1", { children: blog?.title ?? "Blog" }),
          /* @__PURE__ */ jsxs("div", { className: "public-blog-article__meta", children: [
            blog?.created_at && /* @__PURE__ */ jsx("time", { dateTime: blog.created_at, children: formattedDate(blog.created_at) }),
            /* @__PURE__ */ jsxs("span", { children: [
              blog?.reading_time ?? 0,
              " min read"
            ] })
          ] })
        ] }),
        blog?.image_url && /* @__PURE__ */ jsx("img", { src: blog.image_url, alt: "", className: "public-blog-article__image" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "public-blog-article__body",
            dangerouslySetInnerHTML: { __html: description }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10", children: /* @__PURE__ */ jsx(Link, { href: "/blogs", className: "public-blogs__read-more", children: "Explore more articles" }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogShow as default
};
//# sourceMappingURL=Show-Cb618Vc-.js.map
