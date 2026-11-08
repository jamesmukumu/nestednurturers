import * as React from "react";
import { TransitionGroup } from "react-transition-group";
import { P as PrimeReactContext, Z as ZIndexUtils, b as PrimeReact, O as ObjectUtils, c as classNames, I as IconUtils, a as ariaLabel, D as DomHandler } from "../ssr.js";
import { I as IconBase, u as useMergeProps, a as useHandleStyle, e as useUpdateEffect, c as useUnmountEffect, P as Portal, C as ComponentBase, b as useTimeout, R as Ripple, g as usePrevious, i as useStyle, m as useResizeListener, f as useEventListener, S as SpinnerIcon } from "./button.esm-DFXl1vmj.js";
import { C as CSSTransition } from "./overlayservice.esm-Cnx_LE1W.js";
import { C as CheckIcon } from "./index.esm-DFr_3dIQ.js";
import { T as TimesIcon } from "./sidebar.esm-BweA3SBs.js";
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
var ExclamationTriangleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$5({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
    fill: "currentColor"
  }));
}));
ExclamationTriangleIcon.displayName = "ExclamationTriangleIcon";
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
var InfoCircleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$4({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  }));
}));
InfoCircleIcon.displayName = "InfoCircleIcon";
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
var TimesCircleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }));
}));
TimesCircleIcon.displayName = "TimesCircleIcon";
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread();
}
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$1(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
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
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _defineProperty$1(e, r, t) {
  return (r = toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var styles$1 = "\n@layer primereact {\n    .p-toast {\n        width: calc(100% - var(--toast-indent, 0px));\n        max-width: 25rem;\n    }\n    \n    .p-toast-message-icon {\n        flex-shrink: 0;\n    }\n    \n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n    }\n    \n    .p-toast-message-text {\n        flex: 1 1 auto;\n    }\n    \n    .p-toast-summary {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-detail {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n    \n    .p-toast-icon-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-toast-icon-close.p-link {\n        cursor: pointer;\n    }\n    \n    /* Animations */\n    .p-toast-message-enter {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n    \n    .p-toast-message-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: transform 0.3s, opacity 0.3s;\n    }\n    \n    .p-toast-message-enter-done {\n        transform: none;\n    }\n    \n    .p-toast-message-exit {\n        opacity: 1;\n        max-height: 1000px;\n    }\n    \n    .p-toast .p-toast-message.p-toast-message-exit-active {\n        opacity: 0;\n        max-height: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, context = _ref.context;
    return classNames("p-toast p-component p-toast-" + props.position, props.className, {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  message: {
    message: function message(_ref2) {
      var severity = _ref2.severity;
      return classNames("p-toast-message", _defineProperty$1({}, "p-toast-message-".concat(severity), severity));
    },
    content: "p-toast-message-content",
    buttonicon: "p-toast-icon-close-icon",
    closeButton: "p-toast-icon-close p-link",
    icon: "p-toast-message-icon",
    text: "p-toast-message-text",
    summary: "p-toast-summary",
    detail: "p-toast-detail"
  },
  transition: "p-toast-message"
};
var inlineStyles = {
  root: function root2(_ref3) {
    var props = _ref3.props;
    return {
      position: "fixed",
      top: props.position === "top-right" || props.position === "top-left" || props.position === "top-center" ? "20px" : props.position === "center" ? "50%" : null,
      right: (props.position === "top-right" || props.position === "bottom-right") && "20px",
      bottom: (props.position === "bottom-left" || props.position === "bottom-right" || props.position === "bottom-center") && "20px",
      left: props.position === "top-left" || props.position === "bottom-left" ? "20px" : props.position === "center" || props.position === "top-center" || props.position === "bottom-center" ? "50%" : null
    };
  }
};
var ToastBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Toast",
    id: null,
    className: null,
    content: null,
    style: null,
    baseZIndex: 0,
    position: "top-right",
    transitionOptions: null,
    appendTo: "self",
    onClick: null,
    onRemove: null,
    onShow: null,
    onHide: null,
    onMouseEnter: null,
    onMouseLeave: null,
    children: void 0
  },
  css: {
    classes,
    styles: styles$1,
    inlineStyles
  }
});
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ToastMessage = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var messageInfo = props.messageInfo, parentMetaData = props.metaData, _props$ptCallbacks = props.ptCallbacks, ptm = _props$ptCallbacks.ptm, ptmo = _props$ptCallbacks.ptmo, cx = _props$ptCallbacks.cx, index = props.index;
  var _messageInfo$message = messageInfo.message, severity = _messageInfo$message.severity, content = _messageInfo$message.content, summary = _messageInfo$message.summary, detail = _messageInfo$message.detail, closable = _messageInfo$message.closable, life = _messageInfo$message.life, sticky = _messageInfo$message.sticky, _className = _messageInfo$message.className, style = _messageInfo$message.style, _contentClassName = _messageInfo$message.contentClassName, contentStyle = _messageInfo$message.contentStyle, _icon = _messageInfo$message.icon, _closeIcon = _messageInfo$message.closeIcon, pt = _messageInfo$message.pt;
  var params = {
    index
  };
  var parentParams = _objectSpread$1(_objectSpread$1({}, parentMetaData), params);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray$1(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var _useTimeout = useTimeout(function() {
    onClose();
  }, life || 3e3, !sticky && !focused), _useTimeout2 = _slicedToArray$1(_useTimeout, 1), clearTimer = _useTimeout2[0];
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var onClose = function onClose2() {
    clearTimer();
    props.onClose && props.onClose(messageInfo);
  };
  var onClick = function onClick2(event) {
    if (props.onClick && !(DomHandler.hasClass(event.target, "p-toast-icon-close") || DomHandler.hasClass(event.target, "p-toast-icon-close-icon"))) {
      props.onClick(messageInfo.message);
    }
  };
  var onMouseEnter = function onMouseEnter2(event) {
    props.onMouseEnter && props.onMouseEnter(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      clearTimer();
      setFocused(true);
    }
  };
  var onMouseLeave = function onMouseLeave2(event) {
    props.onMouseLeave && props.onMouseLeave(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!sticky) {
      setFocused(false);
    }
  };
  var createCloseIcon = function createCloseIcon2() {
    var buttonIconProps = mergeProps({
      className: cx("message.buttonicon")
    }, getPTOptions("buttonicon", parentParams), ptmo(pt, "buttonicon", _objectSpread$1(_objectSpread$1({}, params), {}, {
      hostName: props.hostName
    })));
    var icon = _closeIcon || /* @__PURE__ */ React.createElement(TimesIcon, buttonIconProps);
    var closeIcon2 = IconUtils.getJSXIcon(icon, _objectSpread$1({}, buttonIconProps), {
      props
    });
    var closeButtonProps = mergeProps({
      type: "button",
      className: cx("message.closeButton"),
      onClick: onClose,
      "aria-label": props.ariaCloseLabel || ariaLabel("close")
    }, getPTOptions("closeButton", parentParams), ptmo(pt, "closeButton", _objectSpread$1(_objectSpread$1({}, params), {}, {
      hostName: props.hostName
    })));
    if (closable !== false) {
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", closeButtonProps, closeIcon2, /* @__PURE__ */ React.createElement(Ripple, null)));
    }
    return null;
  };
  var createMessage = function createMessage2() {
    if (messageInfo) {
      var contentEl = ObjectUtils.getJSXElement(content, {
        message: messageInfo.message,
        onClick,
        onClose
      });
      var iconProps = mergeProps({
        className: cx("message.icon")
      }, getPTOptions("icon", parentParams), ptmo(pt, "icon", _objectSpread$1(_objectSpread$1({}, params), {}, {
        hostName: props.hostName
      })));
      var icon = _icon;
      if (!_icon) {
        switch (severity) {
          case "info":
            icon = /* @__PURE__ */ React.createElement(InfoCircleIcon, iconProps);
            break;
          case "warn":
            icon = /* @__PURE__ */ React.createElement(ExclamationTriangleIcon, iconProps);
            break;
          case "error":
            icon = /* @__PURE__ */ React.createElement(TimesCircleIcon, iconProps);
            break;
          case "success":
            icon = /* @__PURE__ */ React.createElement(CheckIcon, iconProps);
            break;
        }
      }
      var messageIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, iconProps), {
        props
      });
      var textProps = mergeProps({
        className: cx("message.text")
      }, getPTOptions("text", parentParams), ptmo(pt, "text", _objectSpread$1(_objectSpread$1({}, params), {}, {
        hostName: props.hostName
      })));
      var summaryProps = mergeProps({
        className: cx("message.summary")
      }, getPTOptions("summary", parentParams), ptmo(pt, "summary", _objectSpread$1(_objectSpread$1({}, params), {}, {
        hostName: props.hostName
      })));
      var detailProps = mergeProps({
        className: cx("message.detail")
      }, getPTOptions("detail", parentParams), ptmo(pt, "detail", _objectSpread$1(_objectSpread$1({}, params), {}, {
        hostName: props.hostName
      })));
      return contentEl || /* @__PURE__ */ React.createElement(React.Fragment, null, messageIcon, /* @__PURE__ */ React.createElement("div", textProps, /* @__PURE__ */ React.createElement("span", summaryProps, summary), detail && /* @__PURE__ */ React.createElement("div", detailProps, detail)));
    }
    return null;
  };
  var message2 = createMessage();
  var closeIcon = createCloseIcon();
  var messageProps = mergeProps({
    ref,
    className: classNames(_className, cx("message.message", {
      severity
    })),
    style,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    onClick,
    onMouseEnter,
    onMouseLeave
  }, getPTOptions("message", parentParams), ptmo(pt, "root", _objectSpread$1(_objectSpread$1({}, params), {}, {
    hostName: props.hostName
  })));
  var contentProps = mergeProps({
    className: classNames(_contentClassName, cx("message.content")),
    style: contentStyle
  }, getPTOptions("content", parentParams), ptmo(pt, "content", _objectSpread$1(_objectSpread$1({}, params), {}, {
    hostName: props.hostName
  })));
  return /* @__PURE__ */ React.createElement("div", messageProps, /* @__PURE__ */ React.createElement("div", contentProps, message2, closeIcon));
}));
ToastMessage.displayName = "ToastMessage";
var messageIdx = 0;
var Toast = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ToastBase.getProps(inProps, context);
  var _React$useState = React.useState([]), _React$useState2 = _slicedToArray$1(_React$useState, 2), messagesState = _React$useState2[0], setMessagesState = _React$useState2[1];
  var containerRef = React.useRef(null);
  var metaData = {
    props,
    state: {
      messages: messagesState
    }
  };
  var ptCallbacks = ToastBase.setMetaData(metaData);
  useHandleStyle(ToastBase.css.styles, ptCallbacks.isUnstyled, {
    name: "toast"
  });
  var show = function show2(messageInfo) {
    if (messageInfo) {
      setMessagesState(function(prev) {
        return assignIdentifiers(prev, messageInfo, true);
      });
    }
  };
  var assignIdentifiers = function assignIdentifiers2(currentState, messageInfo, copy) {
    var messages;
    if (Array.isArray(messageInfo)) {
      var multipleMessages = messageInfo.reduce(function(acc, message3) {
        acc.push({
          _pId: messageIdx++,
          message: message3
        });
        return acc;
      }, []);
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), _toConsumableArray(multipleMessages)) : multipleMessages;
      } else {
        messages = multipleMessages;
      }
    } else {
      var message2 = {
        _pId: messageIdx++,
        message: messageInfo
      };
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray(currentState), [message2]) : [message2];
      } else {
        messages = [message2];
      }
    }
    return messages;
  };
  var clear = function clear2() {
    ZIndexUtils.clear(containerRef.current);
    setMessagesState([]);
  };
  var replace = function replace2(messageInfo) {
    setMessagesState(function(previousMessagesState) {
      return assignIdentifiers(previousMessagesState, messageInfo, false);
    });
  };
  var remove = function remove2(messageInfo) {
    var removeMessage = ObjectUtils.isNotEmpty(messageInfo._pId) ? messageInfo._pId : messageInfo.message || messageInfo;
    setMessagesState(function(prev) {
      return prev.filter(function(msg) {
        return msg._pId !== messageInfo._pId && !ObjectUtils.deepEquals(msg.message, removeMessage);
      });
    });
    props.onRemove && props.onRemove(messageInfo.message || removeMessage);
  };
  var onClose = function onClose2(messageInfo) {
    remove(messageInfo);
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
  };
  var onExited = function onExited2() {
    messagesState.length === 1 && ZIndexUtils.clear(containerRef.current);
    props.onHide && props.onHide();
  };
  useUpdateEffect(function() {
    ZIndexUtils.set("toast", containerRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.toast || PrimeReact.zIndex.toast);
  }, [messagesState, props.baseZIndex]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(containerRef.current);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      replace,
      remove,
      clear,
      getElement: function getElement() {
        return containerRef.current;
      }
    };
  });
  var createElement = function createElement2() {
    var rootProps = mergeProps({
      ref: containerRef,
      id: props.id,
      className: ptCallbacks.cx("root", {
        context
      }),
      style: ptCallbacks.sx("root")
    }, ToastBase.getOtherProps(props), ptCallbacks.ptm("root"));
    var transitionProps = mergeProps({
      classNames: ptCallbacks.cx("transition"),
      timeout: {
        enter: 300,
        exit: 300
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEntered,
      onExited
    }, ptCallbacks.ptm("transition"));
    return /* @__PURE__ */ React.createElement("div", rootProps, /* @__PURE__ */ React.createElement(TransitionGroup, null, messagesState && messagesState.map(function(messageInfo, index) {
      var messageRef = /* @__PURE__ */ React.createRef();
      return /* @__PURE__ */ React.createElement(CSSTransition, _extends$2({
        nodeRef: messageRef,
        key: messageInfo._pId
      }, transitionProps), inProps.content ? ObjectUtils.getJSXElement(inProps.content, {
        message: messageInfo.message
      }) : /* @__PURE__ */ React.createElement(ToastMessage, {
        hostName: "Toast",
        ref: messageRef,
        messageInfo,
        index,
        onClick: props.onClick,
        onClose,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        closeIcon: props.closeIcon,
        ptCallbacks,
        metaData
      }));
    })));
  };
  var element = createElement();
  return /* @__PURE__ */ React.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
Toast.displayName = "Toast";
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
var ChevronDownIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$1({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }));
}));
ChevronDownIcon.displayName = "ChevronDownIcon";
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
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
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
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
var styles = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "VirtualScroller",
    __parentMetadata: null,
    id: null,
    style: null,
    className: null,
    tabIndex: 0,
    items: null,
    itemSize: 0,
    scrollHeight: null,
    scrollWidth: null,
    orientation: "vertical",
    step: 0,
    numToleratedItems: null,
    delay: 0,
    resizeDelay: 10,
    appendOnly: false,
    inline: false,
    lazy: false,
    disabled: false,
    loaderDisabled: false,
    loadingIcon: null,
    columns: null,
    loading: void 0,
    autoSize: false,
    showSpacer: true,
    showLoader: false,
    loadingTemplate: null,
    loaderIconTemplate: null,
    itemTemplate: null,
    contentTemplate: null,
    onScroll: null,
    onScrollIndexChange: null,
    onLazyLoad: null,
    children: void 0
  },
  css: {
    styles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var VirtualScroller = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = VirtualScrollerBase.getProps(inProps, context);
  var prevProps = usePrevious(inProps) || {};
  var vertical = props.orientation === "vertical";
  var horizontal = props.orientation === "horizontal";
  var both = props.orientation === "both";
  var _React$useState = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState2 = _slicedToArray(_React$useState, 2), firstState = _React$useState2[0], setFirstState = _React$useState2[1];
  var _React$useState3 = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState4 = _slicedToArray(_React$useState3, 2), lastState = _React$useState4[0], setLastState = _React$useState4[1];
  var _React$useState5 = React.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), pageState = _React$useState6[0], setPageState = _React$useState6[1];
  var _React$useState7 = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState8 = _slicedToArray(_React$useState7, 2), numItemsInViewportState = _React$useState8[0], setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = React.useState(props.numToleratedItems), _React$useState10 = _slicedToArray(_React$useState9, 2), numToleratedItemsState = _React$useState10[0], setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = React.useState(props.loading || false), _React$useState12 = _slicedToArray(_React$useState11, 2), loadingState = _React$useState12[0], setLoadingState = _React$useState12[1];
  var _React$useState13 = React.useState([]), _React$useState14 = _slicedToArray(_React$useState13, 2), loaderArrState = _React$useState14[0], setLoaderArrState = _React$useState14[1];
  var _VirtualScrollerBase$ = VirtualScrollerBase.setMetaData({
    props,
    state: {
      first: firstState,
      last: lastState,
      page: pageState,
      numItemsInViewport: numItemsInViewportState,
      numToleratedItems: numToleratedItemsState,
      loading: loadingState,
      loaderArr: loaderArrState
    }
  }), ptm = _VirtualScrollerBase$.ptm;
  useStyle(VirtualScrollerBase.css.styles, {
    name: "virtualscroller"
  });
  var elementRef = React.useRef(null);
  var _contentRef = React.useRef(null);
  var _spacerRef = React.useRef(null);
  var _stickyRef = React.useRef(null);
  var lastScrollPos = React.useRef(both ? {
    top: 0,
    left: 0
  } : 0);
  var scrollTimeout = React.useRef(null);
  var resizeTimeout = React.useRef(null);
  var contentStyle = React.useRef({});
  var spacerStyle = React.useRef({});
  var defaultWidth = React.useRef(null);
  var defaultHeight = React.useRef(null);
  var defaultContentWidth = React.useRef(null);
  var defaultContentHeight = React.useRef(null);
  var isItemRangeChanged = React.useRef(false);
  var lazyLoadState = React.useRef(null);
  var viewInitialized = React.useRef(false);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useResizeListener2 = _slicedToArray(_useResizeListener, 1), bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useEventListener2 = _slicedToArray(_useEventListener, 1), bindOrientationChangeListener = _useEventListener2[0];
  var getElementRef = function getElementRef2() {
    return elementRef;
  };
  var getPageByFirst = function getPageByFirst2(first) {
    return Math.floor((first + numToleratedItemsState * 4) / (props.step || 1));
  };
  var setContentElement = function setContentElement2(element) {
    _contentRef.current = element || _contentRef.current || DomHandler.findSingle(elementRef.current, ".p-virtualscroller-content");
  };
  var isPageChanged = function isPageChanged2(first) {
    return props.step ? pageState !== getPageByFirst(first) : true;
  };
  var scrollTo = function scrollTo2(options) {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
    elementRef.current && elementRef.current.scrollTo(options);
  };
  var scrollToIndex = function scrollToIndex2(index) {
    var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
    var _calculateNumItems = calculateNumItems(), numToleratedItems = _calculateNumItems.numToleratedItems;
    var contentPos = getContentPosition();
    var calculateFirst = function calculateFirst2() {
      var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var _numT = arguments.length > 1 ? arguments[1] : void 0;
      return _index <= _numT ? 0 : _index;
    };
    var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
      return _first * _size + _cpos;
    };
    var scrollToItem = function scrollToItem2() {
      var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return scrollTo({
        left,
        top,
        behavior
      });
    };
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var isRangeChanged = false;
    if (both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollToItem(calculateCoord(newFirst.cols, props.itemSize[1], contentPos.left), calculateCoord(newFirst.rows, props.itemSize[0], contentPos.top));
      isRangeChanged = firstState.rows !== newFirst.rows || firstState.cols !== newFirst.cols;
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      horizontal ? scrollToItem(calculateCoord(newFirst, props.itemSize, contentPos.left), 0) : scrollToItem(0, calculateCoord(newFirst, props.itemSize, contentPos.top));
      isRangeChanged = firstState !== newFirst;
    }
    isItemRangeChanged.current = isRangeChanged;
    setFirstState(newFirst);
  };
  var scrollInView = function scrollInView2(index, to) {
    var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    if (to) {
      var _getRenderedRange = getRenderedRange(), first = _getRenderedRange.first, viewport = _getRenderedRange.viewport;
      var scrollToItem = function scrollToItem2() {
        var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return scrollTo({
          left,
          top,
          behavior
        });
      };
      var isToStart = to === "to-start";
      var isToEnd = to === "to-end";
      if (isToStart) {
        if (both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows - 1) * props.itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollToItem((viewport.first.cols - 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.first - first > index) {
          var pos = (viewport.first - 1) * props.itemSize;
          horizontal ? scrollToItem(pos, 0) : scrollToItem(0, pos);
        }
      } else if (isToEnd) {
        if (both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollToItem(viewport.first.cols * props.itemSize[1], (viewport.first.rows + 1) * props.itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollToItem((viewport.first.cols + 1) * props.itemSize[1], viewport.first.rows * props.itemSize[0]);
          }
        } else if (viewport.last - first <= index + 1) {
          var _pos2 = (viewport.first + 1) * props.itemSize;
          horizontal ? scrollToItem(_pos2, 0) : scrollToItem(0, _pos2);
        }
      }
    } else {
      scrollToIndex(index, behavior);
    }
  };
  var getRows = function getRows2() {
    return loadingState ? props.loaderDisabled ? loaderArrState : [] : loadedItems();
  };
  var getColumns = function getColumns2() {
    if (props.columns && both || horizontal) {
      return loadingState && props.loaderDisabled ? both ? loaderArrState[0] : loaderArrState : props.columns.slice(both ? firstState.cols : firstState, both ? lastState.cols : lastState);
    }
    return props.columns;
  };
  var getRenderedRange = function getRenderedRange2() {
    var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var firstInViewport = firstState;
    var lastInViewport = 0;
    if (elementRef.current) {
      var _elementRef$current = elementRef.current, scrollTop = _elementRef$current.scrollTop, scrollLeft = _elementRef$current.scrollLeft;
      if (both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, props.itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, props.itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + numItemsInViewportState.rows,
          cols: firstInViewport.cols + numItemsInViewportState.cols
        };
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, props.itemSize);
        lastInViewport = firstInViewport + numItemsInViewportState;
      }
    }
    return {
      first: firstState,
      last: lastState,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  };
  var calculateNumItems = function calculateNumItems2() {
    var contentPos = getContentPosition();
    var contentWidth = elementRef.current ? elementRef.current.offsetWidth - contentPos.left : 0;
    var contentHeight = elementRef.current ? elementRef.current.offsetHeight - contentPos.top : 0;
    var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
      return Math.ceil(_contentSize / (_itemSize || _contentSize));
    };
    var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
      return Math.ceil(_numItems / 2);
    };
    var numItemsInViewport = both ? {
      rows: calculateNumItemsInViewport(contentHeight, props.itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, props.itemSize[1])
    } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, props.itemSize);
    var numToleratedItems = numToleratedItemsState || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  };
  var calculateOptions = function calculateOptions2() {
    var _calculateNumItems2 = calculateNumItems(), numItemsInViewport = _calculateNumItems2.numItemsInViewport, numToleratedItems = _calculateNumItems2.numToleratedItems;
    var calculateLast = function calculateLast2(_first, _num, _numT) {
      var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      return getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    };
    var last = both ? {
      rows: calculateLast(firstState.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(firstState.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(firstState, numItemsInViewport, numToleratedItems);
    setNumItemsInViewportState(numItemsInViewport);
    setNumToleratedItemsState(numToleratedItems);
    setLastState(last);
    if (props.showLoader) {
      setLoaderArrState(both ? Array.from({
        length: numItemsInViewport.rows
      }).map(function() {
        return Array.from({
          length: numItemsInViewport.cols
        });
      }) : Array.from({
        length: numItemsInViewport
      }));
    }
    if (props.lazy) {
      Promise.resolve().then(function() {
        lazyLoadState.current = {
          first: props.step ? both ? {
            rows: 0,
            cols: firstState.cols
          } : 0 : firstState,
          last: Math.min(props.step ? props.step : last, (props.items || []).length)
        };
        props.onLazyLoad && props.onLazyLoad(lazyLoadState.current);
      });
    }
  };
  var calculateAutoSize = function calculateAutoSize2(loading) {
    if (props.autoSize && !loading) {
      Promise.resolve().then(function() {
        if (_contentRef.current) {
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "auto";
          _contentRef.current.style.position = "relative";
          elementRef.current.style.contain = "none";
          var _ref = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref[0], height = _ref[1];
          (both || horizontal) && (elementRef.current.style.width = (width < defaultWidth.current ? width : props.scrollWidth || defaultWidth.current) + "px");
          (both || vertical) && (elementRef.current.style.height = (height < defaultHeight.current ? height : props.scrollHeight || defaultHeight.current) + "px");
          _contentRef.current.style.minHeight = _contentRef.current.style.minWidth = "";
          _contentRef.current.style.position = "";
          elementRef.current.style.contain = "";
        }
      });
    }
  };
  var getLast = function getLast2() {
    var _ref2;
    var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var isCols = arguments.length > 1 ? arguments[1] : void 0;
    return props.items ? Math.min(isCols ? ((_ref2 = props.columns || props.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : (props.items || []).length, last) : 0;
  };
  var getContentPosition = function getContentPosition2() {
    if (_contentRef.current) {
      var style = getComputedStyle(_contentRef.current);
      var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  };
  var setSize = function setSize2() {
    if (elementRef.current) {
      var parentElement = elementRef.current.parentElement;
      var width = props.scrollWidth || "".concat(elementRef.current.offsetWidth || parentElement.offsetWidth, "px");
      var height = props.scrollHeight || "".concat(elementRef.current.offsetHeight || parentElement.offsetHeight, "px");
      var setProp = function setProp2(_name, _value) {
        return elementRef.current.style[_name] = _value;
      };
      if (both || horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  };
  var setSpacerSize = function setSpacerSize2() {
    var items = props.items;
    if (items) {
      var contentPos = getContentPosition();
      var setProp = function setProp2(_name, _value, _size) {
        var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        return spacerStyle.current = _objectSpread(_objectSpread({}, spacerStyle.current), _defineProperty({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
      };
      if (both) {
        setProp("height", items, props.itemSize[0], contentPos.y);
        setProp("width", props.columns || items[1], props.itemSize[1], contentPos.x);
      } else {
        horizontal ? setProp("width", props.columns || items, props.itemSize, contentPos.x) : setProp("height", items, props.itemSize, contentPos.y);
      }
    }
  };
  var setContentPosition = function setContentPosition2(pos) {
    if (_contentRef.current && !props.appendOnly) {
      var first = pos ? pos.first : firstState;
      var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
        return _first * _size;
      };
      var setTransform = function setTransform2() {
        var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        _stickyRef.current && (_stickyRef.current.style.top = "-".concat(_y, "px"));
        contentStyle.current = _objectSpread(_objectSpread({}, contentStyle.current), {
          transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
        });
      };
      if (both) {
        setTransform(calculateTranslateVal(first.cols, props.itemSize[1]), calculateTranslateVal(first.rows, props.itemSize[0]));
      } else {
        var translateVal = calculateTranslateVal(first, props.itemSize);
        horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  };
  var onScrollPositionChange = function onScrollPositionChange2(event) {
    var target = event.target;
    var contentPos = getContentPosition();
    var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
      return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    };
    var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
      return Math.floor(_pos / (_size || _pos));
    };
    var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
      if (_currentIndex <= _numT) {
        return 0;
      }
      return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
      var lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue = lastValue + (_numT + 1);
      }
      return getLast(lastValue, _isCols);
    };
    var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    var newFirst = both ? {
      rows: 0,
      cols: 0
    } : 0;
    var newLast = lastState;
    var isRangeChanged = false;
    var newScrollPos = lastScrollPos.current;
    if (both) {
      var isScrollDown = lastScrollPos.current.top <= scrollTop;
      var isScrollRight = lastScrollPos.current.left <= scrollLeft;
      if (!props.appendOnly || props.appendOnly && (isScrollDown || isScrollRight)) {
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, props.itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, props.itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, firstState.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, firstState.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, lastState.rows, numItemsInViewportState.rows, numToleratedItemsState[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, lastState.cols, numItemsInViewportState.cols, numToleratedItemsState[1], true)
        };
        isRangeChanged = newFirst.rows !== firstState.rows || newLast.rows !== lastState.rows || newFirst.cols !== firstState.cols || newLast.cols !== lastState.cols || isItemRangeChanged.current;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      var scrollPos = horizontal ? scrollLeft : scrollTop;
      var isScrollDownOrRight = lastScrollPos.current <= scrollPos;
      if (!props.appendOnly || props.appendOnly && isScrollDownOrRight) {
        var _currentIndex2 = calculateCurrentIndex(scrollPos, props.itemSize);
        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, firstState, lastState, numItemsInViewportState, numToleratedItemsState, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, lastState, numItemsInViewportState, numToleratedItemsState);
        isRangeChanged = newFirst !== firstState || newLast !== lastState || isItemRangeChanged.current;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  };
  var onScrollChange = function onScrollChange2(event) {
    var _onScrollPositionChan = onScrollPositionChange(event), first = _onScrollPositionChan.first, last = _onScrollPositionChan.last, isRangeChanged = _onScrollPositionChan.isRangeChanged, scrollPos = _onScrollPositionChan.scrollPos;
    if (isRangeChanged) {
      var newState = {
        first,
        last
      };
      setContentPosition(newState);
      setFirstState(first);
      setLastState(last);
      lastScrollPos.current = scrollPos;
      props.onScrollIndexChange && props.onScrollIndexChange(newState);
      if (props.lazy && isPageChanged(first)) {
        var newLazyLoadState = {
          first: props.step ? Math.min(getPageByFirst(first) * props.step, (props.items || []).length - props.step) : first,
          last: Math.min(props.step ? (getPageByFirst(first) + 1) * props.step : last, (props.items || []).length)
        };
        var isLazyStateChanged = !lazyLoadState.current || lazyLoadState.current.first !== newLazyLoadState.first || lazyLoadState.current.last !== newLazyLoadState.last;
        isLazyStateChanged && props.onLazyLoad && props.onLazyLoad(newLazyLoadState);
        lazyLoadState.current = newLazyLoadState;
      }
    }
  };
  var _onScroll = function onScroll(event) {
    props.onScroll && props.onScroll(event);
    if (props.delay) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (isPageChanged(firstState)) {
        if (!loadingState && props.showLoader) {
          var _onScrollPositionChan2 = onScrollPositionChange(event), isRangeChanged = _onScrollPositionChan2.isRangeChanged;
          var changed = isRangeChanged || (props.step ? isPageChanged(firstState) : false);
          changed && setLoadingState(true);
        }
        scrollTimeout.current = setTimeout(function() {
          onScrollChange(event);
          if (loadingState && props.showLoader && (!props.lazy || props.loading === void 0)) {
            setLoadingState(false);
            setPageState(getPageByFirst(firstState));
          }
        }, props.delay);
      }
    } else {
      onScrollChange(event);
    }
  };
  var onResize = function onResize2() {
    if (resizeTimeout.current) {
      clearTimeout(resizeTimeout.current);
    }
    resizeTimeout.current = setTimeout(function() {
      if (elementRef.current) {
        var _ref3 = [DomHandler.getWidth(elementRef.current), DomHandler.getHeight(elementRef.current)], width = _ref3[0], height = _ref3[1];
        var isDiffWidth = width !== defaultWidth.current, isDiffHeight = height !== defaultHeight.current;
        var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
        if (reinit) {
          setNumToleratedItemsState(props.numToleratedItems);
          defaultWidth.current = width;
          defaultHeight.current = height;
          defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
          defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
        }
      }
    }, props.resizeDelay);
  };
  var getOptions = function getOptions2(renderedIndex) {
    var count = (props.items || []).length;
    var index = both ? firstState.rows + renderedIndex : firstState + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    };
  };
  var loaderOptions = function loaderOptions2(index, extOptions) {
    var count = loaderArrState.length || 0;
    return _objectSpread({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      props
    }, extOptions);
  };
  var loadedItems = function loadedItems2() {
    var items = props.items;
    if (items && !loadingState) {
      if (both) {
        return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function(item) {
          return props.columns ? item : item.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
        });
      } else if (horizontal && props.columns) {
        return items;
      }
      return items.slice(props.appendOnly ? 0 : firstState, lastState);
    }
    return [];
  };
  var viewInit = function viewInit2() {
    if (elementRef.current && isVisible()) {
      setContentElement(_contentRef.current);
      init();
      bindWindowResizeListener();
      bindOrientationChangeListener();
      defaultWidth.current = DomHandler.getWidth(elementRef.current);
      defaultHeight.current = DomHandler.getHeight(elementRef.current);
      defaultContentWidth.current = DomHandler.getWidth(_contentRef.current);
      defaultContentHeight.current = DomHandler.getHeight(_contentRef.current);
    }
  };
  var init = function init2() {
    if (!props.disabled && isVisible()) {
      setSize();
      calculateOptions();
      setSpacerSize();
    }
  };
  var isVisible = function isVisible2() {
    if (DomHandler.isVisible(elementRef.current)) {
      var rect = elementRef.current.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    return false;
  };
  React.useEffect(function() {
    if (!viewInitialized.current && isVisible()) {
      viewInit();
      viewInitialized.current = true;
    }
  });
  useUpdateEffect(function() {
    init();
  }, [props.itemSize, props.scrollHeight, props.scrollWidth]);
  useUpdateEffect(function() {
    if (props.numToleratedItems !== numToleratedItemsState) {
      setNumToleratedItemsState(props.numToleratedItems);
    }
  }, [props.numToleratedItems]);
  useUpdateEffect(function() {
    if (props.numToleratedItems === numToleratedItemsState) {
      init();
    }
  }, [numToleratedItemsState]);
  useUpdateEffect(function() {
    var prevRowsExist = prevProps.items !== void 0 && prevProps.items !== null;
    var currentRowsExist = props.items !== void 0 && props.items !== null;
    var prevRowsLength = prevRowsExist ? prevProps.items.length : 0;
    var currentRowsLength = currentRowsExist ? props.items.length : 0;
    var valuesChanged = prevRowsLength !== currentRowsLength;
    if (both && !valuesChanged) {
      var prevColumnsLength = prevRowsExist && prevProps.items.length > 0 ? prevProps.items[0].length : 0;
      var currentColumnsLength = currentRowsExist && props.items.length > 0 ? props.items[0].length : 0;
      valuesChanged = prevColumnsLength !== currentColumnsLength;
    }
    if (!prevRowsExist || valuesChanged) {
      init();
    }
    var loading = loadingState;
    if (props.lazy && prevProps.loading !== props.loading && props.loading !== loadingState) {
      setLoadingState(props.loading);
      loading = props.loading;
    }
    calculateAutoSize(loading);
  });
  useUpdateEffect(function() {
    lastScrollPos.current = both ? {
      top: 0,
      left: 0
    } : 0;
  }, [props.orientation]);
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElementRef,
      scrollTo,
      scrollToIndex,
      scrollInView,
      getRenderedRange
    };
  });
  var createLoaderItem = function createLoaderItem2(index) {
    var extOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = loaderOptions(index, extOptions);
    var content2 = ObjectUtils.getJSXElement(props.loadingTemplate, options);
    return /* @__PURE__ */ React.createElement(React.Fragment, {
      key: index
    }, content2);
  };
  var createLoader = function createLoader2() {
    var iconClassName = "p-virtualscroller-loading-icon";
    var loadingIconProps = mergeProps({
      className: iconClassName
    }, ptm("loadingIcon"));
    var icon = props.loadingIcon || /* @__PURE__ */ React.createElement(SpinnerIcon, _extends({}, loadingIconProps, {
      spin: true
    }));
    var loadingIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, loadingIconProps), {
      props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var _className = classNames("p-virtualscroller-loader", {
        "p-component-overlay": !props.loadingTemplate
      });
      var _content = loadingIcon;
      if (props.loadingTemplate) {
        _content = loaderArrState.map(function(_, index) {
          return createLoaderItem(index, both && {
            numCols: numItemsInViewportState.cols
          });
        });
      } else if (props.loaderIconTemplate) {
        var defaultContentOptions = {
          iconClassName,
          element: _content,
          props
        };
        _content = ObjectUtils.getJSXElement(props.loaderIconTemplate, defaultContentOptions);
      }
      var loaderProps = mergeProps({
        className: _className
      }, ptm("loader"));
      return /* @__PURE__ */ React.createElement("div", loaderProps, _content);
    }
    return null;
  };
  var createSpacer = function createSpacer2() {
    if (props.showSpacer) {
      var spacerProps = mergeProps({
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      }, ptm("spacer"));
      return /* @__PURE__ */ React.createElement("div", spacerProps);
    }
    return null;
  };
  var createItem = function createItem2(item, index) {
    var options = getOptions(index);
    var content2 = ObjectUtils.getJSXElement(props.itemTemplate, item, options);
    return /* @__PURE__ */ React.createElement(React.Fragment, {
      key: options.index
    }, content2);
  };
  var createItems = function createItems2() {
    var items = loadedItems();
    return items.map(createItem);
  };
  var createContent = function createContent2() {
    var items = createItems();
    var className2 = classNames("p-virtualscroller-content", {
      "p-virtualscroller-loading": loadingState
    });
    var contentProps = mergeProps({
      ref: _contentRef,
      style: contentStyle.current,
      className: className2
    }, ptm("content"));
    var content2 = /* @__PURE__ */ React.createElement("div", contentProps, items);
    if (props.contentTemplate) {
      var defaultOptions = {
        style: contentStyle.current,
        className: className2,
        spacerStyle: spacerStyle.current,
        contentRef: function contentRef(el) {
          return _contentRef.current = ObjectUtils.getRefElement(el);
        },
        spacerRef: function spacerRef(el) {
          return _spacerRef.current = ObjectUtils.getRefElement(el);
        },
        stickyRef: function stickyRef(el) {
          return _stickyRef.current = ObjectUtils.getRefElement(el);
        },
        items: loadedItems(),
        getItemOptions: function getItemOptions(index) {
          return getOptions(index);
        },
        children: items,
        element: content2,
        props,
        loading: loadingState,
        getLoaderOptions: function getLoaderOptions(index, ext) {
          return loaderOptions(index, ext);
        },
        loadingTemplate: props.loadingTemplate,
        itemSize: props.itemSize,
        rows: getRows(),
        columns: getColumns(),
        vertical,
        horizontal,
        both
      };
      return ObjectUtils.getJSXElement(props.contentTemplate, defaultOptions);
    }
    return content2;
  };
  if (props.disabled) {
    var _content2 = ObjectUtils.getJSXElement(props.contentTemplate, {
      items: props.items,
      rows: props.items,
      columns: props.columns
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, props.children, _content2);
  }
  var className = classNames("p-virtualscroller", {
    "p-virtualscroller-inline": props.inline,
    "p-virtualscroller-both p-both-scroll": both,
    "p-virtualscroller-horizontal p-horizontal-scroll": horizontal
  }, props.className);
  var loader = createLoader();
  var content = createContent();
  var spacer = createSpacer();
  var rootProps = mergeProps({
    ref: elementRef,
    className,
    tabIndex: props.tabIndex,
    style: props.style,
    onScroll: function onScroll(e) {
      return _onScroll(e);
    }
  }, VirtualScrollerBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("div", rootProps, content, spacer, loader);
}));
VirtualScroller.displayName = "VirtualScroller";
export {
  ChevronDownIcon as C,
  ExclamationTriangleIcon as E,
  InfoCircleIcon as I,
  TimesCircleIcon as T,
  VirtualScroller as V,
  Toast as a
};
//# sourceMappingURL=virtualscroller.esm-0yPTCOZF.js.map
