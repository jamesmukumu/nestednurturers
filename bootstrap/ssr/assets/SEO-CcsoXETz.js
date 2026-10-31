import { jsxs, jsx } from "react/jsx-runtime";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import * as React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import { CSSTransition as CSSTransition$1, TransitionGroup } from "react-transition-group";
import { P as PrimeReactContext, a as PrimeReact, b as ariaLabel, l as localeOption } from "../ssr.js";
import { usePage, Head } from "@inertiajs/react";
import ReactDOM from "react-dom";
function _arrayWithHoles$8(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$8(r, l) {
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
function _arrayLikeToArray$2$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$2$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2$1(r, a) : void 0;
  }
}
function _nonIterableRest$8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$8(r, e) {
  return _arrayWithHoles$8(r) || _iterableToArrayLimit$8(r, e) || _unsupportedIterableToArray$2$1(r, e) || _nonIterableRest$8();
}
function _typeof$a(o) {
  "@babel/helpers - typeof";
  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$a(o);
}
function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (args) {
    var classes2 = [];
    for (var i = 0; i < args.length; i++) {
      var className = args[i];
      if (!className) {
        continue;
      }
      var type = _typeof$a(className);
      if (type === "string" || type === "number") {
        classes2.push(className);
      } else if (type === "object") {
        var _classes = Array.isArray(className) ? className : Object.entries(className).map(function(_ref) {
          var _ref2 = _slicedToArray$8(_ref, 2), key = _ref2[0], value = _ref2[1];
          return value ? key : null;
        });
        classes2 = _classes.length ? classes2.concat(_classes.filter(function(c) {
          return !!c;
        })) : classes2;
      }
    }
    return classes2.join(" ").trim();
  }
  return void 0;
}
function _arrayWithoutHoles$6(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2$1(r);
}
function _iterableToArray$6(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread$6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$6(r) {
  return _arrayWithoutHoles$6(r) || _iterableToArray$6(r) || _unsupportedIterableToArray$2$1(r) || _nonIterableSpread$6();
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function toPrimitive$a(t, r) {
  if ("object" != _typeof$a(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$a(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$a(t) {
  var i = toPrimitive$a(t, "string");
  return "symbol" == _typeof$a(i) ? i : i + "";
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey$a(o.key), o);
  }
}
function _createClass(e, r, t) {
  return t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty$a(e, r, t) {
  return (r = toPropertyKey$a(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _createForOfIteratorHelper$1(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1$1(r)) || e) {
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
function _unsupportedIterableToArray$1$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var DomHandler = /* @__PURE__ */ (function() {
  function DomHandler2() {
    _classCallCheck(this, DomHandler2);
  }
  return _createClass(DomHandler2, null, [{
    key: "innerWidth",
    value: function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width = width + (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        return width;
      }
      return 0;
    }
  }, {
    key: "width",
    value: function width(el) {
      if (el) {
        var _width = el.offsetWidth;
        var style = getComputedStyle(el);
        _width = _width - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        return _width;
      }
      return 0;
    }
  }, {
    key: "getBrowserLanguage",
    value: function getBrowserLanguage() {
      return navigator.userLanguage || navigator.languages && navigator.languages.length && navigator.languages[0] || navigator.language || navigator.browserLanguage || navigator.systemLanguage || "en";
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.getBoundingClientRect().width || el.offsetWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width = width + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return width;
      }
      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.getBoundingClientRect().height || el.offsetHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height = height + (parseFloat(style.marginTop) + parseFloat(style.marginBottom));
        }
        return height;
      }
      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height = height + (parseFloat(style.marginTop) + parseFloat(style.marginBottom));
        }
        return height;
      }
      return 0;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth(el, margin) {
      if (el) {
        var width = el.clientWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width = width + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return width;
      }
      return 0;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window;
      var d = document;
      var e = d.documentElement;
      var g = d.getElementsByTagName("body")[0];
      var w = win.innerWidth || e.clientWidth || g.clientWidth;
      var h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "index",
    value: function index(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
          if (children[i] === element) {
            return num;
          }
          if (children[i].nodeType === 1) {
            num++;
          }
        }
      }
      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles2 = className.split(" ");
          for (var i = 0; i < styles2.length; i++) {
            element.classList.add(styles2[i]);
          }
        } else {
          var _styles = className.split(" ");
          for (var _i = 0; _i < _styles.length; _i++) {
            element.className = element.className + (" " + _styles[_i]);
          }
        }
      }
    }
  }, {
    key: "removeMultipleClasses",
    value: function removeMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles2 = className.split(" ");
          for (var i = 0; i < styles2.length; i++) {
            element.classList.remove(styles2[i]);
          }
        } else {
          var _styles2 = className.split(" ");
          for (var _i2 = 0; _i2 < _styles2.length; _i2++) {
            element.className = element.className.replace(new RegExp("(^|\\b)" + _styles2[_i2].split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (element && className) {
        if (element.classList) {
          element.classList.add(className);
        } else {
          element.className = element.className + (" " + className);
        }
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element && className) {
        if (element.classList) {
          element.classList.remove(className);
        } else {
          element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element) {
        if (element.classList) {
          return element.classList.contains(className);
        }
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
      }
      return false;
    }
  }, {
    key: "addStyles",
    value: function addStyles(element) {
      var styles2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        Object.entries(styles2).forEach(function(_ref) {
          var _ref2 = _slicedToArray$8(_ref, 2), key = _ref2[0], value = _ref2[1];
          return element.style[key] = value;
        });
      }
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return element ? Array.from(element.querySelectorAll(selector)) : [];
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }
      return null;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(element) {
      var _this = this;
      var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        var _computedStyles = function computedStyles(rule, value) {
          var _element$$attrs, _element$$attrs2;
          var styles2 = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
          return [value].flat().reduce(function(cv, v) {
            if (v !== null && v !== void 0) {
              var type = _typeof$a(v);
              if (type === "string" || type === "number") {
                cv.push(v);
              } else if (type === "object") {
                var _cv = Array.isArray(v) ? _computedStyles(rule, v) : Object.entries(v).map(function(_ref3) {
                  var _ref4 = _slicedToArray$8(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
                  return rule === "style" && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(_v) : _v ? _k : void 0;
                });
                cv = _cv.length ? cv.concat(_cv.filter(function(c) {
                  return !!c;
                })) : cv;
              }
            }
            return cv;
          }, styles2);
        };
        Object.entries(attributes).forEach(function(_ref5) {
          var _ref6 = _slicedToArray$8(_ref5, 2), key = _ref6[0], value = _ref6[1];
          if (value !== void 0 && value !== null) {
            var matchedEvent = key.match(/^on(.+)/);
            if (matchedEvent) {
              element.addEventListener(matchedEvent[1].toLowerCase(), value);
            } else if (key === "p-bind") {
              _this.setAttributes(element, value);
            } else {
              value = key === "class" ? _toConsumableArray$6(new Set(_computedStyles("class", value))).join(" ").trim() : key === "style" ? _computedStyles("style", value).join(";").trim() : value;
              (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
              element.setAttribute(key, value);
            }
          }
        });
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(element, name) {
      if (element) {
        var value = element.getAttribute(name);
        if (!isNaN(value)) {
          return +value;
        }
        if (value === "true" || value === "false") {
          return value === "true";
        }
        return value;
      }
      return void 0;
    }
  }, {
    key: "isAttributeEquals",
    value: function isAttributeEquals(element, name, value) {
      return element ? this.getAttribute(element, name) === value : false;
    }
  }, {
    key: "isAttributeNotEquals",
    value: function isAttributeNotEquals(element, name, value) {
      return !this.isAttributeEquals(element, name, value);
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height = height - (parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth));
        return height;
      }
      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width = width - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth));
        return width;
      }
      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay(overlay, target, appendTo) {
      var calculateMinWidth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (overlay && target) {
        if (appendTo === "self") {
          this.relativePosition(overlay, target);
        } else {
          calculateMinWidth && (overlay.style.minWidth = DomHandler2.getOuterWidth(target) + "px");
          this.absolutePosition(overlay, target);
        }
      }
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      var align = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left";
      if (element && target) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top;
        var left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;
          if (top < 0) {
            top = windowScrollTop;
          }
          element.style.transformOrigin = "bottom";
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = "top";
        }
        var targetOffsetPx = targetOffset.left;
        if (align === "left") {
          if (targetOffsetPx + elementOuterWidth > viewport.width) {
            left = Math.max(0, targetOffsetPx + windowScrollLeft + targetOuterWidth - elementOuterWidth);
          } else {
            left = targetOffsetPx + windowScrollLeft;
          }
        } else {
          if (targetOffsetPx + targetOuterWidth - elementOuterWidth < 0) {
            left = windowScrollLeft;
          } else {
            left = targetOffsetPx + targetOuterWidth - elementOuterWidth + windowScrollLeft;
          }
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
      }
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      if (element && target) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top;
        var left;
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = -1 * elementDimensions.height;
          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }
          element.style.transformOrigin = "bottom";
        } else {
          top = targetHeight;
          element.style.transformOrigin = "top";
        }
        if (elementDimensions.width > viewport.width) {
          left = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport.width) {
          left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        } else {
          left = 0;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
      }
    }
  }, {
    key: "flipfitCollision",
    value: function flipfitCollision(element, target) {
      var _this2 = this;
      var my = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "left top";
      var at = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "left bottom";
      var callback = arguments.length > 4 ? arguments[4] : void 0;
      if (element && target) {
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var myArr = my.split(" ");
        var atArr = at.split(" ");
        var getPositionValue = function getPositionValue2(arr, isOffset) {
          return isOffset ? +arr.substring(arr.search(/(\+|-)/g)) || 0 : arr.substring(0, arr.search(/(\+|-)/g)) || arr;
        };
        var position = {
          my: {
            x: getPositionValue(myArr[0]),
            y: getPositionValue(myArr[1] || myArr[0]),
            offsetX: getPositionValue(myArr[0], true),
            offsetY: getPositionValue(myArr[1] || myArr[0], true)
          },
          at: {
            x: getPositionValue(atArr[0]),
            y: getPositionValue(atArr[1] || atArr[0]),
            offsetX: getPositionValue(atArr[0], true),
            offsetY: getPositionValue(atArr[1] || atArr[0], true)
          }
        };
        var myOffset = {
          left: function left() {
            var totalOffset = position.my.offsetX + position.at.offsetX;
            return totalOffset + targetOffset.left + (position.my.x === "left" ? 0 : -1 * (position.my.x === "center" ? _this2.getOuterWidth(element) / 2 : _this2.getOuterWidth(element)));
          },
          top: function top() {
            var totalOffset = position.my.offsetY + position.at.offsetY;
            return totalOffset + targetOffset.top + (position.my.y === "top" ? 0 : -1 * (position.my.y === "center" ? _this2.getOuterHeight(element) / 2 : _this2.getOuterHeight(element)));
          }
        };
        var alignWithAt = {
          count: {
            x: 0,
            y: 0
          },
          left: function left() {
            var left2 = myOffset.left();
            var scrollLeft = DomHandler2.getWindowScrollLeft();
            element.style.left = left2 + scrollLeft + "px";
            if (this.count.x === 2) {
              element.style.left = scrollLeft + "px";
              this.count.x = 0;
            } else if (left2 < 0) {
              this.count.x++;
              position.my.x = "left";
              position.at.x = "right";
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.right();
            }
          },
          right: function right() {
            var left = myOffset.left() + DomHandler2.getOuterWidth(target);
            var scrollLeft = DomHandler2.getWindowScrollLeft();
            element.style.left = left + scrollLeft + "px";
            if (this.count.x === 2) {
              element.style.left = viewport.width - DomHandler2.getOuterWidth(element) + scrollLeft + "px";
              this.count.x = 0;
            } else if (left + DomHandler2.getOuterWidth(element) > viewport.width) {
              this.count.x++;
              position.my.x = "right";
              position.at.x = "left";
              position.my.offsetX *= -1;
              position.at.offsetX *= -1;
              this.left();
            }
          },
          top: function top() {
            var top2 = myOffset.top();
            var scrollTop = DomHandler2.getWindowScrollTop();
            element.style.top = top2 + scrollTop + "px";
            if (this.count.y === 2) {
              element.style.left = scrollTop + "px";
              this.count.y = 0;
            } else if (top2 < 0) {
              this.count.y++;
              position.my.y = "top";
              position.at.y = "bottom";
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.bottom();
            }
          },
          bottom: function bottom() {
            var top = myOffset.top() + DomHandler2.getOuterHeight(target);
            var scrollTop = DomHandler2.getWindowScrollTop();
            element.style.top = top + scrollTop + "px";
            if (this.count.y === 2) {
              element.style.left = viewport.height - DomHandler2.getOuterHeight(element) + scrollTop + "px";
              this.count.y = 0;
            } else if (top + DomHandler2.getOuterHeight(target) > viewport.height) {
              this.count.y++;
              position.my.y = "bottom";
              position.at.y = "top";
              position.my.offsetY *= -1;
              position.at.offsetY *= -1;
              this.top();
            }
          },
          center: function center(axis) {
            if (axis === "y") {
              var top = myOffset.top() + DomHandler2.getOuterHeight(target) / 2;
              element.style.top = top + DomHandler2.getWindowScrollTop() + "px";
              if (top < 0) {
                this.bottom();
              } else if (top + DomHandler2.getOuterHeight(target) > viewport.height) {
                this.top();
              }
            } else {
              var left = myOffset.left() + DomHandler2.getOuterWidth(target) / 2;
              element.style.left = left + DomHandler2.getWindowScrollLeft() + "px";
              if (left < 0) {
                this.left();
              } else if (left + DomHandler2.getOuterWidth(element) > viewport.width) {
                this.right();
              }
            }
          }
        };
        alignWithAt[position.at.x]("x");
        alignWithAt[position.at.y]("y");
        if (this.isFunction(callback)) {
          callback(position);
        }
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function findCollisionPosition(position) {
      if (position) {
        var isAxisY = position === "top" || position === "bottom";
        var myXPosition = position === "left" ? "right" : "left";
        var myYPosition = position === "top" ? "bottom" : "top";
        if (isAxisY) {
          return {
            axis: "y",
            my: "center ".concat(myYPosition),
            at: "center ".concat(position)
          };
        }
        return {
          axis: "x",
          my: "".concat(myXPosition, " center"),
          at: "".concat(position, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return element.parentNode === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }
    /**
     * Gets all scrollable parent elements of a given element
     * @param {HTMLElement} element - The element to find scrollable parents for
     * @returns {Array} Array of scrollable parent elements
     */
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents(element) {
      var _this3 = this;
      var scrollableParents = [];
      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;
        var overflowCheck = function overflowCheck2(node) {
          var styleDeclaration = node ? getComputedStyle(node) : null;
          return styleDeclaration && (overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflow-x")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflow-y")));
        };
        var addScrollableParent = function addScrollableParent2(node) {
          scrollableParents.push(node.nodeName === "BODY" || node.nodeName === "HTML" || _this3.isDocument(node) ? window : node);
        };
        var _iterator = _createForOfIteratorHelper$1(parents), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _parent$dataset;
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && ((_parent$dataset = parent.dataset) === null || _parent$dataset === void 0 ? void 0 : _parent$dataset.scrollselectors);
            if (scrollSelectors) {
              var selectors = scrollSelectors.split(",");
              var _iterator2 = _createForOfIteratorHelper$1(selectors), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);
                  if (el && overflowCheck(el)) {
                    addScrollableParent(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            if (parent.nodeType === 1 && overflowCheck(parent)) {
              addScrollableParent(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return scrollableParents;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
      }
      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
      }
      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last = +/* @__PURE__ */ new Date();
        var opacity = 0;
        var _tick = function tick() {
          opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +/* @__PURE__ */ new Date();
          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(_tick) || setTimeout(_tick, 16);
          }
        };
        _tick();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, duration) {
      if (element) {
        var opacity = 1;
        var interval = 50;
        var gap = interval / duration;
        var fading = setInterval(function() {
          opacity = opacity - gap;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }
          element.style.opacity = opacity;
        }, interval);
      }
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isChrome",
    value: function isChrome() {
      return /(chrome)/i.test(navigator.userAgent);
    }
  }, {
    key: "isClient",
    value: function isClient() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) {
        target.appendChild(element);
      } else if (target.el && target.el.nativeElement) {
        target.el.nativeElement.appendChild(element);
      } else {
        throw new Error("Cannot append " + target + " to " + element);
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(element, target) {
      if (this.isElement(target)) {
        target.removeChild(element);
      } else if (target.el && target.el.nativeElement) {
        target.el.nativeElement.removeChild(element);
      } else {
        throw new Error("Cannot remove " + element + " from " + target);
      }
    }
  }, {
    key: "isElement",
    value: function isElement(obj) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$a(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof$a(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
    }
  }, {
    key: "isDocument",
    value: function isDocument(obj) {
      return (typeof Document === "undefined" ? "undefined" : _typeof$a(Document)) === "object" ? obj instanceof Document : obj && _typeof$a(obj) === "object" && obj !== null && obj.nodeType === 9;
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container2, item2) {
      var borderTopValue = getComputedStyle(container2).getPropertyValue("border-top-width");
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container2).getPropertyValue("padding-top");
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container2.getBoundingClientRect();
      var itemRect = item2.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container2.scrollTop;
      var elementHeight = container2.clientHeight;
      var itemHeight = this.getOuterHeight(item2);
      if (offset < 0) {
        container2.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container2.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection && document.selection.empty) {
        try {
          document.selection.empty();
        } catch (error) {
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      }
      if (this.calculatedScrollbarWidth != null) {
        return this.calculatedScrollbarWidth;
      }
      var scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }, {
    key: "calculateBodyScrollbarWidth",
    value: function calculateBodyScrollbarWidth() {
      return window.innerWidth - document.documentElement.offsetWidth;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};
        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser.version = matched.version;
        }
        if (this.browser.chrome) {
          this.browser.webkit = true;
        } else if (this.browser.webkit) {
          this.browser.safari = true;
        }
      }
      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "blockBodyScroll",
    value: function blockBodyScroll() {
      var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      var hasScrollbarWidth = !!document.body.style.getPropertyValue("--scrollbar-width");
      !hasScrollbarWidth && document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
      this.addClass(document.body, className);
    }
  }, {
    key: "unblockBodyScroll",
    value: function unblockBodyScroll() {
      var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
      document.body.style.removeProperty("--scrollbar-width");
      this.removeClass(document.body, className);
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return element && (element.clientHeight !== 0 || element.getClientRects().length !== 0 || getComputedStyle(element).display !== "none");
    }
  }, {
    key: "isExist",
    value: function isExist(element) {
      return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var focusableElements = DomHandler2.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector));
      var visibleFocusableElements = [];
      var _iterator3 = _createForOfIteratorHelper$1(focusableElements), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display !== "none" && getComputedStyle(focusableElement).visibility !== "hidden") {
            visibleFocusableElements.push(focusableElement);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return visibleFocusableElements;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function getFirstFocusableElement(element, selector) {
      var focusableElements = DomHandler2.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function getLastFocusableElement(element, selector) {
      var focusableElements = DomHandler2.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    }
    /**
     * Focus an input element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     */
  }, {
    key: "focus",
    value: function focus(el, scrollTo) {
      var preventScroll = scrollTo === void 0 ? true : !scrollTo;
      el && document.activeElement !== el && el.focus({
        preventScroll
      });
    }
    /**
     * Focus the first focusable element if it does not already have focus.
     *
     * @param {HTMLElement} el a HTML element
     * @param {boolean} scrollTo flag to control whether to scroll to the element, false by default
     * @return {HTMLElement | undefined} the first focusable HTML element found
     */
  }, {
    key: "focusFirstElement",
    value: function focusFirstElement(el, scrollTo) {
      if (!el) {
        return;
      }
      var firstFocusableElement = DomHandler2.getFirstFocusableElement(el);
      firstFocusableElement && DomHandler2.focus(firstFocusableElement, scrollTo);
      return firstFocusableElement;
    }
  }, {
    key: "getCursorOffset",
    value: function getCursorOffset(el, prevText, nextText, currentText) {
      if (el) {
        var style = getComputedStyle(el);
        var ghostDiv = document.createElement("div");
        ghostDiv.style.position = "absolute";
        ghostDiv.style.top = "0px";
        ghostDiv.style.left = "0px";
        ghostDiv.style.visibility = "hidden";
        ghostDiv.style.pointerEvents = "none";
        ghostDiv.style.overflow = style.overflow;
        ghostDiv.style.width = style.width;
        ghostDiv.style.height = style.height;
        ghostDiv.style.padding = style.padding;
        ghostDiv.style.border = style.border;
        ghostDiv.style.overflowWrap = style.overflowWrap;
        ghostDiv.style.whiteSpace = style.whiteSpace;
        ghostDiv.style.lineHeight = style.lineHeight;
        ghostDiv.innerHTML = prevText.replace(/\r\n|\r|\n/g, "<br />");
        var ghostSpan = document.createElement("span");
        ghostSpan.textContent = currentText;
        ghostDiv.appendChild(ghostSpan);
        var text = document.createTextNode(nextText);
        ghostDiv.appendChild(text);
        document.body.appendChild(ghostDiv);
        var offsetLeft = ghostSpan.offsetLeft, offsetTop = ghostSpan.offsetTop, clientHeight = ghostSpan.clientHeight;
        document.body.removeChild(ghostDiv);
        return {
          left: Math.abs(offsetLeft - el.scrollLeft),
          top: Math.abs(offsetTop - el.scrollTop) + clientHeight
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    }
  }, {
    key: "invokeElementMethod",
    value: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    }
  }, {
    key: "isClickable",
    value: function isClickable(element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || this.hasClass(element, "p-button") || this.hasClass(element.parentElement, "p-button") || this.hasClass(element.parentElement, "p-checkbox") || this.hasClass(element.parentElement, "p-radiobutton");
    }
  }, {
    key: "applyStyle",
    value: function applyStyle(element, style) {
      if (typeof style === "string") {
        element.style.cssText = style;
      } else {
        for (var prop in style) {
          element.style[prop] = style[prop];
        }
      }
    }
  }, {
    key: "exportCSV",
    value: function exportCSV(csv, filename) {
      var blob = new Blob([csv], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + ".csv");
      } else {
        var isDownloaded = DomHandler2.saveAs({
          name: filename + ".csv",
          src: URL.createObjectURL(blob)
        });
        if (!isDownloaded) {
          csv = "data:text/csv;charset=utf-8," + csv;
          window.open(encodeURI(csv));
        }
      }
    }
  }, {
    key: "saveAs",
    value: function saveAs(file) {
      if (file) {
        var link = document.createElement("a");
        if (link.download !== void 0) {
          var name = file.name, src = file.src;
          link.setAttribute("href", src);
          link.setAttribute("download", name);
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return true;
        }
      }
      return false;
    }
  }, {
    key: "createInlineStyle",
    value: function createInlineStyle(nonce, styleContainer) {
      var styleElement = document.createElement("style");
      DomHandler2.addNonce(styleElement, nonce);
      if (!styleContainer) {
        styleContainer = document.head;
      }
      styleContainer.appendChild(styleElement);
      return styleElement;
    }
  }, {
    key: "removeInlineStyle",
    value: function removeInlineStyle(styleElement) {
      if (this.isExist(styleElement)) {
        try {
          styleElement.parentNode.removeChild(styleElement);
        } catch (error) {
        }
        styleElement = null;
      }
      return styleElement;
    }
  }, {
    key: "addNonce",
    value: function addNonce(styleElement, nonce) {
      try {
        if (!nonce) {
          nonce = process.env.REACT_APP_CSS_NONCE;
        }
      } catch (error) {
      }
      nonce && styleElement.setAttribute("nonce", nonce);
    }
  }, {
    key: "getTargetElement",
    value: function getTargetElement(target) {
      if (!target) {
        return null;
      }
      if (target === "document") {
        return document;
      } else if (target === "window") {
        return window;
      } else if (_typeof$a(target) === "object" && target.hasOwnProperty("current")) {
        return this.isExist(target.current) ? target.current : null;
      }
      var isFunction = function isFunction2(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
      };
      var element = isFunction(target) ? target() : target;
      return this.isDocument(element) || this.isExist(element) ? element : null;
    }
    /**
     * Get the attribute names for an element and sorts them alpha for comparison
     */
  }, {
    key: "getAttributeNames",
    value: function getAttributeNames(node) {
      var index;
      var rv;
      var attrs;
      rv = [];
      attrs = node.attributes;
      for (index = 0; index < attrs.length; ++index) {
        rv.push(attrs[index].nodeName);
      }
      rv.sort();
      return rv;
    }
    /**
     * Compare two elements for equality.  Even will compare if the style element
     * is out of order for example:
     *
     * elem1 = style="color: red; font-size: 28px"
     * elem2 = style="font-size: 28px; color: red"
     */
  }, {
    key: "isEqualElement",
    value: function isEqualElement(elm1, elm2) {
      var attrs1;
      var attrs2;
      var name;
      var node1;
      var node2;
      attrs1 = DomHandler2.getAttributeNames(elm1);
      attrs2 = DomHandler2.getAttributeNames(elm2);
      if (attrs1.join(",") !== attrs2.join(",")) {
        return false;
      }
      for (var index = 0; index < attrs1.length; ++index) {
        name = attrs1[index];
        if (name === "style") {
          var astyle = elm1.style;
          var bstyle = elm2.style;
          var rexDigitsOnly = /^\d+$/;
          for (var _i3 = 0, _Object$keys = Object.keys(astyle); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];
            if (!rexDigitsOnly.test(key) && astyle[key] !== bstyle[key]) {
              return false;
            }
          }
        } else if (elm1.getAttribute(name) !== elm2.getAttribute(name)) {
          return false;
        }
      }
      for (node1 = elm1.firstChild, node2 = elm2.firstChild; node1 && node2; node1 = node1.nextSibling, node2 = node2.nextSibling) {
        if (node1.nodeType !== node2.nodeType) {
          return false;
        }
        if (node1.nodeType === 1) {
          if (!DomHandler2.isEqualElement(node1, node2)) {
            return false;
          }
        } else if (node1.nodeValue !== node2.nodeValue) {
          return false;
        }
      }
      if (node1 || node2) {
        return false;
      }
      return true;
    }
  }, {
    key: "hasCSSAnimation",
    value: function hasCSSAnimation(element) {
      if (element) {
        var style = getComputedStyle(element);
        var animationDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        return animationDuration > 0;
      }
      return false;
    }
  }, {
    key: "hasCSSTransition",
    value: function hasCSSTransition(element) {
      if (element) {
        var style = getComputedStyle(element);
        var transitionDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return transitionDuration > 0;
      }
      return false;
    }
  }]);
})();
_defineProperty$a(DomHandler, "DATA_PROPS", ["data-"]);
_defineProperty$a(DomHandler, "ARIA_PROPS", ["aria", "focus-target"]);
function EventBus() {
  var allHandlers = /* @__PURE__ */ new Map();
  return {
    on: function on(type, handler2) {
      var handlers = allHandlers.get(type);
      if (!handlers) {
        handlers = [handler2];
      } else {
        handlers.push(handler2);
      }
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler2) {
      var handlers = allHandlers.get(type);
      handlers && handlers.splice(handlers.indexOf(handler2) >>> 0, 1);
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      handlers && handlers.slice().forEach(function(handler2) {
        return handler2(evt);
      });
    }
  };
}
function _extends$f() {
  return _extends$f = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$f.apply(null, arguments);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$a(r)) || e) {
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
function _unsupportedIterableToArray$a(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$a(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$a(r, a) : void 0;
  }
}
function _arrayLikeToArray$a(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var ObjectUtils = /* @__PURE__ */ (function() {
  function ObjectUtils2() {
    _classCallCheck(this, ObjectUtils2);
  }
  return _createClass(ObjectUtils2, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field && obj1 && _typeof$a(obj1) === "object" && obj2 && _typeof$a(obj2) === "object") {
        return this.deepEquals(this.resolveFieldData(obj1, field), this.resolveFieldData(obj2, field));
      }
      return this.deepEquals(obj1, obj2);
    }
    /**
     * Compares two JSON objects for deep equality recursively comparing both objects.
     * @param {*} a the first JSON object
     * @param {*} b the second JSON object
     * @returns true if equals, false it not
     */
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) {
        return true;
      }
      if (a && b && _typeof$a(a) === "object" && _typeof$a(b) === "object") {
        var arrA = Array.isArray(a);
        var arrB = Array.isArray(b);
        var i;
        var length;
        var key;
        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            if (!this.deepEquals(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
        if (arrA !== arrB) {
          return false;
        }
        var dateA = a instanceof Date;
        var dateB = b instanceof Date;
        if (dateA !== dateB) {
          return false;
        }
        if (dateA && dateB) {
          return a.getTime() === b.getTime();
        }
        var regexpA = a instanceof RegExp;
        var regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) {
          return false;
        }
        if (regexpA && regexpB) {
          return a.toString() === b.toString();
        }
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
          return false;
        }
        for (i = length; i-- !== 0; ) {
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
            return false;
          }
        }
        for (i = length; i-- !== 0; ) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (!data || !field) {
        return null;
      }
      try {
        var value = data[field];
        if (this.isNotEmpty(value)) {
          return value;
        }
      } catch (_unused) {
      }
      if (Object.keys(data).length) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (this.isNotEmpty(data[field])) {
          return data[field];
        } else if (field.indexOf(".") === -1) {
          return data[field];
        }
        var fields = field.split(".");
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
      return null;
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }
      return Object.keys(obj1).filter(function(key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function(result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }
    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
  }, {
    key: "reduceKeys",
    value: function reduceKeys(obj, startsWiths) {
      var result = {};
      if (!obj || !startsWiths || startsWiths.length === 0) {
        return result;
      }
      Object.keys(obj).filter(function(key) {
        return startsWiths.some(function(value) {
          return key.startsWith(value);
        });
      }).forEach(function(key) {
        result[key] = obj[key];
        delete obj[key];
      });
      return result;
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      if (value && from !== to) {
        if (to >= value.length) {
          to = to % value.length;
          from = from % value.length;
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list2, dataKey) {
      var _this = this;
      if (list2) {
        return dataKey ? list2.findIndex(function(item2) {
          return _this.equals(item2, value, dataKey);
        }) : list2.findIndex(function(item2) {
          return item2 === value;
        });
      }
      return -1;
    }
  }, {
    key: "getJSXElement",
    value: function getJSXElement(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getItemValue",
    value: function getItemValue(obj) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "getProp",
    value: function getProp(props) {
      var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var defaultProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var value = props ? props[prop] : void 0;
      return value === void 0 ? defaultProps[prop] : value;
    }
  }, {
    key: "getPropCaseInsensitive",
    value: function getPropCaseInsensitive(props, prop) {
      var defaultProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var fkey = this.toFlatCase(prop);
      for (var key in props) {
        if (props.hasOwnProperty(key) && this.toFlatCase(key) === fkey) {
          return props[key];
        }
      }
      for (var _key3 in defaultProps) {
        if (defaultProps.hasOwnProperty(_key3) && this.toFlatCase(_key3) === fkey) {
          return defaultProps[_key3];
        }
      }
      return void 0;
    }
  }, {
    key: "getMergedProps",
    value: function getMergedProps(props, defaultProps) {
      return Object.assign({}, defaultProps, props);
    }
  }, {
    key: "getDiffProps",
    value: function getDiffProps(props, defaultProps) {
      return this.findDiffKeys(props, defaultProps);
    }
    /**
     * Gets the value of a property which can be a function or a direct value.
     * If the property is a function, it will be invoked with the provided parameters.
     * @param {*} obj - The object to get the value from
     * @param {...*} params - Parameters to pass to the function if obj is a function
     * @returns {*} The resolved value
     */
  }, {
    key: "getPropValue",
    value: function getPropValue(obj) {
      if (!this.isFunction(obj)) {
        return obj;
      }
      for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }
      if (params.length === 1) {
        var param = params[0];
        return obj(Array.isArray(param) ? param[0] : param);
      }
      return obj.apply(void 0, params);
    }
  }, {
    key: "getComponentProp",
    value: function getComponentProp(component) {
      var prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var defaultProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.isNotEmpty(component) ? this.getProp(component.props, prop, defaultProps) : void 0;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(component, defaultProps) {
      return this.isNotEmpty(component) ? this.getMergedProps(component.props, defaultProps) : void 0;
    }
  }, {
    key: "getComponentDiffProps",
    value: function getComponentDiffProps(component, defaultProps) {
      return this.isNotEmpty(component) ? this.getDiffProps(component.props, defaultProps) : void 0;
    }
  }, {
    key: "isValidChild",
    value: function isValidChild(child, type, validTypes) {
      if (child) {
        var _child$type;
        var childType = this.getComponentProp(child, "__TYPE") || (child.type ? child.type.displayName : void 0);
        if (!childType && child !== null && child !== void 0 && (_child$type = child.type) !== null && _child$type !== void 0 && (_child$type = _child$type._payload) !== null && _child$type !== void 0 && _child$type.value) {
          childType = child.type._payload.value.find(function(v) {
            return v === type;
          });
        }
        var isValid = childType === type;
        try {
          var messageTypes;
          if (false) ;
        } catch (error) {
        }
        return isValid;
      }
      return false;
    }
  }, {
    key: "getRefElement",
    value: function getRefElement(ref) {
      if (ref) {
        return _typeof$a(ref) === "object" && ref.hasOwnProperty("current") ? ref.current : ref;
      }
      return null;
    }
  }, {
    key: "combinedRefs",
    value: function combinedRefs(innerRef, forwardRef) {
      if (innerRef && forwardRef) {
        if (typeof forwardRef === "function") {
          forwardRef(innerRef.current);
        } else {
          forwardRef.current = innerRef.current;
        }
      }
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }
      return str;
    }
  }, {
    key: "toFlatCase",
    value: function toFlatCase(str) {
      return this.isNotEmpty(str) && this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
    }
  }, {
    key: "toCapitalCase",
    value: function toCapitalCase(str) {
      return this.isNotEmpty(str) && this.isString(str) ? str[0].toUpperCase() + str.slice(1) : str;
    }
  }, {
    key: "trim",
    value: function trim(value) {
      return this.isNotEmpty(value) && this.isString(value) ? value.trim() : value;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$a(value) === "object" && Object.keys(value).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !this.isEmpty(value);
    }
  }, {
    key: "isFunction",
    value: function isFunction(value) {
      return !!(value && value.constructor && value.call && value.apply);
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return value !== null && value instanceof Object && value.constructor === Object;
    }
  }, {
    key: "isDate",
    value: function isDate(value) {
      return value !== null && value instanceof Date && value.constructor === Date;
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return value !== null && Array.isArray(value);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return value !== null && typeof value === "string";
    }
  }, {
    key: "isPrintableCharacter",
    value: function isPrintableCharacter() {
      var _char = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
    }
  }, {
    key: "isLetter",
    value: function isLetter(_char2) {
      return /^[a-zA-Z\u00C0-\u017F]$/.test(_char2);
    }
  }, {
    key: "isScalar",
    value: function isScalar(value) {
      return value != null && (typeof value === "string" || typeof value === "number" || typeof value === "bigint" || typeof value === "boolean");
    }
    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
  }, {
    key: "findLast",
    value: function findLast(arr, callback) {
      var item2;
      if (this.isNotEmpty(arr)) {
        try {
          item2 = arr.findLast(callback);
        } catch (_unused2) {
          item2 = _toConsumableArray$6(arr).reverse().find(callback);
        }
      }
      return item2;
    }
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
  }, {
    key: "findLastIndex",
    value: function findLastIndex(arr, callback) {
      var index = -1;
      if (this.isNotEmpty(arr)) {
        try {
          index = arr.findLastIndex(callback);
        } catch (_unused3) {
          index = arr.lastIndexOf(_toConsumableArray$6(arr).reverse().find(callback));
        }
      }
      return index;
    }
  }, {
    key: "sort",
    value: function sort(value1, value2) {
      var order = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var comparator = arguments.length > 3 ? arguments[3] : void 0;
      var nullSortOrder = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1;
      var result = this.compare(value1, value2, comparator, order);
      var finalSortOrder = order;
      if (this.isEmpty(value1) || this.isEmpty(value2)) {
        finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
      }
      return finalSortOrder * result;
    }
  }, {
    key: "compare",
    value: function compare(value1, value2, comparator) {
      var order = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      var result = -1;
      var emptyValue1 = this.isEmpty(value1);
      var emptyValue2 = this.isEmpty(value2);
      if (emptyValue1 && emptyValue2) {
        result = 0;
      } else if (emptyValue1) {
        result = order;
      } else if (emptyValue2) {
        result = -order;
      } else if (typeof value1 === "string" && typeof value2 === "string") {
        result = comparator(value1, value2);
      } else {
        result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }
      return result;
    }
  }, {
    key: "localeComparator",
    value: function localeComparator(locale) {
      return new Intl.Collator(locale, {
        numeric: true
      }).compare;
    }
  }, {
    key: "findChildrenByKey",
    value: function findChildrenByKey(data, key) {
      var _iterator = _createForOfIteratorHelper(data), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item2 = _step.value;
          if (item2.key === key) {
            return item2.children || [];
          } else if (item2.children) {
            var result = this.findChildrenByKey(item2.children, key);
            if (result.length > 0) {
              return result;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return [];
    }
    /**
     * This function takes mutates and object with a new value given
     * a specific field. This will handle deeply nested fields that
     * need to be modified or created.
     *
     * e.g:
     * data = {
     *  nested: {
     *      foo: "bar"
     *  }
     * }
     *
     * field = "nested.foo"
     * value = "baz"
     *
     * The function will mutate data to be
     * e.g:
     * data = {
     *  nested: {
     *      foo: "baz"
     *  }
     * }
     *
     * @param {object} data the object to be modified
     * @param {string} field the field in the object to replace
     * @param {any} value the value to have replaced in the field
     */
  }, {
    key: "mutateFieldData",
    value: function mutateFieldData(data, field, value) {
      if (_typeof$a(data) !== "object" || typeof field !== "string") {
        return;
      }
      var fields = field.split(".");
      var obj = data;
      for (var i = 0, len = fields.length; i < len; ++i) {
        if (i + 1 - len === 0) {
          obj[fields[i]] = value;
          break;
        }
        if (!obj[fields[i]]) {
          obj[fields[i]] = {};
        }
        obj = obj[fields[i]];
      }
    }
    /**
     * This helper function takes an object and a dot-separated key path. It traverses the object based on the path,
     * returning the value at the specified depth. If any part of the path is missing or undefined, it returns undefined.
     *
     * Example:
     * const obj = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
     * const path = 'address.city';
     * const result = ObjectUtils.getNestedValue(obj, path);
     * console.log(result); // Output: "Wonderland"
     *
     * @param {object} obj - The object to traverse.
     * @param {string} path - The dot-separated key path.
     * @returns {*} The value at the specified depth, or undefined if any part of the path is missing or undefined.
     */
  }, {
    key: "getNestedValue",
    value: function getNestedValue(obj, path) {
      return path.split(".").reduce(function(acc, part) {
        return acc && acc[part] !== void 0 ? acc[part] : void 0;
      }, obj);
    }
    /**
     * This function takes an object and a dot-separated key path. It traverses the object based on the path,
     * returning the value at the specified depth. If any part of the path is missing or undefined, it returns undefined.
     *
     * Example:
     * const objA = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
     * const objB = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
     * const result = ObjectUtils.absoluteCompare(objA, objB);
     * console.log(result); // Output: true
     *
     * const objC = { name: 'Alice', address: { city: 'Wonderland', zip: 12346 } };
     * const result2 = ObjectUtils.absoluteCompare(objA, objC);
     * console.log(result2); // Output: false
     *
     * @param {object} objA - The first object to compare.
     * @param {object} objB - The second object to compare.
     * @param {number} [maxDepth=1] - The maximum depth to compare.
     * @param {number} [currentDepth=0] - The current depth (used internally for recursion).
     * @returns {boolean} True if the objects are equal within the specified depth, false otherwise.
     *
     */
  }, {
    key: "absoluteCompare",
    value: function absoluteCompare(objA, objB) {
      var maxDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var currentDepth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      if (!objA || !objB) return true;
      if (currentDepth > maxDepth) return true;
      if (_typeof$a(objA) !== _typeof$a(objB)) return false;
      var aKeys = Object.keys(objA);
      var bKeys = Object.keys(objB);
      if (aKeys.length !== bKeys.length) return false;
      for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
        var key = _aKeys[_i];
        var aValue = objA[key];
        var bValue = objB[key];
        var isObject = ObjectUtils2.isObject(aValue) && ObjectUtils2.isObject(bValue);
        var isFunction = ObjectUtils2.isFunction(aValue) && ObjectUtils2.isFunction(bValue);
        if ((isObject || isFunction) && !this.absoluteCompare(aValue, bValue, maxDepth, currentDepth + 1)) return false;
        if (!isObject && aValue !== bValue) return false;
      }
      return true;
    }
    /**
     * This helper function takes two objects and a list of keys to compare. It compares the values of the specified keys
     * in both objects. If any comparison fails, it returns false. If all specified properties are equal, it returns true.
     * It performs a shallow comparison using absoluteCompare if no keys are provided.
     *
     * Example:
     * const objA = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
     * const objB = { name: 'Alice', address: { city: 'Wonderland', zip: 12345 } };
     * const keysToCompare = ['name', 'address.city', 'address.zip'];
     * const result = ObjectUtils.selectiveCompare(objA, objB, keysToCompare);
     * console.log(result); // Output: true
     *
     * const objC = { name: 'Alice', address: { city: 'Wonderland', zip: 12346 } };
     * const result2 = ObjectUtils.selectiveCompare(objA, objC, keysToCompare);
     * console.log(result2); // Output: false
     *
     * @param {object} a - The first object to compare.
     * @param {object} b - The second object to compare.
     * @param {string[]} [keysToCompare] - The keys to compare. If not provided, performs a shallow comparison using absoluteCompare.
     * @param {number} [maxDepth=1] - The maximum depth to compare if the variables are objects.
     * @returns {boolean} True if all specified properties are equal, false otherwise.
     */
  }, {
    key: "selectiveCompare",
    value: function selectiveCompare(a, b, keysToCompare) {
      var maxDepth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      if (a === b) return true;
      if (!a || !b || _typeof$a(a) !== "object" || _typeof$a(b) !== "object") return false;
      if (!keysToCompare) return this.absoluteCompare(a, b, 1);
      var _iterator2 = _createForOfIteratorHelper(keysToCompare), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var key = _step2.value;
          var aValue = this.getNestedValue(a, key);
          var bValue = this.getNestedValue(b, key);
          var isObject = _typeof$a(aValue) === "object" && aValue !== null && _typeof$a(bValue) === "object" && bValue !== null;
          if (isObject && !this.absoluteCompare(aValue, bValue, maxDepth)) return false;
          if (!isObject && aValue !== bValue) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return true;
    }
  }]);
})();
var lastId = 0;
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pr_id_";
  lastId++;
  return "".concat(prefix).concat(lastId);
}
function ownKeys$2$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2$1(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var IconUtils = /* @__PURE__ */ (function() {
  function IconUtils2() {
    _classCallCheck(this, IconUtils2);
  }
  return _createClass(IconUtils2, null, [{
    key: "getJSXIcon",
    value: function getJSXIcon(icon2) {
      var iconProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var content = null;
      if (icon2 !== null) {
        var iconType = _typeof$a(icon2);
        var className = classNames(iconProps.className, iconType === "string" && icon2);
        content = /* @__PURE__ */ React.createElement("span", _extends$f({}, iconProps, {
          className,
          key: UniqueComponentId("icon")
        }));
        if (iconType !== "string") {
          var defaultContentOptions = _objectSpread$2$1({
            iconProps,
            element: content
          }, options);
          return ObjectUtils.getJSXElement(icon2, defaultContentOptions);
        }
      }
      return content;
    }
  }]);
})();
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mergeProps(props) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!props) {
    return void 0;
  }
  var isFunction = function isFunction2(obj) {
    return typeof obj === "function";
  };
  var classNameMergeFunction = options.classNameMergeFunction;
  var hasMergeFunction = isFunction(classNameMergeFunction);
  return props.reduce(function(merged, ps) {
    if (!ps) {
      return merged;
    }
    var _loop = function _loop2() {
      var value = ps[key];
      if (key === "style") {
        merged.style = _objectSpread$b(_objectSpread$b({}, merged.style), ps.style);
      } else if (key === "className") {
        var newClassName = "";
        if (hasMergeFunction) {
          newClassName = classNameMergeFunction(merged.className, ps.className);
        } else {
          newClassName = [merged.className, ps.className].join(" ").trim();
        }
        merged.className = newClassName || void 0;
      } else if (isFunction(value)) {
        var existingFn = merged[key];
        merged[key] = existingFn ? function() {
          existingFn.apply(void 0, arguments);
          value.apply(void 0, arguments);
        } : value;
      } else {
        merged[key] = value;
      }
    };
    for (var key in ps) {
      _loop();
    }
    return merged;
  }, {});
}
function handler() {
  var zIndexes = [];
  var generateZIndex = function generateZIndex2(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  var revertZIndex = function revertZIndex2(zIndex) {
    zIndexes = zIndexes.filter(function(obj) {
      return obj.value !== zIndex;
    });
  };
  var getCurrentZIndex = function getCurrentZIndex2(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex2(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return _toConsumableArray$6(zIndexes).reverse().find(function(obj) {
      return autoZIndex ? true : obj.key === key;
    }) || {
      key,
      value: baseZIndex
    };
  };
  var getZIndex = function getZIndex2(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set(key, el, autoZIndex, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, autoZIndex, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(ZIndexUtils.get(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: function getCurrent(key, autoZIndex) {
      return getCurrentZIndex(key, autoZIndex);
    }
  };
}
var ZIndexUtils = handler();
function _arrayWithHoles$7(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$7(r, l) {
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
function _arrayLikeToArray$9(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$9(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$9(r, a) : void 0;
  }
}
function _nonIterableRest$7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$7(r, e) {
  return _arrayWithHoles$7(r) || _iterableToArrayLimit$7(r, e) || _unsupportedIterableToArray$9(r, e) || _nonIterableRest$7();
}
var usePrevious = function usePrevious2(newValue) {
  var ref = React.useRef(null);
  React.useEffect(function() {
    ref.current = newValue;
    return function() {
      ref.current = null;
    };
  }, [newValue]);
  return ref.current;
};
var useUnmountEffect = function useUnmountEffect2(fn) {
  return React.useEffect(function() {
    return fn;
  }, []);
};
var useEventListener = function useEventListener2(_ref) {
  var _ref$target = _ref.target, target = _ref$target === void 0 ? "document" : _ref$target, type = _ref.type, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var targetRef = React.useRef(null);
  var listenerRef = React.useRef(null);
  var prevListener = usePrevious(listener);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var bindTarget = bindOptions.target;
    if (ObjectUtils.isNotEmpty(bindTarget)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindTarget));
    }
    if (!listenerRef.current && targetRef.current) {
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      targetRef.current.addEventListener(type, listenerRef.current, options);
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      targetRef.current.removeEventListener(type, listenerRef.current, options);
      listenerRef.current = null;
    }
  };
  var dispose = function dispose2() {
    unbind();
    prevListener = null;
    prevOptions = null;
  };
  var updateTarget = React.useCallback(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React.useEffect(function() {
    updateTarget();
  }, [updateTarget]);
  React.useEffect(function() {
    var listenerChanged = "".concat(prevListener) !== "".concat(listener);
    var optionsChanged = prevOptions !== options;
    var listenerExists = listenerRef.current;
    if (listenerExists && (listenerChanged || optionsChanged)) {
      unbind();
      when && bind();
    } else if (!listenerExists) {
      dispose();
    }
  }, [listener, options, when]);
  useUnmountEffect(function() {
    dispose();
  });
  return [bind, unbind];
};
var groupToDisplayedElements = {};
var useDisplayOrder = function useDisplayOrder2(group) {
  var isVisible = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var _React$useState = React.useState(function() {
    return UniqueComponentId();
  }), _React$useState2 = _slicedToArray$7(_React$useState, 1), uid = _React$useState2[0];
  var _React$useState3 = React.useState(0), _React$useState4 = _slicedToArray$7(_React$useState3, 2), displayOrder = _React$useState4[0], setDisplayOrder = _React$useState4[1];
  React.useEffect(function() {
    if (isVisible) {
      if (!groupToDisplayedElements[group]) {
        groupToDisplayedElements[group] = [];
      }
      var newDisplayOrder = groupToDisplayedElements[group].push(uid);
      setDisplayOrder(newDisplayOrder);
      return function() {
        delete groupToDisplayedElements[group][newDisplayOrder - 1];
        var lastIndex = groupToDisplayedElements[group].length - 1;
        var lastOrder = ObjectUtils.findLastIndex(groupToDisplayedElements[group], function(el) {
          return el !== void 0;
        });
        if (lastOrder !== lastIndex) {
          groupToDisplayedElements[group].splice(lastOrder + 1);
        }
        setDisplayOrder(void 0);
      };
    }
  }, [group, uid, isVisible]);
  return displayOrder;
};
function _arrayWithoutHoles$5(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$9(r);
}
function _iterableToArray$5(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread$5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$5(r) {
  return _arrayWithoutHoles$5(r) || _iterableToArray$5(r) || _unsupportedIterableToArray$9(r) || _nonIterableSpread$5();
}
var ESC_KEY_HANDLING_PRIORITIES = {
  SIDEBAR: 100,
  TOOLTIP: 1200
};
var globalEscKeyHandlingLogic = {
  /**
   * Mapping from ESC_KEY_HANDLING_PRIORITY to array of related listeners, grouped by priority
   * @example
   * Map<{
   *     [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>,
   *     [ESC_KEY_HANDLING_PRIORITIES.DIALOG]: Map<{
   *         1: () => {...},
   *         2: () => {...}
   *     }>
   * }>;
   */
  escKeyListeners: /* @__PURE__ */ new Map(),
  /**
   * Keydown handler (attached to any keydown)
   */
  onGlobalKeyDown: function onGlobalKeyDown(event) {
    if (event.code !== "Escape") {
      return;
    }
    var escKeyListeners = globalEscKeyHandlingLogic.escKeyListeners;
    var maxPrimaryPriority = Math.max.apply(Math, _toConsumableArray$5(escKeyListeners.keys()));
    var theMostImportantEscHandlersSet = escKeyListeners.get(maxPrimaryPriority);
    var maxSecondaryPriority = Math.max.apply(Math, _toConsumableArray$5(theMostImportantEscHandlersSet.keys()));
    var theMostImportantEscHandler = theMostImportantEscHandlersSet.get(maxSecondaryPriority);
    theMostImportantEscHandler(event);
  },
  /**
   * Attach global keydown listener if there are any "esc" key handlers assigned,
   * otherwise detach.
   */
  refreshGlobalKeyDownListener: function refreshGlobalKeyDownListener() {
    var document2 = DomHandler.getTargetElement("document");
    if (this.escKeyListeners.size > 0) {
      document2.addEventListener("keydown", this.onGlobalKeyDown);
    } else {
      document2.removeEventListener("keydown", this.onGlobalKeyDown);
    }
  },
  /**
   * Add "Esc" key handler
   */
  addListener: function addListener(callback, _ref) {
    var _this = this;
    var _ref2 = _slicedToArray$7(_ref, 2), primaryPriority = _ref2[0], secondaryPriority = _ref2[1];
    var escKeyListeners = this.escKeyListeners;
    if (!escKeyListeners.has(primaryPriority)) {
      escKeyListeners.set(primaryPriority, /* @__PURE__ */ new Map());
    }
    var primaryPriorityListeners = escKeyListeners.get(primaryPriority);
    if (primaryPriorityListeners.has(secondaryPriority)) {
      throw new Error("Unexpected: global esc key listener with priority [".concat(primaryPriority, ", ").concat(secondaryPriority, "] already exists."));
    }
    primaryPriorityListeners.set(secondaryPriority, callback);
    this.refreshGlobalKeyDownListener();
    return function() {
      primaryPriorityListeners["delete"](secondaryPriority);
      if (primaryPriorityListeners.size === 0) {
        escKeyListeners["delete"](primaryPriority);
      }
      _this.refreshGlobalKeyDownListener();
    };
  }
};
var useGlobalOnEscapeKey = function useGlobalOnEscapeKey2(_ref3) {
  var callback = _ref3.callback, when = _ref3.when, priority = _ref3.priority;
  useEffect(function() {
    if (!when) {
      return;
    }
    return globalEscKeyHandlingLogic.addListener(callback, priority);
  }, [callback, when, priority]);
};
var useMergeProps = function useMergeProps2() {
  var context = useContext(PrimeReactContext);
  return function() {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }
    return mergeProps(props, context === null || context === void 0 ? void 0 : context.ptOptions);
  };
};
var useMountEffect = function useMountEffect2(fn) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return fn && fn();
    }
  }, []);
};
var useOverlayScrollListener = function useOverlayScrollListener2(_ref) {
  var target = _ref.target, listener = _ref.listener, options = _ref.options, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  var context = React.useContext(PrimeReactContext);
  var targetRef = React.useRef(null);
  var listenerRef = React.useRef(null);
  var scrollableParentsRef = React.useRef([]);
  var prevListener = usePrevious(listener);
  var prevOptions = usePrevious(options);
  var bind = function bind2() {
    var bindOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ObjectUtils.isNotEmpty(bindOptions.target)) {
      unbind();
      (bindOptions.when || when) && (targetRef.current = DomHandler.getTargetElement(bindOptions.target));
    }
    if (!listenerRef.current && targetRef.current) {
      var hideOnScroll = context ? context.hideOverlaysOnDocumentScrolling : PrimeReact.hideOverlaysOnDocumentScrolling;
      var nodes = scrollableParentsRef.current = DomHandler.getScrollableParents(targetRef.current);
      if (!nodes.some(function(node) {
        return node === document.body || node === window;
      })) {
        nodes.push(hideOnScroll ? window : document.body);
      }
      listenerRef.current = function(event) {
        return listener && listener(event);
      };
      nodes.forEach(function(node) {
        return node.addEventListener("scroll", listenerRef.current, options);
      });
    }
  };
  var unbind = function unbind2() {
    if (listenerRef.current) {
      var nodes = scrollableParentsRef.current;
      nodes.forEach(function(node) {
        return node.removeEventListener("scroll", listenerRef.current, options);
      });
      listenerRef.current = null;
    }
  };
  var dispose = function dispose2() {
    unbind();
    scrollableParentsRef.current = null;
    prevListener = null;
    prevOptions = null;
  };
  var updateTarget = React.useCallback(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
    } else {
      unbind();
      targetRef.current = null;
    }
  }, [target, when]);
  React.useEffect(function() {
    updateTarget();
  }, [updateTarget]);
  React.useEffect(function() {
    var listenerChanged = "".concat(prevListener) !== "".concat(listener);
    var optionsChanged = prevOptions !== options;
    var listenerExists = listenerRef.current;
    if (listenerExists && (listenerChanged || optionsChanged)) {
      unbind();
      when && bind();
    } else if (!listenerExists) {
      dispose();
    }
  }, [listener, options, when]);
  useUnmountEffect(function() {
    dispose();
  });
  return [bind, unbind];
};
var useResizeListener = function useResizeListener2(_ref) {
  var listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;
  return useEventListener({
    target: "window",
    type: "resize",
    listener,
    when
  });
};
var useOverlayListener = function useOverlayListener2(_ref) {
  var target = _ref.target, overlay = _ref.overlay, _listener = _ref.listener, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when, _ref$type = _ref.type, type = _ref$type === void 0 ? "click" : _ref$type;
  var targetRef = React.useRef(null);
  var overlayRef = React.useRef(null);
  var _useEventListener = useEventListener({
    target: "window",
    type,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "outside",
        valid: event.which !== 3 && isOutsideClicked(event)
      });
    },
    when
  }), _useEventListener2 = _slicedToArray$7(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "resize",
        valid: !DomHandler.isTouchDevice()
      });
    },
    when
  }), _useResizeListener2 = _slicedToArray$7(_useResizeListener, 2), bindWindowResizeListener = _useResizeListener2[0], unbindWindowResizeListener = _useResizeListener2[1];
  var _useEventListener3 = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "orientationchange",
        valid: true
      });
    },
    when
  }), _useEventListener4 = _slicedToArray$7(_useEventListener3, 2), bindWindowOrientationChangeListener = _useEventListener4[0], unbindWindowOrientationChangeListener = _useEventListener4[1];
  var _useOverlayScrollList = useOverlayScrollListener({
    target,
    listener: function listener(event) {
      _listener && _listener(event, {
        type: "scroll",
        valid: true
      });
    },
    when
  }), _useOverlayScrollList2 = _slicedToArray$7(_useOverlayScrollList, 2), bindOverlayScrollListener = _useOverlayScrollList2[0], unbindOverlayScrollListener = _useOverlayScrollList2[1];
  var isOutsideClicked = function isOutsideClicked2(event) {
    return targetRef.current && !(targetRef.current.isSameNode(event.target) || targetRef.current.contains(event.target) || overlayRef.current && overlayRef.current.contains(event.target));
  };
  var bind = function bind2() {
    bindDocumentClickListener();
    bindWindowResizeListener();
    bindWindowOrientationChangeListener();
    bindOverlayScrollListener();
  };
  var unbind = function unbind2() {
    unbindDocumentClickListener();
    unbindWindowResizeListener();
    unbindWindowOrientationChangeListener();
    unbindOverlayScrollListener();
  };
  React.useEffect(function() {
    if (when) {
      targetRef.current = DomHandler.getTargetElement(target);
      overlayRef.current = DomHandler.getTargetElement(overlay);
    } else {
      unbind();
      targetRef.current = overlayRef.current = null;
    }
  }, [target, overlay, when]);
  useUnmountEffect(function() {
    unbind();
  });
  return [bind, unbind];
};
var _id = 0;
var useStyle = function useStyle2(css) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _useState = useState(false), _useState2 = _slicedToArray$7(_useState, 2), isLoaded = _useState2[0], setIsLoaded = _useState2[1];
  var styleRef = useRef(null);
  var context = useContext(PrimeReactContext);
  var defaultDocument = DomHandler.isClient() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media;
  var getCurrentStyleRef = function getCurrentStyleRef2(styleContainer) {
    var existingStyle = styleContainer.querySelector('style[data-primereact-style-id="'.concat(name, '"]'));
    if (existingStyle) {
      return existingStyle;
    }
    if (id !== void 0) {
      var existingElement = document2.getElementById(id);
      if (existingElement) {
        return existingElement;
      }
    }
    return document2.createElement("style");
  };
  var update = function update2(newCSS) {
    isLoaded && css !== newCSS && (styleRef.current.textContent = newCSS);
  };
  var load = function load2() {
    if (!document2 || isLoaded) {
      return;
    }
    var styleContainer = (context === null || context === void 0 ? void 0 : context.styleContainer) || document2.head;
    styleRef.current = getCurrentStyleRef(styleContainer);
    if (!styleRef.current.isConnected) {
      styleRef.current.type = "text/css";
      if (id) {
        styleRef.current.id = id;
      }
      if (media) {
        styleRef.current.media = media;
      }
      DomHandler.addNonce(styleRef.current, context && context.nonce || PrimeReact.nonce);
      styleContainer.appendChild(styleRef.current);
      if (name) {
        styleRef.current.setAttribute("data-primereact-style-id", name);
      }
    }
    styleRef.current.textContent = css;
    setIsLoaded(true);
  };
  var unload = function unload2() {
    if (!document2 || !styleRef.current) {
      return;
    }
    DomHandler.removeInlineStyle(styleRef.current);
    setIsLoaded(false);
  };
  useEffect(function() {
    if (!manual) {
      load();
    }
  }, [manual]);
  return {
    id,
    name,
    update,
    unload,
    load,
    isLoaded
  };
};
var useTimeout = function useTimeout2(fn) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var timeout = React.useRef(null);
  var savedCallback = React.useRef(null);
  var clear = React.useCallback(function() {
    return clearTimeout(timeout.current);
  }, [timeout.current]);
  React.useEffect(function() {
    savedCallback.current = fn;
  });
  React.useEffect(function() {
    function callback() {
      savedCallback.current();
    }
    if (when) {
      timeout.current = setTimeout(callback, delay);
      return clear;
    } else {
      clear();
    }
  }, [delay, when]);
  useUnmountEffect(function() {
    clear();
  });
  return [clear];
};
var useUpdateEffect = function useUpdateEffect2(fn, deps) {
  var mounted = React.useRef(false);
  return React.useEffect(function() {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    return fn && fn();
  }, deps);
};
function _arrayLikeToArray$8(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$4(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$8(r);
}
function _iterableToArray$4(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$8(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$8(r, a) : void 0;
  }
}
function _nonIterableSpread$4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$4(r) {
  return _arrayWithoutHoles$4(r) || _iterableToArray$4(r) || _unsupportedIterableToArray$8(r) || _nonIterableSpread$4();
}
function _typeof$9(o) {
  "@babel/helpers - typeof";
  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$9(o);
}
function toPrimitive$9(t, r) {
  if ("object" != _typeof$9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$9(t) {
  var i = toPrimitive$9(t, "string");
  return "symbol" == _typeof$9(i) ? i : i + "";
}
function _defineProperty$9(e, r, t) {
  return (r = toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty$9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var baseStyle = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var buttonStyles = "\n.p-button {\n    margin: 0;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon {\n    pointer-events: none;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-button-group .p-button {\n    margin: 0;\n}\n\n.p-button-group .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-button-group .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-button-group .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-button-group .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n\n.p-button-group-single .p-button:first-of-type {\n    border-top-right-radius: var(--border-radius) !important;\n    border-bottom-right-radius: var(--border-radius) !important;\n}\n\n.p-button-group-single .p-button:last-of-type {\n    border-top-left-radius: var(--border-radius) !important;\n    border-bottom-left-radius: var(--border-radius) !important;\n}\n";
var inputTextStyles = "\n.p-inputtext {\n    margin: 0;\n}\n\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -0.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label,\n.p-float-label .p-mention ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input:-webkit-autofill ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label,\n.p-float-label .p-tooltip-target-wrapper ~ label {\n    top: -0.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-right > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > svg,\n.p-input-icon-left > .p-input-prefix,\n.p-input-icon-right > .p-input-suffix {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
var iconStyles = "\n.p-icon {\n    display: inline-block;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\nsvg.p-icon {\n    pointer-events: auto;\n}\n\nsvg.p-icon g,\n.p-disabled svg.p-icon {\n    pointer-events: none;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var commonStyle = "\n@layer primereact {\n    .p-component, .p-component * {\n        box-sizing: border-box;\n    }\n\n    .p-hidden {\n        display: none;\n    }\n\n    .p-hidden-space {\n        visibility: hidden;\n    }\n\n    .p-reset {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        text-decoration: none;\n        font-size: 100%;\n        list-style: none;\n    }\n\n    .p-disabled, .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-component-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-unselectable-text {\n        user-select: none;\n    }\n\n    .p-scrollbar-measure {\n        width: 100px;\n        height: 100px;\n        overflow: scroll;\n        position: absolute;\n        top: -9999px;\n    }\n\n    @-webkit-keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n    @keyframes p-fadein {\n      0%   { opacity: 0; }\n      100% { opacity: 1; }\n    }\n\n    .p-link {\n        text-align: left;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-link:disabled {\n        cursor: default;\n    }\n\n    /* Non react overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity .1s linear;\n    }\n\n    /* React based overlay animations */\n    .p-connected-overlay-enter {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-enter-active {\n        opacity: 1;\n        transform: scaleY(1);\n        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-enter-done {\n        transform: none;\n    }\n\n    .p-connected-overlay-exit {\n        opacity: 1;\n    }\n\n    .p-connected-overlay-exit-active {\n        opacity: 0;\n        transition: opacity .1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        max-height: 1000px;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-toggleable-content-enter-done {\n        transform: none;\n    }\n\n    .p-toggleable-content-exit {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-exit-active {\n        overflow: hidden;\n        max-height: 0;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    /* @todo Refactor */\n    .p-menu .p-menuitem-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n    }\n\n    ".concat(buttonStyles, "\n    ").concat(inputTextStyles, "\n    ").concat(iconStyles, "\n}\n");
var ComponentBase = {
  cProps: void 0,
  cParams: void 0,
  cName: void 0,
  defaultProps: {
    pt: void 0,
    ptOptions: void 0,
    unstyled: false
  },
  context: {},
  globalCSS: void 0,
  classes: {},
  styles: "",
  extend: function extend() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var css = props.css;
    var defaultProps = _objectSpread$a(_objectSpread$a({}, props.defaultProps), ComponentBase.defaultProps);
    var inlineStyles2 = {};
    var getProps5 = function getProps6(props2) {
      var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      ComponentBase.context = context;
      ComponentBase.cProps = props2;
      return ObjectUtils.getMergedProps(props2, defaultProps);
    };
    var getOtherProps5 = function getOtherProps6(props2) {
      return ObjectUtils.getDiffProps(props2, defaultProps);
    };
    var getPTValue = function getPTValue2() {
      var _ComponentBase$contex;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      if (obj.hasOwnProperty("pt") && obj.pt !== void 0) {
        obj = obj.pt;
      }
      var originalkey = key;
      var isNestedParam = /./g.test(originalkey) && !!params[originalkey.split(".")[0]];
      var fkey = isNestedParam ? ObjectUtils.toFlatCase(originalkey.split(".")[1]) : ObjectUtils.toFlatCase(originalkey);
      var hostName = params.hostName && ObjectUtils.toFlatCase(params.hostName);
      var componentName = hostName || params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE) || "";
      var isTransition = fkey === "transition";
      var datasetPrefix = "data-pc-";
      var _getHostInstance = function getHostInstance(params2) {
        return params2 !== null && params2 !== void 0 && params2.props ? params2.hostName ? params2.props.__TYPE === params2.hostName ? params2.props : _getHostInstance(params2.parent) : params2.parent : void 0;
      };
      var getPropValue = function getPropValue2(name) {
        var _params$props, _getHostInstance2;
        return ((_params$props = params.props) === null || _params$props === void 0 ? void 0 : _params$props[name]) || ((_getHostInstance2 = _getHostInstance(params)) === null || _getHostInstance2 === void 0 ? void 0 : _getHostInstance2[name]);
      };
      ComponentBase.cParams = params;
      ComponentBase.cName = componentName;
      var _ref = getPropValue("ptOptions") || ComponentBase.context.ptOptions || {}, _ref$mergeSections = _ref.mergeSections, mergeSections = _ref$mergeSections === void 0 ? true : _ref$mergeSections, _ref$mergeProps = _ref.mergeProps, useMergeProps3 = _ref$mergeProps === void 0 ? false : _ref$mergeProps;
      var getPTClassValue = function getPTClassValue2() {
        var value = _getOptionValue.apply(void 0, arguments);
        if (Array.isArray(value)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray$4(value))
          };
        }
        if (ObjectUtils.isString(value)) {
          return {
            className: value
          };
        }
        if (value !== null && value !== void 0 && value.hasOwnProperty("className") && Array.isArray(value.className)) {
          return {
            className: classNames.apply(void 0, _toConsumableArray$4(value.className))
          };
        }
        return value;
      };
      var globalPT = searchInDefaultPT ? isNestedParam ? _useGlobalPT(getPTClassValue, originalkey, params) : _useDefaultPT(getPTClassValue, originalkey, params) : void 0;
      var self = isNestedParam ? void 0 : _usePT(_getPT(obj, componentName), getPTClassValue, originalkey, params);
      var datasetProps = !isTransition && _objectSpread$a(_objectSpread$a({}, fkey === "root" && _defineProperty$9({}, "".concat(datasetPrefix, "name"), params.props && params.props.__parentMetadata ? ObjectUtils.toFlatCase(params.props.__TYPE) : componentName)), {}, _defineProperty$9({}, "".concat(datasetPrefix, "section"), fkey));
      return mergeSections || !mergeSections && self ? useMergeProps3 ? mergeProps([globalPT, self, Object.keys(datasetProps).length ? datasetProps : {}], {
        classNameMergeFunction: (_ComponentBase$contex = ComponentBase.context.ptOptions) === null || _ComponentBase$contex === void 0 ? void 0 : _ComponentBase$contex.classNameMergeFunction
      }) : _objectSpread$a(_objectSpread$a(_objectSpread$a({}, globalPT), self), Object.keys(datasetProps).length ? datasetProps : {}) : _objectSpread$a(_objectSpread$a({}, self), Object.keys(datasetProps).length ? datasetProps : {});
    };
    var setMetaData = function setMetaData2() {
      var metadata = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var props2 = metadata.props, state = metadata.state;
      var ptm = function ptm2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return getPTValue((props2 || {}).pt, key, _objectSpread$a(_objectSpread$a({}, metadata), params));
      };
      var ptmo = function ptmo2() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return getPTValue(obj, key, params, false);
      };
      var isUnstyled = function isUnstyled2() {
        return ComponentBase.context.unstyled || PrimeReact.unstyled || props2.unstyled;
      };
      var cx = function cx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return !isUnstyled() ? _getOptionValue(css && css.classes, key, _objectSpread$a({
          props: props2,
          state
        }, params)) : void 0;
      };
      var sx = function sx2() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var when = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (when) {
          var _ComponentBase$contex2;
          var self = _getOptionValue(css && css.inlineStyles, key, _objectSpread$a({
            props: props2,
            state
          }, params));
          var base = _getOptionValue(inlineStyles2, key, _objectSpread$a({
            props: props2,
            state
          }, params));
          return mergeProps([base, self], {
            classNameMergeFunction: (_ComponentBase$contex2 = ComponentBase.context.ptOptions) === null || _ComponentBase$contex2 === void 0 ? void 0 : _ComponentBase$contex2.classNameMergeFunction
          });
        }
        return void 0;
      };
      return {
        ptm,
        ptmo,
        sx,
        cx,
        isUnstyled
      };
    };
    return _objectSpread$a(_objectSpread$a({
      getProps: getProps5,
      getOtherProps: getOtherProps5,
      setMetaData
    }, props), {}, {
      defaultProps
    });
  }
};
var _getOptionValue = function getOptionValue(obj) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var fKeys = String(ObjectUtils.toFlatCase(key)).split(".");
  var fKey = fKeys.shift();
  var matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find(function(k) {
    return ObjectUtils.toFlatCase(k) === fKey;
  }) : "";
  return fKey ? ObjectUtils.isObject(obj) ? _getOptionValue(ObjectUtils.getItemValue(obj[matchedPTOption], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(obj, params);
};
var _getPT = function _getPT2(pt) {
  var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var callback = arguments.length > 2 ? arguments[2] : void 0;
  var _usept = pt === null || pt === void 0 ? void 0 : pt._usept;
  var getValue = function getValue2(value) {
    var _ref3;
    var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _value = callback ? callback(value) : value;
    var _key = ObjectUtils.toFlatCase(key);
    return (_ref3 = checkSameKey ? _key !== ComponentBase.cName ? _value === null || _value === void 0 ? void 0 : _value[_key] : void 0 : _value === null || _value === void 0 ? void 0 : _value[_key]) !== null && _ref3 !== void 0 ? _ref3 : _value;
  };
  return ObjectUtils.isNotEmpty(_usept) ? {
    _usept,
    originalValue: getValue(pt.originalValue),
    value: getValue(pt.value)
  } : getValue(pt, true);
};
var _usePT = function _usePT2(pt, callback, key, params) {
  var fn = function fn2(value2) {
    return callback(value2, key, params);
  };
  if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
    var _ref4 = pt._usept || ComponentBase.context.ptOptions || {}, _ref4$mergeSections = _ref4.mergeSections, mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections, _ref4$mergeProps = _ref4.mergeProps, useMergeProps3 = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps, classNameMergeFunction = _ref4.classNameMergeFunction;
    var originalValue = fn(pt.originalValue);
    var value = fn(pt.value);
    if (originalValue === void 0 && value === void 0) {
      return void 0;
    } else if (ObjectUtils.isString(value)) {
      return value;
    } else if (ObjectUtils.isString(originalValue)) {
      return originalValue;
    }
    return mergeSections || !mergeSections && value ? useMergeProps3 ? mergeProps([originalValue, value], {
      classNameMergeFunction
    }) : _objectSpread$a(_objectSpread$a({}, originalValue), value) : value;
  }
  return fn(pt);
};
var getGlobalPT = function getGlobalPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, void 0, function(value) {
    return ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var getDefaultPT = function getDefaultPT2() {
  return _getPT(ComponentBase.context.pt || PrimeReact.pt, void 0, function(value) {
    return _getOptionValue(value, ComponentBase.cName, ComponentBase.cParams) || ObjectUtils.getItemValue(value, ComponentBase.cParams);
  });
};
var _useGlobalPT = function _useGlobalPT2(callback, key, params) {
  return _usePT(getGlobalPT(), callback, key, params);
};
var _useDefaultPT = function _useDefaultPT2(callback, key, params) {
  return _usePT(getDefaultPT(), callback, key, params);
};
var useHandleStyle = function useHandleStyle2(styles2) {
  var _isUnstyled = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  var config = arguments.length > 2 ? arguments[2] : void 0;
  var name = config.name, _config$styled = config.styled, styled = _config$styled === void 0 ? false : _config$styled, _config$hostName = config.hostName, hostName = _config$hostName === void 0 ? "" : _config$hostName;
  var globalCSS = _useGlobalPT(_getOptionValue, "global.css", ComponentBase.cParams);
  var componentName = ObjectUtils.toFlatCase(name);
  var _useStyle = useStyle(baseStyle, {
    name: "base",
    manual: true
  }), loadBaseStyle = _useStyle.load;
  var _useStyle2 = useStyle(commonStyle, {
    name: "common",
    manual: true
  }), loadCommonStyle = _useStyle2.load;
  var _useStyle3 = useStyle(globalCSS, {
    name: "global",
    manual: true
  }), loadGlobalStyle = _useStyle3.load;
  var _useStyle4 = useStyle(styles2, {
    name,
    manual: true
  }), loadComponentStyle = _useStyle4.load;
  var hook = function hook2(hookName) {
    if (!hostName) {
      var selfHook = _usePT(_getPT((ComponentBase.cProps || {}).pt, componentName), _getOptionValue, "hooks.".concat(hookName));
      var defaultHook = _useDefaultPT(_getOptionValue, "hooks.".concat(hookName));
      selfHook === null || selfHook === void 0 || selfHook();
      defaultHook === null || defaultHook === void 0 || defaultHook();
    }
  };
  hook("useMountEffect");
  useMountEffect(function() {
    loadBaseStyle();
    loadGlobalStyle();
    if (!_isUnstyled()) {
      loadCommonStyle();
      if (!styled) {
        loadComponentStyle();
      }
    }
  });
  useUpdateEffect(function() {
    hook("useUpdateEffect");
  });
  useUnmountEffect(function() {
    hook("useUnmountEffect");
  });
};
function _typeof$8(o) {
  "@babel/helpers - typeof";
  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$8(o);
}
function toPrimitive$8(t, r) {
  if ("object" != _typeof$8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$8(t) {
  var i = toPrimitive$8(t, "string");
  return "symbol" == _typeof$8(i) ? i : i + "";
}
function _defineProperty$8(e, r, t) {
  return (r = toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var CSSTransitionBase = {
  defaultProps: {
    __TYPE: "CSSTransition",
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, CSSTransitionBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, CSSTransitionBase.defaultProps);
  }
};
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty$8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var CSSTransition = /* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var props = CSSTransitionBase.getProps(inProps);
  var context = React.useContext(PrimeReactContext);
  var disabled = props.disabled || props.options && props.options.disabled || context && !context.cssTransition || !PrimeReact.cssTransition;
  var onEnter = function onEnter2(node, isAppearing) {
    props.onEnter && props.onEnter(node, isAppearing);
    props.options && props.options.onEnter && props.options.onEnter(node, isAppearing);
  };
  var onEntering = function onEntering2(node, isAppearing) {
    props.onEntering && props.onEntering(node, isAppearing);
    props.options && props.options.onEntering && props.options.onEntering(node, isAppearing);
  };
  var onEntered = function onEntered2(node, isAppearing) {
    props.onEntered && props.onEntered(node, isAppearing);
    props.options && props.options.onEntered && props.options.onEntered(node, isAppearing);
  };
  var onExit = function onExit2(node) {
    props.onExit && props.onExit(node);
    props.options && props.options.onExit && props.options.onExit(node);
  };
  var onExiting = function onExiting2(node) {
    props.onExiting && props.onExiting(node);
    props.options && props.options.onExiting && props.options.onExiting(node);
  };
  var onExited = function onExited2(node) {
    props.onExited && props.onExited(node);
    props.options && props.options.onExited && props.options.onExited(node);
  };
  useUpdateEffect(function() {
    if (disabled) {
      var node = ObjectUtils.getRefElement(props.nodeRef);
      if (props["in"]) {
        onEnter(node, true);
        onEntering(node, true);
        onEntered(node, true);
      } else {
        onExit(node);
        onExiting(node);
        onExited(node);
      }
    }
  }, [props["in"]]);
  if (disabled) {
    return props["in"] ? props.children : null;
  }
  var immutableProps = {
    nodeRef: props.nodeRef,
    "in": props["in"],
    appear: props.appear,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  };
  var mutableProps = {
    classNames: props.classNames,
    timeout: props.timeout,
    unmountOnExit: props.unmountOnExit
  };
  var mergedProps = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, mutableProps), props.options || {}), immutableProps);
  return /* @__PURE__ */ React.createElement(CSSTransition$1, mergedProps, props.children);
});
CSSTransition.displayName = "CSSTransition";
function _arrayWithHoles$6(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$6(r, l) {
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
function _arrayLikeToArray$7(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$7(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$7(r, a) : void 0;
  }
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$6(r, e) {
  return _arrayWithHoles$6(r) || _iterableToArrayLimit$6(r, e) || _unsupportedIterableToArray$7(r, e) || _nonIterableRest$6();
}
var PortalBase = {
  defaultProps: {
    __TYPE: "Portal",
    element: null,
    appendTo: null,
    visible: false,
    onMounted: null,
    onUnmounted: null,
    children: void 0
  },
  getProps: function getProps2(props) {
    return ObjectUtils.getMergedProps(props, PortalBase.defaultProps);
  },
  getOtherProps: function getOtherProps2(props) {
    return ObjectUtils.getDiffProps(props, PortalBase.defaultProps);
  }
};
var Portal = /* @__PURE__ */ React.memo(function(inProps) {
  var props = PortalBase.getProps(inProps);
  var context = React.useContext(PrimeReactContext);
  var _React$useState = React.useState(props.visible && DomHandler.isClient()), _React$useState2 = _slicedToArray$6(_React$useState, 2), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  useMountEffect(function() {
    if (DomHandler.isClient() && !mountedState) {
      setMountedState(true);
      props.onMounted && props.onMounted();
    }
  });
  useUpdateEffect(function() {
    props.onMounted && props.onMounted();
  }, [mountedState]);
  useUnmountEffect(function() {
    props.onUnmounted && props.onUnmounted();
  });
  var element = props.element || props.children;
  if (element && mountedState) {
    var appendTo = props.appendTo || context && context.appendTo || PrimeReact.appendTo;
    if (ObjectUtils.isFunction(appendTo)) {
      appendTo = appendTo();
    }
    if (!appendTo) {
      appendTo = document.body;
    }
    return appendTo === "self" ? element : /* @__PURE__ */ ReactDOM.createPortal(element, appendTo);
  }
  return null;
});
Portal.displayName = "Portal";
var IconBase = {
  defaultProps: {
    __TYPE: "IconBase",
    className: null,
    label: null,
    spin: false
  },
  getProps: function getProps3(props) {
    return ObjectUtils.getMergedProps(props, IconBase.defaultProps);
  },
  getOtherProps: function getOtherProps3(props) {
    return ObjectUtils.getDiffProps(props, IconBase.defaultProps);
  },
  getPTI: function getPTI(props) {
    var isLabelEmpty = ObjectUtils.isEmpty(props.label);
    var otherProps = IconBase.getOtherProps(props);
    var ptiProps = {
      className: classNames("p-icon", {
        "p-icon-spin": props.spin
      }, props.className),
      role: !isLabelEmpty ? "img" : void 0,
      "aria-label": !isLabelEmpty ? props.label : void 0,
      "aria-hidden": props.label ? isLabelEmpty : void 0
    };
    return ObjectUtils.getMergedProps(otherProps, ptiProps);
  }
};
function _extends$e() {
  return _extends$e = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$e.apply(null, arguments);
}
var CheckIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$e({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
CheckIcon.displayName = "CheckIcon";
function _extends$d() {
  return _extends$d = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$d.apply(null, arguments);
}
var ExclamationTriangleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$d({
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
function _extends$c() {
  return _extends$c = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$c.apply(null, arguments);
}
var InfoCircleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$c({
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
function _extends$b() {
  return _extends$b = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$b.apply(null, arguments);
}
var TimesIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$b({
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
function _extends$a() {
  return _extends$a = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$a.apply(null, arguments);
}
var TimesCircleIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$a({
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
function _extends$9() {
  return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$9.apply(null, arguments);
}
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function toPrimitive$7(t, r) {
  if ("object" != _typeof$7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$7(t) {
  var i = toPrimitive$7(t, "string");
  return "symbol" == _typeof$7(i) ? i : i + "";
}
function _defineProperty$7(e, r, t) {
  return (r = toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayWithHoles$5(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$5(r, l) {
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
function _arrayLikeToArray$6(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray$6(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$6(r, a) : void 0;
  }
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$5(r, e) {
  return _arrayWithHoles$5(r) || _iterableToArrayLimit$5(r, e) || _unsupportedIterableToArray$6(r, e) || _nonIterableRest$5();
}
var styles$6 = "\n@layer primereact {\n    .p-ripple {\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-ink {\n        display: block;\n        position: absolute;\n        background: rgba(255, 255, 255, 0.5);\n        border-radius: 100%;\n        transform: scale(0);\n    }\n    \n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n    \n    .p-ripple-disabled .p-ink {\n        display: none;\n    }\n}\n\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n\n";
var classes$6 = {
  root: "p-ink"
};
var RippleBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Ripple",
    children: void 0
  },
  css: {
    styles: styles$6,
    classes: classes$6
  },
  getProps: function getProps4(props) {
    return ObjectUtils.getMergedProps(props, RippleBase.defaultProps);
  },
  getOtherProps: function getOtherProps4(props) {
    return ObjectUtils.getDiffProps(props, RippleBase.defaultProps);
  }
});
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Ripple = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray$5(_React$useState, 2), isMounted = _React$useState2[0], setMounted = _React$useState2[1];
  var inkRef = React.useRef(null);
  var targetRef = React.useRef(null);
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = RippleBase.getProps(inProps, context);
  var isRippleActive = context && context.ripple || PrimeReact.ripple;
  var metaData = {
    props
  };
  useStyle(RippleBase.css.styles, {
    name: "ripple",
    manual: !isRippleActive
  });
  var _RippleBase$setMetaDa = RippleBase.setMetaData(_objectSpread$8({}, metaData)), ptm = _RippleBase$setMetaDa.ptm, cx = _RippleBase$setMetaDa.cx;
  var getTarget = function getTarget2() {
    return inkRef.current && inkRef.current.parentElement;
  };
  var bindEvents = function bindEvents2() {
    if (targetRef.current) {
      targetRef.current.addEventListener("pointerdown", onPointerDown);
    }
  };
  var unbindEvents = function unbindEvents2() {
    if (targetRef.current) {
      targetRef.current.removeEventListener("pointerdown", onPointerDown);
    }
  };
  var onPointerDown = function onPointerDown2(event) {
    var offset = DomHandler.getOffset(targetRef.current);
    var offsetX = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
    var offsetY = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;
    activateRipple(offsetX, offsetY);
  };
  var activateRipple = function activateRipple2(offsetX, offsetY) {
    if (!inkRef.current || getComputedStyle(inkRef.current, null).display === "none") {
      return;
    }
    DomHandler.removeClass(inkRef.current, "p-ink-active");
    setDimensions();
    inkRef.current.style.top = offsetY + "px";
    inkRef.current.style.left = offsetX + "px";
    DomHandler.addClass(inkRef.current, "p-ink-active");
  };
  var onAnimationEnd = function onAnimationEnd2(event) {
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  };
  var setDimensions = function setDimensions2() {
    if (inkRef.current && !DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
      var d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));
      inkRef.current.style.height = d + "px";
      inkRef.current.style.width = d + "px";
    }
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getInk: function getInk() {
        return inkRef.current;
      },
      getTarget: function getTarget2() {
        return targetRef.current;
      }
    };
  });
  useMountEffect(function() {
    setMounted(true);
  });
  useUpdateEffect(function() {
    if (isMounted && inkRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  }, [isMounted]);
  useUpdateEffect(function() {
    if (inkRef.current && !targetRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  });
  useUnmountEffect(function() {
    if (inkRef.current) {
      targetRef.current = null;
      unbindEvents();
    }
  });
  if (!isRippleActive) {
    return null;
  }
  var rootProps = mergeProps2({
    "aria-hidden": true,
    className: classNames(cx("root"))
  }, RippleBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("span", _extends$9({
    role: "presentation",
    ref: inkRef
  }, rootProps, {
    onAnimationEnd
  }));
}));
Ripple.displayName = "Ripple";
function _extends$8() {
  return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$8.apply(null, arguments);
}
function _arrayLikeToArray$5(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$5(r);
}
function _iterableToArray$3(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$5(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$5(r, a) : void 0;
  }
}
function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$3(r) {
  return _arrayWithoutHoles$3(r) || _iterableToArray$3(r) || _unsupportedIterableToArray$5(r) || _nonIterableSpread$3();
}
function _arrayWithHoles$4(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$4(r, l) {
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
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$4(r, e) {
  return _arrayWithHoles$4(r) || _iterableToArrayLimit$4(r, e) || _unsupportedIterableToArray$5(r, e) || _nonIterableRest$4();
}
function _typeof$6(o) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$6(o);
}
function toPrimitive$6(t, r) {
  if ("object" != _typeof$6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$6(t) {
  var i = toPrimitive$6(t, "string");
  return "symbol" == _typeof$6(i) ? i : i + "";
}
function _defineProperty$6(e, r, t) {
  return (r = toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var styles$5 = "\n@layer primereact {\n    .p-toast {\n        width: calc(100% - var(--toast-indent, 0px));\n        max-width: 25rem;\n    }\n    \n    .p-toast-message-icon {\n        flex-shrink: 0;\n    }\n    \n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n    }\n    \n    .p-toast-message-text {\n        flex: 1 1 auto;\n    }\n    \n    .p-toast-summary {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-detail {\n        overflow-wrap: anywhere;\n    }\n    \n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n    \n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n    \n    .p-toast-icon-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n    }\n    \n    .p-toast-icon-close.p-link {\n        cursor: pointer;\n    }\n    \n    /* Animations */\n    .p-toast-message-enter {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n    \n    .p-toast-message-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: transform 0.3s, opacity 0.3s;\n    }\n    \n    .p-toast-message-enter-done {\n        transform: none;\n    }\n    \n    .p-toast-message-exit {\n        opacity: 1;\n        max-height: 1000px;\n    }\n    \n    .p-toast .p-toast-message.p-toast-message-exit-active {\n        opacity: 0;\n        max-height: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n    }\n}\n";
var classes$5 = {
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
      return classNames("p-toast-message", _defineProperty$6({}, "p-toast-message-".concat(severity), severity));
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
var inlineStyles$2 = {
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
    classes: classes$5,
    styles: styles$5,
    inlineStyles: inlineStyles$2
  }
});
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ToastMessage = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(props, ref) {
  var mergeProps2 = useMergeProps();
  var messageInfo = props.messageInfo, parentMetaData = props.metaData, _props$ptCallbacks = props.ptCallbacks, ptm = _props$ptCallbacks.ptm, ptmo = _props$ptCallbacks.ptmo, cx = _props$ptCallbacks.cx, index = props.index;
  var _messageInfo$message = messageInfo.message, severity = _messageInfo$message.severity, content = _messageInfo$message.content, summary = _messageInfo$message.summary, detail = _messageInfo$message.detail, closable = _messageInfo$message.closable, life = _messageInfo$message.life, sticky = _messageInfo$message.sticky, _className = _messageInfo$message.className, style = _messageInfo$message.style, _contentClassName = _messageInfo$message.contentClassName, contentStyle = _messageInfo$message.contentStyle, _icon = _messageInfo$message.icon, _closeIcon = _messageInfo$message.closeIcon, pt = _messageInfo$message.pt;
  var params = {
    index
  };
  var parentParams = _objectSpread$7(_objectSpread$7({}, parentMetaData), params);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray$4(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var _useTimeout = useTimeout(function() {
    onClose();
  }, life || 3e3, !sticky && !focused), _useTimeout2 = _slicedToArray$4(_useTimeout, 1), clearTimer = _useTimeout2[0];
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$7({
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
    var buttonIconProps = mergeProps2({
      className: cx("message.buttonicon")
    }, getPTOptions("buttonicon", parentParams), ptmo(pt, "buttonicon", _objectSpread$7(_objectSpread$7({}, params), {}, {
      hostName: props.hostName
    })));
    var icon2 = _closeIcon || /* @__PURE__ */ React.createElement(TimesIcon, buttonIconProps);
    var closeIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread$7({}, buttonIconProps), {
      props
    });
    var closeButtonProps = mergeProps2({
      type: "button",
      className: cx("message.closeButton"),
      onClick: onClose,
      "aria-label": props.ariaCloseLabel || ariaLabel("close")
    }, getPTOptions("closeButton", parentParams), ptmo(pt, "closeButton", _objectSpread$7(_objectSpread$7({}, params), {}, {
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
      var iconProps = mergeProps2({
        className: cx("message.icon")
      }, getPTOptions("icon", parentParams), ptmo(pt, "icon", _objectSpread$7(_objectSpread$7({}, params), {}, {
        hostName: props.hostName
      })));
      var icon2 = _icon;
      if (!_icon) {
        switch (severity) {
          case "info":
            icon2 = /* @__PURE__ */ React.createElement(InfoCircleIcon, iconProps);
            break;
          case "warn":
            icon2 = /* @__PURE__ */ React.createElement(ExclamationTriangleIcon, iconProps);
            break;
          case "error":
            icon2 = /* @__PURE__ */ React.createElement(TimesCircleIcon, iconProps);
            break;
          case "success":
            icon2 = /* @__PURE__ */ React.createElement(CheckIcon, iconProps);
            break;
        }
      }
      var messageIcon = IconUtils.getJSXIcon(icon2, _objectSpread$7({}, iconProps), {
        props
      });
      var textProps = mergeProps2({
        className: cx("message.text")
      }, getPTOptions("text", parentParams), ptmo(pt, "text", _objectSpread$7(_objectSpread$7({}, params), {}, {
        hostName: props.hostName
      })));
      var summaryProps = mergeProps2({
        className: cx("message.summary")
      }, getPTOptions("summary", parentParams), ptmo(pt, "summary", _objectSpread$7(_objectSpread$7({}, params), {}, {
        hostName: props.hostName
      })));
      var detailProps = mergeProps2({
        className: cx("message.detail")
      }, getPTOptions("detail", parentParams), ptmo(pt, "detail", _objectSpread$7(_objectSpread$7({}, params), {}, {
        hostName: props.hostName
      })));
      return contentEl || /* @__PURE__ */ React.createElement(React.Fragment, null, messageIcon, /* @__PURE__ */ React.createElement("div", textProps, /* @__PURE__ */ React.createElement("span", summaryProps, summary), detail && /* @__PURE__ */ React.createElement("div", detailProps, detail)));
    }
    return null;
  };
  var message2 = createMessage();
  var closeIcon = createCloseIcon();
  var messageProps = mergeProps2({
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
  }, getPTOptions("message", parentParams), ptmo(pt, "root", _objectSpread$7(_objectSpread$7({}, params), {}, {
    hostName: props.hostName
  })));
  var contentProps = mergeProps2({
    className: classNames(_contentClassName, cx("message.content")),
    style: contentStyle
  }, getPTOptions("content", parentParams), ptmo(pt, "content", _objectSpread$7(_objectSpread$7({}, params), {}, {
    hostName: props.hostName
  })));
  return /* @__PURE__ */ React.createElement("div", messageProps, /* @__PURE__ */ React.createElement("div", contentProps, message2, closeIcon));
}));
ToastMessage.displayName = "ToastMessage";
var messageIdx = 0;
var Toast = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ToastBase.getProps(inProps, context);
  var _React$useState = React.useState([]), _React$useState2 = _slicedToArray$4(_React$useState, 2), messagesState = _React$useState2[0], setMessagesState = _React$useState2[1];
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
        messages = currentState ? [].concat(_toConsumableArray$3(currentState), _toConsumableArray$3(multipleMessages)) : multipleMessages;
      } else {
        messages = multipleMessages;
      }
    } else {
      var message2 = {
        _pId: messageIdx++,
        message: messageInfo
      };
      if (copy) {
        messages = currentState ? [].concat(_toConsumableArray$3(currentState), [message2]) : [message2];
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
    var rootProps = mergeProps2({
      ref: containerRef,
      id: props.id,
      className: ptCallbacks.cx("root", {
        context
      }),
      style: ptCallbacks.sx("root")
    }, ToastBase.getOtherProps(props), ptCallbacks.ptm("root"));
    var transitionProps = mergeProps2({
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
      return /* @__PURE__ */ React.createElement(CSSTransition, _extends$8({
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
function _extends$7() {
  return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$7.apply(null, arguments);
}
var SpinnerIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$7({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }));
}));
SpinnerIcon.displayName = "SpinnerIcon";
function _extends$6() {
  return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$6.apply(null, arguments);
}
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function toPrimitive$5(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$5(t) {
  var i = toPrimitive$5(t, "string");
  return "symbol" == _typeof$5(i) ? i : i + "";
}
function _defineProperty$5(e, r, t) {
  return (r = toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayLikeToArray$4(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$4(r);
}
function _iterableToArray$2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$4(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$4(r, a) : void 0;
  }
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$2(r) {
  return _arrayWithoutHoles$2(r) || _iterableToArray$2(r) || _unsupportedIterableToArray$4(r) || _nonIterableSpread$2();
}
function _arrayWithHoles$3(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$3(r, l) {
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
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$3(r, e) {
  return _arrayWithHoles$3(r) || _iterableToArrayLimit$3(r, e) || _unsupportedIterableToArray$4(r, e) || _nonIterableRest$3();
}
var classes$4 = {
  root: function root3(_ref) {
    var positionState = _ref.positionState, classNameState = _ref.classNameState;
    return classNames("p-tooltip p-component", _defineProperty$5({}, "p-tooltip-".concat(positionState), true), classNameState);
  },
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var inlineStyles$1 = {
  arrow: function arrow(_ref2) {
    var context = _ref2.context;
    return {
      top: context.bottom ? "0" : context.right || context.left || !context.right && !context.left && !context.top && !context.bottom ? "50%" : null,
      bottom: context.top ? "0" : null,
      left: context.right || !context.right && !context.left && !context.top && !context.bottom ? "0" : context.top || context.bottom ? "50%" : null,
      right: context.left ? "0" : null
    };
  }
};
var styles$4 = "\n@layer primereact {\n    .p-tooltip {\n        position: absolute;\n        padding: .25em .5rem;\n        /* #3687: Tooltip prevent scrollbar flickering */\n        top: -9999px;\n        left: -9999px;\n    }\n    \n    .p-tooltip.p-tooltip-right,\n    .p-tooltip.p-tooltip-left {\n        padding: 0 .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top,\n    .p-tooltip.p-tooltip-bottom {\n        padding:.25em 0;\n    }\n    \n    .p-tooltip .p-tooltip-text {\n       white-space: pre-line;\n       word-break: break-word;\n    }\n    \n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n    \n    .p-tooltip-right .p-tooltip-arrow {\n        top: 50%;\n        left: 0;\n        margin-top: -.25rem;\n        border-width: .25em .25em .25em 0;\n    }\n    \n    .p-tooltip-left .p-tooltip-arrow {\n        top: 50%;\n        right: 0;\n        margin-top: -.25rem;\n        border-width: .25em 0 .25em .25rem;\n    }\n    \n    .p-tooltip.p-tooltip-top {\n        padding: .25em 0;\n    }\n    \n    .p-tooltip-top .p-tooltip-arrow {\n        bottom: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: .25em .25em 0;\n    }\n    \n    .p-tooltip-bottom .p-tooltip-arrow {\n        top: 0;\n        left: 50%;\n        margin-left: -.25rem;\n        border-width: 0 .25em .25rem;\n    }\n\n    .p-tooltip-target-wrapper {\n        display: inline-flex;\n    }\n}\n";
var TooltipBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Tooltip",
    appendTo: null,
    at: null,
    autoHide: true,
    autoZIndex: true,
    baseZIndex: 0,
    className: null,
    closeOnEscape: false,
    content: null,
    disabled: false,
    event: null,
    hideDelay: 0,
    hideEvent: "mouseleave",
    id: null,
    mouseTrack: false,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    my: null,
    onBeforeHide: null,
    onBeforeShow: null,
    onHide: null,
    onShow: null,
    position: "right",
    showDelay: 0,
    showEvent: "mouseenter",
    showOnDisabled: false,
    style: null,
    target: null,
    updateDelay: 0,
    children: void 0
  },
  css: {
    classes: classes$4,
    styles: styles$4,
    inlineStyles: inlineStyles$1
  }
});
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Tooltip = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = TooltipBase.getProps(inProps, context);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray$3(_React$useState, 2), visibleState = _React$useState2[0], setVisibleState = _React$useState2[1];
  var _React$useState3 = React.useState(props.position || "right"), _React$useState4 = _slicedToArray$3(_React$useState3, 2), positionState = _React$useState4[0], setPositionState = _React$useState4[1];
  var _React$useState5 = React.useState(""), _React$useState6 = _slicedToArray$3(_React$useState5, 2), classNameState = _React$useState6[0], setClassNameState = _React$useState6[1];
  var _React$useState7 = React.useState(false), _React$useState8 = _slicedToArray$3(_React$useState7, 2), multipleFocusEvents = _React$useState8[0], setMultipleFocusEvents = _React$useState8[1];
  var isCloseOnEscape = visibleState && props.closeOnEscape;
  var overlayDisplayOrder = useDisplayOrder("tooltip", isCloseOnEscape);
  var metaData = {
    props,
    state: {
      visible: visibleState,
      position: positionState,
      className: classNameState
    },
    context: {
      right: positionState === "right",
      left: positionState === "left",
      top: positionState === "top",
      bottom: positionState === "bottom"
    }
  };
  var _TooltipBase$setMetaD = TooltipBase.setMetaData(metaData), ptm = _TooltipBase$setMetaD.ptm, cx = _TooltipBase$setMetaD.cx, sx = _TooltipBase$setMetaD.sx, isUnstyled = _TooltipBase$setMetaD.isUnstyled;
  useHandleStyle(TooltipBase.css.styles, isUnstyled, {
    name: "tooltip"
  });
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: isCloseOnEscape,
    priority: [ESC_KEY_HANDLING_PRIORITIES.TOOLTIP, overlayDisplayOrder]
  });
  var elementRef = React.useRef(null);
  var textRef = React.useRef(null);
  var currentTargetRef = React.useRef(null);
  var containerSize = React.useRef(null);
  var allowHide = React.useRef(true);
  var timeouts = React.useRef({});
  var currentMouseEvent = React.useRef(null);
  var _useResizeListener = useResizeListener({
    listener: function listener(event) {
      !DomHandler.isTouchDevice() && hide(event);
    }
  }), _useResizeListener2 = _slicedToArray$3(_useResizeListener, 2), bindWindowResizeListener = _useResizeListener2[0], unbindWindowResizeListener = _useResizeListener2[1];
  var _useOverlayScrollList = useOverlayScrollListener({
    target: currentTargetRef.current,
    listener: function listener(event) {
      hide(event);
    },
    when: visibleState
  }), _useOverlayScrollList2 = _slicedToArray$3(_useOverlayScrollList, 2), bindOverlayScrollListener = _useOverlayScrollList2[0], unbindOverlayScrollListener = _useOverlayScrollList2[1];
  var isTargetContentEmpty = function isTargetContentEmpty2(target) {
    return !(props.content || getTargetOption(target, "tooltip"));
  };
  var isContentEmpty = function isContentEmpty2(target) {
    return !(props.content || getTargetOption(target, "tooltip") || props.children);
  };
  var isMouseTrack = function isMouseTrack2(target) {
    return getTargetOption(target, "mousetrack") || props.mouseTrack;
  };
  var isDisabled = function isDisabled2(target) {
    return getTargetOption(target, "disabled") === "true" || hasTargetOption(target, "disabled") || props.disabled;
  };
  var isShowOnDisabled = function isShowOnDisabled2(target) {
    return getTargetOption(target, "showondisabled") || props.showOnDisabled;
  };
  var isAutoHide = function isAutoHide2() {
    return getTargetOption(currentTargetRef.current, "autohide") || props.autoHide;
  };
  var getTargetOption = function getTargetOption2(target, option) {
    return hasTargetOption(target, "data-pr-".concat(option)) ? target.getAttribute("data-pr-".concat(option)) : null;
  };
  var hasTargetOption = function hasTargetOption2(target, option) {
    return target && target.hasAttribute(option);
  };
  var getEvents = function getEvents2(target) {
    var showEvents = [getTargetOption(target, "showevent") || props.showEvent];
    var hideEvents = [getTargetOption(target, "hideevent") || props.hideEvent];
    if (isMouseTrack(target)) {
      showEvents = ["mousemove"];
      hideEvents = ["mouseleave"];
    } else {
      var event = getTargetOption(target, "event") || props.event;
      if (event === "focus") {
        showEvents = ["focus"];
        hideEvents = ["blur"];
      }
      if (event === "both") {
        showEvents = ["focus", "mouseenter"];
        hideEvents = multipleFocusEvents ? ["blur"] : ["mouseleave", "blur"];
      }
    }
    return {
      showEvents,
      hideEvents
    };
  };
  var getPosition = function getPosition2(target) {
    return getTargetOption(target, "position") || positionState;
  };
  var getMouseTrackPosition = function getMouseTrackPosition2(target) {
    var top = getTargetOption(target, "mousetracktop") || props.mouseTrackTop;
    var left = getTargetOption(target, "mousetrackleft") || props.mouseTrackLeft;
    return {
      top,
      left
    };
  };
  var updateText = function updateText2(target, callback) {
    if (textRef.current) {
      var content = getTargetOption(target, "tooltip") || props.content;
      if (content) {
        textRef.current.innerHTML = "";
        textRef.current.appendChild(document.createTextNode(content));
        callback();
      } else if (props.children) {
        callback();
      }
    }
  };
  var updateTooltipState = function updateTooltipState2(position) {
    updateText(currentTargetRef.current, function() {
      var _currentMouseEvent$cu = currentMouseEvent.current, x = _currentMouseEvent$cu.pageX, y = _currentMouseEvent$cu.pageY;
      if (props.autoZIndex && !ZIndexUtils.get(elementRef.current)) {
        ZIndexUtils.set("tooltip", elementRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, props.baseZIndex || context && context.zIndex.tooltip || PrimeReact.zIndex.tooltip);
      }
      elementRef.current.style.left = "";
      elementRef.current.style.top = "";
      if (isAutoHide()) {
        elementRef.current.style.pointerEvents = "none";
      }
      var mouseTrackCheck = isMouseTrack(currentTargetRef.current) || position === "mouse";
      if (mouseTrackCheck && !containerSize.current || mouseTrackCheck) {
        containerSize.current = {
          width: DomHandler.getOuterWidth(elementRef.current),
          height: DomHandler.getOuterHeight(elementRef.current)
        };
      }
      align(currentTargetRef.current, {
        x,
        y
      }, position);
    });
  };
  var show = function show2(e) {
    if (e.type && e.type === "focus") setMultipleFocusEvents(true);
    currentTargetRef.current = e.currentTarget;
    var disabled = isDisabled(currentTargetRef.current);
    var empty = isContentEmpty(isShowOnDisabled(currentTargetRef.current) && disabled ? currentTargetRef.current.firstChild : currentTargetRef.current);
    if (empty || disabled) {
      return;
    }
    currentMouseEvent.current = e;
    if (visibleState) {
      applyDelay("updateDelay", updateTooltipState);
    } else {
      var success = sendCallback(props.onBeforeShow, {
        originalEvent: e,
        target: currentTargetRef.current
      });
      if (success) {
        applyDelay("showDelay", function() {
          setVisibleState(true);
          sendCallback(props.onShow, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    }
  };
  var hide = function hide2(e) {
    if (e && e.type === "blur") setMultipleFocusEvents(false);
    clearTimeouts();
    if (visibleState) {
      var success = sendCallback(props.onBeforeHide, {
        originalEvent: e,
        target: currentTargetRef.current
      });
      if (success) {
        applyDelay("hideDelay", function() {
          if (!isAutoHide() && allowHide.current === false) {
            return;
          }
          ZIndexUtils.clear(elementRef.current);
          DomHandler.removeClass(elementRef.current, "p-tooltip-active");
          setVisibleState(false);
          sendCallback(props.onHide, {
            originalEvent: e,
            target: currentTargetRef.current
          });
        });
      }
    } else if (!props.onBeforeHide && !getDelay("hideDelay")) {
      setVisibleState(false);
    }
  };
  var align = function align2(target, coordinate, position) {
    var left = 0;
    var top = 0;
    var currentPosition = position || positionState;
    if ((isMouseTrack(target) || currentPosition == "mouse") && coordinate) {
      var _containerSize = {
        width: DomHandler.getOuterWidth(elementRef.current),
        height: DomHandler.getOuterHeight(elementRef.current)
      };
      left = coordinate.x;
      top = coordinate.y;
      var _getMouseTrackPositio = getMouseTrackPosition(target), mouseTrackTop = _getMouseTrackPositio.top, mouseTrackLeft = _getMouseTrackPositio.left;
      switch (currentPosition) {
        case "left":
          left = left - (_containerSize.width + mouseTrackLeft);
          top = top - (_containerSize.height / 2 - mouseTrackTop);
          break;
        case "right":
        case "mouse":
          left = left + mouseTrackLeft;
          top = top - (_containerSize.height / 2 - mouseTrackTop);
          break;
        case "top":
          left = left - (_containerSize.width / 2 - mouseTrackLeft);
          top = top - (_containerSize.height + mouseTrackTop);
          break;
        case "bottom":
          left = left - (_containerSize.width / 2 - mouseTrackLeft);
          top = top + mouseTrackTop;
          break;
      }
      if (left <= 0 || containerSize.current.width > _containerSize.width) {
        elementRef.current.style.left = "0px";
        elementRef.current.style.right = window.innerWidth - _containerSize.width - left + "px";
      } else {
        elementRef.current.style.right = "";
        elementRef.current.style.left = left + "px";
      }
      elementRef.current.style.top = top + "px";
      DomHandler.addClass(elementRef.current, "p-tooltip-active");
    } else {
      var pos = DomHandler.findCollisionPosition(currentPosition);
      var my = getTargetOption(target, "my") || props.my || pos.my;
      var at = getTargetOption(target, "at") || props.at || pos.at;
      elementRef.current.style.padding = "0px";
      DomHandler.flipfitCollision(elementRef.current, target, my, at, function(calculatedPosition) {
        var _calculatedPosition$a = calculatedPosition.at, atX = _calculatedPosition$a.x, atY = _calculatedPosition$a.y;
        var myX = calculatedPosition.my.x;
        var newPosition = props.at ? atX !== "center" && atX !== myX ? atX : atY : calculatedPosition.at["".concat(pos.axis)];
        elementRef.current.style.padding = "";
        setPositionState(newPosition);
        updateContainerPosition(newPosition);
        DomHandler.addClass(elementRef.current, "p-tooltip-active");
      });
    }
  };
  var updateContainerPosition = function updateContainerPosition2(position) {
    if (elementRef.current) {
      var style = getComputedStyle(elementRef.current);
      if (position === "left") {
        elementRef.current.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + "px";
      } else if (position === "top") {
        elementRef.current.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + "px";
      }
    }
  };
  var _onMouseEnter = function onMouseEnter() {
    if (!isAutoHide()) {
      allowHide.current = false;
    }
  };
  var _onMouseLeave = function onMouseLeave(e) {
    if (!isAutoHide()) {
      allowHide.current = true;
      hide(e);
    }
  };
  var bindTargetEvent = function bindTargetEvent2(target) {
    if (target) {
      var _getEvents = getEvents(target), showEvents = _getEvents.showEvents, hideEvents = _getEvents.hideEvents;
      var currentTarget = getTarget(target);
      showEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.addEventListener(event, show);
      });
      hideEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.addEventListener(event, hide);
      });
    }
  };
  var unbindTargetEvent = function unbindTargetEvent2(target) {
    if (target) {
      var _getEvents2 = getEvents(target), showEvents = _getEvents2.showEvents, hideEvents = _getEvents2.hideEvents;
      var currentTarget = getTarget(target);
      showEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.removeEventListener(event, show);
      });
      hideEvents.forEach(function(event) {
        return currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.removeEventListener(event, hide);
      });
    }
  };
  var getDelay = function getDelay2(delayProp) {
    return getTargetOption(currentTargetRef.current, delayProp.toLowerCase()) || props[delayProp];
  };
  var applyDelay = function applyDelay2(delayProp, callback) {
    clearTimeouts();
    var delay = getDelay(delayProp);
    delay ? timeouts.current["".concat(delayProp)] = setTimeout(function() {
      return callback();
    }, delay) : callback();
  };
  var sendCallback = function sendCallback2(callback) {
    if (callback) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      var result = callback.apply(void 0, params);
      if (result === void 0) {
        result = true;
      }
      return result;
    }
    return true;
  };
  var clearTimeouts = function clearTimeouts2() {
    Object.values(timeouts.current).forEach(function(t) {
      return clearTimeout(t);
    });
  };
  var getTarget = function getTarget2(target) {
    if (target) {
      if (isShowOnDisabled(target)) {
        if (!target.hasWrapper) {
          var wrapper = document.createElement("div");
          var isInputElement = target.nodeName === "INPUT";
          if (isInputElement) {
            DomHandler.addMultipleClasses(wrapper, "p-tooltip-target-wrapper p-inputwrapper");
          } else {
            DomHandler.addClass(wrapper, "p-tooltip-target-wrapper");
          }
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
          target.hasWrapper = true;
          return wrapper;
        }
        return target.parentElement;
      } else if (target.hasWrapper) {
        var _target$parentElement;
        (_target$parentElement = target.parentElement).replaceWith.apply(_target$parentElement, _toConsumableArray$2(target.parentElement.childNodes));
        delete target.hasWrapper;
      }
      return target;
    }
    return null;
  };
  var updateTargetEvents = function updateTargetEvents2(target) {
    unloadTargetEvents(target);
    loadTargetEvents(target);
  };
  var loadTargetEvents = function loadTargetEvents2(target) {
    setTargetEventOperations(target || props.target, bindTargetEvent);
  };
  var unloadTargetEvents = function unloadTargetEvents2(target) {
    setTargetEventOperations(target || props.target, unbindTargetEvent);
  };
  var setTargetEventOperations = function setTargetEventOperations2(target, operation) {
    target = ObjectUtils.getRefElement(target);
    if (target) {
      if (DomHandler.isElement(target)) {
        operation(target);
      } else {
        var setEvent = function setEvent2(target2) {
          var element2 = DomHandler.find(document, target2);
          element2.forEach(function(el) {
            operation(el);
          });
        };
        if (target instanceof Array) {
          target.forEach(function(t) {
            setEvent(t);
          });
        } else {
          setEvent(target);
        }
      }
    }
  };
  useMountEffect(function() {
    if (visibleState && currentTargetRef.current && isDisabled(currentTargetRef.current)) {
      hide();
    }
  });
  useUpdateEffect(function() {
    loadTargetEvents();
    return function() {
      unloadTargetEvents();
    };
  }, [show, hide, props.target]);
  useUpdateEffect(function() {
    if (visibleState) {
      var position = getPosition(currentTargetRef.current);
      var classname = getTargetOption(currentTargetRef.current, "classname");
      setPositionState(position);
      setClassNameState(classname);
      updateTooltipState(position);
      bindWindowResizeListener();
      bindOverlayScrollListener();
    } else {
      setPositionState(props.position || "right");
      setClassNameState("");
      currentTargetRef.current = null;
      containerSize.current = null;
      allowHide.current = true;
    }
    return function() {
      unbindWindowResizeListener();
      unbindOverlayScrollListener();
    };
  }, [visibleState]);
  useUpdateEffect(function() {
    var position = getPosition(currentTargetRef.current);
    if (visibleState && position !== "mouse") {
      applyDelay("updateDelay", function() {
        updateText(currentTargetRef.current, function() {
          align(currentTargetRef.current);
        });
      });
    }
  }, [props.content]);
  useUnmountEffect(function() {
    hide();
    ZIndexUtils.clear(elementRef.current);
  });
  React.useImperativeHandle(ref, function() {
    return {
      props,
      updateTargetEvents,
      loadTargetEvents,
      unloadTargetEvents,
      show,
      hide,
      getElement: function getElement() {
        return elementRef.current;
      },
      getTarget: function getTarget2() {
        return currentTargetRef.current;
      }
    };
  });
  var createElement = function createElement2() {
    var empty = isTargetContentEmpty(currentTargetRef.current);
    var rootProps = mergeProps2({
      id: props.id,
      className: classNames(props.className, cx("root", {
        positionState,
        classNameState
      })),
      style: props.style,
      role: "tooltip",
      "aria-hidden": visibleState,
      onMouseEnter: function onMouseEnter(e) {
        return _onMouseEnter();
      },
      onMouseLeave: function onMouseLeave(e) {
        return _onMouseLeave(e);
      }
    }, TooltipBase.getOtherProps(props), ptm("root"));
    var arrowProps = mergeProps2({
      className: cx("arrow"),
      style: sx("arrow", _objectSpread$6({}, metaData))
    }, ptm("arrow"));
    var textProps = mergeProps2({
      className: cx("text")
    }, ptm("text"));
    return /* @__PURE__ */ React.createElement("div", _extends$6({
      ref: elementRef
    }, rootProps), /* @__PURE__ */ React.createElement("div", arrowProps), /* @__PURE__ */ React.createElement("div", _extends$6({
      ref: textRef
    }, textProps), empty && props.children));
  };
  if (visibleState) {
    var element = createElement();
    return /* @__PURE__ */ React.createElement(Portal, {
      element,
      appendTo: props.appendTo,
      visible: true
    });
  }
  return null;
}));
Tooltip.displayName = "Tooltip";
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey$4(t) {
  var i = toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : i + "";
}
function _defineProperty$4(e, r, t) {
  return (r = toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var classes$1$1 = {
  root: function root4(_ref) {
    var props = _ref.props;
    return classNames("p-badge p-component", _defineProperty$4({
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value),
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge"
    }, "p-badge-".concat(props.severity), props.severity !== null));
  }
};
var styles$3 = "\n@layer primereact {\n    .p-badge {\n        display: inline-block;\n        border-radius: 10px;\n        text-align: center;\n        padding: 0 .5rem;\n    }\n    \n    .p-overlay-badge {\n        position: relative;\n    }\n    \n    .p-overlay-badge .p-badge {\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(50%,-50%);\n        transform-origin: 100% 0;\n        margin: 0;\n    }\n    \n    .p-badge-dot {\n        width: .5rem;\n        min-width: .5rem;\n        height: .5rem;\n        border-radius: 50%;\n        padding: 0;\n    }\n    \n    .p-badge-no-gutter {\n        padding: 0;\n        border-radius: 50%;\n    }\n}\n";
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
    classes: classes$1$1,
    styles: styles$3
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
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Badge = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = BadgeBase.getProps(inProps, context);
  var _BadgeBase$setMetaDat = BadgeBase.setMetaData(_objectSpread$1$1({
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
  var rootProps = mergeProps2({
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root"))
  }, BadgeBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement("span", rootProps, props.value);
}));
Badge.displayName = "Badge";
var classes$3 = {
  icon: function icon(_ref) {
    var props = _ref.props;
    return classNames("p-button-icon p-c", _defineProperty$4({}, "p-button-icon-".concat(props.iconPos), props.label));
  },
  loadingIcon: function loadingIcon(_ref2) {
    var props = _ref2.props, className = _ref2.className;
    return classNames(className, {
      "p-button-loading-icon": props.loading
    });
  },
  label: "p-button-label p-c",
  root: function root5(_ref3) {
    var props = _ref3.props, size = _ref3.size, disabled = _ref3.disabled;
    return classNames("p-button p-component", _defineProperty$4(_defineProperty$4(_defineProperty$4(_defineProperty$4({
      "p-button-icon-only": (props.icon || props.loading) && !props.label && !props.children,
      "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
      "p-disabled": disabled,
      "p-button-loading": props.loading,
      "p-button-outlined": props.outlined,
      "p-button-raised": props.raised,
      "p-button-link": props.link,
      "p-button-text": props.text,
      "p-button-rounded": props.rounded,
      "p-button-loading-label-only": props.loading && !props.icon && props.label
    }, "p-button-loading-".concat(props.iconPos), props.loading && props.label), "p-button-".concat(size), size), "p-button-".concat(props.severity), props.severity), "p-button-plain", props.plain));
  }
};
var ButtonBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Button",
    __parentMetadata: null,
    badge: null,
    badgeClassName: null,
    className: null,
    children: void 0,
    disabled: false,
    icon: null,
    iconPos: "left",
    label: null,
    link: false,
    loading: false,
    loadingIcon: null,
    outlined: false,
    plain: false,
    raised: false,
    rounded: false,
    severity: null,
    size: null,
    text: false,
    tooltip: null,
    tooltipOptions: null,
    visible: true
  },
  css: {
    classes: classes$3
  }
});
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Button = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = ButtonBase.getProps(inProps, context);
  var disabled = props.disabled || props.loading;
  var metaData = _objectSpread$5(_objectSpread$5({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled
    }
  });
  var _ButtonBase$setMetaDa = ButtonBase.setMetaData(metaData), ptm = _ButtonBase$setMetaDa.ptm, cx = _ButtonBase$setMetaDa.cx, isUnstyled = _ButtonBase$setMetaDa.isUnstyled;
  useHandleStyle(ButtonBase.css.styles, isUnstyled, {
    name: "button",
    styled: true
  });
  var elementRef = React.useRef(ref);
  React.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  if (props.visible === false) {
    return null;
  }
  var createIcon = function createIcon2() {
    var className = classNames("p-button-icon p-c", _defineProperty$4({}, "p-button-icon-".concat(props.iconPos), props.label));
    var iconsProps = mergeProps2({
      className: cx("icon")
    }, ptm("icon"));
    className = classNames(className, {
      "p-button-loading-icon": props.loading
    });
    var loadingIconProps = mergeProps2({
      className: cx("loadingIcon", {
        className
      })
    }, ptm("loadingIcon"));
    var icon3 = props.loading ? props.loadingIcon || /* @__PURE__ */ React.createElement(SpinnerIcon, _extends$5({}, loadingIconProps, {
      spin: true
    })) : props.icon;
    return IconUtils.getJSXIcon(icon3, _objectSpread$5({}, iconsProps), {
      props
    });
  };
  var createLabel = function createLabel2() {
    var labelProps = mergeProps2({
      className: cx("label")
    }, ptm("label"));
    if (props.label) {
      return /* @__PURE__ */ React.createElement("span", labelProps, props.label);
    }
    return !props.children && !props.label && /* @__PURE__ */ React.createElement("span", _extends$5({}, labelProps, {
      dangerouslySetInnerHTML: {
        __html: "&nbsp;"
      }
    }));
  };
  var createBadge = function createBadge2() {
    if (props.badge) {
      var badgeProps = mergeProps2({
        className: classNames(props.badgeClassName),
        value: props.badge,
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: metaData
        }
      }, ptm("badge"));
      return /* @__PURE__ */ React.createElement(Badge, badgeProps, props.badge);
    }
    return null;
  };
  var showTooltip = !disabled || props.tooltipOptions && props.tooltipOptions.showOnDisabled;
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip) && showTooltip;
  var sizeMapping = {
    large: "lg",
    small: "sm"
  };
  var size = sizeMapping[props.size];
  var icon2 = createIcon();
  var label = createLabel();
  var badge = createBadge();
  var defaultAriaLabel = props.label ? props.label + (props.badge ? " " + props.badge : "") : props["aria-label"];
  var rootProps = mergeProps2({
    ref: elementRef,
    "aria-label": defaultAriaLabel,
    "data-pc-autofocus": props.autoFocus,
    className: classNames(props.className, cx("root", {
      size,
      disabled
    })),
    disabled
  }, ButtonBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", rootProps, icon2, label, props.children, badge, /* @__PURE__ */ React.createElement(Ripple, null)), hasTooltip && /* @__PURE__ */ React.createElement(Tooltip, _extends$5({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Button.displayName = "Button";
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
var ChevronDownIcon = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return /* @__PURE__ */ React.createElement("svg", _extends$4({
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
function _arrayLikeToArray$3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$3(r);
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray$3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$3(r, a) : void 0;
  }
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$3(r) || _nonIterableSpread$1();
}
var KeyFilter = {
  /* eslint-disable */
  DEFAULT_MASKS: {
    pint: /[\d]/,
    "int": /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },
  /* eslint-enable */
  getRegex: function getRegex(keyfilter) {
    return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
  },
  onBeforeInput: function onBeforeInput(e, keyfilter, validateOnly) {
    if (validateOnly || !DomHandler.isAndroid()) {
      return;
    }
    this.validateKey(e, e.data, keyfilter);
  },
  onKeyPress: function onKeyPress(e, keyfilter, validateOnly) {
    if (validateOnly || DomHandler.isAndroid()) {
      return;
    }
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }
    this.validateKey(e, e.key, keyfilter);
  },
  onPaste: function onPaste(e, keyfilter, validateOnly) {
    if (validateOnly) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    var clipboard = e.clipboardData.getData("text");
    _toConsumableArray$1(clipboard).forEach(function(c) {
      if (!regex.test(c)) {
        e.preventDefault();
        return false;
      }
    });
  },
  validateKey: function validateKey(e, key, keyfilter) {
    if (key === null || key === void 0) {
      return;
    }
    var isPrintableKey = key.length <= 2;
    if (!isPrintableKey) {
      return;
    }
    var regex = this.getRegex(keyfilter);
    if (!regex.test(key)) {
      e.preventDefault();
    }
  },
  validate: function validate(e, keyfilter) {
    var value = e.target.value;
    var validatePattern = true;
    var regex = this.getRegex(keyfilter);
    if (value && !regex.test(value)) {
      validatePattern = false;
    }
    return validatePattern;
  }
};
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
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
var classes$2 = {
  root: function root6(_ref) {
    var props = _ref.props, isFilled = _ref.isFilled, context = _ref.context;
    return classNames("p-inputtext p-component", {
      "p-disabled": props.disabled,
      "p-filled": isFilled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  }
};
var InputTextBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputText",
    __parentMetadata: null,
    children: void 0,
    className: null,
    invalid: false,
    variant: null,
    keyfilter: null,
    onBeforeInput: null,
    onInput: null,
    onKeyDown: null,
    onPaste: null,
    tooltip: null,
    tooltipOptions: null,
    validateOnly: false,
    iconPosition: null
  },
  css: {
    classes: classes$2
  }
});
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
var InputText = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = InputTextBase.getProps(inProps, context);
  var _InputTextBase$setMet = InputTextBase.setMetaData(_objectSpread$4(_objectSpread$4({
    props
  }, props.__parentMetadata), {}, {
    context: {
      disabled: props.disabled,
      iconPosition: props.iconPosition
    }
  })), ptm = _InputTextBase$setMet.ptm, cx = _InputTextBase$setMet.cx, isUnstyled = _InputTextBase$setMet.isUnstyled;
  useHandleStyle(InputTextBase.css.styles, isUnstyled, {
    name: "inputtext",
    styled: true
  });
  var elementRef = React.useRef(ref);
  var onKeyDown = function onKeyDown2(event) {
    props.onKeyDown && props.onKeyDown(event);
    if (props.keyfilter) {
      KeyFilter.onKeyPress(event, props.keyfilter, props.validateOnly);
    }
  };
  var onBeforeInput2 = function onBeforeInput3(event) {
    props.onBeforeInput && props.onBeforeInput(event);
    if (props.keyfilter) {
      KeyFilter.onBeforeInput(event, props.keyfilter, props.validateOnly);
    }
  };
  var onInput = function onInput2(event) {
    var target = event.target;
    var validatePattern = true;
    if (props.keyfilter && props.validateOnly) {
      validatePattern = KeyFilter.validate(event, props.keyfilter);
    }
    props.onInput && props.onInput(event, validatePattern);
    ObjectUtils.isNotEmpty(target.value) ? DomHandler.addClass(target, "p-filled") : DomHandler.removeClass(target, "p-filled");
  };
  var onPaste2 = function onPaste3(event) {
    props.onPaste && props.onPaste(event);
    if (props.keyfilter) {
      KeyFilter.onPaste(event, props.keyfilter, props.validateOnly);
    }
  };
  React.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var isFilled = React.useMemo(function() {
    return ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue);
  }, [props.value, props.defaultValue]);
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  React.useEffect(function() {
    var _elementRef$current;
    if (isFilled || (_elementRef$current = elementRef.current) !== null && _elementRef$current !== void 0 && _elementRef$current.value) {
      DomHandler.addClass(elementRef.current, "p-filled");
    } else {
      DomHandler.removeClass(elementRef.current, "p-filled");
    }
  }, [props.disabled, isFilled]);
  var rootProps = mergeProps2({
    className: classNames(props.className, cx("root", {
      context,
      isFilled
    })),
    onBeforeInput: onBeforeInput2,
    onInput,
    onKeyDown,
    onPaste: onPaste2
  }, InputTextBase.getOtherProps(props), ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", _extends$3({
    ref: elementRef
  }, rootProps)), hasTooltip && /* @__PURE__ */ React.createElement(Tooltip, _extends$3({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
InputText.displayName = "InputText";
var OverlayService = EventBus();
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
function _arrayWithHoles$2(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit$2(r, l) {
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
var styles$2 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /*contain: content;*/\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
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
    styles: styles$2
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
var VirtualScroller = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = VirtualScrollerBase.getProps(inProps, context);
  var prevProps = usePrevious(inProps) || {};
  var vertical = props.orientation === "vertical";
  var horizontal = props.orientation === "horizontal";
  var both = props.orientation === "both";
  var _React$useState = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState2 = _slicedToArray$2(_React$useState, 2), firstState = _React$useState2[0], setFirstState = _React$useState2[1];
  var _React$useState3 = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState4 = _slicedToArray$2(_React$useState3, 2), lastState = _React$useState4[0], setLastState = _React$useState4[1];
  var _React$useState5 = React.useState(0), _React$useState6 = _slicedToArray$2(_React$useState5, 2), pageState = _React$useState6[0], setPageState = _React$useState6[1];
  var _React$useState7 = React.useState(both ? {
    rows: 0,
    cols: 0
  } : 0), _React$useState8 = _slicedToArray$2(_React$useState7, 2), numItemsInViewportState = _React$useState8[0], setNumItemsInViewportState = _React$useState8[1];
  var _React$useState9 = React.useState(props.numToleratedItems), _React$useState10 = _slicedToArray$2(_React$useState9, 2), numToleratedItemsState = _React$useState10[0], setNumToleratedItemsState = _React$useState10[1];
  var _React$useState11 = React.useState(props.loading || false), _React$useState12 = _slicedToArray$2(_React$useState11, 2), loadingState = _React$useState12[0], setLoadingState = _React$useState12[1];
  var _React$useState13 = React.useState([]), _React$useState14 = _slicedToArray$2(_React$useState13, 2), loaderArrState = _React$useState14[0], setLoaderArrState = _React$useState14[1];
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
  }), _useResizeListener2 = _slicedToArray$2(_useResizeListener, 1), bindWindowResizeListener = _useResizeListener2[0];
  var _useEventListener = useEventListener({
    target: "window",
    type: "orientationchange",
    listener: function listener(event) {
      return onResize();
    },
    when: !props.disabled
  }), _useEventListener2 = _slicedToArray$2(_useEventListener, 1), bindOrientationChangeListener = _useEventListener2[0];
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
        return spacerStyle.current = _objectSpread$3(_objectSpread$3({}, spacerStyle.current), _defineProperty$2({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
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
        contentStyle.current = _objectSpread$3(_objectSpread$3({}, contentStyle.current), {
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
    return _objectSpread$3({
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
        return items.slice(props.appendOnly ? 0 : firstState.rows, lastState.rows).map(function(item2) {
          return props.columns ? item2 : item2.slice(props.appendOnly ? 0 : firstState.cols, lastState.cols);
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
    var loadingIconProps = mergeProps2({
      className: iconClassName
    }, ptm("loadingIcon"));
    var icon2 = props.loadingIcon || /* @__PURE__ */ React.createElement(SpinnerIcon, _extends$2({}, loadingIconProps, {
      spin: true
    }));
    var loadingIcon2 = IconUtils.getJSXIcon(icon2, _objectSpread$3({}, loadingIconProps), {
      props
    });
    if (!props.loaderDisabled && props.showLoader && loadingState) {
      var _className = classNames("p-virtualscroller-loader", {
        "p-component-overlay": !props.loadingTemplate
      });
      var _content = loadingIcon2;
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
      var loaderProps = mergeProps2({
        className: _className
      }, ptm("loader"));
      return /* @__PURE__ */ React.createElement("div", loaderProps, _content);
    }
    return null;
  };
  var createSpacer = function createSpacer2() {
    if (props.showSpacer) {
      var spacerProps = mergeProps2({
        ref: _spacerRef,
        style: spacerStyle.current,
        className: "p-virtualscroller-spacer"
      }, ptm("spacer"));
      return /* @__PURE__ */ React.createElement("div", spacerProps);
    }
    return null;
  };
  var createItem = function createItem2(item2, index) {
    var options = getOptions(index);
    var content2 = ObjectUtils.getJSXElement(props.itemTemplate, item2, options);
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
    var contentProps = mergeProps2({
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
  var rootProps = mergeProps2({
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
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
var classes$1 = {
  root: function root7(_ref) {
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
var styles$1 = "\n@layer primereact {\n    .p-autocomplete {\n        display: inline-flex;\n        position: relative;\n    }\n    \n    .p-autocomplete-loader {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-autocomplete-dd .p-autocomplete-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n    \n    .p-autocomplete-dd .p-autocomplete-input,\n    .p-autocomplete-dd .p-autocomplete-multiple-container {\n         border-top-right-radius: 0;\n         border-bottom-right-radius: 0;\n     }\n    \n    .p-autocomplete-dd .p-autocomplete-dropdown {\n         border-top-left-radius: 0;\n         border-bottom-left-radius: 0px;\n    }\n    \n    .p-autocomplete .p-autocomplete-panel {\n        min-width: 100%;\n    }\n    \n    .p-autocomplete-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-autocomplete-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-autocomplete-item {\n        cursor: pointer;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-autocomplete-multiple-container {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        cursor: text;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n    }\n    \n    .p-autocomplete-token {\n        cursor: default;\n        display: inline-flex;\n        align-items: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-autocomplete-token-icon {\n        cursor: pointer;\n    }\n    \n    .p-autocomplete-input-token {\n        flex: 1 1 auto;\n        display: inline-flex;\n    }\n    \n    .p-autocomplete-input-token input {\n        border: 0 none;\n        outline: 0 none;\n        background-color: transparent;\n        margin: 0;\n        padding: 0;\n        box-shadow: none;\n        border-radius: 0;\n        width: 100%;\n    }\n    \n    .p-fluid .p-autocomplete {\n        display: flex;\n    }\n    \n    .p-fluid .p-autocomplete-dd .p-autocomplete-input {\n        width: 1%;\n    }\n    \n    .p-autocomplete-items-wrapper {\n        overflow: auto;\n    } \n}\n";
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
var AutoCompletePanel = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(props, ref) {
  var mergeProps2 = useMergeProps();
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
      var footerProps = mergeProps2({
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
    var itemGroupProps = mergeProps2(_objectSpread$1({
      index,
      className: cx("itemGroup"),
      "data-p-highlight": false
    }, labelItemProps), _ptm("itemGroup"));
    return /* @__PURE__ */ React.createElement("li", _extends$1({}, itemGroupProps, {
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
    var itemProps = mergeProps2(_objectSpread$1({
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
    return /* @__PURE__ */ React.createElement("li", _extends$1({
      key
    }, itemProps), content, /* @__PURE__ */ React.createElement(Ripple, null));
  };
  var createGroupChildren = function createGroupChildren2(optionGroup, i) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function(item2, j) {
      var key = i + "_" + j;
      var itemProps = mergeProps2({
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
        var _itemProps = mergeProps2({
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
    var itemProps = mergeProps2({
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
      var emptyMessageProps = mergeProps2({
        className: cx("emptyMessage")
      }, _ptm("emptyMessage"));
      var _listProps = mergeProps2({
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
          var listProps2 = mergeProps2({
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
      return /* @__PURE__ */ React.createElement(VirtualScroller, _extends$1({
        ref: props.virtualScrollerRef
      }, virtualScrollerProps, {
        pt: _ptm("virtualScroller"),
        __parentMetadata: {
          parent: props.metaData
        }
      }));
    }
    var items = createItems();
    var listProps = mergeProps2({
      id: props.listId,
      className: cx("list"),
      role: "listbox"
    }, _ptm("list"));
    var listWrapperProps = mergeProps2({
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
    var panelProps = mergeProps2({
      className: classNames(props.panelClassName, cx("panel", {
        context
      })),
      style,
      onClick: function onClick(e) {
        return props.onClick(e);
      },
      "data-pr-is-overlay": true
    }, _ptm("panel"));
    var transitionProps = mergeProps2({
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
    return /* @__PURE__ */ React.createElement(CSSTransition, _extends$1({
      nodeRef: ref
    }, transitionProps), /* @__PURE__ */ React.createElement("div", _extends$1({
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
var AutoComplete = /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(function(inProps, ref) {
  var mergeProps2 = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = AutoCompleteBase.getProps(inProps, context);
  var _React$useState = React.useState(props.id), _React$useState2 = _slicedToArray$1(_React$useState, 2), idState = _React$useState2[0], setIdState = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray$1(_React$useState3, 2), searchingState = _React$useState4[0], setSearchingState = _React$useState4[1];
  var _React$useState5 = React.useState(false), _React$useState6 = _slicedToArray$1(_React$useState5, 2), focusedState = _React$useState6[0], setFocusedState = _React$useState6[1];
  var _React$useState7 = React.useState(false), _React$useState8 = _slicedToArray$1(_React$useState7, 2), overlayVisibleState = _React$useState8[0], setOverlayVisibleState = _React$useState8[1];
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
  }), _useOverlayListener2 = _slicedToArray$1(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
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
    return /* @__PURE__ */ React.createElement(InputText, _extends$1({
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
        var removeTokenIconProps = mergeProps2({
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
        var icon2 = props.removeTokenIcon || /* @__PURE__ */ React.createElement(TimesCircleIcon, removeTokenIconProps);
        var removeTokenIcon = !props.disabled && IconUtils.getJSXIcon(icon2, _objectSpread$2({}, removeTokenIconProps), {
          props
        });
        var tokenProps = mergeProps2({
          className: cx("token")
        }, ptm("token"));
        var tokenLabelProps = mergeProps2({
          className: cx("tokenLabel")
        }, ptm("tokenLabel"));
        return /* @__PURE__ */ React.createElement("li", _extends$1({
          key
        }, tokenProps), /* @__PURE__ */ React.createElement("span", tokenLabelProps, formatValue(val)), removeTokenIcon);
      });
    }
    selectedItem.current = null;
    return null;
  };
  var createMultiInput = function createMultiInput2(allowMoreValues) {
    var ariaControls = overlayVisibleState ? idState + "_list" : null;
    var inputTokenProps = mergeProps2({
      className: cx("inputToken")
    }, ptm("inputToken"));
    var inputProps = mergeProps2(_objectSpread$2({
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
    var containerProps = mergeProps2({
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
      var ariaLabel2 = props.dropdownAriaLabel || props.placeholder || localeOption("choose");
      return /* @__PURE__ */ React.createElement(Button, {
        type: "button",
        icon: props.dropdownIcon || /* @__PURE__ */ React.createElement(ChevronDownIcon, null),
        className: cx("dropdownButton"),
        disabled: props.disabled,
        onClick: onDropdownClick,
        "aria-label": ariaLabel2,
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
      var loadingIconProps = mergeProps2({
        className: cx("loadingIcon")
      }, ptm("loadingIcon"));
      var icon2 = props.loadingIcon || /* @__PURE__ */ React.createElement(SpinnerIcon, _extends$1({}, loadingIconProps, {
        spin: true
      }));
      var loaderIcon = IconUtils.getJSXIcon(icon2, _objectSpread$2({}, loadingIconProps), {
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
  var rootProps = mergeProps2({
    id: idState,
    ref: elementRef,
    style: props.style,
    className: classNames(props.className, cx("root", {
      focusedState
    }))
  }, otherProps, ptm("root"));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", rootProps, input2, loader, dropdown, /* @__PURE__ */ React.createElement(AutoCompletePanel, _extends$1({
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
  }))), hasTooltip && /* @__PURE__ */ React.createElement(Tooltip, _extends$1({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
AutoComplete.displayName = "AutoComplete";
function CityAutocompleteField({
  name,
  value,
  onChange,
  onBlur,
  errors,
  touched,
  placeholder = "Search or enter your city",
  citiesOptions
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
    var pos = positions.find(function(item2) {
      return item2 === props.position;
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
  root: function root8(_ref3) {
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
  var mergeProps2 = useMergeProps();
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
    var closeButtonProps = mergeProps2({
      type: "button",
      ref: closeIconRef,
      className: cx("closeButton"),
      onClick: function onClick(e) {
        return onClose(e);
      },
      "aria-label": props.ariaCloseLabel || ariaLabel("close")
    }, ptm("closeButton"));
    var closeIconProps = mergeProps2({
      className: cx("closeIcon")
    }, ptm("closeIcon"));
    var icon2 = props.closeIcon || /* @__PURE__ */ React.createElement(TimesIcon, closeIconProps);
    var closeIcon = IconUtils.getJSXIcon(icon2, _objectSpread({}, closeIconProps), {
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
  var maskProps = mergeProps2({
    ref: maskRef,
    style: sx("mask"),
    className: cx("mask", {
      maskVisibleState
    }),
    onMouseDown: function onMouseDown(e) {
      return onMaskClick(e);
    }
  }, ptm("mask"));
  var rootProps = mergeProps2({
    id: props.id,
    className: classNames(props.className, cx("root", {
      context
    })),
    style: props.style,
    role: "complementary"
  }, SidebarBase.getOtherProps(props), ptm("root"));
  var headerProps = mergeProps2({
    className: cx("header")
  }, ptm("header"));
  var contentProps = mergeProps2({
    className: cx("content")
  }, ptm("content"));
  var iconsProps = mergeProps2({
    className: cx("icons")
  }, ptm("icons"));
  var transitionTimeout = {
    enter: props.fullScreen ? 150 : 300,
    exit: props.fullScreen ? 150 : 300
  };
  var transitionProps = mergeProps2({
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
//# sourceMappingURL=SEO-CcsoXETz.js.map
