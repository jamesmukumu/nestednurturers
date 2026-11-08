import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { C as Card } from "./card.esm-DtgtPLN5.js";
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
function Settings() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Settings" }),
    /* @__PURE__ */ jsxs("section", { className: "admin-page", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header", children: [
        /* @__PURE__ */ jsx("h1", { children: "Settings" }),
        /* @__PURE__ */ jsx("p", { children: "Workspace settings will be added here." })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "admin-page__card", children: /* @__PURE__ */ jsx("p", { children: "This page is ready for future settings features." }) })
    ] })
  ] });
}
Settings.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  Settings as default
};
//# sourceMappingURL=Settings-RNFAS-U1.js.map
