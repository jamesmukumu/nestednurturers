import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { usePage, router, Head } from "@inertiajs/react";
import { D as DataTable, C as Column } from "./datatable.esm-CXiPATCp.js";
import { I as InputText } from "./inputtext.esm-DDz9PXvh.js";
import { T as Tag } from "./tag.esm-CsuX49Li.js";
import { a as Toast } from "./toast.esm-BAa0NENd.js";
import { P as PrimeReactContext, l as localeOption, D as DomHandler, O as ObjectUtils, I as IconUtils, c as classNames } from "../ssr.js";
import { B as Button } from "./button.esm-BxFUYIz-.js";
import { u as useMergeProps, a as useHandleStyle, c as useUpdateEffect, d as useUnmountEffect, P as Portal, C as ComponentBase } from "./portal.esm-D9mKEukT.js";
import { D as Dialog } from "./dialog.esm-DP0uyxH6.js";
import { O as OverlayService } from "./overlayservice.esm-B2GBYfSa.js";
import { format, parseISO } from "date-fns";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
import { B as Button$1 } from "./Button-phcvJh3z.js";
/* empty css               */
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
import "./virtualscroller.esm-DaOHCdsa.js";
import "./paginator.esm-NnQVNDD7.js";
import "./sidebar.esm-Dou14AQP.js";
import "./dropdown.esm-CKXiqnMR.js";
import "./index.esm-igEVmVoM.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "react-dom";
import "./ThemeToggle-CE-bVUI6.js";
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
  root: "p-confirm-dialog",
  message: "p-confirm-dialog-message",
  icon: "p-confirm-dialog-icon",
  acceptButton: "p-confirm-dialog-accept",
  rejectButton: function rejectButton(_ref) {
    var getPropValue = _ref.getPropValue;
    return classNames("p-confirm-dialog-reject", {
      "p-button-text": !getPropValue("rejectClassName")
    });
  }
};
var ConfirmDialogBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "ConfirmDialog",
    accept: null,
    acceptClassName: null,
    acceptIcon: null,
    acceptLabel: null,
    appendTo: null,
    breakpoints: null,
    children: void 0,
    className: null,
    content: null,
    defaultFocus: "accept",
    footer: null,
    icon: null,
    message: null,
    onHide: null,
    reject: null,
    rejectClassName: null,
    rejectIcon: null,
    rejectLabel: null,
    tagKey: void 0,
    visible: void 0
  },
  css: {
    classes
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
var confirmDialog = function confirmDialog2() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  props = _objectSpread(_objectSpread({}, props), {
    visible: props.visible === void 0 ? true : props.visible
  });
  props.visible && OverlayService.emit("confirm-dialog", props);
  var show = function show2() {
    var updatedProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    OverlayService.emit("confirm-dialog", _objectSpread(_objectSpread(_objectSpread({}, props), updatedProps), {
      visible: true
    }));
  };
  var hide = function hide2() {
    OverlayService.emit("confirm-dialog", {
      visible: false
    });
  };
  return {
    show,
    hide
  };
};
var ConfirmDialog = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ConfirmDialogBase.getProps(inProps, context);
  var _React$useState = React.useState(props.visible), _React$useState2 = _slicedToArray(_React$useState, 2), visibleState = _React$useState2[0], setVisibleState = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), reshowState = _React$useState4[0], setReshowState = _React$useState4[1];
  var confirmProps = React.useRef(null);
  var isCallbackExecuting = React.useRef(false);
  var focusElementOnHide = React.useRef(null);
  var getCurrentProps = function getCurrentProps2() {
    var group = props.group;
    if (confirmProps.current) {
      group = confirmProps.current.group;
    }
    return Object.assign({}, props, confirmProps.current, {
      group
    });
  };
  var getPropValue = function getPropValue2(key) {
    return getCurrentProps()[key];
  };
  var callbackFromProp = function callbackFromProp2(key) {
    for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      param[_key - 1] = arguments[_key];
    }
    return ObjectUtils.getPropValue(getPropValue(key), param);
  };
  var acceptLabel = getPropValue("acceptLabel") || localeOption("accept");
  var rejectLabel = getPropValue("rejectLabel") || localeOption("reject");
  var metaData = {
    props,
    state: {
      visible: visibleState
    }
  };
  var _ConfirmDialogBase$se = ConfirmDialogBase.setMetaData(metaData), ptm = _ConfirmDialogBase$se.ptm, cx = _ConfirmDialogBase$se.cx, isUnstyled = _ConfirmDialogBase$se.isUnstyled;
  useHandleStyle(ConfirmDialogBase.css.styles, isUnstyled, {
    name: "confirmdialog"
  });
  var accept = function accept2() {
    if (!isCallbackExecuting.current) {
      isCallbackExecuting.current = true;
      callbackFromProp("accept");
      hide("accept");
    }
  };
  var reject = function reject2() {
    if (!isCallbackExecuting.current) {
      isCallbackExecuting.current = true;
      callbackFromProp("reject");
      hide("reject");
    }
  };
  var show = function show2() {
    var currentProps = getCurrentProps();
    if (currentProps.group === props.group) {
      setVisibleState(true);
      isCallbackExecuting.current = false;
      focusElementOnHide.current = document.activeElement;
    }
  };
  var hide = function hide2() {
    var result = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "cancel";
    if (visibleState) {
      if (typeof result !== "string") {
        result = "cancel";
      }
      setVisibleState(false);
      callbackFromProp("onHide", result);
      DomHandler.focus(focusElementOnHide.current);
      focusElementOnHide.current = null;
    }
  };
  var confirm = function confirm2(updatedProps) {
    if (updatedProps.tagKey === props.tagKey) {
      var isVisibleChanged = visibleState !== updatedProps.visible;
      var targetChanged = getPropValue("target") !== updatedProps.target;
      if (targetChanged && !props.target) {
        hide();
        confirmProps.current = updatedProps;
        setReshowState(true);
      } else if (isVisibleChanged) {
        confirmProps.current = updatedProps;
        updatedProps.visible ? show() : hide();
      }
    }
  };
  React.useEffect(function() {
    props.visible ? show() : hide();
  }, [props.visible]);
  React.useEffect(function() {
    if (!props.target && !props.message) {
      OverlayService.on("confirm-dialog", confirm);
    }
    return function() {
      OverlayService.off("confirm-dialog", confirm);
    };
  }, [props.target]);
  useUpdateEffect(function() {
    reshowState && show();
  }, [reshowState]);
  useUnmountEffect(function() {
    OverlayService.off("confirm-dialog", confirm);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      confirm
    };
  });
  var createFooter = function createFooter2() {
    var defaultFocus = getPropValue("defaultFocus");
    var acceptClassName = classNames("p-confirm-dialog-accept", getPropValue("acceptClassName"));
    var rejectClassName = classNames("p-confirm-dialog-reject", {
      "p-button-text": !getPropValue("rejectClassName")
    }, getPropValue("rejectClassName"));
    var rejectButtonProps = mergeProps({
      label: rejectLabel,
      autoFocus: defaultFocus === "reject",
      icon: getPropValue("rejectIcon"),
      className: classNames(getPropValue("rejectClassName"), cx("rejectButton", {
        getPropValue
      })),
      onClick: reject,
      pt: ptm("rejectButton"),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: metaData
      }
    }, ptm("rejectButton"));
    var acceptButtonProps = mergeProps({
      label: acceptLabel,
      autoFocus: defaultFocus === void 0 || defaultFocus === "accept",
      icon: getPropValue("acceptIcon"),
      className: classNames(getPropValue("acceptClassName"), cx("acceptButton")),
      onClick: accept,
      pt: ptm("acceptButton"),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: metaData
      }
    }, ptm("acceptButton"));
    var content = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, rejectButtonProps), /* @__PURE__ */ React.createElement(Button, acceptButtonProps));
    if (getPropValue("footer")) {
      var defaultContentOptions = {
        accept,
        reject,
        acceptClassName,
        rejectClassName,
        acceptLabel,
        rejectLabel,
        element: content,
        props: getCurrentProps()
      };
      return ObjectUtils.getJSXElement(getPropValue("footer"), defaultContentOptions);
    }
    return content;
  };
  var createElement = function createElement2() {
    var currentProps = getCurrentProps();
    var message = ObjectUtils.getJSXElement(getPropValue("message"), currentProps);
    var iconProps = mergeProps({
      className: cx("icon")
    }, ptm("icon"));
    var icon = IconUtils.getJSXIcon(getPropValue("icon"), _objectSpread({}, iconProps), {
      props: currentProps
    });
    var footer = createFooter();
    var messageProps = mergeProps({
      className: cx("message")
    }, ptm("message"));
    var rootProps = mergeProps({
      visible: visibleState,
      className: classNames(getPropValue("className"), cx("root")),
      footer,
      onHide: hide,
      breakpoints: getPropValue("breakpoints"),
      pt: currentProps.pt,
      unstyled: props.unstyled,
      appendTo: getPropValue("appendTo"),
      __parentMetadata: {
        parent: metaData
      }
    }, ConfirmDialogBase.getOtherProps(currentProps));
    return /* @__PURE__ */ React.createElement(Dialog, _extends({}, rootProps, {
      content: inProps === null || inProps === void 0 ? void 0 : inProps.content
    }), icon, /* @__PURE__ */ React.createElement("span", messageProps, message));
  };
  var element = createElement();
  return /* @__PURE__ */ React.createElement(Portal, {
    element,
    appendTo: getPropValue("appendTo")
  });
}));
ConfirmDialog.displayName = "ConfirmDialog";
function BlogsList({ blogs, filters }) {
  const toast = useRef(null);
  const { props } = usePage();
  const [search, setSearch] = useState(filters.search || "");
  useEffect(() => {
    setSearch(filters.search || "");
  }, [filters.search]);
  useEffect(() => {
    if (props.flash?.success) {
      toast.current?.show({ severity: "success", summary: "Success", detail: props.flash.success });
    }
  }, [props.flash?.success]);
  useEffect(() => {
    if (search === (filters.search || "")) return void 0;
    const timer = window.setTimeout(() => {
      router.get("/dashboard/blogs", { search: search || void 0 }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
      });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [search, filters.search]);
  const changePage = (event) => {
    router.get("/dashboard/blogs", {
      search: search || void 0,
      page: event.page + 1
    }, {
      preserveState: true,
      preserveScroll: true
    });
  };
  const deleteBlog = (blog) => {
    confirmDialog({
      header: "Delete blog?",
      message: `“${blog.title}” will be permanently deleted.`,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Delete",
      rejectLabel: "Cancel",
      acceptClassName: "app-button app-button--danger app-button--md",
      rejectClassName: "app-button app-button--secondary app-button--md",
      accept: () => router.delete(`/dashboard/blogs/${blog.id}`, {
        onError: () => toast.current?.show({
          severity: "error",
          summary: "Unable to delete blog",
          detail: "Please try again."
        }),
        onHttpException: () => toast.current?.show({
          severity: "error",
          summary: "Unable to delete blog",
          detail: "The server could not delete the blog. Please try again."
        }),
        onException: () => toast.current?.show({
          severity: "error",
          summary: "Unable to delete blog",
          detail: "A network error interrupted the request. Please try again."
        })
      })
    });
  };
  const imageBody = (blog) => blog.image_url ? /* @__PURE__ */ jsx("img", { className: "blogs-list__image", src: blog.image_url, alt: "" }) : /* @__PURE__ */ jsx("span", { className: "blogs-list__image-placeholder", "aria-label": "No image", children: /* @__PURE__ */ jsx("i", { className: "pi pi-image", "aria-hidden": "true" }) });
  const publishBody = (blog) => /* @__PURE__ */ jsx(Tag, { value: blog.is_published ? "Published" : "Draft", severity: blog.is_published ? "success" : "warning" });
  const dateBody = (blog) => blog.created_at ? format(parseISO(blog.created_at), "MMM d, yyyy") : "—";
  const actionsBody = (blog) => /* @__PURE__ */ jsxs("div", { className: "blogs-list__actions", children: [
    /* @__PURE__ */ jsx(
      Button$1,
      {
        href: `/dashboard/blogs/${blog.id}`,
        variant: "ghost",
        size: "sm",
        iconOnly: true,
        "aria-label": `View ${blog.title}`,
        children: /* @__PURE__ */ jsx("i", { className: "pi pi-eye", "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button$1,
      {
        href: `/dashboard/blogs/${blog.id}/edit`,
        variant: "ghost",
        size: "sm",
        iconOnly: true,
        "aria-label": `Edit ${blog.title}`,
        children: /* @__PURE__ */ jsx("i", { className: "pi pi-pencil", "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button$1,
      {
        type: "button",
        variant: "danger",
        size: "sm",
        iconOnly: true,
        "aria-label": `Delete ${blog.title}`,
        onClick: () => deleteBlog(blog),
        children: /* @__PURE__ */ jsx("i", { className: "pi pi-trash", "aria-hidden": "true" })
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Blogs" }),
    /* @__PURE__ */ jsx(Toast, { ref: toast, position: "top-right" }),
    /* @__PURE__ */ jsx(ConfirmDialog, {}),
    /* @__PURE__ */ jsxs("section", { className: "admin-page blogs-list", children: [
      /* @__PURE__ */ jsxs("header", { className: "admin-page__header blogs-list__header", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { children: "Blogs" }),
          /* @__PURE__ */ jsx("p", { children: "Create, edit, and manage your blogs." })
        ] }),
        /* @__PURE__ */ jsx(Button$1, { href: "/dashboard/blogs/create", leftIcon: /* @__PURE__ */ jsx("i", { className: "pi pi-plus", "aria-hidden": "true" }), children: "Create Article" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "blogs-list__toolbar", children: /* @__PURE__ */ jsxs("label", { className: "blogs-list__search", children: [
        /* @__PURE__ */ jsx("i", { className: "pi pi-search", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx(
          InputText,
          {
            value: search,
            onChange: (event) => setSearch(event.target.value),
            placeholder: "Search blogs",
            "aria-label": "Search blogs"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(
        DataTable,
        {
          value: blogs.data,
          dataKey: "id",
          lazy: true,
          paginator: blogs.total > blogs.per_page,
          first: (blogs.current_page - 1) * blogs.per_page,
          rows: blogs.per_page,
          totalRecords: blogs.total,
          onPage: changePage,
          responsiveLayout: "scroll",
          emptyMessage: "No blogs found.",
          className: "blogs-list__table",
          children: [
            /* @__PURE__ */ jsx(Column, { header: "Cover", body: imageBody, style: { width: "7rem" } }),
            /* @__PURE__ */ jsx(Column, { field: "title", header: "Title" }),
            /* @__PURE__ */ jsx(Column, { header: "Category", body: (blog) => blog.category?.title || "—" }),
            /* @__PURE__ */ jsx(Column, { header: "Status", body: publishBody, style: { width: "8rem" } }),
            /* @__PURE__ */ jsx(Column, { header: "Date", body: dateBody, style: { width: "10rem" } }),
            /* @__PURE__ */ jsx(Column, { header: "Actions", body: actionsBody, style: { width: "11rem" } })
          ]
        }
      )
    ] })
  ] });
}
BlogsList.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  BlogsList as default
};
//# sourceMappingURL=Index-CjTiVdrY.js.map
