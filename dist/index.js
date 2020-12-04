import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _spliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/splice';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _findIndexInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/find-index';
import _Object$assign from '@babel/runtime-corejs3/core-js-stable/object/assign';
import _sortInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/sort';
import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _toConsumableArray from '@babel/runtime-corejs3/helpers/toConsumableArray';
import _Array$isArray from '@babel/runtime-corejs3/core-js-stable/array/is-array';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import _includesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/includes';
import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/index-of';
import dayjs from 'dayjs';
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _someInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/some';
import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/edit/matchbrackets';
import 'ant-design-vue/es/notification/style';
import _notification from 'ant-design-vue/es/notification';
import 'ant-design-vue/es/message/style';
import _message from 'ant-design-vue/es/message';
import 'ant-design-vue/es/badge/style';
import _Badge from 'ant-design-vue/es/badge';
import 'ant-design-vue/es/pagination/style';
import _Pagination from 'ant-design-vue/es/pagination';
import 'ant-design-vue/es/switch/style';
import _Switch from 'ant-design-vue/es/switch';
import 'ant-design-vue/es/date-picker/style';
import _DatePicker from 'ant-design-vue/es/date-picker';
import 'ant-design-vue/es/icon/style';
import _Icon from 'ant-design-vue/es/icon';
import 'ant-design-vue/es/select/style';
import _Select from 'ant-design-vue/es/select';
import 'ant-design-vue/es/modal/style';
import _Modal from 'ant-design-vue/es/modal';
import 'ant-design-vue/es/table/style';
import _Table from 'ant-design-vue/es/table';
import 'ant-design-vue/es/spin/style';
import _Spin from 'ant-design-vue/es/spin';
import 'ant-design-vue/es/input-number/style';
import _InputNumber from 'ant-design-vue/es/input-number';
import 'ant-design-vue/es/input/style';
import _Input from 'ant-design-vue/es/input';
import 'ant-design-vue/es/config-provider/style';
import _ConfigProvider from 'ant-design-vue/es/config-provider';
import 'ant-design-vue/es/button/style';
import _Button from 'ant-design-vue/es/button';
import 'ant-design-vue/es/space/style';
import _Space from 'ant-design-vue/es/space';
import mvyu from 'maxilo-vue-ysz-ui';
import 'maxilo-vue-ysz-ui/lib/ysz-ui.css';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e);}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h);}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments);}};var helper=mergeJsxProps;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context9; _forEachInstanceProperty(_context9 = ownKeys(Object(source), true)).call(_context9, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context10; _forEachInstanceProperty(_context10 = ownKeys(Object(source))).call(_context10, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var bind = function _bind(struct, data) {
  var type = Object.prototype.toString.call(struct);

  if (type == '[object Object]') {
    var _context;

    var _struct = {};

    _forEachInstanceProperty(_context = _Object$keys(struct)).call(_context, function (k) {
      var hasRelationKey = _indexOfInstanceProperty(k).call(k, '->') > -1;
      var sourceK = k;
      var destK = k;

      if (hasRelationKey) {
        var keys = k.split('->');
        sourceK = keys[0];
        destK = keys[1];
      }

      var stype = Object.prototype.toString.call(struct[k]);
      var val = data[destK];

      if (stype == '[object Array]') {
        var s = struct[k][0];

        if (Object.prototype.toString.call(val) == '[object Array]') {
          var childItems = [];

          _forEachInstanceProperty(val).call(val, function (child) {
            childItems.push(_bind(s, child));
          });

          _struct[destK] = childItems;
        } else {
          _struct[destK] = [];
        }
      } else {
        _struct[destK] = stype == '[object Object]' ? _bind(data, val) : struct[k](val);
      }
    });

    return _struct;
  } else {
    return null;
  }
};

var random = function random() {
  var pre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  function guid() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  }

  return pre + guid();
};

var cloneDeep = function _cloneDeep(data) {
  var _context2;

  var type = Object.prototype.toString.call(data);

  if (!_includesInstanceProperty(_context2 = ['[object Array]', '[object Object]']).call(_context2, type)) {
    return data;
  } else {
    if (type == '[object Array]') {
      var items = [];

      _forEachInstanceProperty(data).call(data, function (item) {
        items.push(_cloneDeep(item));
      });

      return item;
    } else {
      var _context3;

      var obj = _objectSpread({}, data);

      var _obj = {};

      _forEachInstanceProperty(_context3 = _Object$keys(obj)).call(_context3, function (k) {
        _obj[k] = _cloneDeep(obj[k]);
      });

      return _obj;
    }
  }
};

var has = function has(obj, path) {
  var returnValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var endValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var failBack = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var pathInfo = path.split('.');
  var x = [];
  var tmp = {};

  _forEachInstanceProperty(pathInfo).call(pathInfo, function (v) {
    if (/\[/.test(v)) {
      //find [a]b[c] | b[a]c | [a][b]c => a.b.c
      var arrayPathInfo = v.match(/(\[([^\[\]]+?)\]|[^\[\]]+)+?/g);

      if (arrayPathInfo !== null) {
        _forEachInstanceProperty(arrayPathInfo).call(arrayPathInfo, function (q) {
          x.push(q.replace('[', '').replace(']', ''));
        });
      }
    } else {
      x.push(v);
    }
  });

  var x_len = x.length;

  for (var _i = 0; _i < x_len; _i++) {
    var _context4;

    var v = x[_i];

    if (!_includesInstanceProperty(_context4 = ['[object Array]', '[object Object]']).call(_context4, Object.prototype.toString.call(obj)) || !(v in obj)) {
      if (failBack !== null) {
        failBack(obj, _sliceInstanceProperty(x).call(x, _i));
      }

      return endValue;
    }

    tmp = obj;
    obj = obj[v];
  }

  if (failBack !== null) {
    failBack(tmp, [x[x_len - 1]]);
  }

  return returnValue ? obj : true;
};

var get = function get(obj, path) {
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var value = has(obj, path, true, null);
  return value === null ? d : value;
};

var set = function set(obj, path, d) {
  has(obj, path, false, null, function (obj, pathInfo) {
    var p_len = pathInfo.length;

    for (var _i2 = 0; _i2 < p_len; _i2++) {
      var v = pathInfo[_i2];

      if (_i2 + 1 < p_len) {
        var tmp = {};
        obj = obj[v] = tmp;
      } else {
        obj[v] = d;
      }
    }
  });
};

var resize = function resize(el, cb, _c) {
  var iframe = document.createElement('iframe');

  if (_c) {
    iframe.setAttribute('class', _c);
  }

  iframe.setAttribute('style', "\n            width: 100%;\n            height: 100 %;\n            position: absolute;\n            visibility: hidden;\n            margin: 0;\n            padding: 0;\n            border: 0;");
  el.appendChild(iframe);
  var oldWidth = el.offsetWidth;
  var oldHeight = el.offsetHeight;

  function sizeChange() {
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    if (width !== oldWidth || height !== oldHeight) {
      cb({
        width: width,
        height: height
      }, {
        width: oldWidth,
        height: oldHeight
      });
      oldWidth = width;
      oldHeight = height;
    }
  }

  var timer = 0;

  iframe.contentWindow.onresize = function () {
    clearTimeout(timer);
    timer = _setTimeout(sizeChange, 20);
  };
};

var slotDeepClone = function slotDeepClone(vnodes, createElement) {
  function cloneVNode(vnode) {
    var _context5;

    var clonedChildren = vnode.children && _mapInstanceProperty(_context5 = vnode.children).call(_context5, function (vnode) {
      return cloneVNode(vnode);
    });

    var cloned = createElement(vnode.tag, vnode.data, clonedChildren);
    cloned.text = vnode.text;
    cloned.isComment = vnode.isComment;
    cloned.componentOptions = vnode.componentOptions;
    cloned.elm = vnode.elm;
    cloned.context = vnode.context;
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    return cloned;
  }

  if (!vnodes) {
    return [];
  }

  var clonedVNodes = _mapInstanceProperty(vnodes).call(vnodes, function (vnode) {
    return cloneVNode(vnode);
  });

  return clonedVNodes;
};

var getSlot = function getSlot(target, i) {
  var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (target === undefined || !_Array$isArray(target)) {
    return '';
  }

  var s = _filterInstanceProperty(target).call(target, function (v) {
    return v.tag;
  })[i];

  if (!s) {
    return '';
  }

  return clone ? slotDeepClone([s], clone)[0] : s;
};

var keyby = function keyby(arr, k) {
  var m = {};
  _Array$isArray(arr) && _forEachInstanceProperty(arr).call(arr, function (item) {
    m[item[k]] = item;
  });
  return m;
};

var http = {
  responseCreate: function responseCreate(response) {
    return response.status == 201;
  },
  badRequest: function badRequest(response) {
    return response.status == 400;
  },
  responseDelete: function responseDelete(response) {
    return response.status == 204;
  },
  serverError: function serverError(response) {
    return response.status == 500;
  },
  responseNotFound: function responseNotFound(response) {
    return response.status == 404;
  },
  responseOk: function responseOk(response) {
    return response.status < 300 && response.status >= 200;
  }
};

var getTypeDefault = function getTypeDefault(type, _d, optiom) {
  switch (type) {
    case 'customer':
      {
        return _d;
      }

    case 'map':
      {
        return getType(_d) == 'Object' ? _d : {};
      }

    case 'date':
      {
        return _d === undefined ? dayjs() : dayjs(_d);
      }

    case 'switch':
      {
        return !!_d;
      }

    case 'radio':
      {
        if (option.list && _Array$isArray(option.list) && option.list.length > 0) {
          var _context6;

          var index = _findIndexInstanceProperty(_context6 = option.list).call(_context6, function (v) {
            return v.value === _d;
          });

          if (index === -1) {
            return option.list[0].value;
          } else {
            return option.list[index].value;
          }
        } else {
          return '';
        }
      }

    case 'tag':
    case 'check':
      {
        return _Array$isArray(_d) ? _d : [];
      }

    case 'param':
      {
        return _Array$isArray(_d) ? _d : [];
      }

    case 'file':
      {
        return _Array$isArray(_d) ? _d : getType(_d) == 'String' && !!_d ? [_d] : [];
      }

    case 'number':
      {
        return _d ? number(_d) : 0;
      }

    case 'select':
      {
        return _d === undefined || _d === null ? '' : _d;
      }

    case 'string':
    default:
      {
        return getType(_d) == 'String' ? _d : _d === undefined || _d === null ? '' : _d.toString();
      }
  }
};

var number = function number(value) {
  return value === undefined || isNaN(value) ? 0 : Number(value);
};

var getType = function getType(o) {
  var str = Object.prototype.toString.call(o);
  return _sliceInstanceProperty(str).call(str, 8, str.length - 1);
};

var parseURL = function parseURL(url) {
  var _context7;

  var tmp = {};
  getType(url) == "String" && _forEachInstanceProperty(_context7 = url.replace(/^.*?\?/, '').split('&')).call(_context7, function (v) {
    var t = v.split('=');
    tmp[t[0]] = t[1] ? t[1] : '';
  });
  return tmp;
};

var limitAction = function limitAction(time, cb) {
  var ok = true;
  return function () {
    if (ok) {
      ok = false;

      _setTimeout(function () {
        ok = true;
      }, time * 1000);

      cb();
    }
  };
};

var arrayDefault = function arrayDefault(arr, key, d) {
  return _includesInstanceProperty(arr).call(arr, key) ? key : d;
};

var getPropsData = function getPropsData(ele) {
  var componentOptions = ele.componentOptions;

  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }

  return componentOptions ? componentOptions.propsData || {} : {};
};

var getScopedSlots = function getScopedSlots(ele) {
  return ele.data && ele.data.scopedSlots || {};
};

var getComponentFromProp = function getComponentFromProp(instance, prop) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (instance.$createElement) {
    var h = instance.$createElement;
    var temp = instance[prop];

    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }

    return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;
  } else {
    var _context8;

    var _h = instance.context.$createElement;
    var _temp = getPropsData(instance)[prop];

    if (_temp !== undefined) {
      return typeof _temp === 'function' && execute ? _temp(_h, options) : _temp;
    }

    var slotScope = getScopedSlots(instance)[prop];

    if (slotScope !== undefined) {
      return typeof slotScope === 'function' && execute ? slotScope(_h, options) : slotScope;
    }

    var slotsProp = [];
    var componentOptions = instance.componentOptions || {};

    _forEachInstanceProperty(_context8 = componentOptions.children || []).call(_context8, function (child) {
      if (child.data && child.data.slot === prop) {
        if (child.data.attrs) {
          delete child.data.attrs.slot;
        }

        if (child.tag === 'template') {
          slotsProp.push(child.children);
        } else {
          slotsProp.push(child);
        }
      }
    });

    return slotsProp.length ? slotsProp : undefined;
  }
};

var getRender = function getRender(d, context) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d;
  return typeof context == "function" ? context.call(d, options) : context;
};

var bytesToSize = function bytesToSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  i = Math.floor(Math.log(bytes) / Math.log(k));
  var num = bytes / Math.pow(k, i);
  return num.toPrecision(3) + ' ' + sizes[i];
};

var getArrayFunction = function getArrayFunction(items) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!items) {
    return [];
  }

  var set = [];

  _forEachInstanceProperty(items).call(items, function (v) {
    if (getType(v) == 'Function') {
      var tmp = v.apply(void 0, _toConsumableArray(args));

      if (_Array$isArray(tmp)) {
        _forEachInstanceProperty(tmp).call(tmp, function (t) {
          return _includesInstanceProperty(set).call(set, t) ? '' : set.push(t);
        });
      } else {
        _includesInstanceProperty(set).call(set, tmp) ? '' : set.push(tmp);
      }
    } else {
      _includesInstanceProperty(set).call(set, v) ? '' : set.push(v);
    }
  });

  return set;
};

var utils = {
  getType: getType,
  set: set,
  get: get,
  has: has,
  resize: resize,
  getSlot: getSlot,
  bind: bind,
  cloneDeep: cloneDeep,
  random: random,
  keyby: keyby,
  http: http,
  number: number,
  parseURL: parseURL,
  getTypeDefault: getTypeDefault,
  limitAction: limitAction,
  arrayDefault: arrayDefault,
  getComponentFromProp: getComponentFromProp,
  getRender: getRender,
  bytesToSize: bytesToSize,
  getArrayFunction: getArrayFunction
};

var Http = {
  engine: null,
  errorMsgAdapter: function errorMsgAdapter(r) {
    return r.response.data;
  },
  ext: {},
  getEngine: function getEngine(key) {
    key = key ? key : "default";

    if (key == "default" || !Http.ext[key]) {
      return {
        engine: Http.engine,
        errorMsgAdapter: Http.errorMsgAdapter
      };
    } else {
      return Http.ext[key];
    }
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context71; _forEachInstanceProperty(_context71 = ownKeys$1(Object(source), true)).call(_context71, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context72; _forEachInstanceProperty(_context72 = ownKeys$1(Object(source))).call(_context72, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var curd = {
  name: 'toolCurd',
  render: function render() {
    var _this = this,
        _context,
        _context2;

    var h = arguments[0];
    var $scopedSlots = this.$scopedSlots;
    return h("ysz-module-card", [h("tool-form", helper([{
      "attrs": {
        "layout": this.layout,
        "httpKey": this.httpKey,
        "show": this.show,
        "paramTransform": this.paramTransform
      }
    }, {
      "on": {
        "update:show": function updateShow(v) {
          return _this.show = v;
        }
      }
    }, {
      "ref": "ywSettingBase",
      "on": {
        "done": this.opearDone,
        "opearFinish": this.opearFinish
      }
    }])), this.title || $scopedSlots.title ? h("span", {
      "slot": "title"
    }, [this.title ? this.title : $scopedSlots.title()]) : null, $scopedSlots.top && $scopedSlots.top(), this.fetchUrl && !this.preview ? h("tw-emotion", {
      "attrs": {
        "size": "small"
      },
      "class": "action-btn action-btn__top",
      "on": {
        "click": function click(e) {
          return _this.refresh();
        }
      }
    }, ["\u5237\u65B0"]) : null, _mapInstanceProperty(_context = this._dispatchTop).call(_context, function (action, index) {
      return h("tw-emotion", {
        "attrs": {
          "size": "small"
        },
        "class": "action-btn action-btn__top",
        "key": index,
        "on": {
          "click": function click(e) {
            return _this.onTopAction(action);
          }
        }
      }, [action.title]);
    }), this._has_filter ? h("ysz-list", {
      "attrs": {
        "row": true
      }
    }, [_mapInstanceProperty(_context2 = this._filter).call(_context2, function (filter) {
      return h("ysz-list-item-top", [h("ysz-list-item", {
        "key": filter.filterKey,
        "class": "h-full",
        "slot": "top"
      }, [h("span", {
        "slot": "left"
      }, [filter.label]), h("tool-form-item", {
        "attrs": {
          "value": _filterInstanceProperty(_this.store)[filter.filterKey],
          "editing": true,
          "type": filter.type,
          "option": filter.option
        },
        "on": {
          "change": function change(value) {
            return _this.onFilter(value, filter.filterKey);
          }
        }
      })]), filter.help_msg ? h("tw-alert", {
        "style": "text-align:left",
        "attrs": {
          "mini": true,
          "left": true,
          "title": filter.help_msg,
          "type": "info",
          "show-icon": true
        }
      }) : null]);
    }), h("ysz-list-item", [h("tw-emotion", {
      "attrs": {
        "size": "small",
        "type": "primary"
      },
      "slot": "left",
      "on": {
        "click": function click(e) {
          return _this.refresh();
        }
      }
    }, [" \u641C\u7D22"]), h("tw-emotion", {
      "attrs": {
        "size": "small",
        "type": "info"
      },
      "on": {
        "click": function click(e) {
          return _this.clearFilter();
        }
      }
    }, [" \u91CD\u7F6E"])])]) : null, h("div", {
      "style": "display: flex"
    }, [this._has_left_view ? h("div", {
      "style": "flex: 0 0 auto"
    }, [$scopedSlots.left()]) : null, h("div", {
      "style": "flex: 1 1 auto"
    }, [h("ysz-fetch-wrap", {
      "attrs": {
        "engine": this._httpEngine,
        "url": this._fetchUrl,
        "errHandler": this.fetchErr,
        "handler": this.render,
        "page": this.store.page,
        "pageKey": "page",
        "size": this.store.page_size
      },
      "ref": "datawrap"
    }, [h("a-table", {
      "class": "curd-core-table",
      "attrs": {
        "rowKey": this.store.rowKey,
        "size": "small",
        "dataSource": this._tdata,
        "columns": this._columns,
        "bordered": true,
        "pagination": this.pagination
      },
      "on": {
        "change": function change(page, sorter, filter) {
          return _this.pageRender(page, sorter, filter);
        }
      }
    })])]), this._has_right_view ? h("div", {
      "style": "flex: 0 0 auto"
    }, [$scopedSlots.right()]) : null]), this._has_footer_view ? h("div", {
      "style": "flex: 0 0 auto"
    }, [$scopedSlots.footer()]) : null]);
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    fetchUrl: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    models: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    actionNewRow: {
      type: Boolean,
      default: false
    },
    actionEditRow: {
      type: Boolean,
      default: false
    },
    actionEditFilter: {
      default: function _default(r) {
        return r;
      },
      type: Function
    },
    paramTransform: {
      default: function _default(r) {
        return r;
      },
      type: Function
    },
    queryParams: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    fetchTransform: {
      default: function _default(r) {
        return r;
      },
      type: Function
    },
    dataSource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    httpKey: {
      type: String,
      default: 'default'
    },
    preview: {
      type: Boolean,
      default: false
    },
    layout: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var _this2 = this;

    this.$nextTick(function () {
      var _context3;

      var userdata = _Array$isArray(_this2.$props.dataSource) ? _this2.$props.dataSource : [];
      _this2.store.tableData = _concatInstanceProperty(_context3 = []).call(_context3, _toConsumableArray(_this2.store.tableData), _toConsumableArray(_mapInstanceProperty(userdata).call(userdata, _this2.transformData)));
      _this2.store.page_count = _this2.store.tableData.length;
    });
    return {
      show: false,
      store: {
        colEditKey: utils.random('curd-edit-'),
        rowKey: utils.random('curd-row-key-'),
        edit: {
          key: 0,
          field: 0,
          ing: false
        },
        page: 1,
        page_count: 0,
        page_size: this.$props.pageSize,
        tableData: [],
        relations: [],
        editKey: -1,
        editModelKey: '__EDIT__',
        editModeTitle: '编辑',
        tmpeditcellvalue: '',
        filter: {},
        sort: {}
      }
    };
  },
  computed: {
    _httpEngine: function _httpEngine() {
      return Http.getEngine(this.httpKey).engine;
    },
    _tdata: function _tdata() {
      var _context4;

      if (this.fetchUrl) {
        return this.store.tableData;
      }

      var s = (this.store.page - 1) * this.store.page_size;
      return _sliceInstanceProperty(_context4 = this.store.tableData).call(_context4, s, s + this.store.page_size);
    },
    _has_filter: function _has_filter() {
      return this._filter.length > 0;
    },
    _filter: function _filter() {
      var _context5, _context6;

      return _mapInstanceProperty(_context5 = _filterInstanceProperty(_context6 = this._format_columns).call(_context6, function (f) {
        return _filterInstanceProperty(f);
      })).call(_context5, function (f) {
        return _objectSpread$1(_objectSpread$1({
          label: f.title
        }, f), {}, {
          filterKey: f.filterKey ? f.filterKey : f.field,
          type: f.filterType ? f.filterType : f.type,
          help_msg: f.filter_help_msg
        });
      });
    },
    _fetchUrl: function _fetchUrl() {
      var _context7,
          _context8,
          _this3 = this,
          _context11;

      if (!this.fetchUrl) {
        return '';
      }

      var urlInfo = this.fetchUrl.split("?");
      var path = urlInfo[0],
          query = urlInfo[1];
      var querys = utils.parseURL(query);

      var filters = _forEachInstanceProperty(_context7 = _filterInstanceProperty(_context8 = this._filter).call(_context8, function (f) {
        var tmp = _filterInstanceProperty(_this3.store)[f.filterKey];

        if (tmp === undefined) return false;

        if (f.filterWithoutEmpty) {
          return !!tmp;
        }

        return true;
      })).call(_context7, function (f) {
        querys[f.filterKey] = encodeURIComponent(_filterInstanceProperty(_this3.store)[f.filterKey]);
      });

      if (_Object$keys(_sortInstanceProperty(this.store)).length > 0) {
        var _context9;

        querys.sort = _mapInstanceProperty(_context9 = _Object$keys(_sortInstanceProperty(this.store))).call(_context9, function (f) {
          var _context10;

          return _concatInstanceProperty(_context10 = "".concat(f, ",")).call(_context10, _sortInstanceProperty(_this3.store)[f]);
        }).join('|');
      }

      _Object$assign(querys, _objectSpread$1({}, this.queryParams));

      return path + "?" + _mapInstanceProperty(_context11 = _Object$keys(querys)).call(_context11, function (query) {
        var _context12;

        return _concatInstanceProperty(_context12 = "".concat(query, "=")).call(_context12, querys[query]);
      }).join("&");
    },
    pagination: function pagination() {
      return this.preview ? false : {
        current: this.store.page,
        total: this.store.page_count,
        pageSize: this.store.page_size,
        hideOnSinglePage: false,
        showTotal: function showTotal(total, range) {
          var _context13, _context14;

          return _concatInstanceProperty(_context13 = _concatInstanceProperty(_context14 = "\u7B2C".concat(range[0], "-")).call(_context14, range[1], "\u6761 \u5171")).call(_context13, total, "\u6761\u8BB0\u5F55");
        },
        showSizeChanger: true
      };
    },
    _dispatchTop: function _dispatchTop() {
      var _context15;

      return _filterInstanceProperty(_context15 = this._models).call(_context15, function (v) {
        return v.dispatchArea == 'topBar';
      });
    },
    _dispatchRow: function _dispatchRow() {
      var _context16, _context17;

      var row = _mapInstanceProperty(_context16 = this._modelBaseAction).call(_context16, function (v) {
        v.type = v.type ? v.type : 'action';
        return v;
      });

      row.push.apply(row, _toConsumableArray(_mapInstanceProperty(_context17 = this.store.relations).call(_context17, function (v) {
        return utils.set(v, 'type', 'relation');
      })));

      if (this.actionNewRow) {
        row.push({
          title: '+',
          api: 'new-row',
          type: 'api'
        });
      }

      if (this.actionEditRow) {
        row.push({
          title: this.store.editModeTitle,
          api: 'edit-row',
          type: 'api'
        });
      }

      return row;
    },
    _modelBaseAction: function _modelBaseAction() {
      var _context18;

      return _filterInstanceProperty(_context18 = this._format_models).call(_context18, function (v) {
        return v.dispatchArea == 'rowBar' && !v.hidden;
      });
    },
    _hasAction: function _hasAction() {
      return this._modelBaseAction.length > 0 || this._hasApiAction;
    },
    _hasApiAction: function _hasApiAction() {
      return this.actionNewRow || this.actionEditRow;
    },
    _format_columns: function _format_columns() {
      var _context19,
          _this4 = this;

      return _mapInstanceProperty(_context19 = this.columns).call(_context19, function (c) {
        c.option = c.option ? c.option : {};
        c.edit = _Object$assign({
          enable: false
        }, c.edit);
        c.dataIndex = c.field;
        c.customRender = c.customRender ? c.customRender : function (text, item, index, a) {
          var _context20;

          var h = _this4.$createElement;
          return {
            children: h('tool-form-item', {
              props: {
                // editing: item[this.store.colEditKey][c.field], 
                editing: c.edit.enable,
                value: utils.get(item, c.field),
                option: c.option,
                type: c.type,
                autoSet: _this4._auto_set,
                item: item
              },
              ref: _concatInstanceProperty(_context20 = "edit-ref-".concat(index, "-")).call(_context20, c.field),
              on: {
                change: function change(value) {
                  if (c.edit.enable) {
                    _this4.saveCell(c.field, _this4.getRowKey(item), value);
                  }
                }
              }
            })
          };
        };

        c.customCell = function (record, index) {
          return {
            on: {
              click: function click() {
                c.edit.enable && _this4.entryCell(c.field, _this4.getRowKey(record));
              }
            }
          };
        };

        c.align = c.align ? c.align : 'center';
        c.hidden = c.hidden === undefined ? false : c.hidden;
        c.sorter = _sortInstanceProperty(c) ? function (a, b) {
          return 1;
        } : null;
        c.type = c.type ? c.type : "string";
        return c;
      });
    },
    _form_columns: function _form_columns() {
      var _context21;

      return _filterInstanceProperty(_context21 = this._format_columns).call(_context21, function (f) {
        return !!f.field;
      });
    },
    _columns: function _columns() {
      var _context22,
          _this5 = this;

      var h = this.$createElement;

      var c = _toConsumableArray(_filterInstanceProperty(_context22 = this._format_columns).call(_context22, function (c) {
        return !c.hidden;
      }));

      if (this._hasAction) {
        c.push({
          title: '操作',
          align: 'center',
          tdSlot: '__action',
          customRender: function customRender(text, item, index) {
            var _context23;

            return h("a-space", [_mapInstanceProperty(_context23 = _this5._dispatchRow).call(_context23, function (row, _i) {
              return h("a-button", {
                "attrs": {
                  "size": "small"
                },
                "directives": [{
                  name: "show",
                  value: !_filterInstanceProperty(row) || _filterInstanceProperty(row).call(row, item)
                }],
                "key": _i,
                "class": {
                  'action-btn': true,
                  'action-btn__row-relation': row.type == 'relation'
                },
                "on": {
                  "click": function click(e) {
                    return _this5.onRowAction(row, item, index);
                  }
                }
              }, [row.title]);
            })]);
          }
        });
      }

      return c;
    },
    _columns_key: function _columns_key() {
      return utils.keyby(this._format_columns, 'field');
    },
    _format_models: function _format_models() {
      var _context24,
          _this6 = this;

      return _mapInstanceProperty(_context24 = this.models).call(_context24, function (f) {
        if (f.type === undefined) {
          f.type = 'action';
        }

        if (f.type == 'action' && f.key === undefined) {
          f.key = utils.random("action_key-");
        }

        if (f.xhr) {
          f.xhr.url = f.xhr.url ? f.xhr.url : _this6.fetchUrl;
          f.xhr.okMsg = f.xhr.okMsg ? f.xhr.okMsg : 'ok~';
        }

        f.dispatchArea = f.dispatchArea ? f.dispatchArea : 'rowBar';
        return f;
      });
    },
    _models: function _models() {
      var m = _toConsumableArray(this._format_models);

      if (this.actionEditRow) {
        var _context25, _context26, _context27, _context28;

        m.push({
          title: this.store.editModeTitle,
          key: this.store.editModelKey,
          show: _mapInstanceProperty(_context25 = _filterInstanceProperty(_context26 = this._format_columns).call(_context26, function (c) {
            return c.edit.enable;
          })).call(_context25, function (c) {
            return c.field;
          }),
          disabled: _mapInstanceProperty(_context27 = _filterInstanceProperty(_context28 = this._format_columns).call(_context28, function (c) {
            return c.disabled;
          })).call(_context27, function (c) {
            return c.field;
          })
        });
      }

      return m;
    },
    _has_left_view: function _has_left_view() {
      return !!this.$slots.left;
    },
    _has_right_view: function _has_right_view() {
      return !!this.$slots.right;
    },
    _has_footer_view: function _has_footer_view() {
      return !!this.$slots.footer;
    },
    _auto_set: function _auto_set() {
      var _context29;

      return _filterInstanceProperty(_context29 = this._format_columns).call(_context29, function (c) {
        return c.type == 'select' && c.option.labelKey;
      });
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    document.addEventListener('keyup', function (e) {
      switch (e.code) {
        case 'Tab':
          {
            // if(this.store.edit.ing) {
            if (!e.shiftKey) {
              _this7.editNextCell();
            } else {
              _this7.editPrevCell();
            } // }

          }
          break;

        case 'NumpadEnter':
        case 'Enter':
          {
            // if(this.store.edit.ing) {
            _this7.editNextCell(); // }

          }
          break;

        case 'Escape':
          {
            // if(this.store.edit.ing) {
            _this7.closeEdit(_this7.store.edit.field, _this7.store.edit.key); // }

          }
      }
    });
    this.$refs.ywSettingBase.setFields(this._form_columns);
    this.$refs.ywSettingBase.setModels(this._models);
  },
  methods: {
    fetchErr: function fetchErr(e) {
      console.log(e);
    },
    clearFilter: function clearFilter() {
      this.store.filter = {};
      this.refresh();
    },
    onFilter: function onFilter(value, field) {
      this.$set(_filterInstanceProperty(this.store), field, value);
    },
    editNextCell: function editNextCell() {
      var _context30,
          _this8 = this,
          _context31;

      var fieldIndex = _findIndexInstanceProperty(_context30 = this._format_columns).call(_context30, function (f) {
        return f.field == _this8.store.edit.field;
      });

      var nfi = _findIndexInstanceProperty(_context31 = this._format_columns).call(_context31, function (f, i) {
        return i > fieldIndex && f.edit.enable;
      });

      var cdata = _toConsumableArray(this.store.tableData);

      if (nfi != -1) {
        this.entryCell(this._format_columns[nfi].field, this.store.edit.key);
      } else {
        var _context32;

        var index = _findIndexInstanceProperty(_context32 = this.store.tableData).call(_context32, function (r) {
          return r[_this8.store.rowKey] == _this8.store.edit.key;
        });

        index = index + 1;

        if (index > this.store.tableData.length - 1) {
          this.apiNewRow();
          this.$nextTick(function () {
            var _context33;

            var firstEditField = _filterInstanceProperty(_context33 = _this8._format_columns).call(_context33, function (f) {
              return f.edit.enable && f.field;
            })[0];

            _this8.entryCell(firstEditField.field, _this8.getRowKey(_this8.store.tableData[index]));
          });
        } else {
          var _context34;

          var firstEditField = _filterInstanceProperty(_context34 = this._format_columns).call(_context34, function (f) {
            return f.edit.enable && f.field;
          })[0];

          this.entryCell(firstEditField.field, this.getRowKey(this.store.tableData[index]));
        }
      }
    },
    editPrevCell: function editPrevCell() {
      var _context35,
          _this9 = this;

      var fieldIndex = _findIndexInstanceProperty(_context35 = this._format_columns).call(_context35, function (f) {
        return f.field == _this9.store.edit.field;
      });

      var nfi = -1;

      for (var j = fieldIndex - 1; j >= 0; j--) {
        if (this._format_columns[j].edit.enable) {
          nfi = j;
          break;
        }
      }

      var cdata = _toConsumableArray(this.store.tableData);

      if (nfi != -1) {
        this.entryCell(this._format_columns[nfi].field, this.store.edit.key);
      } else {
        var _context36;

        var index = _findIndexInstanceProperty(_context36 = this.store.tableData).call(_context36, function (r) {
          return r[_this9.store.rowKey] == _this9.store.edit.key;
        });

        index = index - 1;

        if (index < 0) {
          this.closeEdit(this.store.edit.field, this.store.edit.key);
          return;
        }
      }
    },
    setEditTmpValue: function setEditTmpValue(value) {
      this.store.tmpeditcellvalue = value;
    },
    entryCell: function entryCell(field, key) {
      var _this10 = this,
          _context37,
          _context38;

      if (this.store.edit.ing) {
        this.closeEdit(this.store.edit.field, this.store.edit.key);
      }

      var cdata = _toConsumableArray(this.store.tableData);

      this.store.edit.field = field;
      this.store.edit.key = key;

      var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this10.store.rowKey];
      })[0];

      var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this10.store.rowKey];
      });

      index = index % this.store.page_size;
      target[this.store.colEditKey][field] = this.store.edit.ing = true;

      this.$refs[_concatInstanceProperty(_context37 = "edit-ref-".concat(index, "-")).call(_context37, field)].focus();

      this.store.tableData = cdata;
      this.setEditTmpValue(_filterInstanceProperty(_context38 = this.store.tableData).call(_context38, function (item) {
        return key === item[_this10.store.rowKey];
      })[0][field]);
    },
    saveCell: function saveCell(field, key, value) {
      var _this11 = this,
          _context39;

      // if(value === this.store.tmpeditcellvalue) {
      //     return
      // }
      var cdata = _toConsumableArray(this.store.tableData);

      var item = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === _this11.getRowKey(item);
      })[0];

      item[field] = value; //old Object.assign(item, this.editFilter(key, item))

      var fi = _filterInstanceProperty(_context39 = this._format_columns).call(_context39, function (r) {
        return r.field == field;
      })[0]; //old this.change(this.store.tableData)


      if (fi.edit.cellHandler) {
        fi.edit.cellHandler(key, item);
      }

      _Object$assign(item, this.editFilter(key, item));

      this.store.tableData = cdata;
      this.change(this.store.tableData);
    },
    cancleEdit: function cancleEdit(field, key) {
      this.saveCell(field, key, this.store.tmpeditcellvalue);
      this.closeEdit(field, key);
    },
    closeEdit: function closeEdit(field, key) {
      var _this12 = this,
          _context40;

      var cdata = _toConsumableArray(this.store.tableData);

      this.store.edit.field = '';
      this.store.edit.key = '';

      var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this12.store.rowKey];
      })[0];

      target[this.store.colEditKey][field] = this.store.edit.ing = false;

      var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this12.store.rowKey];
      });

      index = index % this.store.page_size;

      this.$refs[_concatInstanceProperty(_context40 = "edit-ref-".concat(index, "-")).call(_context40, field)].hide();

      this.store.tableData = cdata;
    },
    refresh: function refresh() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _this13.store.tableData = [];
                _this13.store.page_count = 0;
                _context41.next = 4;
                return _this13.$nextTick();

              case 4:
                _this13.$refs.datawrap.fetch();

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee);
      }))();
    },
    opearFinish: function opearFinish() {
      this.refresh();
    },
    pageRender: function pageRender(page, sorter, filter) {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                if (sorter.column) {
                  _this14.$set(_sortInstanceProperty(_this14.store), sorter.column.field, sorter.order);
                } else {
                  _this14.store.sort = {};
                }

                _this14.store.page = page.current;
                _this14.store.page_size = page.pageSize;
                _context42.next = 5;
                return _this14.$nextTick();

              case 5:
                _this14.$refs.datawrap.fetch();

              case 6:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee2);
      }))();
    },
    render: function render(response) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var _context43;

        return _regeneratorRuntime.wrap(function _callee3$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                if (!utils.http.responseOk(response)) {
                  _context44.next = 9;
                  break;
                }

                _context44.next = 3;
                return _this15.fetchTransform(response);

              case 3:
                response = _context44.sent;
                _this15.store.tableData = _mapInstanceProperty(_context43 = response.data.data).call(_context43, _this15.transformData);
                _this15.store.page_count = response.data.total;

                _this15.change(_this15.store.tableData);

                _context44.next = 10;
                break;

              case 9:
                _this15.$message.warn(response.data.msg);

              case 10:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onTopAction: function onTopAction(action) {
      switch (action.type) {
        case 'action':
          {
            this.onAction(action);
          }
          break;

        case 'api':
          {
            switch (action.api) {
              case 'event':
                {
                  this.$emit(action.key, this.store.tableData);
                }
            }
          }
      }
    },
    getRowKey: function getRowKey(item) {
      return item[this.store.rowKey];
    },
    getRow: function getRow(key) {
      var _this16 = this;

      var cdata = _toConsumableArray(this.store.tableData);

      return _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this16.store.rowKey];
      })[0];
    },
    onRowAction: function onRowAction(action, item, index) {
      switch (action.type) {
        case 'relation':
          {
            var _context45, _context46;

            this.$router.push({
              path: _concatInstanceProperty(_context45 = _concatInstanceProperty(_context46 = "".concat(this.$route.fullPath, "/")).call(_context46, item[action.primaryKey], "/")).call(_context45, action.key)
            });
          }
          break;

        case 'action':
          {
            this.onAction(action, item);
          }
          break;

        case 'api':
          {
            switch (action.api) {
              case 'new-row':
                {
                  this.apiNewRow(this.getRowKey(item));
                }
                break;

              case 'edit-row':
                {
                  this.store.editKey = this.getRowKey(item);
                  this.onAction({
                    key: this.store.editModelKey
                  }, item);
                }
                break;

              case 'event':
                {
                  this.$emit(action.key, {
                    item: item,
                    rawItem: this.getRaw(item),
                    key: this.getRowKey(item),
                    table: this
                  });
                }
            }
          }
      }
    },
    getRaw: function getRaw(item) {
      var obj = _objectSpread$1({}, item);

      delete obj[this.store.colEditKey];
      delete obj[this.store.rowKey];
      return obj;
    },
    autoSet: function autoSet(key, item) {
      var _context47,
          _this17 = this;

      var tmp = _objectSpread$1({}, item);

      var cdata = _toConsumableArray(this.store.tableData);

      _forEachInstanceProperty(_context47 = this._auto_set).call(_context47, function (s) {
        var _context48;

        var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
          return key === _this17.getRowKey(item);
        });

        tmp[s.option.labelKey] = _this17.$refs[_concatInstanceProperty(_context48 = "edit-ref-".concat(index, "-")).call(_context48, s.field)].getLabel();
      });

      return tmp;
    },
    editFilter: function editFilter(key, data) {
      var item = _objectSpread$1({}, data);

      _Object$assign(item, this.actionEditFilter(item));

      return item;
    },
    opearDone: function opearDone(data) {
      var _this18 = this;

      var model = this.$refs.ywSettingBase.getModel();

      if (this.actionEditRow && model == "edit-row") {
        var _context49;

        _Object$assign(data, this.editFilter(this.store.editKey, data));

        var cdata = _toConsumableArray(this.store.tableData);

        var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
          return _this18.store.editKey === _this18.getRowKey(item);
        })[0];

        _forEachInstanceProperty(_context49 = _Object$keys(data)).call(_context49, function (k) {
          target[k] = data[k];
        });

        this.store.tableData = cdata;
        this.change(this.store.tableData);
      } else {
        this.$emit(model, data);
      }
    },
    apiDeleteRow: function apiDeleteRow(key) {
      var _context50,
          _this19 = this,
          _context51;

      var index = _findIndexInstanceProperty(_context50 = this.store.tableData).call(_context50, function (r) {
        return _this19.getRowKey(r) === key;
      });

      _spliceInstanceProperty(_context51 = this.store.tableData).call(_context51, index, 1);

      this.change(this.store.tableData);
    },
    apiNewRow: function apiNewRow() {
      var _context52,
          _context53,
          _this20 = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var cs = {};

      _forEachInstanceProperty(_context52 = this._columns).call(_context52, function (f) {
        f.type && (cs[f.field] = utils.getTypeDefault(f.type, f.default, f.option || {}));
      });

      var index = _findIndexInstanceProperty(_context53 = this.store.tableData).call(_context53, function (r) {
        return _this20.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      for (var k = 0; k < num; k++) {
        var _context54;

        _spliceInstanceProperty(_context54 = this.store.tableData).call(_context54, index + k, 0, this.transformData(_objectSpread$1({}, cs)));
      }
    },
    apiAppend: function apiAppend(item) {
      var _context55,
          _this21 = this,
          _context56;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var index = _findIndexInstanceProperty(_context55 = this.store.tableData).call(_context55, function (r) {
        return _this21.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      _spliceInstanceProperty(_context56 = this.store.tableData).call(_context56, index > -1 ? index : this.store.tableData.length, 0, this.transformData(_objectSpread$1({}, item)));

      this.change(this.store.tableData);
    },
    apiAppends: function apiAppends(items) {
      var _context57,
          _this22 = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var index = _findIndexInstanceProperty(_context57 = this.store.tableData).call(_context57, function (r) {
        return _this22.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      _forEachInstanceProperty(items).call(items, function (item, i) {
        var _context58;

        return _spliceInstanceProperty(_context58 = _this22.store.tableData).call(_context58, index + i, 0, _this22.transformData(_objectSpread$1({}, item)));
      });

      this.change(this.store.tableData);
    },
    setRowItem: function setRowItem() {
      var _context59,
          _this23 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var index = _findIndexInstanceProperty(_context59 = this.store.tableData).call(_context59, function (r) {
        return _this23.getRowKey(r) === _this23.getRowKey(item);
      });

      this.store.tableData[index] = this.transformData(_objectSpread$1(_objectSpread$1({}, this.store.tableData[index]), item));
      this.change(this.store.tableData);
    },
    setRow: function setRow(key) {
      var _context60,
          _this24 = this;

      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = _findIndexInstanceProperty(_context60 = this.store.tableData).call(_context60, function (r) {
        return _this24.getRowKey(r) === key;
      });

      this.store.tableData[index] = this.transformData(_objectSpread$1(_objectSpread$1({}, this.store.tableData[index]), item));
      this.change(this.store.tableData);
    },
    onAction: function onAction(action) {
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.show = true;
      this.$refs.ywSettingBase.setModel(action.key);

      if (action.dispatchReset) {
        this.$refs.ywSettingBase.clean();
      } else {
        this.$refs.ywSettingBase.setData(item);
      }
    },
    transform: function transform(cb) {
      var _context61,
          _this25 = this;

      this.store.tableData = _mapInstanceProperty(_context61 = this.store.tableData).call(_context61, function (v, i, arr) {
        return _this25.editFilter(_this25.getRowKey(v), cb(v, i, arr));
      });
      this.change(this.store.tableData);
    },
    transformData: function transformData(data) {
      var _this26 = this;

      if (data[this.store.colEditKey] === undefined) {
        var _context62, _context63;

        data[this.store.colEditKey] = {};

        _forEachInstanceProperty(_context62 = _filterInstanceProperty(_context63 = this._format_columns).call(_context63, function (f) {
          return !!f.field;
        })).call(_context62, function (f) {
          data[_this26.store.colEditKey][f.field] = false;
        });
      }

      if (data[this.store.rowKey] === undefined) {
        data[this.store.rowKey] = utils.random('rowkey-');
      }

      data = this.editFilter(data[this.store.rowKey], data);
      return data;
    },
    clear: function clear() {
      this.store.edit = {
        key: 0,
        field: 0,
        ing: false
      };
      this.store.tableData = [];
      this.change();
    },
    change: function change() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      v = v || [];
      this.$emit('change', v);
    },
    getData: function getData() {
      var _context64,
          _this27 = this;

      var withlabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _mapInstanceProperty(_context64 = this.store.tableData).call(_context64, function (r) {
        var _context65, _context66;

        var tmp = _objectSpread$1({}, r);

        _Object$assign(tmp, _this27.autoSet(_this27.getRowKey(tmp), tmp));

        _forEachInstanceProperty(_context65 = _filterInstanceProperty(_context66 = _this27._format_columns).call(_context66, function (f) {
          return !!f.field;
        })).call(_context65, function (f) {
          if (!withlabel) {
            switch (f.type) {
              case 'select':
                {
                  tmp[f.field] = r[f.field];
                }
                break;

              default:
                {
                  tmp[f.field] = r[f.field];
                }
            }
          } else {
            tmp[f.field] = r[f.field];
          }
        });

        return tmp;
      });
    },
    getCurrentPage: function getCurrentPage() {
      return this.store.page;
    },
    getPageSize: function getPageSize() {
      return this.pageSize;
    },
    getPageData: function getPageData() {
      var _context67,
          _context68,
          _this28 = this;

      var start = (this.store.page - 1) * this.pageSize;
      var end = start + this.pageSize > this.store.tableData.length ? this.store.tableData.length : start + this.pageSize;
      return _mapInstanceProperty(_context67 = _sliceInstanceProperty(_context68 = this.store.tableData).call(_context68, start, end)).call(_context67, function (r) {
        var _context69, _context70;

        var tmp = _objectSpread$1({}, r);

        _Object$assign(tmp, _this28.autoSet(_this28.getRowKey(tmp), tmp));

        _forEachInstanceProperty(_context69 = _filterInstanceProperty(_context70 = _this28._format_columns).call(_context70, function (f) {
          return !!f.field;
        })).call(_context69, function (f) {
          tmp[f.field] = r[f.field];
        });

        return tmp;
      });
    }
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context26; _forEachInstanceProperty(_context26 = ownKeys$2(Object(source), true)).call(_context26, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context27; _forEachInstanceProperty(_context27 = ownKeys$2(Object(source))).call(_context27, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var form = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-modal', {
      attrs: {
        "width": "80%",
        "closable": false,
        "visible": _vm.show
      }
    }, [_c('span', {
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_vm._v(_vm._s(_vm._model_title))]), _vm._v(" "), _c('a-spin', {
      attrs: {
        "spinning": _vm.loading
      }
    }, [_c('ValidationObserver', {
      ref: "ob"
    }, [_vm._l(_vm._layout, function (layout) {
      return [_c('ysz-list', {
        key: layout.key,
        attrs: {
          "no-line": false,
          "row": true,
          "group": layout.col
        }
      }, _vm._l(layout.fields, function (field) {
        return _c('ValidationProvider', {
          key: field.field,
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "name": field.title,
            "rules": field.validate
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(ref) {
              var _context;

              var errors = ref.errors;
              var validate = ref.validate;
              return [_c('ysz-list-item-top', [_c('ysz-list-item', {
                attrs: {
                  "slot": "top"
                },
                slot: "top"
              }, [_c('span', {
                attrs: {
                  "slot": "left"
                },
                slot: "left"
              }, [_vm._v(_vm._s("" + field.title + (field.type == 'code' ? "(" + field.option.language + ")" : '')))]), _vm._v(" "), _c('a-badge', {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: errors.length,
                  expression: "errors.length"
                }],
                attrs: {
                  "status": "warning",
                  "text": errors[0]
                }
              })], 1), _vm._v(" "), _c('ysz-list-item-top', [_c('tool-form-item', {
                ref: field.field,
                refInFor: true,
                attrs: {
                  "slot": "top",
                  "disabled": _includesInstanceProperty(_context = _vm._model_disabled).call(_context, field.field),
                  "editing": true,
                  "value": _vm.dataform[field.form_key],
                  "option": field.option,
                  "type": field.type,
                  "item": _vm.dataform
                },
                on: {
                  "change": function change(value) {
                    validate(value), _vm.onChange(value, field.form_key);
                  }
                },
                slot: "top"
              }), _vm._v(" "), field.help_msg ? _c('tw-alert', {
                staticStyle: {
                  "text-align": "left"
                },
                attrs: {
                  "mini": "",
                  "left": "",
                  "title": field.help_msg,
                  "type": "info",
                  "show-icon": ""
                }
              }) : _vm._e()], 1)], 1)];
            }
          }], null, true)
        });
      }), 1)];
    })], 2)], 1), _vm._v(" "), _c('ysz-list-item', {
      attrs: {
        "slot": "footer",
        "left": true
      },
      slot: "footer"
    }, [_c('a-button', {
      on: {
        "click": _vm.cancleHandle
      }
    }, [_vm._v("取消")]), _vm._v(" "), _c('a-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.okHandle
      }
    }, [_vm._v("提交")])], 1)], 1);
  },
  staticRenderFns: [],
  name: 'toolForm',
  data: function data() {
    return {
      dataform: {},
      store: {
        fields: [],
        models: [],
        model: '',
        fieldData: {},
        progress: {}
      },
      _show: [],
      loading: false
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    autoSet: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    paramTransform: {
      type: Function,
      default: function _default(r) {
        return r;
      }
    },
    httpKey: {
      type: String,
      default: 'default'
    },
    layout: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    _layout: function _layout() {
      var _this = this;

      if (this.layout.length == 0) {
        return [{
          key: "default",
          col: this._model_layout_group,
          fields: this._fields
        }];
      } else {
        var _context2;

        return _mapInstanceProperty(_context2 = this.layout).call(_context2, function (lay, index) {
          var _context3;

          lay.fields = _filterInstanceProperty(_context3 = _this._fields).call(_context3, function (field) {
            return !field.layout_key && index == 0 || field.layout_key == lay.key;
          });
          return lay;
        });
      }
    },
    _has_option_remote_load: function _has_option_remote_load() {
      var _context4;

      return _someInstanceProperty(_context4 = this.store.fields).call(_context4, function (f) {
        return !!f.meta.fetchUrl;
      });
    },
    _hasModel: function _hasModel() {
      return !!this._models[this.store.model];
    },
    _models: function _models() {
      var _context5;

      var tmp = {};

      _forEachInstanceProperty(_context5 = this.store.models).call(_context5, function (v) {
        tmp[v.key] = v;
      });

      return tmp;
    },
    _current_model: function _current_model() {
      return this._hasModel ? this._models[this.store.model] : null;
    },
    _model_title: function _model_title() {
      return this._hasModel ? this._current_model.title : '';
    },
    _model_disabled: function _model_disabled() {
      if (this._hasModel) {
        return utils.getArrayFunction(this._current_model.disabled, [this._current_model, this.dataform]);
      } else {
        return [];
      }
    },
    _model_layout_group: function _model_layout_group() {
      return this._current_model && this._current_model.layout_group ? this._current_model.layout_group : 2;
    },
    _model_hide: function _model_hide() {
      if (this._hasModel) {
        if (this._current_model.hide.length != 0) {
          return !_Array$isArray(this._current_model.hide) && this._current_model.hide == '*' ? _Object$keys(this.dataform) : utils.getArrayFunction(this._current_model.hide, [this._current_model, this.dataform]);
        } else {
          var _context6;

          var show = utils.getArrayFunction(this._current_model.show, [this._current_model, this.dataform]);
          return show.length == 0 ? [] : _filterInstanceProperty(_context6 = _Object$keys(this.dataform)).call(_context6, function (v) {
            return !_includesInstanceProperty(show).call(show, v);
          });
        }
      } else {
        return [];
      }
    },
    _model_data: function _model_data() {
      var _this2 = this;

      // 只有汇集数据时根据form_key生成具体包含路径的数据
      // dataform 只存储path => value
      // _model_data: {a: {b: 1}}
      // dataform: {'a.b': 1}
      if (this._hasModel) {
        if (_Array$isArray(this._current_model.pick) && this._current_model.pick.length != 0) {
          var _context7;

          var keys = utils.getArrayFunction(this._current_model.pick, [this._current_model, this.dataform]);
          var tmp = {};

          _forEachInstanceProperty(_context7 = this.store.fields).call(_context7, function (field) {
            if (_includesInstanceProperty(keys).call(keys, field.form_key)) {
              utils.set(tmp, field.form_key, _this2.dataform[field.form_key]);
            }
          });

          return tmp;
        } else {
          var _context8;

          var omit = utils.getArrayFunction(this._current_model.omit, [this._current_model, this.dataform]);
          var _tmp = {};

          _forEachInstanceProperty(_context8 = this.store.fields).call(_context8, function (field) {
            if (!_includesInstanceProperty(omit).call(omit, field.form_key)) {
              utils.set(_tmp, field.form_key, _this2.dataform[field.form_key]);
            }
          });

          return _tmp;
        }
      } else {
        return {};
      }
    },
    _fieldMap: function _fieldMap() {
      var _context9;

      var tmp = {};

      _forEachInstanceProperty(_context9 = this.store.fields).call(_context9, function (v) {
        tmp[v.field] = v;
      });

      return tmp;
    },
    _has_xhr: function _has_xhr() {
      return this._hasModel && !!this._current_model.xhr.url;
    },
    _key: function _key() {
      var _context10;

      var ks = _filterInstanceProperty(_context10 = this.store.fields).call(_context10, function (field) {
        return field.key;
      });

      return ks.length > 0 ? ks[0].form_key : '';
    },
    _fields: function _fields() {
      var _context11,
          _this3 = this;

      return _filterInstanceProperty(_context11 = this.store.fields).call(_context11, function (v) {
        var _context12;

        return v.field && !_includesInstanceProperty(_context12 = _this3._model_hide).call(_context12, v.form_key);
      });
    }
  },
  methods: {
    onChange: function onChange(value, field) {
      this.$set(this.dataform, field, value);
    },
    upload: function upload(file, field) {
      var _this4 = this;

      var fd = new FormData();
      fd.append('file', file);
      return new _Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ok) {
          var response;
          return _regeneratorRuntime.wrap(function _callee$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _this4.loading = true;
                  _context13.prev = 1;
                  _context13.next = 4;
                  return _this4.$http.post(_this4._current_model.xhr.url + '/' + field.option.uploadApi, fd, {
                    'Content-Type': 'multipart/form-data',
                    onUploadProgress: function onUploadProgress(progressEvent) {
                      _this4.$set(_this4.store.progress, field.field, progressEvent.loaded / progressEvent.total * 100 | 0);
                    }
                  });

                case 4:
                  response = _context13.sent;
                  _this4.loading = false;

                  if (utils.http.responseOk(response)) {
                    _this4.$set(_this4.dataform[field.field], 0, response.data.path);

                    ok([response.data.path]);
                  } else {
                    ok('');
                  }

                  _context13.next = 13;
                  break;

                case 9:
                  _context13.prev = 9;
                  _context13.t0 = _context13["catch"](1);
                  _this4.loading = false;
                  ok('');

                case 13:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee, null, [[1, 9]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    setFields: function setFields() {
      var _this5 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var tmp = [];

      _forEachInstanceProperty(fields).call(fields, function (v) {
        var _context14;

        var type = _this5.filterType(v.type);

        var option = v.option ? v.option : {};

        if (_includesInstanceProperty(_context14 = ['select', 'radio']).call(_context14, v.type)) {
          option.valueKey = option.valueKey ? option.valueKey : 'value';
          option.titleKey = option.titleKey ? option.titleKey : 'label';
        }

        var fk = v.form_key ? v.form_key : v.field;

        var _default = utils.getTypeDefault(type, v.default, option);

        _this5.$set(_this5.dataform, fk, _default);

        tmp.push({
          type: type,
          title: v.title ? v.title : '未命名字段',
          field: v.field,
          default: _default,
          option: option,
          validate: v.validate ? v.validate : '',
          help_msg: v.help_msg ? v.help_msg : '',
          key: v.key === undefined ? false : v.key,
          meta: v,
          form_key: fk,
          form_value_key: v.form_value_key ? v.form_value_key : v.field,
          layout_key: v.layout_key
        });
      });

      this.store.fields = tmp;
    },
    setModels: function setModels() {
      var _arguments = arguments,
          _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var _context15, _context16, _this6$store$models;

        var models, tmp;
        return _regeneratorRuntime.wrap(function _callee2$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                models = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : [];
                _this6.store.models = _mapInstanceProperty(_context15 = _filterInstanceProperty(models).call(models, function (v) {
                  return !v.extend;
                })).call(_context15, function (v) {
                  if (!v.disabled || !_Array$isArray(v.disabled)) {
                    v.disabled = [];
                  }

                  if (!v.show || !_Array$isArray(v.show)) {
                    v.show = [];
                  }

                  if (!v.hide && !_Array$isArray(v.hide)) {
                    v.hide = [];
                  }

                  v.xhr = _Object$assign({
                    url: '',
                    method: 'get',
                    autoClose: true,
                    okMsg: 'ok~',
                    notifyEngine: 'message',
                    confirm: true,
                    confirmMsg: '确认操作?'
                  }, v.xhr);

                  if (!v.pick) {
                    v.pick = [];
                  }

                  if (!v.omit) {
                    v.omit = [];
                  }

                  return v;
                });
                _context17.next = 4;
                return _this6.$nextTick();

              case 4:
                tmp = _mapInstanceProperty(_context16 = _filterInstanceProperty(models).call(models, function (v) {
                  return !!v.extend && _this6._models[v.extend] != undefined;
                })).call(_context16, function (v) {
                  if (v.extendResolve) {
                    return v.extendResolve({}, _this6._models[v.extend], v);
                  } else {
                    return _Object$assign({}, _this6._models[v.extend], v);
                  }
                });

                (_this6$store$models = _this6.store.models).push.apply(_this6$store$models, _toConsumableArray(tmp));

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setModel: function setModel(model) {
      if (this._models[model]) {
        this.store.model = model;
      }
    },
    getModel: function getModel() {
      return this.store.model;
    },
    setData: function setData(data) {
      var _context18,
          _this7 = this;

      _forEachInstanceProperty(_context18 = this.store.fields).call(_context18, function (field) {
        // 只根据field.field获取数据
        // dataform key 根据_mode_data 注释设置
        _this7.$set(_this7.dataform, field.form_key, utils.getTypeDefault(field.type, utils.get(data, field.field, field.default), field.option));
      });
    },
    filterType: function filterType(type) {
      var _context19;

      return _includesInstanceProperty(_context19 = ['string', 'switch', 'date', 'select', 'param', 'file', 'number', 'code', 'map', 'tag', 'customer', 'pick']).call(_context19, type) ? type : 'string';
    },
    getNotifyEngine: function getNotifyEngine(type) {
      switch (type) {
        case 'message':
        default:
          {
            return this.$message;
          }
      }
    },
    transform: function transform(params) {
      var _this8 = this;

      var tmp = _objectSpread$2({}, params);

      if (_Object$keys(tmp).length > 0) {
        var _context20;

        _forEachInstanceProperty(_context20 = this.autoSet).call(_context20, function (s) {
          tmp[s.option.labelKey] = _this8.$refs[s.field].getLabel();
        });
      }

      return tmp;
    },
    request: function request() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var param, _context21, sub, _context22, ks, hkObj, response;

        return _regeneratorRuntime.wrap(function _callee3$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                param = _this9._current_model.xhr.method == 'get' ? {
                  params: _this9._model_data
                } : {
                  payload: _this9._model_data
                };
                _context23.prev = 1;
                sub = ''; // put not include
                // put include key to body

                if (_includesInstanceProperty(_context21 = ['delete', 'patch']).call(_context21, _this9._current_model.xhr.method)) {
                  ks = _filterInstanceProperty(_context22 = _this9.store.fields).call(_context22, function (field) {
                    return field.key;
                  });

                  if (ks.length > 0) {
                    sub = "/".concat(_this9.dataform[_this9._key]);
                  }
                }

                _this9.loading = true;
                hkObj = Http.getEngine(_this9._current_model.xhr.httpKey ? _this9._current_model.xhr.httpKey : _this9.httpKey);
                _context23.next = 8;
                return hkObj.engine[_this9._current_model.xhr.method](_this9._current_model.xhr.url + sub, _this9.paramTransform(_this9.transform(param)));

              case 8:
                response = _context23.sent;
                _this9.loading = false;

                if (utils.http.responseOk(response)) {
                  _this9.getNotifyEngine(_this9._current_model.xhr.notifyEngine).success(_this9._current_model.xhr.okMsg);

                  _this9.$emit('opearFinish', response);

                  if (_this9._current_model.xhr.autoClose) {
                    _this9.close();
                  }
                } else {
                  _this9.getNotifyEngine(_this9._current_model.xhr.notifyEngine).info(hkObj.errorMsgAdapter({
                    response: response
                  }));
                }

                return _context23.abrupt("return", response);

              case 14:
                _context23.prev = 14;
                _context23.t0 = _context23["catch"](1);

                if (_context23.t0.response && _context23.t0.response.status == 422) {
                  _this9.getNotifyEngine(_this9._current_model.xhr.notifyEngine).error(Http.errorMsgAdapter(_context23.t0));
                } else {
                  _this9.getNotifyEngine(_this9._current_model.xhr.notifyEngine).error(Http.errorMsgAdapter(_context23.t0));
                }

                _this9.loading = false;
                return _context23.abrupt("return", _context23.t0);

              case 19:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee3, null, [[1, 14]]);
      }))();
    },
    okHandle: function okHandle() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return _this10.$refs.ob.validate();

              case 2:
                if (_context24.sent) {
                  _context24.next = 5;
                  break;
                }

                _this10.getNotifyEngine(_this10._current_model.xhr.notifyEngine).info("信息检测未通过请检查!");

                return _context24.abrupt("return");

              case 5:
                if (!_this10._has_xhr) {
                  _context24.next = 17;
                  break;
                }

                if (!_this10._current_model.xhr.confirm) {
                  _context24.next = 10;
                  break;
                }

                _this10.$confirm({
                  title: _this10._current_model.xhr.confirmMsg ? _this10._current_model.xhr.confirmMsg : '确认?',
                  onOk: function onOk() {
                    _this10.request();
                  },
                  onCancel: function onCancel() {//todo
                  },
                  okText: '确定',
                  cancelText: '取消'
                });

                _context24.next = 15;
                break;

              case 10:
                _context24.t0 = _this10;
                _context24.next = 13;
                return _this10.request();

              case 13:
                _context24.t1 = _context24.sent;

                _context24.t0.$emit.call(_context24.t0, 'opearFinish', _context24.t1);

              case 15:
                _context24.next = 19;
                break;

              case 17:
                if (_this10._current_model.xhr.autoClose) {
                  _this10.close();
                }

                _this10.$emit('done', _this10._model_data);

              case 19:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee4);
      }))();
    },
    cancleHandle: function cancleHandle() {
      this.close();
    },
    close: function close() {
      this.$emit('update:show', false);
    },
    getEmpty: function getEmpty(type) {
      switch (type) {
        case 'tag':
          {
            return [];
          }

        case 'map':
          {
            return {};
          }

        case 'date':
          {
            return dayjs();
          }

        case 'switch':
          {
            return false;
          }

        case 'param':
          {
            return [];
          }

        case 'radio':
          {
            return '';
          }

        case 'check':
          {
            return [];
          }

        case 'file':
          {
            return [];
          }

        case 'string':
        default:
          {
            return '';
          }
      }
    },
    clean: function clean() {
      var _context25,
          _this11 = this;

      _forEachInstanceProperty(_context25 = this.store.fields).call(_context25, function (field) {
        _this11.$set(_this11.dataform, field.form_key, field.default);
      });
    }
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context11; _forEachInstanceProperty(_context11 = ownKeys$3(Object(source), true)).call(_context11, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context12; _forEachInstanceProperty(_context12 = ownKeys$3(Object(source))).call(_context12, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var formItem = {
  render: function render() {
    var _context, _context2;

    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticStyle: {
        "width": "100%",
        "text-align": "left"
      }
    }, [_vm.editing ? [_vm.type == 'string' ? _c(_vm._option.textarea ? 'a-textarea' : 'a-input', {
      ref: "input",
      tag: "component",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "size": "small",
        "value": _vm.value,
        "disabled": _vm.disabled
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'select' ? _c('tool-select', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      style: {
        minWidth: _vm._option.minSelectWidth
      },
      attrs: {
        "size": "small",
        "value": _vm.value,
        "options": _vm._option.selectOptions,
        "disabled": _vm.disabled,
        "filterOption": _vm._option.selectFilter
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'pick' ? _c('tool-pick', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      style: {
        minWidth: _vm._option.minpickWidth
      },
      attrs: {
        "size": "small",
        "value": _vm.value,
        "options": _vm._option.pickOptions,
        "disabled": _vm.disabled,
        "searchKey": _vm._option.searchKey
      },
      on: {
        "change": _vm.onChange
      }
    }, [_c('a-button', {
      attrs: {
        "size": "small"
      }
    }, [_vm._v(_vm._s(_vm._label))])], 1) : _vm.type == 'switch' ? _c('a-switch', {
      ref: "input",
      attrs: {
        "checked-children": _vm._option.checkText,
        "un-checked-children": _vm._option.unCheckText,
        "disabled": _vm.disabled,
        "size": "small",
        "checked": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'number' ? _c('a-input-number', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'code' ? _c('tool-code', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "language": _vm._option.language,
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'map' ? _c('tool-map', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'tag' ? _c('tool-tag', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'customer' ? _c(_vm._option.customer_form, {
      ref: "input",
      tag: "component",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "option": _vm._option,
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value,
        "item": _vm.item
      },
      on: {
        "change": _vm.onChange
      }
    }) : _c('span', [_vm._v("\n            " + _vm._s(_vm._label) + "\n        ")])] : [_vm._normal_view ? _c('span', [_vm._v(_vm._s(_vm._label))]) : _vm._switch_view ? _c('tw-emotion', {
      attrs: {
        "type": _vm.value ? 'info' : 'danger'
      }
    }, [_vm._v(_vm._s(_vm.value ? _vm._option.checkText : _vm._option.unCheckText))]) : _vm._param_view ? _c('span', [_c('ysz-list', {
      attrs: {
        "no-line": true
      }
    }, _vm._l(_vm.value, function (v) {
      return _c('ysz-list-item', {
        key: v.key,
        attrs: {
          "left-item-end": true
        }
      }, [_c('tw-emotion', {
        attrs: {
          "slot": "left"
        },
        slot: "left"
      }, [_vm._v(_vm._s(v.key))]), _vm._v(_vm._s(v.value) + "\n                ")], 1);
    }), 1)], 1) : _vm._file_view ? _c('span', [_c('ysz-list', {
      attrs: {
        "no-line": true
      }
    }, _vm._l(_vm.value, function (v, index) {
      return _c('ysz-list-item', {
        key: index,
        attrs: {
          "left-item-end": true
        }
      }, [_c('tw-emotion', [_vm._v(_vm._s(v))])], 1);
    }), 1)], 1) : _vm._map_view ? _c('span', [_c('tw-list-item2', {
      attrs: {
        "fit": "",
        "index": "",
        "indexBorder": "",
        "items": _mapInstanceProperty(_context = _Object$keys(_vm.value)).call(_context, function (item) {
          return {
            title: item,
            desc: _vm.value[item]
          };
        })
      }
    })], 1) : _vm._tag_view ? _c('span', [_c('tw-list-item1', {
      attrs: {
        "fit": "",
        "index": "",
        "indexBorder": "",
        "items": _mapInstanceProperty(_context2 = _vm.value).call(_context2, function (v) {
          return {
            title: v
          };
        })
      }
    })], 1) : _vm._e()]], 2);
  },
  staticRenderFns: [],
  name: 'toolFormItem',
  data: function data() {
    return {
      label: ""
    };
  },
  props: {
    type: {
      type: String,
      default: 'string',
      validator: function validator(value) {
        var _context3;

        return _includesInstanceProperty(_context3 = ['string', 'select', 'number', 'switch', 'code', 'map', 'tag', 'customer', 'pick']).call(_context3, value);
      }
    },
    value: {
      default: ''
    },
    option: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editing: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  // watch: {
  //     editing: {
  //         handler(){
  //             if(this.editing) {
  //                 this.$nextTick(() => {
  //                     this.$refs.input.focus()
  //                     switch(this.type) {
  //                         case 'string': {
  //                             this.$refs.input.$el.select()
  //                         }break;
  //                         case 'number': {
  //                             this.$refs.input.$el.querySelector('input').select()
  //                         }break
  //                     }
  //                 })
  //             }
  //         },
  //     }
  // },
  computed: {
    _option: function _option() {
      var option = _objectSpread$3({}, this.option);

      switch (this.type) {
        case 'code':
          {
            if (!option.language) {
              option.language = "javascript";
            }
          }
          break;

        case 'select':
          {
            var _context6;

            if (option.selectOptions === undefined || !_Array$isArray(option.selectOptions)) {
              option.selectOptions = utils.getType(option.selectOptions) == 'Function' ? option.selectOptions(this.item) : [];
            }

            if (option.autoFillEmpty === undefined) {
              option.autoFillEmpty = true;
            }

            if (option.autoFillEmpty) {
              var _context4;

              option.selectOptions = _concatInstanceProperty(_context4 = [{
                label: "请选择",
                value: ""
              }]).call(_context4, _toConsumableArray(option.selectOptions));
            }

            if (option.selectFilter === undefined || utils.getType(option.selectFilter) != 'Function') {
              option.selectFilter = null;
            }

            if (utils.getType(option.selectLabel) == 'Function') {
              var _context5;

              option.selectOptions = _mapInstanceProperty(_context5 = option.selectOptions).call(_context5, function (r) {
                var x = _objectSpread$3({}, r);

                x.__COL_TRUE_LABEL__ = x.label;
                x.label = option.selectLabel(x);
                return x;
              });
            }

            option.minSelectWidth = utils.getType(option.minSelectWidth) != 'String' || _indexOfInstanceProperty(_context6 = option.minSelectWidth).call(_context6, 'px') == -1 ? '120px' : option.minSelectWidth;
          }
          break;

        case 'pick':
          {
            if (option.autoFillEmpty === undefined) {
              option.autoFillEmpty = true;
            }

            if (option.pickOptions === undefined || !_Array$isArray(option.pickOptions)) {
              option.pickOptions = utils.getType(option.pickOptions) == 'Function' ? option.pickOptions(this.item) : [];
            }

            if (option.autoFillEmpty) {
              var _context7;

              option.pickOptions = _concatInstanceProperty(_context7 = [{
                label: "请选择",
                value: ""
              }]).call(_context7, _toConsumableArray(option.pickOptions));
            }

            if (!option.searchKey) {
              option.searchKey = [];
            }
          }
          break;

        case 'switch':
          {
            if (option.checkText === undefined) {
              option.checkText = '开';
            }

            if (option.unCheckText === undefined) {
              option.unCheckText = '关';
            }
          }
          break;
      }

      return option;
    },
    _normal_view: function _normal_view() {
      var _context8;

      return _includesInstanceProperty(_context8 = ['string', 'date', 'check', 'radio', 'number', 'select', 'pick']).call(_context8, this.type);
    },
    _map_view: function _map_view() {
      return this.type == 'map';
    },
    _switch_view: function _switch_view() {
      return this.type == 'switch';
    },
    _param_view: function _param_view() {
      return this.type == 'param';
    },
    _file_view: function _file_view() {
      return this.type == 'file';
    },
    _tag_view: function _tag_view() {
      return this.type == 'tag';
    },
    _customer_view: function _customer_view() {
      return this.type == 'customer';
    },
    _label: function _label() {
      var _this = this;

      switch (this.type) {
        case 'select':
          {
            var _context9;

            var option = _filterInstanceProperty(_context9 = this._option.selectOptions).call(_context9, function (r) {
              return r.value === _this.value;
            })[0];

            if (!option) {
              return "";
            }

            return this._option.selectLabel ? option.__COL_TRUE_LABEL__ ? option.__COL_TRUE_LABEL__ : '' : option.label;
          }

        case 'pick':
          {
            var _context10;

            var _option2 = _filterInstanceProperty(_context10 = this._option.pickOptions).call(_context10, function (r) {
              return r.value === _this.value;
            })[0];

            if (!_option2) {
              return "";
            }

            return _option2.label;
          }

        default:
          {
            return this.value;
          }
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus && this.$refs.input.focus();

      switch (this.type) {
        case 'string':
          {
            this.$refs.input.$el.select();
          }
          break;

        case 'number':
          {
            this.$refs.input.$el.querySelector('input').select();
          }
          break;
      }
    },
    hide: function hide() {
      this.$refs.input.hide && this.$refs.input.hide();
    },
    onChange: function onChange(value) {
      switch (this.type) {
        case 'string':
          {
            value = value.target.value;
          }
          break;

        case 'pick':
          {
            value = value.value;
          }
          break;
      }

      this.$emit('change', value);
    },
    getLabel: function getLabel() {
      return this._label;
    }
  }
};

var state = {
  name: "toolState",
  props: {
    promise: {
      type: _Promise
    },
    message: {
      type: Function,
      default: function _default(r) {
        return "";
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("ysz-list-item", [this.end ? null : h("a-spin", {
      "slot": "left"
    }), this.end ? this._msg : ""]);
  },
  computed: {
    _msg: function _msg() {
      return this.ok ? "操作成功" : "操作失败" + (this.msg ? ", ".concat(this.msg) : "");
    }
  },
  created: function created() {
    var _this = this;

    this.promise.then(function (r) {
      _this.result = r;
      _this.ok = true;
    }).catch(function (r) {
      _this.result = r;
      _this.ok = false;
      _this.msg = _this.message(r);
    }).finally(function () {
      _this.end = true;

      _this.$emit("end", {
        ok: _this.ok,
        result: _this.result
      });
    });
  },
  data: function data() {
    return {
      ok: false,
      end: false,
      result: {},
      msg: ""
    };
  }
};

var pick = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-popover', {
      attrs: {
        "visible": _vm.visible,
        "trigger": "click",
        "auto-adjust-overflow": true
      },
      on: {
        "update:visible": function updateVisible($event) {
          _vm.visible = $event;
        }
      },
      model: {
        value: _vm.visible,
        callback: function callback($$v) {
          _vm.visible = $$v;
        },
        expression: "visible"
      }
    }, [_c('ysz-list-item', {
      attrs: {
        "slot": "title",
        "left": true
      },
      slot: "title"
    }, [_c('span', {
      attrs: {
        "slot": "left"
      },
      slot: "left"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('a-button', {
      staticStyle: {
        "margin-left": "5px"
      },
      on: {
        "click": _vm.stop
      }
    }, [_vm._v(" 关闭")])], 1), _vm._v(" "), _c('template', {
      slot: "content"
    }, [_c('ysz-list-item', {
      attrs: {
        "left": true
      }
    }, [_c('ysz-list-item', {
      attrs: {
        "slot": "left",
        "no-p": true
      },
      slot: "left"
    }, [_c('span', {
      staticStyle: {
        "padding-right": "5px"
      },
      attrs: {
        "slot": "left"
      },
      slot: "left"
    }, [_vm._v("过滤: ")]), _vm._v(" "), _c('a-input', {
      ref: "searchInput",
      attrs: {
        "size": "small",
        "allowClear": true
      },
      on: {
        "pressEnter": _vm.onSearch
      },
      model: {
        value: _vm.search_value,
        callback: function callback($$v) {
          _vm.search_value = $$v;
        },
        expression: "search_value"
      }
    })], 1), _vm._v(" "), _c('a-button', {
      staticStyle: {
        "margin-left": "5px"
      },
      attrs: {
        "size": "small",
        "type": "primary"
      },
      on: {
        "click": _vm.onSearch
      }
    }, [_vm._v(" 查询")]), _vm._v(" "), _c('a-button', {
      staticStyle: {
        "margin-left": "5px"
      },
      attrs: {
        "size": "small"
      },
      on: {
        "click": function click() {
          return _vm.clear();
        }
      }
    }, [_vm._v(" 清空")])], 1), _vm._v(" "), _c('a-divider', {
      staticStyle: {
        "margin": "12px 0 9px"
      },
      attrs: {
        "size": "small"
      }
    }), _vm._v(" "), _c('ysz-list-item', {
      attrs: {
        "start": true
      }
    }, [_c('a-pagination', {
      staticClass: "pc",
      attrs: {
        "slot": "left",
        "size": "small",
        "hideOnSinglePage": true,
        "pageSize": _vm.pageSize,
        "total": _vm._total,
        "show-less-items": ""
      },
      slot: "left",
      model: {
        value: _vm.current,
        callback: function callback($$v) {
          _vm.current = $$v;
        },
        expression: "current"
      }
    }), _vm._v(" "), _c('ysz-list', {
      attrs: {
        "row": true,
        "no-line": false,
        "group": _vm.group
      }
    }, _vm._l(_vm._views, function (item) {
      return _c('a-tag', {
        key: item.value,
        attrs: {
          "color": item.value === _vm.pick ? '#f50' : null
        },
        on: {
          "click": function click() {
            return _vm.onClick(item);
          }
        }
      }, [_vm._v("\n                    " + _vm._s(item.label) + "\n                ")]);
    }), 1)], 1)], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "cursor": "pointer",
        "display": "flex"
      }
    }, [_vm._t("default")], 2)], 2);
  },
  staticRenderFns: [],
  name: 'tool-pick',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    options: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    searchKey: {
      default: function _default() {
        return ['label'];
      },
      type: Array
    },
    group: {
      default: 4,
      type: Number
    },
    value: '',
    emptyValue: _defineProperty({
      default: Function
    }, "default", function _default() {
      return function () {
        return {
          label: "请选择",
          value: ""
        };
      };
    })
  },
  watch: {
    value: function value(val) {
      this.clear(val);
    }
  },
  computed: {
    _views: function _views() {
      var _context;

      var start = (this.current - 1) * this.pageSize;
      var end = start + this.pageSize;
      end = end > this._total ? this._total : end;
      return _sliceInstanceProperty(_context = this._items).call(_context, start, end);
    },
    _items: function _items() {
      var _context2,
          _this = this;

      return this.search ? _filterInstanceProperty(_context2 = this._options).call(_context2, function (v) {
        var _context3;

        return _indexOfInstanceProperty(_context3 = v.__SEARCH__).call(_context3, _this.search) > -1;
      }) : this._options;
    },
    _options: function _options() {
      var _context4,
          _this2 = this;

      return _mapInstanceProperty(_context4 = this.options).call(_context4, function (r) {
        var _context5, _context6;

        r.__SEARCH__ = _mapInstanceProperty(_context5 = _filterInstanceProperty(_context6 = _Object$keys(r)).call(_context6, function (k) {
          var _context7;

          return _includesInstanceProperty(_context7 = _this2.searchKey).call(_context7, k);
        })).call(_context5, function (k) {
          return r[k];
        }).join('_');
        return r;
      });
    },
    _total: function _total() {
      return this._items.length;
    }
  },
  data: function data() {
    var pageSize = this.$props.group * 12;
    return {
      search: '',
      visible: false,
      pick: "",
      search_value: '',
      current: 1,
      pageSize: pageSize
    };
  },
  created: function created() {
    this.clear(this.$props.value);
  },
  methods: {
    onSearch: function onSearch() {
      this.current = 1;
      this.search = this.search_value;
    },
    onClick: function onClick(item) {
      this.$emit('change', item);
      this.visible = false;
      this.pick = item.value;
    },
    setValue: function setValue(value) {
      var _context8;

      this.pick = value;

      var tmp = _filterInstanceProperty(_context8 = this._options).call(_context8, function (c) {
        return c.value === value;
      })[0];

      this.$emit('change', tmp ? tmp : this.emptyValue());
    },
    clear: function clear() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.search = '';
      this.search_value = '';
      this.current = 1;
      this.setValue(value);
    },
    stop: function stop() {
      this.visible = false;
    },
    focus: function focus() {
      var _this3 = this;

      this.visible = true;
      this.$nextTick(function () {
        _this3.$refs.searchInput.focus();
      });
    },
    hide: function hide() {
      this.visible = false;
    }
  }
};

function ownKeys$4(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys$4(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys$4(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var select = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-select', {
      ref: "core",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "dropdownMatchSelectWidth": "",
        "disabled": _vm.disabled,
        "autoFocus": _vm.autoFocus,
        "show-search": !!_vm.filterOption,
        "filterOption": _vm.filterOption,
        "labelInValue": _vm.labelInValue,
        "size": "small"
      },
      on: {
        "change": _vm.onChange
      },
      model: {
        value: _vm.v,
        callback: function callback($$v) {
          _vm.v = $$v;
        },
        expression: "v"
      }
    }, _vm._l(_vm.options, function (option) {
      return _c('a-select-option', {
        key: option.value,
        attrs: {
          "value": option.value
        }
      }, [_vm._v(_vm._s(option.label))]);
    }), 1);
  },
  staticRenderFns: [],
  name: 'toolSelect',
  props: {
    value: {
      default: '',
      type: [Number, String]
    },
    autoFocus: {
      default: false,
      type: Boolean
    },
    labelInValue: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    options: {
      default: function _default() {
        return [];
      },
      type: Array
    },
    filterOption: {
      type: [Function],
      default: function _default() {
        return null;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      handler: function handler() {
        this.v = this.value;
      },
      deep: true
    }
  },
  data: function data() {
    var value = utils.getType(this.$props.value) === 'Undefined' ? "" : this.$props.value;
    value !== this.$props.value && this.$emit('change', value);
    return {
      v: value
    };
  },
  methods: {
    onChange: function onChange(v) {
      this.$emit('change', this.labelInValue ? _objectSpread$4({
        value: v.key
      }, v) : this.v);
    },
    focus: function focus() {
      this.$refs.core.focus();

      if (this.filterOption) {
        this.$refs.core.$children[0].setOpenState(true);
      }
    }
  }
};

var code = {
  name: "toolCode",
  props: {
    language: {
      type: String,
      default: "javascript"
    },
    value: {
      type: String,
      default: ""
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "ref": "code",
      "style": "text-align:left"
    });
  },
  watch: {
    value: function value(val) {
      if (this.handler) {
        if (val != this.handler.getValue()) {
          var scrollInfo = this.handler.getScrollInfo();
          this.handler.setValue(val);
          this.handler.scrollTo(scrollInfo.left, scrollInfo.top);
        }
      }
    }
  },
  data: function data() {
    return {
      handler: null
    };
  },
  methods: {
    focus: function focus() {
      this.handler.focus();
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.handler = CodeMirror(_this.$refs.code, {
                lineNumbers: true,
                theme: "seti",
                mode: _this.language,
                matchBrackets: true,
                smartIndent: false,
                indentUnit: 4
              });

              _this.handler.setValue(_this.value);

              _this.handler.setSize("100%", "auto");

              _this.handler.on("change", function (r) {
                return _this.$nextTick(function () {
                  return _this.$emit("change", r.getValue());
                });
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};

var map = {
  name: "tool-map",
  render: function render() {
    var _context,
        _context2,
        _this = this;

    var h = arguments[0];
    return h("tw-list-item2", {
      "attrs": {
        "fit": true,
        "index": true,
        "indexStart": true,
        "indexBorder": true,
        "items": _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_mapInstanceProperty(_context2 = _Object$keys(this.dataset)).call(_context2, function (item) {
          return {
            title: item,
            desc: h("a-input", {
              "attrs": {
                "size": _this.size,
                "disabled": _this.disabled,
                "value": _this.dataset[item]
              },
              "on": {
                "change": function change(e) {
                  return _this.onChange(item, e.target.value);
                }
              }
            })
          };
        })), [{
          title: h("a-button", {
            "attrs": {
              "size": this.size,
              "disabled": this.disabled
            },
            "on": {
              "click": this.onNew
            }
          }, ["\u65B0\u589E"])
        }])
      }
    });
  },
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "small"
    }
  },
  methods: {
    focus: function focus() {},
    onChange: function onChange(k, v) {
      this.dataset[k] = v;
      this.$emit("change", this.dataset);
    },
    onNew: function onNew() {
      var _this2 = this;

      var h = this.$createElement;
      this.newKey = '';
      this.$confirm({
        title: '请键入新key',
        content: function content(h) {
          return h("a-input", {
            "attrs": {
              "size": _this2.size,
              "disabled": _this2.disabled
            },
            "on": {
              "change": function change(e) {
                return _this2.newKey = e.target.value;
              }
            }
          });
        },
        onOk: function onOk() {
          if (!_this2.newKey || _this2.dataset[_this2.newKey] !== undefined) {
            _this2.$message.info('key存在或为空');

            return;
          }

          _this2.$set(_this2.dataset, _this2.newKey, '');
        },
        onCancel: function onCancel() {}
      });
    }
  },
  data: function data() {
    return {
      newKey: '',
      dataset: _Object$assign({}, this.value)
    };
  }
};

var tag = {
  name: "tool-tag",
  render: function render() {
    var _context,
        _context2,
        _this = this;

    var h = arguments[0];
    return h("tw-list-item1", {
      "attrs": {
        "fit": true,
        "index": true,
        "indexBorder": true,
        "items": _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_mapInstanceProperty(_context2 = this.dataset).call(_context2, function (item) {
          return {
            title: h("a-tag", {
              "attrs": {
                "color": "#108ee9",
                "closable": true
              },
              "on": {
                "close": function close(e) {
                  return _this.onRemove(item);
                }
              }
            }, [item])
          };
        })), [{
          title: h("a-button", {
            "attrs": {
              "size": this.size,
              "disabled": this.disabled
            },
            "on": {
              "click": this.onNew
            }
          }, ["\u65B0\u589E"])
        }])
      }
    });
  },
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "small"
    }
  },
  methods: {
    focus: function focus() {},
    onRemove: function onRemove(v) {
      var _context3;

      this.dataset = _filterInstanceProperty(_context3 = this.dataset).call(_context3, function (val) {
        return val != v;
      });
      this.onChange();
    },
    onChange: function onChange() {
      this.$emit("change", this.dataset);
    },
    onNew: function onNew() {
      var _this2 = this;

      var h = this.$createElement;
      this.newTag = '';
      this.$confirm({
        title: '请键入新标签',
        content: function content(h) {
          return h("a-input", {
            "attrs": {
              "size": _this2.size,
              "disabled": _this2.disabled
            },
            "on": {
              "change": function change(e) {
                return _this2.newTag = e.target.value;
              }
            }
          });
        },
        onOk: function onOk() {
          var _context4;

          if (!_this2.newTag || _filterInstanceProperty(_context4 = _this2.dataset).call(_context4, function (val) {
            return val == _this2.newTag;
          }).length > 0) {
            _this2.$message.info('标签存在或为空');

            return;
          }

          _this2.dataset.push(_this2.newTag);

          _this2.onChange();
        },
        onCancel: function onCancel() {}
      });
    }
  },
  data: function data() {
    return {
      newTag: '',
      dataset: _Object$assign([], this.value)
    };
  }
};

var components = [curd, formItem, select, state, form, code, map, tag, pick];

var ant = {
  install: function install(vue) {
    vue.use(_Space);
    vue.use(_Button);
    vue.use(_ConfigProvider);
    vue.use(_Input);
    vue.use(_InputNumber);
    vue.use(_Spin);
    vue.use(_Table);
    vue.use(_Modal);
    vue.use(_Select);
    vue.use(_Icon);
    vue.use(_DatePicker);
    vue.use(_Switch);
    vue.use(_Pagination);
    vue.use(_Badge);
    vue.use(function (Vue) {
      Vue.prototype.$message = _message;
      Vue.prototype.$notification = _notification;
      Vue.prototype.$info = _Modal.info;
      Vue.prototype.$success = _Modal.success;
      Vue.prototype.$error = _Modal.error;
      Vue.prototype.$warning = _Modal.warning;
      Vue.prototype.$warn = _Modal.warn;
      Vue.prototype.$confirm = _Modal.confirm;
    });
  }
};

var newState = function newState(p, _ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$response = _ref.response,
      response = _ref$response === void 0 ? null : _ref$response,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? null : _ref$message,
      _ref$failOnly = _ref.failOnly,
      failOnly = _ref$failOnly === void 0 ? false : _ref$failOnly;
  var key = utils.random("Notification-");
  title = title ? "".concat(title, " - ") : "";
  message = message ? message : function (r) {
    return "";
  };

  _notification.info({
    message: "".concat(title, "\u63D0\u793A"),
    duration: 0,
    key: key,
    description: function description(h) {
      return h("tool-state", {
        "attrs": {
          "message": message,
          "promise": p
        },
        "on": {
          "end": function end(r) {
            response && response(r);

            if (failOnly && r.ok) {
              _notification.close(key);

              return;
            }

            _setTimeout(function () {
              return _notification.close(key);
            }, 4500);
          }
        }
      });
    }
  });
};

var newFailState = function newFailState(p, _ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "" : _ref2$title,
      _ref2$response = _ref2.response,
      response = _ref2$response === void 0 ? null : _ref2$response,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? null : _ref2$message;
  newState(p, {
    title: title,
    response: response,
    message: message,
    failOnly: true
  });
};

var state$1 = {
  newState: newState,
  newFailState: newFailState
};

var install = function install(vue) {
  ant.install(vue);
  mvyu.install(vue);

  _mapInstanceProperty(components).call(components, function (component) {
    vue.component(component.name, component);
  });

  vue.component('ValidationObserver', ValidationObserver);
  vue.component('ValidationProvider', ValidationProvider);
  vue.prototype.$state = state$1;
};

if (window.Vue) {
  Vue.use(install);
}

var index = {
  install: install,
  http: Http
};

export default index;
