import { jsxs, jsx } from "react/jsx-runtime";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { C as ChevronDownIcon, T as TimesCircleIcon, V as VirtualScroller, a as Toast } from "./virtualscroller.esm-0yPTCOZF.js";
import { P as PrimeReactContext, D as DomHandler, b as PrimeReact, O as ObjectUtils, U as UniqueComponentId, Z as ZIndexUtils, c as classNames, I as IconUtils, l as localeOption } from "../ssr.js";
import { u as useMergeProps, a as useHandleStyle, h as useOverlayListener, d as useMountEffect, e as useUpdateEffect, c as useUnmountEffect, T as Tooltip, C as ComponentBase, S as SpinnerIcon, B as Button, P as Portal, R as Ripple } from "./button.esm-DFXl1vmj.js";
import { I as InputText } from "./inputtext.esm-COqCfzPS.js";
import { C as CSSTransition, O as OverlayService } from "./overlayservice.esm-Cnx_LE1W.js";
import { usePage, Head } from "@inertiajs/react";
import { S as Sidebar } from "./sidebar.esm-BweA3SBs.js";
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
var classes = {
  root: function root(_ref) {
    var props = _ref.props, focusedState = _ref.focusedState;
    return classNames("p-autocomplete p-component p-inputwrapper", {
      "p-autocomplete-dd": props.dropdown,
      "p-autocomplete-multiple": props.multiple,
      "p-inputwrapper-filled": props.value,
      "p-invalid": props.invalid,
      "p-inputwrapper-focus": focusedState
    });
  },
  container: function container(_ref2) {
    var props = _ref2.props, context = _ref2.context;
    return classNames("p-autocomplete-multiple-container p-component p-inputtext", {
      "p-disabled": props.disabled,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  loadingIcon: "p-autocomplete-loader",
  dropdownButton: "p-autocomplete-dropdown",
  removeTokenIcon: "p-autocomplete-token-icon",
  token: "p-autocomplete-token p-highlight",
  tokenLabel: "p-autocomplete-token-label",
  inputToken: "p-autocomplete-input-token",
  input: function input(_ref3) {
    var props = _ref3.props, context = _ref3.context;
    return classNames("p-autocomplete-input", {
      "p-autocomplete-dd-input": props.dropdown,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  },
  panel: function panel(_ref4) {
    var context = _ref4.context;
    return classNames("p-autocomplete-panel p-component", {
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  listWrapper: "p-autocomplete-items-wrapper",
  list: function list(_ref5) {
    var virtualScrollerOptions = _ref5.virtualScrollerOptions, options = _ref5.options;
    return virtualScrollerOptions ? classNames("p-autocomplete-items", options.className) : "p-autocomplete-items";
  },
  emptyMessage: "p-autocomplete-item",
  item: function item(_ref6) {
    var suggestion = _ref6.suggestion, optionGroupLabel = _ref6.optionGroupLabel, selected = _ref6.selected;
    return optionGroupLabel ? classNames("p-autocomplete-item", {
      "p-disabled": suggestion.disabled
    }, {
      selected
    }) : classNames("p-autocomplete-item", {
      "p-disabled": suggestion.disabled
    }, {
      "p-highlight": selected
    });
  },
  itemGroup: "p-autocomplete-item-group",
  footer: "p-autocomplete-footer",
  transition: "p-connected-overlay"
};
var styles = "\n@layer primereact {\n    .p-autocomplete {\n        display: inline-flex;\n        position: relative;\n    }\n    \n    .p-autocomplete-loader {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-autocomplete-dd .p-autocomplete-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n    \n    .p-autocomplete-dd .p-autocomplete-input,\n    .p-autocomplete-dd .p-autocomplete-multiple-container {\n         border-top-right-radius: 0;\n         border-bottom-right-radius: 0;\n     }\n    \n    .p-autocomplete-dd .p-autocomplete-dropdown {\n         border-top-left-radius: 0;\n         border-bottom-left-radius: 0px;\n    }\n    \n    .p-autocomplete .p-autocomplete-panel {\n        min-width: 100%;\n    }\n    \n    .p-autocomplete-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-autocomplete-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-autocomplete-item {\n        cursor: pointer;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-autocomplete-multiple-container {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        cursor: text;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n    \n    .p-autocomplete-token {\n        cursor: default;\n        display: inline-flex;\n        align-items: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-autocomplete-token-icon {\n        cursor: pointer;\n    }\n    \n    .p-autocomplete-input-token {\n        flex: 1 1 auto;\n        display: inline-flex;\n    }\n    \n    .p-autocomplete-input-token input {\n        border: 0 none;\n        outline: 0 none;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        box-shadow: none;\n        border-radius: 0;\n        width: 100%;\n    }\n    \n    .p-fluid .p-autocomplete {\n        display: flex;\n    }\n    \n    .p-fluid .p-autocomplete-dd .p-autocomplete-input {\n        width: 1%;\n    }\n    \n    .p-autocomplete-items-wrapper {\n        overflow: auto;\n    } \n}\n";
var AutoCompleteBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "AutoComplete",
    id: null,
    appendTo: null,
    autoFocus: false,
    autoHighlight: false,
    className: null,
    completeMethod: null,
    delay: 300,
    disabled: false,
    dropdown: false,
    dropdownAriaLabel: null,
    dropdownAutoFocus: true,
    dropdownIcon: null,
    dropdownMode: "blank",
    emptyMessage: null,
    field: null,
    forceSelection: false,
    inputClassName: null,
    inputId: null,
    inputRef: null,
    inputStyle: null,
    variant: null,
    invalid: false,
    itemTemplate: null,
    loadingIcon: null,
    maxLength: null,
    minLength: 1,
    multiple: false,
    name: null,
    onBlur: null,
    onChange: null,
    onClear: null,
    onClick: null,
    onContextMenu: null,
    onDblClick: null,
    onDropdownClick: null,
    onFocus: null,
    onHide: null,
    onKeyPress: null,
    onKeyUp: null,
    onMouseDown: null,
    onSelect: null,
    onShow: null,
    onUnselect: null,
    optionGroupChildren: null,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    panelClassName: null,
    panelFooterTemplate: null,
    panelStyle: null,
    placeholder: null,
    readOnly: false,
    removeTokenIcon: null,
    scrollHeight: "200px",
    selectedItemTemplate: null,
    selectionLimit: null,
    showEmptyMessage: false,
    size: null,
    style: null,
    suggestions: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    type: "text",
    value: null,
    virtualScrollerOptions: null,
    children: void 0
  },
  css: {
    classes,
    styles
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
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var AutoCompletePanel = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(props, ref) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx;
  var context = React.useContext(PrimeReactContext);
  var _ptm = function _ptm2(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var getPTOptions = function getPTOptions2(item2, key) {
    return _ptm(key, {
      context: {
        selected: props.selectedItem.current === item2,
        disabled: item2.disabled
      }
    });
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionRenderKey = function getOptionRenderKey2(option) {
    return ObjectUtils.resolveFieldData(option, props.field);
  };
  var createFooter = function createFooter2() {
    if (props.panelFooterTemplate) {
      var content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      var footerProps = mergeProps({
        className: cx("footer")
      }, _ptm("footer"));
      return /* @__PURE__ */ React.createElement("div", footerProps, content);
    }
    return null;
  };
  var findKeyIndex = function findKeyIndex2(array, key, value) {
    return array.findIndex(function(obj) {
      return obj[key] === value;
    });
  };
  var latestKey = React.useRef({
    key: null,
    index: 0,
    keyIndex: 0
  });
  var createLabelItem = function createLabelItem2(item2, key, index, labelItemProps) {
    var content = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, item2, index) : props.getOptionGroupLabel(item2) || item2;
    var itemGroupProps = mergeProps(_objectSpread$1({
      index,
      className: cx("itemGroup"),
      "data-p-highlight": false
    }, labelItemProps), _ptm("itemGroup"));
    return /* @__PURE__ */ React.createElement("li", _extends({}, itemGroupProps, {
      key: key ? key : null
    }), content);
  };
  var isOptionSelected = function isOptionSelected2(item2) {
    if (props.selectedItem && props.selectedItem.current && Array.isArray(props.selectedItem.current)) {
      return props.selectedItem.current.some(function(selectedItem) {
        return ObjectUtils.deepEquals(selectedItem, item2);
      });
    } else {
      return ObjectUtils.deepEquals(props.selectedItem.current, item2);
    }
  };
  var createListItem = function createListItem2(item2, key, index, listItemProps) {
    var selected = isOptionSelected(item2);
    var content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, item2, index) : props.field ? ObjectUtils.resolveFieldData(item2, props.field) : item2;
    var itemProps = mergeProps(_objectSpread$1({
      index,
      role: "option",
      className: cx("item", {
        optionGroupLabel: props.optionGroupLabel,
        suggestion: item2,
        selected
      }),
      onClick: function onClick(e) {
        return props.onItemClick(e, item2);
      },
      "aria-selected": selected
    }, listItemProps), getPTOptions(item2, "item"));
    return /* @__PURE__ */ React.createElement("li", _extends({
      key
    }, itemProps), content, /* @__PURE__ */ React.createElement(Ripple, null));
  };
  var createGroupChildren = function createGroupChildren2(optionGroup, i) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function(item2, j) {
      var key = i + "_" + j;
      var itemProps = mergeProps({
        "data-group": i,
        "data-index": j,
        "data-p-disabled": item2.disabled
      });
      return createListItem(item2, key, j, itemProps);
    });
  };
  var createItem = function createItem2(suggestion, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
    if (props.optionGroupLabel) {
      if (props.virtualScrollerOptions) {
        var keyIndex = findKeyIndex(props.suggestions, props.optionGroupLabel, suggestion);
        if (keyIndex !== -1) {
          latestKey.current = {
            key: suggestion,
            index,
            keyIndex
          };
          var _key = index + "_" + getOptionGroupRenderKey(suggestion);
          return createLabelItem(suggestion, _key, index, {
            style
          });
        }
        var _key2 = index + "_" + latestKey.current.keyIndex;
        var _itemProps = mergeProps({
          style,
          "data-group": latestKey.current.keyIndex,
          "data-index": index - latestKey.current.index - 1,
          "data-p-disabled": suggestion.disabled
        });
        return createListItem(suggestion, _key2, index, _itemProps);
      }
      var childrenContent = createGroupChildren(suggestion, index);
      var _key3 = index + "_" + getOptionGroupRenderKey(suggestion);
      return /* @__PURE__ */ React.createElement(React.Fragment, {
        key: _key3
      }, createLabelItem(suggestion, void 0, index, {
        style
      }), childrenContent);
    }
    var key = "".concat(index, "_").concat(ObjectUtils.isObject(suggestion) ? getOptionRenderKey(suggestion) : suggestion);
    var itemProps = mergeProps({
      style,
      "data-p-disabled": suggestion.disabled
    }, getPTOptions(suggestion, "item"));
    return createListItem(suggestion, key, index, itemProps);
  };
  var createItems = function createItems2() {
    return props.suggestions ? props.suggestions.map(createItem) : null;
  };
  var flattenGroupedItems = function flattenGroupedItems2(items) {
    try {
      return items === null || items === void 0 ? void 0 : items.map(function(item2) {
        return [item2 === null || item2 === void 0 ? void 0 : item2[props === null || props === void 0 ? void 0 : props.optionGroupLabel]].concat(_toConsumableArray(item2 === null || item2 === void 0 ? void 0 : item2[props === null || props === void 0 ? void 0 : props.optionGroupChildren]));
      }).flat();
    } catch (e) {
    }
  };
  var createContent = function createContent2() {
    if (props.showEmptyMessage && ObjectUtils.isEmpty(props.suggestions)) {
      var emptyMessage = props.emptyMessage || localeOption("emptyMessage");
      var emptyMessageProps = mergeProps({
        className: cx("emptyMessage")
      }, _ptm("emptyMessage"));
      var _listProps = mergeProps({
        className: cx("list")
      }, _ptm("list"));
      return /* @__PURE__ */ React.createElement("ul", _listProps, /* @__PURE__ */ React.createElement("li", emptyMessageProps, emptyMessage));
    }
    if (props.virtualScrollerOptions) {
      var _items = props.suggestions ? props.optionGroupLabel ? flattenGroupedItems(props === null || props === void 0 ? void 0 : props.suggestions) : props.suggestions : null;
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        autoSize: true,
        items: _items,
        itemTemplate: function itemTemplate(item2, options) {
          return item2 && createItem(item2, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var listProps2 = mergeProps({
            id: props.listId,
            ref: options.contentRef,
            style: options.style,
            className: cx("list", {
              virtualScrollerProps,
              options
            }),
            role: "listbox"
          }, _ptm("list"));
          return /* @__PURE__ */ React.createElement("ul", listProps2, options.children);
        }
      });
      return /* @__PURE__ */ React.createElement(VirtualScroller, _extends({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps, {
        pt: _ptm("virtualScroller"),
        __parentMetadata: {
          parent: props.metaData
        }
      }));
    }
    var items = createItems();
    var listProps = mergeProps({
      id: props.listId,
      className: cx("list"),
      role: "listbox"
    }, _ptm("list"));
    var listWrapperProps = mergeProps({
      className: cx("listWrapper"),
      style: {
        maxHeight: props.scrollHeight || "auto"
      }
    }, _ptm("listWrapper"));
    return /* @__PURE__ */ React.createElement("div", listWrapperProps, /* @__PURE__ */ React.createElement("ul", listProps, items));
  };
  var createElement = function createElement2() {
    var style = _objectSpread$1({}, props.panelStyle || {});
    var content = createContent();
    var footer = createFooter();
    var panelProps = mergeProps({
      className: classNames(props.panelClassName, cx("panel", {
        context
      })),
      style,
      onClick: function onClick(e) {
        return props.onClick(e);
      },
      "data-pr-is-overlay": true
    }, _ptm("panel"));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: props.onEnter,
      onEntering: props.onEntering,
      onEntered: props.onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, _ptm("transition"));
    return /* @__PURE__ */ React.createElement(CSSTransition, _extends({
      nodeRef: ref
    }, transitionProps), /* @__PURE__ */ React.createElement("div", _extends({
      ref
    }, panelProps), content, footer));
  };
  var element = createElement();
  return /* @__PURE__ */ React.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
AutoCompletePanel.displayName = "AutoCompletePanel";
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
var AutoComplete = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = AutoCompleteBase.getProps(inProps, context);
  var _React$useState = React.useState(props.id), _React$useState2 = _slicedToArray(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), searchingState = _React$useState4[0], setSearchingState = _React$useState4[1];
  var _React$useState5 = React.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), focusedState = _React$useState6[0], setFocusedState = _React$useState6[1];
  var _React$useState7 = React.useState(false), _React$useState8 = _slicedToArray(_React$useState7, 2), overlayVisibleState = _React$useState8[0], setOverlayVisibleState = _React$useState8[1];
  var metaData = {
    props,
    state: {
      id: idState,
      searching: searchingState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  };
  var _AutoCompleteBase$set = AutoCompleteBase.setMetaData(metaData), ptm = _AutoCompleteBase$set.ptm, cx = _AutoCompleteBase$set.cx, sx = _AutoCompleteBase$set.sx, isUnstyled = _AutoCompleteBase$set.isUnstyled;
  useHandleStyle(AutoCompleteBase.css.styles, isUnstyled, {
    name: "autocomplete"
  });
  var elementRef = React.useRef(null);
  var overlayRef = React.useRef(null);
  var inputRef = React.useRef(props.inputRef);
  var multiContainerRef = React.useRef(null);
  var virtualScrollerRef = React.useRef(null);
  var timeout = React.useRef(null);
  var selectedItem = React.useRef(null);
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        if (type === "outside") {
          if (!isInputClicked(event)) {
            hide();
          }
        } else if (context.hideOverlaysOnDocumentScrolling) {
          hide();
        } else if (!DomHandler.isDocument(event.target)) {
          alignOverlay();
        }
      }
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var isInputClicked = function isInputClicked2(event) {
    return props.multiple ? event.target === multiContainerRef.current || multiContainerRef.current.contains(event.target) : event.target === inputRef.current;
  };
  var onInputChange = function onInputChange2(event) {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    var query = event.target.value;
    if (!props.multiple) {
      updateModel(event, query);
    }
    if (ObjectUtils.isEmpty(query)) {
      hide();
      props.onClear && props.onClear(event);
    } else if (query.length >= props.minLength) {
      timeout.current = setTimeout(function() {
        search(event, query, "input");
      }, props.delay);
    } else {
      hide();
    }
  };
  var search = function search2(event, query, source) {
    if (query === void 0 || query === null) {
      return;
    }
    if (source === "input" && query.trim().length === 0) {
      return;
    }
    if (props.completeMethod) {
      setSearchingState(true);
      props.completeMethod({
        originalEvent: event,
        query
      });
    }
  };
  var selectItem = function selectItem2(event, option, preventInputFocus) {
    if (props.multiple) {
      inputRef.current.value = "";
      if (!isSelected(option) && isAllowMoreValues()) {
        var newValue = props.value ? [].concat(_toConsumableArray(props.value), [option]) : [option];
        updateModel(event, newValue);
      }
    } else {
      updateInputField(option);
      updateModel(event, option);
    }
    if (props.onSelect) {
      props.onSelect({
        originalEvent: event,
        value: option
      });
    }
    if (!preventInputFocus) {
      DomHandler.focus(inputRef.current);
      hide();
    }
  };
  var updateModel = function updateModel2(event, value) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value,
        stopPropagation: function stopPropagation() {
          event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.preventDefault();
        },
        target: {
          name: props.name,
          id: idState,
          value
        }
      });
    }
    selectedItem.current = ObjectUtils.isNotEmpty(value) ? value : null;
  };
  var formatValue = function formatValue2(value) {
    if (ObjectUtils.isEmpty(value)) return "";
    if (typeof value === "string") return value;
    if (props.selectedItemTemplate) {
      var valueFromTemplate = ObjectUtils.getJSXElement(props.selectedItemTemplate, value);
      return props.multiple || typeof valueFromTemplate === "string" ? valueFromTemplate : value;
    }
    if (props.field) {
      var _ObjectUtils$resolveF;
      return (_ObjectUtils$resolveF = ObjectUtils.resolveFieldData(value, props.field)) !== null && _ObjectUtils$resolveF !== void 0 ? _ObjectUtils$resolveF : value;
    }
    return value;
  };
  var updateInputField = function updateInputField2(value) {
    inputRef.current.value = formatValue(value);
  };
  var show = function show2() {
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
    setSearchingState(false);
  };
  var onOverlayEnter = function onOverlayEnter2() {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
  };
  var onOverlayEntering = function onOverlayEntering2() {
    if (props.autoHighlight && props.suggestions && props.suggestions.length) {
      autoHighlightFirstOption();
    }
  };
  var autoHighlightFirstOption = function autoHighlightFirstOption2() {
    var _getScrollableElement;
    var element = (_getScrollableElement = getScrollableElement()) === null || _getScrollableElement === void 0 || (_getScrollableElement = _getScrollableElement.firstChild) === null || _getScrollableElement === void 0 ? void 0 : _getScrollableElement.firstChild;
    if (element) {
      !isUnstyled() && DomHandler.addClass(element, "p-highlight");
      element.setAttribute("data-p-highlight", true);
    }
  };
  var onOverlayEntered = function onOverlayEntered2() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay2() {
    var target = props.multiple ? multiContainerRef.current : inputRef.current;
    DomHandler.alignOverlay(overlayRef.current, target, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
  };
  var onPanelClick = function onPanelClick2(event) {
    OverlayService.emit("overlay-click", {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var onDropdownClick = function onDropdownClick2(event) {
    if (props.dropdownAutoFocus) {
      DomHandler.focus(inputRef.current, props.dropdownAutoFocus);
    }
    if (props.dropdownMode === "blank") {
      search(event, "", "dropdown");
    } else if (props.dropdownMode === "current") {
      search(event, inputRef.current.value, "dropdown");
    }
    if (props.onDropdownClick) {
      props.onDropdownClick({
        originalEvent: event,
        query: inputRef.current.value
      });
    }
  };
  var removeItem = function removeItem2(event, index) {
    if (props.disabled || props.readOnly) {
      return;
    }
    var removedValue = props.value[index];
    var newValue = props.value.filter(function(_, i) {
      return index !== i;
    });
    updateModel(event, newValue);
    if (props.onUnselect) {
      props.onUnselect({
        originalEvent: event,
        value: removedValue
      });
    }
  };
  var onInputKeyDown = function onInputKeyDown2(event) {
    if (overlayVisibleState) {
      var highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
      switch (event.which) {
        //down
        case 40:
          if (highlightItem) {
            var nextElement = _findNextItem(highlightItem);
            if (nextElement) {
              !isUnstyled() && DomHandler.addClass(nextElement, "p-highlight");
              nextElement.setAttribute("data-p-highlight", true);
              !isUnstyled() && DomHandler.removeClass(highlightItem, "p-highlight");
              highlightItem.setAttribute("data-p-highlight", false);
              DomHandler.scrollInView(getScrollableElement(), nextElement);
            }
          } else {
            highlightItem = DomHandler.findSingle(overlayRef.current, "li");
            if (DomHandler.getAttribute(highlightItem, "data-pc-section") === "itemgroup") {
              highlightItem = _findNextItem(highlightItem);
            }
            if (highlightItem) {
              !isUnstyled() && DomHandler.addClass(highlightItem, "p-highlight");
              highlightItem.setAttribute("data-p-highlight", true);
            }
          }
          event.preventDefault();
          break;
        //up
        case 38:
          if (highlightItem) {
            var previousElement = _findPrevItem(highlightItem);
            if (previousElement) {
              !isUnstyled() && DomHandler.addClass(previousElement, "p-highlight");
              previousElement.setAttribute("data-p-highlight", true);
              !isUnstyled() && DomHandler.removeClass(highlightItem, "p-highlight");
              highlightItem.setAttribute("data-p-highlight", false);
              DomHandler.scrollInView(getScrollableElement(), previousElement);
            }
          }
          event.preventDefault();
          break;
        //enter
        case 13:
          if (highlightItem) {
            selectHighlightItem(event, highlightItem);
            hide();
            event.preventDefault();
          }
          break;
        //escape
        case 27:
          hide();
          event.preventDefault();
          break;
        //tab
        case 9:
          if (highlightItem) {
            selectHighlightItem(event, highlightItem);
          }
          hide();
          break;
      }
    }
    if (props.multiple) {
      switch (event.which) {
        //backspace
        case 8:
          if (props.value && props.value.length && !inputRef.current.value) {
            var removedValue = props.value[props.value.length - 1];
            var newValue = props.value.slice(0, -1);
            updateModel(event, newValue);
            if (props.onUnselect) {
              props.onUnselect({
                originalEvent: event,
                value: removedValue
              });
            }
          }
          break;
      }
    }
  };
  var selectHighlightItem = function selectHighlightItem2(event, item2) {
    if (props.optionGroupLabel) {
      var optionGroup = props.suggestions[item2.dataset.group];
      selectItem(event, getOptionGroupChildren(optionGroup)[item2.dataset.index]);
    } else {
      selectItem(event, props.suggestions[item2.getAttribute("index")]);
    }
  };
  var _findNextItem = function findNextItem(item2) {
    var nextItem = item2.nextElementSibling;
    return nextItem ? DomHandler.getAttribute(nextItem, "data-pc-section") === "itemgroup" ? _findNextItem(nextItem) : nextItem : null;
  };
  var _findPrevItem = function findPrevItem(item2) {
    var prevItem = item2.previousElementSibling;
    return prevItem ? DomHandler.getAttribute(prevItem, "data-pc-section") === "itemgroup" ? _findPrevItem(prevItem) : prevItem : null;
  };
  var onInputFocus = function onInputFocus2(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var forceItemSelection = function forceItemSelection2(event) {
    if (props.multiple) {
      inputRef.current.value = "";
      return;
    }
    var inputValue = ObjectUtils.trim(event.target.value).toLowerCase();
    var allItems = (props.suggestions || []).flatMap(function(group) {
      return group.items ? group.items : [group];
    });
    var item2 = allItems.find(function(it) {
      var value = props.field ? ObjectUtils.resolveFieldData(it, props.field) : it;
      var trimmedValue = value ? ObjectUtils.trim(value).toLowerCase() : "";
      return trimmedValue && inputValue === trimmedValue;
    });
    if (item2) {
      selectItem(event, item2, true);
    } else {
      inputRef.current.value = "";
      updateModel(event, null);
      props.onClear && props.onClear(event);
    }
  };
  var onInputBlur = function onInputBlur2(event) {
    setFocusedState(false);
    if (props.forceSelection) {
      forceItemSelection(event);
    }
    props.onBlur && props.onBlur(event);
  };
  var onMultiContainerClick = function onMultiContainerClick2(event) {
    DomHandler.focus(inputRef.current);
    props.onClick && props.onClick(event);
  };
  var onMultiInputFocus = function onMultiInputFocus2(event) {
    onInputFocus(event);
    !isUnstyled() && DomHandler.addClass(multiContainerRef.current, "p-focus");
    multiContainerRef.current.setAttribute("data-p-focus", true);
  };
  var onMultiInputBlur = function onMultiInputBlur2(event) {
    onInputBlur(event);
    !isUnstyled() && DomHandler.removeClass(multiContainerRef.current, "p-focus");
    multiContainerRef.current.setAttribute("data-p-focus", false);
  };
  var isSelected = function isSelected2(val) {
    return props.value ? props.value.some(function(v) {
      return ObjectUtils.equals(v, val);
    }) : false;
  };
  var getScrollableElement = function getScrollableElement2() {
    var _overlayRef$current;
    return overlayRef === null || overlayRef === void 0 || (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.firstChild;
  };
  var getOptionGroupLabel = function getOptionGroupLabel2(optionGroup) {
    return props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel) : optionGroup;
  };
  var getOptionGroupChildren = function getOptionGroupChildren2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var isAllowMoreValues = function isAllowMoreValues2() {
    return !props.value || !props.selectionLimit || props.value.length < props.selectionLimit;
  };
  React.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  React.useEffect(function() {
    if (ObjectUtils.isNotEmpty(props.value)) {
      selectedItem.current = props.value;
    }
  }, [props.value]);
  useMountEffect(function() {
    if (!idState) {
      setIdState(UniqueComponentId());
    }
    if (props.autoFocus) {
      DomHandler.focus(inputRef.current, props.autoFocus);
    }
    alignOverlay();
  });
  useUpdateEffect(function() {
    if (searchingState && props.autoHighlight && props.suggestions && props.suggestions.length) {
      autoHighlightFirstOption();
    }
  }, [searchingState]);
  useUpdateEffect(function() {
    if (searchingState) {
      ObjectUtils.isNotEmpty(props.suggestions) || props.showEmptyMessage ? show() : hide();
      setSearchingState(false);
    }
  }, [props.suggestions]);
  useUpdateEffect(function() {
    if (inputRef.current && !props.multiple) {
      updateInputField(props.value);
    }
    if (overlayVisibleState) {
      alignOverlay();
    }
  });
  useUnmountEffect(function() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    ZIndexUtils.clear(overlayRef.current);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      search,
      show,
      hide,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      },
      getVirtualScroller: function getVirtualScroller() {
        return virtualScrollerRef.current;
      }
    };
  });
  var createSimpleAutoComplete = function createSimpleAutoComplete2() {
    var value = formatValue(props.value);
    var ariaControls = overlayVisibleState ? idState + "_list" : null;
    return /* @__PURE__ */ React.createElement(InputText, _extends({
      ref: inputRef,
      id: props.inputId,
      type: props.type,
      name: props.name,
      defaultValue: value,
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-controls": ariaControls,
      "aria-haspopup": "listbox",
      "aria-expanded": overlayVisibleState,
      className: classNames(props.inputClassName, cx("input", {
        context
      })),
      style: props.inputStyle,
      autoComplete: "off",
      readOnly: props.readOnly,
      required: props.required,
      disabled: props.disabled,
      placeholder: props.placeholder,
      size: props.size,
      maxLength: props.maxLength,
      tabIndex: props.tabIndex,
      onBlur: onInputBlur,
      onFocus: onInputFocus,
      onChange: onInputChange,
      onMouseDown: props.onMouseDown,
      onKeyUp: props.onKeyUp,
      onKeyDown: onInputKeyDown,
      onKeyPress: props.onKeyPress,
      onContextMenu: props.onContextMenu,
      onClick: props.onClick,
      onDoubleClick: props.onDblClick,
      pt: ptm("input"),
      unstyled: props.unstyled
    }, ariaProps, {
      __parentMetadata: {
        parent: metaData
      }
    }));
  };
  var onRemoveTokenIconKeyDown = function onRemoveTokenIconKeyDown2(event, val) {
    switch (event.code) {
      case "Space":
      case "NumpadEnter":
      case "Enter":
        removeItem(event, val);
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  };
  var createChips = function createChips2() {
    if (ObjectUtils.isNotEmpty(props.value)) {
      return props.value.map(function(val, index) {
        var key = index + "multi-item";
        var removeTokenIconProps = mergeProps({
          className: cx("removeTokenIcon"),
          onClick: function onClick(e) {
            return removeItem(e, index);
          },
          tabIndex: props.tabIndex || "0",
          "aria-label": localeOption("clear"),
          onKeyDown: function onKeyDown(e) {
            return onRemoveTokenIconKeyDown(e, index);
          }
        }, ptm("removeTokenIcon"));
        var icon = props.removeTokenIcon || /* @__PURE__ */ React.createElement(TimesCircleIcon, removeTokenIconProps);
        var removeTokenIcon = !props.disabled && IconUtils.getJSXIcon(icon, _objectSpread({}, removeTokenIconProps), {
          props
        });
        var tokenProps = mergeProps({
          className: cx("token")
        }, ptm("token"));
        var tokenLabelProps = mergeProps({
          className: cx("tokenLabel")
        }, ptm("tokenLabel"));
        return /* @__PURE__ */ React.createElement("li", _extends({
          key
        }, tokenProps), /* @__PURE__ */ React.createElement("span", tokenLabelProps, formatValue(val)), removeTokenIcon);
      });
    }
    selectedItem.current = null;
    return null;
  };
  var createMultiInput = function createMultiInput2(allowMoreValues) {
    var ariaControls = overlayVisibleState ? idState + "_list" : null;
    var inputTokenProps = mergeProps({
      className: cx("inputToken")
    }, ptm("inputToken"));
    var inputProps = mergeProps(_objectSpread({
      id: props.inputId,
      ref: inputRef,
      "aria-autocomplete": "list",
      "aria-controls": ariaControls,
      "aria-expanded": overlayVisibleState,
      "aria-haspopup": "listbox",
      autoComplete: "off",
      className: props.inputClassName,
      disabled: props.disabled,
      maxLength: props.maxLength,
      name: props.name,
      onBlur: onMultiInputBlur,
      onChange: allowMoreValues ? onInputChange : void 0,
      onFocus: onMultiInputFocus,
      onKeyDown: allowMoreValues ? onInputKeyDown : void 0,
      onKeyPress: props.onKeyPress,
      onKeyUp: props.onKeyUp,
      placeholder: allowMoreValues ? props.placeholder : void 0,
      readOnly: props.readOnly || !allowMoreValues,
      required: props.required,
      role: "combobox",
      style: props.inputStyle,
      tabIndex: props.tabIndex,
      type: props.type
    }, ariaProps), ptm("input"));
    return /* @__PURE__ */ React.createElement("li", inputTokenProps, /* @__PURE__ */ React.createElement("input", inputProps));
  };
  var createMultipleAutoComplete = function createMultipleAutoComplete2() {
    var allowMoreValues = isAllowMoreValues();
    var tokens = createChips();
    var input3 = createMultiInput(allowMoreValues);
    var containerProps = mergeProps({
      ref: multiContainerRef,
      className: cx("container", {
        context
      }),
      onClick: allowMoreValues ? onMultiContainerClick : void 0,
      onContextMenu: props.onContextMenu,
      onMouseDown: props.onMouseDown,
      onDoubleClick: props.onDblClick,
      "data-p-focus": focusedState,
      "data-p-disabled": props.disabled
    }, ptm("container"));
    return /* @__PURE__ */ React.createElement("ul", containerProps, tokens, input3);
  };
  var createDropdown = function createDropdown2() {
    if (props.dropdown) {
      var ariaLabel = props.dropdownAriaLabel || props.placeholder || localeOption("choose");
      return /* @__PURE__ */ React.createElement(Button, {
        type: "button",
        icon: props.dropdownIcon || /* @__PURE__ */ React.createElement(ChevronDownIcon, null),
        className: cx("dropdownButton"),
        disabled: props.disabled,
        onClick: onDropdownClick,
        "aria-label": ariaLabel,
        pt: ptm("dropdownButton"),
        __parentMetadata: {
          parent: metaData
        }
      });
    }
    return null;
  };
  var createLoader = function createLoader2() {
    if (searchingState) {
      var loadingIconProps = mergeProps({
        className: cx("loadingIcon")
      }, ptm("loadingIcon"));
      var icon = props.loadingIcon || /* @__PURE__ */ React.createElement(SpinnerIcon, _extends({}, loadingIconProps, {
        spin: true
      }));
      var loaderIcon = IconUtils.getJSXIcon(icon, _objectSpread({}, loadingIconProps), {
        props
      });
      return loaderIcon;
    }
    return null;
  };
  var createInput = function createInput2() {
    return props.multiple ? createMultipleAutoComplete() : createSimpleAutoComplete();
  };
  var listId = idState + "_list";
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = AutoCompleteBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var loader = createLoader();
  var input2 = createInput();
  var dropdown = createDropdown();
  var rootProps = mergeProps({
    id: idState,
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root", {
      focusedState
    }))
  }, otherProps, ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", rootProps, input2, loader, dropdown, /* @__PURE__ */ React.createElement(AutoCompletePanel, _extends({
    hostName: "AutoComplete",
    ref: overlayRef,
    virtualScrollerRef
  }, props, {
    listId,
    onItemClick: selectItem,
    selectedItem,
    onOverlayHide: hide,
    onClick: onPanelClick,
    getOptionGroupLabel,
    getOptionGroupChildren,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntering: onOverlayEntering,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    ptm,
    cx,
    sx
  }))), hasTooltip && /* @__PURE__ */ React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
AutoComplete.displayName = "AutoComplete";
const usCityOptions = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Boston, MA",
  "Nashville, TN",
  "Portland, OR",
  "Las Vegas, NV",
  "Detroit, MI",
  "Memphis, TN",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Fresno, CA",
  "Kansas City, MO",
  "Atlanta, GA",
  "Miami, FL",
  "Raleigh, NC",
  "Omaha, NE",
  "Tulsa, OK",
  "Wichita, KS",
  "Minneapolis, MN",
  "Arlington, TX",
  "New Orleans, LA",
  "Bakersfield, CA",
  "Tampa, FL",
  "Anaheim, CA",
  "Aurora, CO",
  "Sacramento, CA",
  "Denver, CO",
  "St. Louis, MO",
  "Riverside, CA",
  "Miami Gardens, FL",
  "Orlando, FL",
  "San Juan, PR",
  "Honolulu, HI",
  "Boise, ID",
  "Spokane, WA",
  "Providence, RI",
  "Birmingham, AL",
  "Richmond, VA",
  "Salt Lake City, UT",
  "Madison, WI",
  "Des Moines, IA",
  "Phoenix, AZ",
  "Pittsburgh, PA",
  "Reno, NV",
  "Mesa, AZ",
  "Sacramento, CA",
  "El Paso, TX",
  "Oklahoma City, OK",
  "Louisville, KY",
  "Charlotte, NC",
  "Nashville, TN",
  "San Bernardino, CA",
  "Austin, TX",
  "Newark, NJ",
  "Greensboro, NC",
  "Plano, TX",
  "Long Beach, CA",
  "Fayetteville, NC"
];
function CityAutocompleteField({
  name,
  value,
  onChange,
  onBlur,
  errors,
  touched,
  placeholder = "Search or enter your city",
  citiesOptions = usCityOptions
}) {
  const [suggestions, setSuggestions] = useState(citiesOptions.slice(0, 20));
  const completeMethod = (event) => {
    const query = (event?.query ?? "").trim().toLowerCase();
    if (!query) {
      setSuggestions(citiesOptions.slice(0, 20));
      return;
    }
    const filtered = citiesOptions.filter(
      (city) => city.toLowerCase().includes(query)
    );
    setSuggestions(filtered.length ? filtered.slice(0, 20) : [query]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "mb-1 font-medium", children: "Location" }),
    /* @__PURE__ */ jsx(
      AutoComplete,
      {
        id: name,
        value: value ?? "",
        suggestions,
        completeMethod,
        onChange: (e) => onChange?.(name, e.value ?? ""),
        onBlur: () => onBlur?.(name, true),
        dropdown: true,
        forceSelection: false,
        placeholder,
        className: `w-full ${errors && touched ? "p-invalid" : ""}`,
        inputClassName: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors && touched ? "border-warn focus:ring-warn" : "border-gray-300 focus:ring-blue-300"}`
      }
    ),
    /* @__PURE__ */ jsx(
      ErrorMessage,
      {
        name,
        component: "div",
        className: "text-warn text-sm mt-1"
      }
    )
  ] });
}
function Contact({ cities }) {
  const [saving, setSaving] = useState(false);
  let toastRef = useRef(null);
  function getCurrentTime(timeZone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(/* @__PURE__ */ new Date());
  }
  function getTimezoneOffset(timeZone) {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset"
    });
    const parts = formatter.formatToParts(/* @__PURE__ */ new Date());
    return parts.find((p) => p.type === "timeZoneName")?.value || "";
  }
  const allTimezones = Intl.supportedValuesOf("timeZone");
  const groupedTimezones = allTimezones.reduce((acc, tz) => {
    const [region] = tz.split("/");
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push({
      value: tz,
      label: `${tz.split("/")[1]?.replaceAll("_", " ") || tz} (${getTimezoneOffset(tz)}) - ${getCurrentTime(tz)}`
    });
    return acc;
  }, {});
  async function Submission(payload) {
    try {
      setSaving(true);
      let response = await axios.post(`/api/submit/enquiry`, payload);
      if (response.data.message === "Enquiry Received") {
        toastRef.current.show({
          severity: "success",
          detail: "Consultation Booked Successfully",
          sticky: true
        });
        return true;
      } else {
        toastRef.current.show({
          severity: "error",
          detail: "Something Went Wrong",
          sticky: true
        });
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setSaving(false);
    }
  }
  const FormCalendar = () => {
    const today = /* @__PURE__ */ new Date();
    const validationSchema = Yup.object({
      name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone Number is Required").min(10, "Invalid Phone Number"),
      location: Yup.string().min(2, "Location must be at least 2 characters").required("Location is required"),
      timezone: Yup.string("Timezone is required"),
      day: Yup.date().required("Please select a consultation day").min(/* @__PURE__ */ new Date(), "Cannot select a past date"),
      expectedDueDate: Yup.date().nullable().required("Expected due date is required").max(today, "Expected due date cannot be later than today"),
      preferredStartDate: Yup.date().nullable().required("Preferred start date is required").max(today, "Preferred start date cannot be later than today"),
      supportDuration: Yup.string().required(
        "Duration of support is required"
      ),
      desiredNights: Yup.array().min(1, "Select at least one night").required("Select at least one night"),
      services: Yup.array().min(1, "Please Choose At least one service").required("Please Choose at least one service"),
      howHeard: Yup.string().required("Please tell us how heard of us etc Youtube, Yelp")
    });
    const initialValues = {
      name: "",
      email: "",
      day: null,
      phone: "",
      location: "",
      timezone: "America/Los_Angeles",
      services: [],
      expectedDueDate: /* @__PURE__ */ new Date(),
      preferredStartDate: /* @__PURE__ */ new Date(),
      supportDuration: "",
      desiredNights: [],
      howHeard: ""
    };
    const handleSubmit = async (values, { resetForm }) => {
      let payload = {
        email: values.email,
        consultationDate: `${new Date(values.day).toLocaleString("sv-SE", {
          hour12: false
        }).replace("T", " ")}`,
        phonenumber: String(values.phone),
        name: values.name,
        location: values.location,
        timezone: values.timezone,
        services_seeked: JSON.stringify(values.services),
        expected_due_time: values.expectedDueDate,
        preferred_doula_services_start: values.preferredStartDate,
        duration_of_support: values.supportDuration,
        no_nights_per_week: JSON.stringify(values.desiredNights),
        howHeard: values.howHeard
      };
      const success = await Submission(payload);
      if (success) {
        resetForm();
      }
    };
    return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 h-full max-w-md mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-gray-800 mb-4 text-center", children: "Schedule Free Consultation" }),
      /* @__PURE__ */ jsx(
        Formik,
        {
          initialValues,
          validationSchema,
          onSubmit: handleSubmit,
          children: ({
            values,
            setFieldValue,
            setFieldTouched,
            errors,
            touched
          }) => /* @__PURE__ */ jsxs(Form, { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1 font-medium", children: "Select Consultation Day & Time" }),
              /* @__PURE__ */ jsx(
                DatePicker,
                {
                  selected: values.day,
                  onChange: (date) => setFieldValue("day", date),
                  showTimeSelect: true,
                  inline: true,
                  minDate: /* @__PURE__ */ new Date(),
                  minTime: setHours(
                    setMinutes(/* @__PURE__ */ new Date(), 0),
                    4
                  ),
                  maxTime: setHours(
                    setMinutes(/* @__PURE__ */ new Date(), 30),
                    23
                  ),
                  filterDate: (date) => date.getDay() !== 0 && date.getDay() !== 6,
                  dateFormat: "MMMM d, yyyy h:mm aa",
                  className: "w-full border rounded-md p-2"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "font-medium", children: "Select Timezone" }),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    as: "select",
                    name: "timezone",
                    className: "w-full border p-2 rounded",
                    children: Object.entries(groupedTimezones).map(
                      ([region, zones]) => /* @__PURE__ */ jsx(
                        "optgroup",
                        {
                          label: region,
                          children: zones.map((tz) => /* @__PURE__ */ jsx(
                            "option",
                            {
                              value: tz.value,
                              children: tz.label
                            },
                            tz.value
                          ))
                        },
                        region
                      )
                    )
                  }
                )
              ] }),
              errors.day && touched.day && /* @__PURE__ */ jsx("div", { className: "text-warn mt-1 text-sm", children: errors.day })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1 font-medium", children: "Enter Your Name" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  name: "name",
                  type: "text",
                  placeholder: "Provide your name",
                  className: `px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.name && touched.name ? "border-warn focus:ring-warn" : "border-gray-300 focus:ring-blue-300"}`
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "name",
                  component: "div",
                  className: "text-warn text-sm mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1 font-medium", children: "Enter Your Phone Number" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  name: "phone",
                  type: "text",
                  placeholder: "Provide your Phone Number",
                  className: `px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.phone && touched.phone ? "border-warn focus:ring-warn" : "border-gray-300 focus:ring-blue-300"}`
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "phone",
                  component: "div",
                  className: "text-warn text-sm mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-1 font-medium", children: "Enter Your Email" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  name: "email",
                  type: "email",
                  placeholder: "Provide your email",
                  className: `px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.email && touched.email ? "border-warn focus:ring-warn" : "border-gray-300 focus:ring-blue-300"}`
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "email",
                  component: "div",
                  className: "text-warn text-sm mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              CityAutocompleteField,
              {
                name: "location",
                value: values.location,
                onChange: setFieldValue,
                onBlur: setFieldTouched,
                errors: errors.location,
                touched: touched.location,
                placeholder: "Search or enter your location",
                citiesOptions: cities
              }
            ),
            /* @__PURE__ */ jsxs("fieldset", { className: "grid grid-cols-2 gap-x-6 gap-y-2", children: [
              /* @__PURE__ */ jsxs("legend", { className: "col-span-full mb-2 text-sm font-medium text-gray-900", children: [
                "What services are you looking for? ",
                "",
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
              ] }),
              [
                "Postpartum Day support",
                "Postpartum Night support",
                "Sleep training service & consultation",
                "Special need sleep training consultation"
              ].map((service) => {
                const isChecked = values.services.includes(service);
                return /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: service,
                    className: "inline-flex cursor-pointer items-center whitespace-nowrap",
                    children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: service,
                          name: "services",
                          type: "checkbox",
                          value: service,
                          checked: isChecked,
                          onChange: (e) => {
                            const selectedServices = e.target.checked ? [
                              ...values.services,
                              service
                            ] : values.services.filter(
                              (selectedService) => selectedService !== service
                            );
                            setFieldValue(
                              "services",
                              selectedServices
                            );
                          },
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `
                        select-none text-sm leading-5
                        transition-colors duration-150
                        ${isChecked ? "text-gray-900" : "text-gray-700"}
                    `,
                          children: service
                        }
                      )
                    ]
                  },
                  service
                );
              }),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "services",
                  component: "div",
                  className: "mt-1 text-sm text-warn"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("fieldset", { className: "grid grid-cols-2 gap-x-6 gap-y-2", children: [
              /* @__PURE__ */ jsxs("legend", { className: "col-span-full mb-1 font-medium", children: [
                "Duration of Support Needed",
                " ",
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "*" })
              ] }),
              [
                "4 weeks",
                "6 weeks",
                "8 weeks",
                "12 weeks",
                "Others"
              ].map((duration) => {
                const durationId = `support-duration-${duration.toLowerCase().replaceAll(" ", "-")}`;
                const isChecked = values.supportDuration === duration;
                return /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: durationId,
                    className: "inline-flex cursor-pointer items-center whitespace-nowrap",
                    children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: durationId,
                          name: "supportDuration",
                          type: "checkbox",
                          value: duration,
                          checked: isChecked,
                          onChange: (event) => setFieldValue(
                            "supportDuration",
                            event.target.checked ? duration : ""
                          ),
                          onBlur: () => setFieldTouched(
                            "supportDuration",
                            true
                          ),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `select-none text-sm leading-5 transition-colors duration-150 ${isChecked ? "text-gray-900" : "text-gray-700"}`,
                          children: duration
                        }
                      )
                    ]
                  },
                  duration
                );
              }),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "supportDuration",
                  component: "div",
                  className: "mt-1 text-sm text-warn"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "howHeard",
                  className: "mb-1 font-medium",
                  children: [
                    "How did you hear about us?",
                    /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm font-normal text-gray-500", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Field,
                {
                  as: "textarea",
                  id: "howHeard",
                  name: "howHeard",
                  rows: "4",
                  placeholder: "Tell us how you found Nested Nurturers",
                  className: "min-h-28 w-full resize-y rounded-md border border-gray-300 px-4 py-3 leading-relaxed text-gray-700 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring"
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "howHeard",
                  component: "div",
                  className: "mt-1 text-sm text-warn"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: saving,
                className: `px-6 py-2 mt-2 rounded text-sm font-semibold text-white transition ${saving ? "bg-pr_btn opacity-50 blur-[1px] cursor-not-allowed" : "bg-pr_btn hover:bg-pr_btn/90"}`,
                children: saving ? "Processing..." : "Consult"
              }
            )
          ] })
        }
      )
    ] });
  };
  const NextSteps = () => {
    return /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-2xl shadow-lg p-8 h-full", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-8 text-center", children: "Reach Us" }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-lg text-gray-700", children: "Kindly choose one of the options to get in touch with us." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex flex-wrap items-start text-lg text-gray-700", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope text-green-600 mr-3 text-xl" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@nestednurturers.com",
              className: "hover:text-green-700 transition leading-relaxed font-medium break-words",
              children: "info@nestednurturers.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center text-lg text-gray-700", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone text-green-600 mr-3 text-xl" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+1 (925) 316-8311",
              className: "hover:text-green-700 transition font-medium",
              children: "+1 (925) 316-8311"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center text-lg text-gray-700", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot text-green-600 mr-3 text-xl" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Bay Area, California" })
        ] })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#f0f1f3] py-16", children: [
    /* @__PURE__ */ jsx(Toast, { ref: toastRef, position: "top-left" }),
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16 px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-5xl font-light text-gray-900 mb-6 tracking-wide", children: "Ready for Compassionate Birth & Postpartum Support?" }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-lg text-gray-700", children: "Your free consultation is the first step toward feeling supported, confident, and fully prepared for your journey into parenthood." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex flex-col md:flex-row gap-10 items-stretch justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(FormCalendar, {}) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(NextSteps, {}) })
    ] })
  ] });
}
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { class: "bg-pr", children: /* @__PURE__ */ jsxs("div", { class: "container px-6 py-12 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { class: " md:-mx-3 md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl", children: "Serving Bay Area And Beyond" }),
      /* @__PURE__ */ jsx("p", { class: "p-2 text-m font-semibold tracking-tight text-white md:mx-3 xl:text-xl", children: "We are trusted and approved by Carrot and Medi-Cal." })
    ] }),
    /* @__PURE__ */ jsx("hr", { class: "my-6 border-white-200 md:my-10" }),
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "font-semibold text-xl text-white", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              "aria-label": "home-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/about",
              "aria-label": "about-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "About"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/services",
              "aria-label": "services-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Services"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/pricing",
              "aria-label": "pricing-link",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Price"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              "aria-label": "contact-page",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/contact",
              "aria-label": "contact",
              class: "transition-colors duration-300 text-white hover:underline",
              children: "Career (Are you a doula? Contact us to serve our community)"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { class: "font-semibold text-xl text-white", children: "Benefits" }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "/services",
              class: "transition-colors text-white duration-300 hover:underline",
              children: "Carrot Fertility"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              href: "/services",
              class: "transition-colors text-white duration-300 hover:underline",
              children: "Medi-cal"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold text-white", children: "Location" }),
        /* @__PURE__ */ jsx("div", { class: "flex flex-col items-start mt-5 space-y-2", children: /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: "/",
            class: "transition-colors text-white duration-300 hover:underline",
            children: "Bay Area&Beyond"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { class: "text-xl font-semibold text-white", children: "Connect with us" }),
        /* @__PURE__ */ jsxs("div", { class: "flex items-center space-x-5 text-white", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-facebook text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-instagram text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-tiktok text-xl hover:text-pr transition" }) }),
          /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-yelp text-xl hover:text-pr transition" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-start mt-5 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+1 (925) 316-8311",
              class: "text-white transition-colors duration-300 hover:underline",
              children: "+1 (925) 316-8311"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@nestednurturers.com",
              class: "text-white transition-colors duration-300 hover:underline",
              children: "info@nestednurturers.com"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "flex flex-col items-center justify-between sm:flex-row", children: [
      /* @__PURE__ */ jsx("a", { href: "/", class: "mt-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          class: "w-auto h-14",
          src: "images/bottom-logo.jpeg",
          alt: "logo"
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { class: "mt-4 text-sm sm:mt-0 text-white", children: [
        "© Copyright ",
        year,
        ".",
        " ",
        /* @__PURE__ */ jsx("a", { class: "underline text-white", href: "/", target: "blank", children: "NestedNurturers" }),
        " ",
        "All Rights Reserved."
      ] })
    ] })
  ] }) });
}
function Header() {
  const { url } = usePage();
  const currentPath = url.split("?")[0];
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (path) => currentPath === path;
  const linkClass = (path) => `transition ${isActive(path) ? "text-pr" : "text-black hover:text-pr"}`;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: "w-full sticky top-0 left-0 z-50 bg-white shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-pr text-white py-2 border-b border-pr", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex justify-between items-center text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone text-lg" }),
          /* @__PURE__ */ jsx("span", { children: "+1 (925) 316-8311" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-regular fa-envelope text-lg" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@nestednurturers.com", className: "text-white", children: "info@nestednurturers.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-5 text-white", children: [
        /* @__PURE__ */ jsx("a", { "aria-label": "Facebook link", href: "https://www.facebook.com/nestednurturerz?mibextid=ZbWKwL", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook text-xl  cursor-pointer transition" }) }),
        /* @__PURE__ */ jsx("a", { "aria-label": "Instagram link", href: "https://www.instagram.com/nestednurturersdoulas?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram text-xl cursor-pointer transition" }) }),
        /* @__PURE__ */ jsx("a", { "aria-label": "Tiktok link", href: "https://www.tiktok.com/@nestednurturersdoulas?_r=1&_t=ZT-91baqNofnZ1", target: "_blank", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-tiktok text-xl cursor-pointer transition" }) }),
        /* @__PURE__ */ jsx("a", { "aria-label": "yelp-account", href: "https://www.yelp.com/biz/nested-nurturers-martinez", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-yelp text-xl cursor-pointer transition" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          "aria-label": "logo",
          href: "/",
          className: "transition-all duration-300 ease-in-out h-[90px]",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/updates-logo.jpeg",
              alt: "Logo",
              className: "h-full w-auto object-contain"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-12 text-base font-medium", children: [
        /* @__PURE__ */ jsx("a", { href: "/", "aria-label": "home-page", className: linkClass("/"), children: "Home" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setOpenDropdown("hotels"),
            onMouseLeave: () => setOpenDropdown(null),
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/services",
                  "aria-label": "services-page",
                  className: `flex items-center gap-2 ${linkClass("/services")}`,
                  children: [
                    "Services",
                    /* @__PURE__ */ jsx(
                      "i",
                      {
                        className: `fa-solid fa-chevron-down text-xs transition-transform duration-200 ${openDropdown === "hotels" ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              openDropdown === "hotels" && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full pt-2", children: /* @__PURE__ */ jsx("div", { className: "w-56 rounded-xl bg-white shadow-xl z-50", children: /* @__PURE__ */ jsxs("ul", { className: "py-2 text-sm", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    "aria-label": "services-page",
                    href: "/services",
                    className: "block px-4 py-2 hover:bg-gray-100 transition",
                    children: "Birth Support"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/services",
                    "aria-label": "services-page",
                    className: "block px-4 py-2 hover:bg-gray-100 transition",
                    children: "Postpartum Support"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/services",
                    "aria-label": "services-page",
                    className: "block px-4 py-2 hover:bg-gray-100 transition",
                    children: "Sibling Support"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/services",
                    "aria-label": "services-page",
                    className: "block px-4 py-2 hover:bg-gray-100 transition",
                    children: "Night Doula Care"
                  }
                ) })
              ] }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "/about", "aria-label": "about-page", className: linkClass("/about"), children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "/pricing", "aria-label": "pricing-page", className: linkClass("/pricing"), children: "Pricing" }),
        /* @__PURE__ */ jsx("a", { href: "/faq", "aria-label": "faq-page", className: linkClass("/faq"), children: "FAQ" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            "aria-label": "contact-page",
            href: "/contact",
            className: `px-6 py-2 rounded transition text-sm font-semibold text-white ${isActive("/contact") ? "bg-pr" : "bg-pr_btn hover:bg-pr_btn"}`,
            children: "Contact Us"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowSideMenu(true),
          className: "lg:hidden text-black text-3xl",
          children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000", children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Sidebar, { visible: showSideMenu, onHide: () => setShowSideMenu(false), children: [
      /* @__PURE__ */ jsx("div", { class: " justify-end mb-4", children: /* @__PURE__ */ jsx("button", { name: "side-bar", className: "text-gray-500 hover:text-red-600 text-xl" }) }),
      /* @__PURE__ */ jsx("a", { "aria-label": "logo", href: "/", children: /* @__PURE__ */ jsx("img", { className: "w-auto h-13", src: "images/updates-logo.jpeg", alt: "Logo" }) }),
      /* @__PURE__ */ jsx("div", { class: "flex flex-col justify-between flex-1 mt-6", children: /* @__PURE__ */ jsx("nav", { class: "-mx-3 space-y-6", children: /* @__PURE__ */ jsxs("div", { class: "space-y-3", children: [
        /* @__PURE__ */ jsx("label", { class: "px-3 text-xs text-gray-500 uppercase" }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "Home page", class: `px-3 py-2 rounded-lg ${isActive("/") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Home" })
        ] }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "See what services we do offer", class: `px-3 py-2 rounded-lg ${isActive("/services") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/services", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Services" })
        ] }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "Who are nested nurturers check more about us", class: `px-3 py-2 rounded-lg ${isActive("/about") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/about", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "About" })
        ] }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "Check our frequently asked question", class: `px-3 py-2 rounded-lg ${isActive("/faq") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, href: "/faq", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "Check our affordable pricing", class: `px-3 py-2 rounded-lg ${isActive("/pricing") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, target: "_blank", href: "/pricing", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Pricing" })
        ] }),
        /* @__PURE__ */ jsxs("a", { "aria-label": "Contact Us to get a free consultation", class: `px-3 py-2 rounded-lg ${isActive("/contact") ? "text-pr" : "text-gray-600 hover:bg-gray-100"}`, target: "_blank", href: "/contact", children: [
          /* @__PURE__ */ jsx("svg", { class: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "..." }) }),
          /* @__PURE__ */ jsx("span", { class: "ml-2 text-sm", children: "Contact Us" })
        ] })
      ] }) }) })
    ] })
  ] });
}
const SITE_NAME = "Nested Nurturers";
const SITE_URL = "https://nestednurturers.com";
const DEFAULT_TITLE = "Nested Nurturers | Prenatal, Birth & Postpartum Support";
const DEFAULT_DESCRIPTION = "Nested Nurturers provides compassionate prenatal, birth, and postpartum doula support in the Bay Area, California, helping families feel supported, confident, and cared for through pregnancy and early parenthood.";
const DEFAULT_KEYWORDS = "postpartum doula Bay Area, birth doula California, prenatal support, newborn care, sleep support, family support, Bay Area postpartum care";
function normalizeUrl(value) {
  if (!value) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}
function normalizeImageUrl(value) {
  if (!value) return `${SITE_URL}/images/updates-logo.jpeg`;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}/${value.replace(/^\/+/, "")}`;
}
function buildPageTitle(title) {
  if (!title) return DEFAULT_TITLE;
  if (title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}
function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogTitle = "",
  ogDescription = "",
  ogType = "website",
  ogUrl = "",
  twitterCard = "summary_large_image",
  twitterTitle = "",
  twitterDescription = "",
  url = "",
  schema = null,
  image = "images/updates-logo.jpeg"
}) {
  const finalUrl = normalizeUrl(ogUrl || url);
  const finalImage = normalizeImageUrl(image);
  const pageTitle = buildPageTitle(title);
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageKeywords = keywords || DEFAULT_KEYWORDS;
  const ogMetaTitle = ogTitle || pageTitle;
  const ogMetaDescription = ogDescription || pageDescription;
  const twitterMetaTitle = twitterTitle || pageTitle;
  const twitterMetaDescription = twitterDescription || pageDescription;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: pageTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
    /* @__PURE__ */ jsx(
      "meta",
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      }
    ),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: finalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: SITE_NAME }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: ogMetaTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: ogMetaDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: finalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: finalImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: ogMetaTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: twitterCard }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: twitterMetaTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: twitterMetaDescription }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: finalImage }),
    schema ? /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) : null
  ] });
}
export {
  Contact as C,
  Footer as F,
  Header as H,
  Seo as S
};
//# sourceMappingURL=SEO-CsWNaySx.js.map
