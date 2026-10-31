import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { renderToString } from "react-dom/server";
import React__default, { useState } from "react";
if (typeof window !== "undefined") {
  window.axios = axios;
  window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
var FilterMatchMode = Object.freeze({
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  NOT_IN: "notIn",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter",
  CUSTOM: "custom"
});
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var PrimeReact$1 = /* @__PURE__ */ _createClass(function PrimeReact() {
  _classCallCheck(this, PrimeReact);
});
_defineProperty(PrimeReact$1, "ripple", false);
_defineProperty(PrimeReact$1, "inputStyle", "outlined");
_defineProperty(PrimeReact$1, "locale", "en");
_defineProperty(PrimeReact$1, "appendTo", null);
_defineProperty(PrimeReact$1, "cssTransition", true);
_defineProperty(PrimeReact$1, "autoZIndex", true);
_defineProperty(PrimeReact$1, "hideOverlaysOnDocumentScrolling", false);
_defineProperty(PrimeReact$1, "nonce", null);
_defineProperty(PrimeReact$1, "nullSortOrder", 1);
_defineProperty(PrimeReact$1, "zIndex", {
  modal: 1100,
  overlay: 1e3,
  menu: 1e3,
  tooltip: 1100,
  toast: 1200
});
_defineProperty(PrimeReact$1, "pt", void 0);
_defineProperty(PrimeReact$1, "filterMatchModeOptions", {
  text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
  numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
  date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
});
_defineProperty(PrimeReact$1, "changeTheme", function(currentTheme, newTheme, linkElementId, callback) {
  var _linkElement$parentNo;
  var linkElement = document.getElementById(linkElementId);
  if (!linkElement) {
    throw Error("Element with id ".concat(linkElementId, " not found."));
  }
  var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
  var newLinkElement = document.createElement("link");
  newLinkElement.setAttribute("rel", "stylesheet");
  newLinkElement.setAttribute("id", linkElementId);
  newLinkElement.setAttribute("href", newThemeUrl);
  newLinkElement.addEventListener("load", function() {
    if (callback) {
      callback();
    }
  });
  (_linkElement$parentNo = linkElement.parentNode) === null || _linkElement$parentNo === void 0 || _linkElement$parentNo.replaceChild(newLinkElement, linkElement);
});
var locales = {
  en: {
    accept: "Yes",
    addRule: "Add Rule",
    am: "AM",
    apply: "Apply",
    cancel: "Cancel",
    choose: "Choose",
    chooseDate: "Choose Date",
    chooseMonth: "Choose Month",
    chooseYear: "Choose Year",
    clear: "Clear",
    completed: "Completed",
    contains: "Contains",
    custom: "Custom",
    dateAfter: "Date is after",
    dateBefore: "Date is before",
    dateFormat: "mm/dd/yy",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    emptyFilterMessage: "No results found",
    emptyMessage: "No available options",
    emptySearchMessage: "No results found",
    emptySelectionMessage: "No selected item",
    endsWith: "Ends with",
    equals: "Equals",
    fileChosenMessage: "{0} files",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 0,
    gt: "Greater than",
    gte: "Greater than or equal to",
    lt: "Less than",
    lte: "Less than or equal to",
    matchAll: "Match All",
    matchAny: "Match Any",
    medium: "Medium",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    nextDecade: "Next Decade",
    nextHour: "Next Hour",
    nextMinute: "Next Minute",
    nextMonth: "Next Month",
    nextSecond: "Next Second",
    nextYear: "Next Year",
    noFileChosenMessage: "No file chosen",
    noFilter: "No Filter",
    notContains: "Not contains",
    notEquals: "Not equals",
    now: "Now",
    passwordPrompt: "Enter a password",
    pending: "Pending",
    pm: "PM",
    prevDecade: "Previous Decade",
    prevHour: "Previous Hour",
    prevMinute: "Previous Minute",
    prevMonth: "Previous Month",
    prevSecond: "Previous Second",
    prevYear: "Previous Year",
    reject: "No",
    removeRule: "Remove Rule",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    showMonthAfterYear: false,
    startsWith: "Starts with",
    strong: "Strong",
    today: "Today",
    upload: "Upload",
    weak: "Weak",
    weekHeader: "Wk",
    aria: {
      cancelEdit: "Cancel Edit",
      close: "Close",
      collapseLabel: "Collapse",
      collapseRow: "Row Collapsed",
      editRow: "Edit Row",
      expandLabel: "Expand",
      expandRow: "Row Expanded",
      falseLabel: "False",
      filterConstraint: "Filter Constraint",
      filterOperator: "Filter Operator",
      firstPageLabel: "First Page",
      gridView: "Grid View",
      hideFilterMenu: "Hide Filter Menu",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      lastPageLabel: "Last Page",
      listLabel: "Option List",
      listView: "List View",
      moveAllToSource: "Move All to Source",
      moveAllToTarget: "Move All to Target",
      moveBottom: "Move Bottom",
      moveDown: "Move Down",
      moveToSource: "Move to Source",
      moveToTarget: "Move to Target",
      moveTop: "Move Top",
      moveUp: "Move Up",
      navigation: "Navigation",
      next: "Next",
      nextPageLabel: "Next Page",
      nullLabel: "Not Selected",
      otpLabel: "Please enter one time password character {0}",
      pageLabel: "Page {page}",
      passwordHide: "Hide Password",
      passwordShow: "Show Password",
      previous: "Previous",
      prevPageLabel: "Previous Page",
      removeLabel: "Remove",
      rotateLeft: "Rotate Left",
      rotateRight: "Rotate Right",
      rowsPerPageLabel: "Rows per page",
      saveEdit: "Save Edit",
      scrollTop: "Scroll Top",
      selectAll: "All items selected",
      selectLabel: "Select",
      selectRow: "Row Selected",
      showFilterMenu: "Show Filter Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 star",
      stars: "{star} stars",
      trueLabel: "True",
      unselectAll: "All items unselected",
      unselectLabel: "Unselect",
      unselectRow: "Row Unselected",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out"
    }
  }
};
function localeOption(key, locale) {
  if (key.includes("__proto__") || key.includes("prototype")) {
    throw new Error("Unsafe key detected");
  }
  var _locale = PrimeReact$1.locale;
  try {
    return localeOptions(_locale)[key];
  } catch (error) {
    throw new Error("The ".concat(key, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function ariaLabel(ariaKey, options) {
  if (ariaKey.includes("__proto__") || ariaKey.includes("prototype")) {
    throw new Error("Unsafe ariaKey detected");
  }
  var _locale = PrimeReact$1.locale;
  try {
    var _ariaLabel = localeOptions(_locale).aria[ariaKey];
    if (_ariaLabel) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          _ariaLabel = _ariaLabel.replace("{".concat(key, "}"), options[key]);
        }
      }
    }
    return _ariaLabel;
  } catch (error) {
    throw new Error("The ".concat(ariaKey, " option is not found in the current locale('").concat(_locale, "')."));
  }
}
function localeOptions(locale) {
  var _locale = locale || PrimeReact$1.locale;
  if (_locale.includes("__proto__") || _locale.includes("prototype")) {
    throw new Error("Unsafe locale detected");
  }
  return locales[_locale];
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
var PrimeReactContext = /* @__PURE__ */ React__default.createContext();
var PrimeReactProvider = function PrimeReactProvider2(props) {
  var _props$value, _propsValue$ripple, _propsValue$inputStyl, _propsValue$locale, _propsValue$appendTo, _propsValue$styleCont, _propsValue$cssTransi, _propsValue$autoZInde, _propsValue$hideOverl, _propsValue$nonce, _propsValue$nullSortO, _propsValue$zIndex, _propsValue$ptOptions, _propsValue$pt, _propsValue$unstyled, _propsValue$filterMat;
  var propsValue = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : {};
  var _useState = useState((_propsValue$ripple = propsValue.ripple) !== null && _propsValue$ripple !== void 0 ? _propsValue$ripple : false), _useState2 = _slicedToArray(_useState, 2), ripple = _useState2[0], setRipple = _useState2[1];
  var _useState3 = useState((_propsValue$inputStyl = propsValue.inputStyle) !== null && _propsValue$inputStyl !== void 0 ? _propsValue$inputStyl : "outlined"), _useState4 = _slicedToArray(_useState3, 2), inputStyle = _useState4[0], setInputStyle = _useState4[1];
  var _useState5 = useState((_propsValue$locale = propsValue.locale) !== null && _propsValue$locale !== void 0 ? _propsValue$locale : "en"), _useState6 = _slicedToArray(_useState5, 2), locale = _useState6[0], setLocale = _useState6[1];
  var _useState7 = useState((_propsValue$appendTo = propsValue.appendTo) !== null && _propsValue$appendTo !== void 0 ? _propsValue$appendTo : null), _useState8 = _slicedToArray(_useState7, 2), appendTo = _useState8[0], setAppendTo = _useState8[1];
  var _useState9 = useState((_propsValue$styleCont = propsValue.styleContainer) !== null && _propsValue$styleCont !== void 0 ? _propsValue$styleCont : null), _useState10 = _slicedToArray(_useState9, 2), styleContainer = _useState10[0], setStyleContainer = _useState10[1];
  var _useState11 = useState((_propsValue$cssTransi = propsValue.cssTransition) !== null && _propsValue$cssTransi !== void 0 ? _propsValue$cssTransi : true), _useState12 = _slicedToArray(_useState11, 2), cssTransition = _useState12[0], setCssTransition = _useState12[1];
  var _useState13 = useState((_propsValue$autoZInde = propsValue.autoZIndex) !== null && _propsValue$autoZInde !== void 0 ? _propsValue$autoZInde : true), _useState14 = _slicedToArray(_useState13, 2), autoZIndex = _useState14[0], setAutoZIndex = _useState14[1];
  var _useState15 = useState((_propsValue$hideOverl = propsValue.hideOverlaysOnDocumentScrolling) !== null && _propsValue$hideOverl !== void 0 ? _propsValue$hideOverl : false), _useState16 = _slicedToArray(_useState15, 2), hideOverlaysOnDocumentScrolling = _useState16[0], setHideOverlaysOnDocumentScrolling = _useState16[1];
  var _useState17 = useState((_propsValue$nonce = propsValue.nonce) !== null && _propsValue$nonce !== void 0 ? _propsValue$nonce : null), _useState18 = _slicedToArray(_useState17, 2), nonce = _useState18[0], setNonce = _useState18[1];
  var _useState19 = useState((_propsValue$nullSortO = propsValue.nullSortOrder) !== null && _propsValue$nullSortO !== void 0 ? _propsValue$nullSortO : 1), _useState20 = _slicedToArray(_useState19, 2), nullSortOrder = _useState20[0], setNullSortOrder = _useState20[1];
  var _useState21 = useState((_propsValue$zIndex = propsValue.zIndex) !== null && _propsValue$zIndex !== void 0 ? _propsValue$zIndex : {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100,
    toast: 1200
  }), _useState22 = _slicedToArray(_useState21, 2), zIndex = _useState22[0], setZIndex = _useState22[1];
  var _useState23 = useState((_propsValue$ptOptions = propsValue.ptOptions) !== null && _propsValue$ptOptions !== void 0 ? _propsValue$ptOptions : {
    mergeSections: true,
    mergeProps: true
  }), _useState24 = _slicedToArray(_useState23, 2), ptOptions = _useState24[0], setPtOptions = _useState24[1];
  var _useState25 = useState((_propsValue$pt = propsValue.pt) !== null && _propsValue$pt !== void 0 ? _propsValue$pt : void 0), _useState26 = _slicedToArray(_useState25, 2), pt = _useState26[0], setPt = _useState26[1];
  var _useState27 = useState((_propsValue$unstyled = propsValue.unstyled) !== null && _propsValue$unstyled !== void 0 ? _propsValue$unstyled : false), _useState28 = _slicedToArray(_useState27, 2), unstyled = _useState28[0], setUnstyled = _useState28[1];
  var _useState29 = useState((_propsValue$filterMat = propsValue.filterMatchModeOptions) !== null && _propsValue$filterMat !== void 0 ? _propsValue$filterMat : {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  }), _useState30 = _slicedToArray(_useState29, 2), filterMatchModeOptions = _useState30[0], setFilterMatchModeOptions = _useState30[1];
  var changeTheme = function changeTheme2(currentTheme, newTheme, linkElementId, callback) {
    var _linkElement$parentNo;
    var linkElement = document.getElementById(linkElementId);
    if (!linkElement) {
      throw Error("Element with id ".concat(linkElementId, " not found."));
    }
    var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
    var newLinkElement = document.createElement("link");
    newLinkElement.setAttribute("rel", "stylesheet");
    newLinkElement.setAttribute("id", linkElementId);
    newLinkElement.setAttribute("href", newThemeUrl);
    newLinkElement.addEventListener("load", function() {
      if (callback) {
        callback();
      }
    });
    (_linkElement$parentNo = linkElement.parentNode) === null || _linkElement$parentNo === void 0 || _linkElement$parentNo.replaceChild(newLinkElement, linkElement);
  };
  React__default.useEffect(function() {
    PrimeReact$1.ripple = ripple;
  }, [ripple]);
  React__default.useEffect(function() {
    PrimeReact$1.inputStyle = inputStyle;
  }, [inputStyle]);
  React__default.useEffect(function() {
    PrimeReact$1.locale = locale;
  }, [locale]);
  var value = {
    changeTheme,
    ripple,
    setRipple,
    inputStyle,
    setInputStyle,
    locale,
    setLocale,
    appendTo,
    setAppendTo,
    styleContainer,
    setStyleContainer,
    cssTransition,
    setCssTransition,
    autoZIndex,
    setAutoZIndex,
    hideOverlaysOnDocumentScrolling,
    setHideOverlaysOnDocumentScrolling,
    nonce,
    setNonce,
    nullSortOrder,
    setNullSortOrder,
    zIndex,
    setZIndex,
    ptOptions,
    setPtOptions,
    pt,
    setPt,
    filterMatchModeOptions,
    setFilterMatchModeOptions,
    unstyled,
    setUnstyled
  };
  return /* @__PURE__ */ React__default.createElement(PrimeReactContext.Provider, {
    value
  }, props.children);
};
var PrimeReact2 = PrimeReact$1;
const appName = "NestedNurturers";
const renderPage = (page) => createInertiaApp({
  page,
  render: renderToString,
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-DiZGQX0-.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-zJiiJlnj.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-DFfhu8Sk.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-DCJsqiN-.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-OdfkC5WB.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-BJMV7pbW.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-3DaxC1ow.js"), "./Pages/Contacts.jsx": () => import("./assets/Contacts-9b1w46nr.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-DOCLXSKk.js"), "./Pages/Faq.jsx": () => import("./assets/Faq-Bdaf6JzN.js"), "./Pages/Home.jsx": () => import("./assets/Home-po-Ev9CL.js"), "./Pages/Pricing.jsx": () => import("./assets/Pricing-COPhvFh_.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-BFeM5QDF.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-Hy-SY24R.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-zvD8TgBd.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-DmOzctMU.js"), "./Pages/Services.jsx": () => import("./assets/Services-DBAbSca3.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-SEhQsnTJ.js") })
  ),
  setup({ App, props }) {
    return /* @__PURE__ */ jsx(PrimeReactProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) });
  }
});
{
  createServer(renderPage);
}
export {
  PrimeReactContext as P,
  PrimeReact2 as a,
  ariaLabel as b,
  renderPage as default,
  localeOption as l
};
//# sourceMappingURL=ssr.js.map
