import * as React from "react";
import { P as PrimeReactContext, c as classNames, Z as ZIndexUtils, D as DomHandler, b as PrimeReact, O as ObjectUtils, a as ariaLabel, I as IconUtils } from "../ssr.js";
import { I as IconBase, u as useMergeProps, a as useHandleStyle, k as useDisplayOrder, l as useGlobalOnEscapeKey, f as useEventListener, d as useMountEffect, e as useUpdateEffect, c as useUnmountEffect, C as ComponentBase, P as Portal, R as Ripple, E as ESC_KEY_HANDLING_PRIORITIES } from "./button.esm-DFXl1vmj.js";
import { C as CSSTransition } from "./overlayservice.esm-Cnx_LE1W.js";
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}
var TimesIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$1({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }));
}));
TimesIcon.displayName = "TimesIcon";
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
var classes = {
  closeButton: "p-sidebar-close p-sidebar-icon p-link",
  closeIcon: "p-sidebar-close-icon",
  mask: function mask(_ref) {
    var props = _ref.props, maskVisibleState = _ref.maskVisibleState;
    var positions = ["left", "right", "top", "bottom"];
    var pos = positions.find(function(item) {
      return item === props.position;
    });
    return classNames("p-sidebar-mask", pos && !props.fullScreen ? "p-sidebar-".concat(pos) : "", {
      "p-component-overlay p-component-overlay-enter": props.modal,
      "p-sidebar-mask-scrollblocker": props.blockScroll,
      "p-sidebar-visible": maskVisibleState,
      "p-sidebar-full": props.fullScreen
    }, props.maskClassName);
  },
  header: function header(_ref2) {
    var props = _ref2.props;
    return classNames("p-sidebar-header", {
      "p-sidebar-custom-header": props.header
    });
  },
  content: "p-sidebar-content",
  icons: "p-sidebar-icons",
  root: function root(_ref3) {
    _ref3.props;
    var context = _ref3.context;
    return classNames("p-sidebar p-component", {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  transition: "p-sidebar"
};
var styles = "\n@layer primereact {\n    .p-sidebar-mask {\n        display: none;\n        justify-content: center;\n        align-items: center;\n        pointer-events: none;\n        background-color: transparent;\n        transition-property: background-color;\n    }\n    \n    .p-sidebar-visible {\n        display: flex;\n    }\n    \n    .p-sidebar-mask.p-component-overlay {\n        pointer-events: auto;\n    }\n    \n    .p-sidebar {\n        display: flex;\n        flex-direction: column;\n        pointer-events: auto;\n        transform: translate3d(0px, 0px, 0px);\n        position: relative;\n    }\n    \n    .p-sidebar-content {\n        overflow-y: auto;\n        flex-grow: 1;\n    }\n    \n    .p-sidebar-header {\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n    }\n    \n    .p-sidebar-custom-header {\n        justify-content: space-between;\n    }\n    \n    .p-sidebar-icons {\n        display: flex;\n        align-items: center;\n        flex-shrink: 0;\n    }\n    \n    .p-sidebar-icon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-sidebar-full .p-sidebar {\n        transition: none;\n        transform: none;\n        width: 100vw;\n        height: 100vh;\n        max-height: 100%;\n        top: 0px;\n        left: 0px;\n    }\n    \n    /* Animation */\n    /* Top, Bottom, Left and Right */\n    .p-sidebar-top .p-sidebar-enter,\n    .p-sidebar-top .p-sidebar-exit-active {\n        transform: translate3d(0px, -100%, 0px);\n    }\n    \n    .p-sidebar-bottom .p-sidebar-enter,\n    .p-sidebar-bottom .p-sidebar-exit-active {\n        transform: translate3d(0px, 100%, 0px);\n    }\n    \n    .p-sidebar-left .p-sidebar-enter,\n    .p-sidebar-left .p-sidebar-exit-active {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n    \n    .p-sidebar-right .p-sidebar-enter,\n    .p-sidebar-right .p-sidebar-exit-active {\n        transform: translate3d(100%, 0px, 0px);\n    }\n    \n    .p-sidebar-top .p-sidebar-enter-active,\n    .p-sidebar-bottom .p-sidebar-enter-active,\n    .p-sidebar-left .p-sidebar-enter-active,\n    .p-sidebar-right .p-sidebar-enter-active {\n        transform: translate3d(0px, 0px, 0px);\n        transition: all 0.3s;\n    }\n    \n    .p-sidebar-top .p-sidebar-enter-done,\n    .p-sidebar-bottom .p-sidebar-enter-done,\n    .p-sidebar-left .p-sidebar-enter-done,\n    .p-sidebar-right .p-sidebar-enter-done {\n        transform: none;\n    }\n    \n    .p-sidebar-top .p-sidebar-exit-active,\n    .p-sidebar-bottom .p-sidebar-exit-active,\n    .p-sidebar-left .p-sidebar-exit-active,\n    .p-sidebar-right .p-sidebar-exit-active {\n        transition: all 0.3s;\n    }\n    \n    /* Full */\n    .p-sidebar-full .p-sidebar-enter {\n        opacity: 0;\n        transform: scale(0.5);\n    }\n    \n    .p-sidebar-full .p-sidebar-enter-active {\n        opacity: 1;\n        transform: scale(1);\n        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);\n    }\n    \n    .p-sidebar-full .p-sidebar-enter-done {\n        transform: none;\n    }\n    \n    .p-sidebar-full .p-sidebar-exit-active {\n        opacity: 0;\n        transform: scale(0.5);\n        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    }\n    \n    /* Size */\n    .p-sidebar-left .p-sidebar {\n        width: 20rem;\n        height: 100%;\n    }\n    \n    .p-sidebar-right .p-sidebar {\n        width: 20rem;\n        height: 100%;\n    }\n    \n    .p-sidebar-top .p-sidebar {\n        height: 10rem;\n        width: 100%;\n    }\n    \n    .p-sidebar-bottom .p-sidebar {\n        height: 10rem;\n        width: 100%;\n    }\n    \n    .p-sidebar-left .p-sidebar-sm,\n    .p-sidebar-right .p-sidebar-sm {\n        width: 20rem;\n    }\n    \n    .p-sidebar-left .p-sidebar-md,\n    .p-sidebar-right .p-sidebar-md {\n        width: 40rem;\n    }\n    \n    .p-sidebar-left .p-sidebar-lg,\n    .p-sidebar-right .p-sidebar-lg {\n        width: 60rem;\n    }\n    \n    .p-sidebar-top .p-sidebar-sm,\n    .p-sidebar-bottom .p-sidebar-sm {\n        height: 10rem;\n    }\n    \n    .p-sidebar-top .p-sidebar-md,\n    .p-sidebar-bottom .p-sidebar-md {\n        height: 20rem;\n    }\n    \n    .p-sidebar-top .p-sidebar-lg,\n    .p-sidebar-bottom .p-sidebar-lg {\n        height: 30rem;\n    }\n    \n    .p-sidebar-left .p-sidebar-view,\n    .p-sidebar-right .p-sidebar-view,\n    .p-sidebar-top .p-sidebar-view,\n    .p-sidebar-bottom .p-sidebar-view {\n        width: 100%;\n        height: 100%;\n    }\n    \n    .p-sidebar-left .p-sidebar-content,\n    .p-sidebar-right .p-sidebar-content,\n    .p-sidebar-top .p-sidebar-content,\n    .p-sidebar-bottom .p-sidebar-content {\n        width: 100%;\n        height: 100%;\n    }\n    \n    @media screen and (max-width: 64em) {\n        .p-sidebar-left .p-sidebar-lg,\n        .p-sidebar-left .p-sidebar-md,\n        .p-sidebar-right .p-sidebar-lg,\n        .p-sidebar-right .p-sidebar-md {\n            width: 20rem;\n        }\n    }        \n}\n";
var inlineStyles = {
  mask: function mask2(_ref4) {
    var props = _ref4.props;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: props.position === "left" ? "flex-start" : props.position === "right" ? "flex-end" : "center",
      alignItems: props.position === "top" ? "flex-start" : props.position === "bottom" ? "flex-end" : "center"
    };
  }
};
var SidebarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Sidebar",
    appendTo: null,
    ariaCloseLabel: null,
    baseZIndex: 0,
    blockScroll: false,
    children: void 0,
    className: null,
    closeIcon: null,
    closeOnEscape: true,
    content: null,
    dismissable: true,
    fullScreen: false,
    header: null,
    icons: null,
    id: null,
    maskClassName: null,
    maskStyle: null,
    modal: true,
    onHide: null,
    onShow: null,
    position: "left",
    showCloseIcon: true,
    style: null,
    transitionOptions: null,
    visible: false
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
var Sidebar = /* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = SidebarBase.getProps(inProps, context);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), maskVisibleState = _React$useState2[0], setMaskVisibleState = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), visibleState = _React$useState4[0], setVisibleState = _React$useState4[1];
  var _SidebarBase$setMetaD = SidebarBase.setMetaData({
    props,
    state: {
      containerVisible: maskVisibleState
    }
  }), ptm = _SidebarBase$setMetaD.ptm, cx = _SidebarBase$setMetaD.cx, sx = _SidebarBase$setMetaD.sx, isUnstyled = _SidebarBase$setMetaD.isUnstyled;
  useHandleStyle(SidebarBase.css.styles, isUnstyled, {
    name: "sidebar"
  });
  var sidebarRef = React.useRef(null);
  var maskRef = React.useRef(null);
  var closeIconRef = React.useRef(null);
  var isCloseOnEscape = visibleState && props.closeOnEscape;
  var sidebarDisplayOrder = useDisplayOrder("sidebar", isCloseOnEscape);
  useGlobalOnEscapeKey({
    callback: function callback(event) {
      onClose(event);
    },
    when: isCloseOnEscape && sidebarDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR, sidebarDisplayOrder]
  });
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      if (event.button !== 0) {
        return;
      }
      if (isOutsideClicked(event)) {
        onClose(event);
      }
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var isOutsideClicked = function isOutsideClicked2(event) {
    return sidebarRef && sidebarRef.current && !sidebarRef.current.contains(event.target);
  };
  var focus = function focus2() {
    var activeElement = document.activeElement;
    var isActiveElementInDialog = activeElement && sidebarRef && sidebarRef.current.contains(activeElement);
    if (!isActiveElementInDialog && props.showCloseIcon && closeIconRef.current) {
      closeIconRef.current.focus();
    }
  };
  var onMaskClick = function onMaskClick2(event) {
    if (props.dismissable && props.modal && maskRef.current === event.target) {
      onClose(event);
    }
  };
  var onClose = function onClose2(event) {
    props.onHide();
    event.preventDefault();
  };
  var onEntered = function onEntered2() {
    props.onShow && props.onShow();
    focus();
    enableDocumentSettings();
  };
  var onExiting = function onExiting2() {
    if (props.modal) {
      !isUnstyled() && DomHandler.addClass(maskRef.current, "p-component-overlay-leave");
    }
  };
  var onExited = function onExited2() {
    ZIndexUtils.clear(maskRef.current);
    setMaskVisibleState(false);
    disableDocumentSettings();
  };
  var enableDocumentSettings = function enableDocumentSettings2() {
    if (props.dismissable && !props.modal) {
      bindDocumentClickListener();
    }
    if (props.blockScroll) {
      DomHandler.blockBodyScroll();
    }
  };
  var disableDocumentSettings = function disableDocumentSettings2() {
    unbindDocumentClickListener();
    if (props.blockScroll) {
      DomHandler.unblockBodyScroll();
    }
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return sidebarRef.current;
      },
      getMask: function getMask() {
        return maskRef.current;
      },
      getCloseIcon: function getCloseIcon() {
        return closeIconRef.current;
      }
    };
  });
  useMountEffect(function() {
    if (props.visible) {
      setMaskVisibleState(true);
    }
  });
  useUpdateEffect(function() {
    if (props.visible && !maskVisibleState) {
      setMaskVisibleState(true);
    }
    if (props.visible !== visibleState && maskVisibleState) {
      setVisibleState(props.visible);
    }
  }, [props.visible, maskVisibleState, visibleState]);
  useUpdateEffect(function() {
    if (maskVisibleState) {
      ZIndexUtils.set("modal", maskRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.modal || PrimeReact.zIndex.modal);
      setVisibleState(true);
    }
  }, [maskVisibleState]);
  useUpdateEffect(function() {
    if (visibleState) {
      unbindDocumentClickListener();
      if (props.dismissable && !props.modal) {
        bindDocumentClickListener();
      }
    }
  }, [props.dismissable, props.modal, visibleState]);
  useUnmountEffect(function() {
    disableDocumentSettings();
    maskRef.current && ZIndexUtils.clear(maskRef.current);
  });
  var createCloseIcon = function createCloseIcon2() {
    var closeButtonProps = mergeProps({
      type: "button",
      ref: closeIconRef,
      className: cx("closeButton"),
      onClick: function onClick(e) {
        return onClose(e);
      },
      "aria-label": props.ariaCloseLabel || ariaLabel("close")
    }, ptm("closeButton"));
    var closeIconProps = mergeProps({
      className: cx("closeIcon")
    }, ptm("closeIcon"));
    var icon = props.closeIcon || /* @__PURE__ */ React.createElement(TimesIcon, closeIconProps);
    var closeIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, closeIconProps), {
      props
    });
    if (props.showCloseIcon) {
      return /* @__PURE__ */ React.createElement("button", closeButtonProps, closeIcon, /* @__PURE__ */ React.createElement(Ripple, null));
    }
    return null;
  };
  var createHeader = function createHeader2() {
    return props.header ? ObjectUtils.getJSXElement(props.header, props) : null;
  };
  var createIcons = function createIcons2() {
    return props.icons ? ObjectUtils.getJSXElement(props.icons, props) : null;
  };
  var maskProps = mergeProps({
    ref: maskRef,
    style: sx("mask"),
    className: cx("mask", {
      maskVisibleState
    }),
    onMouseDown: function onMouseDown(e) {
      return onMaskClick(e);
    }
  }, ptm("mask"));
  var rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, cx("root", {
      context
    })),
    style: props.style,
    role: "complementary"
  }, SidebarBase.getOtherProps(props), ptm("root"));
  var headerProps = mergeProps({
    className: cx("header")
  }, ptm("header"));
  var contentProps = mergeProps({
    className: cx("content")
  }, ptm("content"));
  var iconsProps = mergeProps({
    className: cx("icons")
  }, ptm("icons"));
  var transitionTimeout = {
    enter: props.fullScreen ? 150 : 300,
    exit: props.fullScreen ? 150 : 300
  };
  var transitionProps = mergeProps({
    classNames: cx("transition"),
    "in": visibleState,
    timeout: transitionTimeout,
    options: props.transitionOptions,
    unmountOnExit: true,
    onEntered,
    onExiting,
    onExited
  }, ptm("transition"));
  var createTemplateElement = function createTemplateElement2() {
    var templateElementProps = {
      closeIconRef,
      hide: onClose
    };
    return /* @__PURE__ */ React.createElement("div", maskProps, /* @__PURE__ */ React.createElement(CSSTransition, _extends({
      nodeRef: sidebarRef
    }, transitionProps), /* @__PURE__ */ React.createElement("div", _extends({
      ref: sidebarRef
    }, rootProps), ObjectUtils.getJSXElement(inProps.content, templateElementProps))));
  };
  var createElement = function createElement2() {
    var closeIcon = createCloseIcon();
    var icons = createIcons();
    var header2 = createHeader();
    return /* @__PURE__ */ React.createElement("div", maskProps, /* @__PURE__ */ React.createElement(CSSTransition, _extends({
      nodeRef: sidebarRef
    }, transitionProps), /* @__PURE__ */ React.createElement("div", _extends({
      ref: sidebarRef
    }, rootProps), /* @__PURE__ */ React.createElement("div", headerProps, header2, /* @__PURE__ */ React.createElement("div", iconsProps, icons, closeIcon)), /* @__PURE__ */ React.createElement("div", contentProps, props.children))));
  };
  var createSidebar = function createSidebar2() {
    var element = inProps !== null && inProps !== void 0 && inProps.content ? createTemplateElement() : createElement();
    return /* @__PURE__ */ React.createElement(Portal, {
      element,
      appendTo: props.appendTo,
      visible: true
    });
  };
  return maskVisibleState && createSidebar();
});
Sidebar.displayName = "Sidebar";
export {
  Sidebar as S,
  TimesIcon as T
};
//# sourceMappingURL=sidebar.esm-BweA3SBs.js.map
