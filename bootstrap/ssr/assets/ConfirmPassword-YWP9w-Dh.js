import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button } from "./button.esm-DFXl1vmj.js";
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
import "./inputtext.esm-COqCfzPS.js";
import "./card.esm-DtgtPLN5.js";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  const submit = (event) => {
    event.preventDefault();
    post(route("password.confirm"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(
    GuestLayout,
    {
      title: "Confirm your password",
      subtitle: "This is a secure area. Please confirm your password before continuing.",
      footer: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Need to sign in again? ",
        /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Back to login" })
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
        /* @__PURE__ */ jsxs("form", { className: "auth-form", onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { className: "auth-form__field", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "confirm-password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Password,
              {
                inputId: "confirm-password",
                value: data.password,
                autoComplete: "current-password",
                autoFocus: true,
                toggleMask: true,
                feedback: false,
                invalid: Boolean(errors.password),
                "aria-invalid": Boolean(errors.password),
                "aria-describedby": errors.password ? "confirm-password-error" : void 0,
                onChange: (event) => setData("password", event.target.value)
              }
            ),
            errors.password && /* @__PURE__ */ jsx("small", { className: "p-error", id: "confirm-password-error", children: errors.password })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "auth-form__submit",
              type: "submit",
              label: "Confirm",
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
  ConfirmPassword as default
};
//# sourceMappingURL=ConfirmPassword-YWP9w-Dh.js.map
