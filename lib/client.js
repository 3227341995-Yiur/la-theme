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
var listeners$1 = /* @__PURE__ */ new Set();
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
function notify$1() {
	for (const listener of listeners$1) try {
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
	notify$1();
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
		notify$1();
	}
	return activeId;
}
/** 跟随宿主亮暗模式切换调色板。 */
function setMode(next) {
	if (next !== "light" && next !== "dark") return;
	if (next === mode) return;
	mode = next;
	applyTheme();
	notify$1();
}
function getActiveThemeId() {
	return activeId;
}
function getMode() {
	return mode;
}
function subscribe(listener) {
	listeners$1.add(listener);
	return () => listeners$1.delete(listener);
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
var listeners = /* @__PURE__ */ new Set();
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
function notify() {
	for (const listener of listeners) try {
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
	notify();
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
	notify();
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
	notify();
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
	listeners.add(listener);
	return () => listeners.delete(listener);
}
/** 插件停用 / 卸载时移除图层，界面回到普通主题。 */
function destroyBackground() {
	destroyed = true;
	detach();
	listeners.clear();
}
// src/ThemeSettings.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "theme-pack" };
var _hoisted_2 = { class: "tp-head" };
var _hoisted_3 = { class: "tp-mode" };
var _hoisted_4 = { class: "tp-grid" };
var _hoisted_5 = [
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
var _hoisted_11 = { class: "tp-bg" };
var _hoisted_12 = { class: "tp-bg-head" };
var _hoisted_13 = { class: "tp-bg-actions" };
var _hoisted_14 = { class: "tp-bg-summary" };
var _hoisted_15 = { class: "bg-dialog" };
var _hoisted_16 = {
	key: 1,
	class: "bg-preview-empty"
};
var _hoisted_17 = {
	key: 2,
	class: "bg-preview-meta"
};
var _hoisted_18 = { class: "bg-controls" };
var _hoisted_19 = { class: "bg-field" };
var _hoisted_20 = { class: "bg-file" };
var _hoisted_21 = ["title"];
var _hoisted_22 = { class: "bg-field" };
var _hoisted_23 = { class: "bg-range" };
var _hoisted_24 = { class: "bg-range-value" };
var _hoisted_25 = { class: "bg-field" };
var _hoisted_26 = { class: "bg-footer" };
var ThemeSettings_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ (0, vue.defineComponent)({
	name: "ThemeSettings",
	__name: "ThemeSettings",
	setup(__props) {
		const activeId = (0, vue.ref)(getActiveThemeId());
		const mode = (0, vue.ref)(getMode());
		const background = (0, vue.ref)(getBackgroundState());
		const backgroundOpacity = (0, vue.ref)(background.value.opacity);
		const backgroundPlacement = (0, vue.ref)(background.value.placement);
		const backgroundDialog = (0, vue.ref)(false);
		const backgroundBusy = (0, vue.ref)(false);
		const backgroundDragging = (0, vue.ref)(false);
		const backgroundInput = (0, vue.ref)(null);
		let offTheme = null;
		let offBackground = null;
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
		});
		(0, vue.onBeforeUnmount)(() => {
			offTheme?.();
			offBackground?.();
		});
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
		function pick(theme) {
			setThemePack(theme.id);
			element_plus.ElMessage.success(`已应用「${theme.name}」`);
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
		return (_ctx, _cache) => {
			const _component_el_icon = (0, vue.resolveComponent)("el-icon");
			const _component_el_button = (0, vue.resolveComponent)("el-button");
			const _component_el_slider = (0, vue.resolveComponent)("el-slider");
			const _component_el_option = (0, vue.resolveComponent)("el-option");
			const _component_el_select = (0, vue.resolveComponent)("el-select");
			const _component_el_dialog = (0, vue.resolveComponent)("el-dialog");
			return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1, [
				(0, vue.createElementVNode)("div", _hoisted_2, [(0, vue.createElementVNode)("div", null, [_cache[6] || (_cache[6] = (0, vue.createElementVNode)("strong", null, "配色方案", -1)), (0, vue.createElementVNode)("p", null, "内置 " + (0, vue.toDisplayString)((0, vue.unref)(THEMES).length) + " 套配色。亮色 / 暗色仍由「外观」控制，每套主题都有对应的两种模式。", 1)]), (0, vue.createElementVNode)("span", _hoisted_3, [(0, vue.createVNode)(_component_el_icon, { size: 13 }, {
					default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(mode.value === "dark" ? (0, vue.unref)(_element_plus_icons_vue.Moon) : (0, vue.unref)(_element_plus_icons_vue.Sunny))))]),
					_: 1
				}), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(mode.value === "dark" ? "暗色" : "亮色"), 1)])]),
				(0, vue.createElementVNode)("div", _hoisted_4, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(THEMES), (theme) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
						key: theme.id,
						type: "button",
						class: (0, vue.normalizeClass)(["tp-card", { active: theme.id === activeId.value }]),
						"aria-pressed": theme.id === activeId.value,
						"aria-label": `应用主题 ${theme.name}`,
						onClick: ($event) => pick(theme)
					}, [(0, vue.createElementVNode)("span", {
						class: "tp-preview",
						style: (0, vue.normalizeStyle)(previewStyle(theme))
					}, [..._cache[7] || (_cache[7] = [(0, vue.createStaticVNode)("<span class=\"tp-side\" data-v-3f81b5bb><span class=\"tp-logo\" data-v-3f81b5bb></span><span class=\"tp-item is-active\" data-v-3f81b5bb></span><span class=\"tp-item\" data-v-3f81b5bb></span><span class=\"tp-item tp-item-short\" data-v-3f81b5bb></span></span><span class=\"tp-main\" data-v-3f81b5bb><span class=\"tp-title\" data-v-3f81b5bb></span><span class=\"tp-panel\" data-v-3f81b5bb><span class=\"tp-line\" data-v-3f81b5bb></span><span class=\"tp-line tp-line-short\" data-v-3f81b5bb></span><span class=\"tp-pill\" data-v-3f81b5bb></span></span></span>", 2)])], 4), (0, vue.createElementVNode)("span", _hoisted_6, [
						(0, vue.createElementVNode)("span", _hoisted_7, (0, vue.toDisplayString)(theme.name), 1),
						(0, vue.createElementVNode)("span", _hoisted_8, (0, vue.toDisplayString)(theme.tagline), 1),
						theme.id === activeId.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_9, [(0, vue.createVNode)(_component_el_icon, { size: 10 }, {
							default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Check))]),
							_: 1
						})])) : (0, vue.createCommentVNode)("", true)
					])], 10, _hoisted_5);
				}), 128))]),
				(0, vue.createElementVNode)("p", _hoisted_10, " 当前使用「" + (0, vue.toDisplayString)(activeName.value) + "」。主题只覆盖颜色令牌，不改动布局与字体；停用插件后自动回到宿主默认配色。 ", 1),
				(0, vue.createElementVNode)("section", _hoisted_11, [
					(0, vue.createElementVNode)("div", _hoisted_12, [_cache[9] || (_cache[9] = (0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("strong", null, "全局背景图"), (0, vue.createElementVNode)("p", null, "像 IDEA 一样把图片垫在界面最底层，图片、不透明度与布局在独立面板里设置。")], -1)), (0, vue.createElementVNode)("div", _hoisted_13, [(0, vue.createVNode)(_component_el_button, {
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
						default: (0, vue.withCtx)(() => [..._cache[8] || (_cache[8] = [(0, vue.createTextVNode)("移除", -1)])]),
						_: 1
					})) : (0, vue.createCommentVNode)("", true)])]),
					(0, vue.createElementVNode)("p", _hoisted_14, [background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createTextVNode)(" 当前：" + (0, vue.toDisplayString)(background.value.name || "自定义图片") + " · " + (0, vue.toDisplayString)(background.value.opacity) + "% · " + (0, vue.toDisplayString)(placementLabel.value), 1)], 64)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 1 }, [(0, vue.createTextVNode)("未设置背景图")], 64))]),
					(0, vue.createElementVNode)("input", {
						ref_key: "backgroundInput",
						ref: backgroundInput,
						class: "tp-bg-input",
						type: "file",
						accept: "image/*",
						onChange: onBackgroundFile
					}, null, 544)
				]),
				(0, vue.createVNode)(_component_el_dialog, {
					modelValue: backgroundDialog.value,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => backgroundDialog.value = $event),
					title: "背景图",
					width: "min(720px, 92vw)",
					"append-to-body": "",
					"close-on-click-modal": false,
					class: "tp-bg-dialog"
				}, {
					footer: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_26, [
						background.value.url ? ((0, vue.openBlock)(), (0, vue.createBlock)(_component_el_button, {
							key: 0,
							type: "danger",
							plain: "",
							onClick: clearBackground
						}, {
							default: (0, vue.withCtx)(() => [..._cache[17] || (_cache[17] = [(0, vue.createTextVNode)("清除背景图", -1)])]),
							_: 1
						})) : (0, vue.createCommentVNode)("", true),
						_cache[19] || (_cache[19] = (0, vue.createElementVNode)("span", { class: "bg-footer-spacer" }, null, -1)),
						(0, vue.createVNode)(_component_el_button, {
							type: "primary",
							onClick: _cache[4] || (_cache[4] = ($event) => backgroundDialog.value = false)
						}, {
							default: (0, vue.withCtx)(() => [..._cache[18] || (_cache[18] = [(0, vue.createTextVNode)("完成", -1)])]),
							_: 1
						})
					])]),
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_15, [(0, vue.createElementVNode)("div", {
						class: (0, vue.normalizeClass)(["bg-preview", {
							dragging: backgroundDragging.value,
							"is-empty": !background.value.url
						}]),
						style: (0, vue.normalizeStyle)(backgroundPaneStyle()),
						onClick: pickBackground,
						onDragover: _cache[0] || (_cache[0] = (0, vue.withModifiers)(($event) => backgroundDragging.value = true, ["prevent"])),
						onDragleave: _cache[1] || (_cache[1] = ($event) => backgroundDragging.value = false),
						onDrop: (0, vue.withModifiers)(onBackgroundDrop, ["prevent"])
					}, [background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", {
						key: 0,
						class: "bg-preview-image",
						style: (0, vue.normalizeStyle)(backgroundImageStyle())
					}, null, 4)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_16, [
						(0, vue.createVNode)(_component_el_icon, { size: 26 }, {
							default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(_element_plus_icons_vue.Picture))]),
							_: 1
						}),
						_cache[10] || (_cache[10] = (0, vue.createElementVNode)("strong", null, "选择或拖入一张图片", -1)),
						_cache[11] || (_cache[11] = (0, vue.createElementVNode)("em", null, "支持 PNG / JPG / WebP / SVG，最大 20MB", -1))
					])), background.value.url ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_17, (0, vue.toDisplayString)(background.value.opacity) + "% · " + (0, vue.toDisplayString)(placementLabel.value), 1)) : (0, vue.createCommentVNode)("", true)], 38), (0, vue.createElementVNode)("div", _hoisted_18, [
						(0, vue.createElementVNode)("div", _hoisted_19, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "图片", -1)), (0, vue.createElementVNode)("div", _hoisted_20, [(0, vue.createElementVNode)("span", {
							class: "bg-filename",
							title: background.value.name
						}, (0, vue.toDisplayString)(background.value.name || "未选择图片"), 9, _hoisted_21), (0, vue.createVNode)(_component_el_button, {
							size: "small",
							loading: backgroundBusy.value,
							onClick: pickBackground
						}, {
							default: (0, vue.withCtx)(() => [..._cache[12] || (_cache[12] = [(0, vue.createTextVNode)("选择图片…", -1)])]),
							_: 1
						}, 8, ["loading"])])]),
						(0, vue.createElementVNode)("div", _hoisted_22, [_cache[14] || (_cache[14] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "不透明度", -1)), (0, vue.createElementVNode)("div", _hoisted_23, [(0, vue.createVNode)(_component_el_slider, {
							modelValue: backgroundOpacity.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => backgroundOpacity.value = $event),
							min: 0,
							max: 100,
							step: 5,
							disabled: !background.value.url,
							onInput: changeBackgroundOpacity
						}, null, 8, ["modelValue", "disabled"]), (0, vue.createElementVNode)("b", _hoisted_24, (0, vue.toDisplayString)(Math.round(backgroundOpacity.value)) + "%", 1)])]),
						(0, vue.createElementVNode)("div", _hoisted_25, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("span", { class: "bg-label" }, "布局", -1)), (0, vue.createVNode)(_component_el_select, {
							modelValue: backgroundPlacement.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => backgroundPlacement.value = $event),
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
						_cache[16] || (_cache[16] = (0, vue.createElementVNode)("p", { class: "bg-hint" }, "布局与 IDEA 一致：填充会裁切铺满，适应会完整显示，平铺适合小图。", -1))
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
var ThemeSettings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(ThemeSettings_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3f81b5bb"]]);
// src/index.ts
var name = "la-theme";
var inject = ["theme", "settings"];
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
		return () => {
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
  style.textContent = "/* 全局背景图图层：固定在所有内容后面，不接收鼠标事件 */\n.la-theme-background {\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: opacity 0.2s ease;\n}\n\n/* 根节点让出底色，图片直接从最底层透出 */\nhtml.la-theme-has-bg body,\nhtml.la-theme-has-bg .wr-app {\n  background: transparent !important;\n}\n\n.theme-pack[data-v-3f81b5bb] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.tp-head[data-v-3f81b5bb] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.tp-head strong[data-v-3f81b5bb] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--el-text-color-primary);\n}\n.tp-head p[data-v-3f81b5bb] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  line-height: 1.7;\n  color: var(--el-text-color-secondary);\n}\n.tp-mode[data-v-3f81b5bb] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  flex: none;\n  padding: 3px 9px;\n  border-radius: 999px;\n  background: var(--el-fill-color-lighter);\n  font-size: 11px;\n  color: var(--el-text-color-secondary);\n}\n.tp-grid[data-v-3f81b5bb] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr));\n  gap: 10px;\n}\n.tp-card[data-v-3f81b5bb] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid var(--el-border-color-lighter);\n  border-radius: 14px;\n  background: var(--el-bg-color);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: border-color 0.16s, box-shadow 0.16s, transform 0.16s;\n}\n.tp-card[data-v-3f81b5bb]:hover {\n  border-color: var(--el-color-primary-light-5);\n  box-shadow: var(--wr-shadow-md);\n  transform: translateY(-1px);\n}\n.tp-card.active[data-v-3f81b5bb] {\n  border-color: var(--el-color-primary);\n  box-shadow: 0 0 0 1px var(--el-color-primary);\n}\n.tp-card[data-v-3f81b5bb]:focus-visible {\n  outline: 2px solid var(--el-color-primary-light-5);\n  outline-offset: 2px;\n}\n.tp-preview[data-v-3f81b5bb] {\n  display: flex;\n  gap: 6px;\n  height: 92px;\n  padding: 8px;\n  border-bottom: 1px solid var(--p-border);\n  background: var(--p-bg);\n}\n.tp-side[data-v-3f81b5bb] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  width: 34%;\n  padding: 6px;\n  border-radius: 8px;\n  background: var(--p-sidebar);\n}\n.tp-logo[data-v-3f81b5bb] {\n  width: 12px;\n  height: 12px;\n  border-radius: 4px;\n  background: var(--p-accent);\n}\n.tp-item[data-v-3f81b5bb] {\n  height: 5px;\n  border-radius: 3px;\n  background: var(--p-border);\n}\n.tp-item.is-active[data-v-3f81b5bb] {\n  background: var(--p-soft);\n}\n.tp-item-short[data-v-3f81b5bb] {\n  width: 70%;\n}\n.tp-main[data-v-3f81b5bb] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.tp-title[data-v-3f81b5bb] {\n  width: 55%;\n  height: 7px;\n  border-radius: 3px;\n  background: var(--p-text);\n  opacity: 0.7;\n}\n.tp-panel[data-v-3f81b5bb] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 5px;\n  padding: 7px;\n  border: 1px solid var(--p-border);\n  border-radius: 8px;\n  background: var(--p-surface);\n}\n.tp-line[data-v-3f81b5bb] {\n  height: 5px;\n  border-radius: 3px;\n  background: var(--p-border);\n}\n.tp-line-short[data-v-3f81b5bb] {\n  width: 62%;\n}\n.tp-pill[data-v-3f81b5bb] {\n  width: 34px;\n  height: 9px;\n  margin-top: auto;\n  border-radius: 5px;\n  background: var(--p-accent);\n}\n.tp-meta[data-v-3f81b5bb] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 9px 11px 10px;\n}\n.tp-name[data-v-3f81b5bb] {\n  padding-right: 22px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--el-text-color-primary);\n}\n.tp-tagline[data-v-3f81b5bb] {\n  font-size: 10.5px;\n  line-height: 1.5;\n  color: var(--el-text-color-secondary);\n}\n.tp-check[data-v-3f81b5bb] {\n  position: absolute;\n  top: 9px;\n  right: 10px;\n  display: grid;\n  place-items: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--el-color-primary);\n  color: #fff;\n}\n.tp-note[data-v-3f81b5bb] {\n  margin: 0;\n  font-size: 10.5px;\n  line-height: 1.7;\n  color: var(--el-text-color-placeholder);\n}\n.tp-bg[data-v-3f81b5bb] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid var(--el-border-color-lighter);\n}\n.tp-bg-head[data-v-3f81b5bb] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.tp-bg-head strong[data-v-3f81b5bb] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--el-text-color-primary);\n}\n.tp-bg-head p[data-v-3f81b5bb] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  line-height: 1.7;\n  color: var(--el-text-color-secondary);\n}\n.tp-bg-actions[data-v-3f81b5bb] {\n  display: flex;\n  flex: none;\n  gap: 6px;\n}\n.tp-bg-actions[data-v-3f81b5bb] .el-button + .el-button {\n  margin-left: 0;\n}\n.tp-bg-input[data-v-3f81b5bb] {\n  display: none;\n}\n.tp-bg-summary[data-v-3f81b5bb] {\n  margin: 0;\n  font-size: 10.5px;\n  color: var(--el-text-color-placeholder);\n}\n.bg-dialog[data-v-3f81b5bb] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);\n  gap: 18px;\n  align-items: start;\n}\n.bg-preview[data-v-3f81b5bb] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  overflow: hidden;\n  border: 1px solid var(--el-border-color);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: border-color 0.16s, box-shadow 0.16s;\n}\n.bg-preview[data-v-3f81b5bb]:hover,\n.bg-preview.dragging[data-v-3f81b5bb] {\n  border-color: var(--el-color-primary);\n  box-shadow: 0 0 0 1px var(--el-color-primary);\n}\n.bg-preview-image[data-v-3f81b5bb] {\n  position: absolute;\n  inset: 0;\n  background-repeat: no-repeat;\n  transition: opacity 0.16s;\n}\n.bg-preview-empty[data-v-3f81b5bb] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  color: var(--el-text-color-secondary);\n}\n.bg-preview-empty .el-icon[data-v-3f81b5bb] {\n  color: var(--el-color-primary);\n}\n.bg-preview-empty strong[data-v-3f81b5bb] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--el-text-color-primary);\n}\n.bg-preview-empty em[data-v-3f81b5bb] {\n  font-size: 10.5px;\n  font-style: normal;\n  color: var(--el-text-color-placeholder);\n}\n.bg-preview-meta[data-v-3f81b5bb] {\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  font-size: 10px;\n}\n.bg-controls[data-v-3f81b5bb] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.bg-field[data-v-3f81b5bb] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.bg-label[data-v-3f81b5bb] {\n  font-size: 11px;\n  color: var(--el-text-color-secondary);\n}\n.bg-file[data-v-3f81b5bb] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bg-filename[data-v-3f81b5bb] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  font-size: 11.5px;\n  color: var(--el-text-color-primary);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.bg-range[data-v-3f81b5bb] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.bg-range[data-v-3f81b5bb] .el-slider {\n  flex: 1;\n  margin: 0;\n}\n.bg-range-value[data-v-3f81b5bb] {\n  flex: none;\n  width: 36px;\n  font-size: 11px;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n  color: var(--el-text-color-primary);\n}\n.bg-select[data-v-3f81b5bb] {\n  width: 100%;\n}\n.bg-hint[data-v-3f81b5bb] {\n  margin: 0;\n  font-size: 10.5px;\n  line-height: 1.7;\n  color: var(--el-text-color-placeholder);\n}\n.bg-footer[data-v-3f81b5bb] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.bg-footer-spacer[data-v-3f81b5bb] {\n  flex: 1;\n}\n@media (max-width: 640px) {\n.bg-dialog[data-v-3f81b5bb] {\n    grid-template-columns: 1fr;\n}\n}\n/*$vite$:1*/"
  document.head.appendChild(style)
})();

    return module.exports;
  }
});
