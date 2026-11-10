import { jsx } from "react/jsx-runtime";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: `app-checkbox ${className}`.trim()
    }
  );
}
export {
  Checkbox as C
};
//# sourceMappingURL=Checkbox-JURGK4El.js.map
