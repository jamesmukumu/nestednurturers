import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./Button-phcvJh3z.js";
import { Link } from "@inertiajs/react";
import { C as Card } from "./card.esm-Dfu5Ic7s.js";
function AuthSubmitButton({
  processing,
  label = "Register",
  processingLabel = "Creating account…"
}) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "submit",
      fullWidth: true,
      loading: processing,
      loadingLabel: processingLabel,
      rightIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-arrow-right text-xs app-button__arrow", "aria-hidden": "true" }),
      children: /* @__PURE__ */ jsx("span", { children: label })
    }
  );
}
const heroImage = "/images/services/mature-doula-providing-inhome-blood-pressure-monitoring-support-expectant-mothers_209190-192189.jpg";
function GuestLayout({ children, title, subtitle, footer }) {
  return /* @__PURE__ */ jsxs("main", { className: "auth-page", children: [
    /* @__PURE__ */ jsxs("aside", { className: "auth-page__visual", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "auth-page__image",
          src: heroImage,
          alt: "Parent holding baby",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "auth-page__brand",
          "aria-label": "Nested Nurturers home",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "auth-page__logo",
              src: "/images/updates-logo.jpeg",
              alt: "",
              loading: "lazy"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "auth-page__content", "aria-label": "Account access", children: /* @__PURE__ */ jsxs(Card, { className: "auth-page__card", children: [
      /* @__PURE__ */ jsxs("header", { className: "auth-card-content__header", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { children: subtitle })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "auth-card-content", children }),
      footer && /* @__PURE__ */ jsx("div", { className: "auth-card-content__footer", children: footer })
    ] }) })
  ] });
}
export {
  AuthSubmitButton as A,
  GuestLayout as G
};
//# sourceMappingURL=GuestLayout-Db_kUh-S.js.map
