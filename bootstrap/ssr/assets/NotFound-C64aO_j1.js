import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { B as Button } from "./button.esm-DFXl1vmj.js";
import { C as Card } from "./card.esm-DtgtPLN5.js";
import { A as AdminLayout } from "./AdminLayout-P8kTgT3x.js";
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "react-dom";
import "./inputtext.esm-COqCfzPS.js";
import "./overlayservice.esm-Cnx_LE1W.js";
import "react-transition-group";
import "./sidebar.esm-BweA3SBs.js";
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Page not found" }),
    /* @__PURE__ */ jsxs("section", { className: "admin-page", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header", children: [
        /* @__PURE__ */ jsx("h1", { children: "Page not found" }),
        /* @__PURE__ */ jsx("p", { children: "This dashboard page does not exist." })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "admin-page__card", children: /* @__PURE__ */ jsx(Link, { href: "/dashboard", children: /* @__PURE__ */ jsx(Button, { label: "Back to dashboard", icon: "pi pi-arrow-left" }) }) })
    ] })
  ] });
}
NotFound.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  NotFound as default
};
//# sourceMappingURL=NotFound-C64aO_j1.js.map
