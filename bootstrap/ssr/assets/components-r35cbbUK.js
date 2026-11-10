import { jsxs, jsx } from "react/jsx-runtime";
function formatDate(value, withTime = false) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(void 0, withTime ? { dateStyle: "medium", timeStyle: "short" } : { dateStyle: "medium" }).format(date);
}
function formatServices(value) {
  if (!value) return "";
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.filter((item) => typeof item === "string" && item.trim()).join(", ");
    }
  } catch {
    return value;
  }
  return value;
}
function formatPreview(enquiry) {
  return [
    enquiry.location && `Location: ${enquiry.location}`,
    enquiry.expectedDueTime && `Due: ${formatDate(enquiry.expectedDueTime)}`,
    enquiry.durationOfSupport && `Support: ${enquiry.durationOfSupport}`,
    enquiry.noNightsPerWeek && `Nights per week: ${enquiry.noNightsPerWeek}`
  ].filter(Boolean).join(" · ");
}
function EnquiryStatusBadge({ isAddressed }) {
  return /* @__PURE__ */ jsxs("span", { className: `enquiries-status${isAddressed ? " is-addressed" : " is-pending"}`, children: [
    /* @__PURE__ */ jsx("i", { className: `pi ${isAddressed ? "pi-check-circle" : "pi-clock"}`, "aria-hidden": "true" }),
    isAddressed ? "Addressed" : "Pending"
  ] });
}
function EnquiryStatusButton({ isAddressed, disabled, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "enquiries-button enquiries-button--secondary",
      disabled,
      onClick,
      children: disabled ? "Saving…" : isAddressed ? "Reopen" : "Mark as addressed"
    }
  );
}
export {
  EnquiryStatusBadge,
  EnquiryStatusButton,
  formatDate,
  formatPreview,
  formatServices
};
//# sourceMappingURL=components-r35cbbUK.js.map
