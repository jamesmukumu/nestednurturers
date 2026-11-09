import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button.esm-DFXl1vmj.js";
import { G as GuestLayout } from "./GuestLayout-R2lxzB2W.js";
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "react-dom";
import "./card.esm-DtgtPLN5.js";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (event) => {
    event.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Verify your email",
      subtitle: "Check your inbox for the verification link. If you did not receive it, request another below.",
      footer: /* @__PURE__ */ jsx(Link, { href: route("logout"), method: "post", as: "button", className: "auth-page__logout", children: "Log out" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("p", { className: "auth-form__status", role: "status", children: "A new verification link has been sent to the email address you provided during registration." }),
        /* @__PURE__ */ jsx("form", { className: "auth-form", onSubmit: submit, children: /* @__PURE__ */ jsx(
          Button,
          {
            className: "auth-form__submit",
            type: "submit",
            label: "Resend Verification Email",
            loading: processing,
            disabled: processing
          }
        ) })
      ]
    }
  );
}
export {
  VerifyEmail as default
};
//# sourceMappingURL=VerifyEmail-DJAha68Q.js.map
