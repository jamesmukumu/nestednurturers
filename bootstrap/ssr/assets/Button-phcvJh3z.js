import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { forwardRef, Children, cloneElement } from "react";
const Button = forwardRef(function Button2({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  loadingLabel = "Loading…",
  disabled = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  type = "button",
  href,
  asChild = false,
  className = "",
  children,
  onClick,
  ...props
}, ref) {
  const isDisabled = disabled || loading;
  const classes = [
    "app-button",
    `app-button--${variant}`,
    `app-button--${size}`,
    fullWidth && "app-button--full-width",
    iconOnly && "app-button--icon-only",
    className
  ].filter(Boolean).join(" ");
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("span", { className: "app-button__content", children: [
      leftIcon && /* @__PURE__ */ jsx("span", { className: "app-button__icon", "aria-hidden": "true", children: leftIcon }),
      children,
      rightIcon && /* @__PURE__ */ jsx("span", { className: "app-button__icon", "aria-hidden": "true", children: rightIcon })
    ] }),
    loading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "app-button__spinner", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", role: "status", children: loadingLabel })
    ] })
  ] });
  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };
  if (asChild) {
    const child = Children.only(children);
    const childClick = child.props.onClick;
    return cloneElement(child, {
      ...props,
      ref,
      className: `${classes} ${child.props.className || ""}`.trim(),
      "aria-disabled": isDisabled || void 0,
      "aria-busy": loading || void 0,
      onClick: (event) => {
        if (isDisabled) {
          handleClick(event);
          return;
        }
        childClick?.(event);
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      },
      children: content
    });
  }
  if (href) {
    return /* @__PURE__ */ jsx(
      Link,
      {
        ...props,
        href,
        ref,
        type: props.as === "button" ? type : void 0,
        className: classes,
        "aria-disabled": isDisabled || void 0,
        "aria-busy": loading || void 0,
        tabIndex: isDisabled ? -1 : props.tabIndex,
        onClick: handleClick,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      ref,
      type,
      disabled: isDisabled,
      "aria-busy": loading || void 0,
      className: classes,
      onClick: handleClick,
      children: content
    }
  );
});
export {
  Button as B
};
//# sourceMappingURL=Button-phcvJh3z.js.map
