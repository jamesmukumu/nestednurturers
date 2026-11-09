import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button.esm-DFXl1vmj.js";
import { I as InputText } from "./inputtext.esm-COqCfzPS.js";
import { P as Password } from "./password.esm-zARRcMf_.js";
import { G as GuestLayout } from "./GuestLayout-R2lxzB2W.js";
import "react";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "react-dom";
import "./overlayservice.esm-Cnx_LE1W.js";
import "react-transition-group";
import "./card.esm-DtgtPLN5.js";
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("password.store"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Reset your password",
      subtitle: "Choose a new password for your account.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Remember your password? ",
        /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Back to login" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
        /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "token", value: data.token }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "reset-email", children: "Email" }),
            /* @__PURE__ */ jsx(
              InputText,
              {
                id: "reset-email",
                type: "email",
                name: "email",
                value: data.email,
                autoComplete: "email",
                invalid: Boolean(errors.email),
                "aria-invalid": Boolean(errors.email),
                "aria-describedby": errors.email ? "reset-email-error" : void 0,
                onChange: (event) => setData("email", event.target.value)
              }
            ),
            errors.email && /* @__PURE__ */ jsx("small", { className: "p-error", id: "reset-email-error", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "reset-password", children: "New password" }),
            /* @__PURE__ */ jsx(
              Password,
              {
                inputId: "reset-password",
                value: data.password,
                autoComplete: "new-password",
                autoFocus: true,
                toggleMask: true,
                feedback: false,
                invalid: Boolean(errors.password),
                "aria-invalid": Boolean(errors.password),
                "aria-describedby": errors.password ? "reset-password-error" : void 0,
                onChange: (event) => setData("password", event.target.value)
              }
            ),
            errors.password && /* @__PURE__ */ jsx("small", { className: "p-error", id: "reset-password-error", children: errors.password })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "reset-password-confirmation", children: "Confirm password" }),
            /* @__PURE__ */ jsx(
              Password,
              {
                inputId: "reset-password-confirmation",
                value: data.password_confirmation,
                autoComplete: "new-password",
                toggleMask: true,
                feedback: false,
                invalid: Boolean(errors.password_confirmation),
                "aria-invalid": Boolean(errors.password_confirmation),
                "aria-describedby": errors.password_confirmation ? "reset-password-confirmation-error" : void 0,
                onChange: (event) => setData("password_confirmation", event.target.value)
              }
            ),
            errors.password_confirmation && /* @__PURE__ */ jsx("small", { className: "p-error", id: "reset-password-confirmation-error", children: errors.password_confirmation })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "auth-form__submit",
              type: "submit",
              label: "Reset Password",
              loading: processing,
              disabled: processing
            }
          )
        ] })
      ]
    }
  );
}
export {
  ResetPassword as default
};
//# sourceMappingURL=ResetPassword-LwGIAQwL.js.map
