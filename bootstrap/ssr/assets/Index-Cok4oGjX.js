import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link, router } from "@inertiajs/react";
import { C as Card } from "./card.esm-Dfu5Ic7s.js";
import { P as Paginator } from "./paginator.esm-NnQVNDD7.js";
import { T as Tag } from "./tag.esm-CsuX49Li.js";
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
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
import "./sidebar.esm-Dou14AQP.js";
import "./inputtext.esm-DDz9PXvh.js";
import "./dropdown.esm-CKXiqnMR.js";
import "./virtualscroller.esm-DaOHCdsa.js";
import "./overlayservice.esm-B2GBYfSa.js";
import "./Button-phcvJh3z.js";
const heroImage = "images/services/mother-playing-with-baby-helping-her-crawl-on-bed-indoor-e1634117890229-1024x682.jpg";
function formattedDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function BlogsIndex({ blogs, categories, filters }) {
  const activeCategoryId = filters.categoryId ? String(filters.categoryId) : "";
  const articles = blogs.data.map((blog, index) => ({
    "@type": "ListItem",
    position: (blogs.current_page - 1) * blogs.per_page + index + 1,
    item: {
      "@type": "Article",
      headline: blog.title,
      url: `/blog/${blog.slug}`
    }
  }));
  const changePage = ({ page }) => {
    router.get("/blogs", {
      ...activeCategoryId ? { articlesCategories_id: activeCategoryId } : {},
      page: page + 1
    }, {
      preserveScroll: true,
      preserveState: true
    });
  };
  const categoryHref = (categoryId) => categoryId ? `/blogs?articlesCategories_id=${encodeURIComponent(categoryId)}` : "/blogs";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Blog News",
        description: "Read practical guidance and the latest insights from the Nested Nurturers team on pregnancy, birth, postpartum care, and family support.",
        url: "/blogs",
        schema: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Blog News",
          url: "https://nestednurturers.com/blogs",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: articles
          }
        },
        image: heroImage
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "public-blogs", children: [
      /* @__PURE__ */ jsxs("section", { className: "public-blogs__hero", children: [
        /* @__PURE__ */ jsx("img", { src: heroImage, alt: "", className: "public-blogs__hero-image" }),
        /* @__PURE__ */ jsx("div", { className: "public-blogs__hero-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "public-blogs__hero-content", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "public-blogs__eyebrow", children: "Knowledge Hub" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Love, Care &",
            /* @__PURE__ */ jsx("span", { children: " Support Doulas" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Helpful knowledge and compassionate guidance for every step of your growing family." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "public-blogs__filters", "aria-label": "Filter articles by category", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/blogs",
            className: `public-blogs__filter${activeCategoryId ? "" : " is-active"}`,
            "aria-current": activeCategoryId ? void 0 : "page",
            children: "All"
          }
        ),
        categories.map((category) => {
          const selected = activeCategoryId === String(category.id);
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: categoryHref(category.id),
              className: `public-blogs__filter${selected ? " is-active" : ""}`,
              "aria-current": selected ? "page" : void 0,
              children: category.title
            },
            category.id
          );
        })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "public-blogs__listing", "aria-label": "Published articles", children: [
        blogs.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "public-blogs__grid", children: blogs.data.map((blog) => /* @__PURE__ */ jsx(Card, { className: "public-blogs__card", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/blog/${blog.slug}`,
            className: "public-blogs__card-link",
            "aria-label": `Read ${blog.title}`,
            children: [
              blog.image_url ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: blog.image_url,
                  alt: "",
                  className: "public-blogs__card-image",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "public-blogs__card-placeholder", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", { className: "pi pi-image" }) }),
              /* @__PURE__ */ jsxs("div", { className: "public-blogs__card-content", children: [
                /* @__PURE__ */ jsxs("div", { className: "public-blogs__card-meta", children: [
                  blog.category && /* @__PURE__ */ jsx(Tag, { value: blog.category.title }),
                  /* @__PURE__ */ jsx("span", { children: formattedDate(blog.created_at) })
                ] }),
                /* @__PURE__ */ jsx("h2", { children: blog.title }),
                /* @__PURE__ */ jsx("p", { children: blog.overview }),
                /* @__PURE__ */ jsxs("div", { className: "public-blogs__card-footer", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    blog.reading_time,
                    " min read"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "public-blogs__read-more", children: [
                    "Read article ",
                    /* @__PURE__ */ jsx("i", { className: "pi pi-arrow-right", "aria-hidden": "true" })
                  ] })
                ] })
              ] })
            ]
          }
        ) }, blog.slug)) }) : /* @__PURE__ */ jsxs("div", { className: "public-blogs__empty", children: [
          /* @__PURE__ */ jsx("i", { className: "pi pi-book", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("h2", { children: "No published articles yet" }),
          /* @__PURE__ */ jsx("p", { children: "Check back soon for helpful articles from our team." })
        ] }),
        blogs.total > blogs.per_page && /* @__PURE__ */ jsx(
          Paginator,
          {
            first: (blogs.current_page - 1) * blogs.per_page,
            rows: blogs.per_page,
            totalRecords: blogs.total,
            onPageChange: changePage,
            className: "public-blogs__paginator"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BlogsIndex as default
};
//# sourceMappingURL=Index-Cok4oGjX.js.map
