import { jsx } from "react/jsx-runtime";
import { B as Button } from "./Button-phcvJh3z.js";
function PrimaryButton({
  className = "",
  children,
  type = "submit",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      ...props,
      type,
      variant: "primary",
      className,
      children
    }
  );
}
export {
  PrimaryButton as P
};
//# sourceMappingURL=PrimaryButton-DJi07px5.js.map
