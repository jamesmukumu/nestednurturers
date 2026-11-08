import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { C as Card } from "./card.esm-DtgtPLN5.js";
import { T as Tag } from "./blogs-DSrTBjHC.js";
import { A as AdminLayout } from "./AdminLayout-P8kTgT3x.js";
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "./button.esm-DFXl1vmj.js";
import "react-dom";
import "./inputtext.esm-COqCfzPS.js";
import "./overlayservice.esm-Cnx_LE1W.js";
import "react-transition-group";
import "./sidebar.esm-BweA3SBs.js";
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
          /* @__PURE__ */ jsxs(Link, { href: `/blogs/${blog.id}/edit`, className: "p-button p-component", children: [
            /* @__PURE__ */ jsx("span", { className: "p-button-icon p-button-icon-left pi pi-pencil", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "p-button-label", children: "Edit blog" })
          ] })
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
//# sourceMappingURL=Show-DVzD9ORe.js.map
