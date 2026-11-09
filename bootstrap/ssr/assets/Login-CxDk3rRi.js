import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button.esm-DFXl1vmj.js";
import { C as Checkbox } from "./checkbox.esm-yIli7C_m.js";
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
import "./index.esm-DFr_3dIQ.js";
import "./overlayservice.esm-Cnx_LE1W.js";
import "react-transition-group";
import "./card.esm-DtgtPLN5.js";
function Login({ status }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Welcome back",
      subtitle: "Log in to continue to your workspace.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Don’t have an account? ",
        /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Register" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Log in" }),
        /* @__PURE__ */ jsxs("div", { className: "auth-card-content", children: [
          status && /* @__PURE__ */ jsx("p", { className: "auth-form__status", role: "status", children: status }),
          /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, noValidate: true, children: [
            /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "login-email", children: "Email" }),
              /* @__PURE__ */ jsx(
                InputText,
                {
                  id: "login-email",
                  type: "email",
                  value: data.email,
                  autoComplete: "email",
                  autoFocus: true,
                  invalid: Boolean(errors.email),
                  "aria-invalid": Boolean(errors.email),
                  "aria-describedby": errors.email ? "login-email-error" : void 0,
                  onChange: (event) => setData("email", event.target.value)
                }
              ),
              errors.email && /* @__PURE__ */ jsx("small", { className: "p-error", id: "login-email-error", children: errors.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "login-password", children: "Password" }),
              /* @__PURE__ */ jsx(
                Password,
                {
                  inputId: "login-password",
                  value: data.password,
                  autoComplete: "current-password",
                  toggleMask: true,
                  feedback: false,
                  invalid: Boolean(errors.password),
                  "aria-invalid": Boolean(errors.password),
                  "aria-describedby": errors.password ? "login-password-error" : void 0,
                  onChange: (event) => setData("password", event.target.value)
                }
              ),
              errors.password && /* @__PURE__ */ jsx("small", { className: "p-error", id: "login-password-error", children: errors.password })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "auth-form__remember", children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  inputId: "login-remember",
                  checked: data.remember,
                  onChange: (event) => setData("remember", event.checked)
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "login-remember", children: "Remember me" })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                className: "auth-form__submit",
                type: "submit",
                label: "Log in",
                loading: processing,
                disabled: processing
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  Login as default
};
//# sourceMappingURL=Login-CxDk3rRi.js.map
