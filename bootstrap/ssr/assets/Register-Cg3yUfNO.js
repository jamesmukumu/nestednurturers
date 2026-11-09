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
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Create your admin account",
      subtitle: "Register to manage your blog content.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Already have an account? ",
        /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Login" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Register" }),
        /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, noValidate: true, children: [
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "register-name", children: "Name" }),
            /* @__PURE__ */ jsx(
              InputText,
              {
                id: "register-name",
                value: data.name,
                autoComplete: "name",
                autoFocus: true,
                invalid: Boolean(errors.name),
                "aria-invalid": Boolean(errors.name),
                "aria-describedby": errors.name ? "register-name-error" : void 0,
                onChange: (event) => setData("name", event.target.value)
              }
            ),
            errors.name && /* @__PURE__ */ jsx("small", { className: "p-error", id: "register-name-error", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "register-email", children: "Email" }),
            /* @__PURE__ */ jsx(
              InputText,
              {
                id: "register-email",
                type: "email",
                value: data.email,
                autoComplete: "email",
                invalid: Boolean(errors.email),
                "aria-invalid": Boolean(errors.email),
                "aria-describedby": errors.email ? "register-email-error" : void 0,
                onChange: (event) => setData("email", event.target.value)
              }
            ),
            errors.email && /* @__PURE__ */ jsx("small", { className: "p-error", id: "register-email-error", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "register-phone", children: "Phone number" }),
            /* @__PURE__ */ jsx(
              InputText,
              {
                id: "register-phone",
                value: data.phonenumber,
                autoComplete: "tel",
                invalid: Boolean(errors.phonenumber),
                "aria-invalid": Boolean(errors.phonenumber),
                "aria-describedby": errors.phonenumber ? "register-phone-error" : void 0,
                onChange: (event) => setData("phonenumber", event.target.value)
              }
            ),
            errors.phonenumber && /* @__PURE__ */ jsx("small", { className: "p-error", id: "register-phone-error", children: errors.phonenumber })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "register-password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Password,
              {
                inputId: "register-password",
                value: data.password,
                autoComplete: "new-password",
                toggleMask: true,
                feedback: true,
                invalid: Boolean(errors.password),
                "aria-invalid": Boolean(errors.password),
                "aria-describedby": errors.password ? "register-password-error" : void 0,
                onChange: (event) => setData("password", event.target.value)
              }
            ),
            errors.password && /* @__PURE__ */ jsx("small", { className: "p-error", id: "register-password-error", children: errors.password })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "register-password-confirmation", children: "Confirm password" }),
            /* @__PURE__ */ jsx(
              Password,
              {
                inputId: "register-password-confirmation",
                value: data.password_confirmation,
                autoComplete: "new-password",
                toggleMask: true,
                feedback: false,
                invalid: Boolean(errors.password_confirmation),
                "aria-invalid": Boolean(errors.password_confirmation),
                "aria-describedby": errors.password_confirmation ? "register-password-confirmation-error" : void 0,
                onChange: (event) => setData("password_confirmation", event.target.value)
              }
            ),
            errors.password_confirmation && /* @__PURE__ */ jsx("small", { className: "p-error", id: "register-password-confirmation-error", children: errors.password_confirmation })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "auth-form__submit",
              type: "submit",
              label: "Register",
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
  Register as default
};
//# sourceMappingURL=Register-Cg3yUfNO.js.map
