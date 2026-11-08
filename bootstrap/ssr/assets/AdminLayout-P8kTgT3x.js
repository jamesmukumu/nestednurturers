import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { usePage, router, Link } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { P as PrimeReactContext, D as DomHandler, c as classNames, O as ObjectUtils, I as IconUtils, U as UniqueComponentId, Z as ZIndexUtils, b as PrimeReact, s as setMobileSidebarOpen, t as toggleSidebarCollapsed } from "../ssr.js";
import { I as IconBase, u as useMergeProps, a as useHandleStyle, C as ComponentBase, d as useMountEffect, k as useDisplayOrder, l as useGlobalOnEscapeKey, E as ESC_KEY_HANDLING_PRIORITIES, h as useOverlayListener, c as useUnmountEffect, P as Portal, R as Ripple, B as Button, T as Tooltip } from "./button.esm-DFXl1vmj.js";
import { I as InputText } from "./inputtext.esm-COqCfzPS.js";
import { C as CSSTransition, O as OverlayService } from "./overlayservice.esm-Cnx_LE1W.js";
import { S as Sidebar } from "./sidebar.esm-BweA3SBs.js";
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
var ChevronRightIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }));
}));
ChevronRightIcon.displayName = "ChevronRightIcon";
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
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function _arrayWithHoles$2(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$2(r, l) {
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
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(r, e) {
  return _arrayWithHoles$2(r) || _iterableToArrayLimit$2(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest$2();
}
var classes$2 = {
  root: function root(_ref) {
    var props = _ref.props, state = _ref.state;
    return classNames("p-avatar p-component", {
      "p-avatar-image": ObjectUtils.isNotEmpty(props.image) && !state.imageFailed,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge",
      "p-avatar-clickable": !!props.onClick
    });
  },
  label: "p-avatar-text",
  icon: "p-avatar-icon"
};
var styles$2 = "\n@layer primereact {\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 2rem;\n        height: 2rem;\n        font-size: 1rem;\n    }\n    \n    .p-avatar.p-avatar-image {\n        background-color: transparent;\n    }\n    \n    .p-avatar.p-avatar-circle {\n        border-radius: 50%;\n    }\n    \n    .p-avatar.p-avatar-circle img {\n        border-radius: 50%;\n    }\n    \n    .p-avatar .p-avatar-icon {\n        font-size: 1rem;\n    }\n    \n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n    \n    .p-avatar-clickable {\n        cursor: pointer;\n    }\n}\n";
var AvatarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Avatar",
    className: null,
    icon: null,
    image: null,
    imageAlt: "avatar",
    imageFallback: "default",
    label: null,
    onImageError: null,
    shape: "square",
    size: "normal",
    style: null,
    template: null,
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
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Avatar = /* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = AvatarBase.getProps(inProps, context);
  var elementRef = React.useRef(null);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray$2(_React$useState, 2), imageFailed = _React$useState2[0], setImageFailed = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray$2(_React$useState3, 2), nested = _React$useState4[0], setNested = _React$useState4[1];
  var _AvatarBase$setMetaDa = AvatarBase.setMetaData({
    props,
    state: {
      imageFailed,
      nested
    }
  }), ptm = _AvatarBase$setMetaDa.ptm, cx = _AvatarBase$setMetaDa.cx, isUnstyled = _AvatarBase$setMetaDa.isUnstyled;
  useHandleStyle(AvatarBase.css.styles, isUnstyled, {
    name: "avatar"
  });
  var createContent = function createContent2() {
    if (ObjectUtils.isNotEmpty(props.image) && !imageFailed) {
      var imageProps = mergeProps({
        src: props.image,
        onError: onImageError
      }, ptm("image"));
      return /* @__PURE__ */ React.createElement("img", _extends$2({
        alt: props.imageAlt
      }, imageProps));
    } else if (props.label) {
      var labelProps = mergeProps({
        className: cx("label")
      }, ptm("label"));
      return /* @__PURE__ */ React.createElement("span", labelProps, props.label);
    } else if (props.icon) {
      var iconProps = mergeProps({
        className: cx("icon")
      }, ptm("icon"));
      return IconUtils.getJSXIcon(props.icon, _objectSpread$2({}, iconProps), {
        props
      });
    }
    return null;
  };
  var onImageError = function onImageError2(event) {
    if (props.imageFallback === "default") {
      if (!props.onImageError) {
        setImageFailed(true);
        event.target.src = null;
      }
    } else {
      event.target.src = props.imageFallback;
    }
    props.onImageError && props.onImageError(event);
  };
  React.useEffect(function() {
    var nested2 = DomHandler.isAttributeEquals(elementRef.current.parentElement, "data-pc-name", "avatargroup");
    setNested(nested2);
  }, []);
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
    className: classNames(props.className, cx("root", {
      imageFailed
    }))
  }, AvatarBase.getOtherProps(props), ptm("root"));
  var content2 = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();
  return /* @__PURE__ */ React.createElement("div", rootProps, content2, props.children);
});
Avatar.displayName = "Avatar";
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
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
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$1(r, l) {
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
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
var classes$1 = {
  icon: "p-menuitem-icon",
  action: "p-menuitem-link",
  label: "p-menuitem-text",
  home: function home(_ref) {
    var _className = _ref._className, disabled = _ref.disabled;
    return classNames("p-breadcrumb-home p-menuitem", {
      "p-disabled": disabled
    }, _className);
  },
  separatorIcon: "p-breadcrumb-chevron",
  separator: "p-menuitem-separator",
  menuitem: function menuitem(_ref2) {
    var item = _ref2.item;
    return classNames("p-menuitem", item.className, {
      "p-disabled": item.disabled
    });
  },
  menu: "p-breadcrumb-list",
  root: "p-breadcrumb p-component"
};
var styles$1 = "\n@layer primereact {\n    .p-breadcrumb {\n        overflow-x: auto;\n        display: flex;\n    }\n\n    .p-breadcrumb ol {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        display: flex;\n        align-items: center;\n        flex-wrap: nowrap;\n    }\n\n    .p-breadcrumb .p-menuitem-text {\n        line-height: 1;\n    }\n\n    .p-breadcrumb .p-menuitem-link {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n    }\n\n    .p-breadcrumb .p-menuitem-separator {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-breadcrumb::-webkit-scrollbar {\n        display: none;\n    }\n}\n";
var BreadCrumbBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "BreadCrumb",
    id: null,
    model: null,
    home: null,
    separatorIcon: null,
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
var BreadCrumb = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = BreadCrumbBase.getProps(inProps, context);
  var _React$useState = React.useState(props.id), _React$useState2 = _slicedToArray$1(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var elementRef = React.useRef(null);
  var _BreadCrumbBase$setMe = BreadCrumbBase.setMetaData({
    props,
    state: {
      id: idState
    }
  }), ptm = _BreadCrumbBase$setMe.ptm, cx = _BreadCrumbBase$setMe.cx, isUnstyled = _BreadCrumbBase$setMe.isUnstyled;
  useHandleStyle(BreadCrumbBase.css.styles, isUnstyled, {
    name: "breadcrumb"
  });
  var itemClick = function itemClick2(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (!item.url) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var isCurrent = function isCurrent2(url) {
    var lastPath = typeof window !== "undefined" ? window.location.pathname : "";
    return url === lastPath ? "page" : void 0;
  };
  var createHome = function createHome2() {
    var home3 = props.home;
    if (home3) {
      if (home3.visible === false) {
        return null;
      }
      var _icon = home3.icon, target = home3.target, url = home3.url, disabled = home3.disabled, style = home3.style, _className = home3.className, template = home3.template, _label = home3.label;
      var iconProps = mergeProps({
        className: cx("icon")
      }, ptm("icon"));
      var icon = IconUtils.getJSXIcon(_icon, _objectSpread$1({}, iconProps), {
        props
      });
      var actionProps = mergeProps({
        href: url || "#",
        className: cx("action"),
        "aria-disabled": disabled,
        "aria-current": isCurrent(url),
        target,
        onClick: function onClick(event) {
          return itemClick(event, home3);
        }
      }, ptm("action"));
      var labelProps = mergeProps({
        className: cx("label")
      }, ptm("label"));
      var label = _label && /* @__PURE__ */ React.createElement("span", labelProps, _label);
      var content2 = /* @__PURE__ */ React.createElement("a", actionProps, icon, label);
      if (template) {
        var defaultContentOptions = {
          onClick: function onClick(event) {
            return itemClick(event, home3);
          },
          className: "p-menuitem-link",
          labelClassName: "p-menuitem-text",
          element: content2,
          props
        };
        content2 = ObjectUtils.getJSXElement(template, home3, defaultContentOptions);
      }
      var key = idState + "_home";
      var menuitemProps = mergeProps({
        id: key,
        className: cx("home", {
          _className,
          disabled
        }),
        style
      }, ptm("home"));
      return /* @__PURE__ */ React.createElement("li", _extends$1({}, menuitemProps, {
        key
      }), content2);
    }
    return null;
  };
  var createSeparator = function createSeparator2(index) {
    var key = idState + "_sep_" + index;
    var separatorIconProps = mergeProps({
      className: cx("separatorIcon"),
      "aria-hidden": "true"
    }, ptm("separatorIcon"));
    var icon = props.separatorIcon || /* @__PURE__ */ React.createElement(ChevronRightIcon, separatorIconProps);
    var separatorIcon = IconUtils.getJSXIcon(icon, _objectSpread$1({}, separatorIconProps), {
      props
    });
    var separatorProps = mergeProps({
      id: key,
      className: cx("separator"),
      role: "separator"
    }, ptm("separator"));
    return /* @__PURE__ */ React.createElement("li", _extends$1({}, separatorProps, {
      key
    }), separatorIcon);
  };
  var createMenuitem = function createMenuitem2(item, index) {
    if (item.visible === false) {
      return null;
    }
    var labelProps = mergeProps({
      className: cx("label")
    }, ptm("label"));
    var label = item.label && /* @__PURE__ */ React.createElement("span", labelProps, item.label);
    var actionProps = mergeProps({
      href: item.url || "#",
      className: cx("action"),
      target: item.target,
      "aria-current": isCurrent(item.url),
      onClick: function onClick(event) {
        return itemClick(event, item);
      },
      "aria-disabled": item.disabled,
      tabIndex: item.disabled ? -1 : void 0
    }, ptm("action"));
    var content2 = /* @__PURE__ */ React.createElement("a", actionProps, label);
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return itemClick(event, item);
        },
        className: "p-menuitem-link",
        labelClassName: "p-menuitem-text",
        element: content2,
        props
      };
      content2 = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    var key = item.id || idState + "_" + index;
    var menuitemProps = mergeProps({
      id: key,
      className: cx("menuitem", {
        item
      }),
      style: item.style
    }, ptm("menuitem"));
    return /* @__PURE__ */ React.createElement("li", _extends$1({}, menuitemProps, {
      key
    }), content2);
  };
  var createMenuitems = function createMenuitems2() {
    if (props.model) {
      var _items = props.model.map(function(item, index) {
        if (item.visible === false) {
          return null;
        }
        var menuitem4 = createMenuitem(item, index);
        var separator2 = index === props.model.length - 1 ? null : createSeparator(index);
        var key = idState + "_" + index;
        return /* @__PURE__ */ React.createElement(React.Fragment, {
          key
        }, menuitem4, separator2);
      });
      return _items;
    }
    return null;
  };
  useMountEffect(function() {
    if (!idState) {
      setIdState(UniqueComponentId());
    }
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var home2 = createHome();
  var items = createMenuitems();
  var separator = createSeparator("home");
  var menuProps = mergeProps({
    className: cx("menu")
  }, ptm("menu"));
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    className: classNames(props.className, cx("root")),
    style: props.style
  }, BreadCrumbBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("nav", rootProps, /* @__PURE__ */ React.createElement("ol", menuProps, home2, home2 && !!(items !== null && items !== void 0 && items.length) && separator, items));
}));
BreadCrumb.displayName = "BreadCrumb";
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
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
var styles = "\n@layer primereact {\n    .p-menu-overlay {\n        position: absolute;\n        /* Github #3122: Prevent animation flickering  */\n        top: -9999px;\n        left: -9999px;\n    }\n\n    .p-menu ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    .p-menu .p-menuitem-text {\n        line-height: 1;\n    }\n}\n";
var classes = {
  root: function root2(_ref) {
    var props = _ref.props, context = _ref.context;
    return classNames("p-menu p-component", {
      "p-menu-overlay": props.popup,
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  menu: "p-menu-list p-reset",
  content: function content(_ref2) {
    var item = _ref2.item;
    return classNames("p-menuitem-content", {
      "p-disabled": item.disabled
    });
  },
  action: function action(_ref3) {
    var item = _ref3.item;
    return classNames("p-menuitem-link", {
      "p-disabled": item.disabled
    });
  },
  menuitem: function menuitem2(_ref4) {
    var focused = _ref4.focused;
    return classNames("p-menuitem", {
      "p-focus": focused
    });
  },
  submenuHeader: function submenuHeader(_ref5) {
    var submenu = _ref5.submenu;
    return classNames("p-submenu-header", {
      "p-disabled": submenu.disabled
    });
  },
  separator: "p-menu-separator",
  label: "p-menuitem-text",
  icon: "p-menuitem-icon",
  transition: "p-connected-overlay"
};
var inlineStyles = {
  submenuHeader: function submenuHeader2(_ref6) {
    var submenu = _ref6.submenu;
    return submenu.style;
  },
  menuitem: function menuitem3(_ref7) {
    var item = _ref7.item;
    return item.style;
  }
};
var MenuBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Menu",
    id: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    tabIndex: 0,
    model: null,
    popup: false,
    popupAlignment: "left",
    style: null,
    className: null,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    onFocus: null,
    onBlur: null,
    transitionOptions: null,
    onShow: null,
    onHide: null,
    children: void 0,
    closeOnEscape: true
  },
  css: {
    classes,
    styles,
    inlineStyles
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
var Menu = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = MenuBase.getProps(inProps, context);
  var _React$useState = React.useState(props.id), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React.useState(!props.popup), _React$useState4 = _slicedToArray(_React$useState3, 2), visibleState = _React$useState4[0], setVisibleState = _React$useState4[1];
  var _React$useState5 = React.useState(-1), _React$useState6 = _slicedToArray(_React$useState5, 2), focusedOptionIndex = _React$useState6[0], setFocusedOptionIndex = _React$useState6[1];
  var _React$useState7 = React.useState(-1), _React$useState8 = _slicedToArray(_React$useState7, 2), selectedOptionIndex = _React$useState8[0], setSelectedOptionIndex = _React$useState8[1];
  var _React$useState9 = React.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), focused = _React$useState10[0], setFocused = _React$useState10[1];
  var _MenuBase$setMetaData = MenuBase.setMetaData({
    props,
    state: {
      id: idState,
      visible: visibleState,
      focused
    }
  }), ptm = _MenuBase$setMetaData.ptm, cx = _MenuBase$setMetaData.cx, sx = _MenuBase$setMetaData.sx, isUnstyled = _MenuBase$setMetaData.isUnstyled;
  var getMenuItemPTOptions = function getMenuItemPTOptions2(key, menuContext) {
    return ptm(key, {
      context: menuContext
    });
  };
  useHandleStyle(MenuBase.css.styles, isUnstyled, {
    name: "menu"
  });
  var menuRef = React.useRef(null);
  var listRef = React.useRef(null);
  var targetRef = React.useRef(null);
  var isCloseOnEscape = !!(visibleState && props.popup && props.closeOnEscape);
  var popupMenuDisplayOrder = useDisplayOrder("menu", isCloseOnEscape);
  useGlobalOnEscapeKey({
    callback: function callback(event) {
      hide(event);
    },
    when: isCloseOnEscape && popupMenuDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.MENU, popupMenuDisplayOrder]
  });
  var _useOverlayListener = useOverlayListener({
    target: targetRef,
    overlay: menuRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid, type = _ref.type;
      if (valid) {
        if (context.hideOverlaysOnDocumentScrolling || type === "outside") {
          hide(event);
          setFocusedOptionIndex(-1);
        } else if (!DomHandler.isDocument(event.target)) {
          DomHandler.absolutePosition(menuRef.current, targetRef.current, props.popupAlignment);
        }
      }
    },
    when: visibleState
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var onPanelClick = function onPanelClick2(event) {
    if (props.popup) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: targetRef.current
      });
    }
  };
  var onItemClick = function onItemClick2(event, item, key) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (props.popup) {
      hide(event);
    }
    if (!props.popup && focusedOptionIndex !== key) {
      setFocusedOptionIndex(key);
    }
    if (!item.url) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  var onItemMouseMove = function onItemMouseMove2(event, key) {
    if (event && props.popup && focusedOptionIndex !== key) {
      setFocusedOptionIndex(key);
    }
  };
  var onListFocus = function onListFocus2(event) {
    setFocused(true);
    if (!props.popup) {
      if (selectedOptionIndex !== -1) {
        changeFocusedOptionIndex(selectedOptionIndex);
        setSelectedOptionIndex(-1);
      } else {
        changeFocusedOptionIndex(0);
      }
    }
    props.onFocus && props.onFocus(event);
  };
  var onListBlur = function onListBlur2(event) {
    var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
    if (relatedTarget && currentTarget.contains(relatedTarget)) return;
    setFocused(false);
    setFocusedOptionIndex(-1);
    props.onBlur && props.onBlur(event);
  };
  var onListKeyDown = function onListKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDownKey(event);
        break;
      case "ArrowUp":
        onArrowUpKey(event);
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        onEnterKey(event);
        break;
      case "Space":
        onSpaceKey(event);
        break;
      case "Escape":
        if (props.popup) {
          DomHandler.focus(targetRef.current);
          hide(event);
        }
      case "Tab":
        props.popup && visibleState && hide(event);
        break;
    }
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    var optionIndex = findNextOptionIndex(focusedOptionIndex);
    changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    if (event.altKey && props.popup) {
      DomHandler.focus(targetRef.current);
      hide(event);
      event.preventDefault();
    } else {
      var optionIndex = findPrevOptionIndex(focusedOptionIndex);
      changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  };
  var onHomeKey = function onHomeKey2(event) {
    changeFocusedOptionIndex(0);
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    changeFocusedOptionIndex(DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  };
  var onEnterKey = function onEnterKey2(event) {
    var element2 = DomHandler.findSingle(menuRef.current, 'li[id="'.concat("".concat(focusedOptionIndex), '"]'));
    var anchorElement = element2 && DomHandler.findSingle(element2, 'a[data-pc-section="action"]');
    props.popup && DomHandler.focus(targetRef.current);
    anchorElement ? anchorElement.click() : element2 && element2.click();
    event.preventDefault();
  };
  var onSpaceKey = function onSpaceKey2(event) {
    onEnterKey(event);
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
      return link.id === index;
    });
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
      return link.id === index;
    });
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(index) {
    var links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    var order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
    order > -1 && setFocusedOptionIndex(links[order].getAttribute("id"));
  };
  var focusedOptionId = function focusedOptionId2() {
    return focusedOptionIndex !== -1 ? focusedOptionIndex : null;
  };
  var toggle = function toggle2(event) {
    if (props.popup) {
      visibleState ? hide(event) : show(event);
    }
  };
  var show = function show2(event) {
    targetRef.current = event.currentTarget;
    setVisibleState(true);
    props.onShow && props.onShow(event);
  };
  var hide = function hide2(event) {
    targetRef.current = event.currentTarget;
    setVisibleState(false);
    props.onHide && props.onHide(event);
  };
  var onEnter = function onEnter2() {
    DomHandler.addStyles(menuRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    ZIndexUtils.set("menu", menuRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.menu || PrimeReact.zIndex.menu);
    DomHandler.absolutePosition(menuRef.current, targetRef.current, props.popupAlignment);
    if (props.popup) {
      DomHandler.focus(listRef.current);
      changeFocusedOptionIndex(0);
    }
  };
  var onEntered = function onEntered2() {
    bindOverlayListener();
  };
  var onExit = function onExit2() {
    targetRef.current = null;
    unbindOverlayListener();
  };
  var onExited = function onExited2() {
    ZIndexUtils.clear(menuRef.current);
  };
  useMountEffect(function() {
    if (!idState) {
      setIdState(UniqueComponentId());
    }
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(menuRef.current);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      toggle,
      show,
      hide,
      getElement: function getElement() {
        return menuRef.current;
      },
      getTarget: function getTarget() {
        return targetRef.current;
      }
    };
  });
  var createSubmenu = function createSubmenu2(submenu, index) {
    var key = idState + "_sub_" + index;
    var items = submenu.items.map(function(item, index2) {
      return createMenuItem(item, index2, key);
    });
    var submenuHeaderProps = mergeProps({
      id: key,
      role: "none",
      className: classNames(submenu.className, cx("submenuHeader", {
        submenu
      })),
      style: sx("submenuHeader", {
        submenu
      }),
      "data-p-disabled": submenu.disabled
    }, ptm("submenuHeader"));
    return /* @__PURE__ */ React.createElement(React.Fragment, {
      key
    }, /* @__PURE__ */ React.createElement("li", _extends({}, submenuHeaderProps, {
      key
    }), submenu.label), items);
  };
  var createSeparator = function createSeparator2(item, index) {
    if (item.visible === false) {
      return null;
    }
    var key = idState + "_separator_" + index;
    var separatorProps = mergeProps({
      id: key,
      className: classNames(item.className, cx("separator")),
      role: "separator"
    }, ptm("separator"));
    return /* @__PURE__ */ React.createElement("li", _extends({}, separatorProps, {
      key
    }));
  };
  var createMenuItem = function createMenuItem2(item, index) {
    var parentId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (item.visible === false) {
      return null;
    }
    var menuContext = {
      item,
      index,
      parentId
    };
    var linkClassName = classNames("p-menuitem-link", {
      "p-disabled": item.disabled
    });
    var iconClassName = classNames("p-menuitem-icon", item.icon);
    var iconProps = mergeProps({
      className: cx("icon")
    }, getMenuItemPTOptions("icon", menuContext));
    var icon = IconUtils.getJSXIcon(item.icon, _objectSpread({}, iconProps), {
      props
    });
    var labelProps = mergeProps({
      className: cx("label")
    }, getMenuItemPTOptions("label", menuContext));
    var label = item.label && /* @__PURE__ */ React.createElement("span", labelProps, item.label);
    var key = item.id || (parentId || idState) + "_" + index;
    var contentProps = mergeProps({
      onClick: function onClick(event) {
        return onItemClick(event, item, key);
      },
      onMouseMove: function onMouseMove(event) {
        return onItemMouseMove(event, key);
      },
      className: cx("content", {
        item
      })
    }, getMenuItemPTOptions("content", menuContext));
    var actionProps = mergeProps({
      href: item.url || "#",
      className: cx("action", {
        item
      }),
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      },
      target: item.target,
      tabIndex: "-1",
      "aria-label": item.label,
      "aria-disabled": item.disabled,
      "data-p-disabled": item.disabled
    }, getMenuItemPTOptions("action", menuContext));
    var content2 = /* @__PURE__ */ React.createElement("div", contentProps, /* @__PURE__ */ React.createElement("a", actionProps, icon, label, /* @__PURE__ */ React.createElement(Ripple, null)));
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return onItemClick(event, item, key);
        },
        onMouseMove: function onMouseMove(event) {
          return onItemMouseMove(event, key);
        },
        className: linkClassName,
        tabIndex: "-1",
        labelClassName: "p-menuitem-text",
        iconClassName,
        element: content2,
        props
      };
      content2 = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    var menuitemProps = mergeProps({
      id: key,
      className: classNames(item.className, cx("menuitem", {
        focused: focusedOptionIndex === key
      })),
      onClick: function onClick(event) {
        return onItemClick(event, item, key);
      },
      style: sx("menuitem", {
        item
      }),
      role: "menuitem",
      "aria-label": item.label,
      "aria-disabled": item.disabled,
      "data-p-focused": focusedOptionId() === key,
      "data-p-disabled": item.disabled || false
    }, getMenuItemPTOptions("menuitem", menuContext));
    return /* @__PURE__ */ React.createElement("li", _extends({}, menuitemProps, {
      key
    }), content2);
  };
  var createItem = function createItem2(item, index) {
    if (item.visible === false) {
      return null;
    }
    return item.separator ? createSeparator(item, index) : item.items ? createSubmenu(item, index) : createMenuItem(item, index);
  };
  var createMenu = function createMenu2() {
    return props.model.map(createItem);
  };
  var createElement = function createElement2() {
    if (props.model) {
      var menuitems = createMenu();
      var rootProps = mergeProps({
        className: classNames(props.className, cx("root", {
          context
        })),
        style: props.style,
        onClick: function onClick(e) {
          return onPanelClick(e);
        }
      }, MenuBase.getOtherProps(props), ptm("root"));
      var menuProps = mergeProps({
        ref: listRef,
        className: cx("menu"),
        id: idState + "_list",
        tabIndex: props.tabIndex || "0",
        role: "menu",
        "aria-label": props.ariaLabel,
        "aria-labelledby": props.ariaLabelledBy,
        "aria-activedescendant": focused ? focusedOptionId() : void 0,
        onFocus: onListFocus,
        onKeyDown: onListKeyDown,
        onBlur: onListBlur
      }, ptm("menu"));
      var transitionProps = mergeProps({
        classNames: cx("transition"),
        "in": visibleState,
        timeout: {
          enter: 120,
          exit: 100
        },
        options: props.transitionOptions,
        unmountOnExit: true,
        onEnter,
        onEntered,
        onExit,
        onExited
      }, ptm("transition"));
      return /* @__PURE__ */ React.createElement(CSSTransition, _extends({
        nodeRef: menuRef
      }, transitionProps), /* @__PURE__ */ React.createElement("div", _extends({
        id: props.id,
        ref: menuRef
      }, rootProps), /* @__PURE__ */ React.createElement("ul", menuProps, menuitems)));
    }
    return null;
  };
  var element = createElement();
  return props.popup ? /* @__PURE__ */ React.createElement(Portal, {
    element,
    appendTo: props.appendTo
  }) : element;
}));
Menu.displayName = "Menu";
const navigation = [
  {
    heading: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: "pi pi-th-large"
      }
    ]
  },
  {
    heading: "Content",
    items: [
      {
        label: "Blogs",
        href: "/blogs",
        icon: "pi pi-file-edit"
      }
    ]
  },
  {
    heading: "Settings",
    items: [
      {
        label: "Settings",
        href: "/dashboard/settings",
        icon: "pi pi-cog"
      }
    ]
  }
];
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);
    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);
    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);
  return matches;
}
function getInitials(name = "") {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join("") || "U";
}
function getCurrentPage(url) {
  const path = url.split("?")[0];
  if (path === "/blogs") return "Blogs";
  if (path === "/blogs/create") return "Create Article";
  if (/^\/blogs\/[^/]+\/edit$/.test(path)) return "Edit Article";
  if (/^\/blogs\/[^/]+$/.test(path)) return "Blog";
  if (path === "/dashboard/settings") return "Settings";
  if (path === "/dashboard") return "Dashboard";
  return "Not found";
}
function SidebarNavigation({ collapsed, url, onNavigate }) {
  const [expandedItems, setExpandedItems] = useState(["Blogs"]);
  const path = url.split("?")[0];
  const toggleItem = (label) => {
    setExpandedItems(
      (current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]
    );
  };
  return /* @__PURE__ */ jsx("nav", { className: "admin-shell__navigation", role: "navigation", "aria-label": "Admin navigation", children: navigation.map((section) => /* @__PURE__ */ jsxs("section", { className: "admin-shell__nav-section", children: [
    !collapsed && /* @__PURE__ */ jsx("h2", { className: "admin-shell__nav-heading", children: section.heading }),
    section.items.map((item) => {
      const active = item.href ? path === item.href || path.startsWith(`${item.href}/`) : item.children?.some((child) => child.href === path);
      if (item.children) {
        const expanded = expandedItems.includes(item.label);
        return /* @__PURE__ */ jsxs("div", { className: "admin-shell__nav-group", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "button",
              text: true,
              className: `admin-shell__nav-link${active ? " is-active" : ""}${collapsed ? " is-collapsed admin-shell__tooltip-target" : ""}`,
              "aria-label": collapsed ? item.label : void 0,
              "aria-expanded": expanded,
              "data-pr-tooltip": collapsed ? item.label : void 0,
              "data-pr-position": "right",
              onClick: () => toggleItem(item.label),
              children: [
                /* @__PURE__ */ jsx("i", { className: `admin-shell__nav-icon ${item.icon}`, "aria-hidden": "true" }),
                !collapsed && /* @__PURE__ */ jsx("span", { className: "admin-shell__nav-label", children: item.label }),
                !collapsed && /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: `admin-shell__nav-chevron pi ${expanded ? "pi-chevron-down" : "pi-chevron-right"}`,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          expanded && /* @__PURE__ */ jsx("div", { className: `admin-shell__subnav${collapsed ? " is-collapsed" : ""}`, children: item.children.map((child) => {
            const childActive = path === child.href;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                href: child.href,
                className: `admin-shell__nav-link admin-shell__subnav-link${childActive ? " is-active" : ""}${collapsed ? " is-collapsed admin-shell__tooltip-target" : ""}`,
                "aria-label": collapsed ? child.label : void 0,
                "aria-current": childActive ? "page" : void 0,
                "data-pr-tooltip": collapsed ? child.label : void 0,
                "data-pr-position": "right",
                onClick: onNavigate,
                children: [
                  /* @__PURE__ */ jsx("i", { className: `admin-shell__nav-icon ${child.icon}`, "aria-hidden": "true" }),
                  !collapsed && /* @__PURE__ */ jsx("span", { className: "admin-shell__nav-label", children: child.label })
                ]
              },
              child.href
            );
          }) })
        ] }, item.label);
      }
      const itemActive = path === item.href || path.startsWith(`${item.href}/`);
      return /* @__PURE__ */ jsxs(
        Link,
        {
          href: item.href,
          className: `admin-shell__nav-link${itemActive ? " is-active" : ""}${collapsed ? " is-collapsed admin-shell__tooltip-target" : ""}`,
          "aria-label": collapsed ? item.label : void 0,
          "aria-current": itemActive ? "page" : void 0,
          "data-pr-tooltip": collapsed ? item.label : void 0,
          "data-pr-position": "right",
          onClick: onNavigate,
          children: [
            /* @__PURE__ */ jsx("i", { className: `admin-shell__nav-icon ${item.icon}`, "aria-hidden": "true" }),
            !collapsed && /* @__PURE__ */ jsx("span", { className: "admin-shell__nav-label", children: item.label })
          ]
        },
        item.href
      );
    })
  ] }, section.heading)) });
}
function SidebarContents({ collapsed, onNavigate, user, menuRef, url }) {
  return /* @__PURE__ */ jsxs("div", { className: "admin-shell__sidebar-inner", children: [
    /* @__PURE__ */ jsxs(Link, { href: "/dashboard", className: "admin-shell__brand", "aria-label": "Nested Nurturers dashboard", children: [
      /* @__PURE__ */ jsx("span", { className: "admin-shell__brand-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", { className: "pi pi-cloud" }) }),
      !collapsed && /* @__PURE__ */ jsxs("span", { className: "admin-shell__brand-copy", children: [
        /* @__PURE__ */ jsx("strong", { children: "Nested Nurturers" }),
        /* @__PURE__ */ jsx("small", { children: "Admin console" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      SidebarNavigation,
      {
        collapsed,
        url,
        onNavigate
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: `admin-shell__user${collapsed ? " is-collapsed" : ""}`, children: [
      /* @__PURE__ */ jsx(Avatar, { label: getInitials(user?.name), shape: "circle", className: "admin-shell__avatar" }),
      !collapsed && /* @__PURE__ */ jsxs("div", { className: "admin-shell__user-copy", children: [
        /* @__PURE__ */ jsx("strong", { children: user?.name || "Administrator" }),
        /* @__PURE__ */ jsx("small", { children: user?.email || "Admin account" })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          text: true,
          rounded: true,
          icon: "pi pi-ellipsis-v",
          className: "admin-shell__user-menu-button",
          "aria-label": "Open account settings and logout menu",
          onClick: (event) => menuRef.current?.toggle(event)
        }
      )
    ] })
  ] });
}
function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.ui.sidebarCollapsed);
  const mobileSidebarOpen = useSelector((state) => state.ui.mobileSidebarOpen);
  const { url, props } = usePage();
  const user = props.auth?.user;
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const menuRef = useRef(null);
  const pageTitle = getCurrentPage(url);
  const breadcrumbItems = useMemo(
    () => pageTitle === "Dashboard" ? [] : [{ label: pageTitle }],
    [pageTitle]
  );
  const menuItems = useMemo(
    () => [
      {
        label: "Settings",
        icon: "pi pi-cog",
        url: "/dashboard/settings"
      },
      { separator: true },
      {
        label: "Log out",
        icon: "pi pi-sign-out",
        command: () => router.post("/logout")
      }
    ],
    []
  );
  useEffect(() => {
    if (!isDesktop) {
      dispatch(setMobileSidebarOpen(false));
    }
  }, [dispatch, isDesktop, url]);
  useEffect(() => {
    if (isDesktop || !mobileSidebarOpen) return void 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDesktop, mobileSidebarOpen]);
  const handleNavigation = () => dispatch(setMobileSidebarOpen(false));
  const handleMenuToggle = () => {
    if (isDesktop) {
      dispatch(toggleSidebarCollapsed());
      return;
    }
    dispatch(setMobileSidebarOpen(true));
  };
  return /* @__PURE__ */ jsxs("div", { className: `admin-shell${collapsed ? " is-collapsed" : ""}`, children: [
    /* @__PURE__ */ jsx("aside", { className: `admin-shell__sidebar${collapsed ? " is-collapsed" : ""}`, children: /* @__PURE__ */ jsx(
      SidebarContents,
      {
        collapsed,
        onNavigate: handleNavigation,
        user,
        menuRef,
        url
      }
    ) }),
    /* @__PURE__ */ jsx(
      Sidebar,
      {
        visible: !isDesktop && mobileSidebarOpen,
        position: "left",
        modal: true,
        dismissable: true,
        closeOnEscape: true,
        blockScroll: false,
        showCloseIcon: false,
        className: "admin-shell__mobile-sidebar",
        onHide: () => dispatch(setMobileSidebarOpen(false)),
        children: /* @__PURE__ */ jsxs("div", { className: "admin-shell__mobile-sidebar-content", children: [
          /* @__PURE__ */ jsxs("div", { className: "admin-shell__mobile-sidebar-header", children: [
            /* @__PURE__ */ jsx("span", { className: "admin-shell__brand-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", { className: "pi pi-cloud" }) }),
            /* @__PURE__ */ jsx("strong", { children: "Nested Nurturers" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                text: true,
                rounded: true,
                icon: "pi pi-times",
                "aria-label": "Close navigation menu",
                onClick: () => dispatch(setMobileSidebarOpen(false))
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            SidebarNavigation,
            {
              collapsed: false,
              url,
              onNavigate: handleNavigation
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "admin-shell__mobile-user", children: [
            /* @__PURE__ */ jsx(Avatar, { label: getInitials(user?.name), shape: "circle", className: "admin-shell__avatar" }),
            /* @__PURE__ */ jsxs("div", { className: "admin-shell__user-copy", children: [
              /* @__PURE__ */ jsx("strong", { children: user?.name || "Administrator" }),
              /* @__PURE__ */ jsx("small", { children: user?.email || "Admin account" })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                text: true,
                rounded: true,
                icon: "pi pi-ellipsis-v",
                className: "admin-shell__user-menu-button",
                "aria-label": "Open account settings and logout menu",
                onClick: (event) => menuRef.current?.toggle(event)
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "admin-shell__workspace", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-shell__topbar", children: [
        /* @__PURE__ */ jsxs("div", { className: "admin-shell__topbar-start", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              text: true,
              rounded: true,
              icon: "pi pi-bars",
              className: "admin-shell__icon-button",
              "aria-label": isDesktop ? "Toggle sidebar" : "Open navigation menu",
              "aria-expanded": !isDesktop ? mobileSidebarOpen : void 0,
              onClick: handleMenuToggle
            }
          ),
          /* @__PURE__ */ jsx(
            BreadCrumb,
            {
              "aria-label": "Breadcrumb",
              className: "admin-shell__breadcrumb",
              home: { icon: "pi pi-home", url: "/dashboard", ariaLabel: "Dashboard" },
              model: breadcrumbItems
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "admin-shell__topbar-actions", children: [
          /* @__PURE__ */ jsxs("label", { className: "admin-shell__search", children: [
            /* @__PURE__ */ jsx("i", { className: "pi pi-search", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx(InputText, { placeholder: "Search", "aria-label": "Search dashboard" }),
            /* @__PURE__ */ jsx("kbd", { children: "Ctrl K" })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              text: true,
              rounded: true,
              icon: "pi pi-search",
              className: "admin-shell__icon-button admin-shell__search-trigger",
              "aria-label": "Search dashboard"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              text: true,
              rounded: true,
              icon: "pi pi-bell",
              className: "admin-shell__icon-button",
              "aria-label": "Notifications, 3 unread",
              badge: "3",
              badgeClassName: "admin-shell__notification-badge"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              text: true,
              rounded: true,
              className: "admin-shell__avatar-button",
              "aria-label": "Open account settings and logout menu",
              "aria-haspopup": "true",
              onClick: (event) => menuRef.current?.toggle(event),
              children: /* @__PURE__ */ jsx(Avatar, { label: getInitials(user?.name), shape: "circle", className: "admin-shell__avatar" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Menu, { model: menuItems, popup: true, ref: menuRef })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "admin-shell__content-scroll", role: "main", children: /* @__PURE__ */ jsxs("div", { className: "admin-shell__content", children: [
        collapsed && /* @__PURE__ */ jsx(Tooltip, { target: ".admin-shell__tooltip-target", position: "right", showDelay: 300 }),
        children
      ] }) })
    ] })
  ] });
}
export {
  AdminLayout as A,
  ChevronRightIcon as C
};
//# sourceMappingURL=AdminLayout-P8kTgT3x.js.map
