import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useForm, Head, router } from "@inertiajs/react";
import { C as Card } from "./card.esm-Dfu5Ic7s.js";
import { D as Dropdown } from "./dropdown.esm-CKXiqnMR.js";
import { P as PrimeReactContext, O as ObjectUtils, c as classNames, I as IconUtils, a as ariaLabel, l as localeOption, D as DomHandler } from "../ssr.js";
import { u as useMergeProps, a as useHandleStyle, C as ComponentBase, b as useTimeout } from "./portal.esm-D9mKEukT.js";
import { B as Button } from "./button.esm-BxFUYIz-.js";
import { P as PlusIcon } from "./index.esm-igEVmVoM.js";
import { R as Ripple, T as TimesIcon } from "./sidebar.esm-Dou14AQP.js";
import { I as IconBase, C as CSSTransition } from "./iconbase.esm-C6Zu_kc1.js";
import { TransitionGroup } from "react-transition-group";
import { C as CheckIcon } from "./virtualscroller.esm-DaOHCdsa.js";
import { T as TimesCircleIcon, E as ExclamationTriangleIcon, I as InfoCircleIcon, a as Toast } from "./toast.esm-BAa0NENd.js";
import { T as Tooltip, K as KeyFilter, I as InputText } from "./inputtext.esm-DDz9PXvh.js";
import axios from "axios";
import { D as Dialog } from "./dialog.esm-DP0uyxH6.js";
import { B as Button$1 } from "./Button-phcvJh3z.js";
import { C as Checkbox } from "./Checkbox-JURGK4El.js";
import { useSelector } from "react-redux";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
var UploadIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
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
    d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
    fill: "currentColor"
  }));
}));
UploadIcon.displayName = "UploadIcon";
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2(r);
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$2(r) || _nonIterableSpread$1();
}
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$3(t) {
  var i = toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _defineProperty$3(e, r, t) {
  return (r = toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
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
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest$1();
}
var styles$4 = "\n@layer primereact {\n    .p-message-wrapper {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-message-icon {\n        flex-shrink: 0;\n    }\n    \n    .p-message-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-message-close.p-link {\n        margin-left: auto;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-message-enter {\n        opacity: 0;\n    }\n    \n    .p-message-enter-active {\n        opacity: 1;\n        transition: opacity .3s;\n    }\n    \n    .p-message-exit {\n        opacity: 1;\n        max-height: 1000px;\n    }\n    \n    .p-message-exit-active {\n        opacity: 0;\n        max-height: 0;\n        margin: 0;\n        overflow: hidden;\n        transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;\n    }\n    \n    .p-message-exit-active .p-message-close {\n        display: none;\n    }\n}\n";
var classes$4 = {
  uimessage: {
    root: function root(_ref) {
      var severity = _ref.severity;
      return classNames("p-message p-component", _defineProperty$3({}, "p-message-".concat(severity), severity));
    },
    wrapper: "p-message-wrapper",
    detail: "p-message-detail",
    summary: "p-message-summary",
    icon: "p-message-icon",
    buttonicon: "p-message-close-icon",
    button: "p-message-close p-link",
    transition: "p-message"
  }
};
var MessagesBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Messages",
    __parentMetadata: null,
    id: null,
    className: null,
    style: null,
    transitionOptions: null,
    onRemove: null,
    onClick: null,
    children: void 0
  },
  css: {
    classes: classes$4,
    styles: styles$4
  }
});
function ownKeys$1$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1$1(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var UIMessage = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var messageInfo = props.message, parentMetaData = props.metaData, _props$ptCallbacks = props.ptCallbacks, ptm = _props$ptCallbacks.ptm, ptmo = _props$ptCallbacks.ptmo, cx = _props$ptCallbacks.cx, index = props.index;
  var _messageInfo$message = messageInfo.message, severity = _messageInfo$message.severity, content = _messageInfo$message.content, summary = _messageInfo$message.summary, detail = _messageInfo$message.detail, closable = _messageInfo$message.closable, life = _messageInfo$message.life, sticky = _messageInfo$message.sticky, _className = _messageInfo$message.className, style = _messageInfo$message.style, _contentClassName = _messageInfo$message.contentClassName, contentStyle = _messageInfo$message.contentStyle, _icon = _messageInfo$message.icon, _closeIcon = _messageInfo$message.closeIcon, pt = _messageInfo$message.pt;
  var params = {
    index
  };
  var parentParams = _objectSpread$1$1(_objectSpread$1$1({}, parentMetaData), params);
  var _useTimeout = useTimeout(function() {
    onClose(null);
  }, life || 3e3, !sticky), _useTimeout2 = _slicedToArray$1(_useTimeout, 1), clearTimer = _useTimeout2[0];
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1$1({
      hostName: props.hostName
    }, options));
  };
  var onClose = function onClose2(event) {
    clearTimer();
    props.onClose && props.onClose(props.message);
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var onClick = function onClick2() {
    props.onClick && props.onClick(props.message);
  };
  var createCloseIcon = function createCloseIcon2() {
    if (closable !== false) {
      var buttonIconProps = mergeProps({
        className: cx("uimessage.buttonicon")
      }, getPTOptions("buttonicon", parentParams), ptmo(pt, "buttonicon", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
        hostName: props.hostName
      })));
      var icon = _closeIcon || /* @__PURE__ */ React.createElement(TimesIcon, buttonIconProps);
      var _closeIcon2 = IconUtils.getJSXIcon(icon, _objectSpread$1$1({}, buttonIconProps), {
        props
      });
      var buttonProps = mergeProps({
        type: "button",
        className: cx("uimessage.button"),
        "aria-label": ariaLabel("close"),
        onClick: onClose
      }, getPTOptions("button", parentParams), ptmo(pt, "button", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
        hostName: props.hostName
      })));
      return /* @__PURE__ */ React.createElement("button", buttonProps, _closeIcon2, /* @__PURE__ */ React.createElement(Ripple, null));
    }
    return null;
  };
  var createMessage = function createMessage2() {
    if (props.message) {
      var iconProps = mergeProps({
        className: cx("uimessage.icon")
      }, getPTOptions("icon", parentParams), ptmo(pt, "icon", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
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
      var iconContent = IconUtils.getJSXIcon(icon, _objectSpread$1$1({}, iconProps), {
        props
      });
      var summaryProps = mergeProps({
        className: cx("uimessage.summary")
      }, getPTOptions("summary", parentParams), ptmo(pt, "summary", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
        hostName: props.hostName
      })));
      var detailProps = mergeProps({
        className: cx("uimessage.detail")
      }, getPTOptions("detail", parentParams), ptmo(pt, "detail", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
        hostName: props.hostName
      })));
      return content || /* @__PURE__ */ React.createElement(React.Fragment, null, iconContent, /* @__PURE__ */ React.createElement("span", summaryProps, summary), /* @__PURE__ */ React.createElement("span", detailProps, detail));
    }
    return null;
  };
  var closeIcon = createCloseIcon();
  var message = createMessage();
  var wrapperProps = mergeProps({
    className: classNames(_contentClassName, cx("uimessage.wrapper")),
    style: contentStyle
  }, getPTOptions("wrapper", parentParams), ptmo(pt, "wrapper", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
    hostName: props.hostName
  })));
  var rootProps = mergeProps({
    ref,
    className: classNames(_className, cx("uimessage.root", {
      severity
    })),
    style,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    onClick
  }, getPTOptions("root", parentParams), ptmo(pt, "root", _objectSpread$1$1(_objectSpread$1$1({}, params), {}, {
    hostName: props.hostName
  })));
  return /* @__PURE__ */ React.createElement("div", rootProps, /* @__PURE__ */ React.createElement("div", wrapperProps, message, closeIcon));
}));
UIMessage.displayName = "UIMessage";
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var messageIdx = 0;
var Messages = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = MessagesBase.getProps(inProps, context);
  var _React$useState = React.useState([]), _React$useState2 = _slicedToArray$1(_React$useState, 2), messagesState = _React$useState2[0], setMessagesState = _React$useState2[1];
  var elementRef = React.useRef(null);
  var metaData = _objectSpread$4(_objectSpread$4({
    props
  }, props.__parentMetadata), {}, {
    state: {
      messages: messagesState
    }
  });
  var ptCallbacks = MessagesBase.setMetaData(metaData);
  useHandleStyle(MessagesBase.css.styles, ptCallbacks.isUnstyled, {
    name: "messages"
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
      var multipleMessages = messageInfo.reduce(function(acc, message2) {
        acc.push({
          _pId: messageIdx++,
          message: message2
        });
        return acc;
      }, []);
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray$1(currentState), _toConsumableArray$1(multipleMessages)) : multipleMessages;
      } else {
        messages = multipleMessages;
      }
    } else {
      var message = {
        _pId: messageIdx++,
        message: messageInfo
      };
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray$1(currentState), [message]) : [message];
      } else {
        messages = [message];
      }
    }
    return messages;
  };
  var clear = function clear2() {
    setMessagesState([]);
  };
  var replace = function replace2(messageInfo) {
    setMessagesState(function(prev) {
      return assignIdentifiers(prev, messageInfo, false);
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
  React.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      replace,
      remove,
      clear,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    id: props.id,
    className: props.className,
    style: props.style
  }, MessagesBase.getOtherProps(props), ptCallbacks.ptm("root"));
  var transitionProps = mergeProps({
    classNames: ptCallbacks.cx("uimessage.transition"),
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    },
    options: props.transitionOptions
  }, ptCallbacks.ptm("transition"));
  return /* @__PURE__ */ React.createElement("div", _extends$3({
    ref: elementRef
  }, rootProps), /* @__PURE__ */ React.createElement(TransitionGroup, null, messagesState && messagesState.map(function(message, index) {
    var messageRef = /* @__PURE__ */ React.createRef();
    return /* @__PURE__ */ React.createElement(CSSTransition, _extends$3({
      nodeRef: messageRef,
      key: message._pId
    }, transitionProps), /* @__PURE__ */ React.createElement(UIMessage, {
      hostName: "Messages",
      ref: messageRef,
      message,
      onClick: props.onClick,
      onClose,
      ptCallbacks,
      metaData,
      index
    }));
  })));
}));
Messages.displayName = "Messages";
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$2(t) {
  var i = toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _defineProperty$2(e, r, t) {
  return (r = toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var classes$3 = {
  root: function root2(_ref) {
    var props = _ref.props;
    return props.mode === "indeterminate" ? classNames("p-progressbar p-component p-progressbar-indeterminate") : classNames("p-progressbar p-component p-progressbar-determinate");
  },
  value: "p-progressbar-value p-progressbar-value-animate",
  label: "p-progressbar-label",
  container: "p-progressbar-indeterminate-container"
};
var styles$3 = "\n@layer primereact {\n  .p-progressbar {\n      position: relative;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value {\n      height: 100%;\n      width: 0%;\n      position: absolute;\n      display: none;\n      border: 0 none;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-label {\n      display: inline-flex;\n  }\n  \n  .p-progressbar-determinate .p-progressbar-value-animate {\n      transition: width 1s ease-in-out;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background-color: inherit;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        will-change: left, right;\n        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  }\n  \n  .p-progressbar-indeterminate .p-progressbar-value::after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n              animation-delay: 1.15s;\n  }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n@keyframes p-progressbar-indeterminate-anim {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; }\n}\n";
var inlineStyles = {
  value: function value(_ref2) {
    var props = _ref2.props;
    var valueWidth = Math.max(props.value, 2);
    var valueColor = props.value ? props.color : "transparent";
    return props.mode === "indeterminate" ? {
      backgroundColor: props.color
    } : {
      width: valueWidth + "%",
      display: "flex",
      backgroundColor: valueColor
    };
  }
};
var ProgressBarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "ProgressBar",
    __parentMetadata: null,
    id: null,
    value: null,
    showValue: true,
    unit: "%",
    style: null,
    className: null,
    mode: "determinate",
    displayValueTemplate: null,
    color: null,
    children: void 0
  },
  css: {
    classes: classes$3,
    styles: styles$3,
    inlineStyles
  }
});
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ProgressBar = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ProgressBarBase.getProps(inProps, context);
  var _ProgressBarBase$setM = ProgressBarBase.setMetaData(_objectSpread$3({
    props
  }, props.__parentMetadata)), ptm = _ProgressBarBase$setM.ptm, cx = _ProgressBarBase$setM.cx, isUnstyled = _ProgressBarBase$setM.isUnstyled;
  useHandleStyle(ProgressBarBase.css.styles, isUnstyled, {
    name: "progressbar"
  });
  var elementRef = React.useRef(null);
  var createLabel = function createLabel2() {
    if (props.showValue && props.value != null) {
      var label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;
      return label;
    }
    return null;
  };
  var createDeterminate = function createDeterminate2() {
    var label = createLabel();
    var rootProps = mergeProps({
      className: classNames(props.className, cx("root")),
      style: props.style,
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuenow": props.value,
      "aria-valuemax": "100"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var valueProps = mergeProps({
      className: cx("value"),
      style: {
        width: props.value + "%",
        display: "flex",
        backgroundColor: props.color
      }
    }, ptm("value"));
    var labelProps = mergeProps({
      className: cx("label")
    }, ptm("label"));
    return /* @__PURE__ */ React.createElement("div", _extends$2({
      id: props.id,
      ref: elementRef
    }, rootProps), /* @__PURE__ */ React.createElement("div", valueProps, label != null && /* @__PURE__ */ React.createElement("div", labelProps, label)));
  };
  var createIndeterminate = function createIndeterminate2() {
    var rootProps = mergeProps({
      className: classNames(props.className, cx("root")),
      style: props.style,
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuenow": props.value,
      "aria-valuemax": "100"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var containerProps = mergeProps({
      className: cx("container")
    }, ptm("container"));
    var valueProps = mergeProps({
      className: cx("value"),
      style: {
        backgroundColor: props.color
      }
    }, ptm("value"));
    return /* @__PURE__ */ React.createElement("div", _extends$2({
      id: props.id,
      ref: elementRef
    }, rootProps), /* @__PURE__ */ React.createElement("div", containerProps, /* @__PURE__ */ React.createElement("div", valueProps)));
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  if (props.mode === "determinate") {
    return createDeterminate();
  } else if (props.mode === "indeterminate") {
    return createIndeterminate();
  }
  throw new Error(props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
}));
ProgressBar.displayName = "ProgressBar";
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
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
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
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}
var classes$1 = {
  root: function root3(_ref) {
    var props = _ref.props;
    return classNames("p-badge p-component", _defineProperty$1({
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value),
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge"
    }, "p-badge-".concat(props.severity), props.severity !== null));
  }
};
var styles$1 = "\n@layer primereact {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n    \n    .p-overlay-badge {\n        position: relative;\n    }\n    \n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n    \n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n    \n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n";
var BadgeBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Badge",
    __parentMetadata: null,
    value: null,
    severity: null,
    size: null,
    style: null,
    className: null,
    children: void 0
  },
  css: {
    classes: classes$1,
    styles: styles$1
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
var Badge = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = BadgeBase.getProps(inProps, context);
  var _BadgeBase$setMetaDat = BadgeBase.setMetaData(_objectSpread$1({
    props
  }, props.__parentMetadata)), ptm = _BadgeBase$setMetaDat.ptm, cx = _BadgeBase$setMetaDat.cx, isUnstyled = _BadgeBase$setMetaDat.isUnstyled;
  useHandleStyle(BadgeBase.css.styles, isUnstyled, {
    name: "badge"
  });
  var elementRef = React.useRef(null);
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var rootProps = mergeProps({
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root"))
  }, BadgeBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("span", rootProps, props.value);
}));
Badge.displayName = "Badge";
var classes$2 = {
  root: function root4(_ref) {
    var props = _ref.props;
    return classNames("p-fileupload p-fileupload-".concat(props.mode, " p-component"));
  },
  buttonbar: "p-fileupload-buttonbar",
  content: "p-fileupload-content",
  chooseButton: function chooseButton(_ref2) {
    var iconOnly = _ref2.iconOnly, disabled = _ref2.disabled, focusedState = _ref2.focusedState;
    return classNames("p-button p-fileupload-choose p-component", {
      "p-disabled": disabled,
      "p-focus": focusedState,
      "p-button-icon-only": iconOnly
    });
  },
  label: "p-button-label p-clickable",
  file: "p-fileupload-row",
  fileName: "p-fileupload-filename",
  thumbnail: "p-fileupload-file-thumbnail",
  chooseButtonLabel: "p-button-label p-clickable",
  basicButton: function basicButton(_ref3) {
    var disabled = _ref3.disabled, focusedState = _ref3.focusedState, hasFiles = _ref3.hasFiles;
    return classNames("p-button p-component p-fileupload-choose", {
      "p-fileupload-choose-selected": hasFiles,
      "p-disabled": disabled,
      "p-focus": focusedState
    });
  },
  chooseIcon: function chooseIcon(_ref4) {
    var props = _ref4.props, iconOnly = _ref4.iconOnly;
    return props.mode === "basic" ? classNames("p-button-icon", {
      "p-button-icon-left": !iconOnly
    }) : classNames("p-button-icon p-clickable", {
      "p-button-icon-left": !iconOnly
    });
  },
  uploadIcon: function uploadIcon(_ref5) {
    var iconOnly = _ref5.iconOnly;
    return classNames("p-button-icon p-c", {
      "p-button-icon-left": !iconOnly
    });
  },
  cancelIcon: function cancelIcon(_ref6) {
    var iconOnly = _ref6.iconOnly;
    return classNames("p-button-icon p-c", {
      "p-button-icon-left": !iconOnly
    });
  }
};
var styles$2 = "\n@layer primereact {\n    .p-fileupload-content {\n        position: relative;\n    }\n    \n    .p-fileupload-row {\n        display: flex;\n        align-items: center;\n    }\n    \n    .p-fileupload-row > div {\n        flex: 1 1 auto;\n        width: 25%;\n    }\n    \n    .p-fileupload-row > div:last-child {\n        text-align: right;\n    }\n    \n    .p-fileupload-content > .p-progressbar {\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-button.p-fileupload-choose {\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-fileupload-buttonbar {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    .p-button.p-fileupload-choose input[type='file'] {\n        display: none;\n    }\n    \n    .p-fileupload-choose.p-fileupload-choose-selected input[type='file'] {\n        display: none;\n    }\n    \n    .p-fileupload-filename {\n        word-break: break-all;\n    }\n    \n    .p-fileupload-file-thumbnail {\n        flex-shrink: 0;\n    }\n    \n    .p-fileupload-file-badge {\n        margin: 0.5rem;\n    }\n    \n    .p-fluid .p-fileupload .p-button {\n        width: auto;\n    }\n}\n";
var FileUploadBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "FileUpload",
    id: null,
    name: null,
    url: null,
    mode: "advanced",
    multiple: false,
    accept: null,
    removeIcon: null,
    disabled: false,
    auto: false,
    maxFileSize: null,
    invalidFileSizeMessageSummary: "{0}: Invalid file size, ",
    invalidFileSizeMessageDetail: "maximum upload size is {0}.",
    style: null,
    className: null,
    withCredentials: false,
    previewWidth: 50,
    chooseLabel: null,
    selectedFileLabel: null,
    uploadLabel: null,
    cancelLabel: null,
    chooseOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    uploadOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    cancelOptions: {
      label: null,
      icon: null,
      iconOnly: false,
      className: null,
      style: null
    },
    customUpload: false,
    headerClassName: null,
    headerStyle: null,
    contentClassName: null,
    contentStyle: null,
    headerTemplate: null,
    itemTemplate: null,
    emptyTemplate: null,
    progressBarTemplate: null,
    onBeforeUpload: null,
    onBeforeSend: null,
    onBeforeDrop: null,
    onBeforeSelect: null,
    onUpload: null,
    onError: null,
    onClear: null,
    onSelect: null,
    onProgress: null,
    onValidationFail: null,
    uploadHandler: null,
    onRemove: null,
    children: void 0
  },
  css: {
    classes: classes$2,
    styles: styles$2
  }
});
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var FileUpload = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = FileUploadBase.getProps(inProps, context);
  var _React$useState = React.useState([]), _React$useState2 = _slicedToArray(_React$useState, 2), uploadedFilesState = _React$useState2[0], setUploadedFilesState = _React$useState2[1];
  var _React$useState3 = React.useState([]), _React$useState4 = _slicedToArray(_React$useState3, 2), filesState = _React$useState4[0], setFilesState = _React$useState4[1];
  var _React$useState5 = React.useState(0), _React$useState6 = _slicedToArray(_React$useState5, 2), progressState = _React$useState6[0], setProgressState = _React$useState6[1];
  var _React$useState7 = React.useState(false), _React$useState8 = _slicedToArray(_React$useState7, 2), focusedState = _React$useState8[0], setFocusedState = _React$useState8[1];
  var _React$useState9 = React.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), uploadingState = _React$useState10[0], setUploadingState = _React$useState10[1];
  var metaData = {
    props,
    state: {
      progress: progressState,
      uploading: uploadingState,
      uploadedFiles: uploadedFilesState,
      files: filesState,
      focused: focusedState
    }
  };
  var _FileUploadBase$setMe = FileUploadBase.setMetaData(metaData), ptm = _FileUploadBase$setMe.ptm, cx = _FileUploadBase$setMe.cx, isUnstyled = _FileUploadBase$setMe.isUnstyled;
  useHandleStyle(FileUploadBase.css.styles, isUnstyled, {
    name: "fileupload"
  });
  var fileInputRef = React.useRef(null);
  var messagesRef = React.useRef(null);
  var contentRef = React.useRef(null);
  var uploadedFileCount = React.useRef(0);
  var hasFiles = ObjectUtils.isNotEmpty(filesState);
  var hasUploadedFiles = ObjectUtils.isNotEmpty(uploadedFilesState);
  var disabled = props.disabled || uploadingState;
  var chooseButtonLabel = props.chooseLabel || props.chooseOptions.label || localeOption("choose");
  var uploadButtonLabel = props.uploadLabel || props.uploadOptions.label || localeOption("upload");
  var cancelButtonLabel = props.cancelLabel || props.cancelOptions.label || localeOption("cancel");
  var chooseDisabled = disabled || props.fileLimit && props.fileLimit <= filesState.length + uploadedFileCount;
  var uploadDisabled = disabled || !hasFiles;
  var cancelDisabled = disabled || !hasFiles;
  var isImage = function isImage2(file) {
    return /^image\//.test(file.type);
  };
  var remove = function remove2(event, index) {
    clearInput();
    var currentFiles = _toConsumableArray(filesState);
    var removedFile = filesState[index];
    currentFiles.splice(index, 1);
    setFilesState(currentFiles);
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        file: removedFile
      });
    }
  };
  var removeUploadedFiles = function removeUploadedFiles2(event, index) {
    clearInput();
    var currentUploadedFiles = _toConsumableArray(uploadedFilesState);
    var removedFile = filesState[index];
    currentUploadedFiles.splice(index, 1);
    setUploadedFilesState(currentUploadedFiles);
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        file: removedFile
      });
    }
  };
  var clearInput = function clearInput2() {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  var formatSize = function formatSize2(bytes) {
    var k = 1024;
    var dm = 3;
    var sizes = localeOption("fileSizeTypes");
    if (bytes <= 0) {
      return "0 ".concat(sizes[0]);
    }
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    var formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    return "".concat(formattedSize, " ").concat(sizes[i]);
  };
  var onFileSelect = function onFileSelect2(event) {
    if (props.onBeforeSelect && props.onBeforeSelect({
      originalEvent: event,
      files: filesState
    }) === false) {
      return;
    }
    var currentFiles = [];
    if (props.multiple) {
      currentFiles = filesState ? _toConsumableArray(filesState) : [];
    }
    var selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (var i = 0; i < selectedFiles.length; i++) {
      var file = selectedFiles[i];
      var shouldAddFile = props.multiple ? !isFileSelected(file) && validate(file) : validate(file);
      if (shouldAddFile) {
        file.objectURL = window.URL.createObjectURL(file);
        currentFiles.push(file);
      }
    }
    setFilesState(currentFiles);
    if (ObjectUtils.isNotEmpty(currentFiles) && props.auto) {
      upload(currentFiles);
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        files: currentFiles
      });
    }
    clearInput();
    setFocusedState(false);
    if (props.mode === "basic" && currentFiles.length > 0) {
      fileInputRef.current.style.display = "none";
    }
  };
  var isFileSelected = function isFileSelected2(file) {
    return filesState.some(function(f) {
      return f.name + f.type + f.size === file.name + file.type + file.size;
    });
  };
  var validate = function validate2(file) {
    if (props.maxFileSize && file.size > props.maxFileSize) {
      var message = {
        severity: "error",
        summary: props.invalidFileSizeMessageSummary.replace("{0}", file.name),
        detail: props.invalidFileSizeMessageDetail.replace("{0}", formatSize(props.maxFileSize)),
        sticky: true
      };
      if (props.mode === "advanced") {
        messagesRef.current.show(message);
      }
      props.onValidationFail && props.onValidationFail(file);
      return false;
    }
    return true;
  };
  var upload = function upload2(files) {
    files = files || filesState;
    if (files && files.nativeEvent) {
      files = filesState;
    }
    if (props.customUpload) {
      if (props.fileLimit) {
        uploadedFileCount + files.length, _readOnlyError("uploadedFileCount");
      }
      if (props.uploadHandler) {
        props.uploadHandler({
          files,
          options: {
            clear,
            props
          }
        });
      }
    } else {
      setUploadingState(true);
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      if (props.onBeforeUpload) {
        props.onBeforeUpload({
          xhr,
          formData
        });
      }
      var _iterator = _createForOfIteratorHelper(files), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var file = _step.value;
          formData.append(props.name, file, file.name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      xhr.upload.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
          var progress = Math.round(event.loaded * 100 / event.total);
          setProgressState(progress);
          if (props.onProgress) {
            props.onProgress({
              originalEvent: event,
              progress
            });
          }
        }
      });
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          setProgressState(0);
          setUploadingState(false);
          if (xhr.status >= 200 && xhr.status < 300) {
            if (props.fileLimit) {
              uploadedFileCount + files.length, _readOnlyError("uploadedFileCount");
            }
            if (props.onUpload) {
              props.onUpload({
                xhr,
                files
              });
            }
          } else if (props.onError) {
            props.onError({
              xhr,
              files
            });
          }
          clear();
          setUploadedFilesState(function(prevUploadedFiles) {
            return [].concat(_toConsumableArray(prevUploadedFiles), _toConsumableArray(files));
          });
        }
      };
      xhr.open("POST", props.url, true);
      if (props.onBeforeSend) {
        props.onBeforeSend({
          xhr,
          formData
        });
      }
      xhr.withCredentials = props.withCredentials;
      xhr.send(formData);
    }
  };
  var clear = function clear2() {
    setFilesState([]);
    setUploadedFilesState([]);
    setUploadingState(false);
    props.onClear && props.onClear();
    clearInput();
  };
  var choose = function choose2() {
    fileInputRef.current.click();
  };
  var onFocus = function onFocus2() {
    setFocusedState(true);
  };
  var onBlur = function onBlur2() {
    setFocusedState(false);
  };
  var _onKeyDown = function onKeyDown(event) {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      choose();
    }
  };
  var _onDragEnter = function onDragEnter(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = "copy";
      event.stopPropagation();
      event.preventDefault();
    }
  };
  var _onDragOver = function onDragOver(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = "copy";
      !isUnstyled() && DomHandler.addClass(contentRef.current, "p-fileupload-highlight");
      contentRef.current.setAttribute("data-p-highlight", true);
      event.stopPropagation();
      event.preventDefault();
    }
  };
  var _onDragLeave = function onDragLeave(event) {
    if (!disabled) {
      event.dataTransfer.dropEffect = "copy";
      !isUnstyled() && DomHandler.removeClass(contentRef.current, "p-fileupload-highlight");
      contentRef.current.setAttribute("data-p-highlight", false);
    }
  };
  var _onDrop = function onDrop(event) {
    if (props.disabled) {
      return;
    }
    !isUnstyled() && DomHandler.removeClass(contentRef.current, "p-fileupload-highlight");
    contentRef.current.setAttribute("data-p-highlight", false);
    event.stopPropagation();
    event.preventDefault();
    if (props.onBeforeDrop && props.onBeforeDrop(event) === false) {
      return;
    }
    var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    var allowDrop = props.multiple || ObjectUtils.isEmpty(filesState) && files && files.length === 1;
    allowDrop && onFileSelect(event);
  };
  var onSimpleUploaderClick = function onSimpleUploaderClick2() {
    !disabled && hasFiles ? upload() : fileInputRef.current.click();
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      upload,
      clear,
      formatSize,
      onFileSelect,
      getInput: function getInput() {
        return fileInputRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getFiles: function getFiles() {
        return filesState;
      },
      setFiles: function setFiles(files) {
        return setFilesState(files || []);
      },
      getUploadedFiles: function getUploadedFiles() {
        return uploadedFilesState;
      },
      setUploadedFiles: function setUploadedFiles(files) {
        return setUploadedFilesState(files || []);
      }
    };
  });
  var createChooseButton = function createChooseButton2() {
    var _props$chooseOptions = props.chooseOptions, className = _props$chooseOptions.className, style = _props$chooseOptions.style, _icon = _props$chooseOptions.icon, iconOnly = _props$chooseOptions.iconOnly;
    var chooseButtonLabelProps = mergeProps({
      className: cx("chooseButtonLabel")
    }, ptm("chooseButtonLabel"));
    var label = iconOnly ? /* @__PURE__ */ React.createElement("span", _extends$1({}, chooseButtonLabelProps, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    })) : /* @__PURE__ */ React.createElement("span", chooseButtonLabelProps, chooseButtonLabel);
    var inputProps = mergeProps({
      ref: fileInputRef,
      type: "file",
      onChange: function onChange(e) {
        return onFileSelect(e);
      },
      multiple: props.multiple,
      accept: props.accept,
      disabled: chooseDisabled
    }, ptm("input"));
    var input = /* @__PURE__ */ React.createElement("input", inputProps);
    var chooseIconProps = mergeProps({
      className: cx("chooseIcon", {
        iconOnly
      }),
      "aria-hidden": "true"
    }, ptm("chooseIcon"));
    var icon = _icon || /* @__PURE__ */ React.createElement(PlusIcon, chooseIconProps);
    var chooseIcon2 = IconUtils.getJSXIcon(icon, _objectSpread$2({}, chooseIconProps), {
      props
    });
    var chooseButtonProps = mergeProps({
      className: classNames(className, cx("chooseButton", {
        iconOnly,
        disabled,
        className,
        focusedState
      })),
      style,
      onClick: choose,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      onFocus,
      onBlur,
      tabIndex: 0,
      "data-p-disabled": disabled,
      "data-p-focus": focusedState
    }, ptm("chooseButton"));
    return /* @__PURE__ */ React.createElement("span", chooseButtonProps, input, chooseIcon2, label, /* @__PURE__ */ React.createElement(Ripple, null));
  };
  var onRemoveClick = function onRemoveClick2(e, badgeOptions, index) {
    if (badgeOptions.severity === "warning") {
      remove(e, index);
    } else {
      removeUploadedFiles(e, index);
    }
  };
  var createFile = function createFile2(file, index, badgeOptions) {
    var key = file.name + file.type + file.size;
    var thumbnailProps = mergeProps({
      role: "presentation",
      className: cx("thumbnail"),
      src: file.objectURL,
      width: props.previewWidth
    }, ptm("thumbnail"));
    var preview = isImage(file) ? /* @__PURE__ */ React.createElement("img", _extends$1({}, thumbnailProps, {
      alt: file.name
    })) : null;
    var detailsProps = mergeProps(ptm("details"));
    var fileSizeProps = mergeProps(ptm("fileSize"));
    var fileNameProps = mergeProps({
      className: cx("fileName")
    }, ptm("fileName"));
    var actionsProps = mergeProps(ptm("actions"));
    var fileName = /* @__PURE__ */ React.createElement("div", fileNameProps, file.name);
    var size = /* @__PURE__ */ React.createElement("div", fileSizeProps, formatSize(file.size));
    var contentBody = /* @__PURE__ */ React.createElement("div", detailsProps, /* @__PURE__ */ React.createElement("div", fileNameProps, " ", file.name), /* @__PURE__ */ React.createElement("span", fileSizeProps, formatSize(file.size)), /* @__PURE__ */ React.createElement(Badge, {
      className: "p-fileupload-file-badge",
      value: badgeOptions.value,
      severity: badgeOptions.severity,
      pt: ptm("badge"),
      __parentMetadata: {
        parent: metaData
      }
    }));
    var removeButton = /* @__PURE__ */ React.createElement("div", actionsProps, /* @__PURE__ */ React.createElement(Button, {
      type: "button",
      icon: props.removeIcon || /* @__PURE__ */ React.createElement(TimesIcon, null),
      text: true,
      rounded: true,
      severity: "danger",
      onClick: function onClick(e) {
        return onRemoveClick(e, badgeOptions, index);
      },
      disabled,
      pt: ptm("removeButton"),
      __parentMetadata: {
        parent: metaData
      },
      unstyled: isUnstyled()
    }));
    var content = /* @__PURE__ */ React.createElement(React.Fragment, null, preview, contentBody, removeButton);
    if (props.itemTemplate) {
      var defaultContentOptions = {
        onRemove: function onRemove(event) {
          return remove(event, index);
        },
        previewElement: preview,
        fileNameElement: fileName,
        sizeElement: size,
        removeElement: removeButton,
        formatSize: formatSize(file.size),
        element: content,
        index,
        props
      };
      content = ObjectUtils.getJSXElement(props.itemTemplate, file, defaultContentOptions);
    }
    var fileProps = mergeProps({
      key,
      className: cx("file")
    }, ptm("file"));
    return /* @__PURE__ */ React.createElement("div", fileProps, content);
  };
  var createFiles = function createFiles2() {
    var badgeOptions = {
      severity: "warning",
      value: localeOption("pending") || "Pending"
    };
    var content = filesState.map(function(file, index) {
      return createFile(file, index, badgeOptions);
    });
    return /* @__PURE__ */ React.createElement("div", null, content);
  };
  var createUploadedFiles = function createUploadedFiles2() {
    var badgeOptions = {
      severity: "success",
      value: localeOption("completed") || "Completed"
    };
    var content = uploadedFilesState && uploadedFilesState.map(function(file, index) {
      return createFile(file, index, badgeOptions);
    });
    return /* @__PURE__ */ React.createElement("div", null, content);
  };
  var createEmptyContent = function createEmptyContent2() {
    return props.emptyTemplate && !hasFiles && !hasUploadedFiles ? ObjectUtils.getJSXElement(props.emptyTemplate, props) : null;
  };
  var createProgressBarContent = function createProgressBarContent2() {
    if (props.progressBarTemplate) {
      var defaultProgressBarTemplateOptions = {
        progress: progressState,
        props
      };
      return ObjectUtils.getJSXElement(props.progressBarTemplate, defaultProgressBarTemplateOptions);
    }
    return /* @__PURE__ */ React.createElement(ProgressBar, {
      value: progressState,
      showValue: false,
      pt: ptm("progressbar"),
      __parentMetadata: {
        parent: metaData
      }
    });
  };
  var createAdvanced = function createAdvanced2() {
    var chooseButton2 = createChooseButton();
    var emptyContent = createEmptyContent();
    var uploadButton;
    var cancelButton;
    var filesList;
    var uplaodedFilesList;
    var progressBar;
    if (!props.auto) {
      var uploadOptions = props.uploadOptions;
      var cancelOptions = props.cancelOptions;
      var uploadLabel = !uploadOptions.iconOnly ? uploadButtonLabel : "";
      var cancelLabel = !cancelOptions.iconOnly ? cancelButtonLabel : "";
      var uploadIconProps = mergeProps({
        className: cx("uploadIcon", {
          iconOnly: uploadOptions.iconOnly
        }),
        "aria-hidden": "true"
      }, ptm("uploadIcon"));
      var uploadIcon2 = IconUtils.getJSXIcon(uploadOptions.icon || /* @__PURE__ */ React.createElement(UploadIcon, uploadIconProps), _objectSpread$2({}, uploadIconProps), {
        props
      });
      var cancelIconProps = mergeProps({
        className: cx("cancelIcon", {
          iconOnly: cancelOptions.iconOnly
        }),
        "aria-hidden": "true"
      }, ptm("cancelIcon"));
      var cancelIcon2 = IconUtils.getJSXIcon(cancelOptions.icon || /* @__PURE__ */ React.createElement(TimesIcon, cancelIconProps), _objectSpread$2({}, cancelIconProps), {
        props
      });
      uploadButton = /* @__PURE__ */ React.createElement(Button, {
        type: "button",
        label: uploadLabel,
        "aria-hidden": "true",
        icon: uploadIcon2,
        onClick: upload,
        disabled: uploadDisabled,
        style: uploadOptions.style,
        className: uploadOptions.className,
        pt: ptm("uploadButton"),
        __parentMetadata: {
          parent: metaData
        },
        unstyled: isUnstyled()
      });
      cancelButton = /* @__PURE__ */ React.createElement(Button, {
        type: "button",
        label: cancelLabel,
        "aria-hidden": "true",
        icon: cancelIcon2,
        onClick: clear,
        disabled: cancelDisabled,
        style: cancelOptions.style,
        className: cancelOptions.className,
        pt: ptm("cancelButton"),
        __parentMetadata: {
          parent: metaData
        },
        unstyled: isUnstyled()
      });
    }
    if (hasFiles) {
      filesList = createFiles();
      progressBar = createProgressBarContent();
    }
    if (hasUploadedFiles) {
      uplaodedFilesList = createUploadedFiles();
    }
    var buttonbarProps = mergeProps({
      className: classNames(props.headerClassName, cx("buttonbar")),
      style: props.headerStyle
    }, ptm("buttonbar"));
    var header = /* @__PURE__ */ React.createElement("div", buttonbarProps, chooseButton2, uploadButton, cancelButton);
    if (props.headerTemplate) {
      var defaultContentOptions = {
        className: classNames("p-fileupload-buttonbar", props.headerClassName),
        chooseButton: chooseButton2,
        uploadButton,
        cancelButton,
        element: header,
        props
      };
      header = ObjectUtils.getJSXElement(props.headerTemplate, defaultContentOptions);
    }
    var rootProps = mergeProps({
      id: props.id,
      className: classNames(props.className, cx("root")),
      style: props.style
    }, FileUploadBase.getOtherProps(props), ptm("root"));
    var contentProps = mergeProps({
      ref: contentRef,
      className: classNames(props.contentClassName, cx("content")),
      style: props.contentStyle,
      onDragEnter: function onDragEnter(e) {
        return _onDragEnter(e);
      },
      onDragOver: function onDragOver(e) {
        return _onDragOver(e);
      },
      onDragLeave: function onDragLeave(e) {
        return _onDragLeave(e);
      },
      onDrop: function onDrop(e) {
        return _onDrop(e);
      },
      "data-p-highlight": false
    }, ptm("content"));
    return /* @__PURE__ */ React.createElement("div", rootProps, header, /* @__PURE__ */ React.createElement("div", contentProps, progressBar, /* @__PURE__ */ React.createElement(Messages, {
      ref: messagesRef,
      __parentMetadata: {
        parent: metaData
      }
    }), hasFiles ? filesList : null, hasUploadedFiles ? uplaodedFilesList : null, emptyContent));
  };
  var createBasic = function createBasic2() {
    var chooseOptions = props.chooseOptions;
    var labelProps = mergeProps({
      className: cx("label")
    }, ptm("label"));
    var chooseLabel = chooseOptions.iconOnly ? /* @__PURE__ */ React.createElement("span", _extends$1({}, labelProps, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    })) : /* @__PURE__ */ React.createElement("span", labelProps, chooseButtonLabel);
    var label = props.auto ? chooseLabel : /* @__PURE__ */ React.createElement("span", labelProps, hasFiles ? props.selectedFileLabel || filesState[0].name : chooseLabel);
    var chooseIconProps = mergeProps({
      className: cx("chooseIcon", {
        iconOnly: chooseOptions.iconOnly
      })
    }, ptm("chooseIcon"));
    var icon = chooseOptions.icon ? chooseOptions.icon : !chooseOptions.icon && (!hasFiles || props.auto) ? /* @__PURE__ */ React.createElement(PlusIcon, chooseIconProps) : !chooseOptions.icon && hasFiles && !props.auto && /* @__PURE__ */ React.createElement(UploadIcon, chooseIconProps);
    var chooseIcon2 = IconUtils.getJSXIcon(icon, _objectSpread$2({}, chooseIconProps), {
      props,
      hasFiles
    });
    var inputProps = mergeProps({
      ref: fileInputRef,
      type: "file",
      onChange: function onChange(e) {
        return onFileSelect(e);
      },
      multiple: props.multiple,
      accept: props.accept,
      disabled
    }, ptm("input"));
    var input = !hasFiles && /* @__PURE__ */ React.createElement("input", inputProps);
    var rootProps = mergeProps({
      className: classNames(props.className, cx("root")),
      style: props.style
    }, FileUploadBase.getOtherProps(props), ptm("root"));
    var basicButtonProps = mergeProps({
      className: classNames(chooseOptions.className, cx("basicButton", {
        hasFiles,
        disabled,
        focusedState
      })),
      style: chooseOptions.style,
      tabIndex: 0,
      onClick: onSimpleUploaderClick,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      },
      onFocus,
      onBlur
    }, FileUploadBase.getOtherProps(props), ptm("basicButton"));
    return /* @__PURE__ */ React.createElement("div", rootProps, /* @__PURE__ */ React.createElement(Messages, {
      ref: messagesRef,
      pt: ptm("message"),
      __parentMetadata: {
        parent: metaData
      }
    }), /* @__PURE__ */ React.createElement("span", basicButtonProps, chooseIcon2, label, input, /* @__PURE__ */ React.createElement(Ripple, null)));
  };
  if (props.mode === "advanced") {
    return createAdvanced();
  } else if (props.mode === "basic") {
    return createBasic();
  }
}));
FileUpload.displayName = "FileUpload";
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
var classes = {
  root: function root5(_ref) {
    var props = _ref.props, context = _ref.context, isFilled = _ref.isFilled;
    return classNames("p-inputtextarea p-inputtext p-component", {
      "p-disabled": props.disabled,
      "p-filled": isFilled,
      "p-inputtextarea-resizable": props.autoResize,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  }
};
var styles = "\n@layer primereact {\n    .p-inputtextarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n    \n    .p-fluid .p-inputtextarea {\n        width: 100%;\n    }\n}\n";
var InputTextareaBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputTextarea",
    __parentMetadata: null,
    autoResize: false,
    invalid: false,
    variant: null,
    keyfilter: null,
    onBlur: null,
    onFocus: null,
    onBeforeInput: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onPaste: null,
    tooltip: null,
    tooltipOptions: null,
    validateOnly: false,
    children: void 0,
    className: null
  },
  css: {
    classes,
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
var InputTextarea = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = InputTextareaBase.getProps(inProps, context);
  var elementRef = React.useRef(ref);
  var cachedScrollHeight = React.useRef(0);
  var _InputTextareaBase$se = InputTextareaBase.setMetaData(_objectSpread(_objectSpread({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled: props.disabled
    }
  })), ptm = _InputTextareaBase$se.ptm, cx = _InputTextareaBase$se.cx, isUnstyled = _InputTextareaBase$se.isUnstyled;
  useHandleStyle(InputTextareaBase.css.styles, isUnstyled, {
    name: "inputtextarea"
  });
  var onFocus = function onFocus2(event) {
    if (props.autoResize) {
      resize();
    }
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur2(event) {
    if (props.autoResize) {
      resize();
    }
    props.onBlur && props.onBlur(event);
  };
  var onKeyUp = function onKeyUp2(event) {
    if (props.autoResize) {
      resize();
    }
    props.onKeyUp && props.onKeyUp(event);
  };
  var onKeyDown = function onKeyDown2(event) {
    props.onKeyDown && props.onKeyDown(event);
    if (props.keyfilter) {
      KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };
  var onBeforeInput = function onBeforeInput2(event) {
    props.onBeforeInput && props.onBeforeInput(event);
    if (props.keyfilter) {
      KeyFilter.onBeforeInput(event, props.keyfilter, props.validateOnly);
    }
  };
  var onPaste = function onPaste2(event) {
    props.onPaste && props.onPaste(event);
    if (props.keyfilter) {
      KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };
  var onInput = function onInput2(event) {
    var target = event.target;
    if (props.autoResize) {
      resize(ObjectUtils.isEmpty(target.value));
    }
    props.onInput && props.onInput(event);
    ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, "p-filled") : DomHandler.removeClass(target, "p-filled");
  };
  var resize = function resize2(initial) {
    var inputEl = elementRef.current;
    if (inputEl && isVisible()) {
      if (!cachedScrollHeight.current) {
        cachedScrollHeight.current = inputEl.scrollHeight;
        inputEl.style.overflow = "hidden";
      }
      if (cachedScrollHeight.current !== inputEl.scrollHeight || initial) {
        inputEl.style.height = "";
        inputEl.style.height = inputEl.scrollHeight + "px";
        if (parseFloat(inputEl.style.height) >= parseFloat(inputEl.style.maxHeight)) {
          inputEl.style.overflowY = "scroll";
          inputEl.style.height = inputEl.style.maxHeight;
        } else {
          inputEl.style.overflow = "hidden";
        }
        cachedScrollHeight.current = inputEl.scrollHeight;
      }
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
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  React.useEffect(function() {
    if (props.autoResize) {
      resize(true);
    }
  }, [props.autoResize, props.value]);
  var isFilled = React.useMemo(function() {
    return ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue);
  }, [props.value, props.defaultValue]);
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var rootProps = mergeProps({
    ref: elementRef,
    className: classNames(props.className, cx("root", {
      context,
      isFilled
    })),
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    onBeforeInput,
    onInput,
    onPaste
  }, InputTextareaBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("textarea", rootProps), hasTooltip && /* @__PURE__ */ React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
InputTextarea.displayName = "InputTextarea";
function BlogCategoryDialog({ visible, onHide, onCreated, toast }) {
  const [data, setData] = useState({ title: "", description: "" });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const reset = () => {
    setData({ title: "", description: "" });
    setErrors({});
  };
  const close = () => {
    if (saving) return;
    reset();
    onHide();
  };
  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setErrors({});
    try {
      const response = await axios.post("/blog-categories", data);
      onCreated(response.data.category);
      toast.current?.show({
        severity: "success",
        summary: "Category created",
        detail: "The new category is ready to use."
      });
      reset();
      onHide();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Unable to create category",
          detail: "Please try again."
        });
      }
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsx(
    Dialog,
    {
      header: "Create Category",
      visible,
      onHide: close,
      modal: true,
      draggable: false,
      className: "blog-category-dialog",
      footer: /* @__PURE__ */ jsxs("div", { className: "blog-category-dialog__footer", children: [
        /* @__PURE__ */ jsx(Button$1, { type: "button", variant: "secondary", onClick: close, disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsx(Button$1, { type: "submit", form: "blog-category-form", loading: saving, loadingLabel: "Saving category…", children: "Save category" })
      ] }),
      children: /* @__PURE__ */ jsxs("form", { id: "blog-category-form", className: "blog-form__fields", onSubmit: save, noValidate: true, children: [
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-category-title", children: [
            "Title ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            InputText,
            {
              id: "blog-category-title",
              value: data.title,
              maxLength: 255,
              autoFocus: true,
              invalid: Boolean(errors.title),
              "aria-invalid": Boolean(errors.title),
              "aria-describedby": errors.title ? "blog-category-title-error" : void 0,
              onChange: (event) => setData((current) => ({ ...current, title: event.target.value }))
            }
          ),
          errors.title && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-category-title-error", children: errors.title[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "blog-category-description", children: "Description" }),
          /* @__PURE__ */ jsx(
            InputTextarea,
            {
              id: "blog-category-description",
              value: data.description,
              rows: 4,
              autoResize: true,
              invalid: Boolean(errors.description),
              "aria-invalid": Boolean(errors.description),
              "aria-describedby": errors.description ? "blog-category-description-error" : void 0,
              onChange: (event) => setData((current) => ({ ...current, description: event.target.value }))
            }
          ),
          errors.description && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-category-description-error", children: errors.description[0] })
        ] })
      ] })
    }
  );
}
function RichTextEditor({
  id,
  value: value2,
  onChange,
  onBlur,
  placeholder = "Write something...",
  height = 360,
  readOnly = false
}) {
  const [Editor, setEditor] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const isDark = useSelector((state) => state.theme.resolved === "dark");
  const config = useMemo(
    () => ({
      height,
      minHeight: 240,
      width: "100%",
      readonly: readOnly,
      theme: isDark ? "dark" : "default",
      placeholder,
      toolbarAdaptive: true,
      toolbarSticky: false,
      toolbarButtonSize: "middle",
      buttonsMD: [
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "|",
        "align",
        "link",
        "image",
        "|",
        "undo",
        "redo"
      ],
      buttonsSM: ["bold", "italic", "|", "ul", "ol", "|", "link", "undo", "redo"],
      buttonsXS: ["bold", "italic", "|", "ul", "ol", "|", "undo", "redo"]
    }),
    [height, isDark, placeholder, readOnly]
  );
  useEffect(() => {
    let active = true;
    import("jodit-react").then(({ default: JoditEditor }) => {
      if (active) setEditor(() => JoditEditor);
    }).catch(() => {
      if (active) setLoadError(true);
    });
    return () => {
      active = false;
    };
  }, []);
  if (loadError) {
    return /* @__PURE__ */ jsx("div", { className: "rich-text-editor__loading p-error", role: "alert", children: "The rich-text editor could not be loaded. Refresh the page to try again." });
  }
  if (!Editor) {
    return /* @__PURE__ */ jsx("div", { className: "rich-text-editor__loading", "aria-live": "polite", children: "Loading editor..." });
  }
  return /* @__PURE__ */ jsx("div", { className: "rich-text-editor", children: /* @__PURE__ */ jsx(
    Editor,
    {
      id,
      config,
      value: value2,
      onChange: (content) => onChange(content),
      onBlur: (content) => {
        if (typeof content === "string") onChange(content);
        onBlur?.();
      }
    }
  ) });
}
const maximumImageSize = 2 * 1024 * 1024;
const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
function imageError(file) {
  if (!file) return "Please choose a cover image.";
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(extension) || file.size > maximumImageSize) {
    return "Choose a JPG, PNG, or WEBP image up to 2MB.";
  }
  return "";
}
function hasPlainText(value2) {
  const container = document.createElement("div");
  container.innerHTML = value2;
  return Boolean((container.textContent || container.innerText || "").replace(/\u00a0/g, " ").trim());
}
function validateImageLoads(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(true);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false);
    };
    image.src = url;
  });
}
function BlogForm({ blog = null, categories: initialCategories = [] }) {
  const isEdit = Boolean(blog);
  const toast = useRef(null);
  const [categories, setCategories] = useState(initialCategories);
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(blog?.image_url || null);
  const [saving, setSaving] = useState(false);
  const {
    data,
    setData,
    errors,
    setError,
    clearErrors
  } = useForm({
    title: blog?.title || "",
    description: blog?.description || "",
    overview: blog?.overview || "",
    blog_categories_id: blog?.blog_categories_id || null,
    reading_time: blog?.reading_time || 1,
    image: null,
    is_published: blog?.is_published || false
  });
  useEffect(() => {
    if (!data.image) {
      setPreviewUrl(blog?.image_url || null);
      return void 0;
    }
    const url = URL.createObjectURL(data.image);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [data.image, blog?.image_url]);
  const onCategoryCreated = (category) => {
    setCategories((current) => [...current, category].sort((a, b) => a.title.localeCompare(b.title)));
    setData("blog_categories_id", category.id);
    clearErrors("blog_categories_id");
  };
  const onImageSelected = async (event) => {
    const file = event.files[0];
    if (!file) return;
    const error = imageError(file);
    if (error) {
      setData("image", null);
      setError("image", error);
      return;
    }
    if (!await validateImageLoads(file)) {
      setData("image", null);
      setError("image", "This image could not be opened. Please choose a valid image.");
      return;
    }
    setData("image", file);
    clearErrors("image");
  };
  const submit = (event) => {
    event.preventDefault();
    if (!data.title.trim()) setError("title", "Please enter a title.");
    if (!hasPlainText(data.description)) setError("description", "Please enter the blog content.");
    if (!hasPlainText(data.overview)) setError("overview", "Please enter an overview.");
    if (!data.blog_categories_id) setError("blog_categories_id", "Please select a category.");
    if (!isEdit && !data.image) setError("image", "Please choose a cover image.");
    if (!data.title.trim() || !hasPlainText(data.description) || !hasPlainText(data.overview) || !data.blog_categories_id || !isEdit && !data.image) return;
    const url = isEdit ? `/dashboard/blogs/${blog.id}` : "/dashboard/blogs";
    setSaving(true);
    router.post(url, {
      ...data,
      ...isEdit ? { _method: "put" } : {}
    }, {
      forceFormData: true,
      onError: (serverErrors) => {
        setError(serverErrors);
        toast.current?.show({
          severity: "error",
          summary: "Unable to save blog",
          detail: "Review the highlighted fields and try again."
        });
      },
      onHttpException: () => toast.current?.show({
        severity: "error",
        summary: "Unable to save blog",
        detail: "The server could not save your blog. Please try again."
      }),
      onException: () => toast.current?.show({
        severity: "error",
        summary: "Unable to save blog",
        detail: "A network error interrupted the request. Please try again."
      }),
      onFinish: () => setSaving(false)
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: isEdit ? "Edit Article" : "Create Article" }),
    /* @__PURE__ */ jsx(Toast, { ref: toast, position: "top-right" }),
    /* @__PURE__ */ jsx(
      BlogCategoryDialog,
      {
        visible: categoryDialogVisible,
        onHide: () => setCategoryDialogVisible(false),
        onCreated: onCategoryCreated,
        toast
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "admin-page blog-form-page", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header blog-form-page__header", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { children: isEdit ? "Edit Article" : "Create Article" }),
          /* @__PURE__ */ jsx("p", { children: isEdit ? "Update your blog details and cover image." : "Add details and prepare your article for publishing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form-page__actions", children: [
          /* @__PURE__ */ jsx(Button$1, { href: "/dashboard/blogs", variant: "secondary", children: "Cancel" }),
          /* @__PURE__ */ jsx(
            Button$1,
            {
              type: "submit",
              form: "blog-form",
              loading: saving,
              loadingLabel: isEdit ? "Saving changes…" : "Creating article…",
              leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-check", "aria-hidden": "true" }),
              children: isEdit ? "Save changes" : "Create Article"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "admin-page__card blog-form__card", children: /* @__PURE__ */ jsx("form", { id: "blog-form", onSubmit: submit, noValidate: true, children: /* @__PURE__ */ jsxs("div", { className: "blog-form__fields", children: [
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-title", children: [
            "Title ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            InputText,
            {
              id: "blog-title",
              value: data.title,
              maxLength: 255,
              invalid: Boolean(errors.title),
              "aria-invalid": Boolean(errors.title),
              "aria-describedby": errors.title ? "blog-title-error" : void 0,
              onChange: (event) => {
                setData("title", event.target.value);
                clearErrors("title");
              }
            }
          ),
          errors.title && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-title-error", children: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field blog-form__reading-time", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-reading-time", children: [
            "Reading time (minutes) ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            InputText,
            {
              id: "blog-reading-time",
              type: "number",
              inputMode: "numeric",
              min: "1",
              max: "300",
              step: "1",
              value: data.reading_time,
              invalid: Boolean(errors.reading_time),
              "aria-invalid": Boolean(errors.reading_time),
              "aria-describedby": errors.reading_time ? "blog-reading-time-error" : "blog-reading-time-hint",
              onChange: (event) => {
                setData("reading_time", event.target.value);
                clearErrors("reading_time");
              }
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "blog-form__hint", id: "blog-reading-time-hint", children: "Enter a number from 1 to 300 minutes." }),
          errors.reading_time && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-reading-time-error", children: errors.reading_time })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-overview", children: [
            "Overview ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `blog-form__editor${errors.overview ? " p-invalid" : ""}`, children: /* @__PURE__ */ jsx(
            RichTextEditor,
            {
              id: "blog-overview",
              value: data.overview,
              onChange: (value2) => {
                setData("overview", value2);
                clearErrors("overview");
              },
              placeholder: "Summarize the blog...",
              height: 200
            }
          ) }),
          errors.overview && /* @__PURE__ */ jsx("small", { className: "p-error", children: errors.overview })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-description", children: [
            "Content ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `blog-form__editor${errors.description ? " p-invalid" : ""}`, children: /* @__PURE__ */ jsx(
            RichTextEditor,
            {
              id: "blog-description",
              value: data.description,
              onChange: (value2) => {
                setData("description", value2);
                clearErrors("description");
              },
              placeholder: "Write the blog content...",
              height: 360
            }
          ) }),
          errors.description && /* @__PURE__ */ jsx("small", { className: "p-error", children: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-category", children: [
            "Category ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blog-form__category-row", children: [
            /* @__PURE__ */ jsx(
              Dropdown,
              {
                inputId: "blog-category",
                value: data.blog_categories_id,
                options: categories,
                optionLabel: "title",
                optionValue: "id",
                placeholder: "Select a category",
                emptyMessage: "No categories found",
                emptyFilterMessage: "No categories found",
                filter: true,
                showClear: true,
                className: errors.blog_categories_id ? "p-invalid" : "",
                "aria-invalid": Boolean(errors.blog_categories_id),
                "aria-describedby": errors.blog_categories_id ? "blog-category-error" : void 0,
                onChange: (event) => {
                  setData("blog_categories_id", event.value);
                  clearErrors("blog_categories_id");
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Button$1,
              {
                type: "button",
                leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-plus", "aria-hidden": "true" }),
                onClick: () => setCategoryDialogVisible(true),
                children: "Create Category"
              }
            )
          ] }),
          errors.blog_categories_id && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-category-error", children: errors.blog_categories_id })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__field", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "blog-image-input", children: [
            "Cover image ",
            !isEdit && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(
            FileUpload,
            {
              id: "blog-image",
              mode: "basic",
              name: "image",
              accept: "image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp",
              maxFileSize: maximumImageSize,
              customUpload: true,
              auto: false,
              chooseLabel: data.image ? "Replace image" : "Choose image",
              chooseOptions: {
                icon: "pi pi-upload",
                className: "app-button app-button--secondary app-button--md"
              },
              onSelect: onImageSelected,
              onValidationFail: () => setError("image", "Choose a JPG, PNG, or WEBP image up to 2MB."),
              pt: {
                input: {
                  id: "blog-image-input",
                  "aria-invalid": Boolean(errors.image),
                  "aria-describedby": errors.image ? "blog-image-hint blog-image-error" : "blog-image-hint"
                },
                chooseButton: { "aria-label": "Choose blog cover image" }
              }
            }
          ),
          /* @__PURE__ */ jsx("small", { className: "blog-form__hint", id: "blog-image-hint", children: "JPG, PNG, or WEBP, up to 2MB." }),
          previewUrl && /* @__PURE__ */ jsxs("div", { className: "blog-form__image-preview", children: [
            /* @__PURE__ */ jsx("img", { src: previewUrl, alt: "Blog cover preview" }),
            data.image && /* @__PURE__ */ jsx(
              Button$1,
              {
                type: "button",
                variant: "ghost",
                leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-times", "aria-hidden": "true" }),
                onClick: () => {
                  setData("image", null);
                  clearErrors("image");
                },
                children: isEdit ? "Use current image" : "Remove image"
              }
            )
          ] }),
          errors.image && /* @__PURE__ */ jsx("small", { className: "p-error", id: "blog-image-error", children: errors.image })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "blog-form__publish", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "blog-is-published",
              className: "blog-form__checkbox",
              checked: Boolean(data.is_published),
              onChange: (event) => setData("is_published", event.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "blog-is-published", children: "Publish this blog" })
        ] })
      ] }) }) })
    ] })
  ] });
}
BlogForm.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  BlogForm as B
};
//# sourceMappingURL=BlogForm-Cje94Ytt.js.map
