import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
import { formatServices, EnquiryStatusBadge, EnquiryStatusButton, formatDate } from "./components-r35cbbUK.js";
import { u as updateEnquiryStatus } from "./enquiries-CfiI4ifY.js";
import "react-redux";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
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
function Detail({ label, children }) {
  if (children === null || children === void 0 || children === "") return null;
  return /* @__PURE__ */ jsxs("div", { className: "enquiry-detail__row", children: [
    /* @__PURE__ */ jsx("dt", { children: label }),
    /* @__PURE__ */ jsx("dd", { children })
  ] });
}
function EnquiryShow({ enquiry, backUrl }) {
  const [current, setCurrent] = useState(enquiry);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);
  const changeStatus = async (status, canUndo = true) => {
    const previous = current;
    const isAddressed = status === "addressed";
    setBusy(true);
    setError("");
    setCurrent((value) => ({ ...value, isAddressed }));
    try {
      const updated = await updateEnquiryStatus(current.id, status);
      setCurrent((value) => ({ ...value, ...updated }));
      window.clearTimeout(toastTimer.current);
      setToast({
        message: isAddressed ? "Marked as addressed." : "Enquiry reopened.",
        canUndo: canUndo && isAddressed
      });
      toastTimer.current = window.setTimeout(() => setToast(null), 6e3);
    } catch (requestError) {
      setCurrent(previous);
      setError(requestError.message || "We couldn’t update this enquiry. Please try again.");
    } finally {
      setBusy(false);
    }
  };
  const services = formatServices(current.servicesSeeked);
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Enquiry from ${current.name}` }),
    /* @__PURE__ */ jsxs("section", { className: "enquiries-page enquiry-detail", "aria-labelledby": "enquiry-heading", children: [
      /* @__PURE__ */ jsxs(Link, { className: "enquiries-back-link", href: backUrl, children: [
        /* @__PURE__ */ jsx("i", { className: "pi pi-arrow-left", "aria-hidden": "true" }),
        "Back to website enquiries"
      ] }),
      /* @__PURE__ */ jsxs("header", { className: "enquiries-page__header", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { id: "enquiry-heading", children: current.name }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Consultation request ",
            current.consultationID ? `· ${current.consultationID}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "enquiry-detail__actions", children: [
          /* @__PURE__ */ jsx(EnquiryStatusBadge, { isAddressed: current.isAddressed }),
          /* @__PURE__ */ jsx(
            EnquiryStatusButton,
            {
              isAddressed: current.isAddressed,
              disabled: busy,
              onClick: () => changeStatus(current.isAddressed ? "pending" : "addressed")
            }
          )
        ] })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "enquiries-inline-error", role: "alert", children: error }),
      /* @__PURE__ */ jsxs("section", { className: "enquiry-detail__card", "aria-labelledby": "contact-heading", children: [
        /* @__PURE__ */ jsx("h2", { id: "contact-heading", children: "Contact" }),
        /* @__PURE__ */ jsxs("dl", { className: "enquiry-detail__list", children: [
          /* @__PURE__ */ jsx(Detail, { label: "Email", children: /* @__PURE__ */ jsx("a", { href: `mailto:${encodeURIComponent(current.email).replace(/%40/gi, "@")}`, children: current.email }) }),
          /* @__PURE__ */ jsx(Detail, { label: "Phone", children: /* @__PURE__ */ jsx("a", { href: `tel:${current.phonenumber.replace(/[^\d+]/g, "")}`, children: current.phonenumber }) }),
          /* @__PURE__ */ jsx(Detail, { label: "Received", children: formatDate(current.createdAt, true) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "enquiry-detail__card", "aria-labelledby": "request-heading", children: [
        /* @__PURE__ */ jsx("h2", { id: "request-heading", children: "Consultation details" }),
        /* @__PURE__ */ jsxs("dl", { className: "enquiry-detail__list", children: [
          /* @__PURE__ */ jsx(Detail, { label: "Services requested", children: services }),
          /* @__PURE__ */ jsx(Detail, { label: "Location", children: current.location }),
          /* @__PURE__ */ jsxs(Detail, { label: "Requested consultation", children: [
            current.consultationDate,
            current.timezone ? ` (${current.timezone})` : ""
          ] }),
          /* @__PURE__ */ jsx(Detail, { label: "Expected due date", children: formatDate(current.expectedDueTime) }),
          /* @__PURE__ */ jsx(Detail, { label: "Preferred support start", children: formatDate(current.preferredServicesStart) }),
          /* @__PURE__ */ jsx(Detail, { label: "Duration of support", children: current.durationOfSupport }),
          /* @__PURE__ */ jsx(Detail, { label: "Nights per week", children: current.noNightsPerWeek }),
          /* @__PURE__ */ jsx(Detail, { label: "How they heard about us", children: current.howHeard })
        ] })
      ] }),
      current.isAddressed && /* @__PURE__ */ jsxs("section", { className: "enquiry-detail__card", "aria-labelledby": "addressed-heading", children: [
        /* @__PURE__ */ jsx("h2", { id: "addressed-heading", children: "Addressed" }),
        /* @__PURE__ */ jsxs("dl", { className: "enquiry-detail__list", children: [
          /* @__PURE__ */ jsx(Detail, { label: "Addressed by", children: current.addressedBy || "Admin account" }),
          /* @__PURE__ */ jsx(Detail, { label: "Addressed at", children: formatDate(current.addressedAt, true) })
        ] })
      ] }),
      toast && /* @__PURE__ */ jsxs("div", { className: "enquiries-toast", role: "status", "aria-live": "polite", children: [
        /* @__PURE__ */ jsx("span", { children: toast.message }),
        toast.canUndo && /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
          window.clearTimeout(toastTimer.current);
          setToast(null);
          changeStatus("pending", false);
        }, children: "Undo" })
      ] })
    ] })
  ] });
}
export {
  EnquiryShow as default
};
//# sourceMappingURL=Show-0zyqs_wd.js.map
