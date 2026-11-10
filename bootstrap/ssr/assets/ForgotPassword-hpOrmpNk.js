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
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Forgot your password?",
      subtitle: "Enter your email address and we’ll send you a password reset link.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Remember your password? ",
        /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Back to login" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
        status && /* @__PURE__ */ jsx("p", { className: "auth-form__status", role: "status", children: status }),
        /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "forgot-email", children: "Email" }),
            /* @__PURE__ */ jsx(
              InputText,
              {
                id: "forgot-email",
                type: "email",
                name: "email",
                value: data.email,
                autoComplete: "email",
                autoFocus: true,
                invalid: Boolean(errors.email),
                "aria-invalid": Boolean(errors.email),
                "aria-describedby": errors.email ? "forgot-email-error" : void 0,
                onChange: (event) => setData("email", event.target.value)
              }
            ),
            errors.email && /* @__PURE__ */ jsx("small", { className: "p-error", id: "forgot-email-error", children: errors.email })
          ] }),
          /* @__PURE__ */ jsx(
            AuthSubmitButton,
            {
              processing,
              label: "Email Password Reset Link",
              processingLabel: "Sending link…"
            }
          )
        ] })
      ]
    }
  );
}
export {
  ForgotPassword as default
};
//# sourceMappingURL=ForgotPassword-hpOrmpNk.js.map
