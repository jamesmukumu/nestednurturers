import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-b-MF9INV.js";
import { Head } from "@inertiajs/react";
import "@headlessui/react";
import "react";
import "./Button-phcvJh3z.js";
import "./ThemeToggle-CE-bVUI6.js";
import "react-redux";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "@reduxjs/toolkit";
function Dashboard() {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-Cta8bUR8.js.map
