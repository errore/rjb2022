/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@amap/amap-jsapi-loader/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@amap/amap-jsapi-loader/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
(function(m,p){ true?module.exports=p():undefined})(this,function(){function m(a){var b=[];a.AMapUI&&b.push(p(a.AMapUI));a.Loca&&b.push(r(a.Loca));return Promise.all(b)}function p(a){return new Promise(function(h,c){var f=[];if(a.plugins)for(var e=0;e<a.plugins.length;e+=1)-1==d.AMapUI.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(g.AMapUI===b.failed)c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");
else if(g.AMapUI===b.notload){g.AMapUI=b.loading;d.AMapUI.version=a.version||d.AMapUI.version;e=d.AMapUI.version;var l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/ui/"+e+"/main.js";k.onerror=function(a){g.AMapUI=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.AMapUI=b.loaded;if(f.length)window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=
arguments[a]}for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()});else for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()};l.appendChild(k)}else g.AMapUI===b.loaded?a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h():a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):
n.AMapUI.push(function(a){a?c(a):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h()})})}function r(a){return new Promise(function(h,c){if(g.Loca===b.failed)c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if(g.Loca===b.notload){g.Loca=b.loading;d.Loca.version=a.version||d.Loca.version;var f=d.Loca.version,e=d.AMap.version.startsWith("2"),l=f.startsWith("2");if(e&&!l||!e&&l)c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");
else{e=d.key;l=document.body||document.head;var k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/loca?v="+f+"&key="+e;k.onerror=function(a){g.Loca=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.Loca=b.loaded;for(h();n.Loca.length;)n.Loca.splice(0,1)[0]()};l.appendChild(k)}}else g.Loca===b.loaded?a.version&&a.version!==d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):h():a.version&&a.version!==d.Loca.version?
c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):n.Loca.push(function(a){a?c(a):c()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var b;(function(a){a.notload="notload";a.loading="loading";a.loaded="loaded";a.failed="failed"})(b||(b={}));var d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},g={AMap:b.notload,AMapUI:b.notload,Loca:b.notload},n={AMap:[],AMapUI:[],Loca:[]},q=[],t=function(a){"function"==typeof a&&
(g.AMap===b.loaded?a(window.AMap):q.push(a))};return{load:function(a){return new Promise(function(h,c){if(g.AMap==b.failed)c("");else if(g.AMap==b.notload){var f=a.key,e=a.version,l=a.plugins;f?(window.AMap&&"lbs.amap.com"!==location.host&&c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"),d.key=f,d.AMap.version=e||d.AMap.version,d.AMap.plugins=l||d.AMap.plugins,g.AMap=b.loading,e=document.body||document.head,window.___onAPILoaded=function(d){delete window.___onAPILoaded;if(d)g.AMap=
b.failed,c(d);else for(g.AMap=b.loaded,m(a).then(function(){h(window.AMap)})["catch"](c);q.length;)q.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+d.AMap.version+"&key="+f+"&plugin="+d.AMap.plugins.join(","),l.onerror=function(a){g.AMap=b.failed;c(a)},e.appendChild(l)):c("\u8bf7\u586b\u5199key")}else if(g.AMap==b.loaded)if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&
a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else{f=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(f.length)window.AMap.plugin(f,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)}else if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");
else{var k=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&k.push(a.plugins[e]);t(function(){if(k.length)window.AMap.plugin(k,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)})}})},reset:function(){delete window.AMap;delete window.AMapUI;delete window.Loca;d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}};g={AMap:b.notload,AMapUI:b.notload,
Loca:b.notload};n={AMap:[],AMapUI:[],Loca:[]}}}})


/***/ }),

/***/ "./node_modules/@amap/amap-jsapi-types/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@amap/amap-jsapi-types/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./src/AnalysisLayer.ts":
/*!******************************!*\
  !*** ./src/AnalysisLayer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewAnalysisLayer = void 0;
const handlers_1 = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");
function getNewAnalysisLayer(AMap, mode) {
    switch (mode) {
        case '/road/':
        case '/divide/':
            return new AMap.TileLayer.Flexible({
                cacheSize: 30,
                zIndex: 500,
                createTile: function (x, y, z, success, fail) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const img = document.createElement('img');
                        img.src = yield handlers_1.blockRequestHandler(x, y, z, mode); // 等待请求
                        if (img.src === '') {
                            fail(); // 请求失败
                        }
                        else {
                            success(img); // 通知API切片创建完成
                        }
                    });
                }
            });
        case '/classify/':
            return new AMap.TileLayer.Flexible({
                cacheSize: 30,
                zIndex: 500,
                createTile: function (x, y, z, success, fail) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const c = document.createElement('canvas');
                        c.height = c.width = 256;
                        const ctx = c.getContext('2d');
                        ctx.fillStyle = 'rgb(0, 100, 255)';
                        const pos = yield handlers_1.playgroundRequestHandler(x, y, z);
                        if (pos) {
                            ctx.beginPath();
                            ctx.ellipse(pos[0], pos[1], 10, 10, 1, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                        success(c);
                    });
                }
            });
        default:
            throw new Error("Invalid mode");
    }
}
exports.getNewAnalysisLayer = getNewAnalysisLayer;


/***/ }),

/***/ "./src/handlers.ts":
/*!*************************!*\
  !*** ./src/handlers.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgDragHandler = exports.opacityHandler = exports.switchHandler = exports.playgroundRequestHandler = exports.blockRequestHandler = void 0;
/**
 * 处理图块生成请求
 * @param x x
 * @param y y
 * @param z z
 * @param request 请求地址
 * @returns objectURL
 */
function blockRequestHandler(x, y, z, request) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;
        try {
            const response = yield fetch(url, { method: 'GET' });
            const blob = yield response.blob(); // get map image
            const fromData = new FormData();
            fromData.append('img', blob); // to from data
            const imgData = yield fetch(request, { method: 'POST', body: fromData });
            const rawImage = yield imgData.blob(); // get analysis image
            return URL.createObjectURL(rawImage);
        }
        catch (e) {
            console.error(e);
            return '';
        }
    });
}
exports.blockRequestHandler = blockRequestHandler;
/**
 * 处理物体位置识别标签
 * @param x x
 * @param y y
 * @param z z
 * @returns 标记位置
 */
function playgroundRequestHandler(x, y, z) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;
        try {
            let response = yield fetch(url, { method: 'GET' });
            if (response.status !== 200) {
                response = yield fetch(url, { method: 'GET' }); // retry
            }
            const blob = yield response.blob(); // 从api获取地图
            const fromData = new FormData();
            fromData.append('img', blob); // 转换为from data
            const data = yield fetch('/classify/', { method: 'POST', body: fromData });
            const json = yield data.json(); // 转换为json object
            if (Number(json.score) < 0.4)
                return null;
            else {
                const boundingBox = json.bbox;
                return [boundingBox[0] + boundingBox[2] / 2, boundingBox[1] + boundingBox[3] / 2];
            }
        }
        catch (e) {
            console.error(e);
            return null;
        }
    });
}
exports.playgroundRequestHandler = playgroundRequestHandler;
/**
 * 处理开关
 * @param target 开关
 * @param layer 图层
 */
function switchHandler(target, layer) {
    target.addEventListener('change', () => {
        if (target.checked) {
            layer.show();
        }
        else {
            layer.hide();
        }
    });
}
exports.switchHandler = switchHandler;
/**
 * 处理透明度
 * @param target 滑条
 * @param layer 图层
 * @param id 标签id
 */
function opacityHandler(target, layer, id) {
    function handler() {
        document.getElementById(id).innerText = target.value;
        layer.setOpacity(Number(target.value));
    }
    target.addEventListener('input', handler);
    target.addEventListener('change', handler);
}
exports.opacityHandler = opacityHandler;
/**
 * 处理UI图片传输
 * @param img 图片
 */
function imgDragHandler(img, num) {
    img.addEventListener('drop', (ev) => {
        var _a;
        ev.preventDefault();
        const fileList = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
        if (fileList.length === 0) {
            return false;
        }
        // 获取文件
        if (fileList[0].type.indexOf('image') === -1) {
            return false;
        }
        // 判断是否为图片
        img.src = URL.createObjectURL(fileList[0]);
    });
    // 拖放事件
    const input = document.getElementById('input_' + num);
    img.addEventListener('click', () => {
        input.click();
    });
    input.addEventListener('change', () => {
        if (input.files) {
            img.src = URL.createObjectURL(input.files[0]);
        }
    });
    // 点击事件
}
exports.imgDragHandler = imgDragHandler;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const amap_jsapi_loader_1 = __webpack_require__(/*! @amap/amap-jsapi-loader */ "./node_modules/@amap/amap-jsapi-loader/dist/index.js");
__webpack_require__(/*! @amap/amap-jsapi-types */ "./node_modules/@amap/amap-jsapi-types/index.js");
const AnalysisLayer_1 = __webpack_require__(/*! ./AnalysisLayer */ "./src/AnalysisLayer.ts");
const handlers_1 = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");
const model = document.getElementById('model');
(_a = document.getElementById('bit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    model === null || model === void 0 ? void 0 : model.setAttribute('class', 'model display-model');
});
(_b = document.getElementById('exit_bit')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    model === null || model === void 0 ? void 0 : model.setAttribute('class', 'model');
});
// 绑定bit界面
const img_1 = document.getElementById('img_1');
const img_2 = document.getElementById('img_2');
img_1.addEventListener('dragover', (ev) => ev.preventDefault());
img_2.addEventListener('dragover', (ev) => ev.preventDefault());
handlers_1.imgDragHandler(img_1, 1);
handlers_1.imgDragHandler(img_2, 2);
// 绑定拖放点击
const input_1 = document.getElementById('input_1');
const input_2 = document.getElementById('input_2');
const layer_0 = document.getElementById('bit_layer_0');
const layer_1 = document.getElementById('bit_layer_1');
const layer_2 = document.getElementById('bit_layer_2');
(_c = document.getElementById('bit_send')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(input_1.files && input_2.files))
        return false;
    try {
        const t1 = input_1.files[0];
        const t2 = input_2.files[0];
        let formData = new FormData();
        formData.append("t1", t1);
        formData.append("t2", t2);
        const response = yield fetch('/bit/', { method: "POST", body: formData });
        const blob = yield response.blob();
        layer_0.src = URL.createObjectURL(t1);
        layer_1.src = URL.createObjectURL(t2);
        layer_2.src = URL.createObjectURL(blob);
        layer_1.setAttribute('class', 'bit-layer bit-animate');
        layer_1.setAttribute('class', 'bit-layer bit-animate');
    }
    catch (e) {
        return false;
    }
}));
// 绑定BIT按钮
amap_jsapi_loader_1.load({
    key: '1c96d5a705a60c162735d89fcb7a644d',
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.HawkEye'] // 定义插件
}).then((AMap) => {
    let map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        zoom: 14,
        zooms: [3, 15]
    }); // 定义地图参数
    const roadLayer = AnalysisLayer_1.getNewAnalysisLayer(AMap, '/road/'); // 路网图层
    const divideLayer = AnalysisLayer_1.getNewAnalysisLayer(AMap, '/divide/'); // 分割图层
    const classifyLayer = AnalysisLayer_1.getNewAnalysisLayer(AMap, '/classify/'); // 识别分类图层 playground
    map.setLayers([
        new AMap.TileLayer.Satellite(),
        roadLayer,
        divideLayer,
        classifyLayer
    ]); // 设置图层
    roadLayer.hide();
    divideLayer.hide();
    classifyLayer.hide();
    // 隐藏
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar({ position: 'RT' }));
    map.addControl(new AMap.HawkEye({ visible: true }));
    const road_switch = document.getElementById('road_switch');
    const classify_switch = document.getElementById('classify_switch');
    const divide_switch = document.getElementById('divide_switch');
    handlers_1.switchHandler(road_switch, roadLayer);
    handlers_1.switchHandler(classify_switch, classifyLayer);
    handlers_1.switchHandler(divide_switch, divideLayer);
    // 绑定开关事件
    const road_opacity = document.getElementById('road_opacity');
    const divide_opacity = document.getElementById('divide_opacity');
    handlers_1.opacityHandler(road_opacity, roadLayer, "road_opa_val");
    handlers_1.opacityHandler(divide_opacity, divideLayer, "divide_opa_val");
    // 绑定透明度滑条
    roadLayer.setOpacity(0.6);
    divideLayer.setOpacity(0.6);
}).catch((e) => {
    console.error(e);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuYWx5c2lzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmEsZUFBZSxLQUFzRCxvQkFBb0IsU0FBNkUsQ0FBQyxrQkFBa0IsY0FBYyxTQUFTLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGNBQWMsaUNBQWlDLFNBQVMseUJBQXlCLG1CQUFtQixzRUFBc0U7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QWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNEJBQTRCLG1CQUFPLENBQUMscUZBQXlCO0FBQzdELG1CQUFPLENBQUMsOEVBQXdCO0FBQ2hDLHdCQUF3QixtQkFBTyxDQUFDLCtDQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQ0FBaUM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQLDBFQUEwRTtBQUMxRSw4RUFBOEU7QUFDOUUsa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpQkFBaUI7QUFDdEQscUNBQXFDLGdCQUFnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIndXNlIHN0cmljdCc7KGZ1bmN0aW9uKG0scCl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1wKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUocCk6KG09bXx8c2VsZixtLkFNYXBMb2FkZXI9cCgpKX0pKHRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiBtKGEpe3ZhciBiPVtdO2EuQU1hcFVJJiZiLnB1c2gocChhLkFNYXBVSSkpO2EuTG9jYSYmYi5wdXNoKHIoYS5Mb2NhKSk7cmV0dXJuIFByb21pc2UuYWxsKGIpfWZ1bmN0aW9uIHAoYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGgsYyl7dmFyIGY9W107aWYoYS5wbHVnaW5zKWZvcih2YXIgZT0wO2U8YS5wbHVnaW5zLmxlbmd0aDtlKz0xKS0xPT1kLkFNYXBVSS5wbHVnaW5zLmluZGV4T2YoYS5wbHVnaW5zW2VdKSYmZi5wdXNoKGEucGx1Z2luc1tlXSk7aWYoZy5BTWFwVUk9PT1iLmZhaWxlZCljKFwiXFx1NTI0ZFxcdTZiMjFcXHU4YmY3XFx1NmM0MiBBTWFwVUkgXFx1NTkzMVxcdThkMjVcIik7XG5lbHNlIGlmKGcuQU1hcFVJPT09Yi5ub3Rsb2FkKXtnLkFNYXBVST1iLmxvYWRpbmc7ZC5BTWFwVUkudmVyc2lvbj1hLnZlcnNpb258fGQuQU1hcFVJLnZlcnNpb247ZT1kLkFNYXBVSS52ZXJzaW9uO3ZhciBsPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmhlYWQsaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2sudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2suc3JjPVwiaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vdWkvXCIrZStcIi9tYWluLmpzXCI7ay5vbmVycm9yPWZ1bmN0aW9uKGEpe2cuQU1hcFVJPWIuZmFpbGVkO2MoXCJcXHU4YmY3XFx1NmM0MiBBTWFwVUkgXFx1NTkzMVxcdThkMjVcIil9O2sub25sb2FkPWZ1bmN0aW9uKCl7Zy5BTWFwVUk9Yi5sb2FkZWQ7aWYoZi5sZW5ndGgpd2luZG93LkFNYXBVSS5sb2FkVUkoZixmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9Zi5sZW5ndGg7YTxiO2ErKyl7dmFyIGM9ZlthXS5zcGxpdChcIi9cIikuc2xpY2UoLTEpWzBdO3dpbmRvdy5BTWFwVUlbY109XG5hcmd1bWVudHNbYV19Zm9yKGgoKTtuLkFNYXBVSS5sZW5ndGg7KW4uQU1hcFVJLnNwbGljZSgwLDEpWzBdKCl9KTtlbHNlIGZvcihoKCk7bi5BTWFwVUkubGVuZ3RoOyluLkFNYXBVSS5zcGxpY2UoMCwxKVswXSgpfTtsLmFwcGVuZENoaWxkKGspfWVsc2UgZy5BTWFwVUk9PT1iLmxvYWRlZD9hLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuQU1hcFVJLnZlcnNpb24/YyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgQU1hcFVJIFxcdTZkZjdcXHU3NTI4XCIpOmYubGVuZ3RoP3dpbmRvdy5BTWFwVUkubG9hZFVJKGYsZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPWYubGVuZ3RoO2E8YjthKyspe3ZhciBjPWZbYV0uc3BsaXQoXCIvXCIpLnNsaWNlKC0xKVswXTt3aW5kb3cuQU1hcFVJW2NdPWFyZ3VtZW50c1thXX1oKCl9KTpoKCk6YS52ZXJzaW9uJiZhLnZlcnNpb24hPT1kLkFNYXBVSS52ZXJzaW9uP2MoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEFNYXBVSSBcXHU2ZGY3XFx1NzUyOFwiKTpcbm4uQU1hcFVJLnB1c2goZnVuY3Rpb24oYSl7YT9jKGEpOmYubGVuZ3RoP3dpbmRvdy5BTWFwVUkubG9hZFVJKGYsZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPWYubGVuZ3RoO2E8YjthKyspe3ZhciBjPWZbYV0uc3BsaXQoXCIvXCIpLnNsaWNlKC0xKVswXTt3aW5kb3cuQU1hcFVJW2NdPWFyZ3VtZW50c1thXX1oKCl9KTpoKCl9KX0pfWZ1bmN0aW9uIHIoYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGgsYyl7aWYoZy5Mb2NhPT09Yi5mYWlsZWQpYyhcIlxcdTUyNGRcXHU2YjIxXFx1OGJmN1xcdTZjNDIgTG9jYSBcXHU1OTMxXFx1OGQyNVwiKTtlbHNlIGlmKGcuTG9jYT09PWIubm90bG9hZCl7Zy5Mb2NhPWIubG9hZGluZztkLkxvY2EudmVyc2lvbj1hLnZlcnNpb258fGQuTG9jYS52ZXJzaW9uO3ZhciBmPWQuTG9jYS52ZXJzaW9uLGU9ZC5BTWFwLnZlcnNpb24uc3RhcnRzV2l0aChcIjJcIiksbD1mLnN0YXJ0c1dpdGgoXCIyXCIpO2lmKGUmJiFsfHwhZSYmbCljKFwiSlNBUEkgXFx1NGUwZSBMb2NhIFxcdTcyNDhcXHU2NzJjXFx1NGUwZFxcdTViZjlcXHU1ZTk0XFx1ZmYwMVxcdWZmMDFcIik7XG5lbHNle2U9ZC5rZXk7bD1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5oZWFkO3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ay50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7ay5zcmM9XCJodHRwczovL3dlYmFwaS5hbWFwLmNvbS9sb2NhP3Y9XCIrZitcIiZrZXk9XCIrZTtrLm9uZXJyb3I9ZnVuY3Rpb24oYSl7Zy5Mb2NhPWIuZmFpbGVkO2MoXCJcXHU4YmY3XFx1NmM0MiBBTWFwVUkgXFx1NTkzMVxcdThkMjVcIil9O2sub25sb2FkPWZ1bmN0aW9uKCl7Zy5Mb2NhPWIubG9hZGVkO2ZvcihoKCk7bi5Mb2NhLmxlbmd0aDspbi5Mb2NhLnNwbGljZSgwLDEpWzBdKCl9O2wuYXBwZW5kQ2hpbGQoayl9fWVsc2UgZy5Mb2NhPT09Yi5sb2FkZWQ/YS52ZXJzaW9uJiZhLnZlcnNpb24hPT1kLkxvY2EudmVyc2lvbj9jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBMb2NhIFxcdTZkZjdcXHU3NTI4XCIpOmgoKTphLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuTG9jYS52ZXJzaW9uP1xuYyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgTG9jYSBcXHU2ZGY3XFx1NzUyOFwiKTpuLkxvY2EucHVzaChmdW5jdGlvbihhKXthP2MoYSk6YygpfSl9KX1pZighd2luZG93KXRocm93IEVycm9yKFwiQU1hcCBKU0FQSSBjYW4gb25seSBiZSB1c2VkIGluIEJyb3dzZXIuXCIpO3ZhciBiOyhmdW5jdGlvbihhKXthLm5vdGxvYWQ9XCJub3Rsb2FkXCI7YS5sb2FkaW5nPVwibG9hZGluZ1wiO2EubG9hZGVkPVwibG9hZGVkXCI7YS5mYWlsZWQ9XCJmYWlsZWRcIn0pKGJ8fChiPXt9KSk7dmFyIGQ9e2tleTpcIlwiLEFNYXA6e3ZlcnNpb246XCIxLjQuMTVcIixwbHVnaW5zOltdfSxBTWFwVUk6e3ZlcnNpb246XCIxLjFcIixwbHVnaW5zOltdfSxMb2NhOnt2ZXJzaW9uOlwiMS4zLjJcIn19LGc9e0FNYXA6Yi5ub3Rsb2FkLEFNYXBVSTpiLm5vdGxvYWQsTG9jYTpiLm5vdGxvYWR9LG49e0FNYXA6W10sQU1hcFVJOltdLExvY2E6W119LHE9W10sdD1mdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZcbihnLkFNYXA9PT1iLmxvYWRlZD9hKHdpbmRvdy5BTWFwKTpxLnB1c2goYSkpfTtyZXR1cm57bG9hZDpmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxjKXtpZihnLkFNYXA9PWIuZmFpbGVkKWMoXCJcIik7ZWxzZSBpZihnLkFNYXA9PWIubm90bG9hZCl7dmFyIGY9YS5rZXksZT1hLnZlcnNpb24sbD1hLnBsdWdpbnM7Zj8od2luZG93LkFNYXAmJlwibGJzLmFtYXAuY29tXCIhPT1sb2NhdGlvbi5ob3N0JiZjKFwiXFx1Nzk4MVxcdTZiNjJcXHU1OTFhXFx1NzljZEFQSVxcdTUyYTBcXHU4ZjdkXFx1NjViOVxcdTVmMGZcXHU2ZGY3XFx1NzUyOFwiKSxkLmtleT1mLGQuQU1hcC52ZXJzaW9uPWV8fGQuQU1hcC52ZXJzaW9uLGQuQU1hcC5wbHVnaW5zPWx8fGQuQU1hcC5wbHVnaW5zLGcuQU1hcD1iLmxvYWRpbmcsZT1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5oZWFkLHdpbmRvdy5fX19vbkFQSUxvYWRlZD1mdW5jdGlvbihkKXtkZWxldGUgd2luZG93Ll9fX29uQVBJTG9hZGVkO2lmKGQpZy5BTWFwPVxuYi5mYWlsZWQsYyhkKTtlbHNlIGZvcihnLkFNYXA9Yi5sb2FkZWQsbShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpO3EubGVuZ3RoOylxLnNwbGljZSgwLDEpWzBdKCl9LGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxsLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIixsLnNyYz1cImh0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHM/Y2FsbGJhY2s9X19fb25BUElMb2FkZWQmdj1cIitkLkFNYXAudmVyc2lvbitcIiZrZXk9XCIrZitcIiZwbHVnaW49XCIrZC5BTWFwLnBsdWdpbnMuam9pbihcIixcIiksbC5vbmVycm9yPWZ1bmN0aW9uKGEpe2cuQU1hcD1iLmZhaWxlZDtjKGEpfSxlLmFwcGVuZENoaWxkKGwpKTpjKFwiXFx1OGJmN1xcdTU4NmJcXHU1MTk5a2V5XCIpfWVsc2UgaWYoZy5BTWFwPT1iLmxvYWRlZClpZihhLmtleSYmYS5rZXkhPT1kLmtleSljKFwiXFx1NTkxYVxcdTRlMmFcXHU0ZTBkXFx1NGUwMFxcdTgxZjRcXHU3Njg0IGtleVwiKTtlbHNlIGlmKGEudmVyc2lvbiYmXG5hLnZlcnNpb24hPT1kLkFNYXAudmVyc2lvbiljKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBKU0FQSSBcXHU2ZGY3XFx1NzUyOFwiKTtlbHNle2Y9W107aWYoYS5wbHVnaW5zKWZvcihlPTA7ZTxhLnBsdWdpbnMubGVuZ3RoO2UrPTEpLTE9PWQuQU1hcC5wbHVnaW5zLmluZGV4T2YoYS5wbHVnaW5zW2VdKSYmZi5wdXNoKGEucGx1Z2luc1tlXSk7aWYoZi5sZW5ndGgpd2luZG93LkFNYXAucGx1Z2luKGYsZnVuY3Rpb24oKXttKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyl9KTtlbHNlIG0oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX1lbHNlIGlmKGEua2V5JiZhLmtleSE9PWQua2V5KWMoXCJcXHU1OTFhXFx1NGUyYVxcdTRlMGRcXHU0ZTAwXFx1ODFmNFxcdTc2ODQga2V5XCIpO2Vsc2UgaWYoYS52ZXJzaW9uJiZhLnZlcnNpb24hPT1kLkFNYXAudmVyc2lvbiljKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBKU0FQSSBcXHU2ZGY3XFx1NzUyOFwiKTtcbmVsc2V7dmFyIGs9W107aWYoYS5wbHVnaW5zKWZvcihlPTA7ZTxhLnBsdWdpbnMubGVuZ3RoO2UrPTEpLTE9PWQuQU1hcC5wbHVnaW5zLmluZGV4T2YoYS5wbHVnaW5zW2VdKSYmay5wdXNoKGEucGx1Z2luc1tlXSk7dChmdW5jdGlvbigpe2lmKGsubGVuZ3RoKXdpbmRvdy5BTWFwLnBsdWdpbihrLGZ1bmN0aW9uKCl7bShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpfSk7ZWxzZSBtKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyl9KX19KX0scmVzZXQ6ZnVuY3Rpb24oKXtkZWxldGUgd2luZG93LkFNYXA7ZGVsZXRlIHdpbmRvdy5BTWFwVUk7ZGVsZXRlIHdpbmRvdy5Mb2NhO2Q9e2tleTpcIlwiLEFNYXA6e3ZlcnNpb246XCIxLjQuMTVcIixwbHVnaW5zOltdfSxBTWFwVUk6e3ZlcnNpb246XCIxLjFcIixwbHVnaW5zOltdfSxMb2NhOnt2ZXJzaW9uOlwiMS4zLjJcIn19O2c9e0FNYXA6Yi5ub3Rsb2FkLEFNYXBVSTpiLm5vdGxvYWQsXG5Mb2NhOmIubm90bG9hZH07bj17QU1hcDpbXSxBTWFwVUk6W10sTG9jYTpbXX19fX0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5ld0FuYWx5c2lzTGF5ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IGhhbmRsZXJzXzEgPSByZXF1aXJlKFwiLi9oYW5kbGVyc1wiKTtcclxuZnVuY3Rpb24gZ2V0TmV3QW5hbHlzaXNMYXllcihBTWFwLCBtb2RlKSB7XHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICBjYXNlICcvcm9hZC8nOlxyXG4gICAgICAgIGNhc2UgJy9kaXZpZGUvJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBTWFwLlRpbGVMYXllci5GbGV4aWJsZSh7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVNpemU6IDMwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiA1MDAsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaWxlOiBmdW5jdGlvbiAoeCwgeSwgeiwgc3VjY2VzcywgZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0geWllbGQgaGFuZGxlcnNfMS5ibG9ja1JlcXVlc3RIYW5kbGVyKHgsIHksIHosIG1vZGUpOyAvLyDnrYnlvoXor7fmsYJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5zcmMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsKCk7IC8vIOivt+axguWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhpbWcpOyAvLyDpgJrnn6VBUEnliIfniYfliJvlu7rlrozmiJBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlICcvY2xhc3NpZnkvJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBTWFwLlRpbGVMYXllci5GbGV4aWJsZSh7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVNpemU6IDMwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiA1MDAsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaWxlOiBmdW5jdGlvbiAoeCwgeSwgeiwgc3VjY2VzcywgZmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBjLndpZHRoID0gMjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDEwMCwgMjU1KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHlpZWxkIGhhbmRsZXJzXzEucGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyKHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZWxsaXBzZShwb3NbMF0sIHBvc1sxXSwgMTAsIDEwLCAxLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbW9kZVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdldE5ld0FuYWx5c2lzTGF5ZXIgPSBnZXROZXdBbmFseXNpc0xheWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW1nRHJhZ0hhbmRsZXIgPSBleHBvcnRzLm9wYWNpdHlIYW5kbGVyID0gZXhwb3J0cy5zd2l0Y2hIYW5kbGVyID0gZXhwb3J0cy5wbGF5Z3JvdW5kUmVxdWVzdEhhbmRsZXIgPSBleHBvcnRzLmJsb2NrUmVxdWVzdEhhbmRsZXIgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiDlpITnkIblm77lnZfnlJ/miJDor7fmsYJcclxuICogQHBhcmFtIHggeFxyXG4gKiBAcGFyYW0geSB5XHJcbiAqIEBwYXJhbSB6IHpcclxuICogQHBhcmFtIHJlcXVlc3Qg6K+35rGC5Zyw5Z2AXHJcbiAqIEByZXR1cm5zIG9iamVjdFVSTFxyXG4gKi9cclxuZnVuY3Rpb24gYmxvY2tSZXF1ZXN0SGFuZGxlcih4LCB5LCB6LCByZXF1ZXN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL3dlYnN0MDIuaXMuYXV0b25hdmkuY29tL2FwcG1hcHRpbGU/c3R5bGU9NiZ4PScgKyB4ICsgJyZ5PScgKyB5ICsgJyZ6PScgKyB6O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7IC8vIGdldCBtYXAgaW1hZ2VcclxuICAgICAgICAgICAgY29uc3QgZnJvbURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZnJvbURhdGEuYXBwZW5kKCdpbWcnLCBibG9iKTsgLy8gdG8gZnJvbSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGltZ0RhdGEgPSB5aWVsZCBmZXRjaChyZXF1ZXN0LCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmcm9tRGF0YSB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmF3SW1hZ2UgPSB5aWVsZCBpbWdEYXRhLmJsb2IoKTsgLy8gZ2V0IGFuYWx5c2lzIGltYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKHJhd0ltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYmxvY2tSZXF1ZXN0SGFuZGxlciA9IGJsb2NrUmVxdWVzdEhhbmRsZXI7XHJcbi8qKlxyXG4gKiDlpITnkIbniankvZPkvY3nva7or4bliKvmoIfnrb5cclxuICogQHBhcmFtIHggeFxyXG4gKiBAcGFyYW0geSB5XHJcbiAqIEBwYXJhbSB6IHpcclxuICogQHJldHVybnMg5qCH6K6w5L2N572uXHJcbiAqL1xyXG5mdW5jdGlvbiBwbGF5Z3JvdW5kUmVxdWVzdEhhbmRsZXIoeCwgeSwgeikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93ZWJzdDAyLmlzLmF1dG9uYXZpLmNvbS9hcHBtYXB0aWxlP3N0eWxlPTYmeD0nICsgeCArICcmeT0nICsgeSArICcmej0nICsgejtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pOyAvLyByZXRyeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7IC8vIOS7jmFwaeiOt+WPluWcsOWbvlxyXG4gICAgICAgICAgICBjb25zdCBmcm9tRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmcm9tRGF0YS5hcHBlbmQoJ2ltZycsIGJsb2IpOyAvLyDovazmjaLkuLpmcm9tIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGZldGNoKCcvY2xhc3NpZnkvJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZnJvbURhdGEgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSB5aWVsZCBkYXRhLmpzb24oKTsgLy8g6L2s5o2i5Li6anNvbiBvYmplY3RcclxuICAgICAgICAgICAgaWYgKE51bWJlcihqc29uLnNjb3JlKSA8IDAuNClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0ganNvbi5iYm94O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtib3VuZGluZ0JveFswXSArIGJvdW5kaW5nQm94WzJdIC8gMiwgYm91bmRpbmdCb3hbMV0gKyBib3VuZGluZ0JveFszXSAvIDJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyID0gcGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyO1xyXG4vKipcclxuICog5aSE55CG5byA5YWzXHJcbiAqIEBwYXJhbSB0YXJnZXQg5byA5YWzXHJcbiAqIEBwYXJhbSBsYXllciDlm77lsYJcclxuICovXHJcbmZ1bmN0aW9uIHN3aXRjaEhhbmRsZXIodGFyZ2V0LCBsYXllcikge1xyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgbGF5ZXIuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGF5ZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXI7XHJcbi8qKlxyXG4gKiDlpITnkIbpgI/mmI7luqZcclxuICogQHBhcmFtIHRhcmdldCDmu5HmnaFcclxuICogQHBhcmFtIGxheWVyIOWbvuWxglxyXG4gKiBAcGFyYW0gaWQg5qCH562+aWRcclxuICovXHJcbmZ1bmN0aW9uIG9wYWNpdHlIYW5kbGVyKHRhcmdldCwgbGF5ZXIsIGlkKSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lclRleHQgPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGF5ZXIuc2V0T3BhY2l0eShOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBoYW5kbGVyKTtcclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcclxufVxyXG5leHBvcnRzLm9wYWNpdHlIYW5kbGVyID0gb3BhY2l0eUhhbmRsZXI7XHJcbi8qKlxyXG4gKiDlpITnkIZVSeWbvueJh+S8oOi+k1xyXG4gKiBAcGFyYW0gaW1nIOWbvueJh1xyXG4gKi9cclxuZnVuY3Rpb24gaW1nRHJhZ0hhbmRsZXIoaW1nLCBudW0pIHtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2KSA9PiB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZmlsZUxpc3QgPSAoX2EgPSBldi5kYXRhVHJhbnNmZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWxlcztcclxuICAgICAgICBpZiAoZmlsZUxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W5paH5Lu2XHJcbiAgICAgICAgaWYgKGZpbGVMaXN0WzBdLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKbkuLrlm77niYdcclxuICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlTGlzdFswXSk7XHJcbiAgICB9KTtcclxuICAgIC8vIOaLluaUvuS6i+S7tlxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfJyArIG51bSk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC5maWxlcykge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDngrnlh7vkuovku7ZcclxufVxyXG5leHBvcnRzLmltZ0RyYWdIYW5kbGVyID0gaW1nRHJhZ0hhbmRsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfYSwgX2IsIF9jO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFtYXBfanNhcGlfbG9hZGVyXzEgPSByZXF1aXJlKFwiQGFtYXAvYW1hcC1qc2FwaS1sb2FkZXJcIik7XHJcbnJlcXVpcmUoXCJAYW1hcC9hbWFwLWpzYXBpLXR5cGVzXCIpO1xyXG5jb25zdCBBbmFseXNpc0xheWVyXzEgPSByZXF1aXJlKFwiLi9BbmFseXNpc0xheWVyXCIpO1xyXG5jb25zdCBoYW5kbGVyc18xID0gcmVxdWlyZShcIi4vaGFuZGxlcnNcIik7XHJcbmNvbnN0IG1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsJyk7XHJcbihfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kZWwgZGlzcGxheS1tb2RlbCcpO1xyXG59KTtcclxuKF9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXRfYml0JykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGVsJyk7XHJcbn0pO1xyXG4vLyDnu5HlrppiaXTnlYzpnaJcclxuY29uc3QgaW1nXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nXzEnKTtcclxuY29uc3QgaW1nXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nXzInKTtcclxuaW1nXzEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXYpID0+IGV2LnByZXZlbnREZWZhdWx0KCkpO1xyXG5pbWdfMi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldikgPT4gZXYucHJldmVudERlZmF1bHQoKSk7XHJcbmhhbmRsZXJzXzEuaW1nRHJhZ0hhbmRsZXIoaW1nXzEsIDEpO1xyXG5oYW5kbGVyc18xLmltZ0RyYWdIYW5kbGVyKGltZ18yLCAyKTtcclxuLy8g57uR5a6a5ouW5pS+54K55Ye7XHJcbmNvbnN0IGlucHV0XzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfMScpO1xyXG5jb25zdCBpbnB1dF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0XzInKTtcclxuY29uc3QgbGF5ZXJfMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXRfbGF5ZXJfMCcpO1xyXG5jb25zdCBsYXllcl8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdF9sYXllcl8xJyk7XHJcbmNvbnN0IGxheWVyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYml0X2xheWVyXzInKTtcclxuKF9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdF9zZW5kJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgaWYgKCEoaW5wdXRfMS5maWxlcyAmJiBpbnB1dF8yLmZpbGVzKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHQxID0gaW5wdXRfMS5maWxlc1swXTtcclxuICAgICAgICBjb25zdCB0MiA9IGlucHV0XzIuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidDFcIiwgdDEpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInQyXCIsIHQyKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCcvYml0LycsIHsgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZm9ybURhdGEgfSk7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IHlpZWxkIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICBsYXllcl8wLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodDEpO1xyXG4gICAgICAgIGxheWVyXzEuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0Mik7XHJcbiAgICAgICAgbGF5ZXJfMi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGxheWVyXzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiaXQtbGF5ZXIgYml0LWFuaW1hdGUnKTtcclxuICAgICAgICBsYXllcl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYml0LWxheWVyIGJpdC1hbmltYXRlJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSkpO1xyXG4vLyDnu5HlrppCSVTmjInpkq5cclxuYW1hcF9qc2FwaV9sb2FkZXJfMS5sb2FkKHtcclxuICAgIGtleTogJzFjOTZkNWE3MDVhNjBjMTYyNzM1ZDg5ZmNiN2E2NDRkJyxcclxuICAgIHZlcnNpb246ICcyLjAnLFxyXG4gICAgcGx1Z2luczogWydBTWFwLlNjYWxlJywgJ0FNYXAuVG9vbEJhcicsICdBTWFwLkhhd2tFeWUnXSAvLyDlrprkuYnmj5Lku7ZcclxufSkudGhlbigoQU1hcCkgPT4ge1xyXG4gICAgbGV0IG1hcCA9IG5ldyBBTWFwLk1hcCgnY29udGFpbmVyJywge1xyXG4gICAgICAgIGNlbnRlcjogWzExNi4zOTc0MjgsIDM5LjkwOTIzXSxcclxuICAgICAgICB6b29tOiAxNCxcclxuICAgICAgICB6b29tczogWzMsIDE1XVxyXG4gICAgfSk7IC8vIOWumuS5ieWcsOWbvuWPguaVsFxyXG4gICAgY29uc3Qgcm9hZExheWVyID0gQW5hbHlzaXNMYXllcl8xLmdldE5ld0FuYWx5c2lzTGF5ZXIoQU1hcCwgJy9yb2FkLycpOyAvLyDot6/nvZHlm77lsYJcclxuICAgIGNvbnN0IGRpdmlkZUxheWVyID0gQW5hbHlzaXNMYXllcl8xLmdldE5ld0FuYWx5c2lzTGF5ZXIoQU1hcCwgJy9kaXZpZGUvJyk7IC8vIOWIhuWJsuWbvuWxglxyXG4gICAgY29uc3QgY2xhc3NpZnlMYXllciA9IEFuYWx5c2lzTGF5ZXJfMS5nZXROZXdBbmFseXNpc0xheWVyKEFNYXAsICcvY2xhc3NpZnkvJyk7IC8vIOivhuWIq+WIhuexu+WbvuWxgiBwbGF5Z3JvdW5kXHJcbiAgICBtYXAuc2V0TGF5ZXJzKFtcclxuICAgICAgICBuZXcgQU1hcC5UaWxlTGF5ZXIuU2F0ZWxsaXRlKCksXHJcbiAgICAgICAgcm9hZExheWVyLFxyXG4gICAgICAgIGRpdmlkZUxheWVyLFxyXG4gICAgICAgIGNsYXNzaWZ5TGF5ZXJcclxuICAgIF0pOyAvLyDorr7nva7lm77lsYJcclxuICAgIHJvYWRMYXllci5oaWRlKCk7XHJcbiAgICBkaXZpZGVMYXllci5oaWRlKCk7XHJcbiAgICBjbGFzc2lmeUxheWVyLmhpZGUoKTtcclxuICAgIC8vIOmakOiXj1xyXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEFNYXAuU2NhbGUoKSk7XHJcbiAgICBtYXAuYWRkQ29udHJvbChuZXcgQU1hcC5Ub29sQmFyKHsgcG9zaXRpb246ICdSVCcgfSkpO1xyXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEFNYXAuSGF3a0V5ZSh7IHZpc2libGU6IHRydWUgfSkpO1xyXG4gICAgY29uc3Qgcm9hZF9zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9hZF9zd2l0Y2gnKTtcclxuICAgIGNvbnN0IGNsYXNzaWZ5X3N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc2lmeV9zd2l0Y2gnKTtcclxuICAgIGNvbnN0IGRpdmlkZV9zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2aWRlX3N3aXRjaCcpO1xyXG4gICAgaGFuZGxlcnNfMS5zd2l0Y2hIYW5kbGVyKHJvYWRfc3dpdGNoLCByb2FkTGF5ZXIpO1xyXG4gICAgaGFuZGxlcnNfMS5zd2l0Y2hIYW5kbGVyKGNsYXNzaWZ5X3N3aXRjaCwgY2xhc3NpZnlMYXllcik7XHJcbiAgICBoYW5kbGVyc18xLnN3aXRjaEhhbmRsZXIoZGl2aWRlX3N3aXRjaCwgZGl2aWRlTGF5ZXIpO1xyXG4gICAgLy8g57uR5a6a5byA5YWz5LqL5Lu2XHJcbiAgICBjb25zdCByb2FkX29wYWNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9hZF9vcGFjaXR5Jyk7XHJcbiAgICBjb25zdCBkaXZpZGVfb3BhY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZpZGVfb3BhY2l0eScpO1xyXG4gICAgaGFuZGxlcnNfMS5vcGFjaXR5SGFuZGxlcihyb2FkX29wYWNpdHksIHJvYWRMYXllciwgXCJyb2FkX29wYV92YWxcIik7XHJcbiAgICBoYW5kbGVyc18xLm9wYWNpdHlIYW5kbGVyKGRpdmlkZV9vcGFjaXR5LCBkaXZpZGVMYXllciwgXCJkaXZpZGVfb3BhX3ZhbFwiKTtcclxuICAgIC8vIOe7keWumumAj+aYjuW6pua7keadoVxyXG4gICAgcm9hZExheWVyLnNldE9wYWNpdHkoMC42KTtcclxuICAgIGRpdmlkZUxheWVyLnNldE9wYWNpdHkoMC42KTtcclxufSkuY2F0Y2goKGUpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9