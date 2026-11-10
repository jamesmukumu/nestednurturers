import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { C as Card } from "./card.esm-Dfu5Ic7s.js";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
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
import "./Button-phcvJh3z.js";
import "./ThemeToggle-CE-bVUI6.js";
function Dashboard() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("section", { className: "admin-page", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header", children: [
        /* @__PURE__ */ jsx("h1", { children: "Dashboard" }),
        /* @__PURE__ */ jsx("p", { children: "Your admin workspace is ready." })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "admin-page__card", children: /* @__PURE__ */ jsx("p", { children: "Dashboard overview and tools will appear here." }) })
    ] })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-BirCKe3X.js.map
