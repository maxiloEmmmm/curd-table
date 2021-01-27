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
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import _someInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/some';
import dayjs from 'dayjs';
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
import mvyu from 'maxilo-vue-ysz-ui/ysz-ui';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e);}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h);}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments);}};var helper=mergeJsxProps;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var moment = createCommonjsModule(function (module, exports) {
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged and will be removed in an upcoming major release. Please refer to ' +
            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.27.0';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
});

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context8; _forEachInstanceProperty(_context8 = ownKeys(Object(source), true)).call(_context8, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context9; _forEachInstanceProperty(_context9 = ownKeys(Object(source))).call(_context9, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var getTypeDefault = function getTypeDefault(type, _d, option) {
  switch (type) {
    case 'datetimepick':
      {
        return _d ? moment(_d) : moment();
      }

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
        return _d === undefined ? moment() : moment(_d);
      }

    case 'switch':
      {
        return !!_d;
      }

    case 'radio':
      {
        return _d;
      }

    case 'tag':
    case 'checkbox':
      {
        return _d ? _Array$isArray(_d) ? _d : [_d] : [];
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
        return _d ? number(_d) : null;
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
  var _context6;

  var tmp = {};
  getType(url) == "String" && _forEachInstanceProperty(_context6 = url.replace(/^.*?\?/, '').split('&')).call(_context6, function (v) {
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
    var _context7;

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

    _forEachInstanceProperty(_context7 = componentOptions.children || []).call(_context7, function (child) {
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
  getArrayFunction: getArrayFunction,
  dispatchEvent: function dispatchEvent(en) {
    var e = document.createEvent('Event');
    e.initEvent(en, true, true);
    window.dispatchEvent(e);
  }
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

var config = {
  responsive: {
    cb: []
  }
};
var config$1 = {
  addResponsiveCallback: function addResponsiveCallback(cb) {
    config.responsive.cb.push(cb);
    utils.dispatchEvent("resize");
  },
  dispatch: function dispatch(t) {
    var _context;

    _forEachInstanceProperty(_context = config.responsive.cb).call(_context, function (c) {
      return c(t);
    });
  }
};

function ownKeys$1(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context73; _forEachInstanceProperty(_context73 = ownKeys$1(Object(source), true)).call(_context73, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context74; _forEachInstanceProperty(_context74 = ownKeys$1(Object(source))).call(_context74, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
        "pageSizeKey": this.pageSizeKey,
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
      "scopedSlots": this.expandedRow ? {
        expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
          var _context3;

          return h("ysz-list", [_mapInstanceProperty(_context3 = _this._expanded_columns).call(_context3, function (col) {
            return h("ysz-list-item", [h("span", {
              "style": "font-size: 1rem; font-weight: 400;",
              "slot": "left"
            }, [col.title]), col.customRender(record[col.field], record, index).children]);
          })]);
        }
      } : {},
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
    useCard: {
      type: Boolean,
      default: false
    },
    pageSizeKey: {
      type: String,
      default: "page_suze"
    },
    layout: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    expandedRow: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _this2 = this;

    this.$nextTick(function () {
      var _context4;

      var userdata = _Array$isArray(_this2.$props.dataSource) ? _this2.$props.dataSource : [];
      _this2.store.tableData = _concatInstanceProperty(_context4 = []).call(_context4, _toConsumableArray(_this2.store.tableData), _toConsumableArray(_mapInstanceProperty(userdata).call(userdata, _this2.transformData)));
      _this2.store.page_count = _this2.store.tableData.length;
    });
    return {
      card: false,
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
      var _context5;

      if (this.fetchUrl) {
        return this.store.tableData;
      }

      var s = (this.store.page - 1) * this.store.page_size;
      return _sliceInstanceProperty(_context5 = this.store.tableData).call(_context5, s, s + this.store.page_size);
    },
    _has_filter: function _has_filter() {
      return this._filter.length > 0;
    },
    _filter: function _filter() {
      var _context6, _context7;

      return _mapInstanceProperty(_context6 = _filterInstanceProperty(_context7 = this._format_columns).call(_context7, function (f) {
        return _filterInstanceProperty(f);
      })).call(_context6, function (f) {
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
      var _context8,
          _context9,
          _this3 = this,
          _context12;

      if (!this.fetchUrl) {
        return '';
      }

      var urlInfo = this.fetchUrl.split("?");
      var path = urlInfo[0],
          query = urlInfo[1];
      var querys = utils.parseURL(query);

      var filters = _forEachInstanceProperty(_context8 = _filterInstanceProperty(_context9 = this._filter).call(_context9, function (f) {
        var tmp = _filterInstanceProperty(_this3.store)[f.filterKey];

        if (tmp === undefined) return false;

        if (f.filterWithoutEmpty) {
          return !!tmp;
        }

        return true;
      })).call(_context8, function (f) {
        querys[f.filterKey] = encodeURIComponent(_filterInstanceProperty(_this3.store)[f.filterKey]);
      });

      if (_Object$keys(_sortInstanceProperty(this.store)).length > 0) {
        var _context10;

        querys.sort = _mapInstanceProperty(_context10 = _Object$keys(_sortInstanceProperty(this.store))).call(_context10, function (f) {
          var _context11;

          return _concatInstanceProperty(_context11 = "".concat(f, ",")).call(_context11, _sortInstanceProperty(_this3.store)[f]);
        }).join('|');
      }

      _Object$assign(querys, _objectSpread$1({}, this.queryParams));

      return path + "?" + _mapInstanceProperty(_context12 = _Object$keys(querys)).call(_context12, function (query) {
        var _context13;

        return _concatInstanceProperty(_context13 = "".concat(query, "=")).call(_context13, querys[query]);
      }).join("&");
    },
    pagination: function pagination() {
      return this.preview ? false : {
        current: this.store.page,
        total: this.store.page_count,
        pageSize: this.store.page_size,
        hideOnSinglePage: false,
        showTotal: function showTotal(total, range) {
          var _context14, _context15;

          return _concatInstanceProperty(_context14 = _concatInstanceProperty(_context15 = "\u7B2C".concat(range[0], "-")).call(_context15, range[1], "\u6761 \u5171")).call(_context14, total, "\u6761\u8BB0\u5F55");
        },
        showSizeChanger: true
      };
    },
    _dispatchTop: function _dispatchTop() {
      var _context16;

      return _filterInstanceProperty(_context16 = this._models).call(_context16, function (v) {
        return v.dispatchArea == 'topBar';
      });
    },
    _dispatchRow: function _dispatchRow() {
      var _context17, _context18;

      var row = _mapInstanceProperty(_context17 = this._modelBaseAction).call(_context17, function (v) {
        v.type = v.type ? v.type : 'action';
        return v;
      });

      row.push.apply(row, _toConsumableArray(_mapInstanceProperty(_context18 = this.store.relations).call(_context18, function (v) {
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
      var _context19;

      return _filterInstanceProperty(_context19 = this._format_models).call(_context19, function (v) {
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
      var _context20,
          _this4 = this;

      return _mapInstanceProperty(_context20 = this.columns).call(_context20, function (c) {
        c.option = c.option ? c.option : {};
        c.edit = _Object$assign({
          enable: false
        }, c.edit);
        c.dataIndex = c.field;
        c.expanded = c.expanded || false;
        c.customRender = c.customRender ? c.customRender : function (text, item, index, a) {
          var _context21;

          var h = _this4.$createElement;
          return {
            children: h('tool-form-item', {
              props: {
                // editing: item[this.store.colEditKey][c.field], 
                editing: !_this4.preview && c.edit.enable,
                value: utils.get(item, c.field),
                option: c.option,
                type: c.type,
                item: item
              },
              ref: _concatInstanceProperty(_context21 = "edit-ref-".concat(index, "-")).call(_context21, c.field),
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
      var _context22;

      return _filterInstanceProperty(_context22 = this._format_columns).call(_context22, function (f) {
        return !!f.field;
      });
    },
    _expanded_columns: function _expanded_columns() {
      var _context23;

      return this.expandedRow ? _filterInstanceProperty(_context23 = this._format_columns).call(_context23, function (col) {
        return !!col.expanded;
      }) : [];
    },
    _columns: function _columns() {
      var _context24,
          _this5 = this;

      var h = this.$createElement;

      var c = _toConsumableArray(_filterInstanceProperty(_context24 = this._format_columns).call(_context24, function (c) {
        return !c.hidden && (_this5.expandedRow ? !c.expanded : true);
      }));

      if (this._hasAction) {
        c.push({
          title: '操作',
          align: 'center',
          customRender: function customRender(text, item, index) {
            var _context25;

            return h("a-space", [_mapInstanceProperty(_context25 = _this5._dispatchRow).call(_context25, function (row, _i) {
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

      if (this.card) {
        return [{
          title: '数据',
          align: 'center',
          customRender: function customRender(text, item, index) {
            return h("ysz-list", [_mapInstanceProperty(c).call(c, function (col) {
              return h("ysz-list-item", [h("span", {
                "style": "font-size: 1rem; font-weight: 400;",
                "slot": "left"
              }, [col.title]), col.customRender(text, item, index).children]);
            })]);
          }
        }];
      }

      return c;
    },
    _columns_key: function _columns_key() {
      return utils.keyby(this._format_columns, 'field');
    },
    _format_models: function _format_models() {
      var _context26,
          _this6 = this;

      return _mapInstanceProperty(_context26 = this.models).call(_context26, function (f) {
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
        var _context27, _context28, _context29, _context30;

        m.push({
          title: this.store.editModeTitle,
          key: this.store.editModelKey,
          show: _mapInstanceProperty(_context27 = _filterInstanceProperty(_context28 = this._format_columns).call(_context28, function (c) {
            return c.edit.enable;
          })).call(_context27, function (c) {
            return c.field;
          }),
          disabled: _mapInstanceProperty(_context29 = _filterInstanceProperty(_context30 = this._format_columns).call(_context30, function (c) {
            return c.disabled;
          })).call(_context29, function (c) {
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
      var _context31;

      return _filterInstanceProperty(_context31 = this._format_columns).call(_context31, function (c) {
        return c.type == 'select' && c.option.labelKey;
      });
    }
  },
  created: function created() {
    var _this7 = this;

    config$1.addResponsiveCallback(function (t) {
      _this7.card = _this7.useCard ? t == "xs" : false;
    });
  },
  mounted: function mounted() {
    var _this8 = this;

    document.addEventListener('keyup', function (e) {
      switch (e.code) {
        case 'Tab':
          {
            // if(this.store.edit.ing) {
            if (!e.shiftKey) {
              _this8.editNextCell();
            } else {
              _this8.editPrevCell();
            } // }

          }
          break;

        case 'NumpadEnter':
        case 'Enter':
          {
            // if(this.store.edit.ing) {
            _this8.editNextCell(); // }

          }
          break;

        case 'Escape':
          {
            // if(this.store.edit.ing) {
            _this8.closeEdit(_this8.store.edit.field, _this8.store.edit.key); // }

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
      var _context32,
          _this9 = this,
          _context33;

      var fieldIndex = _findIndexInstanceProperty(_context32 = this._format_columns).call(_context32, function (f) {
        return f.field == _this9.store.edit.field;
      });

      var nfi = _findIndexInstanceProperty(_context33 = this._format_columns).call(_context33, function (f, i) {
        return i > fieldIndex && f.edit.enable;
      });

      var cdata = _toConsumableArray(this.store.tableData);

      if (nfi != -1) {
        this.entryCell(this._format_columns[nfi].field, this.store.edit.key);
      } else {
        var _context34;

        var index = _findIndexInstanceProperty(_context34 = this.store.tableData).call(_context34, function (r) {
          return r[_this9.store.rowKey] == _this9.store.edit.key;
        });

        index = index + 1;

        if (index > this.store.tableData.length - 1) {
          this.apiNewRow();
          this.$nextTick(function () {
            var _context35;

            var firstEditField = _filterInstanceProperty(_context35 = _this9._format_columns).call(_context35, function (f) {
              return f.edit.enable && f.field;
            })[0];

            _this9.entryCell(firstEditField.field, _this9.getRowKey(_this9.store.tableData[index]));
          });
        } else {
          var _context36;

          var firstEditField = _filterInstanceProperty(_context36 = this._format_columns).call(_context36, function (f) {
            return f.edit.enable && f.field;
          })[0];

          this.entryCell(firstEditField.field, this.getRowKey(this.store.tableData[index]));
        }
      }
    },
    editPrevCell: function editPrevCell() {
      var _context37,
          _this10 = this;

      var fieldIndex = _findIndexInstanceProperty(_context37 = this._format_columns).call(_context37, function (f) {
        return f.field == _this10.store.edit.field;
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
        var _context38;

        var index = _findIndexInstanceProperty(_context38 = this.store.tableData).call(_context38, function (r) {
          return r[_this10.store.rowKey] == _this10.store.edit.key;
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
      var _this11 = this,
          _context39,
          _context40;

      if (this.store.edit.ing) {
        this.closeEdit(this.store.edit.field, this.store.edit.key);
      }

      var cdata = _toConsumableArray(this.store.tableData);

      this.store.edit.field = field;
      this.store.edit.key = key;

      var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this11.store.rowKey];
      })[0];

      var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this11.store.rowKey];
      });

      index = index % this.store.page_size;
      target[this.store.colEditKey][field] = this.store.edit.ing = true;

      this.$refs[_concatInstanceProperty(_context39 = "edit-ref-".concat(index, "-")).call(_context39, field)].focus();

      this.store.tableData = cdata;
      this.setEditTmpValue(_filterInstanceProperty(_context40 = this.store.tableData).call(_context40, function (item) {
        return key === item[_this11.store.rowKey];
      })[0][field]);
    },
    saveCell: function saveCell(field, key, value) {
      var _this12 = this,
          _context41;

      // if(value === this.store.tmpeditcellvalue) {
      //     return
      // }
      var cdata = _toConsumableArray(this.store.tableData);

      var item = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === _this12.getRowKey(item);
      })[0];

      item[field] = value; //old Object.assign(item, this.editFilter(key, item))

      var fi = _filterInstanceProperty(_context41 = this._format_columns).call(_context41, function (r) {
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
      var _this13 = this,
          _context42;

      var cdata = _toConsumableArray(this.store.tableData);

      this.store.edit.field = '';
      this.store.edit.key = '';

      var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this13.store.rowKey];
      })[0];

      target[this.store.colEditKey][field] = this.store.edit.ing = false;

      var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this13.store.rowKey];
      });

      index = index % this.store.page_size;

      this.$refs[_concatInstanceProperty(_context42 = "edit-ref-".concat(index, "-")).call(_context42, field)].hide();

      this.store.tableData = cdata;
    },
    refresh: function refresh() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _this14.store.tableData = [];
                _this14.store.page_count = 0;
                _context43.next = 4;
                return _this14.$nextTick();

              case 4:
                _this14.$refs.datawrap.fetch();

              case 5:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee);
      }))();
    },
    opearFinish: function opearFinish() {
      this.refresh();
    },
    pageRender: function pageRender(page, sorter, filter) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                if (sorter.column) {
                  _this15.$set(_sortInstanceProperty(_this15.store), sorter.column.field, sorter.order);
                } else {
                  _this15.store.sort = {};
                }

                _this15.store.page = page.current;
                _this15.store.page_size = page.pageSize;
                _context44.next = 5;
                return _this15.$nextTick();

              case 5:
                _this15.$refs.datawrap.fetch();

              case 6:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee2);
      }))();
    },
    render: function render(response) {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var _context45;

        return _regeneratorRuntime.wrap(function _callee3$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                if (!utils.http.responseOk(response)) {
                  _context46.next = 9;
                  break;
                }

                _context46.next = 3;
                return _this16.fetchTransform(response);

              case 3:
                response = _context46.sent;
                _this16.store.tableData = _mapInstanceProperty(_context45 = response.data.data).call(_context45, _this16.transformData);
                _this16.store.page_count = response.data.total;

                _this16.change(_this16.store.tableData);

                _context46.next = 10;
                break;

              case 9:
                _this16.$message.warn(response.data.msg);

              case 10:
              case "end":
                return _context46.stop();
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
      var _this17 = this;

      var cdata = _toConsumableArray(this.store.tableData);

      return _filterInstanceProperty(cdata).call(cdata, function (item) {
        return key === item[_this17.store.rowKey];
      })[0];
    },
    onRowAction: function onRowAction(action, item, index) {
      switch (action.type) {
        case 'relation':
          {
            var _context47, _context48;

            this.$router.push({
              path: _concatInstanceProperty(_context47 = _concatInstanceProperty(_context48 = "".concat(this.$route.fullPath, "/")).call(_context48, item[action.primaryKey], "/")).call(_context47, action.key)
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
      var _context49,
          _this18 = this;

      var tmp = _objectSpread$1({}, item);

      var cdata = _toConsumableArray(this.store.tableData);

      _forEachInstanceProperty(_context49 = this._auto_set).call(_context49, function (s) {
        var _context50;

        var index = _findIndexInstanceProperty(cdata).call(cdata, function (item) {
          return key === _this18.getRowKey(item);
        });

        tmp[s.option.labelKey] = _this18.$refs[_concatInstanceProperty(_context50 = "edit-ref-".concat(index, "-")).call(_context50, s.field)].getLabel();
      });

      return tmp;
    },
    editFilter: function editFilter(key, data) {
      var item = _objectSpread$1({}, data);

      _Object$assign(item, this.actionEditFilter(item));

      return item;
    },
    opearDone: function opearDone(data) {
      var _this19 = this;

      var model = this.$refs.ywSettingBase.getModel();

      if (this.actionEditRow && model == "edit-row") {
        var _context51;

        _Object$assign(data, this.editFilter(this.store.editKey, data));

        var cdata = _toConsumableArray(this.store.tableData);

        var target = _filterInstanceProperty(cdata).call(cdata, function (item) {
          return _this19.store.editKey === _this19.getRowKey(item);
        })[0];

        _forEachInstanceProperty(_context51 = _Object$keys(data)).call(_context51, function (k) {
          target[k] = data[k];
        });

        this.store.tableData = cdata;
        this.change(this.store.tableData);
      } else {
        this.$emit(model, data);
      }
    },
    apiDeleteRow: function apiDeleteRow(key) {
      var _context52,
          _this20 = this,
          _context53;

      var index = _findIndexInstanceProperty(_context52 = this.store.tableData).call(_context52, function (r) {
        return _this20.getRowKey(r) === key;
      });

      _spliceInstanceProperty(_context53 = this.store.tableData).call(_context53, index, 1);

      this.change(this.store.tableData);
    },
    apiNewRow: function apiNewRow() {
      var _context54,
          _context55,
          _this21 = this;

      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var cs = {};

      _forEachInstanceProperty(_context54 = this._columns).call(_context54, function (f) {
        f.type && (cs[f.field] = utils.getTypeDefault(f.type, f.default, f.option || {}));
      });

      var index = _findIndexInstanceProperty(_context55 = this.store.tableData).call(_context55, function (r) {
        return _this21.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      for (var k = 0; k < num; k++) {
        var _context56;

        _spliceInstanceProperty(_context56 = this.store.tableData).call(_context56, index + k, 0, this.transformData(_objectSpread$1({}, cs)));
      }
    },
    apiAppend: function apiAppend(item) {
      var _context57,
          _this22 = this,
          _context58;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var index = _findIndexInstanceProperty(_context57 = this.store.tableData).call(_context57, function (r) {
        return _this22.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      _spliceInstanceProperty(_context58 = this.store.tableData).call(_context58, index > -1 ? index : this.store.tableData.length, 0, this.transformData(_objectSpread$1({}, item)));

      this.change(this.store.tableData);
    },
    apiAppends: function apiAppends(items) {
      var _context59,
          _this23 = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var index = _findIndexInstanceProperty(_context59 = this.store.tableData).call(_context59, function (r) {
        return _this23.getRowKey(r) === key;
      });

      index = index < 0 ? this.store.tableData.length : index;
      index = index + 1;

      _forEachInstanceProperty(items).call(items, function (item, i) {
        var _context60;

        return _spliceInstanceProperty(_context60 = _this23.store.tableData).call(_context60, index + i, 0, _this23.transformData(_objectSpread$1({}, item)));
      });

      this.change(this.store.tableData);
    },
    setRowItem: function setRowItem() {
      var _context61,
          _this24 = this;

      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var index = _findIndexInstanceProperty(_context61 = this.store.tableData).call(_context61, function (r) {
        return _this24.getRowKey(r) === _this24.getRowKey(item);
      });

      this.store.tableData[index] = this.transformData(_objectSpread$1(_objectSpread$1({}, this.store.tableData[index]), item));
      this.change(this.store.tableData);
    },
    setRow: function setRow(key) {
      var _context62,
          _this25 = this;

      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = _findIndexInstanceProperty(_context62 = this.store.tableData).call(_context62, function (r) {
        return _this25.getRowKey(r) === key;
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
      var _context63,
          _this26 = this;

      this.store.tableData = _mapInstanceProperty(_context63 = this.store.tableData).call(_context63, function (v, i, arr) {
        return _this26.editFilter(_this26.getRowKey(v), cb(v, i, arr));
      });
      this.change(this.store.tableData);
    },
    transformData: function transformData(data) {
      var _this27 = this;

      if (data[this.store.colEditKey] === undefined) {
        var _context64, _context65;

        data[this.store.colEditKey] = {};

        _forEachInstanceProperty(_context64 = _filterInstanceProperty(_context65 = this._format_columns).call(_context65, function (f) {
          return !!f.field;
        })).call(_context64, function (f) {
          data[_this27.store.colEditKey][f.field] = false;
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
      var _context66,
          _this28 = this;

      var withlabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _mapInstanceProperty(_context66 = this.store.tableData).call(_context66, function (r) {
        var _context67, _context68;

        var tmp = _objectSpread$1({}, r);

        _Object$assign(tmp, _this28.autoSet(_this28.getRowKey(tmp), tmp));

        _forEachInstanceProperty(_context67 = _filterInstanceProperty(_context68 = _this28._format_columns).call(_context68, function (f) {
          return !!f.field;
        })).call(_context67, function (f) {
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
      var _context69,
          _context70,
          _this29 = this;

      var start = (this.store.page - 1) * this.pageSize;
      var end = start + this.pageSize > this.store.tableData.length ? this.store.tableData.length : start + this.pageSize;
      return _mapInstanceProperty(_context69 = _sliceInstanceProperty(_context70 = this.store.tableData).call(_context70, start, end)).call(_context69, function (r) {
        var _context71, _context72;

        var tmp = _objectSpread$1({}, r);

        _Object$assign(tmp, _this29.autoSet(_this29.getRowKey(tmp), tmp));

        _forEachInstanceProperty(_context71 = _filterInstanceProperty(_context72 = _this29._format_columns).call(_context72, function (f) {
          return !!f.field;
        })).call(_context71, function (f) {
          tmp[f.field] = r[f.field];
        });

        return tmp;
      });
    }
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context36; _forEachInstanceProperty(_context36 = ownKeys$2(Object(source), true)).call(_context36, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context37; _forEachInstanceProperty(_context37 = ownKeys$2(Object(source))).call(_context37, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var form = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm._box, {
      tag: "component",
      attrs: {
        "width": "80%",
        "closable": false,
        "visible": _vm.show
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
    }, [_vm._v(_vm._s(_vm._model_title))]), _vm._v(" "), _c('a-space', [!_vm._edit ? _c('a-icon', {
      staticStyle: {
        "font-size": "1.2rem"
      },
      attrs: {
        "type": "setting"
      },
      on: {
        "click": _vm.onViewShow
      }
    }) : _vm._e(), _vm._v(" "), _vm._hasMore ? _c('a-icon', {
      staticStyle: {
        "font-size": "1.2rem",
        "border": "1px solid",
        "border-radius": "50%",
        "padding": "4px"
      },
      attrs: {
        "type": _vm.store.moreShow ? 'minus' : 'plus'
      },
      on: {
        "click": _vm.onMore
      }
    }) : _vm._e()], 1)], 1), _vm._v(" "), _c('a-spin', {
      attrs: {
        "spinning": _vm.loading
      }
    }, [_c('ValidationObserver', {
      ref: "ob"
    }, [_c('a-collapse', {
      staticClass: "tool-form-panel",
      attrs: {
        "bordered": false,
        "expandIconPosition": "right",
        "activeKey": _vm.store.activeKey
      },
      on: {
        "change": this.onCollapseChange
      }
    }, _vm._l(_vm._layout, function (layout) {
      return _c('a-collapse-panel', {
        key: layout.key,
        attrs: {
          "showArrow": _vm.showArrow,
          "header": layout.title
        }
      }, [_c('ysz-list', {
        key: layout.key,
        attrs: {
          "no-p": _vm.noP,
          "no-line": false,
          "row": true,
          "group": _vm.view && !_vm.viewShow ? _vm.viewCol : layout.col
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
              var _context2, _context3;

              var errors = ref.errors;
              var validate = ref.validate;
              return [_c('ysz-list-item-top', [_c('ysz-list-item', {
                attrs: {
                  "slot": "top"
                },
                slot: "top"
              }, [_c('span', {
                staticStyle: {
                  "font-size": "1rem",
                  "font-weight": "400"
                },
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
                staticStyle: {
                  "border-bottom": "1px solid #faad14"
                },
                attrs: {
                  "status": "warning",
                  "text": errors[0]
                }
              })], 1), _vm._v(" "), _vm.singleRequest && _vm.singlePop && field.editing ? _c('a-popover', {
                attrs: {
                  "trigger": "click",
                  "placement": "right"
                },
                scopedSlots: _vm._u([{
                  key: "content",
                  fn: function fn() {
                    var _context;

                    return [_c('ysz-list-item-top', [_c('ysz-list-item-top', {
                      attrs: {
                        "slot": "top",
                        "no-p": _vm.noP
                      },
                      slot: "top"
                    }, [_c('ysz-list-item', {
                      attrs: {
                        "slot": "top",
                        "no-p": "",
                        "left": ""
                      },
                      slot: "top"
                    }, [_c('tool-form-item', {
                      ref: field.field,
                      refInFor: true,
                      attrs: {
                        "slot": "left",
                        "emptyLabel": field.placeholder,
                        "disabled": _includesInstanceProperty(_context = _vm._model_disabled).call(_context, field.field),
                        "editing": "",
                        "value": _vm.dataform[field.form_key],
                        "option": field.option,
                        "type": field.type,
                        "item": _vm.dataform
                      },
                      on: {
                        "change": function change(value) {
                          validate(value), _vm.onChange(value, field.form_key, field.on.change);
                        }
                      },
                      slot: "left"
                    })], 1), _vm._v(" "), field.help_msg ? _c('tw-alert', {
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
                    }) : _vm._e()], 1), _vm._v(" "), _c('a-space', [_c('a-button', {
                      attrs: {
                        "type": "primary"
                      },
                      on: {
                        "click": function click() {
                          return _vm.onSinglePopFinish(field);
                        }
                      }
                    }, [_vm._v("\n                                                确认\n                                            ")]), _vm._v(" "), _c('a-button', {
                      on: {
                        "click": function click() {
                          return _vm.onSinglePopClose(field);
                        }
                      }
                    }, [_vm._v("取消")])], 1)], 1)];
                  },
                  proxy: true
                }], null, true),
                model: {
                  value: field.popShow,
                  callback: function callback($$v) {
                    _vm.$set(field, "popShow", $$v);
                  },
                  expression: "field.popShow"
                }
              }, [_vm._v(" "), _c('ysz-list-item', {
                attrs: {
                  "no-p": "",
                  "left": ""
                }
              }, [_c('tool-form-item', {
                ref: field.field,
                refInFor: true,
                staticStyle: {
                  "cursor": "pointer"
                },
                attrs: {
                  "slot": "left",
                  "emptyLabel": field.placeholder,
                  "disabled": _includesInstanceProperty(_context2 = _vm._model_disabled).call(_context2, field.field),
                  "editing": false,
                  "value": _vm.dataform[field.form_key],
                  "option": field.option,
                  "type": field.type,
                  "item": _vm.dataform
                },
                on: {
                  "change": function change(value) {
                    validate(value), _vm.onChange(value, field.form_key, field.on.change);
                  }
                },
                slot: "left"
              }), _vm._v(" "), _c('a-icon', {
                staticStyle: {
                  "color": "#aaa"
                },
                attrs: {
                  "type": "right"
                }
              })], 1)], 1) : _c('ysz-list-item-top', {
                attrs: {
                  "no-p": _vm.noP
                },
                on: {
                  "click": function click() {
                    return _vm.onItemClick(field);
                  }
                }
              }, [_c('ysz-list-item', {
                style: "cursor:" + (field.editing && _vm.singleRequest ? 'pointer' : 'default'),
                attrs: {
                  "slot": "top",
                  "no-p": "",
                  "left": ""
                },
                slot: "top"
              }, [_c('tool-form-item', {
                ref: field.field,
                refInFor: true,
                attrs: {
                  "slot": "left",
                  "emptyLabel": field.placeholder,
                  "disabled": _includesInstanceProperty(_context3 = _vm._model_disabled).call(_context3, field.field),
                  "editing": _vm._edit && field.editing && !_vm.singleRequest,
                  "value": _vm.dataform[field.form_key],
                  "option": field.option,
                  "type": field.type,
                  "item": _vm.dataform
                },
                on: {
                  "change": function change(value) {
                    validate(value), _vm.onChange(value, field.form_key, field.on.change);
                  }
                },
                slot: "left"
              }), _vm._v(" "), field.editing && _vm.singleRequest ? _c('a-icon', {
                staticStyle: {
                  "color": "#aaa"
                },
                attrs: {
                  "type": "right"
                }
              }) : _vm._e()], 1), _vm._v(" "), field.help_msg ? _c('tw-alert', {
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
      }), 1)], 1);
    }), 1)], 1)], 1), _vm._v(" "), _vm._edit && !this.singleRequest ? _c('ysz-list-item', {
      attrs: {
        "slot": "footer",
        "left": true
      },
      slot: "footer"
    }, [_c('a-space', [!_vm.view ? _c('a-button', {
      on: {
        "click": _vm.cancleHandle
      }
    }, [_vm._v(_vm._s(_vm._current_cancel_text))]) : _vm._e(), _vm._v(" "), _c('a-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": _vm.okHandle
      }
    }, [_vm._v(_vm._s(_vm._current_ok_text))]), _vm._v(" "), _vm._t("btn")], 2)], 1) : _vm._e(), _vm._v(" "), _c('a-drawer', {
      attrs: {
        "placement": "right",
        "width": "100%",
        "closable": true,
        "visible": _vm._singleShow
      },
      on: {
        "close": _vm.onSingleClose
      }
    }, [_c('a-button', {
      attrs: {
        "slot": "title",
        "type": "primary"
      },
      on: {
        "click": _vm.onSingleFinish
      },
      slot: "title"
    }, [_vm._v("完成")]), _vm._v(" "), _c('ysz-module-widget', {
      attrs: {
        "title": _vm._singleTitle
      }
    }, [_vm.singleField ? _c('ValidationObserver', {
      ref: "singleOb"
    }, [_c('ValidationProvider', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "name": _vm._singleTitle,
        "rules": _vm.singleField.validate
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(ref) {
          var _context4;

          var errors = ref.errors;
          var validate = ref.validate;
          return [_c('tool-form-item', {
            ref: "singleFormItem",
            attrs: {
              "slot": "top",
              "disabled": _includesInstanceProperty(_context4 = _vm._model_disabled).call(_context4, _vm.singleField.field),
              "editing": "",
              "value": _vm.dataform[_vm.singleField.form_key],
              "option": _vm.singleField.option,
              "type": _vm.singleField.type,
              "item": _vm.dataform
            },
            on: {
              "change": function change(value) {
                validate(value), _vm.onChange(value, _vm.singleField.form_key, _vm.singleField.on.change);
              }
            },
            slot: "top"
          })];
        }
      }], null, false, 779950968)
    })], 1) : _vm._e()], 1)], 1)], 1);
  },
  staticRenderFns: [],
  name: 'toolForm',
  data: function data() {
    return {
      singleShow: false,
      singleField: null,
      dataform: {},
      store: {
        fields: [],
        models: [],
        model: '',
        fieldData: {},
        progress: {},
        activeKey: [],
        moreShow: false
      },
      _show: [],
      viewShow: false,
      loading: false
    };
  },
  props: {
    view: {
      type: Boolean,
      default: false
    },
    viewCol: {
      type: Number,
      default: 3
    },
    singleRequest: {
      type: Boolean,
      default: false
    },
    singlePop: {
      type: Boolean,
      default: false
    },
    viewEdit: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    collapseDisabled: {
      type: Boolean,
      default: true
    },
    collapseOpen: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    noP: {
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
    },
    validateJustAlert: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _singleTitle: function _singleTitle() {
      return this.singleField ? this.singleField.title : "";
    },
    _mores: function _mores() {
      var _context5;

      return _filterInstanceProperty(_context5 = this.store.fields).call(_context5, function (field) {
        return !!field.more;
      });
    },
    _hasMore: function _hasMore() {
      return this._mores.length > 0;
    },
    _edit: function _edit() {
      // 平面模式且(展示或编辑模式)或非阅览模式
      return this.view && (this.viewShow || this.viewEdit) || !this.view;
    },
    _box: function _box() {
      return !this.view ? "a-modal" : "div";
    },
    _layout: function _layout() {
      var _this = this;

      var lays = [];

      if (this.layout.length == 0) {
        lays = [{
          key: "default",
          col: this._model_layout_group,
          fields: this._fields,
          collapseDisabled: this.collapseDisabled,
          collapseOpen: this.collapseOpen
        }];
      } else {
        var _context6;

        lays = _mapInstanceProperty(_context6 = this.layout).call(_context6, function (lay, index) {
          var _context7;

          lay.key = lay.key === undefined ? 'default' : lay.key;
          lay.fields = _filterInstanceProperty(_context7 = _this._fields).call(_context7, function (field) {
            return !field.layout_key && index == 0 || field.layout_key == lay.key;
          });
          lay.collapseDisabled = lay.collapseDisabled === undefined ? _this.collapseDisabled : lay.collapseDisabled;
          lay.collapseOpen = lay.collapseOpen === undefined ? _this.collapseOpen : lay.collapseOpen;
          return lay;
        });
      }

      return lays;
    },
    _has_option_remote_load: function _has_option_remote_load() {
      var _context8;

      return _someInstanceProperty(_context8 = this.store.fields).call(_context8, function (f) {
        return !!f.meta.fetchUrl;
      });
    },
    _hasModel: function _hasModel() {
      return !!this._models[this.store.model];
    },
    _singleShow: function _singleShow() {
      return !this.singlePop && this.singleShow;
    },
    _models: function _models() {
      var _context9;

      var tmp = {};

      _forEachInstanceProperty(_context9 = this.store.models).call(_context9, function (v) {
        tmp[v.key] = v;
      });

      return tmp;
    },
    _current_model: function _current_model() {
      return this._hasModel ? this._models[this.store.model] : null;
    },
    _current_ok_text: function _current_ok_text() {
      return this._hasModel ? this._models[this.store.model].okText : '提交';
    },
    _current_cancel_text: function _current_cancel_text() {
      return this._hasModel ? this._models[this.store.model].cancelText : '取消';
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
          var _context10;

          var show = utils.getArrayFunction(this._current_model.show, [this._current_model, this.dataform]);
          return show.length == 0 ? [] : _filterInstanceProperty(_context10 = _Object$keys(this.dataform)).call(_context10, function (v) {
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
      var fields = this.singleRequest && this.singleRequestAloneField && this.singleField ? [this.singleField] : this.store.fields;

      if (this._hasModel) {
        if (_Array$isArray(this._current_model.pick) && this._current_model.pick.length != 0) {
          var keys = utils.getArrayFunction(this._current_model.pick, [this._current_model, this.dataform]);
          var tmp = {};

          _forEachInstanceProperty(fields).call(fields, function (field) {
            if (_includesInstanceProperty(keys).call(keys, field.form_key)) {
              utils.set(tmp, field.form_key, _this2.filterFormat(field, _this2.dataform[field.form_key]));
            }
          });

          return tmp;
        } else {
          var omit = utils.getArrayFunction(this._current_model.omit, [this._current_model, this.dataform]);
          var _tmp = {};

          _forEachInstanceProperty(fields).call(fields, function (field) {
            if (!_includesInstanceProperty(omit).call(omit, field.form_key)) {
              utils.set(_tmp, field.form_key, _this2.filterFormat(field, _this2.dataform[field.form_key]));
            }
          });

          return _tmp;
        }
      } else {
        return {};
      }
    },
    _fieldMap: function _fieldMap() {
      var _context11;

      var tmp = {};

      _forEachInstanceProperty(_context11 = this.store.fields).call(_context11, function (v) {
        tmp[v.field] = v;
      });

      return tmp;
    },
    _has_xhr: function _has_xhr() {
      return this._hasModel && !!this._current_model.xhr.url;
    },
    _key: function _key() {
      var _context12;

      var ks = _filterInstanceProperty(_context12 = this.store.fields).call(_context12, function (field) {
        return field.key;
      });

      return ks.length > 0 ? ks[0].form_key : '';
    },
    _fields: function _fields() {
      var _context13,
          _this3 = this;

      return _filterInstanceProperty(_context13 = this.store.fields).call(_context13, function (v) {
        var _context14;

        if (v.more && !_this3.store.moreShow) {
          return false;
        }

        return v.field && !_includesInstanceProperty(_context14 = _this3._model_hide).call(_context14, v.form_key);
      });
    }
  },
  methods: {
    onMore: function onMore() {
      this.store.moreShow = !this.store.moreShow;
    },
    onCollapseChange: function onCollapseChange(keys) {
      var _context15, _context16, _context17, _context18;

      keys = _Array$isArray(keys) ? keys : [keys];

      var alwaysOpenKeys = _mapInstanceProperty(_context15 = _filterInstanceProperty(_context16 = this._layout).call(_context16, function (layout) {
        return !!layout.collapseOpen;
      })).call(_context15, function (layout) {
        return layout.key;
      });

      var disKeys = _mapInstanceProperty(_context17 = _filterInstanceProperty(_context18 = this._layout).call(_context18, function (layout) {
        return !!layout.collapseDisabled;
      })).call(_context17, function (layout) {
        return layout.key;
      });

      _forEachInstanceProperty(disKeys).call(disKeys, function (key, index) {
        // 模拟disabled 但不用原生的disabled 因为原生的disabled带有disabled样式
        if (_includesInstanceProperty(keys).call(keys, key)) {
          // 如果一开始就关闭 则删掉
          if (!_includesInstanceProperty(alwaysOpenKeys).call(alwaysOpenKeys, key)) {
            delete keys[index];
          }
        } else {
          // 如果一开始就开启 则填充
          if (_includesInstanceProperty(alwaysOpenKeys).call(alwaysOpenKeys, key)) {
            keys.push(key);
          }
        }
      });

      this.store.activeKey = keys;
    },
    onSingleFinish: function onSingleFinish() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _this4.$refs.singleOb.validate();

              case 2:
                if (_context19.sent) {
                  _context19.next = 8;
                  break;
                }

                if (_this4.validateJustAlert) {
                  _context19.next = 7;
                  break;
                }

                return _context19.abrupt("return");

              case 7:
                _this4.getNotifyEngine(_this4._current_model.xhr.notifyEngine).info("信息检测未通过请检查!");

              case 8:
                _context19.next = 10;
                return _this4.do();

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSinglePopFinish: function onSinglePopFinish(field) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _this5.singleField = field;
                _context20.next = 3;
                return _this5.$refs.ob.validate();

              case 3:
                if (_context20.sent) {
                  _context20.next = 9;
                  break;
                }

                if (_this5.validateJustAlert) {
                  _context20.next = 8;
                  break;
                }

                return _context20.abrupt("return");

              case 8:
                _this5.getNotifyEngine(_this5._current_model.xhr.notifyEngine).info("信息检测未通过请检查!");

              case 9:
                _context20.next = 11;
                return _this5.do();

              case 11:
                _this5.onSinglePopClose(field);

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onSinglePopClose: function onSinglePopClose(field) {
      field.popShow = false;
    },
    onSingleClose: function onSingleClose() {
      this.singleShow = false;
      this.singleField = null;
    },
    onItemClick: function onItemClick(field) {
      var _this6 = this;

      if (this.singleRequest && field.editing && !this.singlePop) {
        this.singleField = field;
        this.singleShow = true;
        this.$nextTick(function () {
          _this6.$refs.singleFormItem.focus();
        });
      }
    },
    filterFormat: function filterFormat(field, v) {
      if (field.type == "datetimepick") {
        return v ? v.format(field.option.format) : '';
      } else {
        return v;
      }
    },
    onChange: function onChange(value, field, cb) {
      var _this7 = this;

      this.$set(this.dataform, field, value);
      this.$nextTick(function () {
        cb && cb(value, _this7.dataform);
      });
    },
    upload: function upload(file, field) {
      var _this8 = this;

      var fd = new FormData();
      fd.append('file', file);
      return new _Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(ok) {
          var response;
          return _regeneratorRuntime.wrap(function _callee3$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _this8.loading = true;
                  _context21.prev = 1;
                  _context21.next = 4;
                  return _this8.$http.post(_this8._current_model.xhr.url + '/' + field.option.uploadApi, fd, {
                    'Content-Type': 'multipart/form-data',
                    onUploadProgress: function onUploadProgress(progressEvent) {
                      _this8.$set(_this8.store.progress, field.field, progressEvent.loaded / progressEvent.total * 100 | 0);
                    }
                  });

                case 4:
                  response = _context21.sent;
                  _this8.loading = false;

                  if (utils.http.responseOk(response)) {
                    _this8.$set(_this8.dataform[field.field], 0, response.data.path);

                    ok([response.data.path]);
                  } else {
                    ok('');
                  }

                  _context21.next = 13;
                  break;

                case 9:
                  _context21.prev = 9;
                  _context21.t0 = _context21["catch"](1);
                  _this8.loading = false;
                  ok('');

                case 13:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee3, null, [[1, 9]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    setFields: function setFields() {
      var _this9 = this;

      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var tmp = [];

      _forEachInstanceProperty(fields).call(fields, function (v) {
        var _context22;

        var type = _this9.filterType(v.type);

        var option = v.option ? v.option : {};

        if (_includesInstanceProperty(_context22 = ['select', 'radio']).call(_context22, v.type)) {
          option.valueKey = option.valueKey ? option.valueKey : 'value';
          option.titleKey = option.titleKey ? option.titleKey : 'label';
        }

        var fk = v.form_key ? v.form_key : v.field;

        var _default = utils.getTypeDefault(type, v.default, option);

        _this9.$set(_this9.dataform, fk, _default);

        tmp.push({
          type: type,
          title: v.title ? v.title : '未命名字段',
          field: v.field,
          editing: v.editing === undefined ? true : false,
          default: _default,
          option: option,
          validate: v.validate ? v.validate : '',
          help_msg: v.help_msg ? v.help_msg : '',
          key: v.key === undefined ? false : v.key,
          meta: v,
          more: !!v.more,
          form_key: fk,
          popShow: false,
          form_value_key: v.form_value_key ? v.form_value_key : v.field,
          layout_key: v.layout_key,
          placeholder: v.placeholder ? v.placeholder : "",
          on: {
            change: v.onChange ? v.onChange : null
          }
        });
      });

      this.store.fields = tmp;
    },
    setModels: function setModels() {
      var _arguments = arguments,
          _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var _context23, _context24, _this10$store$models;

        var models, tmp;
        return _regeneratorRuntime.wrap(function _callee4$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                models = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : [];
                _this10.store.models = _mapInstanceProperty(_context23 = _filterInstanceProperty(models).call(models, function (v) {
                  return !v.extend;
                })).call(_context23, function (v) {
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

                  v.okText = v.okText ? v.okText : '提交';
                  v.cancelText = v.cancelText ? v.cancelText : '取消';
                  return v;
                });
                _context25.next = 4;
                return _this10.$nextTick();

              case 4:
                tmp = _mapInstanceProperty(_context24 = _filterInstanceProperty(models).call(models, function (v) {
                  return !!v.extend && _this10._models[v.extend] != undefined;
                })).call(_context24, function (v) {
                  if (v.extendResolve) {
                    return v.extendResolve({}, _this10._models[v.extend], v);
                  } else {
                    return _Object$assign({}, _this10._models[v.extend], v);
                  }
                });

                (_this10$store$models = _this10.store.models).push.apply(_this10$store$models, _toConsumableArray(tmp));

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setModel: function setModel(model) {
      var _this11 = this;

      if (this._models[model]) {
        this.store.model = model;
        this.$nextTick(function () {
          var _context26, _context27;

          _this11.store.activeKey = _mapInstanceProperty(_context26 = _filterInstanceProperty(_context27 = _this11._layout).call(_context27, function (layout) {
            return !!layout.collapseOpen;
          })).call(_context26, function (layout) {
            return layout.key;
          });
        });
      }
    },
    getModel: function getModel() {
      return this.store.model;
    },
    setData: function setData(data) {
      var _context28,
          _this12 = this;

      var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _forEachInstanceProperty(_context28 = this.store.fields).call(_context28, function (field) {
        // 只根据field.field获取数据
        // dataform key 根据_mode_data 注释设置
        _this12.$set(_this12.dataform, field.form_key, utils.getTypeDefault(field.type, utils.get(data, field.field, field.default), field.option));
      });

      if (validate) {
        this.$nextTick(function () {
          _this12.$refs.ob.validate();
        });
      }
    },
    filterType: function filterType(type) {
      var _context29;

      return _includesInstanceProperty(_context29 = ["datetimepick", "checkbox", 'radio', 'string', 'switch', 'date', 'select', 'param', 'file', 'number', 'code', 'map', 'tag', 'customer', 'pick']).call(_context29, type) ? type : 'string';
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
    transform: function transform(params, method) {
      var tmp = _objectSpread$2({}, params); // auto set
      // if(Object.keys(tmp).length > 0) {
      //     this.autoSet.forEach(s => {
      //         tmp[s.target] = this.$refs[s.src].getLabel()
      //     })
      // }


      return tmp;
    },
    request: function request() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        var param, _context30, sub, _context31, ks, hkObj, response;

        return _regeneratorRuntime.wrap(function _callee5$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                param = _this13._current_model.xhr.method == 'get' ? {
                  params: _this13._model_data
                } : {
                  payload: _this13._model_data
                };
                _context32.prev = 1;
                sub = ''; // put not include
                // put include key to body

                if (_includesInstanceProperty(_context30 = ['delete', 'patch']).call(_context30, _this13._current_model.xhr.method)) {
                  ks = _filterInstanceProperty(_context31 = _this13.store.fields).call(_context31, function (field) {
                    return field.key;
                  });

                  if (ks.length > 0) {
                    sub = "/".concat(_this13.dataform[_this13._key]);
                  }
                }

                _this13.loading = true;
                hkObj = Http.getEngine(_this13._current_model.xhr.httpKey ? _this13._current_model.xhr.httpKey : _this13.httpKey);
                _context32.next = 8;
                return hkObj.engine[_this13._current_model.xhr.method](_this13._current_model.xhr.url + sub, _this13.paramTransform(_this13.transform(param)));

              case 8:
                response = _context32.sent;
                _this13.loading = false;

                if (utils.http.responseOk(response)) {
                  _this13.getNotifyEngine(_this13._current_model.xhr.notifyEngine).success(_this13._current_model.xhr.okMsg);

                  _this13.$emit('opearFinish', response);

                  if (_this13._current_model.xhr.autoClose) {
                    _this13.close();
                  }
                } else {
                  _this13.getNotifyEngine(_this13._current_model.xhr.notifyEngine).info(hkObj.errorMsgAdapter({
                    response: response
                  }));
                }

                return _context32.abrupt("return", response);

              case 14:
                _context32.prev = 14;
                _context32.t0 = _context32["catch"](1);

                if (_context32.t0.response && _context32.t0.response.status == 422) {
                  _this13.getNotifyEngine(_this13._current_model.xhr.notifyEngine).error(Http.errorMsgAdapter(_context32.t0));
                } else {
                  _this13.getNotifyEngine(_this13._current_model.xhr.notifyEngine).error(Http.errorMsgAdapter(_context32.t0));
                }

                _this13.loading = false;
                return _context32.abrupt("return", _context32.t0);

              case 19:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee5, null, [[1, 14]]);
      }))();
    },
    do: function _do() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function _callee6$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                if (!_this14._has_xhr) {
                  _context33.next = 12;
                  break;
                }

                if (!_this14._current_model.xhr.confirm) {
                  _context33.next = 5;
                  break;
                }

                _this14.$confirm({
                  title: _this14._current_model.xhr.confirmMsg ? _this14._current_model.xhr.confirmMsg : '确认?',
                  onOk: function onOk() {
                    _this14.request();
                  },
                  onCancel: function onCancel() {//todo
                  },
                  okText: '确定',
                  cancelText: '取消'
                });

                _context33.next = 10;
                break;

              case 5:
                _context33.t0 = _this14;
                _context33.next = 8;
                return _this14.request();

              case 8:
                _context33.t1 = _context33.sent;

                _context33.t0.$emit.call(_context33.t0, 'opearFinish', _context33.t1);

              case 10:
                _context33.next = 13;
                break;

              case 12:
                _this14.$emit('done', _this14._model_data);

              case 13:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee6);
      }))();
    },
    okHandle: function okHandle() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return _this15.$refs.ob.validate();

              case 2:
                if (_context34.sent) {
                  _context34.next = 6;
                  break;
                }

                _this15.getNotifyEngine(_this15._current_model.xhr.notifyEngine).info("信息检测未通过请检查!");

                if (_this15.validateJustAlert) {
                  _context34.next = 6;
                  break;
                }

                return _context34.abrupt("return");

              case 6:
                _context34.next = 8;
                return _this15.do();

              case 8:
                if (_this15._current_model.xhr.autoClose) {
                  _this15.cancleHandle();
                }

              case 9:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee7);
      }))();
    },
    cancleHandle: function cancleHandle() {
      !this.view ? this.close() : this.onViewHidden();
    },
    close: function close() {
      this.$emit('update:show', false);
    },
    onViewShow: function onViewShow() {
      this.viewShow = true;
    },
    onViewHidden: function onViewHidden() {
      this.viewShow = false;
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
      var _context35,
          _this16 = this;

      _forEachInstanceProperty(_context35 = this.store.fields).call(_context35, function (field) {
        _this16.$set(_this16.dataform, field.form_key, field.default);
      });
    }
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context17; _forEachInstanceProperty(_context17 = ownKeys$3(Object(source), true)).call(_context17, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context18; _forEachInstanceProperty(_context18 = ownKeys$3(Object(source))).call(_context18, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
var formItem = {
  render: function render() {
    var _context, _context2;

    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticStyle: {
        "width": "100%"
      },
      style: {
        textAlign: _vm.align
      }
    }, [_vm.editing ? [_vm.type == 'string' ? _c(_vm._option.textarea ? 'a-textarea' : 'a-input', {
      ref: "input",
      tag: "component",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "placeholder": _vm.emptyLabel,
        "allow-clear": "",
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
        "placeholder": _vm.emptyLabel,
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
        "title": _vm._option.title,
        "searchKey": _vm._option.searchKey,
        "placeholder": _vm.emptyLabel
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
        "placeholder": _vm.emptyLabel,
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'radio' ? _c('tool-radio', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "solid": _vm._option.solid,
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value,
        "options": _vm._option.radioOptions
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'datetimepick' ? _c('tool-datetimepick', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "showTime": _vm._option.showTime,
        "format": _vm._option.format,
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value,
        "options": _vm._option.radioOptions
      },
      on: {
        "change": _vm.onChange
      }
    }) : _vm.type == 'checkbox' ? _c('tool-checkbox', {
      ref: "input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "disabled": _vm.disabled,
        "size": "small",
        "value": _vm.value,
        "options": _vm._option.checkboxOptions
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
    }), 1)], 1) : _vm._map_checkbox ? _c('span', _vm._l(_vm._label, function (label, index) {
      return _c('span', {
        key: index
      }, [_vm._v(_vm._s(label) + _vm._s(index == _vm._label.length - 1 ? "" : ","))]);
    }), 0) : _vm._file_view ? _c('span', [_c('ysz-list', {
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

        return _includesInstanceProperty(_context3 = ['datetimepick', 'radio', "checkbox", 'string', 'select', 'number', 'switch', 'code', 'map', 'tag', 'customer', 'pick']).call(_context3, value);
      }
    },
    emptyLabel: {
      type: String,
      default: ""
    },
    value: {
      default: ''
    },
    align: {
      type: String,
      default: "left"
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

        case 'datetimepick':
          {
            if (option.format === undefined) {
              option.format = "YYYY-MM-DD HH:mm:ss";
            }

            if (option.showTime === undefined) {
              option.showTime = false;
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
                label: option.defaultOptionLabel ? option.defaultOptionLabel : "全部",
                value: option.defaultOptionValue ? option.defaultOptionValue : ""
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
                label: option.defaultOptionLabel ? option.defaultOptionLabel : "全部",
                value: option.defaultOptionValue ? option.defaultOptionValue : ""
              }]).call(_context7, _toConsumableArray(option.pickOptions));
            }

            if (!option.searchKey) {
              option.searchKey = ["label"];
            }
          }
          break;

        case "radio":
          {
            if (option.radioOptions === undefined || !_Array$isArray(option.radioOptions)) {
              option.radioOptions = utils.getType(option.radioOptions) == 'Function' ? option.radioOptions(this.item) : [];
            }

            if (option.solid === undefined) {
              option.solid = false;
            }

            if (option.autoFillEmpty === undefined) {
              option.autoFillEmpty = true;
            }

            if (option.autoFillEmpty) {
              var _context8;

              option.radioOptions = _concatInstanceProperty(_context8 = [{
                label: option.defaultOptionLabel ? option.defaultOptionLabel : "全部",
                value: option.defaultOptionValue ? option.defaultOptionValue : ""
              }]).call(_context8, _toConsumableArray(option.radioOptions));
            }
          }
          break;

        case "checkbox":
          {
            if (option.checkboxOptions === undefined || !_Array$isArray(option.checkboxOptions)) {
              option.checkboxOptions = utils.getType(option.checkboxOptions) == 'Function' ? option.checkboxOptions(this.item) : [];
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
      var _context9;

      return _includesInstanceProperty(_context9 = ['datetimepick', 'string', 'date', 'check', 'radio', 'number', 'select', 'pick']).call(_context9, this.type);
    },
    _map_checkbox: function _map_checkbox() {
      return this.type == 'checkbox';
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
            var _context10;

            var option = _filterInstanceProperty(_context10 = this._option.selectOptions).call(_context10, function (r) {
              return r.value === _this.value;
            })[0];

            if (!option) {
              return this.emptyLabel;
            }

            return this._option.selectLabel ? option.__COL_TRUE_LABEL__ ? option.__COL_TRUE_LABEL__ : '' : option.label;
          }

        case 'pick':
          {
            var _context11;

            var _option2 = _filterInstanceProperty(_context11 = this._option.pickOptions).call(_context11, function (r) {
              return r.value === _this.value;
            })[0];

            if (!_option2) {
              return this.emptyLabel;
            }

            return _option2.label;
          }

        case 'radio':
          {
            var _context12;

            var _option3 = _filterInstanceProperty(_context12 = this._option.radioOptions).call(_context12, function (r) {
              return r.value === _this.value;
            })[0];

            if (!_option3) {
              return this.emptyLabel;
            }

            return _option3.label;
          }

        case 'checkbox':
          {
            if (_Array$isArray(this.value)) {
              var _context13, _context14;

              var options = _mapInstanceProperty(_context13 = _filterInstanceProperty(_context14 = this._option.checkboxOptions).call(_context14, function (r) {
                var _context15;

                return _includesInstanceProperty(_context15 = _this.value).call(_context15, r.value);
              })).call(_context13, function (r) {
                return r.label;
              });

              if (options.length == 0) {
                return [this.emptyLabel];
              }

              return options;
            } else {
              var _context16;

              var _option4 = _filterInstanceProperty(_context16 = this._option.checkboxOptions).call(_context16, function (r) {
                return r.value === _this.value;
              })[0];

              if (!_option4) {
                return [this.emptyLabel];
              }

              return [_option4.label];
            }
          }

        case 'datetimepick':
          {
            return this.value ? this.value.format(this._option.format) : '';
          }

        case 'number':
          {
            return this.value ? this.value : this.value === 0 ? 0 : this.emptyLabel;
          }

        default:
          {
            return this.value ? this.value : this.emptyLabel;
          }
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus && this.$refs.input.focus();

      switch (this.type) {
        case 'string':
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
    placeholder: '',
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
    },
    visible: function visible(val) {
      if (val) {
        this.focus();
      }
    },
    options: function options() {
      this.clear(this.pick);
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
      })[0]; // 防止option懒加载 没有对应值问题


      this.$emit('change', tmp ? tmp : {
        value: value,
        label: this.placeholder
      });
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

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys$4(Object(source), true)).call(_context3, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys$4(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
        var _this = this;

        this.v = this.value;

        if (this.options && this.options.length > 0) {
          var _context;

          var val = _filterInstanceProperty(_context = this.options).call(_context, function (option) {
            return option.value == _this.v;
          })[0];

          if (val === undefined) {
            this.v = "";
            this.onChange();
          }
        }
      },
      deep: true
    },
    options: {
      handler: function handler() {
        var _context2,
            _this2 = this;

        var val = _filterInstanceProperty(_context2 = this.options).call(_context2, function (option) {
          return option.value == _this2.v;
        })[0];

        if (val === undefined) {
          this.v = "";
          this.onChange();
        }
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

var radio = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-radio-group', {
      ref: "core",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "button-style": _vm.solid ? 'solid' : 'outline',
        "options": _vm.options,
        "disabled": _vm.disabled,
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
    });
  },
  staticRenderFns: [],
  name: 'toolRadio',
  props: {
    value: "",
    solid: {
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
      this.$emit('change', this.v);
    },
    focus: function focus() {
      this.$refs.core.focus();
    }
  }
};

var checkbox = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-checkbox-group', {
      ref: "core",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "options": _vm.options,
        "disabled": _vm.disabled,
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
    });
  },
  staticRenderFns: [],
  name: 'toolCheckbox',
  props: {
    value: {
      default: function _default() {
        return [];
      },
      type: Array
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
    var value = utils.getType(this.$props.value) === 'Undefined' ? [] : this.$props.value;
    value !== this.$props.value && this.$emit('change', value);
    return {
      v: value
    };
  },
  methods: {
    onChange: function onChange(v) {
      this.$emit('change', this.v);
    },
    focus: function focus() {
      this.$refs.core.focus();
    }
  }
};

var datetimepick = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a-date-picker', {
      ref: "core",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "showTime": _vm.showTime,
        "inputReadOnly": "",
        "format": _vm.format,
        "disabled": _vm.disabled,
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
    });
  },
  staticRenderFns: [],
  name: 'toolDatetimepick',
  props: {
    value: "",
    format: {
      default: "YYYY-MM-DD HH:mm:ss",
      type: String
    },
    showTime: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      handler: function handler() {
        this.v = !this.value ? null : moment(this.value, this.format);
      },
      deep: true
    }
  },
  data: function data() {
    var value = !this.$props.value ? null : moment(this.$props.value, this.format); // format time, force change

    this.$emit('change', value);
    return {
      v: value
    };
  },
  methods: {
    onChange: function onChange(v) {
      this.$emit('change', this.v);
    },
    focus: function focus() {
      this.$refs.core.focus();
    }
  }
};

var components = [curd, formItem, select, state, form, code, map, tag, pick, radio, checkbox, datetimepick];

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

mvyu.config.responsive.cb.push(function (t) {
  config$1.dispatch(t);
});

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
  http: Http,
  config: config$1
};

export default index;
