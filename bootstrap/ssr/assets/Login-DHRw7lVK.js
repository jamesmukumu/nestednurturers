import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { I as InputText } from "./inputtext.esm-DDz9PXvh.js";
import { C as Checkbox } from "./Checkbox-JURGK4El.js";
import { G as GuestLayout, A as AuthSubmitButton } from "./GuestLayout-Db_kUh-S.js";
import { A as AuthPasswordInput } from "./AuthPasswordInput-BH5ul5EL.js";
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
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
import "./overlayservice.esm-B2GBYfSa.js";
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
  const needsVerification = errors.email === "Please verify your email address before logging in.";
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
                  className: "auth-form__input",
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
              /* @__PURE__ */ jsx("small", { className: "auth-form__error", id: "login-email-error", children: errors.email || " " }),
              needsVerification && /* @__PURE__ */ jsx(Link, { href: route("admin.verification.notice"), children: "Resend verification email" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "login-password", children: "Password" }),
              /* @__PURE__ */ jsx(
                AuthPasswordInput,
                {
                  inputId: "login-password",
                  value: data.password,
                  autoComplete: "current-password",
                  feedback: false,
                  invalid: Boolean(errors.password),
                  "aria-invalid": Boolean(errors.password),
                  "aria-describedby": errors.password ? "login-password-error" : void 0,
                  onChange: (event) => setData("password", event.target.value)
                }
              ),
              /* @__PURE__ */ jsx("small", { className: "auth-form__error", id: "login-password-error", children: errors.password || " " })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "auth-form__remember", children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  id: "login-remember",
                  checked: data.remember,
                  onChange: (event) => setData("remember", event.target.checked)
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "login-remember", children: "Remember me" })
            ] }),
            /* @__PURE__ */ jsx(AuthSubmitButton, { processing, label: "Log in", processingLabel: "Logging in…" })
          ] })
        ] })
      ]
    }
  );
}
export {
  Login as default
};
//# sourceMappingURL=Login-DHRw7lVK.js.map
