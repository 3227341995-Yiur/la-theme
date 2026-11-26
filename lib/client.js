window.__ModuleLoader__.load({
  id: "la-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let vue = require("vue");
let element_plus = require("element-plus");
let _element_plus_icons_vue = require("@element-plus/icons-vue");
let _lucky_apps_client_ui = require("@lucky-apps/client-ui");
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/consts.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var isBrowser = typeof window !== "undefined";
/** @typedef {Window & {AnimeJS: Array}|null} AnimeJSWindow

/** @type {AnimeJSWindow} */
var win = isBrowser ? window : null;
/** @type {Document|null} */
var doc = isBrowser ? document : null;
/** @enum {Number} */
var tweenTypes = {
	OBJECT: 0,
	ATTRIBUTE: 1,
	CSS: 2,
	TRANSFORM: 3,
	CSS_VAR: 4
};
/** @enum {Number} */
var valueTypes = {
	NUMBER: 0,
	UNIT: 1,
	COLOR: 2,
	COMPLEX: 3
};
/** @enum {Number} */
var tickModes = {
	NONE: 0,
	AUTO: 1,
	FORCE: 2
};
/** @enum {Number} */
var compositionTypes = {
	replace: 0,
	none: 1,
	blend: 2
};
var isRegisteredTargetSymbol = Symbol();
var isDomSymbol = Symbol();
var isSvgSymbol = Symbol();
var transformsSymbol = Symbol();
var proxyTargetSymbol = Symbol();
var minValue = 1e-11;
var maxValue = 0xe8d4a51000;
var K = 1e3;
var emptyArray = [];
var shortTransforms = /*#__PURE__*/ (() => {
	const map = /* @__PURE__ */ new Map();
	map.set("x", "translateX");
	map.set("y", "translateY");
	map.set("z", "translateZ");
	return map;
})();
var validTransforms = [
	"perspective",
	"translateX",
	"translateY",
	"translateZ",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"scale",
	"scaleX",
	"scaleY",
	"scaleZ",
	"skew",
	"skewX",
	"skewY"
];
var transformsFragmentStrings = /*#__PURE__*/ validTransforms.reduce((a, v) => ({
	...a,
	[v]: v + "("
}), {});
/** @return {void} */
var noop = () => {};
/**
* @template T
* @param  {T} v
* @return {T}
*/
var noopModifier = (v) => v;
var validRgbHslRgx = /\)\s*[-.\d]/;
var hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
var rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
var rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
var hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
var digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
var unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
var lowerCaseRgx = /([a-z])([A-Z])/g;
var relativeValuesExecRgx = /(\*=|\+=|-=)/;
var cssVariableMatchRgx = /var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/globals.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DefaultsParams,
*   DOMTarget,
* } from '../types/index.js'
*
* @import {
*   Scope,
* } from '../scope/index.js'
*/
/**
* @typedef {Object} EditorGlobals
* @property {boolean} showPanel
* @property {Function} addAnimation
* @property {Function} addSet
* @property {Function} addTimeline
* @property {Function} addTimelineChild
* @property {Function} addTimelineLabel
* @property {Function} addTimelineCall
* @property {Function} addTimelineSync
* @property {Function} resolveStagger
* @property {Object|null} _head
* @property {Object|null} _tail
*/
/** @type {DefaultsParams} */
var defaults = {
	id: null,
	keyframes: null,
	playbackEase: null,
	playbackRate: 1,
	frameRate: 240,
	loop: 0,
	reversed: false,
	alternate: false,
	autoplay: true,
	persist: false,
	duration: K,
	delay: 0,
	loopDelay: 0,
	ease: "out(2)",
	composition: compositionTypes.replace,
	modifier: noopModifier,
	onBegin: noop,
	onBeforeUpdate: noop,
	onUpdate: noop,
	onLoop: noop,
	onPause: noop,
	onComplete: noop,
	onRender: noop
};
var scope = {
	/** @type {Scope} */
	current: null,
	/** @type {Document|DOMTarget} */
	root: doc
};
var globals = {
	/** @type {DefaultsParams} */
	defaults,
	/** @type {Number} */
	precision: 4,
	/** @type {Number} equals 1 in ms mode, 0.001 in s mode */
	timeScale: 1,
	/** @type {Number} */
	tickThreshold: 200,
	/** @type {EditorGlobals|null} */
	editor: null
};
var globalVersions = {
	version: "4.5.0",
	engine: null
};
if (isBrowser) {
	if (!win.AnimeJS) win.AnimeJS = [];
	win.AnimeJS.push(globalVersions);
}
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/helpers.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Target,
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @param  {String} str
* @return {String}
*/
var toLowerCase = (str) => str.replace(lowerCaseRgx, "$1-$2").toLowerCase();
/**
* Prioritize this method instead of regex when possible
* @param  {String} str
* @param  {String} sub
* @return {Boolean}
*/
var stringStartsWith = (str, sub) => str.indexOf(sub) === 0;
var now = Date.now;
var isArr = Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */
var isObj = (a) => a && a.constructor === Object;
/**@param {any} a @return {a is Number} */
var isNum = (a) => typeof a === "number" && !isNaN(a);
/**@param {any} a @return {a is String} */
var isStr = (a) => typeof a === "string";
/**@param {any} a @return {a is Function} */
var isFnc = (a) => typeof a === "function";
/**@param {any} a @return {a is undefined} */
var isUnd = (a) => typeof a === "undefined";
/**@param {any} a @return {a is null | undefined} */
var isNil = (a) => isUnd(a) || a === null;
/**@param {any} a @return {a is SVGElement} */
var isSvg = (a) => isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */
var isHex = (a) => hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */
var isRgb = (a) => stringStartsWith(a, "rgb");
/**@param {any} a @return {Boolean} */
var isHsl = (a) => stringStartsWith(a, "hsl");
/**@param {any} a @return {Boolean} */ var isCol = (a) => isHex(a) || (isRgb(a) || isHsl(a)) && (a[a.length - 1] === ")" || !validRgbHslRgx.test(a));
/**@param {any} a @return {Boolean} */
var isKey = (a) => !globals.defaults.hasOwnProperty(a);
var svgCssReservedProperties = [
	"opacity",
	"rotate",
	"overflow",
	"color"
];
/**
* @param  {Target} el
* @param  {String} propertyName
* @return {Boolean}
*/
var isValidSVGAttribute = (el, propertyName) => {
	if (svgCssReservedProperties.includes(propertyName)) return false;
	if (el.getAttribute(propertyName) || propertyName in el) {
		if (propertyName === "scale") {
			const elParentNode = el.parentNode;
			return elParentNode && elParentNode.tagName === "filter";
		}
		return true;
	}
};
/**
* @param  {Number|String} str
* @return {Number}
*/
var parseNumber = (str) => isStr(str) ? parseFloat(str) : str;
var pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var abs = Math.abs;
var floor = Math.floor;
var asin = Math.asin;
var PI = Math.PI;
var _round = Math.round;
/**
* Clamps a value between min and max bounds
*
* @param  {Number} v - Value to clamp
* @param  {Number} min - Minimum boundary
* @param  {Number} max - Maximum boundary
* @return {Number}
*/
var clamp$1 = (v, min, max) => v < min ? min : v > max ? max : v;
/**
* Rounds a number to specified decimal places
*
* @param  {Number} v - Value to round
* @param  {Number} decimalLength - Number of decimal places
* @return {Number}
*/
var round = (v, decimalLength) => {
	if (decimalLength < 0) return v;
	if (!decimalLength) return _round(v);
	const p = 10 ** decimalLength;
	return _round(v * p) / p;
};
/**
* Linear interpolation between two values
*
* @param  {Number} start - Starting value
* @param  {Number} end - Ending value
* @param  {Number} factor - Interpolation factor in the range [0, 1]
* @return {Number} The interpolated value
*/
var lerp = (start, end, factor) => factor === 1 ? end : factor === 0 ? start : start + (end - start) * factor;
/**
* Replaces infinity with maximum safe value
*
* @param  {Number} v - Value to check
* @return {Number}
*/
var clampInfinity = (v) => v === Infinity ? maxValue : v === -Infinity ? -maxValue : v;
/**
* Normalizes time value with minimum threshold
*
* @param  {Number} v - Time value to normalize
* @return {Number}
*/
var normalizeTime = (v) => v <= 1e-11 ? minValue : clampInfinity(round(v, 11));
/**
* @template T
* @param    {T[]} a
* @return   {T[]}
*/
var cloneArray = (a) => isArr(a) ? [...a] : a;
/**
* @template T
* @template U
* @param    {T} o1
* @param    {U} o2
* @return   {T & U}
*/
var mergeObjects = (o1, o2) => {
	const merged = { ...o1 };
	for (let p in o2) {
		const o1p = o1[p];
		merged[p] = isUnd(o1p) ? o2[p] : o1p;
	}
	return merged;
};
/**
* @param  {Object} parent
* @param  {Function} callback
* @param  {Boolean} [reverse]
* @param  {String} [prevProp]
* @param  {String} [nextProp]
* @return {void}
*/
var forEachChildren = (parent, callback, reverse, prevProp = "_prev", nextProp = "_next") => {
	let next = parent._head;
	let adjustedNextProp = nextProp;
	if (reverse) {
		next = parent._tail;
		adjustedNextProp = prevProp;
	}
	while (next) {
		const currentNext = next[adjustedNextProp];
		callback(next);
		next = currentNext;
	}
};
/**
* @param  {Object} parent
* @param  {Object} child
* @param  {String} [prevProp]
* @param  {String} [nextProp]
* @return {void}
*/
var removeChild = (parent, child, prevProp = "_prev", nextProp = "_next") => {
	const prev = child[prevProp];
	const next = child[nextProp];
	prev ? prev[nextProp] = next : parent._head = next;
	next ? next[prevProp] = prev : parent._tail = prev;
	child[prevProp] = null;
	child[nextProp] = null;
};
/**
* @param  {Object} parent
* @param  {Object} child
* @param  {Function} [sortMethod]
* @param  {String} prevProp
* @param  {String} nextProp
* @return {void}
*/
var addChild = (parent, child, sortMethod, prevProp = "_prev", nextProp = "_next") => {
	let prev = parent._tail;
	while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
	const next = prev ? prev[nextProp] : parent._head;
	prev ? prev[nextProp] = child : parent._head = child;
	next ? next[prevProp] = child : parent._tail = child;
	child[prevProp] = prev;
	child[nextProp] = next;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/transforms.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @param  {DOMTarget} target
* @param  {String} propName
* @param  {Object} animationInlineStyles
* @return {String}
*/
var parseInlineTransforms = (target, propName, animationInlineStyles) => {
	const inlineTransforms = target.style.transform;
	if (inlineTransforms) {
		const cachedTransforms = target[transformsSymbol];
		let pos = 0;
		const len = inlineTransforms.length;
		let fullTranslateValue;
		while (pos < len) {
			while (pos < len && inlineTransforms.charCodeAt(pos) === 32) pos++;
			if (pos >= len) break;
			const nameStart = pos;
			while (pos < len && inlineTransforms.charCodeAt(pos) !== 40) pos++;
			if (pos >= len) break;
			const name = inlineTransforms.substring(nameStart, pos);
			let depth = 1;
			const valueStart = pos + 1;
			let c1 = -1, c2 = -1;
			pos++;
			while (pos < len && depth > 0) {
				const c = inlineTransforms.charCodeAt(pos);
				if (c === 40) depth++;
				else if (c === 41) depth--;
				else if (c === 44 && depth === 1) {
					if (c1 === -1) c1 = pos;
					else if (c2 === -1) c2 = pos;
				}
				pos++;
			}
			const valueEnd = pos - 1;
			if (name === "translate" || name === "translate3d") {
				if (c1 === -1) cachedTransforms.translateX = inlineTransforms.substring(valueStart, valueEnd).trim();
				else {
					cachedTransforms.translateX = inlineTransforms.substring(valueStart, c1).trim();
					if (c2 === -1) cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
					else {
						cachedTransforms.translateY = inlineTransforms.substring(c1 + 1, c2).trim();
						cachedTransforms.translateZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
					}
				}
				fullTranslateValue = inlineTransforms.substring(valueStart, valueEnd);
			} else if (name === "scale" || name === "scale3d") {
				if (c1 === -1) cachedTransforms.scale = inlineTransforms.substring(valueStart, valueEnd).trim();
				else {
					cachedTransforms.scaleX = inlineTransforms.substring(valueStart, c1).trim();
					if (c2 === -1) cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, valueEnd).trim();
					else {
						cachedTransforms.scaleY = inlineTransforms.substring(c1 + 1, c2).trim();
						cachedTransforms.scaleZ = inlineTransforms.substring(c2 + 1, valueEnd).trim();
					}
				}
			} else cachedTransforms[name] = inlineTransforms.substring(valueStart, valueEnd);
		}
		if (propName === "translate3d" && fullTranslateValue) {
			if (animationInlineStyles) animationInlineStyles[propName] = fullTranslateValue;
			return fullTranslateValue;
		}
		const cached = cachedTransforms[propName];
		if (!isUnd(cached)) {
			if (animationInlineStyles) animationInlineStyles[propName] = cached;
			return cached;
		}
	}
	return propName === "translate3d" ? "0px, 0px, 0px" : propName === "rotate3d" ? "0, 0, 0, 0deg" : stringStartsWith(propName, "scale") ? "1" : stringStartsWith(propName, "rotate") || stringStartsWith(propName, "skew") ? "0deg" : "0px";
};
/**
* Builds a CSS transform string from the target's cached transform properties.
* Iterates validTransforms in order (perspective > translate > rotate > scale > skew > matrix).
* When adjacent axis properties are all present, emits a shorter shorthand (translateX + translateY -> translate(x, y))
* The index is advanced past consumed properties so they are not emitted twice.
* Properties without a grouping partner (e.g. translateY alone, scaleZ alone) emit individually.
*
* @param  {Record<String, String>} props
* @return {String}
*/
var buildTransformString = (props) => {
	let str = "";
	for (let i = 0, l = validTransforms.length; i < l; i++) {
		const key = validTransforms[i];
		const val = props[key];
		if (val !== void 0) {
			if (key === "translateX") {
				const next = props.translateY;
				if (next !== void 0) {
					const next2 = props.translateZ;
					if (next2 !== void 0) {
						str += `translate3d(${val},${next},${next2}) `;
						i += 2;
					} else {
						str += `translate(${val},${next}) `;
						i += 1;
					}
					continue;
				}
			}
			if (key === "scaleX" && props.scale === void 0) {
				const next = props.scaleY;
				if (next !== void 0) {
					const next2 = props.scaleZ;
					if (next2 !== void 0) {
						str += `scale3d(${val},${next},${next2}) `;
						i += 2;
					} else {
						str += `scale(${val},${next}) `;
						i += 1;
					}
					continue;
				}
			}
			str += `${transformsFragmentStrings[key]}${val}) `;
		}
		if (key === "rotateZ") {
			if (props.rotate3d !== void 0) str += `rotate3d(${props.rotate3d}) `;
		}
	}
	if (props.matrix !== void 0) str += `matrix(${props.matrix}) `;
	if (props.matrix3d !== void 0) str += `matrix3d(${props.matrix3d}) `;
	return str;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/adapters/registry.js
/**
* Anime.js - adapters - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var adapters = [];
/**
* Internal resolution. Tries every Adapter's target adapters first (in registration order, first match wins), then every Adapter's property resolvers.
*
* @param {any} target
* @param {string} name
* @return {TargetAdapterEntry | null}
*/
function resolveAdapterEntry(target, name) {
	if (!target) return null;
	const al = adapters.length;
	outer: for (let i = 0; i < al; i++) {
		const a = adapters[i];
		if (a.detect && !a.detect(target)) continue;
		const tas = a.targetAdapters;
		for (let j = 0, m = tas.length; j < m; j++) {
			const ta = tas[j];
			if (ta.detect(target)) {
				const entry = ta.props[name];
				if (entry && (!entry.gate || entry.gate(target))) return entry;
				break outer;
			}
		}
	}
	for (let i = 0; i < al; i++) {
		const a = adapters[i];
		if (a.detect && !a.detect(target)) continue;
		const rs = a.propertyResolvers;
		for (let j = 0, m = rs.length; j < m; j++) {
			const entry = rs[j](target, name);
			if (entry) return entry;
		}
	}
	return null;
}
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/colors.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   ColorArray,
* } from '../types/index.js'
*/
/**
* RGB / RGBA Color value string -> RGBA values array
* @param  {String} rgbValue
* @return {ColorArray}
*/
var rgbToRgba = (rgbValue) => {
	const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
	const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
	return [
		+rgba[1],
		+rgba[2],
		+rgba[3],
		a
	];
};
/**
* HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
* @param  {String} hexValue
* @return {ColorArray}
*/
var hexToRgba = (hexValue) => {
	const hexLength = hexValue.length;
	const isShort = hexLength === 4 || hexLength === 5;
	return [
		+("0x" + hexValue[1] + hexValue[isShort ? 1 : 2]),
		+("0x" + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
		+("0x" + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
		hexLength === 5 || hexLength === 9 ? +(+("0x" + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1
	];
};
/**
* @param  {Number} p
* @param  {Number} q
* @param  {Number} t
* @return {Number}
*/
var hue2rgb = (p, q, t) => {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
};
/**
* HSL / HSLA Color value string -> RGBA values array
* @param  {String} hslValue
* @return {ColorArray}
*/
var hslToRgba = (hslValue) => {
	const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
	const h = +hsla[1] / 360;
	const s = +hsla[2] / 100;
	const l = +hsla[3] / 100;
	const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
	let r, g, b;
	if (s === 0) r = g = b = l;
	else {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
		g = round(hue2rgb(p, q, h) * 255, 0);
		b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
	}
	return [
		r,
		g,
		b,
		a
	];
};
/**
* All in one color converter that converts a color string value into an array of RGBA values
* @param  {String} colorString
* @return {ColorArray}
*/
var convertColorStringValuesToRgbaArray = (colorString) => {
	return isRgb(colorString) ? rgbToRgba(colorString) : isHex(colorString) ? hexToRgba(colorString) : isHsl(colorString) ? hslToRgba(colorString) : [
		0,
		0,
		0,
		1
	];
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/values.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Target,
*   DOMTarget,
*   Tween,
*   TweenPropValue,
*   TweenDecomposedValue,
*   TargetsArray,
* } from '../types/index.js'
*/
/**
* @template T, D
* @param {T|undefined} targetValue
* @param {D} defaultValue
* @return {T|D}
*/
var setValue = (targetValue, defaultValue) => {
	return isUnd(targetValue) ? defaultValue : targetValue;
};
/**
* Resolve against the target when it's a DOM element, otherwise fall back to :root so non-DOM targets like three.js meshes and custom adapters still pick up CSS variables defined on the document.
*
* @param  {String} value
* @param  {Target} target
* @return {String|Number}
*/
var resolveCssVar = (value, target) => {
	const match = value.match(cssVariableMatchRgx);
	const el = target[isDomSymbol] ? target : document.documentElement;
	let computed = getComputedStyle(el)?.getPropertyValue(match[1]);
	if ((!computed || computed.trim() === "") && match[2]) computed = match[2].trim();
	return computed || 0;
};
/**
* @param  {TweenPropValue} value
* @param  {Target} target
* @param  {Number} index
* @param  {TargetsArray} targets
* @param  {Object|null} store
* @param  {Tween|null} prevTween
* @return {any}
*/
var getFunctionValue = (value, target, index, targets, store, prevTween) => {
	if (isFnc(value)) {
		if (!store) {
			const computed = value(target, index, targets, prevTween);
			return !isNaN(+computed) ? +computed : computed || 0;
		}
		const func = () => {
			const computed = value(target, index, targets, prevTween);
			return !isNaN(+computed) ? +computed : computed || 0;
		};
		store.func = func;
		return func();
	}
	if (isStr(value) && stringStartsWith(value, "var(")) {
		if (!store) return resolveCssVar(value, target);
		const func = () => resolveCssVar(value, target);
		store.func = func;
		return func();
	}
	return value;
};
/**
* @param  {Target} target
* @param  {String} prop
* @return {tweenTypes}
*/
var getTweenType = (target, prop) => {
	return !target[isDomSymbol] ? tweenTypes.OBJECT : target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE : validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM : stringStartsWith(prop, "--") ? tweenTypes.CSS_VAR : prop in target.style ? tweenTypes.CSS : prop in target ? tweenTypes.OBJECT : tweenTypes.ATTRIBUTE;
};
/**
* @param  {DOMTarget} target
* @param  {String} propName
* @param  {Object} animationInlineStyles
* @return {String}
*/
var getCSSValue = (target, propName, animationInlineStyles) => {
	const inlineStyles = target.style[propName];
	if (inlineStyles && animationInlineStyles) animationInlineStyles[propName] = inlineStyles;
	const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
	return value === "auto" ? "0" : value;
};
/**
* @param {Target} target
* @param {String} propName
* @param {tweenTypes} [tweenType]
* @param {Object|void} [animationInlineStyles]
* @return {String|Number}
*/
var getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
	const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
	const adapterProp = resolveAdapterEntry(target, propName);
	if (adapterProp) {
		const value = adapterProp.get(target);
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value == null ? 0 : value;
	}
	if (type === tweenTypes.OBJECT) {
		const value = target[propName];
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value || 0;
	}
	if (type === tweenTypes.ATTRIBUTE) {
		const value = target.getAttribute(propName);
		if (value && animationInlineStyles) animationInlineStyles[propName] = value;
		return value;
	}
	return type === tweenTypes.TRANSFORM ? parseInlineTransforms(target, propName, animationInlineStyles) : type === tweenTypes.CSS_VAR ? getCSSValue(target, propName, animationInlineStyles).trimStart() : getCSSValue(target, propName, animationInlineStyles);
};
/**
* @param  {Number} x
* @param  {Number} y
* @param  {String} operator
* @return {Number}
*/
var getRelativeValue = (x, y, operator) => {
	return operator === "-" ? x - y : operator === "+" ? x + y : x * y;
};
/** @return {TweenDecomposedValue} */
var createDecomposedValueTargetObject = () => {
	return {
		/** @type {valueTypes} */
		t: valueTypes.NUMBER,
		n: 0,
		u: null,
		o: null,
		d: null,
		s: null
	};
};
/**
* @param  {String|Number|Object} rawValue
* @param  {TweenDecomposedValue} targetObject
* @return {TweenDecomposedValue}
*/
var decomposeRawValue = (rawValue, targetObject) => {
	/** @type {valueTypes} */
	targetObject.t = valueTypes.NUMBER;
	targetObject.n = 0;
	targetObject.u = null;
	targetObject.o = null;
	targetObject.d = null;
	targetObject.s = null;
	if (!rawValue) return targetObject;
	const num = +rawValue;
	if (!isNaN(num)) {
		targetObject.n = num;
		return targetObject;
	}
	let str = rawValue;
	if (str[1] === "=") {
		targetObject.o = str[0];
		str = str.slice(2);
	}
	const unitMatch = str.includes(" ") ? false : unitsExecRgx.exec(str);
	if (unitMatch) {
		targetObject.t = valueTypes.UNIT;
		targetObject.n = +unitMatch[1];
		targetObject.u = unitMatch[2];
		return targetObject;
	} else if (targetObject.o) {
		targetObject.n = +str;
		return targetObject;
	} else if (isCol(str)) {
		targetObject.t = valueTypes.COLOR;
		targetObject.d = convertColorStringValuesToRgbaArray(str);
		return targetObject;
	} else {
		const matchedNumbers = str.match(digitWithExponentRgx);
		targetObject.t = valueTypes.COMPLEX;
		targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
		targetObject.s = str.split(digitWithExponentRgx) || [];
		return targetObject;
	}
};
/**
* @param  {Tween} tween
* @param  {TweenDecomposedValue} targetObject
* @return {TweenDecomposedValue}
*/
var decomposeTweenValue = (tween, targetObject) => {
	targetObject.t = tween._valueType;
	targetObject.n = tween._toNumber;
	targetObject.u = tween._unit;
	targetObject.o = null;
	targetObject.d = cloneArray(tween._toNumbers);
	targetObject.s = cloneArray(tween._strings);
	return targetObject;
};
var decomposedOriginalValue = createDecomposedValueTargetObject();
/**
* @param  {Tween} tween
* @param  {Number} progress
* @param  {Number} precision
* @return {String}
*/
var composeComplexValue = (tween, progress, precision) => {
	const mod = tween._modifier;
	const fn = tween._fromNumbers;
	const tn = tween._toNumbers;
	const ts = tween._strings;
	let v = ts[0];
	for (let j = 0, l = tn.length; j < l; j++) {
		const n = mod(round(lerp(fn[j], tn[j], progress), precision));
		const s = ts[j + 1];
		v += `${s ? n + s : n}`;
		tween._numbers[j] = n;
	}
	return v;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/render.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   Renderable,
*   CallbackArgument,
*   Tween,
*   DOMTarget,
* } from '../types/index.js'
*/
/**
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
/**
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*/
/**
* @param  {Tickable} tickable
* @param  {Number} time
* @param  {Number} muteCallbacks
* @param  {Number} internalRender
* @param  {tickModes} tickMode
* @return {Number}
*/
var render = (tickable, time, muteCallbacks, internalRender, tickMode) => {
	const parent = tickable.parent;
	const duration = tickable.duration;
	const completed = tickable.completed;
	const iterationDuration = tickable.iterationDuration;
	const iterationCount = tickable.iterationCount;
	const _currentIteration = tickable._currentIteration;
	const _loopDelay = tickable._loopDelay;
	const _reversed = tickable._reversed;
	const _alternate = tickable._alternate;
	const _hasChildren = tickable._hasChildren;
	const tickableDelay = tickable._delay;
	const tickablePrevAbsoluteTime = tickable._currentTime;
	const tickableEndTime = tickableDelay + iterationDuration;
	const tickableAbsoluteTime = time - tickableDelay;
	const tickablePrevTime = clamp$1(tickablePrevAbsoluteTime, -tickableDelay, duration);
	const tickableCurrentTime = clamp$1(tickableAbsoluteTime, -tickableDelay, duration);
	const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
	const isCurrentTimeAboveZero = tickableCurrentTime > 0;
	const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
	const isSetter = duration <= minValue;
	const forcedTick = tickMode === tickModes.FORCE;
	let isOdd = 0;
	let iterationElapsedTime = tickableAbsoluteTime;
	let hasRendered = 0;
	if (iterationCount > 1) {
		const period = iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay);
		const currentIteration = ~~(tickableCurrentTime / period);
		tickable._currentIteration = clamp$1(currentIteration, 0, iterationCount);
		if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
		isOdd = tickable._currentIteration % 2;
		iterationElapsedTime = tickableCurrentTime - currentIteration * period || 0;
	}
	const isReversed = _reversed ^ (_alternate && isOdd);
	const _ease = tickable._ease;
	let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
	if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
	const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;
	tickable._currentTime = tickableAbsoluteTime;
	tickable._iterationTime = iterationTime;
	tickable.backwards = isRunningBackwards;
	if (isCurrentTimeAboveZero && !tickable.began) {
		tickable.began = true;
		if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) tickable.onBegin(tickable);
	} else if (tickableAbsoluteTime <= 0) tickable.began = false;
	if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) tickable.onLoop(tickable);
	if (forcedTick || tickMode === tickModes.AUTO && (time >= (parent && tickableDelay > 0 ? 0 : tickableDelay) && time <= tickableEndTime || time <= tickableDelay && tickablePrevTime > tickableDelay || time >= tickableEndTime && tickablePrevTime !== duration) || iterationTime >= tickableEndTime && tickablePrevTime !== duration || iterationTime <= tickableDelay && tickablePrevTime > 0 && !isCurrentTimeEqualOrAboveDuration || time <= tickablePrevTime && tickablePrevTime === duration && completed || isCurrentTimeEqualOrAboveDuration && !completed && isSetter) {
		if (isCurrentTimeAboveZero) {
			tickable.computeDeltaTime(tickablePrevTime);
			if (!muteCallbacks) tickable.onBeforeUpdate(tickable);
		}
		if (!_hasChildren) {
			const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
			const absoluteTime = round(tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime, 12);
			let tween = tickable._head;
			let tweenTarget;
			let tweenStyle;
			let tweenTargetTransforms;
			let tweenTargetTransformsProperties;
			let tweenTransformsNeedUpdate = 0;
			while (tween) {
				const tweenComposition = tween._composition;
				const tweenCurrentTime = tween._currentTime;
				const tweenChangeDuration = tween._changeDuration;
				const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
				const tweenNextRep = tween._nextRep;
				const tweenPrevRep = tween._prevRep;
				const tweenHasComposition = tweenComposition !== compositionTypes.none;
				const tweenPrevRepEndTime = tweenPrevRep ? tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration : 0;
				const tweenPrevRepIsCrossParent = tweenPrevRep && tweenPrevRep.parent !== tween.parent;
				const tweenNextRepTakeover = !tweenNextRep || tweenNextRep._isOverridden ? tweenAbsEndTime : tweenNextRep.parent === tween.parent ? tweenAbsEndTime + tweenNextRep._delay : tweenNextRep._absoluteStartTime < tweenNextRep._absoluteUpdateStartTime ? tweenNextRep._absoluteStartTime : tweenNextRep._absoluteUpdateStartTime;
				if ((forcedRender || (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenNextRepTakeover || tweenPrevRep && !tweenPrevRepIsCrossParent && (!tweenNextRep || tweenNextRep.parent !== tween.parent)) && (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime || tweenPrevRepIsCrossParent && !tween._hasFromValue && !tweenPrevRep._isOverridden && absoluteTime >= tweenPrevRepEndTime || tweenNextRep && !tweenNextRep._isOverridden && tweenNextRep.parent === tween.parent && tweenNextRep._currentTime !== 0 && iterationTime < tweenNextRep._startTime)) && (!tweenPrevRep || tweenPrevRepIsCrossParent || iterationTime >= tween._startTime) && (!tweenHasComposition || !tween._isOverridden && (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) && (!tweenNextRep || tweenNextRep._isOverridden || absoluteTime <= tweenNextRepTakeover) && (!tweenPrevRep || tweenPrevRep._isOverridden || (!tweenPrevRepIsCrossParent ? absoluteTime >= tweenPrevRepEndTime + tween._delay : absoluteTime >= tween._absoluteStartTime || !tween._hasFromValue && absoluteTime >= tweenPrevRepEndTime)))) {
					const tweenNewTime = tween._currentTime = clamp$1(iterationTime - tween._startTime, 0, tweenChangeDuration);
					const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
					const tweenModifier = tween._modifier;
					const tweenValueType = tween._valueType;
					const tweenType = tween._tweenType;
					const tweenIsObject = tweenType === tweenTypes.OBJECT;
					const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
					const tweenPrecision = tweenIsNumber && tweenIsObject || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;
					/** @type {String|Number} */
					let value;
					/** @type {Number} */
					let number;
					if (tweenIsNumber) value = number = tweenModifier(round(lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
					else if (tweenValueType === valueTypes.UNIT) {
						number = tweenModifier(round(lerp(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
						value = `${number}${tween._unit}`;
					} else if (tweenValueType === valueTypes.COLOR) {
						const ns = tween._numbers;
						const fn = tween._fromNumbers;
						const tn = tween._toNumbers;
						const omt = 1 - tweenProgress;
						const fr = fn[0], fg = fn[1], fb = fn[2];
						const tr = tn[0], tg = tn[1], tb = tn[2];
						ns[0] = tweenModifier(Math.sqrt(fr * fr * omt + tr * tr * tweenProgress));
						ns[1] = tweenModifier(Math.sqrt(fg * fg * omt + tg * tg * tweenProgress));
						ns[2] = tweenModifier(Math.sqrt(fb * fb * omt + tb * tb * tweenProgress));
						ns[3] = tweenModifier(lerp(fn[3], tn[3], tweenProgress));
						if (!tween._setter || internalRender) value = `rgba(${round(ns[0], 0)},${round(ns[1], 0)},${round(ns[2], 0)},${ns[3]})`;
					} else if (tweenValueType === valueTypes.COMPLEX) value = composeComplexValue(tween, tweenProgress, tweenPrecision);
					if (tweenHasComposition) tween._number = number;
					if (!internalRender && tweenComposition !== compositionTypes.blend) {
						const tweenProperty = tween.property;
						tweenTarget = tween.target;
						if (tween._setter) tween._setter(tweenTarget, number, tween);
						else if (tweenIsObject) tweenTarget[tweenProperty] = value;
						else if (tweenType === tweenTypes.ATTRIBUTE)
 /** @type {DOMTarget} */ tweenTarget.setAttribute(tweenProperty, value);
						else {
							tweenStyle = tweenTarget.style;
							if (tweenType === tweenTypes.TRANSFORM) {
								if (tweenTarget !== tweenTargetTransforms) {
									tweenTargetTransforms = tweenTarget;
									tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
								}
								tweenTargetTransformsProperties[tweenProperty] = value;
								tweenTransformsNeedUpdate = 1;
							} else if (tweenType === tweenTypes.CSS) tweenStyle[tweenProperty] = value;
							else if (tweenType === tweenTypes.CSS_VAR) tweenStyle.setProperty(tweenProperty, value);
						}
						if (isCurrentTimeAboveZero) hasRendered = 1;
					} else tween._value = value;
				} else if (tweenCurrentTime && tweenPrevRep && !tweenPrevRepIsCrossParent && iterationTime < tween._startTime) tween._currentTime = 0;
				if (tweenTransformsNeedUpdate && tween._renderTransforms) {
					tweenStyle.transform = buildTransformString(tweenTargetTransformsProperties);
					tweenTransformsNeedUpdate = 0;
				}
				tween = tween._next;
			}
			if (!muteCallbacks && hasRendered)
 /** @type {JSAnimation} */ tickable.onRender(tickable);
		}
		if (!muteCallbacks && isCurrentTimeAboveZero) tickable.onUpdate(tickable);
	}
	if (parent && isSetter) {
		if (!muteCallbacks && (parent.began && !isRunningBackwards && tickableAbsoluteTime > 0 && !completed || isRunningBackwards && tickableAbsoluteTime <= 1e-11 && completed)) {
			tickable.onComplete(tickable);
			tickable.completed = !isRunningBackwards;
		}
	} else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
		if (iterationCount === Infinity) tickable._startTime += tickable.duration;
		else if (tickable._currentIteration >= iterationCount - 1) {
			tickable.paused = true;
			if (!completed && !_hasChildren) {
				tickable.completed = true;
				if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
					tickable.onComplete(tickable);
					tickable._resolve(tickable);
				}
			}
		}
	} else tickable.completed = false;
	return hasRendered;
};
/**
* @param  {Tickable} tickable
* @param  {Number} time
* @param  {Number} muteCallbacks
* @param  {Number} internalRender
* @param  {Number} tickMode
* @return {void}
*/
var tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
	const _currentIteration = tickable._currentIteration;
	render(tickable, time, muteCallbacks, internalRender, tickMode);
	if (tickable._hasChildren) {
		const tl = tickable;
		const tlIsRunningBackwards = tl.backwards;
		const tlChildrenTime = internalRender ? time : tl._iterationTime;
		const tlCildrenTickTime = now();
		let tlChildrenHasRendered = 0;
		let tlChildrenHaveCompleted = true;
		if (!internalRender && tl._currentIteration !== _currentIteration) {
			const tlIterationDuration = tl.iterationDuration;
			forEachChildren(tl, (child) => {
				if (!tlIsRunningBackwards) {
					if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
					child.began = false;
					child.completed = false;
				} else {
					const childDuration = child.duration;
					const childStartTime = child._offset + child._delay;
					const childEndTime = childStartTime + childDuration;
					if (!muteCallbacks && childDuration <= 1e-11 && (!childStartTime || childEndTime === tlIterationDuration)) child.onComplete(child);
				}
			});
			if (!muteCallbacks) tl.onLoop(tl);
		}
		forEachChildren(tl, (child) => {
			const childTime = round((tlChildrenTime - child._offset) * child._speed, 12);
			if (tlIsRunningBackwards && childTime > child._delay + child.duration) return;
			const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
			tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
			if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
		}, tlIsRunningBackwards);
		if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(tl);
		if ((tlChildrenHaveCompleted || tlIsRunningBackwards) && tl._currentTime >= tl.duration) {
			tl.paused = true;
			if (!tl.completed) {
				tl.completed = true;
				if (!muteCallbacks) {
					tl.onComplete(tl);
					tl._resolve(tl);
				}
			}
		}
	}
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/styles.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
/**
* @import {
*   Target,
*   DOMTarget,
*   Renderable,
*   Tween,
* } from '../types/index.js'
*/
var propertyNamesCache = {};
/**
* @param  {String} propertyName
* @param  {Target} target
* @param  {tweenTypes} tweenType
* @return {String}
*/
var sanitizePropertyName = (propertyName, target, tweenType) => {
	if (tweenType === tweenTypes.TRANSFORM) {
		const t = shortTransforms.get(propertyName);
		return t ? t : propertyName;
	} else if (tweenType === tweenTypes.CSS || tweenType === tweenTypes.ATTRIBUTE && isSvg(target) && propertyName in target.style) {
		const cachedPropertyName = propertyNamesCache[propertyName];
		if (cachedPropertyName) return cachedPropertyName;
		else {
			const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
			propertyNamesCache[propertyName] = lowerCaseName;
			return lowerCaseName;
		}
	} else return propertyName;
};
/**
* @template {Renderable} T
* @param {T} renderable
* @param {Boolean} [inlineStylesOnly]
* @return {T}
*/
var revertValues = (renderable, inlineStylesOnly = false) => {
	if (renderable._hasChildren) forEachChildren(renderable, (child) => revertValues(child, inlineStylesOnly), true);
	else {
		const animation = renderable;
		animation.pause();
		forEachChildren(animation, (tween) => {
			const tweenProperty = tween.property;
			const tweenTarget = tween.target;
			const tweenType = tween._tweenType;
			const originalInlinedValue = tween._inlineValue;
			const tweenHadNoInlineValue = isNil(originalInlinedValue) || originalInlinedValue === "";
			if (tween._setter) {
				if (!inlineStylesOnly && !tweenHadNoInlineValue) {
					decomposeRawValue(originalInlinedValue, decomposedOriginalValue);
					if (decomposedOriginalValue.d) {
						const src = decomposedOriginalValue.d;
						const dst = tween._numbers;
						for (let i = 0, l = src.length; i < l; i++) dst[i] = src[i];
					} else tween._number = decomposedOriginalValue.n;
					tween._setter(tween.target, tween._number, tween);
				}
			} else if (tweenType === tweenTypes.OBJECT) {
				if (!inlineStylesOnly && !tweenHadNoInlineValue) tweenTarget[tweenProperty] = originalInlinedValue;
			} else if (tweenTarget[isDomSymbol]) {
				if (tweenType === tweenTypes.ATTRIBUTE) {
					if (!inlineStylesOnly) {
						if (tweenHadNoInlineValue)
 /** @type {DOMTarget} */ tweenTarget.removeAttribute(tweenProperty);
						else
 /** @type {DOMTarget} */ tweenTarget.setAttribute(tweenProperty, originalInlinedValue);
					}
				} else {
					const targetStyle = tweenTarget.style;
					if (tweenType === tweenTypes.TRANSFORM) {
						const cachedTransforms = tweenTarget[transformsSymbol];
						if (tweenHadNoInlineValue) delete cachedTransforms[tweenProperty];
						else cachedTransforms[tweenProperty] = originalInlinedValue;
						if (tween._renderTransforms) {
							if (!Object.keys(cachedTransforms).length) targetStyle.removeProperty("transform");
							else targetStyle.transform = buildTransformString(cachedTransforms);
						}
					} else if (tweenHadNoInlineValue) targetStyle.removeProperty(toLowerCase(tweenProperty));
					else targetStyle[tweenProperty] = originalInlinedValue;
				}
			}
			if (tweenTarget[isDomSymbol] && animation._tail === tween) animation.targets.forEach((t) => {
				if (t.getAttribute && t.getAttribute("style") === "") t.removeAttribute("style");
			});
		});
	}
	return renderable;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/clock.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   Tween,
* } from '../types/index.js'
*/
var Clock = class {
	/** @param {Number} [initTime] */
	constructor(initTime = 0) {
		/** @type {Number} */
		this.deltaTime = 0;
		/** @type {Number} */
		this._currentTime = initTime;
		/** @type {Number} */
		this._lastTickTime = initTime;
		/** @type {Number} */
		this._startTime = initTime;
		/** @type {Number} */
		this._lastTime = initTime;
		/** @type {Number} */
		this._frameDuration = K / 240;
		/** @type {Number} */
		this._fps = 240;
		/** @type {Number} */
		this._speed = 1;
		/** @type {Boolean} */
		this._hasChildren = false;
		/** @type {Tickable|Tween} */
		this._head = null;
		/** @type {Tickable|Tween} */
		this._tail = null;
	}
	get fps() {
		return this._fps;
	}
	set fps(frameRate) {
		const fr = +frameRate;
		const fps = fr < 1e-11 ? minValue : fr;
		const frameDuration = K / fps;
		if (fps > defaults.frameRate) defaults.frameRate = fps;
		this._fps = fps;
		this._frameDuration = frameDuration;
	}
	get speed() {
		return this._speed;
	}
	set speed(playbackRate) {
		const pbr = +playbackRate;
		this._speed = pbr < 1e-11 ? minValue : pbr;
	}
	/**
	* @param  {Number} time
	* @return {tickModes}
	*/
	requestTick(time) {
		const frameDuration = this._frameDuration;
		const elapsed = time - this._lastTickTime;
		const scaled = frameDuration * .25;
		if (elapsed + (scaled < 4 ? scaled : 4) < frameDuration) return tickModes.NONE;
		this._lastTickTime = elapsed >= frameDuration ? time - elapsed % frameDuration : time;
		return tickModes.AUTO;
	}
	/**
	* @param  {Number} time
	* @return {Number}
	*/
	computeDeltaTime(time) {
		const delta = time - this._lastTime;
		this.deltaTime = delta;
		this._lastTime = time;
		return delta;
	}
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/animation/additive.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var additive = {
	animation: null,
	update: noop
};
/**
* @import {
*   Tween,
*   TweenAdditiveLookups,
* } from '../types/index.js'
*/
/**
* @typedef AdditiveAnimation
* @property {Number} duration
* @property {Number} _offset
* @property {Number} _delay
* @property {Tween} _head
* @property {Tween} _tail
*/
/**
* @param  {TweenAdditiveLookups} lookups
* @return {AdditiveAnimation}
*/
var addAdditiveAnimation = (lookups) => {
	let animation = additive.animation;
	if (!animation) {
		animation = {
			duration: minValue,
			computeDeltaTime: noop,
			_offset: 0,
			_delay: 0,
			_head: null,
			_tail: null
		};
		additive.animation = animation;
		additive.update = () => {
			lookups.forEach((propertyAnimation) => {
				for (let propertyName in propertyAnimation) {
					const tweens = propertyAnimation[propertyName];
					const lookupTween = tweens._head;
					if (lookupTween) {
						const valueType = lookupTween._valueType;
						const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
						let additiveValue = lookupTween._fromNumber;
						let tween = tweens._tail;
						while (tween && tween !== lookupTween) {
							if (additiveValues) for (let i = 0, l = tween._numbers.length; i < l; i++) additiveValues[i] += tween._numbers[i];
							else additiveValue += tween._number;
							tween = tween._prevAdd;
						}
						lookupTween._toNumber = additiveValue;
						lookupTween._toNumbers = additiveValues;
					}
				}
			});
			render(animation, 1, 1, 0, tickModes.FORCE);
		};
	}
	return animation;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/engine/engine.js
/**
* Anime.js - engine - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DefaultsParams,
* } from '../types/index.js'
*/
/**
* @import {
*   Tickable,
* } from '../types/index.js'
*/
var engineTickMethod = /*#__PURE__*/ (() => isBrowser ? requestAnimationFrame : setImmediate)();
var engineCancelMethod = /*#__PURE__*/ (() => isBrowser ? cancelAnimationFrame : clearImmediate)();
var Engine = class extends Clock {
	/** @param {Number} [initTime] */
	constructor(initTime) {
		super(initTime);
		this.useDefaultMainLoop = true;
		this.pauseOnDocumentHidden = true;
		/** @type {DefaultsParams} */
		this.defaults = defaults;
		this.paused = true;
		/** @type {Number|NodeJS.Immediate} */
		this.reqId = 0;
	}
	update() {
		const time = this._currentTime = now();
		if (this.requestTick(time)) {
			this.computeDeltaTime(time);
			const engineSpeed = this._speed;
			const engineFps = this._fps;
			let activeTickable = this._head;
			while (activeTickable) {
				const nextTickable = activeTickable._next;
				if (!activeTickable.paused) tick(activeTickable, (time - activeTickable._startTime) * activeTickable._speed * engineSpeed, 0, 0, activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO);
				else {
					removeChild(this, activeTickable);
					this._hasChildren = !!this._tail;
					activeTickable._running = false;
					if (activeTickable.completed && !activeTickable._cancelled) activeTickable.cancel();
				}
				activeTickable = nextTickable;
			}
			additive.update();
		}
	}
	wake() {
		if (this.useDefaultMainLoop && !this.reqId) {
			this.requestTick(now());
			this.reqId = engineTickMethod(tickEngine);
		}
		return this;
	}
	pause() {
		if (!this.reqId) return;
		this.paused = true;
		return killEngine();
	}
	resume() {
		if (!this.paused) return;
		this.paused = false;
		forEachChildren(this, (child) => child.resetTime());
		return this.wake();
	}
	get speed() {
		return this._speed * (globals.timeScale === 1 ? 1 : K);
	}
	set speed(playbackRate) {
		const speed = playbackRate * globals.timeScale;
		if (this._speed === speed) return;
		this._speed = speed;
		forEachChildren(this, (child) => child.speed = child._speed);
	}
	get timeUnit() {
		return globals.timeScale === 1 ? "ms" : "s";
	}
	set timeUnit(unit) {
		const secondsScale = .001;
		const isSecond = unit === "s";
		const newScale = isSecond ? secondsScale : 1;
		if (globals.timeScale !== newScale) {
			globals.timeScale = newScale;
			globals.tickThreshold = 200 * newScale;
			const scaleFactor = isSecond ? secondsScale : K;
			/** @type {Number} */
			this.defaults.duration *= scaleFactor;
			this._speed *= scaleFactor;
		}
	}
	get precision() {
		return globals.precision;
	}
	set precision(precision) {
		globals.precision = precision;
	}
};
var engine = /*#__PURE__*/ (() => {
	const engine = new Engine(now());
	if (isBrowser) {
		globalVersions.engine = engine;
		doc.addEventListener("visibilitychange", () => {
			if (!engine.pauseOnDocumentHidden) return;
			doc.hidden ? engine.pause() : engine.resume();
		});
	}
	return engine;
})();
var tickEngine = () => {
	if (engine._head) {
		engine.reqId = engineTickMethod(tickEngine);
		engine.update();
	} else engine.reqId = 0;
};
var killEngine = () => {
	engineCancelMethod(engine.reqId);
	engine.reqId = 0;
	return engine;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/animation/composition.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   TweenReplaceLookups,
*   TweenAdditiveLookups,
*   TweenPropertySiblings,
*   Tween,
*   Target,
*   TargetsArray,
*   Renderable,
* } from '../types/index.js'
*
* @import {
*   JSAnimation,
* } from '../animation/animation.js'
*/
var lookups = {
	/** @type {TweenReplaceLookups} */
	_rep: /* @__PURE__ */ new WeakMap(),
	/** @type {TweenAdditiveLookups} */
	_add: /* @__PURE__ */ new Map()
};
/**
* @param  {Target} target
* @param  {String} property
* @param  {String} lookup
* @return {TweenPropertySiblings}
*/
var getTweenSiblings = (target, property, lookup = "_rep") => {
	const lookupMap = lookups[lookup];
	let targetLookup = lookupMap.get(target);
	if (!targetLookup) {
		targetLookup = {};
		lookupMap.set(target, targetLookup);
	}
	return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
		_head: null,
		_tail: null
	};
};
/**
* @param  {Tween} p
* @param  {Tween} c
* @return {Number|Boolean}
*/
var addTweenSortMethod = (p, c) => {
	return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};
/**
* @param {Tween} tween
*/
var overrideTween = (tween) => {
	tween._isOverlapped = 1;
	tween._isOverridden = 1;
	tween._changeDuration = minValue;
	tween._currentTime = minValue;
};
/**
* @param  {Tween} tween
* @param  {TweenPropertySiblings} siblings
* @return {Tween}
*/
var composeTween = (tween, siblings) => {
	const tweenCompositionType = tween._composition;
	if (tweenCompositionType === compositionTypes.replace) {
		const tweenAbsStartTime = tween._absoluteStartTime;
		addChild(siblings, tween, addTweenSortMethod, "_prevRep", "_nextRep");
		const prevSibling = tween._prevRep;
		if (prevSibling) {
			const prevParent = prevSibling.parent;
			const prevAbsEndTime = prevSibling._absoluteEndTime;
			if (tween.parent.id !== prevParent.id && prevParent.iterationCount > 1 && prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime) {
				overrideTween(prevSibling);
				let prevPrevSibling = prevSibling._prevRep;
				while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
					overrideTween(prevPrevSibling);
					prevPrevSibling = prevPrevSibling._prevRep;
				}
			}
			const absoluteUpdateStartTime = tween._absoluteUpdateStartTime;
			if (prevAbsEndTime > absoluteUpdateStartTime) {
				const prevChangeStartTime = prevSibling._startTime;
				const updatedPrevChangeDuration = round(absoluteUpdateStartTime - (prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration)) - prevChangeStartTime, 12);
				prevSibling._changeDuration = updatedPrevChangeDuration;
				prevSibling._currentTime = updatedPrevChangeDuration;
				prevSibling._isOverlapped = 1;
				if (updatedPrevChangeDuration < 1e-11) overrideTween(prevSibling);
			}
			const tweenParentTL = tween.parent.parent;
			if (!tweenParentTL || tweenParentTL !== prevParent.parent) {
				let pausePrevParentAnimation = true;
				forEachChildren(prevParent, (t) => {
					if (!t._isOverlapped) pausePrevParentAnimation = false;
				});
				if (pausePrevParentAnimation) {
					const prevParentTL = prevParent.parent;
					if (prevParentTL) {
						let pausePrevParentTL = true;
						forEachChildren(prevParentTL, (a) => {
							if (a !== prevParent) forEachChildren(a, (t) => {
								if (!t._isOverlapped) pausePrevParentTL = false;
							});
						});
						if (pausePrevParentTL) prevParentTL.cancel();
					} else prevParent.cancel();
				}
			}
		}
	} else if (tweenCompositionType === compositionTypes.blend) {
		const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, "_add");
		const additiveAnimation = addAdditiveAnimation(lookups._add);
		let lookupTween = additiveTweenSiblings._head;
		if (!lookupTween) {
			lookupTween = { ...tween };
			lookupTween._composition = compositionTypes.replace;
			lookupTween._updateDuration = minValue;
			lookupTween._startTime = 0;
			lookupTween._numbers = cloneArray(tween._fromNumbers);
			lookupTween._number = 0;
			lookupTween._next = null;
			lookupTween._prev = null;
			addChild(additiveTweenSiblings, lookupTween);
			addChild(additiveAnimation, lookupTween);
		}
		const toNumber = tween._toNumber;
		tween._fromNumber = lookupTween._fromNumber - toNumber;
		tween._toNumber = 0;
		tween._numbers = cloneArray(tween._fromNumbers);
		tween._number = 0;
		lookupTween._fromNumber = toNumber;
		if (tween._toNumbers.length) {
			const toNumbers = cloneArray(tween._toNumbers);
			toNumbers.forEach((value, i) => {
				tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
				tween._toNumbers[i] = 0;
			});
			lookupTween._fromNumbers = toNumbers;
		}
		addChild(additiveTweenSiblings, tween, null, "_prevAdd", "_nextAdd");
	}
	return tween;
};
/**
* @param  {Tween} tween
* @return {Tween}
*/
var removeTweenSliblings = (tween) => {
	const tweenComposition = tween._composition;
	if (tweenComposition !== compositionTypes.none) {
		const tweenTarget = tween.target;
		const tweenProperty = tween.property;
		const tweenReplaceSiblings = lookups._rep.get(tweenTarget)[tweenProperty];
		removeChild(tweenReplaceSiblings, tween, "_prevRep", "_nextRep");
		if (tweenComposition === compositionTypes.blend) {
			const addTweensLookup = lookups._add;
			const addTargetProps = addTweensLookup.get(tweenTarget);
			if (!addTargetProps) return;
			const additiveTweenSiblings = addTargetProps[tweenProperty];
			const additiveAnimation = additive.animation;
			removeChild(additiveTweenSiblings, tween, "_prevAdd", "_nextAdd");
			const lookupTween = additiveTweenSiblings._head;
			if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
				removeChild(additiveTweenSiblings, lookupTween, "_prevAdd", "_nextAdd");
				removeChild(additiveAnimation, lookupTween);
				let shouldClean = true;
				for (let prop in addTargetProps) if (addTargetProps[prop]._head) {
					shouldClean = false;
					break;
				}
				if (shouldClean) addTweensLookup.delete(tweenTarget);
			}
		}
	}
	return tween;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/timer/timer.js
/**
* Anime.js - timer - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Callback,
*   TimerParams,
*   Renderable,
*   Tween,
* } from '../types/index.js'
*/
/**
* @import {
*   ScrollObserver,
* } from '../events/scroll.js'
*/
/**
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*/
/**
* @param  {Timer} timer
* @return {Timer}
*/
var resetTimerProperties = (timer) => {
	timer.paused = true;
	timer.began = false;
	timer.completed = false;
	return timer;
};
/**
* @param  {Timer} timer
* @return {Timer}
*/
var reviveTimer = (timer) => {
	if (!timer._cancelled) return timer;
	if (timer._hasChildren) forEachChildren(timer, reviveTimer);
	else forEachChildren(timer, (tween) => {
		if (tween._composition !== compositionTypes.none) composeTween(tween, getTweenSiblings(tween.target, tween.property));
	});
	timer._cancelled = 0;
	return timer;
};
var timerId = 0;
/** @param {Timer} prev @param {Timer} child */
var sortByPriority = (prev, child) => prev._priority > child._priority;
/**
* Base class used to create Timers, Animations and Timelines
*/
var Timer = class extends Clock {
	/**
	* @param {TimerParams} [parameters]
	* @param {Timeline} [parent]
	* @param {Number} [parentPosition]
	*/
	constructor(parameters = {}, parent = null, parentPosition = 0) {
		super(0);
		++timerId;
		const { id, delay, duration, reversed, alternate, loop, loopDelay, autoplay, frameRate, playbackRate, priority, onComplete, onLoop, onPause, onBegin, onBeforeUpdate, onUpdate } = parameters;
		if (scope.current) scope.current.register(this);
		const timerInitTime = parent ? 0 : engine._lastTickTime;
		const timerDefaults = parent ? parent.defaults : globals.defaults;
		const timerDelay = isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay;
		const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
		const timerLoop = setValue(loop, timerDefaults.loop);
		const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
		let timerIterationCount = timerLoop === true || timerLoop === Infinity || timerLoop < 0 ? Infinity : 
		/** @type {Number} */ timerLoop + 1;
		let offsetPosition = 0;
		if (parent) offsetPosition = parentPosition;
		else {
			if (!engine.reqId) engine.requestTick(now());
			offsetPosition = (engine._lastTickTime - engine._startTime) * globals.timeScale;
		}
		/** @type {String|Number} */
		this.id = !isUnd(id) ? id : timerId;
		/** @type {Timeline} */
		this.parent = parent;
		this.duration = clampInfinity((timerDuration + timerLoopDelay) * timerIterationCount - timerLoopDelay) || 1e-11;
		/** @type {Boolean} */
		this.backwards = false;
		/** @type {Boolean} */
		this.paused = true;
		/** @type {Boolean} */
		this.began = false;
		/** @type {Boolean} */
		this.completed = false;
		/** @type {Callback<this>} */
		this.onBegin = onBegin || timerDefaults.onBegin;
		/** @type {Callback<this>} */
		this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
		/** @type {Callback<this>} */
		this.onUpdate = onUpdate || timerDefaults.onUpdate;
		/** @type {Callback<this>} */
		this.onLoop = onLoop || timerDefaults.onLoop;
		/** @type {Callback<this>} */
		this.onPause = onPause || timerDefaults.onPause;
		/** @type {Callback<this>} */
		this.onComplete = onComplete || timerDefaults.onComplete;
		/** @type {Number} */
		this.iterationDuration = timerDuration;
		/** @type {Number} */
		this.iterationCount = timerIterationCount;
		/** @type {Boolean|ScrollObserver} */
		this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
		/** @type {Number} */
		this._offset = offsetPosition;
		/** @type {Number} */
		this._delay = timerDelay;
		/** @type {Number} */
		this._loopDelay = timerLoopDelay;
		/** @type {Number} */
		this._iterationTime = 0;
		/** @type {Number} */
		this._currentIteration = 0;
		/** @type {Function} */
		this._resolve = noop;
		/** @type {Boolean} */
		this._running = false;
		/** @type {Number} */
		this._reversed = +setValue(reversed, timerDefaults.reversed);
		/** @type {Number} */
		this._reverse = this._reversed;
		/** @type {Number} */
		this._cancelled = 0;
		/** @type {Boolean} */
		this._alternate = setValue(alternate, timerDefaults.alternate);
		/** @type {Renderable} */
		this._prev = null;
		/** @type {Renderable} */
		this._next = null;
		/** @type {Number} */
		this._lastTickTime = timerInitTime;
		/** @type {Number} */
		this._startTime = timerInitTime;
		/** @type {Number} */
		this._lastTime = timerInitTime;
		/** @type {Number} */
		this._fps = setValue(frameRate, timerDefaults.frameRate);
		/** @type {Number} */
		this._speed = setValue(playbackRate, timerDefaults.playbackRate);
		/** @type {Number} */
		this._priority = +setValue(priority, 1);
	}
	get cancelled() {
		return !!this._cancelled;
	}
	set cancelled(cancelled) {
		cancelled ? this.cancel() : this.reset(true).play();
	}
	get currentTime() {
		return clamp$1(round(this._currentTime, globals.precision), -this._delay, this.duration);
	}
	set currentTime(time) {
		const paused = this.paused;
		this.pause().seek(+time);
		if (!paused) this.resume();
	}
	get iterationCurrentTime() {
		return clamp$1(round(this._iterationTime, globals.precision), 0, this.iterationDuration);
	}
	set iterationCurrentTime(time) {
		this.currentTime = this.iterationDuration * this._currentIteration + time;
	}
	get progress() {
		return clamp$1(round(this._currentTime / this.duration, 10), 0, 1);
	}
	set progress(progress) {
		this.currentTime = this.duration * progress;
	}
	get iterationProgress() {
		return clamp$1(round(this._iterationTime / this.iterationDuration, 10), 0, 1);
	}
	set iterationProgress(progress) {
		const iterationDuration = this.iterationDuration;
		this.currentTime = iterationDuration * this._currentIteration + iterationDuration * progress;
	}
	get currentIteration() {
		return this._currentIteration;
	}
	set currentIteration(iterationCount) {
		this.currentTime = this.iterationDuration * clamp$1(+iterationCount, 0, this.iterationCount - 1);
	}
	get reversed() {
		return !!this._reversed;
	}
	set reversed(reverse) {
		reverse ? this.reverse() : this.play();
	}
	get speed() {
		return super.speed;
	}
	set speed(playbackRate) {
		super.speed = playbackRate;
		this.resetTime();
	}
	/**
	* @param  {Boolean} [softReset]
	* @return {this}
	*/
	reset(softReset = false) {
		reviveTimer(this);
		if (this._reversed && !this._reverse) this.reversed = false;
		this._iterationTime = this.iterationDuration;
		tick(this, 0, 1, ~~softReset, tickModes.FORCE);
		resetTimerProperties(this);
		if (this._hasChildren) forEachChildren(this, resetTimerProperties);
		return this;
	}
	/**
	* @param  {Boolean} internalRender
	* @return {this}
	*/
	init(internalRender = false) {
		this.fps = this._fps;
		this.speed = this._speed;
		if (!internalRender && this._hasChildren) tick(this, this.duration, 1, ~~internalRender, tickModes.FORCE);
		this.reset(internalRender);
		const autoplay = this._autoplay;
		if (autoplay === true) this.resume();
		else if (autoplay && !isUnd(
			/** @type {ScrollObserver} */
			autoplay.linked
		))
 /** @type {ScrollObserver} */ autoplay.link(this);
		return this;
	}
	/** @return {this} */
	resetTime() {
		const timeScale = 1 / (this._speed * engine._speed);
		this._startTime = now() - (this._currentTime + this._delay) * timeScale;
		return this;
	}
	/** @return {this} */
	pause() {
		if (this.paused) return this;
		this.paused = true;
		this.onPause(this);
		return this;
	}
	/** @return {this} */
	resume() {
		if (!this.paused) return this;
		this.paused = false;
		if (this.duration <= 1e-11 && !this._hasChildren) tick(this, minValue, 0, 0, tickModes.FORCE);
		else {
			if (!this._running) {
				addChild(engine, this, sortByPriority);
				engine._hasChildren = true;
				this._running = true;
			}
			this.resetTime();
			this._startTime -= 12;
			engine.wake();
		}
		return this;
	}
	/** @return {this} */
	restart() {
		return this.reset().resume();
	}
	/**
	* @param  {Number} time
	* @param  {Boolean|Number} [muteCallbacks]
	* @param  {Boolean|Number} [internalRender]
	* @return {this}
	*/
	seek(time, muteCallbacks = 0, internalRender = 0) {
		reviveTimer(this);
		this.completed = false;
		const isPaused = this.paused;
		this.paused = true;
		tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
		return isPaused ? this : this.resume();
	}
	/** @return {this} */
	alternate() {
		const reversed = this._reversed;
		const count = this.iterationCount;
		const duration = this.iterationDuration;
		const iterations = count === Infinity ? floor(maxValue / duration) : count;
		this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
		if (count === Infinity) this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
		else this.seek(duration * iterations - this._currentTime);
		this.resetTime();
		return this;
	}
	/** @return {this} */
	play() {
		if (this._reversed) this.alternate();
		return this.resume();
	}
	/** @return {this} */
	reverse() {
		if (!this._reversed) this.alternate();
		return this.resume();
	}
	/** @return {this} */
	cancel() {
		if (this._hasChildren) forEachChildren(this, (child) => child.cancel(), true);
		else forEachChildren(this, removeTweenSliblings);
		this._cancelled = 1;
		return this.pause();
	}
	/**
	* @param  {Number} newDuration
	* @return {this}
	*/
	stretch(newDuration) {
		const currentDuration = this.duration;
		const normlizedDuration = normalizeTime(newDuration);
		if (currentDuration === normlizedDuration) return this;
		const timeScale = newDuration / currentDuration;
		const isSetter = newDuration <= minValue;
		this.duration = isSetter ? minValue : normlizedDuration;
		this.iterationDuration = isSetter ? minValue : normalizeTime(this.iterationDuration * timeScale);
		this._offset *= timeScale;
		this._delay *= timeScale;
		this._loopDelay *= timeScale;
		return this;
	}
	/**
	* Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
	* @return {this}
	*/
	revert() {
		tick(this, 0, 1, 0, tickModes.AUTO);
		const ap = this._autoplay;
		if (ap && ap.linked && ap.linked === this) ap.revert();
		return this.cancel();
	}
	/**
	* Imediatly completes the timer, cancels it and triggers the onComplete callback
	* @param  {Boolean|Number} [muteCallbacks]
	* @return {this}
	*/
	complete(muteCallbacks = 0) {
		return this.seek(this.duration, muteCallbacks).cancel();
	}
	/**
	* @typedef {this & {then: null}} ResolvedTimer
	*/
	/**
	* @param  {Callback<ResolvedTimer>} [callback]
	* @return Promise<this>
	*/
	then(callback = noop) {
		const then = this.then;
		const onResolve = () => {
			this.then = null;
			callback(this);
			this.then = then;
			this._resolve = noop;
		};
		return new Promise((r) => {
			this._resolve = () => r(onResolve());
			if (this.completed) this._resolve();
			return this;
		});
	}
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/targets.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   DOMTarget,
*   DOMTargetsParam,
*   JSTargetsArray,
*   TargetsParam,
*   JSTargetsParam,
*   TargetsArray,
*   DOMTargetsArray,
* } from '../types/index.js'
*/
/**
* @param  {DOMTargetsParam|TargetsParam} v
* @return {NodeList|HTMLCollection}
*/
function getNodeList(v) {
	const n = isStr(v) ? scope.root.querySelectorAll(v) : v;
	if (n instanceof NodeList || n instanceof HTMLCollection) return n;
}
/**
* @overload
* @param  {DOMTargetsParam} targets
* @return {DOMTargetsArray}
*
* @overload
* @param  {JSTargetsParam} targets
* @return {JSTargetsArray}
*
* @overload
* @param  {TargetsParam} targets
* @return {TargetsArray}
*
* @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
*/
function parseTargets(targets) {
	if (isNil(targets)) return [];
	if (!isBrowser) return isArr(targets) && targets.flat(Infinity) || [targets];
	if (isArr(targets)) {
		const flattened = targets.flat(Infinity);
		/** @type {TargetsArray} */
		const parsed = [];
		for (let i = 0, l = flattened.length; i < l; i++) {
			const item = flattened[i];
			if (!isNil(item)) {
				const nodeList = getNodeList(item);
				if (nodeList) for (let j = 0, jl = nodeList.length; j < jl; j++) {
					const subItem = nodeList[j];
					if (!isNil(subItem)) {
						let isDuplicate = false;
						for (let k = 0, kl = parsed.length; k < kl; k++) if (parsed[k] === subItem) {
							isDuplicate = true;
							break;
						}
						if (!isDuplicate) parsed.push(subItem);
					}
				}
				else {
					let isDuplicate = false;
					for (let j = 0, jl = parsed.length; j < jl; j++) if (parsed[j] === item) {
						isDuplicate = true;
						break;
					}
					if (!isDuplicate) parsed.push(item);
				}
			}
		}
		return parsed;
	}
	const nodeList = getNodeList(targets);
	if (nodeList) return Array.from(nodeList);
	return [targets];
}
/**
* @overload
* @param  {DOMTargetsParam} targets
* @return {DOMTargetsArray}
*
* @overload
* @param  {JSTargetsParam} targets
* @return {JSTargetsArray}
*
* @overload
* @param  {TargetsParam} targets
* @return {TargetsArray}
*
* @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
*/
function registerTargets(targets) {
	const parsedTargetsArray = parseTargets(targets);
	const parsedTargetsLength = parsedTargetsArray.length;
	for (let i = 0; i < parsedTargetsLength; i++) {
		const target = parsedTargetsArray[i];
		if (!target[isRegisteredTargetSymbol]) {
			target[isRegisteredTargetSymbol] = true;
			const isSvgType = isSvg(target);
			if (target.nodeType || isSvgType) {
				target[isDomSymbol] = true;
				target[isSvgSymbol] = isSvgType;
				target[transformsSymbol] = {};
			}
		}
	}
	return parsedTargetsArray;
}
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/core/units.js
/**
* Anime.js - core - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
var angleUnitsMap = {
	"deg": 1,
	"rad": 180 / PI,
	"turn": 360
};
var convertedValuesCache = {};
/**
* @import {
*   DOMTarget,
*   TweenDecomposedValue,
* } from '../types/index.js'
*/
/**
* @param  {DOMTarget} el
* @param  {TweenDecomposedValue} decomposedValue
* @param  {String} unit
* @param  {Boolean} [force]
* @return {TweenDecomposedValue}
*/
var convertValueUnit = (el, decomposedValue, unit, force = false) => {
	const currentUnit = decomposedValue.u;
	const currentNumber = decomposedValue.n;
	if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) return decomposedValue;
	const cachedKey = currentNumber + currentUnit + unit;
	const cached = convertedValuesCache[cachedKey];
	if (!isUnd(cached) && !force) decomposedValue.n = cached;
	else {
		let convertedValue;
		if (currentUnit in angleUnitsMap) convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
		else {
			const baseline = 100;
			const tempEl = el.cloneNode();
			const parentNode = el.parentNode;
			const parentEl = parentNode && parentNode !== doc ? parentNode : doc.body;
			parentEl.appendChild(tempEl);
			const elStyle = tempEl.style;
			elStyle.width = baseline + currentUnit;
			const currentUnitWidth = tempEl.offsetWidth || baseline;
			elStyle.width = baseline + unit;
			const factor = currentUnitWidth / (tempEl.offsetWidth || baseline);
			parentEl.removeChild(tempEl);
			convertedValue = factor * currentNumber;
		}
		decomposedValue.n = convertedValue;
		convertedValuesCache[cachedKey] = convertedValue;
	}
	decomposedValue.t, valueTypes.UNIT;
	decomposedValue.u = unit;
	return decomposedValue;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/easings/none.js
/**
* Anime.js - easings - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   EasingFunction,
* } from '../types/index.js'
*/
/** @type {EasingFunction} */
var none = (t) => t;
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/easings/eases/parser.js
/**
* Anime.js - easings - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   EasingFunction,
*   EasingFunctionWithParams,
*   EasingParam,
*   BackEasing,
*   ElasticEasing,
*   PowerEasing,
* } from '../../types/index.js'
*/
/** @type {PowerEasing} */
var easeInPower = (p = 1.68) => (t) => pow(t, +p);
/**
* @callback EaseType
* @param {EasingFunction} Ease
* @return {EasingFunction}
*/
/** @type {Record<String, EaseType>} */
var easeTypes = {
	in: (easeIn) => (t) => easeIn(t),
	out: (easeIn) => (t) => 1 - easeIn(1 - t),
	inOut: (easeIn) => (t) => t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
	outIn: (easeIn) => (t) => t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2
};
/**
* Easing functions adapted and simplified from https://robertpenner.com/easing/
* (c) 2001 Robert Penner
*/
var halfPI = PI / 2;
var doublePI = PI * 2;
/** @type {Record<String, EasingFunctionWithParams|EasingFunction>} */
var easeInFunctions = {
	[""]: easeInPower,
	Quad: easeInPower(2),
	Cubic: easeInPower(3),
	Quart: easeInPower(4),
	Quint: easeInPower(5),
	/** @type {EasingFunction} */
	Sine: (t) => 1 - cos(t * halfPI),
	/** @type {EasingFunction} */
	Circ: (t) => 1 - sqrt(1 - t * t),
	/** @type {EasingFunction} */
	Expo: (t) => t ? pow(2, 10 * t - 10) : 0,
	/** @type {EasingFunction} */
	Bounce: (t) => {
		let pow2, b = 4;
		while (t < ((pow2 = pow(2, --b)) - 1) / 11);
		return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
	},
	/** @type {BackEasing} */
	Back: (overshoot = 1.7) => (t) => (+overshoot + 1) * t * t * t - +overshoot * t * t,
	/** @type {ElasticEasing} */
	Elastic: (amplitude = 1, period = .3) => {
		const a = clamp$1(+amplitude, 1, 10);
		const p = clamp$1(+period, minValue, 2);
		const s = p / doublePI * asin(1 / a);
		const e = doublePI / p;
		return (t) => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin((1 - t - s) * e);
	}
};
/**
* @typedef  {Object} EasesFunctions
* @property {EasingFunction} linear
* @property {EasingFunction} none
* @property {PowerEasing} in
* @property {PowerEasing} out
* @property {PowerEasing} inOut
* @property {PowerEasing} outIn
* @property {EasingFunction} inQuad
* @property {EasingFunction} outQuad
* @property {EasingFunction} inOutQuad
* @property {EasingFunction} outInQuad
* @property {EasingFunction} inCubic
* @property {EasingFunction} outCubic
* @property {EasingFunction} inOutCubic
* @property {EasingFunction} outInCubic
* @property {EasingFunction} inQuart
* @property {EasingFunction} outQuart
* @property {EasingFunction} inOutQuart
* @property {EasingFunction} outInQuart
* @property {EasingFunction} inQuint
* @property {EasingFunction} outQuint
* @property {EasingFunction} inOutQuint
* @property {EasingFunction} outInQuint
* @property {EasingFunction} inSine
* @property {EasingFunction} outSine
* @property {EasingFunction} inOutSine
* @property {EasingFunction} outInSine
* @property {EasingFunction} inCirc
* @property {EasingFunction} outCirc
* @property {EasingFunction} inOutCirc
* @property {EasingFunction} outInCirc
* @property {EasingFunction} inExpo
* @property {EasingFunction} outExpo
* @property {EasingFunction} inOutExpo
* @property {EasingFunction} outInExpo
* @property {EasingFunction} inBounce
* @property {EasingFunction} outBounce
* @property {EasingFunction} inOutBounce
* @property {EasingFunction} outInBounce
* @property {BackEasing} inBack
* @property {BackEasing} outBack
* @property {BackEasing} inOutBack
* @property {BackEasing} outInBack
* @property {ElasticEasing} inElastic
* @property {ElasticEasing} outElastic
* @property {ElasticEasing} inOutElastic
* @property {ElasticEasing} outInElastic
*/
var eases = /*#__PURE__ */ (() => {
	const list = {
		linear: none,
		none
	};
	for (let type in easeTypes) for (let name in easeInFunctions) {
		const easeIn = easeInFunctions[name];
		const easeType = easeTypes[type];
		list[type + name] = name === "" || name === "Back" || name === "Elastic" ? (a, b) => easeType(
			/** @type {EasingFunctionWithParams} */
			easeIn(a, b)
		) : easeType(easeIn);
	}
	return list;
})();
/** @type {Record<String, EasingFunction>} */
var easesLookups = {
	linear: none,
	none
};
/**
* @param  {String} string
* @return {EasingFunction}
*/
var parseEaseString = (string) => {
	if (easesLookups[string]) return easesLookups[string];
	if (string.indexOf("(") <= -1) {
		const parsedFn = easeTypes[string] || string.includes("Back") || string.includes("Elastic") ? eases[string]() : eases[string];
		return parsedFn ? easesLookups[string] = parsedFn : none;
	} else {
		const split = string.slice(0, -1).split("(");
		const parsedFn = eases[split[0]];
		return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(",")) : none;
	}
};
var deprecated = [
	"steps(",
	"irregular(",
	"linear(",
	"cubicBezier("
];
/**
* @param  {EasingParam} ease
* @return {EasingFunction}
*/
var parseEase = (ease) => {
	if (isStr(ease)) {
		for (let i = 0, l = deprecated.length; i < l; i++) if (stringStartsWith(ease, deprecated[i])) {
			console.warn(`String syntax for \`ease: "${ease}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${ease}\``);
			return none;
		}
	}
	return isFnc(ease) ? ease : isStr(ease) ? parseEaseString(ease) : none;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/animation/animation.js
/**
* Anime.js - animation - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tween,
*   TweenKeyValue,
*   TweenParamsOptions,
*   TweenValues,
*   DurationKeyframes,
*   PercentageKeyframes,
*   AnimationParams,
*   TweenPropValue,
*   ArraySyntaxValue,
*   TargetsParam,
*   TimerParams,
*   TweenParamValue,
*   DOMTarget,
*   TargetsArray,
*   Callback,
*   EasingFunction,
* } from '../types/index.js'
*
* @import {
*   Timeline,
* } from '../timeline/timeline.js'
*
* @import {
*   Spring,
* } from '../easings/spring/index.js'
*/
var fromTargetObject = createDecomposedValueTargetObject();
var toTargetObject = createDecomposedValueTargetObject();
var inlineStylesStore = {};
var toFunctionStore = { func: null };
var fromFunctionStore = { func: null };
var keyframesTargetArray = [null];
var fastSetValuesArray = [null, null];
/** @type {TweenKeyValue} */
var keyObjectTarget = { to: null };
var tweenId = 0;
var JSAnimationId = 0;
var keyframes;
/** @type {TweenParamsOptions & TweenValues} */
var key;
/**
* @param {DurationKeyframes | PercentageKeyframes} keyframes
* @param {AnimationParams} parameters
* @return {AnimationParams}
*/
var generateKeyframes = (keyframes, parameters) => {
	/** @type {AnimationParams} */
	const properties = {};
	if (isArr(keyframes)) {
		const propertyNames = [].concat(...keyframes.map((key) => Object.keys(key))).filter(isKey);
		for (let i = 0, l = propertyNames.length; i < l; i++) {
			const propName = propertyNames[i];
			properties[propName] = keyframes.map((key) => {
				/** @type {TweenKeyValue} */
				const newKey = {};
				for (let p in key) {
					const keyValue = key[p];
					if (isKey(p)) {
						if (p === propName) newKey.to = keyValue;
					} else newKey[p] = keyValue;
				}
				return newKey;
			});
		}
	} else {
		const totalDuration = setValue(parameters.duration, globals.defaults.duration);
		Object.keys(keyframes).map((key) => {
			return {
				o: parseFloat(key) / 100,
				p: keyframes[key]
			};
		}).sort((a, b) => a.o - b.o).forEach((key) => {
			const offset = key.o;
			const prop = key.p;
			for (let name in prop) if (isKey(name)) {
				let propArray = properties[name];
				if (!propArray) propArray = properties[name] = [];
				const duration = offset * totalDuration;
				let length = propArray.length;
				let prevKey = propArray[length - 1];
				const keyObj = { to: prop[name] };
				let durProgress = 0;
				for (let i = 0; i < length; i++) durProgress += propArray[i].duration;
				if (length === 1) keyObj.from = prevKey.to;
				if (prop.ease) keyObj.ease = prop.ease;
				keyObj.duration = duration - (length ? durProgress : 0);
				propArray.push(keyObj);
			}
			return key;
		});
		for (let name in properties) {
			const propArray = properties[name];
			let prevEase;
			for (let i = 0, l = propArray.length; i < l; i++) {
				const prop = propArray[i];
				const currentEase = prop.ease;
				prop.ease = prevEase ? prevEase : void 0;
				prevEase = currentEase;
			}
			if (!propArray[0].duration) propArray.shift();
		}
	}
	return properties;
};
var JSAnimation = class extends Timer {
	/**
	* @param {TargetsParam} targets
	* @param {AnimationParams} parameters
	* @param {Timeline} [parent]
	* @param {Number} [parentPosition]
	* @param {Boolean} [fastSet=false]
	* @param {Number} [index=0]
	* @param {TargetsArray} [allTargets]
	*/
	constructor(targets, parameters, parent, parentPosition, fastSet = false, index = 0, allTargets) {
		super(parameters, parent, parentPosition);
		/** @type {Tween} */
		this._head;
		/** @type {Tween} */
		this._tail;
		++JSAnimationId;
		const parsedTargets = registerTargets(targets);
		const targetsLength = parsedTargets.length;
		const kfParams = parameters.keyframes;
		const params = kfParams ? mergeObjects(generateKeyframes(kfParams, parameters), parameters) : parameters;
		const { id, delay, duration, ease, playbackEase, modifier, composition, onRender } = params;
		const animDefaults = parent ? parent.defaults : globals.defaults;
		const animEase = setValue(ease, animDefaults.ease);
		const animPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
		const parsedAnimPlaybackEase = animPlaybackEase ? parseEase(animPlaybackEase) : null;
		const hasSpring = !isUnd(
			/** @type {Spring} */
			animEase.ease
		);
		const tEasing = hasSpring ? animEase.ease : setValue(ease, parsedAnimPlaybackEase ? "linear" : animDefaults.ease);
		const tDuration = hasSpring ? animEase.settlingDuration : setValue(duration, animDefaults.duration);
		const tDelay = setValue(delay, animDefaults.delay);
		const tModifier = modifier || animDefaults.modifier;
		const tComposition = isUnd(composition) && targetsLength >= 1e3 ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
		const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);
		if (hasSpring) /** @type {Spring} */ animEase.parent = this;
		let iterationDuration = NaN;
		let iterationDelay = NaN;
		let animationAnimationLength = 0;
		let shouldTriggerRender = 0;
		for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {
			const target = parsedTargets[targetIndex];
			const ti = index || targetIndex;
			const tl = allTargets || parsedTargets;
			let lastTransformGroupIndex = NaN;
			let lastTransformGroupLength = NaN;
			for (let p in params) if (isKey(p)) {
				const tweenType = getTweenType(target, p);
				const adapterProp = resolveAdapterEntry(target, p);
				const propName = sanitizePropertyName(p, target, tweenType);
				let propValue = params[p];
				const isPropValueArray = isArr(propValue);
				if (fastSet && !isPropValueArray) {
					fastSetValuesArray[0] = propValue;
					fastSetValuesArray[1] = propValue;
					propValue = fastSetValuesArray;
				}
				if (isPropValueArray) {
					const arrayLength = propValue.length;
					const isNotObjectValue = !isObj(propValue[0]);
					if (arrayLength === 2 && isNotObjectValue) {
						keyObjectTarget.to = propValue;
						keyframesTargetArray[0] = keyObjectTarget;
						keyframes = keyframesTargetArray;
					} else if (arrayLength > 2 && isNotObjectValue) {
						keyframes = [];
						/** @type {Array.<Number>} */ propValue.forEach((v, i) => {
							if (!i) fastSetValuesArray[0] = v;
							else if (i === 1) {
								fastSetValuesArray[1] = v;
								keyframes.push(fastSetValuesArray);
							} else keyframes.push(v);
						});
					} else keyframes = propValue;
				} else {
					keyframesTargetArray[0] = propValue;
					keyframes = keyframesTargetArray;
				}
				let siblings = null;
				let prevTween = null;
				let firstTweenChangeStartTime = NaN;
				let lastTweenChangeEndTime = 0;
				let tweenIndex = 0;
				for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {
					const keyframe = keyframes[tweenIndex];
					if (isObj(keyframe)) key = keyframe;
					else {
						keyObjectTarget.to = keyframe;
						key = keyObjectTarget;
					}
					toFunctionStore.func = null;
					fromFunctionStore.func = null;
					const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl, null, null);
					const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
					if (!siblings && tweenComposition !== compositionTypes.none) siblings = getTweenSiblings(target, propName);
					const tailTween = siblings ? siblings._tail : null;
					const prevSiblingTween = parent && tailTween && tailTween.parent.parent === parent ? tailTween : prevTween;
					const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore, prevSiblingTween);
					let tweenToValue;
					if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
						key = computedToValue;
						tweenToValue = computedToValue.to;
					} else tweenToValue = computedToValue;
					const tweenFromValue = getFunctionValue(key.from, target, ti, tl, fromFunctionStore, prevSiblingTween);
					const easeToParse = key.ease || tEasing;
					const easeFunctionResult = getFunctionValue(easeToParse, target, ti, tl, null, prevSiblingTween);
					const keyEasing = isFnc(easeFunctionResult) || isStr(easeFunctionResult) ? easeFunctionResult : easeToParse;
					const hasSpring = !isUnd(keyEasing) && !isUnd(
						/** @type {Spring} */
						keyEasing.ease
					);
					const tweenEasing = hasSpring ? keyEasing.ease : keyEasing;
					const tweenDuration = hasSpring ? keyEasing.settlingDuration : getFunctionValue(setValue(key.duration, l > 1 ? getFunctionValue(tDuration, target, ti, tl, null, prevSiblingTween) / l : tDuration), target, ti, tl, null, prevSiblingTween);
					const tweenDelay = getFunctionValue(setValue(key.delay, !tweenIndex ? tDelay : 0), target, ti, tl, null, prevSiblingTween);
					const tweenModifier = key.modifier || tModifier;
					const hasFromvalue = !isUnd(tweenFromValue);
					const hasToValue = !isUnd(tweenToValue);
					const isFromToArray = isArr(tweenToValue);
					const isFromToValue = isFromToArray || hasFromvalue && hasToValue;
					const tweenUpdateStartLocal = prevTween ? lastTweenChangeEndTime : 0;
					const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
					const absoluteStartTime = round(absoluteOffsetTime + tweenStartTime, 12);
					const absoluteUpdateStartTime = round(absoluteOffsetTime + tweenUpdateStartLocal, 12);
					if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;
					let prevSibling = prevTween;
					if (tweenComposition !== compositionTypes.none) {
						let nextSibling = siblings._head;
						while (nextSibling && nextSibling._absoluteStartTime <= absoluteStartTime) {
							if (!nextSibling._isOverridden) prevSibling = nextSibling;
							nextSibling = nextSibling._nextRep;
							if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) while (nextSibling) {
								overrideTween(nextSibling);
								nextSibling = nextSibling._nextRep;
							}
						}
					}
					if (isFromToValue) {
						decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl, fromFunctionStore, prevSiblingTween) : tweenFromValue, fromTargetObject);
						decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore, prevSiblingTween) : tweenToValue, toTargetObject);
						const originalValue = getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore);
						if (fromTargetObject.t === valueTypes.NUMBER) {
							if (prevSibling) {
								if (prevSibling._valueType === valueTypes.UNIT) {
									fromTargetObject.t = valueTypes.UNIT;
									fromTargetObject.u = prevSibling._unit;
								}
							} else {
								decomposeRawValue(originalValue, decomposedOriginalValue);
								if (decomposedOriginalValue.t === valueTypes.UNIT) {
									fromTargetObject.t = valueTypes.UNIT;
									fromTargetObject.u = decomposedOriginalValue.u;
								}
							}
						}
					} else {
						if (hasToValue) decomposeRawValue(tweenToValue, toTargetObject);
						else if (prevTween) decomposeTweenValue(prevTween, toTargetObject);
						else decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), toTargetObject);
						if (hasFromvalue) decomposeRawValue(tweenFromValue, fromTargetObject);
						else if (prevTween) decomposeTweenValue(prevTween, fromTargetObject);
						else decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), fromTargetObject);
					}
					if (fromTargetObject.o) fromTargetObject.n = getRelativeValue(!prevSibling ? decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, inlineStylesStore), decomposedOriginalValue).n : prevSibling._toNumber, fromTargetObject.n, fromTargetObject.o);
					if (toTargetObject.o) toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
					if (fromTargetObject.t !== toTargetObject.t) {
						if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
							const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
							const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
							notComplexValue.t = valueTypes.COMPLEX;
							notComplexValue.s = cloneArray(complexValue.s);
							notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
						} else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
							const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
							const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
							notUnitValue.t = valueTypes.UNIT;
							notUnitValue.u = unitValue.u;
						} else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
							const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
							const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
							notColorValue.t = valueTypes.COLOR;
							notColorValue.d = colorValue.d.map(() => 0);
						}
					}
					if (fromTargetObject.u !== toTargetObject.u) {
						let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
						valueToConvert = convertValueUnit(target, valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
					}
					if (toTargetObject.d && fromTargetObject.d && toTargetObject.d.length !== fromTargetObject.d.length) {
						const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
						const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
						shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
						shortestValue.s = cloneArray(longestValue.s);
					}
					const tweenUpdateDuration = round(+tweenDuration || 1e-11, 12);
					let inlineValue = inlineStylesStore[propName];
					if (!isNil(inlineValue)) inlineStylesStore[propName] = null;
					const tweenSetter = adapterProp ? adapterProp.set : null;
					lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
					const fromD = fromTargetObject.d;
					const toD = toTargetObject.d;
					const toS = toTargetObject.s;
					/** @type {Tween} */
					const tween = {
						parent: this,
						id: tweenId++,
						property: propName,
						target,
						_value: null,
						_toFunc: toFunctionStore.func,
						_fromFunc: fromFunctionStore.func,
						_ease: parseEase(tweenEasing),
						_fromNumbers: fromD ? cloneArray(fromD) : emptyArray,
						_toNumbers: toD ? cloneArray(toD) : emptyArray,
						_strings: toS ? cloneArray(toS) : emptyArray,
						_fromNumber: fromTargetObject.n,
						_toNumber: toTargetObject.n,
						_numbers: fromD ? cloneArray(fromD) : emptyArray,
						_number: fromTargetObject.n,
						_unit: toTargetObject.u,
						_modifier: tweenModifier,
						_currentTime: 0,
						_startTime: tweenStartTime,
						_delay: +tweenDelay,
						_updateDuration: tweenUpdateDuration,
						_changeDuration: tweenUpdateDuration,
						_absoluteStartTime: absoluteStartTime,
						_absoluteUpdateStartTime: absoluteUpdateStartTime,
						_absoluteEndTime: round(absoluteOffsetTime + lastTweenChangeEndTime, 12),
						_hasFromValue: hasFromvalue || isFromToArray ? 1 : 0,
						_tweenType: tweenType,
						_setter: tweenSetter,
						_valueType: toTargetObject.t,
						_composition: tweenComposition,
						_isOverlapped: 0,
						_isOverridden: 0,
						_renderTransforms: 0,
						_inlineValue: inlineValue,
						_prevRep: null,
						_nextRep: null,
						_prevAdd: null,
						_nextAdd: null,
						_prev: null,
						_next: null
					};
					if (tweenComposition !== compositionTypes.none) composeTween(tween, siblings);
					const vt = tween._valueType;
					if (vt === valueTypes.COMPLEX) tween._value = composeComplexValue(tween, 1, -1);
					else if (vt === valueTypes.UNIT) tween._value = `${tweenModifier(tween._toNumber)}${tween._unit}`;
					else if (vt === valueTypes.COLOR) {
						const d = toTargetObject.d;
						tween._value = `rgba(${round(d[0], 0)},${round(d[1], 0)},${round(d[2], 0)},${d[3]})`;
					} else tween._value = tweenModifier(tween._toNumber);
					if (isNaN(firstTweenChangeStartTime)) firstTweenChangeStartTime = tween._startTime;
					prevTween = tween;
					animationAnimationLength++;
					addChild(this, tween);
				}
				if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) iterationDelay = firstTweenChangeStartTime;
				if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) iterationDuration = lastTweenChangeEndTime;
				if (tweenType === tweenTypes.TRANSFORM) {
					lastTransformGroupIndex = animationAnimationLength - tweenIndex;
					lastTransformGroupLength = animationAnimationLength;
				}
			}
			if (!isNaN(lastTransformGroupIndex)) {
				let i = 0;
				forEachChildren(this, (tween) => {
					if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
						tween._renderTransforms = 1;
						if (tween._composition === compositionTypes.blend) forEachChildren(additive.animation, (additiveTween) => {
							if (additiveTween.id === tween.id) additiveTween._renderTransforms = 1;
						});
					}
					i++;
				});
			}
		}
		if (!targetsLength) console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
		if (iterationDelay) {
			forEachChildren(this, (tween) => {
				if (!(tween._startTime - tween._delay)) tween._delay -= iterationDelay;
				tween._startTime -= iterationDelay;
			});
			iterationDuration -= iterationDelay;
		} else iterationDelay = 0;
		if (!iterationDuration) {
			iterationDuration = minValue;
			this.iterationCount = 0;
		}
		/** @type {TargetsArray} */
		this.targets = parsedTargets;
		/** @type {String|Number} */
		this.id = !isUnd(id) ? id : JSAnimationId;
		/** @type {Number} */
		this.duration = iterationDuration === 1e-11 ? minValue : clampInfinity((iterationDuration + this._loopDelay) * this.iterationCount - this._loopDelay) || 1e-11;
		/** @type {Callback<this>} */
		this.onRender = onRender || animDefaults.onRender;
		/** @type {EasingFunction} */
		this._ease = parsedAnimPlaybackEase;
		/** @type {Number} */
		this._delay = iterationDelay;
		/** @type {Number} */
		this.iterationDuration = iterationDuration;
		if (!this._autoplay && shouldTriggerRender) this.onRender(this);
	}
	/**
	* @param  {Number} newDuration
	* @return {this}
	*/
	stretch(newDuration) {
		const currentDuration = this.duration;
		if (currentDuration === normalizeTime(newDuration)) return this;
		const timeScale = newDuration / currentDuration;
		forEachChildren(this, (tween) => {
			tween._updateDuration = normalizeTime(tween._updateDuration * timeScale);
			tween._changeDuration = normalizeTime(tween._changeDuration * timeScale);
			tween._currentTime *= timeScale;
			tween._delay *= timeScale;
			tween._startTime *= timeScale;
			tween._absoluteStartTime *= timeScale;
			tween._absoluteUpdateStartTime *= timeScale;
			tween._absoluteEndTime *= timeScale;
		});
		return super.stretch(newDuration);
	}
	/**
	* @return {this}
	*/
	refresh() {
		forEachChildren(this, (tween) => {
			const toFunc = tween._toFunc;
			const fromFunc = tween._fromFunc;
			if (toFunc || fromFunc) {
				if (fromFunc) {
					decomposeRawValue(fromFunc(), fromTargetObject);
					if (fromTargetObject.u !== tween._unit && tween.target[isDomSymbol]) convertValueUnit(tween.target, fromTargetObject, tween._unit, true);
					tween._fromNumbers = cloneArray(fromTargetObject.d);
					tween._fromNumber = fromTargetObject.n;
				} else if (toFunc) {
					decomposeRawValue(getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType), decomposedOriginalValue);
					tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
					tween._fromNumber = decomposedOriginalValue.n;
				}
				if (toFunc) {
					decomposeRawValue(toFunc(), toTargetObject);
					tween._toNumbers = cloneArray(toTargetObject.d);
					tween._strings = cloneArray(toTargetObject.s);
					tween._toNumber = toTargetObject.o ? getRelativeValue(tween._fromNumber, toTargetObject.n, toTargetObject.o) : toTargetObject.n;
				}
			}
		});
		if (this.duration === 1e-11) this.restart();
		return this;
	}
	/**
	* Cancel the animation and revert all the values affected by this animation to their original state
	* @return {this}
	*/
	revert() {
		super.revert();
		return revertValues(this);
	}
	/**
	* @typedef {this & {then: null}} ResolvedJSAnimation
	*/
	/**
	* @param  {Callback<ResolvedJSAnimation>} [callback]
	* @return Promise<this>
	*/
	then(callback) {
		return super.then(callback);
	}
};
/**
* @param {TargetsParam} targets
* @param {AnimationParams} parameters
* @return {JSAnimation}
*/
var animate = (targets, parameters) => {
	if (globals.editor) return globals.editor.addAnimation(targets, parameters);
	else return new JSAnimation(targets, parameters, null, 0, false).init();
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/timeline/position.js
/**
* Anime.js - timeline - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   Tickable,
*   TimelinePosition,
* } from '../types/index.js'
*/
/**
* @import {
*   Timeline,
* } from './timeline.js'
*/
/**
* Timeline's children offsets positions parser
* @param  {Timeline} timeline
* @param  {String} timePosition
* @return {Number}
*/
var getPrevChildOffset = (timeline, timePosition) => {
	if (stringStartsWith(timePosition, "<")) {
		const goToPrevAnimationOffset = timePosition[1] === "<";
		const prevAnimation = timeline._tail;
		const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
		return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
	}
};
/**
* @param  {Timeline} timeline
* @param  {TimelinePosition} [timePosition]
* @return {Number}
*/
var parseTimelinePosition = (timeline, timePosition) => {
	let tlDuration = timeline.iterationDuration;
	if (tlDuration === 1e-11) tlDuration = 0;
	if (isUnd(timePosition)) return tlDuration;
	if (isNum(+timePosition)) return +timePosition;
	const timePosStr = timePosition;
	const tlLabels = timeline ? timeline.labels : null;
	const hasLabels = !isNil(tlLabels);
	const prevOffset = getPrevChildOffset(timeline, timePosStr);
	const hasSibling = !isUnd(prevOffset);
	const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
	if (matchedRelativeOperator) {
		const fullOperator = matchedRelativeOperator[0];
		const split = timePosStr.split(fullOperator);
		const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
		return getRelativeValue(hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration, +split[1], fullOperator[0]);
	} else return hasSibling ? prevOffset : hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] : tlDuration : tlDuration;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/utils/random.js
/**
* Anime.js - utils - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* Generate a random number between optional min and max (inclusive) and decimal precision
*
* @callback RandomNumberGenerator
* @param    {Number} [min=0] - The minimum value (inclusive)
* @param    {Number} [max=1] - The maximum value (inclusive)
* @param    {Number} [decimalLength=0] - Number of decimal places to round to
* @return   {Number} A random number between min and max
*/
/**
* Generates a random number between min and max (inclusive) with optional decimal precision
*
* @type {RandomNumberGenerator}
*/
var random = (min = 0, max = 1, decimalLength = 0) => {
	const m = 10 ** decimalLength;
	return Math.floor((Math.random() * (max - min + 1 / m) + min) * m) / m;
};
var _seed = 0;
/**
* Creates a seeded pseudorandom number generator function
*
* @param  {Number} [seed] - The seed value for the random number generator
* @param  {Number} [seededMin=0] - The minimum default value (inclusive) of the returned function
* @param  {Number} [seededMax=1] - The maximum default value (inclusive) of the returned function
* @param  {Number} [seededDecimalLength=0] - Default number of decimal places to round to of the returned function
* @return {RandomNumberGenerator} A function to generate a random number between optional min and max (inclusive) and decimal precision
*/
var createSeededRandom = (seed, seededMin = 0, seededMax = 1, seededDecimalLength = 0) => {
	let t = seed === void 0 ? _seed++ : seed;
	return (min = seededMin, max = seededMax, decimalLength = seededDecimalLength) => {
		t += 1831565813;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		const m = 10 ** decimalLength;
		return Math.floor((((t ^ t >>> 14) >>> 0) / 4294967296 * (max - min + 1 / m) + min) * m) / m;
	};
};
/**
* Shuffles an array in-place using the Fisher-Yates algorithm
* Adapted from https://bost.ocks.org/mike/shuffle/
*
* @param  {Array} items - The array to shuffle (will be modified in-place)
* @param  {RandomNumberGenerator} [rnd] - Optional RNG matching the random() signature (defaults to random)
* @return {Array} The same array reference, now shuffled
*/
var shuffle = (items, rnd = random) => {
	let m = items.length, t, i;
	while (m) {
		i = rnd(0, --m);
		t = items[m];
		items[m] = items[i];
		items[i] = t;
	}
	return items;
};
// node_modules/.pnpm/animejs@4.5.0/node_modules/animejs/dist/modules/utils/stagger.js
/**
* Anime.js - utils - ESM
* @version v4.5.0
* @license MIT
* @copyright 2026 - Julian Garnier
*/
/**
* @import {
*   StaggerParams,
*   StaggerFunction,
*   JSTarget,
* } from '../types/index.js'
*/
/**
* @import {
*   Spring,
* } from '../easings/spring/index.js'
*/
/**
* @overload
* @param {Number} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<Number>}
*/
/**
* @overload
* @param {String} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<String>}
*/
/**
* @overload
* @param {[Number, Number]} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<Number>}
*/
/**
* @overload
* @param {[String, String]} val
* @param {StaggerParams} [params]
* @return {StaggerFunction<String>}
*/
/**
* @param {Number|String|[Number, Number]|[String, String]} val The staggered value or range
* @param {StaggerParams} [params] The stagger parameters
* @return {StaggerFunction<Number|String>}
*/
var stagger = (val, params = {}) => {
	let values = [];
	let maxValue = 0;
	let cachedOffset;
	let jitterSamples = null;
	const from = params.from;
	const reversed = params.reversed;
	const ease = params.ease;
	const hasEasing = !isUnd(ease);
	const staggerEase = hasEasing && !isUnd(
		/** @type {Spring} */
		ease.ease
	) ? ease.ease : hasEasing ? parseEase(ease) : null;
	const grid = params.grid;
	const autoGrid = grid === true;
	const axis = params.axis;
	const customTotal = params.total;
	const fromFirst = isUnd(from) || from === 0 || from === "first";
	const fromCenter = from === "center";
	const fromLast = from === "last";
	const fromRandom = from === "random";
	const fromArr = isArr(from);
	const isRange = isArr(val);
	const useProp = params.use;
	const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
	const val2 = isRange ? parseNumber(val[1]) : 0;
	const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + "");
	const start = params.start || 0 + (isRange ? val1 : 0);
	const seed = params.seed;
	const rng = !isUnd(seed) && seed !== false ? createSeededRandom(seed === true ? 0 : seed) : random;
	const jitter = params.jitter;
	const hasJitter = !isUnd(jitter);
	const jitterIsArr = isArr(jitter);
	const jitterStart = jitterIsArr ? jitter[0] : /** @type {Number} */ jitter || 0;
	const jitterEnd = jitterIsArr ? jitter[1] : /** @type {Number} */ jitter || 0;
	let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
	return (target, i, t, _, tl) => {
		const [registeredTarget] = registerTargets(target);
		const total = isUnd(customTotal) ? t.length : customTotal;
		const customIndex = !isUnd(useProp) ? isFnc(useProp) ? useProp(registeredTarget, i, total) : getOriginalAnimatableValue(registeredTarget, useProp) : false;
		const customIdx = isNum(customIndex) || isStr(customIndex) && isNum(+customIndex) ? +customIndex : i;
		const staggerIndex = customIdx >= 0 && customIdx < total ? customIdx : i;
		if (fromCenter) fromIndex = (total - 1) / 2;
		if (fromLast) fromIndex = total - 1;
		if (!values.length) {
			if (autoGrid) {
				let hasPositions = true;
				let has3D = false;
				let minPosX = Infinity;
				let minPosY = Infinity;
				let minPosZ = Infinity;
				let maxPosX = -Infinity;
				let maxPosY = -Infinity;
				let maxPosZ = -Infinity;
				const pxArr = [];
				const pyArr = [];
				const pzArr = [];
				for (let index = 0; index < total; index++) {
					const el = t[index];
					let px = 0;
					let py = 0;
					let pz = 0;
					let found = false;
					if (el && isFnc(el.getBoundingClientRect)) {
						const rect = el.getBoundingClientRect();
						px = rect.left + rect.width / 2;
						py = rect.top + rect.height / 2;
						found = true;
					} else {
						const obj = el;
						if (obj && isNum(obj.x) && isNum(obj.y)) {
							px = obj.x;
							py = obj.y;
							if (isNum(obj.z)) {
								pz = obj.z;
								has3D = true;
							}
							found = true;
						}
					}
					if (!found) {
						hasPositions = false;
						break;
					}
					pxArr.push(px);
					pyArr.push(py);
					pzArr.push(pz);
					if (px < minPosX) minPosX = px;
					if (py < minPosY) minPosY = py;
					if (pz < minPosZ) minPosZ = pz;
					if (px > maxPosX) maxPosX = px;
					if (py > maxPosY) maxPosY = py;
					if (pz > maxPosZ) maxPosZ = pz;
				}
				if (hasPositions) {
					let fX = pxArr[0];
					let fY = pyArr[0];
					let fZ = pzArr[0];
					if (fromArr) {
						fX = minPosX + from[0] * (maxPosX - minPosX);
						fY = minPosY + from[1] * (maxPosY - minPosY);
						fZ = has3D ? minPosZ + (from.length >= 3 ? from[2] : .5) * (maxPosZ - minPosZ) : 0;
					} else if (fromCenter) {
						fX = (minPosX + maxPosX) / 2;
						fY = (minPosY + maxPosY) / 2;
						fZ = (minPosZ + maxPosZ) / 2;
					} else if (fromLast) {
						fX = pxArr[total - 1];
						fY = pyArr[total - 1];
						fZ = pzArr[total - 1];
					} else if (isNum(from)) {
						fX = pxArr[from];
						fY = pyArr[from];
						fZ = pzArr[from];
					}
					for (let index = 0; index < total; index++) {
						const distanceX = fX - pxArr[index];
						const distanceY = fY - pyArr[index];
						const distanceZ = fZ - pzArr[index];
						let value = sqrt(distanceX * distanceX + distanceY * distanceY + (has3D ? distanceZ * distanceZ : 0));
						if (axis === "x") value = -distanceX;
						if (axis === "y") value = -distanceY;
						if (axis === "z") value = -distanceZ;
						values.push(value);
					}
					let minDist = Infinity;
					for (let index = 0; index < total; index++) {
						const absVal = abs(values[index]);
						if (absVal > 0 && absVal < minDist) minDist = absVal;
					}
					if (minDist > 0 && minDist < Infinity) for (let index = 0; index < total; index++) values[index] = values[index] / minDist;
				} else for (let index = 0; index < total; index++) values.push(abs(fromIndex - index));
			} else for (let index = 0; index < total; index++) if (!grid) values.push(abs(fromIndex - index));
			else {
				const dims = grid.length;
				const wh = grid[0] * grid[1];
				let fromX, fromY, fromZ;
				if (fromArr) {
					fromX = from[0] * (grid[0] - 1);
					fromY = from[1] * (grid[1] - 1);
					fromZ = dims === 3 ? (from.length >= 3 ? from[2] : .5) * (grid[2] - 1) : 0;
				} else if (fromCenter) {
					fromX = (grid[0] - 1) / 2;
					fromY = (grid[1] - 1) / 2;
					fromZ = dims === 3 ? (grid[2] - 1) / 2 : 0;
				} else {
					fromX = fromIndex % grid[0];
					fromY = floor(fromIndex / grid[0]) % grid[1];
					fromZ = dims === 3 ? floor(fromIndex / wh) : 0;
				}
				const toX = index % grid[0];
				const toY = floor(index / grid[0]) % grid[1];
				const toZ = dims === 3 ? floor(index / wh) : 0;
				const distanceX = fromX - toX;
				const distanceY = fromY - toY;
				const distanceZ = fromZ - toZ;
				let value = sqrt(distanceX * distanceX + distanceY * distanceY + (dims === 3 ? distanceZ * distanceZ : 0));
				if (axis === "x") value = -distanceX;
				if (axis === "y") value = -distanceY;
				if (axis === "z") value = -distanceZ;
				values.push(value);
			}
			maxValue = values[0];
			for (let k = 1; k < total; k++) if (values[k] > maxValue) maxValue = values[k];
			if (staggerEase || reversed) for (let k = 0; k < total; k++) {
				let v = values[k];
				if (staggerEase) v = staggerEase(v / maxValue) * maxValue;
				if (reversed) v = axis ? -v : abs(maxValue - v);
				values[k] = v;
			}
			if (hasJitter) {
				jitterSamples = new Array(total);
				for (let k = 0; k < total; k++) jitterSamples[k] = rng(-1, 1, 4);
			}
			if (fromRandom) values = shuffle(values, rng);
		}
		const spacing = isRange ? (val2 - val1) / maxValue : val1;
		if (isUnd(cachedOffset)) cachedOffset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : start;
		/** @type {String|Number} */
		let output = cachedOffset + (spacing * round(values[staggerIndex], 2) || 0);
		if (hasJitter) {
			const progress = maxValue ? values[staggerIndex] / maxValue : 0;
			const mag = jitterStart + (jitterEnd - jitterStart) * progress;
			output = output + jitterSamples[staggerIndex] * mag;
		}
		if (params.modifier) output = params.modifier(output);
		if (unitMatch) output = `${output}${unitMatch[2]}`;
		return output;
	};
};
// src/themes.ts
var DEFAULT_THEME_ID = "default";
var THEMES = [
	{
		id: "default",
		name: "晨雾蓝",
		tagline: "宿主默认的 JetBrains 蓝",
		light: {
			bg: "#f7f8fa",
			sidebar: "#f2f4f7",
			surface: "#ffffff",
			surface2: "#f6f7f9",
			border: "#e3e7ed",
			text: "#1e1f22",
			text2: "#3c3f45",
			muted: "#868a91",
			accent: "#3574f0",
			accentSoft: "#eaf1ff",
			headerBg: "rgba(255, 255, 255, 0.9)"
		},
		dark: {
			bg: "#1e1f22",
			sidebar: "#2b2d30",
			surface: "#26282b",
			surface2: "#2b2d30",
			border: "#393b40",
			text: "#dfe1e5",
			text2: "#c9ccd1",
			muted: "#9da0a6",
			accent: "#4c7eff",
			accentSoft: "#22304d",
			headerBg: "rgba(30, 31, 34, 0.92)"
		}
	},
	{
		id: "sakura",
		name: "樱花粉",
		tagline: "柔和粉调，适合长时间阅读",
		light: {
			bg: "#fdf6f8",
			sidebar: "#f9edf2",
			surface: "#fffdfe",
			surface2: "#f9f1f4",
			border: "#efdbe3",
			text: "#2b1e24",
			text2: "#4a3840",
			muted: "#957e88",
			accent: "#c93a7c",
			accentSoft: "#fbe4ee",
			headerBg: "rgba(255, 253, 254, 0.9)"
		},
		dark: {
			bg: "#1d161a",
			sidebar: "#251b20",
			surface: "#291f24",
			surface2: "#30242a",
			border: "#3e2f36",
			text: "#efe3e8",
			text2: "#d0bec6",
			muted: "#a08b95",
			accent: "#ef7fb3",
			accentSoft: "#3a2330",
			headerBg: "rgba(29, 22, 26, 0.92)"
		}
	},
	{
		id: "forest",
		name: "森野绿",
		tagline: "低饱和绿，安静克制",
		light: {
			bg: "#f5faf6",
			sidebar: "#ecf5ee",
			surface: "#fdfffd",
			surface2: "#f2f8f3",
			border: "#d9e7dd",
			text: "#17241b",
			text2: "#34473a",
			muted: "#75877b",
			accent: "#15803d",
			accentSoft: "#e4f5ea",
			headerBg: "rgba(253, 255, 253, 0.9)"
		},
		dark: {
			bg: "#121a14",
			sidebar: "#17211a",
			surface: "#1b261e",
			surface2: "#202d24",
			border: "#2d3d32",
			text: "#e2ece5",
			text2: "#c3d2c8",
			muted: "#8b9b90",
			accent: "#46c67c",
			accentSoft: "#1d3527",
			headerBg: "rgba(18, 26, 20, 0.92)"
		}
	},
	{
		id: "amber",
		name: "琥珀暖阳",
		tagline: "暖棕底色，像旧纸张",
		light: {
			bg: "#fbf7f1",
			sidebar: "#f6efe3",
			surface: "#fffdf8",
			surface2: "#f8f1e6",
			border: "#e9dcc6",
			text: "#2a2116",
			text2: "#4b3e2d",
			muted: "#91816a",
			accent: "#b4610c",
			accentSoft: "#fbefda",
			headerBg: "rgba(255, 253, 248, 0.9)"
		},
		dark: {
			bg: "#1b1711",
			sidebar: "#221c14",
			surface: "#271f17",
			surface2: "#2f261b",
			border: "#3e3223",
			text: "#efe6d8",
			text2: "#d3c5b0",
			muted: "#a2917a",
			accent: "#eda63c",
			accentSoft: "#3a2c19",
			headerBg: "rgba(27, 23, 17, 0.92)"
		}
	},
	{
		id: "violet",
		name: "暮紫",
		tagline: "冷静的紫调，专注写作",
		light: {
			bg: "#f8f6fd",
			sidebar: "#f1edfa",
			surface: "#fdfcff",
			surface2: "#f5f2fb",
			border: "#e3ddf1",
			text: "#211a33",
			text2: "#3d3454",
			muted: "#837a99",
			accent: "#7553e8",
			accentSoft: "#ece7fd",
			headerBg: "rgba(253, 252, 255, 0.9)"
		},
		dark: {
			bg: "#15121f",
			sidebar: "#1a1626",
			surface: "#1f1a2c",
			surface2: "#251f34",
			border: "#332c45",
			text: "#e8e3f3",
			text2: "#cbc4da",
			muted: "#938ba8",
			accent: "#9c82ff",
			accentSoft: "#2a2143",
			headerBg: "rgba(21, 18, 31, 0.92)"
		}
	},
	{
		id: "midnight",
		name: "午夜青",
		tagline: "冷色深空，暗色下最沉",
		light: {
			bg: "#f4f8fa",
			sidebar: "#eaf1f5",
			surface: "#fcfeff",
			surface2: "#f1f6f9",
			border: "#d7e4ea",
			text: "#122029",
			text2: "#2f4250",
			muted: "#738895",
			accent: "#0b7d99",
			accentSoft: "#e0f2f7",
			headerBg: "rgba(252, 254, 255, 0.9)"
		},
		dark: {
			bg: "#0b1015",
			sidebar: "#0f151c",
			surface: "#121a22",
			surface2: "#16212a",
			border: "#22303c",
			text: "#dce7ee",
			text2: "#b9c9d4",
			muted: "#7f93a1",
			accent: "#38b6d8",
			accentSoft: "#12303a",
			headerBg: "rgba(11, 16, 21, 0.92)"
		}
	},
	{
		id: "neon",
		name: "霓虹赛博",
		tagline: "电光紫配冷蓝，像夜里的终端",
		light: {
			bg: "#f7f7ff",
			sidebar: "#eeeefe",
			surface: "#ffffff",
			surface2: "#f4f4ff",
			border: "#dedff5",
			text: "#16162e",
			text2: "#3a3a5e",
			muted: "#7b7d9e",
			accent: "#6d4aff",
			accentSoft: "#eae4ff",
			headerBg: "rgba(255, 255, 255, 0.9)"
		},
		dark: {
			bg: "#0a0a16",
			sidebar: "#101024",
			surface: "#14142b",
			surface2: "#1a1a35",
			border: "#2b2b4d",
			text: "#ecebff",
			text2: "#c7c5e8",
			muted: "#8886ac",
			accent: "#8b6cff",
			accentSoft: "#241d47",
			headerBg: "rgba(10, 10, 22, 0.92)"
		}
	},
	{
		id: "soda",
		name: "薄荷汽水",
		tagline: "带气泡感的青绿，清爽提神",
		light: {
			bg: "#f1fbf7",
			sidebar: "#e7f7f0",
			surface: "#ffffff",
			surface2: "#effaf5",
			border: "#d0ecdf",
			text: "#0e241f",
			text2: "#294741",
			muted: "#6c8d84",
			accent: "#0d9488",
			accentSoft: "#d9f6ea",
			headerBg: "rgba(255, 255, 255, 0.9)"
		},
		dark: {
			bg: "#081512",
			sidebar: "#0d1f1a",
			surface: "#102721",
			surface2: "#153029",
			border: "#22443a",
			text: "#ddf5ec",
			text2: "#b7dbcf",
			muted: "#7ba295",
			accent: "#34dba0",
			accentSoft: "#0f3a2e",
			headerBg: "rgba(8, 21, 18, 0.92)"
		}
	},
	{
		id: "sunset",
		name: "蜜桃日落",
		tagline: "珊瑚橘的傍晚，暖而不燥",
		light: {
			bg: "#fff6f1",
			sidebar: "#ffede5",
			surface: "#fffdfc",
			surface2: "#fff2ec",
			border: "#ffd8ca",
			text: "#2c1610",
			text2: "#502f23",
			muted: "#a07463",
			accent: "#f2603c",
			accentSoft: "#ffe4d9",
			headerBg: "rgba(255, 253, 252, 0.9)"
		},
		dark: {
			bg: "#190f0b",
			sidebar: "#241510",
			surface: "#2a1913",
			surface2: "#332018",
			border: "#4b2c21",
			text: "#ffe9df",
			text2: "#e9c8b9",
			muted: "#b18a7a",
			accent: "#ff8358",
			accentSoft: "#4a2418",
			headerBg: "rgba(25, 15, 11, 0.92)"
		}
	}
];
function findTheme(id) {
	return THEMES.find((theme) => theme.id === id) || null;
}
function normalizeHex(value) {
	const hex = value.replace("#", "");
	return hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex.slice(0, 6);
}
/** 按权重混合两个颜色：weight 为 a 的占比。 */
function mixColor(a, b, weight) {
	const colorA = normalizeHex(a);
	const colorB = normalizeHex(b);
	const ratio = Math.min(1, Math.max(0, weight));
	const channel = (offset) => Math.round(Number.parseInt(colorA.slice(offset, offset + 2), 16) * ratio + Number.parseInt(colorB.slice(offset, offset + 2), 16) * (1 - ratio));
	return `#${[
		0,
		2,
		4
	].map((offset) => channel(offset).toString(16).padStart(2, "0")).join("")}`;
}
/** 给十六进制颜色加透明度，背景图模式下让界面透出图片。 */
function withAlpha(color, alpha) {
	const hex = normalizeHex(color);
	const channel = (offset) => Number.parseInt(hex.slice(offset, offset + 2), 16);
	return `rgba(${channel(0)}, ${channel(2)}, ${channel(4)}, ${alpha})`;
}
/**
* 把调色板展开成宿主的颜色令牌。
*
* --wr-* 是宿主自己的语义变量；--el-* 是 Element Plus 组件用的变量。
* 只覆盖颜色，不动圆角、字号、阴影，避免和宿主其它样式打架。
*/
function themeVars(palette, mode) {
	const dark = mode === "dark";
	const mix = mixColor;
	return {
		"--wr-bg": palette.bg,
		"--wr-sidebar-bg": palette.sidebar,
		"--wr-surface": palette.surface,
		"--wr-surface-2": palette.surface2,
		"--wr-border": palette.border,
		"--wr-text": palette.text,
		"--wr-text-2": palette.text2,
		"--wr-muted": palette.muted,
		"--wr-accent": palette.accent,
		"--wr-accent-soft": palette.accentSoft,
		"--wr-header-bg": palette.headerBg,
		"--el-color-primary": palette.accent,
		"--el-color-primary-light-3": mix(palette.accent, "#ffffff", dark ? .7 : .65),
		"--el-color-primary-light-5": dark ? mix(palette.accent, palette.bg, .55) : mix(palette.accent, "#ffffff", .5),
		"--el-color-primary-light-7": dark ? mix(palette.accent, palette.bg, .45) : mix(palette.accent, "#ffffff", .3),
		"--el-color-primary-light-8": dark ? mix(palette.accent, palette.bg, .35) : mix(palette.accent, "#ffffff", .2),
		"--el-color-primary-light-9": dark ? mix(palette.accent, palette.bg, .25) : mix(palette.accent, "#ffffff", .1),
		"--el-color-primary-dark-2": mix(palette.accent, "#000000", .82),
		"--el-bg-color-page": palette.bg,
		"--el-bg-color": palette.surface,
		"--el-bg-color-overlay": palette.surface,
		"--el-fill-color-blank": palette.surface,
		"--el-fill-color-lighter": palette.surface2,
		"--el-fill-color-light": mix(palette.surface2, palette.surface, .75),
		"--el-fill-color": mix(palette.border, palette.surface, dark ? .5 : .45),
		"--el-fill-color-dark": mix(palette.border, palette.surface, dark ? .7 : .65),
		"--el-fill-color-darker": palette.border,
		"--el-border-color-extra-light": mix(palette.border, palette.surface, .4),
		"--el-border-color-lighter": mix(palette.border, palette.surface, .65),
		"--el-border-color-light": palette.border,
		"--el-border-color": mix(palette.border, palette.text, .15),
		"--el-border-color-dark": mix(palette.border, palette.text, .3),
		"--el-border-color-darker": mix(palette.border, palette.text, .45),
		"--el-text-color-primary": palette.text,
		"--el-text-color-regular": palette.text2,
		"--el-text-color-secondary": palette.muted,
		"--el-text-color-placeholder": mix(palette.muted, palette.bg, dark ? .6 : .75),
		"--el-text-color-disabled": mix(palette.muted, palette.bg, .45),
		"--el-mask-color": dark ? "rgba(6, 8, 10, 0.7)" : "rgba(255, 255, 255, 0.72)"
	};
}
/**
* 背景图模式：把大面积底色换成半透明，图片从界面后面透出来。
* 只改底色 / 填充 / 遮罩这类“面”，文字、边框、主色保持不透明，避免发灰。
*/
function backgroundVars(palette, mode) {
	const dark = mode === "dark";
	return {
		"--wr-bg": withAlpha(palette.bg, .55),
		"--wr-sidebar-bg": withAlpha(palette.sidebar, .7),
		"--wr-surface": withAlpha(palette.surface, .8),
		"--wr-surface-2": withAlpha(palette.surface2, .66),
		"--wr-header-bg": withAlpha(palette.surface, .5),
		"--el-bg-color-page": withAlpha(palette.bg, .5),
		"--el-bg-color": withAlpha(palette.surface, .8),
		"--el-bg-color-overlay": withAlpha(palette.surface, .9),
		"--el-fill-color-blank": withAlpha(palette.surface, .85),
		"--el-fill-color-lighter": withAlpha(palette.surface2, .7),
		"--el-fill-color-light": withAlpha(mixColor(palette.surface2, palette.surface, .75), .7),
		"--el-fill-color": withAlpha(mixColor(palette.border, palette.surface, dark ? .5 : .45), .72),
		"--el-mask-color": dark ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.22)"
	};
}
// src/engine.ts
/**
* 主题引擎：把选中的主题写成 html 上的内联 CSS 变量。
*
* - 选“晨雾蓝”（宿主默认）时不写任何变量，完全交回宿主；
* - 亮色 / 暗色由宿主 theme 服务决定，引擎只按当前模式选调色板；
* - 插件 dispose 时清掉所有内联变量，界面立即回到宿主默认配色。
*/
var THEME_STORAGE_KEY = "la-theme:pack";
var listeners$3 = /* @__PURE__ */ new Set();
var appliedKeys = /* @__PURE__ */ new Set();
var activeId = readStored();
var mode = resolveMode();
var backgroundActive = false;
function readStored() {
	try {
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		return findTheme(stored) ? stored : DEFAULT_THEME_ID;
	} catch {
		return DEFAULT_THEME_ID;
	}
}
function resolveMode() {
	if (typeof document === "undefined") return "light";
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function notify$3() {
	for (const listener of listeners$3) try {
		listener();
	} catch (error) {
		console.error("[la-theme] 监听器异常:", error);
	}
}
function clearApplied() {
	if (typeof document === "undefined") return;
	for (const key of appliedKeys) document.documentElement.style.removeProperty(key);
	appliedKeys.clear();
}
/** 按当前主题与模式重写变量；默认主题且没有背景图时直接清空。 */
function applyTheme() {
	clearApplied();
	if (typeof document === "undefined") return;
	const theme = findTheme(activeId);
	if (!theme) return;
	if (theme.id === "default" && !backgroundActive) return;
	const palette = theme[mode];
	const vars = backgroundActive ? {
		...themeVars(palette, mode),
		...backgroundVars(palette, mode)
	} : themeVars(palette, mode);
	const root = document.documentElement;
	for (const [key, value] of Object.entries(vars)) {
		root.style.setProperty(key, value);
		appliedKeys.add(key);
	}
}
/** 背景图挂载 / 移除时切换界面令牌的透明度。 */
function setBackgroundActive(active) {
	if (active === backgroundActive) return;
	backgroundActive = active;
	applyTheme();
	notify$3();
}
/** 恢复宿主默认配色（插件被停用 / 卸载时调用）。 */
function clearTheme() {
	clearApplied();
}
function setThemePack(id) {
	const theme = findTheme(id);
	if (!theme) return activeId;
	if (theme.id !== activeId) {
		activeId = theme.id;
		try {
			localStorage.setItem(THEME_STORAGE_KEY, activeId);
		} catch {}
		applyTheme();
		notify$3();
	}
	return activeId;
}
/** 跟随宿主亮暗模式切换调色板。 */
function setMode(next) {
	if (next !== "light" && next !== "dark") return;
	if (next === mode) return;
	mode = next;
	applyTheme();
	notify$3();
}
function getActiveThemeId() {
	return activeId;
}
function getMode() {
	return mode;
}
function subscribe(listener) {
	listeners$3.add(listener);
	return () => listeners$3.delete(listener);
}
// src/background.ts
/**
* 全局背景图：图片存在 IndexedDB，浏览器里生成 object URL，
* 用一个固定在 #app 后面的图层铺开；主题引擎把大面积底色切成半透明。
*/
var BACKGROUND_PLACEMENTS = [
	{
		value: "fill",
		label: "填充",
		size: "cover",
		repeat: "no-repeat",
		position: "center"
	},
	{
		value: "fit",
		label: "适应",
		size: "contain",
		repeat: "no-repeat",
		position: "center"
	},
	{
		value: "stretch",
		label: "拉伸",
		size: "100% 100%",
		repeat: "no-repeat",
		position: "center"
	},
	{
		value: "center",
		label: "居中",
		size: "auto",
		repeat: "no-repeat",
		position: "center"
	},
	{
		value: "tile",
		label: "平铺",
		size: "auto",
		repeat: "repeat",
		position: "left top"
	}
];
var SETTINGS_KEY = "la-theme:background";
var DB_NAME = "la-theme";
var STORE_NAME = "background";
var IMAGE_KEY = "image";
var MAX_IMAGE_BYTES = 20971520;
var DEFAULT_SETTINGS = {
	opacity: 45,
	placement: "fill",
	name: ""
};
var listeners$2 = /* @__PURE__ */ new Set();
var settings = readSettings();
var objectUrl = null;
var layer = null;
var destroyed = false;
function clampOpacity(value) {
	if (!Number.isFinite(value)) return DEFAULT_SETTINGS.opacity;
	return Math.min(100, Math.max(0, Math.round(value)));
}
function readSettings() {
	try {
		const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
		const placement = BACKGROUND_PLACEMENTS.some((item) => item.value === raw.placement) ? raw.placement : DEFAULT_SETTINGS.placement;
		return {
			opacity: clampOpacity(Number(raw.opacity ?? DEFAULT_SETTINGS.opacity)),
			placement,
			name: String(raw.name || "").slice(0, 200)
		};
	} catch {
		return { ...DEFAULT_SETTINGS };
	}
}
function saveSettings() {
	try {
		localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	} catch {}
}
function notify$2() {
	for (const listener of listeners$2) try {
		listener();
	} catch (error) {
		console.error("[la-theme] 背景图监听器异常:", error);
	}
}
function openDb() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, 1);
		request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}
function runStore(mode, run) {
	return openDb().then((db) => new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, mode);
		const request = run(tx.objectStore(STORE_NAME));
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
		tx.oncomplete = () => db.close();
		tx.onerror = () => {
			db.close();
			reject(tx.error);
		};
	}));
}
function readImage() {
	return runStore("readonly", (store) => store.get(IMAGE_KEY));
}
function writeImage(blob) {
	return runStore("readwrite", (store) => store.put(blob, IMAGE_KEY));
}
function deleteImage() {
	return runStore("readwrite", (store) => store.delete(IMAGE_KEY));
}
function revokeUrl() {
	if (!objectUrl) return;
	URL.revokeObjectURL(objectUrl);
	objectUrl = null;
}
function applyPlacement() {
	if (!layer) return;
	const item = BACKGROUND_PLACEMENTS.find((entry) => entry.value === settings.placement) || BACKGROUND_PLACEMENTS[0];
	layer.style.backgroundSize = item.size;
	layer.style.backgroundRepeat = item.repeat;
	layer.style.backgroundPosition = item.position;
}
function ensureLayer() {
	if (layer || typeof document === "undefined") return layer;
	layer = document.createElement("div");
	layer.className = "la-theme-background";
	layer.setAttribute("aria-hidden", "true");
	document.body.appendChild(layer);
	document.documentElement.classList.add("la-theme-has-bg");
	return layer;
}
function detach() {
	document.documentElement.classList.remove("la-theme-has-bg");
	layer?.remove();
	layer = null;
	revokeUrl();
	setBackgroundActive(false);
	notify$2();
}
function attach(blob) {
	if (destroyed || typeof document === "undefined") return;
	revokeUrl();
	objectUrl = URL.createObjectURL(blob);
	const target = ensureLayer();
	if (!target) return;
	target.style.backgroundImage = `url("${objectUrl}")`;
	target.style.opacity = String(settings.opacity / 100);
	applyPlacement();
	setBackgroundActive(true);
	notify$2();
}
function assertImage(file) {
	if (!file.type.startsWith("image/")) throw new Error("请选择图片文件（PNG / JPG / WebP / SVG）");
	if (file.size > MAX_IMAGE_BYTES) throw new Error("图片不能超过 20MB");
}
/** 启动时从 IndexedDB 取回上次的背景图。 */
async function initBackground() {
	const blob = await readImage().catch((error) => {
		console.warn("[la-theme] 读取背景图失败:", error);
		return null;
	});
	if (blob) attach(blob);
}
async function setBackgroundImage(file) {
	assertImage(file);
	await writeImage(file);
	settings = {
		...settings,
		name: file.name
	};
	saveSettings();
	attach(file);
}
async function removeBackground() {
	await deleteImage().catch((error) => console.warn("[la-theme] 删除背景图失败:", error));
	settings = {
		...settings,
		name: ""
	};
	saveSettings();
	detach();
}
function setBackgroundOpacity(value) {
	settings = {
		...settings,
		opacity: clampOpacity(value)
	};
	saveSettings();
	if (layer) layer.style.opacity = String(settings.opacity / 100);
}
function setBackgroundPlacement(value) {
	if (!BACKGROUND_PLACEMENTS.some((item) => item.value === value)) return;
	settings = {
		...settings,
		placement: value
	};
	saveSettings();
	applyPlacement();
	notify$2();
}
function backgroundPlacementStyle(value) {
	const item = BACKGROUND_PLACEMENTS.find((entry) => entry.value === value) || BACKGROUND_PLACEMENTS[0];
	return {
		backgroundSize: item.size,
		backgroundRepeat: item.repeat,
		backgroundPosition: item.position
	};
}
function getBackgroundState() {
	return {
		active: Boolean(layer),
		url: objectUrl,
		opacity: settings.opacity,
		placement: settings.placement,
		name: settings.name
	};
}
function subscribeBackground(listener) {
	listeners$2.add(listener);
	return () => listeners$2.delete(listener);
}
/** 插件停用 / 卸载时移除图层，界面回到普通主题。 */
function destroyBackground() {
	destroyed = true;
	detach();
	listeners$2.clear();
}
// src/rail-order.ts
/** 把 from 挪到 to 的位置；两个 key 任一不存在时原样返回。 */
function moveKey(keys, from, to) {
	const fromIndex = keys.indexOf(from);
	const toIndex = keys.indexOf(to);
	if (fromIndex === -1 || toIndex === -1) return keys;
	const next = [...keys];
	next.splice(toIndex, 0, next.splice(fromIndex, 1)[0]);
	return next;
}
// src/rail.ts
/**
* 侧边栏图标拖拽排序（侵入式）。
*
* Tauri 的 WebView 默认接管原生拖放，HTML5 DnD 在桌面端会被吞掉，
* 所以这里用 Pointer Events 自己实现：拖动时只改 CSS order 和顺序数据，
* 不搬 DOM，避免和 Vue 的列表渲染打架。
*/
var ORDER_KEY = "la-theme:rail-order";
var ENABLED_KEY = "la-theme:rail-drag";
var ITEM_SELECTOR = ".rail-items > .rail-item";
var DRAG_THRESHOLD = 4;
var listeners$1 = /* @__PURE__ */ new Set();
var enabled = readEnabled();
var order = readOrder();
var observer$1 = null;
var frame$1 = 0;
var listening = false;
var drag = null;
function readEnabled() {
	try {
		return localStorage.getItem(ENABLED_KEY) !== "0";
	} catch {
		return true;
	}
}
function readOrder() {
	try {
		const raw = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
		if (!Array.isArray(raw)) return [];
		return [...new Set(raw.filter((item) => typeof item === "string" && item))].slice(0, 100);
	} catch {
		return [];
	}
}
function persistOrder() {
	try {
		localStorage.setItem(ORDER_KEY, JSON.stringify(order));
	} catch {}
}
function persistEnabled() {
	try {
		localStorage.setItem(ENABLED_KEY, enabled ? "1" : "0");
	} catch {}
}
function notify$1() {
	for (const listener of listeners$1) try {
		listener();
	} catch (error) {
		console.error("[la-theme] 侧边栏排序监听器异常:", error);
	}
}
function motionAllowed() {
	return typeof matchMedia !== "function" || !matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function itemKey(item) {
	return item.getAttribute("aria-label") || item.getAttribute("title") || "";
}
function items() {
	return [...document.querySelectorAll(ITEM_SELECTOR)].filter((item) => itemKey(item));
}
/** DOM 顺序不等于用户看到的顺序，按当前 order 值还原。 */
function visualItems() {
	return items().sort((a, b) => Number(a.style.order || 0) - Number(b.style.order || 0));
}
function findItem(event) {
	const element = event.target;
	return element instanceof Element ? element.closest(ITEM_SELECTOR) : null;
}
function itemAt(x, y) {
	const element = document.elementFromPoint(x, y);
	return element instanceof Element ? element.closest(ITEM_SELECTOR) : null;
}
function applyKeys(keys) {
	items().forEach((item, index) => {
		const position = keys.indexOf(itemKey(item));
		item.style.order = String(position === -1 ? keys.length + index : position);
	});
}
function applyOrder() {
	applyKeys(order);
	for (const item of items()) {
		item.classList.toggle("la-rail-sortable", enabled);
		if (enabled) item.setAttribute("aria-keyshortcuts", "Alt+ArrowUp Alt+ArrowDown");
		else item.removeAttribute("aria-keyshortcuts");
	}
}
function schedule() {
	if (frame$1) return;
	frame$1 = requestAnimationFrame(() => {
		frame$1 = 0;
		applyOrder();
	});
}
function blockNextClick() {
	const blocker = (event) => {
		event.preventDefault();
		event.stopPropagation();
		document.removeEventListener("click", blocker, true);
	};
	document.addEventListener("click", blocker, true);
	setTimeout(() => document.removeEventListener("click", blocker, true), 350);
}
function createGhost(source, x, y) {
	const ghost = source.cloneNode(true);
	ghost.classList.add("la-rail-ghost");
	ghost.removeAttribute("aria-label");
	ghost.removeAttribute("title");
	ghost.removeAttribute("aria-keyshortcuts");
	ghost.tabIndex = -1;
	const rect = source.getBoundingClientRect();
	ghost.style.left = `${x - rect.width / 2}px`;
	ghost.style.top = `${y - rect.height / 2}px`;
	document.body.appendChild(ghost);
	if (motionAllowed()) animate(ghost, {
		scale: [.75, 1.12],
		rotate: [0, 3],
		opacity: [0, 1],
		duration: 180,
		ease: "outCubic"
	});
	return ghost;
}
function dropGhost(ghost) {
	if (!motionAllowed()) {
		ghost.remove();
		return;
	}
	animate(ghost, {
		scale: .8,
		opacity: 0,
		duration: 140,
		ease: "inCubic",
		onComplete: () => ghost.remove()
	});
}
function cleanupDrag(removeGhost = true) {
	drag?.source.classList.remove("la-rail-dragging");
	document.documentElement.classList.remove("la-rail-sorting");
	if (removeGhost) drag?.ghost?.remove();
	drag = null;
}
function onPointerDown(event) {
	if (!enabled || event.button !== 0) return;
	const item = findItem(event);
	if (!item || !itemKey(item)) return;
	try {
		item.setPointerCapture(event.pointerId);
	} catch {}
	drag = {
		pointerId: event.pointerId,
		source: item,
		startX: event.clientX,
		startY: event.clientY,
		active: false,
		ghost: null,
		ghostWidth: 0,
		ghostHeight: 0,
		draft: order
	};
}
function onPointerMove(event) {
	if (!drag || event.pointerId !== drag.pointerId) return;
	if (!drag.active) {
		if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < DRAG_THRESHOLD) return;
		drag.active = true;
		drag.source.classList.add("la-rail-dragging");
		document.documentElement.classList.add("la-rail-sorting");
		drag.draft = visualItems().map(itemKey);
		const rect = drag.source.getBoundingClientRect();
		drag.ghostWidth = rect.width;
		drag.ghostHeight = rect.height;
		drag.ghost = createGhost(drag.source, event.clientX, event.clientY);
	}
	event.preventDefault();
	if (drag.ghost) {
		drag.ghost.style.left = `${event.clientX - drag.ghostWidth / 2}px`;
		drag.ghost.style.top = `${event.clientY - drag.ghostHeight / 2}px`;
	}
	const target = itemAt(event.clientX, event.clientY);
	if (!target || target === drag.source) return;
	const next = moveKey(drag.draft, itemKey(drag.source), itemKey(target));
	if (next !== drag.draft) {
		drag.draft = next;
		applyKeys(next);
	}
}
function onPointerUp(event) {
	if (!drag || event.pointerId !== drag.pointerId) return;
	if (!drag.active) {
		drag = null;
		return;
	}
	const ghost = drag.ghost;
	if (drag.draft !== order) {
		order = drag.draft;
		persistOrder();
		notify$1();
	}
	cleanupDrag(false);
	applyOrder();
	if (ghost) dropGhost(ghost);
	blockNextClick();
}
function onPointerCancel(event) {
	if (!drag || event.pointerId !== drag.pointerId) return;
	cleanupDrag();
	applyOrder();
}
function onKeyDown(event) {
	if (!enabled || !event.altKey) return;
	if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
	const item = findItem(event);
	if (!item) return;
	const keys = visualItems().map(itemKey);
	const index = keys.indexOf(itemKey(item));
	const target = event.key === "ArrowUp" ? index - 1 : index + 1;
	if (index === -1 || target < 0 || target >= keys.length) return;
	event.preventDefault();
	const next = [...keys];
	next.splice(target, 0, next.splice(index, 1)[0]);
	order = next;
	persistOrder();
	applyOrder();
	notify$1();
	item.focus();
}
function listen() {
	if (listening || typeof document === "undefined") return;
	listening = true;
	document.addEventListener("pointerdown", onPointerDown);
	document.addEventListener("pointermove", onPointerMove, { passive: false });
	document.addEventListener("pointerup", onPointerUp);
	document.addEventListener("pointercancel", onPointerCancel);
	document.addEventListener("keydown", onKeyDown);
}
function unlisten() {
	if (!listening) return;
	listening = false;
	document.removeEventListener("pointerdown", onPointerDown);
	document.removeEventListener("pointermove", onPointerMove);
	document.removeEventListener("pointerup", onPointerUp);
	document.removeEventListener("pointercancel", onPointerCancel);
	document.removeEventListener("keydown", onKeyDown);
}
/** 插件加载时调用：观察侧栏增删，热更新后新按钮也能带上顺序。 */
function initRailReorder() {
	if (typeof document === "undefined" || observer$1 || !document.body) return;
	listen();
	observer$1 = new MutationObserver(schedule);
	observer$1.observe(document.body, {
		childList: true,
		subtree: true
	});
	applyOrder();
}
function setRailEnabled(value) {
	if (value === enabled) return;
	enabled = value;
	persistEnabled();
	cleanupDrag();
	applyOrder();
	notify$1();
}
function resetRailOrder() {
	order = [];
	try {
		localStorage.removeItem(ORDER_KEY);
	} catch {}
	items().forEach((item) => {
		item.style.removeProperty("order");
		item.classList.remove("la-rail-dragging");
	});
	applyOrder();
	notify$1();
}
function getRailState() {
	return {
		enabled,
		order: [...order]
	};
}
function subscribeRail(listener) {
	listeners$1.add(listener);
	return () => listeners$1.delete(listener);
}
/** 插件停用 / 卸载时恢复宿主默认顺序与原生光标。 */
function destroyRailReorder() {
	observer$1?.disconnect();
	observer$1 = null;
	if (frame$1) cancelAnimationFrame(frame$1);
	frame$1 = 0;
	cleanupDrag();
	unlisten();
	for (const item of items()) {
		item.style.removeProperty("order");
		item.classList.remove("la-rail-sortable", "la-rail-dragging");
		item.removeAttribute("aria-keyshortcuts");
	}
	listeners$1.clear();
}
// src/layout.ts
var PANEL_KEY = "la-theme:panel-width";
var RAIL_KEY = "la-theme:rail-style";
var PANEL_DEFAULT = 268;
var PANEL_MIN = 220;
var PANEL_MAX = 460;
var RAIL_MIN = 28;
var RAIL_MAX = 42;
var GAP_MIN = 2;
var GAP_MAX = 10;
var RAIL_DEFAULT = {
	size: 34,
	gap: 4
};
var listeners = /* @__PURE__ */ new Set();
var storedPanel = readPanel();
var rail = readRail();
var panel = null;
var handle = null;
var observer = null;
var panelObserver = null;
var frame = 0;
var dragging = false;
var startX = 0;
var startWidth = 0;
function clamp(value, min, max) {
	return Math.min(max, Math.max(min, Math.round(value)));
}
function readPanel() {
	try {
		const value = Number(localStorage.getItem(PANEL_KEY));
		return Number.isFinite(value) && value > 0 ? clamp(value, PANEL_MIN, PANEL_MAX) : null;
	} catch {
		return null;
	}
}
function readRail() {
	try {
		const raw = JSON.parse(localStorage.getItem(RAIL_KEY) || "{}");
		return {
			size: clamp(Number(raw.size) || RAIL_DEFAULT.size, RAIL_MIN, RAIL_MAX),
			gap: clamp(Number(raw.gap ?? RAIL_DEFAULT.gap), GAP_MIN, GAP_MAX)
		};
	} catch {
		return { ...RAIL_DEFAULT };
	}
}
function save(key, value) {
	try {
		localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
	} catch {}
}
function notify() {
	for (const listener of listeners) try {
		listener();
	} catch (error) {
		console.error("[la-theme] 布局监听器异常:", error);
	}
}
function applyRail() {
	const root = document.documentElement;
	root.style.setProperty("--la-rail-size", `${rail.size}px`);
	root.style.setProperty("--la-rail-gap", `${rail.gap}px`);
}
function again() {
	if (frame) return;
	frame = requestAnimationFrame(() => {
		frame = 0;
		refresh();
	});
}
function positionHandle() {
	if (!handle) return;
	if (!panel) {
		handle.style.display = "none";
		return;
	}
	const rect = panel.getBoundingClientRect();
	handle.style.display = "block";
	handle.style.left = `${rect.right}px`;
	handle.style.top = `${rect.top}px`;
	handle.style.height = `${rect.height}px`;
}
function applyPanel() {
	panel = document.querySelector(".nav-panel");
	if (!panel) {
		positionHandle();
		return;
	}
	if (storedPanel === null) {
		if (panel.style.width) panel.style.removeProperty("width");
	} else {
		const next = `${storedPanel}px`;
		if (panel.style.width !== next) panel.style.width = next;
	}
	positionHandle();
}
function refresh() {
	const next = document.querySelector(".nav-panel");
	if (next !== panel) {
		panel = next;
		panelObserver?.disconnect();
		if (panel && typeof ResizeObserver !== "undefined") {
			panelObserver = new ResizeObserver(positionHandle);
			panelObserver.observe(panel);
		}
	}
	applyPanel();
}
function onHandleDown(event) {
	if (!panel || event.button !== 0) return;
	event.preventDefault();
	dragging = true;
	startX = event.clientX;
	startWidth = panel.getBoundingClientRect().width;
	handle?.setPointerCapture(event.pointerId);
	document.documentElement.classList.add("la-layout-resizing");
}
function onHandleMove(event) {
	if (!dragging || !handle?.hasPointerCapture(event.pointerId)) return;
	storedPanel = clamp(startWidth + event.clientX - startX, PANEL_MIN, PANEL_MAX);
	if (panel) panel.style.width = `${storedPanel}px`;
	positionHandle();
}
function onHandleUp(event) {
	if (!dragging) return;
	dragging = false;
	document.documentElement.classList.remove("la-layout-resizing");
	if (storedPanel !== null) save(PANEL_KEY, String(storedPanel));
	notify();
	try {
		handle?.releasePointerCapture(event.pointerId);
	} catch {}
}
function onHandleKey(event) {
	if (event.key === "Home") {
		event.preventDefault();
		resetPanelWidth();
		return;
	}
	if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
	event.preventDefault();
	setPanelWidth(getLayoutState().panelWidth + (event.key === "ArrowRight" ? 16 : -16));
}
function ensureHandle() {
	if (handle || typeof document === "undefined" || !document.body) return;
	handle = document.createElement("div");
	handle.className = "la-panel-resizer";
	handle.setAttribute("role", "separator");
	handle.setAttribute("aria-orientation", "vertical");
	handle.setAttribute("aria-label", "拖动调整侧边栏宽度");
	handle.tabIndex = 0;
	handle.addEventListener("pointerdown", onHandleDown);
	handle.addEventListener("pointermove", onHandleMove);
	handle.addEventListener("pointerup", onHandleUp);
	handle.addEventListener("pointercancel", onHandleUp);
	handle.addEventListener("dblclick", resetPanelWidth);
	handle.addEventListener("keydown", onHandleKey);
	document.body.appendChild(handle);
}
function onWindowResize() {
	again();
}
function initLayout() {
	if (typeof document === "undefined" || observer || !document.body) return;
	ensureHandle();
	applyRail();
	observer = new MutationObserver(again);
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
	window.addEventListener("resize", onWindowResize, { passive: true });
	refresh();
}
function setPanelWidth(value) {
	storedPanel = clamp(value, PANEL_MIN, PANEL_MAX);
	save(PANEL_KEY, String(storedPanel));
	applyPanel();
	notify();
}
function resetPanelWidth() {
	storedPanel = null;
	try {
		localStorage.removeItem(PANEL_KEY);
	} catch {}
	applyPanel();
	notify();
}
function setRailSize(value) {
	rail = {
		...rail,
		size: clamp(value, RAIL_MIN, RAIL_MAX)
	};
	save(RAIL_KEY, rail);
	applyRail();
	notify();
}
function setRailGap(value) {
	rail = {
		...rail,
		gap: clamp(value, GAP_MIN, GAP_MAX)
	};
	save(RAIL_KEY, rail);
	applyRail();
	notify();
}
function resetLayout() {
	resetPanelWidth();
	rail = { ...RAIL_DEFAULT };
	try {
		localStorage.removeItem(RAIL_KEY);
	} catch {}
	applyRail();
	notify();
}
function getLayoutState() {
	return {
		panelWidth: storedPanel ?? PANEL_DEFAULT,
		panelMin: PANEL_MIN,
		panelMax: PANEL_MAX,
		railSize: rail.size,
		railGap: rail.gap
	};
}
function subscribeLayout(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
/** 插件停用 / 卸载时把面板宽度、图标尺寸和拖动条还给宿主。 */
function destroyLayout() {
	observer?.disconnect();
	observer = null;
	panelObserver?.disconnect();
	panelObserver = null;
	if (frame) cancelAnimationFrame(frame);
	frame = 0;
	dragging = false;
	window.removeEventListener("resize", onWindowResize);
	document.documentElement.classList.remove("la-layout-resizing");
	handle?.remove();
	handle = null;
	document.querySelector(".nav-panel")?.style.removeProperty("width");
	const root = document.documentElement;
	root.style.removeProperty("--la-rail-size");
	root.style.removeProperty("--la-rail-gap");
	panel = null;
	listeners.clear();
}
// src/ThemeSettings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "theme-pack" };
var _hoisted_2 = { class: "tp-head" };
var _hoisted_3 = { class: "tp-mode" };
var _hoisted_4 = { class: "tp-grid" };
var _hoisted_5 = [
	"data-theme-id",
	"aria-pressed",
	"aria-label",
	"onClick"
];
var _hoisted_6 = { class: "tp-meta" };
var _hoisted_7 = { class: "tp-name" };
var _hoisted_8 = { class: "tp-tagline" };
var _hoisted_9 = {
	key: 0,
	class: "tp-check"
};
var _hoisted_10 = { class: "tp-note" };
var _hoisted_11 = { class: "tp-layout" };
var _hoisted_12 = { class: "tp-layout-head" };
var _hoisted_13 = { class: "tp-layout-row" };
var _hoisted_14 = { class: "tp-layout-actions" };
var _hoisted_15 = { class: "tp-layout-row" };
var _hoisted_16 = { class: "tp-layout-control" };
var _hoisted_17 = { class: "tp-layout-row" };
var _hoisted_18 = { class: "tp-layout-control" };
var _hoisted_19 = { class: "tp-layout-row" };
var _hoisted_20 = { class: "tp-layout-control" };
var _hoisted_21 = { class: "tp-bg" };
var _hoisted_22 = { class: "tp-bg-head" };
var _hoisted_23 = { class: "tp-bg-actions" };
var _hoisted_24 = { class: "tp-bg-summary" };
var _hoisted_25 = { class: "bg-dialog" };
var _hoisted_26 = {
	key: 1,
	class: "bg-preview-empty"
};
var _hoisted_27 = {
	key: 2,
	class: "bg-preview-meta"
};
var _hoisted_28 = { class: "bg-controls" };
var _hoisted_29 = { class: "bg-field" };
var _hoisted_30 = { class: "bg-file" };
var _hoisted_31 = ["title"];
var _hoisted_32 = { class: "bg-field" };
var _hoisted_33 = { class: "bg-range" };
var _hoisted_34 = { class: "bg-range-value" };
var _hoisted_35 = { class: "bg-field" };
var ThemeSettings_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue.defineComponent)({
	name: "ThemeSettings",
	__name: "ThemeSettings",
	setup(__props) {
		const layout = getLayoutState();
		const activeId = (0, vue.ref)(getActiveThemeId());
		const mode = (0, vue.ref)(getMode());
		const background = (0, vue.ref)(getBackgroundState());
		const backgroundOpacity = (0, vue.ref)(background.value.opacity);
		const backgroundPlacement = (0, vue.ref)(background.value.placement);
		const backgroundDialog = (0, vue.ref)(false);
		const backgroundBusy = (0, vue.ref)(false);
		const backgroundDragging = (0, vue.ref)(false);
		const backgroundInput = (0, vue.ref)(null);
		const railEnabled = (0, vue.ref)(getRailState().enabled);
		const panelWidth = (0, vue.ref)(layout.panelWidth);
		const railSize = (0, vue.ref)(layout.railSize);
		const railGap = (0, vue.ref)(layout.railGap);
		let offTheme = null;
		let offBackground = null;
		let offRail = null;
		let offLayout = null;
		const activeName = (0, vue.computed)(() => THEMES.find((theme) => theme.id === activeId.value)?.name || "晨雾蓝");
		const placementLabel = (0, vue.computed)(() => BACKGROUND_PLACEMENTS.find((item) => item.value === background.value.placement)?.label || "填充");
		(0, vue.onMounted)(() => {
			offTheme = subscribe(() => {
				activeId.value = getActiveThemeId();
				mode.value = getMode();
			});
			offBackground = subscribeBackground(() => {
				background.value = getBackgroundState();
				backgroundOpacity.value = background.value.opacity;
				backgroundPlacement.value = background.value.placement;
			});
			offRail = subscribeRail(() => {
				railEnabled.value = getRailState().enabled;
			});
			offLayout = subscribeLayout(syncLayout);
			if (motionAllowed()) {
				const cards = document.querySelectorAll(".theme-pack .tp-card");
				animate(cards, {
					opacity: [0, 1],
					translateY: [10, 0],
					duration: 320,
					delay: stagger(22),
					ease: "outCubic",
					onComplete: () => cards.forEach((card) => card.style.removeProperty("transform"))
				});
			}
		});
		(0, vue.onBeforeUnmount)(() => {
			offTheme?.();
			offBackground?.();
			offRail?.();
			offLayout?.();
		});
		function motionAllowed() {
			return typeof matchMedia !== "function" || !matchMedia("(prefers-reduced-motion: reduce)").matches;
		}
		function syncLayout() {
			const next = getLayoutState();
			panelWidth.value = next.panelWidth;
			railSize.value = next.railSize;
			railGap.value = next.railGap;
		}
		function previewStyle(theme) {
			const palette = theme[mode.value];
			return {
				"--p-bg": palette.bg,
				"--p-sidebar": palette.sidebar,
				"--p-surface": palette.surface,
				"--p-border": palette.border,
				"--p-accent": palette.accent,
				"--p-soft": palette.accentSoft,
				"--p-text": palette.text2
			};
		}
		async function pick(theme) {
			setThemePack(theme.id);
			element_plus.ElMessage.success(`已应用「${theme.name}」`);
			await (0, vue.nextTick)();
			if (!motionAllowed()) return;
			const check = document.querySelector(`.theme-pack .tp-card[data-theme-id="${theme.id}"]`)?.querySelector(".tp-check");
			if (check) animate(check, {
				scale: [
					.3,
					1.35,
					1
				],
				opacity: [0, 1],
				duration: 420,
				ease: "outBack"
			});
			flashTheme(theme[mode.value].accent);
		}
		/** 换色时一层极淡的主色光晕扫过，给切换一点存在感。 */
		function flashTheme(color) {
			const flash = document.createElement("div");
			flash.className = "la-theme-flash";
			flash.style.background = `radial-gradient(circle at 50% 42%, ${color}, transparent 68%)`;
			document.body.appendChild(flash);
			animate(flash, {
				opacity: [.12, 0],
				scale: [1, 1.3],
				duration: 520,
				ease: "outQuad",
				onComplete: () => flash.remove()
			});
		}
		function pickBackground() {
			backgroundInput.value?.click();
		}
		function openBackgroundDialog() {
			background.value = getBackgroundState();
			backgroundOpacity.value = background.value.opacity;
			backgroundPlacement.value = background.value.placement;
			backgroundDialog.value = true;
		}
		/** 预览里只画图片本身；不透明度直接压在这个图层上，和真实背景一致。 */
		function backgroundImageStyle() {
			return {
				...backgroundPlacementStyle(background.value.placement),
				backgroundImage: background.value.url ? `url("${background.value.url}")` : "none",
				opacity: String(background.value.opacity / 100)
			};
		}
		/** 预览底板模拟宿主窗口底色，方便判断图片实际可见度。 */
		function backgroundPaneStyle() {
			return { background: mode.value === "dark" ? "#1e1f22" : "#f7f8fa" };
		}
		async function applyBackground(file) {
			backgroundBusy.value = true;
			try {
				await setBackgroundImage(file);
				background.value = getBackgroundState();
				backgroundOpacity.value = background.value.opacity;
				element_plus.ElMessage.success("背景图已更新");
			} catch (error) {
				element_plus.ElMessage.error(error?.message || "读取背景图失败");
			} finally {
				backgroundBusy.value = false;
			}
		}
		function onBackgroundFile(event) {
			const input = event.target;
			const file = input.files?.[0];
			input.value = "";
			if (file) applyBackground(file);
		}
		function onBackgroundDrop(event) {
			backgroundDragging.value = false;
			const file = event.dataTransfer?.files?.[0];
			if (file) applyBackground(file);
		}
		async function clearBackground() {
			try {
				await removeBackground();
				background.value = getBackgroundState();
				element_plus.ElMessage.success("已移除背景图");
			} catch (error) {
				element_plus.ElMessage.error(error?.message || "移除背景图失败");
			}
		}
		function changeBackgroundOpacity(value) {
			setBackgroundOpacity(value);
			background.value = getBackgroundState();
		}
		function changeBackgroundPlacement(value) {
			setBackgroundPlacement(value);
			background.value = getBackgroundState();
		}
		function toggleRail(value) {
			setRailEnabled(Boolean(value));
			element_plus.ElMessage.success(value ? "侧边栏图标已可拖动" : "已关闭侧边栏图标拖动");
		}
		function changePanelWidth(value) {
			setPanelWidth(value);
		}
		function changeRailSize(value) {
			setRailSize(value);
		}
		function changeRailGap(value) {
			setRailGap(value);
		}
		function resetAllLayout() {
			resetRailOrder();
			resetLayout();
			syncLayout();
			element_plus.ElMessage.success("已恢复默认布局");
		}
		return (_ctx, _cache) => {
			const _component_el_icon = (0, vue.resolveComponent)("el-icon");
			const _component_el_button = (0, vue.resolveComponent)("el-button");
			const _component_el_switch = (0, vue.resolveComponent)("el-switch");
			const _component_el_slider = (0, vue.resolveComponent)("el-slider");
			const _component_el_option = (0, vue.resolveComponent)("el-option");
			const _component_el_select = (0, vue.resolveComponent)("el-select");
			return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1, [
				_cache[26] || (_cache[26] = (0, vue.createElementVNode)("header", { class: "tp-page-head" }, [(0, vue.createElementVNode)("h3", null, "主题"), (0, vue.createElementVNode)("p", null, "配色方案与全局背景图；亮色 / 暗色仍由「外观」控制。")], -1)),
				(0, vue.createElementVNode)("div", _hoisted_2, [(0, vue.createElementVNode)("div", null, [_cache[9] || (_cache[9] = (0, vue.createElementVNode)("strong", null, "配色方案", -1)), (0, vue.createElementVNode)("p", null, "内置 " + (0, vue.toDisplayString)((0, vue.unref)(THEMES).length) + " 套配色，每套都有亮色与暗色两版。", 1)]), (0, vue.createElementVNode)("span", _hoisted_3, [(0, vue.createVNode)(_component_el_icon, { size: 13 }, {
					default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(mode.value === "dark" ? (0, vue.unref)(_element_plus_icons_vue.Moon) : (0, vue.unref)(_element_plus_icons_vue.Sunny))))]),
					_: 1
				}), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(mode.value === "dark" ? "暗色" : "亮色"), 1)])]),
				(0, vue.createElementVNode)("div", _hoisted_4, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(THEMES), (theme) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
						key: theme.id,
						type: "button",
						class: (0, vue.normalizeClass)(["tp-card", { active: theme.id === activeId.value }]),
						"data-theme-id": theme.id,
						"aria-pressed": theme.id === activeId.value,
						"aria-label": `应用主题 ${theme.name}`,
						onClick: ($event) => pick(theme)
					}, [(0, vue.createElementVNode)("span", {
						class: "tp-preview",
						style: (0, vue.normalizeStyle)(previewStyle(theme))
					}, [..._cache[10] || (_cache[10] = [(0, vue.createStaticVNode)("<span class=\"tp-side\" data-v-10b3f0bb><span class=\"tp-logo\" data-v-10b3f0bb></span><span class=\"tp-item is-active\" data-v-10b3f0bb></span><span class=\"tp-item\" data-v-10b3f0bb></span><span class=\"tp-item tp-item-short\" data-v-10b3f0bb></span></span><span class=\"tp-main\" data-v-10b3f0bb><span class=\"tp-title\" data-v-10b3f0bb></span><span class=\"tp-panel\" data-v-10b3f0bb><span class=\"tp-line\" data-v-10b3f0bb></span><span class=\"tp-line tp-line-short\" data-v-10b3f0bb></span><span class=\"tp-pill\" data-v-10b3f0bb></span></span></span>", 2)])], 4), (0, vue.createElementVNode)("span", _hoisted_6, [
						(0, vue.createElementVNode)("span", _hoisted_7, (0, vue.toDisplayString)(theme.name), 1),
						(0, vue.createElementVNode)("span", _hoisted_8, (0, vue.toDisplayString)(theme.tagline), 1),
						theme.id === activeId.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_9, [(0, vue.createVNode)(_component_el_icon, { size: 10 }, {
							default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Check))]),
							_: 1
						})])) : (0, vue.createCommentVNode)("", true)
					])], 10, _hoisted_5);
				}), 128))]),
				(0, vue.createElementVNode)("p", _hoisted_10, " 当前使用「" + (0, vue.toDisplayString)(activeName.value) + "」。主题只覆盖颜色令牌；界面布局由下方独立模块接管，停用插件后自动还原。 ", 1),
				(0, vue.createElementVNode)("section", _hoisted_11, [
					(0, vue.createElementVNode)("div", _hoisted_12, [_cache[12] || (_cache[12] = (0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("strong", null, "界面布局"), (0, vue.createElementVNode)("p", null, "宿主没提供的界面能力由插件外挂：拖动排序、拖宽面板、调整图标密度。")], -1)), (0, vue.createVNode)(_component_el_button, {
						size: "small",
						text: "",
						onClick: resetAllLayout
					}, {
						default: (0, vue.withCtx)(() => [..._cache[11] || (_cache[11] = [(0, vue.createTextVNode)("恢复默认", -1)])]),
						_: 1
					})]),
					(0, vue.createElementVNode)("div", _hoisted_13, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("div", { class: "tp-layout-copy" }, [(0, vue.createElementVNode)("strong", null, "侧边栏图标拖动排序"), (0, vue.createElementVNode)("span", null, "拖动图标调整顺序；键盘可用 Alt + ↑ / ↓。")], -1)), (0, vue.createElementVNode)("div", _hoisted_14, [(0, vue.createVNode)(_component_el_switch, {
						modelValue: railEnabled.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => railEnabled.value = $event),
						onChange: toggleRail
					}, null, 8, ["modelValue"])])]),
					(0, vue.createElementVNode)("div", _hoisted_15, [_cache[14] || (_cache[14] = (0, vue.createElementVNode)("div", { class: "tp-layout-copy" }, [(0, vue.createElementVNode)("strong", null, "侧边栏面板宽度"), (0, vue.createElementVNode)("span", null, "适用于插件提供的左侧面板（如周报）；也可以直接拖右边缘。")], -1)), (0, vue.createElementVNode)("div", _hoisted_16, [(0, vue.createVNode)(_component_el_slider, {
						modelValue: panelWidth.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => panelWidth.value = $event),
						min: 220,
						max: 460,
						step: 4,
						onInput: changePanelWidth
					}, null, 8, ["modelValue"]), (0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(panelWidth.value) + "px", 1)])]),
					(0, vue.createElementVNode)("div", _hoisted_17, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("div", { class: "tp-layout-copy" }, [(0, vue.createElementVNode)("strong", null, "图标尺寸")], -1)), (0, vue.createElementVNode)("div", _hoisted_18, [(0, vue.createVNode)(_component_el_slider, {
						modelValue: railSize.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => railSize.value = $event),
						min: 28,
						max: 42,
						step: 1,
						onInput: changeRailSize
					}, null, 8, ["modelValue"]), (0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(railSize.value) + "px", 1)])]),
					(0, vue.createElementVNode)("div", _hoisted_19, [_cache[16] || (_cache[16] = (0, vue.createElementVNode)("div", { class: "tp-layout-copy" }, [(0, vue.createElementVNode)("strong", null, "图标间距")], -1)), (0, vue.createElementVNode)("div", _hoisted_20, [(0, vue.createVNode)(_component_el_slider, {
						modelValue: railGap.value,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => railGap.value = $event),
						min: 2,
						max: 10,
						step: 1,
						onInput: changeRailGap
					}, null, 8, ["modelValue"]), (0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(railGap.value) + "px", 1)])])
				]),
				(0, vue.createElementVNode)("section", _hoisted_21, [
					(0, vue.createElementVNode)("div", _hoisted_22, [_cache[18] || (_cache[18] = (0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("strong", null, "全局背景图"), (0, vue.createElementVNode)("p", null, "像 IDEA 一样把图片垫在界面最底层，图片、不透明度与布局在独立面板里设置。")], -1)), (0, vue.createElementVNode)("div", _hoisted_23, [(0, vue.createVNode)(_component_el_button, {
						size: "small",
						onClick: openBackgroundDialog
					}, {
						default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(background.value.url ? "背景图…" : "设置背景图…"), 1)]),
						_: 1
					}), background.value.url ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_button, {
						key: 0,
						size: "small",
						type: "danger",
						plain: "",
						onClick: clearBackground
					}, {
						default: (0, vue.withCtx)(() => [..._cache[17] || (_cache[17] = [(0, vue.createTextVNode)("移除", -1)])]),
						_: 1
					})) : (0, vue.createCommentVNode)("", true)])]),
					(0, vue.createElementVNode)("p", _hoisted_24, [background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createTextVNode)(" 当前：" + (0, vue.toDisplayString)(background.value.name || "自定义图片") + " · " + (0, vue.toDisplayString)(background.value.opacity) + "% · " + (0, vue.toDisplayString)(placementLabel.value), 1)], 64)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 1 }, [(0, vue.createTextVNode)("未设置背景图")], 64))]),
					(0, vue.createElementVNode)("input", {
						ref_key: "backgroundInput",
						ref: backgroundInput,
						class: "tp-bg-input",
						type: "file",
						accept: "image/*",
						onChange: onBackgroundFile
					}, null, 544)
				]),
				(0, vue.createVNode)((0, vue.unref)(_lucky_apps_client_ui.AppDialog), {
					modelValue: backgroundDialog.value,
					"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => backgroundDialog.value = $event),
					title: "背景图",
					subtitle: "选择图片、调整不透明度与布局，设置即时生效",
					icon: "Picture",
					width: "760px"
				}, {
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_25, [(0, vue.createElementVNode)("div", {
						class: (0, vue.normalizeClass)(["bg-preview", {
							dragging: backgroundDragging.value,
							"is-empty": !background.value.url
						}]),
						style: (0, vue.normalizeStyle)(backgroundPaneStyle()),
						onClick: pickBackground,
						onDragover: _cache[4] || (_cache[4] = (0, vue.withModifiers)(($event) => backgroundDragging.value = true, ["prevent"])),
						onDragleave: _cache[5] || (_cache[5] = ($event) => backgroundDragging.value = false),
						onDrop: (0, vue.withModifiers)(onBackgroundDrop, ["prevent"])
					}, [background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", {
						key: 0,
						class: "bg-preview-image",
						style: (0, vue.normalizeStyle)(backgroundImageStyle())
					}, null, 4)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_26, [
						(0, vue.createVNode)(_component_el_icon, { size: 26 }, {
							default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Picture))]),
							_: 1
						}),
						_cache[19] || (_cache[19] = (0, vue.createElementVNode)("strong", null, "选择或拖入一张图片", -1)),
						_cache[20] || (_cache[20] = (0, vue.createElementVNode)("em", null, "支持 PNG / JPG / WebP / SVG，最大 20MB", -1))
					])), background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_27, (0, vue.toDisplayString)(background.value.opacity) + "% · " + (0, vue.toDisplayString)(placementLabel.value), 1)) : (0, vue.createCommentVNode)("", true)], 38), (0, vue.createElementVNode)("div", _hoisted_28, [
						(0, vue.createElementVNode)("div", _hoisted_29, [_cache[22] || (_cache[22] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "图片", -1)), (0, vue.createElementVNode)("div", _hoisted_30, [(0, vue.createElementVNode)("span", {
							class: "bg-filename",
							title: background.value.name
						}, (0, vue.toDisplayString)(background.value.name || "未选择图片"), 9, _hoisted_31), (0, vue.createVNode)(_component_el_button, {
							size: "small",
							loading: backgroundBusy.value,
							onClick: pickBackground
						}, {
							default: (0, vue.withCtx)(() => [..._cache[21] || (_cache[21] = [(0, vue.createTextVNode)("选择图片…", -1)])]),
							_: 1
						}, 8, ["loading"])])]),
						(0, vue.createElementVNode)("div", _hoisted_32, [_cache[23] || (_cache[23] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "不透明度", -1)), (0, vue.createElementVNode)("div", _hoisted_33, [(0, vue.createVNode)(_component_el_slider, {
							modelValue: backgroundOpacity.value,
							"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => backgroundOpacity.value = $event),
							min: 0,
							max: 100,
							step: 5,
							disabled: !background.value.url,
							onInput: changeBackgroundOpacity
						}, null, 8, ["modelValue", "disabled"]), (0, vue.createElementVNode)("b", _hoisted_34, (0, vue.toDisplayString)(Math.round(backgroundOpacity.value)) + "%", 1)])]),
						(0, vue.createElementVNode)("div", _hoisted_35, [_cache[24] || (_cache[24] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "布局", -1)), (0, vue.createVNode)(_component_el_select, {
							modelValue: backgroundPlacement.value,
							"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => backgroundPlacement.value = $event),
							class: "bg-select",
							disabled: !background.value.url,
							onChange: changeBackgroundPlacement
						}, {
							default: (0, vue.withCtx)(() => [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(BACKGROUND_PLACEMENTS), (item) => {
								return (0, vue.openBlock)(), (0, vue.createBlock)(_component_el_option, {
									key: item.value,
									label: item.label,
									value: item.value
								}, null, 8, ["label", "value"]);
							}), 128))]),
							_: 1
						}, 8, ["modelValue", "disabled"])]),
						_cache[25] || (_cache[25] = (0, vue.createElementVNode)("p", { class: "bg-hint" }, "布局与 IDEA 一致：填充会裁切铺满，适应会完整显示，平铺适合小图。", -1))
					])])]),
					_: 1
				}, 8, ["modelValue"])
			]);
		};
	}
});
// \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
// src/ThemeSettings.vue
var ThemeSettings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(ThemeSettings_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-10b3f0bb"]]);
// src/tray.ts
/**
* 托盘右键菜单：一级「主题」悬浮后在左侧展开二级菜单，
* 每套配色一张和设置中心同款的主题缩略图，点缩略图直接切换。
*
* 托盘菜单窗口只吃纯数据，缩略图只能走 iconSvg：画一版 mini 界面，
* 再用 addStyle 把图标位放大成卡片大小。换色后重新注册，✓ 和缩略图跟着走。
*/
var SECTION = "la-theme";
var STYLE_ID = "la-theme:tray";
var ITEM_PREFIX = "la-theme:pack:";
var TRAY_CSS = `
/* 二级面板排成 3×3 缩略图网格，标签放图下，和设置中心的主题卡一致； */
/* 第一层菜单只有这份面板用，顺便去掉重复标题，让 9 套配色正好放得下。 */
.tray-shell .tray-flyout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 3px;
}
.tray-shell .tray-flyout .tray-menu-title {
  display: none;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] {
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 0;
  text-align: center;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] .tray-icon {
  width: 64px !important;
  height: 40px !important;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] svg {
  width: 64px !important;
  height: 40px !important;
  border-radius: 4px;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] .tray-label {
  max-width: 100%;
  overflow: hidden;
  font-size: 10.5px;
  line-height: 1.2;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`;
/** 与设置中心主题卡同一套结构：底色 / 侧栏 / 标题 / 面板 / 主色胶囊。 */
function preview(theme) {
	const p = theme[getMode()];
	return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 64 40" aria-hidden="true"><rect width="64" height="40" rx="5" fill="${p.bg}"/><rect x="5" y="5" width="15" height="30" rx="3" fill="${p.sidebar}"/><rect x="7.5" y="7.5" width="5" height="5" rx="1.5" fill="${p.accent}"/><rect x="7.5" y="14.5" width="10" height="3.5" rx="1.75" fill="${p.accentSoft}"/><rect x="7.5" y="20" width="10" height="3" rx="1.5" fill="${p.border}"/><rect x="7.5" y="25" width="7" height="3" rx="1.5" fill="${p.border}"/><rect x="24" y="6" width="22" height="3.5" rx="1.75" fill="${p.text}" opacity="0.55"/><rect x="24" y="12" width="35" height="23" rx="3" fill="${p.surface}" stroke="${p.border}" stroke-width="0.7"/><rect x="27" y="15.5" width="24" height="3" rx="1.5" fill="${p.border}"/><rect x="27" y="20.5" width="16" height="3" rx="1.5" fill="${p.border}"/><rect x="27" y="27" width="11" height="4.5" rx="2.25" fill="${p.accent}"/></svg>`;
}
function initTrayMenu(ctx) {
	const disposeStyle = ctx.tray.addStyle?.(STYLE_ID, TRAY_CSS);
	let disposers = [];
	const render = () => {
		for (const dispose of disposers) dispose();
		const active = THEMES.find((theme) => theme.id === getActiveThemeId()) || THEMES[0];
		disposers = [ctx.tray.registerItem({
			id: "la-theme:themes",
			label: "主题",
			icon: "Brush",
			hint: active.name,
			section: SECTION,
			order: 200,
			children: THEMES.map((theme) => ({
				id: `${ITEM_PREFIX}${theme.id}`,
				label: theme.id === active.id ? `✓ ${theme.name}` : theme.name,
				iconSvg: preview(theme),
				keepOpen: true,
				onSelect: () => setThemePack(theme.id)
			}))
		})];
		ctx.tray.refresh?.();
	};
	render();
	const off = subscribe(render);
	return () => {
		off();
		for (const dispose of disposers) dispose();
		disposers = [];
		disposeStyle?.();
	};
}
// src/index.ts
var name = "la-theme";
var inject = [
	"theme",
	"settings",
	"tray"
];
function apply(ctx) {
	ctx.settings.register({
		id: "la-theme",
		label: "主题",
		icon: "Brush",
		order: 20,
		component: ThemeSettings_default
	});
	ctx.effect(() => {
		applyTheme();
		initBackground().catch((error) => console.warn("[la-theme] 背景图初始化失败:", error));
		initRailReorder();
		initLayout();
		return () => {
			destroyLayout();
			destroyRailReorder();
			destroyBackground();
			clearTheme();
		};
	});
	ctx.effect(() => {
		const off = ctx.theme.onChange(({ resolved }) => {
			setMode(resolved === "dark" ? "dark" : "light");
		});
		return () => off?.();
	});
	ctx.effect(() => initTrayMenu(ctx));
}
var src_default = {
	name,
	inject,
	apply
};
exports.apply = apply;
exports.default = src_default;
exports.inject = inject;
exports.name = name;

;(() => {
  if (document.querySelector('style[data-extension="la-theme"]')) return
  const style = document.createElement('style')
  style.dataset.extension = 'la-theme'
  style.textContent = "/* 全局背景图图层：固定在所有内容后面，不接收鼠标事件 */\n.la-theme-background {\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: opacity 0.2s ease;\n}\n\n/* 根节点让出底色，图片直接从最底层透出 */\nhtml.la-theme-has-bg body,\nhtml.la-theme-has-bg .wr-app {\n  background: transparent !important;\n}\n/* 侧边栏图标拖拽排序：只作用于宿主 rail 里的功能按钮。 */\n.rail-items > .rail-item.la-rail-sortable {\n  cursor: grab;\n  touch-action: none;\n}\n\n.rail-items > .rail-item.la-rail-sortable:active {\n  cursor: grabbing;\n}\n\n.rail-items > .rail-item.la-rail-dragging {\n  opacity: 0.3;\n}\n\n/* 跟随指针的拾起替身：克隆宿主按钮，保留主题色，只负责好看。 */\n.la-rail-ghost {\n  position: fixed;\n  z-index: 4000;\n  margin: 0;\n  pointer-events: none;\n  transform-origin: center;\n  transition: none !important;\n  border-radius: 8px !important;\n  background: var(--el-bg-color) !important;\n  color: var(--el-color-primary) !important;\n  box-shadow:\n    0 18px 38px -18px rgba(15, 23, 42, 0.55),\n    0 0 0 1px var(--el-color-primary-light-5);\n}\n\n.la-rail-ghost::before {\n  display: none !important;\n}\n\nhtml.la-rail-sorting,\nhtml.la-rail-sorting * {\n  cursor: grabbing !important;\n  user-select: none !important;\n}\n/* 界面布局增强：图标尺寸 / 间距，以及侧边栏面板拖宽。 */\n.rail-items {\n  gap: var(--la-rail-gap, 4px) !important;\n}\n\n.rail-items > .rail-item {\n  width: var(--la-rail-size, 34px) !important;\n  height: var(--la-rail-size, 34px) !important;\n}\n\n.rail-items > .rail-item .el-icon {\n  font-size: calc(var(--la-rail-size, 34px) * 0.53) !important;\n}\n\n.rail-items > .rail-item .rail-custom-icon,\n.rail-items > .rail-item .rail-custom-icon svg {\n  width: calc(var(--la-rail-size, 34px) * 0.53) !important;\n  height: calc(var(--la-rail-size, 34px) * 0.53) !important;\n}\n\n/* 面板右缘的拖宽热区：默认透明，悬停 / 拖动 / 聚焦时才亮起。 */\n.la-panel-resizer {\n  position: fixed;\n  z-index: 45;\n  display: none;\n  width: 10px;\n  transform: translateX(-50%);\n  cursor: col-resize;\n  touch-action: none;\n}\n\n.la-panel-resizer::after {\n  content: '';\n  position: absolute;\n  inset: 10px 4px;\n  border-radius: 999px;\n  background: var(--el-color-primary);\n  opacity: 0;\n  transition: opacity 0.16s ease;\n}\n\n.la-panel-resizer:hover::after,\n.la-panel-resizer:focus-visible::after,\nhtml.la-layout-resizing .la-panel-resizer::after {\n  opacity: 0.55;\n}\n\n.la-panel-resizer:focus-visible {\n  outline: none;\n}\n\nhtml.la-layout-resizing,\nhtml.la-layout-resizing * {\n  cursor: col-resize !important;\n  user-select: none !important;\n}\n\nhtml:not(.la-layout-resizing) .nav-panel {\n  transition: width 0.2s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html:not(.la-layout-resizing) .nav-panel {\n    transition: none;\n  }\n}\n\r\n/* 宿主会给外部设置面板渲染通用标题；本面板自带标题，隐藏它以统一排版。 */\n.settings-content-inner:has(.theme-pack) > .panel-head {\r\n  display: none;\n}\r\n\r\n/* 换主题时的一次性光晕。 */\n.la-theme-flash {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 3000;\r\n  pointer-events: none;\r\n  opacity: 0.12;\r\n  will-change: opacity, transform;\n}\n@media (prefers-reduced-motion: reduce) {\n.la-theme-flash {\r\n    display: none;\n}\n}\r\n\n.theme-pack[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\n}\n.tp-page-head h3[data-v-10b3f0bb] {\r\n  margin: 0 0 4px;\r\n  font-size: 16px;\r\n  font-weight: 650;\r\n  color: var(--el-text-color-primary);\n}\n.tp-page-head p[data-v-10b3f0bb] {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  line-height: 1.6;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-head[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\n}\n.tp-head strong[data-v-10b3f0bb] {\r\n  display: block;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  color: var(--el-text-color-primary);\n}\n.tp-head p[data-v-10b3f0bb] {\r\n  margin: 4px 0 0;\r\n  font-size: 11.5px;\r\n  line-height: 1.7;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-mode[data-v-10b3f0bb] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  flex: none;\r\n  padding: 3px 9px;\r\n  border-radius: 999px;\r\n  background: var(--el-fill-color-lighter);\r\n  font-size: 11px;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-grid[data-v-10b3f0bb] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr));\r\n  gap: 10px;\n}\n.tp-card[data-v-10b3f0bb] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border: 1px solid var(--el-border-color-lighter);\r\n  border-radius: 14px;\r\n  background: var(--el-bg-color);\r\n  font: inherit;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  transition: border-color 0.16s, box-shadow 0.16s, transform 0.16s;\n}\n.tp-card[data-v-10b3f0bb]:hover {\r\n  border-color: var(--el-color-primary-light-5);\r\n  box-shadow:\r\n    0 14px 30px -22px color-mix(in srgb, var(--el-color-primary) 55%, transparent),\r\n    var(--wr-shadow-md);\r\n  transform: translateY(-2px);\n}\n.tp-card.active[data-v-10b3f0bb] {\r\n  border-color: var(--el-color-primary);\r\n  box-shadow:\r\n    0 0 0 1px var(--el-color-primary),\r\n    0 16px 32px -24px var(--el-color-primary);\n}\n.tp-card[data-v-10b3f0bb]:focus-visible {\r\n  outline: 2px solid var(--el-color-primary-light-5);\r\n  outline-offset: 2px;\n}\n.tp-preview[data-v-10b3f0bb] {\r\n  position: relative;\r\n  display: flex;\r\n  gap: 6px;\r\n  height: 92px;\r\n  padding: 8px;\r\n  overflow: hidden;\r\n  border-bottom: 1px solid var(--p-border);\r\n  background: var(--p-bg);\n}\r\n\r\n/* 悬停时扫过一层很淡的高光，让预览有“玻璃”质感。 */\n.tp-preview[data-v-10b3f0bb]::after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: -20% -45%;\r\n  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, 0.24) 50%, transparent 58%);\r\n  transform: translateX(-70%);\r\n  transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);\r\n  pointer-events: none;\n}\n.tp-card:hover .tp-preview[data-v-10b3f0bb]::after,\r\n.tp-card:focus-visible .tp-preview[data-v-10b3f0bb]::after {\r\n  transform: translateX(70%);\n}\n.tp-side[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 34%;\r\n  padding: 6px;\r\n  border-radius: 8px;\r\n  background: var(--p-sidebar);\n}\n.tp-logo[data-v-10b3f0bb] {\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 4px;\r\n  background: var(--p-accent);\n}\n.tp-item[data-v-10b3f0bb] {\r\n  height: 5px;\r\n  border-radius: 3px;\r\n  background: var(--p-border);\n}\n.tp-item.is-active[data-v-10b3f0bb] {\r\n  background: var(--p-soft);\n}\r\n\r\n/* 选中卡的强调色做一条缓慢流动的光带，静止时也有质感。 */\n.tp-card.active .tp-item.is-active[data-v-10b3f0bb],\r\n.tp-card.active .tp-pill[data-v-10b3f0bb] {\r\n  background-image: linear-gradient(100deg, var(--p-accent), var(--p-soft), var(--p-accent));\r\n  background-size: 220% 100%;\r\n  animation: la-accent-flow-10b3f0bb 3.6s linear infinite;\n}\n@keyframes la-accent-flow-10b3f0bb {\nto {\r\n    background-position: -220% 0;\n}\n}\n.tp-item-short[data-v-10b3f0bb] {\r\n  width: 70%;\n}\n.tp-main[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n  min-width: 0;\n}\n.tp-title[data-v-10b3f0bb] {\r\n  width: 55%;\r\n  height: 7px;\r\n  border-radius: 3px;\r\n  background: var(--p-text);\r\n  opacity: 0.7;\n}\n.tp-panel[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  padding: 7px;\r\n  border: 1px solid var(--p-border);\r\n  border-radius: 8px;\r\n  background: var(--p-surface);\n}\n.tp-line[data-v-10b3f0bb] {\r\n  height: 5px;\r\n  border-radius: 3px;\r\n  background: var(--p-border);\n}\n.tp-line-short[data-v-10b3f0bb] {\r\n  width: 62%;\n}\n.tp-pill[data-v-10b3f0bb] {\r\n  width: 34px;\r\n  height: 9px;\r\n  margin-top: auto;\r\n  border-radius: 5px;\r\n  background: var(--p-accent);\n}\n.tp-meta[data-v-10b3f0bb] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  padding: 10px 12px 11px;\n}\n.tp-name[data-v-10b3f0bb] {\r\n  padding-right: 22px;\r\n  font-size: 12.5px;\r\n  font-weight: 600;\r\n  color: var(--el-text-color-primary);\n}\n.tp-tagline[data-v-10b3f0bb] {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-check[data-v-10b3f0bb] {\r\n  position: absolute;\r\n  top: 9px;\r\n  right: 10px;\r\n  display: grid;\r\n  place-items: center;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background: var(--el-color-primary);\r\n  color: #fff;\r\n  box-shadow: 0 0 0 3px var(--el-color-primary-light-9);\n}\n.tp-card.active .tp-check[data-v-10b3f0bb]::after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: -1px;\r\n  border-radius: 50%;\r\n  border: 1px solid var(--el-color-primary);\r\n  animation: la-check-halo-10b3f0bb 2.4s ease-out infinite;\n}\n@keyframes la-check-halo-10b3f0bb {\n0% {\r\n    transform: scale(0.85);\r\n    opacity: 0.55;\n}\n70%,\r\n  100% {\r\n    transform: scale(1.55);\r\n    opacity: 0;\n}\n}\n.tp-note[data-v-10b3f0bb] {\r\n  margin: 0;\r\n  font-size: 11px;\r\n  line-height: 1.7;\r\n  color: var(--el-text-color-placeholder);\n}\n.tp-bg[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding-top: 14px;\r\n  border-top: 1px solid var(--el-border-color-lighter);\n}\n.tp-bg-head[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\n}\n.tp-bg-head strong[data-v-10b3f0bb] {\r\n  display: block;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  color: var(--el-text-color-primary);\n}\n.tp-bg-head p[data-v-10b3f0bb] {\r\n  margin: 4px 0 0;\r\n  font-size: 11.5px;\r\n  line-height: 1.7;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-bg-actions[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: none;\r\n  gap: 6px;\n}\n.tp-bg-actions[data-v-10b3f0bb] .el-button + .el-button {\r\n  margin-left: 0;\n}\n.tp-bg-input[data-v-10b3f0bb] {\r\n  display: none;\n}\n.tp-bg-summary[data-v-10b3f0bb] {\r\n  margin: 0;\r\n  font-size: 11px;\r\n  color: var(--el-text-color-placeholder);\n}\n.tp-layout[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding-top: 14px;\r\n  border-top: 1px solid var(--el-border-color-lighter);\n}\n.tp-layout-head[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 16px;\n}\n.tp-layout-head > div[data-v-10b3f0bb] {\r\n  min-width: 0;\n}\n.tp-layout-head strong[data-v-10b3f0bb] {\r\n  display: block;\r\n  font-size: 13px;\r\n  font-weight: 650;\r\n  color: var(--el-text-color-primary);\n}\n.tp-layout-head p[data-v-10b3f0bb] {\r\n  margin: 4px 0 0;\r\n  font-size: 11.5px;\r\n  line-height: 1.7;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-layout-row[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  padding: 10px 12px;\r\n  border: 1px solid var(--el-border-color-lighter);\r\n  border-radius: 10px;\r\n  background: var(--el-fill-color-lighter);\n}\n.tp-layout-copy[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n  min-width: 0;\n}\n.tp-layout-copy strong[data-v-10b3f0bb] {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  color: var(--el-text-color-primary);\n}\n.tp-layout-copy span[data-v-10b3f0bb] {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: var(--el-text-color-secondary);\n}\n.tp-layout-actions[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: none;\r\n  align-items: center;\r\n  gap: 8px;\n}\n.tp-layout-control[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex: 0 1 220px;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-width: 0;\n}\n.tp-layout-control[data-v-10b3f0bb] .el-slider {\r\n  flex: 1;\r\n  margin: 0;\n}\n.tp-layout-control b[data-v-10b3f0bb] {\r\n  flex: none;\r\n  width: 42px;\r\n  font-family: var(--wr-mono, ui-monospace, monospace);\r\n  font-size: 10.5px;\r\n  font-variant-numeric: tabular-nums;\r\n  text-align: right;\r\n  color: var(--el-text-color-primary);\n}\n.bg-dialog[data-v-10b3f0bb] {\r\n  display: grid;\r\n  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);\r\n  gap: 18px;\r\n  align-items: start;\r\n  padding: 16px 20px 20px;\n}\n.bg-preview[data-v-10b3f0bb] {\r\n  position: relative;\r\n  width: 100%;\r\n  aspect-ratio: 16 / 10;\r\n  overflow: hidden;\r\n  border: 1px solid var(--el-border-color);\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  transition: border-color 0.16s, box-shadow 0.16s;\n}\n.bg-preview[data-v-10b3f0bb]:hover,\r\n.bg-preview.dragging[data-v-10b3f0bb] {\r\n  border-color: var(--el-color-primary);\r\n  box-shadow: 0 0 0 1px var(--el-color-primary);\n}\n.bg-preview-image[data-v-10b3f0bb] {\r\n  position: absolute;\r\n  inset: 0;\r\n  background-repeat: no-repeat;\r\n  transition: opacity 0.16s;\n}\n.bg-preview-empty[data-v-10b3f0bb] {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 4px;\r\n  color: var(--el-text-color-secondary);\n}\n.bg-preview-empty .el-icon[data-v-10b3f0bb] {\r\n  color: var(--el-color-primary);\n}\n.bg-preview-empty strong[data-v-10b3f0bb] {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  color: var(--el-text-color-primary);\n}\n.bg-preview-empty em[data-v-10b3f0bb] {\r\n  font-size: 10.5px;\r\n  font-style: normal;\r\n  color: var(--el-text-color-placeholder);\n}\n.bg-preview-meta[data-v-10b3f0bb] {\r\n  position: absolute;\r\n  right: 8px;\r\n  bottom: 8px;\r\n  padding: 2px 8px;\r\n  border-radius: 999px;\r\n  background: rgba(0, 0, 0, 0.45);\r\n  color: #fff;\r\n  font-size: 10px;\n}\n.bg-controls[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 14px;\n}\n.bg-field[data-v-10b3f0bb] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\n}\n.bg-label[data-v-10b3f0bb] {\r\n  font-size: 11px;\r\n  color: var(--el-text-color-secondary);\n}\n.bg-file[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\n}\n.bg-filename[data-v-10b3f0bb] {\r\n  flex: 1;\r\n  min-width: 0;\r\n  overflow: hidden;\r\n  font-size: 11.5px;\r\n  color: var(--el-text-color-primary);\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}\n.bg-range[data-v-10b3f0bb] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\n.bg-range[data-v-10b3f0bb] .el-slider {\r\n  flex: 1;\r\n  margin: 0;\n}\n.bg-range-value[data-v-10b3f0bb] {\r\n  flex: none;\r\n  width: 36px;\r\n  font-size: 11px;\r\n  font-variant-numeric: tabular-nums;\r\n  text-align: right;\r\n  color: var(--el-text-color-primary);\n}\n.bg-select[data-v-10b3f0bb] {\r\n  width: 100%;\n}\n.bg-hint[data-v-10b3f0bb] {\r\n  margin: 0;\r\n  font-size: 10.5px;\r\n  line-height: 1.7;\r\n  color: var(--el-text-color-placeholder);\n}\n@media (max-width: 640px) {\n.bg-dialog[data-v-10b3f0bb] {\r\n    grid-template-columns: 1fr;\n}\n}\n@media (prefers-reduced-motion: reduce) {\n.tp-card[data-v-10b3f0bb],\r\n  .tp-card .tp-preview[data-v-10b3f0bb]::after,\r\n  .tp-card .tp-check[data-v-10b3f0bb]::after,\r\n  .tp-card.active .tp-item.is-active[data-v-10b3f0bb],\r\n  .tp-card.active .tp-pill[data-v-10b3f0bb] {\r\n    transition: none;\r\n    animation: none;\n}\n}\r\n/*$vite$:1*/"
  document.head.appendChild(style)
})();

    return module.exports;
  }
});
