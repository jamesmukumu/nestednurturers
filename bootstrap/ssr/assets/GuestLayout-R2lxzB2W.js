import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { C as Card } from "./card.esm-DtgtPLN5.js";
const heroImage = "/images/services/mom-and-baby-transparent-smaller-white-outline.png";
function GuestLayout({ children, title, subtitle, footer }) {
  return /* @__PURE__ */ jsxs("main", { className: "auth-page", children: [
    /* @__PURE__ */ jsxs("aside", { className: "auth-page__visual", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "auth-page__image",
          src: heroImage,
          alt: "Parent holding baby",
          loading: "eager",
          fetchPriority: "high"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "auth-page__brand",
          "aria-label": "Nested Nurturers home",
          children: "Nested Nurturers"
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
  GuestLayout as G
};
//# sourceMappingURL=GuestLayout-R2lxzB2W.js.map
