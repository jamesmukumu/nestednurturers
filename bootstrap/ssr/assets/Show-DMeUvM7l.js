import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { C as Card } from "./card.esm-Dfu5Ic7s.js";
import { T as Tag } from "./tag.esm-CsuX49Li.js";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
import { B as Button } from "./Button-phcvJh3z.js";
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
import "./inputtext.esm-DDz9PXvh.js";
import "./overlayservice.esm-B2GBYfSa.js";
import "./sidebar.esm-Dou14AQP.js";
import "./ThemeToggle-CE-bVUI6.js";
function ShowBlog({ blog }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: blog.title }),
    /* @__PURE__ */ jsxs("section", { className: "admin-page blogs-show", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header blogs-show__header", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { children: blog.title }),
          /* @__PURE__ */ jsxs("p", { children: [
            blog.category?.title || "Uncategorized",
            " · ",
            blog.reading_time,
            " min read"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blogs-show__actions", children: [
          /* @__PURE__ */ jsx(Tag, { value: blog.is_published ? "Published" : "Draft", severity: blog.is_published ? "success" : "warning" }),
          /* @__PURE__ */ jsx(Button, { href: `/dashboard/blogs/${blog.id}/edit`, leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-pencil", "aria-hidden": "true" }), children: "Edit blog" })
        ] })
      ] }),
      blog.image_url && /* @__PURE__ */ jsx("img", { className: "blogs-show__image", src: blog.image_url, alt: "" }),
      /* @__PURE__ */ jsxs(Card, { className: "admin-page__card blogs-show__card", children: [
        /* @__PURE__ */ jsx("h2", { children: "Overview" }),
        /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: blog.overview } }),
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: blog.description } })
      ] })
    ] })
  ] });
}
ShowBlog.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ShowBlog as default
};
//# sourceMappingURL=Show-DMeUvM7l.js.map
