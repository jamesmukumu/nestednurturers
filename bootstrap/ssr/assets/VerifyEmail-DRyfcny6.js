import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { I as InputText } from "./inputtext.esm-DDz9PXvh.js";
import { G as GuestLayout, A as AuthSubmitButton } from "./GuestLayout-Db_kUh-S.js";
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "./portal.esm-D9mKEukT.js";
import "react-dom";
import "./Button-phcvJh3z.js";
import "./card.esm-Dfu5Ic7s.js";
function VerifyEmail({ status, error, email: initialEmail, expirationMinutes = 5 }) {
  const { data, setData, post, processing, errors } = useForm({
    email: initialEmail || ""
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("admin.verification.send"));
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Verify your email",
      subtitle: "Use the link we emailed you to activate your admin account.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Ready to log in? ",
        /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Log in" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Verify your email" }),
        /* @__PURE__ */ jsxs("div", { className: "auth-card-content", children: [
          status && /* @__PURE__ */ jsx("p", { className: "auth-form__status", role: "status", children: status }),
          error && /* @__PURE__ */ jsx("p", { className: "auth-form__error", role: "alert", children: error }),
          /* @__PURE__ */ jsxs("p", { className: "auth-card-content__header", children: [
            "The verification link expires after ",
            expirationMinutes,
            " minute",
            expirationMinutes === 1 ? "" : "s",
            ". If it has expired, request a new one below."
          ] }),
          /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, children: [
            /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "verification-email", children: "Email" }),
              /* @__PURE__ */ jsx(
                InputText,
                {
                  id: "verification-email",
                  className: "auth-form__input",
                  type: "email",
                  value: data.email,
                  autoComplete: "email",
                  required: true,
                  readOnly: Boolean(initialEmail),
                  invalid: Boolean(errors.email),
                  "aria-invalid": Boolean(errors.email),
                  "aria-describedby": errors.email ? "verification-email-error" : void 0,
                  onChange: (event) => setData("email", event.target.value)
                }
              ),
              /* @__PURE__ */ jsx("small", { className: "auth-form__error", id: "verification-email-error", children: errors.email || " " })
            ] }),
            /* @__PURE__ */ jsx(
              AuthSubmitButton,
              {
                processing,
                label: "Resend verification email",
                processingLabel: "Sending..."
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  VerifyEmail as default
};
//# sourceMappingURL=VerifyEmail-DRyfcny6.js.map
