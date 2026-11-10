import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { B as Button } from "./Button-phcvJh3z.js";
import { f as selectThemeMode, g as setMode } from "../ssr.js";
const modes = [
  { value: "light", label: "Light", icon: "pi pi-sun" },
  { value: "dark", label: "Dark", icon: "pi pi-moon" },
  { value: "system", label: "System", icon: "pi pi-desktop" }
];
function ThemeToggle({ className = "" }) {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);
  return /* @__PURE__ */ jsx("div", { className: `theme-toggle ${className}`.trim(), role: "group", "aria-label": "Color theme", children: modes.map((option) => /* @__PURE__ */ jsxs(
    Button,
    {
      type: "button",
      variant: mode === option.value ? "secondary" : "ghost",
      size: "sm",
      className: "theme-toggle__option",
      "aria-label": `${option.label} theme`,
      "aria-pressed": mode === option.value,
      title: `${option.label} theme`,
      onClick: () => dispatch(setMode(option.value)),
      children: [
        /* @__PURE__ */ jsx("i", { className: option.icon, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { children: option.label })
      ]
    },
    option.value
  )) });
}
export {
  ThemeToggle as T
};
//# sourceMappingURL=ThemeToggle-CE-bVUI6.js.map
