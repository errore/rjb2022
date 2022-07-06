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
exports.opacityHandler = exports.switchHandler = exports.playgroundRequestHandler = exports.blockRequestHandler = void 0;
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
function opacityHandler(target, layer, id) {
    function handler() {
        document.getElementById(id).innerText = target.value;
        layer.setOpacity(Number(target.value));
    }
    target.addEventListener('input', handler);
    target.addEventListener('change', handler);
}
exports.opacityHandler = opacityHandler;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const amap_jsapi_loader_1 = __webpack_require__(/*! @amap/amap-jsapi-loader */ "./node_modules/@amap/amap-jsapi-loader/dist/index.js");
__webpack_require__(/*! @amap/amap-jsapi-types */ "./node_modules/@amap/amap-jsapi-types/index.js");
const AnalysisLayer_1 = __webpack_require__(/*! ./AnalysisLayer */ "./src/AnalysisLayer.ts");
const handlers_1 = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");
amap_jsapi_loader_1.load({
    key: '1c96d5a705a60c162735d89fcb7a644d',
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.HawkEye'] // 定义插件
}).then((AMap) => {
    var _a, _b;
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
    const model = document.getElementById('model');
    (_a = document.getElementById('bit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        model.setAttribute('class', 'model display-model');
    });
    (_b = document.getElementById('exit_bit')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        model.setAttribute('class', 'model');
    });
}).catch((e) => {
    console.error(e);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuYWx5c2lzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmEsZUFBZSxLQUFzRCxvQkFBb0IsU0FBNkUsQ0FBQyxrQkFBa0IsY0FBYyxTQUFTLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGNBQWMsaUNBQWlDLFNBQVMseUJBQXlCLG1CQUFtQixzRUFBc0U7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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbihtLHApe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9cCgpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHApOihtPW18fHNlbGYsbS5BTWFwTG9hZGVyPXAoKSl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbShhKXt2YXIgYj1bXTthLkFNYXBVSSYmYi5wdXNoKHAoYS5BTWFwVUkpKTthLkxvY2EmJmIucHVzaChyKGEuTG9jYSkpO3JldHVybiBQcm9taXNlLmFsbChiKX1mdW5jdGlvbiBwKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihoLGMpe3ZhciBmPVtdO2lmKGEucGx1Z2lucylmb3IodmFyIGU9MDtlPGEucGx1Z2lucy5sZW5ndGg7ZSs9MSktMT09ZC5BTWFwVUkucGx1Z2lucy5pbmRleE9mKGEucGx1Z2luc1tlXSkmJmYucHVzaChhLnBsdWdpbnNbZV0pO2lmKGcuQU1hcFVJPT09Yi5mYWlsZWQpYyhcIlxcdTUyNGRcXHU2YjIxXFx1OGJmN1xcdTZjNDIgQU1hcFVJIFxcdTU5MzFcXHU4ZDI1XCIpO1xuZWxzZSBpZihnLkFNYXBVST09PWIubm90bG9hZCl7Zy5BTWFwVUk9Yi5sb2FkaW5nO2QuQU1hcFVJLnZlcnNpb249YS52ZXJzaW9ufHxkLkFNYXBVSS52ZXJzaW9uO2U9ZC5BTWFwVUkudmVyc2lvbjt2YXIgbD1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5oZWFkLGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtrLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtrLnNyYz1cImh0dHBzOi8vd2ViYXBpLmFtYXAuY29tL3VpL1wiK2UrXCIvbWFpbi5qc1wiO2sub25lcnJvcj1mdW5jdGlvbihhKXtnLkFNYXBVST1iLmZhaWxlZDtjKFwiXFx1OGJmN1xcdTZjNDIgQU1hcFVJIFxcdTU5MzFcXHU4ZDI1XCIpfTtrLm9ubG9hZD1mdW5jdGlvbigpe2cuQU1hcFVJPWIubG9hZGVkO2lmKGYubGVuZ3RoKXdpbmRvdy5BTWFwVUkubG9hZFVJKGYsZnVuY3Rpb24oKXtmb3IodmFyIGE9MCxiPWYubGVuZ3RoO2E8YjthKyspe3ZhciBjPWZbYV0uc3BsaXQoXCIvXCIpLnNsaWNlKC0xKVswXTt3aW5kb3cuQU1hcFVJW2NdPVxuYXJndW1lbnRzW2FdfWZvcihoKCk7bi5BTWFwVUkubGVuZ3RoOyluLkFNYXBVSS5zcGxpY2UoMCwxKVswXSgpfSk7ZWxzZSBmb3IoaCgpO24uQU1hcFVJLmxlbmd0aDspbi5BTWFwVUkuc3BsaWNlKDAsMSlbMF0oKX07bC5hcHBlbmRDaGlsZChrKX1lbHNlIGcuQU1hcFVJPT09Yi5sb2FkZWQ/YS52ZXJzaW9uJiZhLnZlcnNpb24hPT1kLkFNYXBVSS52ZXJzaW9uP2MoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEFNYXBVSSBcXHU2ZGY3XFx1NzUyOFwiKTpmLmxlbmd0aD93aW5kb3cuQU1hcFVJLmxvYWRVSShmLGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj1mLmxlbmd0aDthPGI7YSsrKXt2YXIgYz1mW2FdLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF07d2luZG93LkFNYXBVSVtjXT1hcmd1bWVudHNbYV19aCgpfSk6aCgpOmEudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5BTWFwVUkudmVyc2lvbj9jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBBTWFwVUkgXFx1NmRmN1xcdTc1MjhcIik6XG5uLkFNYXBVSS5wdXNoKGZ1bmN0aW9uKGEpe2E/YyhhKTpmLmxlbmd0aD93aW5kb3cuQU1hcFVJLmxvYWRVSShmLGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj1mLmxlbmd0aDthPGI7YSsrKXt2YXIgYz1mW2FdLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF07d2luZG93LkFNYXBVSVtjXT1hcmd1bWVudHNbYV19aCgpfSk6aCgpfSl9KX1mdW5jdGlvbiByKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihoLGMpe2lmKGcuTG9jYT09PWIuZmFpbGVkKWMoXCJcXHU1MjRkXFx1NmIyMVxcdThiZjdcXHU2YzQyIExvY2EgXFx1NTkzMVxcdThkMjVcIik7ZWxzZSBpZihnLkxvY2E9PT1iLm5vdGxvYWQpe2cuTG9jYT1iLmxvYWRpbmc7ZC5Mb2NhLnZlcnNpb249YS52ZXJzaW9ufHxkLkxvY2EudmVyc2lvbjt2YXIgZj1kLkxvY2EudmVyc2lvbixlPWQuQU1hcC52ZXJzaW9uLnN0YXJ0c1dpdGgoXCIyXCIpLGw9Zi5zdGFydHNXaXRoKFwiMlwiKTtpZihlJiYhbHx8IWUmJmwpYyhcIkpTQVBJIFxcdTRlMGUgTG9jYSBcXHU3MjQ4XFx1NjcyY1xcdTRlMGRcXHU1YmY5XFx1NWU5NFxcdWZmMDFcXHVmZjAxXCIpO1xuZWxzZXtlPWQua2V5O2w9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuaGVhZDt2YXIgaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2sudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2suc3JjPVwiaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbG9jYT92PVwiK2YrXCIma2V5PVwiK2U7ay5vbmVycm9yPWZ1bmN0aW9uKGEpe2cuTG9jYT1iLmZhaWxlZDtjKFwiXFx1OGJmN1xcdTZjNDIgQU1hcFVJIFxcdTU5MzFcXHU4ZDI1XCIpfTtrLm9ubG9hZD1mdW5jdGlvbigpe2cuTG9jYT1iLmxvYWRlZDtmb3IoaCgpO24uTG9jYS5sZW5ndGg7KW4uTG9jYS5zcGxpY2UoMCwxKVswXSgpfTtsLmFwcGVuZENoaWxkKGspfX1lbHNlIGcuTG9jYT09PWIubG9hZGVkP2EudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5Mb2NhLnZlcnNpb24/YyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgTG9jYSBcXHU2ZGY3XFx1NzUyOFwiKTpoKCk6YS52ZXJzaW9uJiZhLnZlcnNpb24hPT1kLkxvY2EudmVyc2lvbj9cbmMoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIExvY2EgXFx1NmRmN1xcdTc1MjhcIik6bi5Mb2NhLnB1c2goZnVuY3Rpb24oYSl7YT9jKGEpOmMoKX0pfSl9aWYoIXdpbmRvdyl0aHJvdyBFcnJvcihcIkFNYXAgSlNBUEkgY2FuIG9ubHkgYmUgdXNlZCBpbiBCcm93c2VyLlwiKTt2YXIgYjsoZnVuY3Rpb24oYSl7YS5ub3Rsb2FkPVwibm90bG9hZFwiO2EubG9hZGluZz1cImxvYWRpbmdcIjthLmxvYWRlZD1cImxvYWRlZFwiO2EuZmFpbGVkPVwiZmFpbGVkXCJ9KShifHwoYj17fSkpO3ZhciBkPXtrZXk6XCJcIixBTWFwOnt2ZXJzaW9uOlwiMS40LjE1XCIscGx1Z2luczpbXX0sQU1hcFVJOnt2ZXJzaW9uOlwiMS4xXCIscGx1Z2luczpbXX0sTG9jYTp7dmVyc2lvbjpcIjEuMy4yXCJ9fSxnPXtBTWFwOmIubm90bG9hZCxBTWFwVUk6Yi5ub3Rsb2FkLExvY2E6Yi5ub3Rsb2FkfSxuPXtBTWFwOltdLEFNYXBVSTpbXSxMb2NhOltdfSxxPVtdLHQ9ZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmXG4oZy5BTWFwPT09Yi5sb2FkZWQ/YSh3aW5kb3cuQU1hcCk6cS5wdXNoKGEpKX07cmV0dXJue2xvYWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGgsYyl7aWYoZy5BTWFwPT1iLmZhaWxlZCljKFwiXCIpO2Vsc2UgaWYoZy5BTWFwPT1iLm5vdGxvYWQpe3ZhciBmPWEua2V5LGU9YS52ZXJzaW9uLGw9YS5wbHVnaW5zO2Y/KHdpbmRvdy5BTWFwJiZcImxicy5hbWFwLmNvbVwiIT09bG9jYXRpb24uaG9zdCYmYyhcIlxcdTc5ODFcXHU2YjYyXFx1NTkxYVxcdTc5Y2RBUElcXHU1MmEwXFx1OGY3ZFxcdTY1YjlcXHU1ZjBmXFx1NmRmN1xcdTc1MjhcIiksZC5rZXk9ZixkLkFNYXAudmVyc2lvbj1lfHxkLkFNYXAudmVyc2lvbixkLkFNYXAucGx1Z2lucz1sfHxkLkFNYXAucGx1Z2lucyxnLkFNYXA9Yi5sb2FkaW5nLGU9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuaGVhZCx3aW5kb3cuX19fb25BUElMb2FkZWQ9ZnVuY3Rpb24oZCl7ZGVsZXRlIHdpbmRvdy5fX19vbkFQSUxvYWRlZDtpZihkKWcuQU1hcD1cbmIuZmFpbGVkLGMoZCk7ZWxzZSBmb3IoZy5BTWFwPWIubG9hZGVkLG0oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKTtxLmxlbmd0aDspcS5zcGxpY2UoMCwxKVswXSgpfSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbC50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsbC5zcmM9XCJodHRwczovL3dlYmFwaS5hbWFwLmNvbS9tYXBzP2NhbGxiYWNrPV9fX29uQVBJTG9hZGVkJnY9XCIrZC5BTWFwLnZlcnNpb24rXCIma2V5PVwiK2YrXCImcGx1Z2luPVwiK2QuQU1hcC5wbHVnaW5zLmpvaW4oXCIsXCIpLGwub25lcnJvcj1mdW5jdGlvbihhKXtnLkFNYXA9Yi5mYWlsZWQ7YyhhKX0sZS5hcHBlbmRDaGlsZChsKSk6YyhcIlxcdThiZjdcXHU1ODZiXFx1NTE5OWtleVwiKX1lbHNlIGlmKGcuQU1hcD09Yi5sb2FkZWQpaWYoYS5rZXkmJmEua2V5IT09ZC5rZXkpYyhcIlxcdTU5MWFcXHU0ZTJhXFx1NGUwZFxcdTRlMDBcXHU4MWY0XFx1NzY4NCBrZXlcIik7ZWxzZSBpZihhLnZlcnNpb24mJlxuYS52ZXJzaW9uIT09ZC5BTWFwLnZlcnNpb24pYyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgSlNBUEkgXFx1NmRmN1xcdTc1MjhcIik7ZWxzZXtmPVtdO2lmKGEucGx1Z2lucylmb3IoZT0wO2U8YS5wbHVnaW5zLmxlbmd0aDtlKz0xKS0xPT1kLkFNYXAucGx1Z2lucy5pbmRleE9mKGEucGx1Z2luc1tlXSkmJmYucHVzaChhLnBsdWdpbnNbZV0pO2lmKGYubGVuZ3RoKXdpbmRvdy5BTWFwLnBsdWdpbihmLGZ1bmN0aW9uKCl7bShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpfSk7ZWxzZSBtKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyl9ZWxzZSBpZihhLmtleSYmYS5rZXkhPT1kLmtleSljKFwiXFx1NTkxYVxcdTRlMmFcXHU0ZTBkXFx1NGUwMFxcdTgxZjRcXHU3Njg0IGtleVwiKTtlbHNlIGlmKGEudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5BTWFwLnZlcnNpb24pYyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgSlNBUEkgXFx1NmRmN1xcdTc1MjhcIik7XG5lbHNle3ZhciBrPVtdO2lmKGEucGx1Z2lucylmb3IoZT0wO2U8YS5wbHVnaW5zLmxlbmd0aDtlKz0xKS0xPT1kLkFNYXAucGx1Z2lucy5pbmRleE9mKGEucGx1Z2luc1tlXSkmJmsucHVzaChhLnBsdWdpbnNbZV0pO3QoZnVuY3Rpb24oKXtpZihrLmxlbmd0aCl3aW5kb3cuQU1hcC5wbHVnaW4oayxmdW5jdGlvbigpe20oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX0pO2Vsc2UgbShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpfSl9fSl9LHJlc2V0OmZ1bmN0aW9uKCl7ZGVsZXRlIHdpbmRvdy5BTWFwO2RlbGV0ZSB3aW5kb3cuQU1hcFVJO2RlbGV0ZSB3aW5kb3cuTG9jYTtkPXtrZXk6XCJcIixBTWFwOnt2ZXJzaW9uOlwiMS40LjE1XCIscGx1Z2luczpbXX0sQU1hcFVJOnt2ZXJzaW9uOlwiMS4xXCIscGx1Z2luczpbXX0sTG9jYTp7dmVyc2lvbjpcIjEuMy4yXCJ9fTtnPXtBTWFwOmIubm90bG9hZCxBTWFwVUk6Yi5ub3Rsb2FkLFxuTG9jYTpiLm5vdGxvYWR9O249e0FNYXA6W10sQU1hcFVJOltdLExvY2E6W119fX19KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldE5ld0FuYWx5c2lzTGF5ZXIgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVyc18xID0gcmVxdWlyZShcIi4vaGFuZGxlcnNcIik7XG5mdW5jdGlvbiBnZXROZXdBbmFseXNpc0xheWVyKEFNYXAsIG1vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSAnL3JvYWQvJzpcbiAgICAgICAgY2FzZSAnL2RpdmlkZS8nOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBTWFwLlRpbGVMYXllci5GbGV4aWJsZSh7XG4gICAgICAgICAgICAgICAgY2FjaGVTaXplOiAzMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDUwMCxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaWxlOiBmdW5jdGlvbiAoeCwgeSwgeiwgc3VjY2VzcywgZmFpbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0geWllbGQgaGFuZGxlcnNfMS5ibG9ja1JlcXVlc3RIYW5kbGVyKHgsIHksIHosIG1vZGUpOyAvLyDnrYnlvoXor7fmsYJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWcuc3JjID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoKTsgLy8g6K+35rGC5aSx6LSlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGltZyk7IC8vIOmAmuefpUFQSeWIh+eJh+WIm+W7uuWujOaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnL2NsYXNzaWZ5Lyc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFNYXAuVGlsZUxheWVyLkZsZXhpYmxlKHtcbiAgICAgICAgICAgICAgICBjYWNoZVNpemU6IDMwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogNTAwLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbGU6IGZ1bmN0aW9uICh4LCB5LCB6LCBzdWNjZXNzLCBmYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmhlaWdodCA9IGMud2lkdGggPSAyNTY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAxMDAsIDI1NSknO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0geWllbGQgaGFuZGxlcnNfMS5wbGF5Z3JvdW5kUmVxdWVzdEhhbmRsZXIoeCwgeSwgeik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5lbGxpcHNlKHBvc1swXSwgcG9zWzFdLCAxMCwgMTAsIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhjKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vZGVcIik7XG4gICAgfVxufVxuZXhwb3J0cy5nZXROZXdBbmFseXNpc0xheWVyID0gZ2V0TmV3QW5hbHlzaXNMYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9wYWNpdHlIYW5kbGVyID0gZXhwb3J0cy5zd2l0Y2hIYW5kbGVyID0gZXhwb3J0cy5wbGF5Z3JvdW5kUmVxdWVzdEhhbmRsZXIgPSBleHBvcnRzLmJsb2NrUmVxdWVzdEhhbmRsZXIgPSB2b2lkIDA7XG5mdW5jdGlvbiBibG9ja1JlcXVlc3RIYW5kbGVyKHgsIHksIHosIHJlcXVlc3QpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93ZWJzdDAyLmlzLmF1dG9uYXZpLmNvbS9hcHBtYXB0aWxlP3N0eWxlPTYmeD0nICsgeCArICcmeT0nICsgeSArICcmej0nICsgejtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpOyAvLyBnZXQgbWFwIGltYWdlXG4gICAgICAgICAgICBjb25zdCBmcm9tRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZnJvbURhdGEuYXBwZW5kKCdpbWcnLCBibG9iKTsgLy8gdG8gZnJvbSBkYXRhXG4gICAgICAgICAgICBjb25zdCBpbWdEYXRhID0geWllbGQgZmV0Y2gocmVxdWVzdCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZnJvbURhdGEgfSk7XG4gICAgICAgICAgICBjb25zdCByYXdJbWFnZSA9IHlpZWxkIGltZ0RhdGEuYmxvYigpOyAvLyBnZXQgYW5hbHlzaXMgaW1hZ2VcbiAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKHJhd0ltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ibG9ja1JlcXVlc3RIYW5kbGVyID0gYmxvY2tSZXF1ZXN0SGFuZGxlcjtcbmZ1bmN0aW9uIHBsYXlncm91bmRSZXF1ZXN0SGFuZGxlcih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vd2Vic3QwMi5pcy5hdXRvbmF2aS5jb20vYXBwbWFwdGlsZT9zdHlsZT02Jng9JyArIHggKyAnJnk9JyArIHkgKyAnJno9JyArIHo7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7IC8vIHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpOyAvLyDku45hcGnojrflj5blnLDlm75cbiAgICAgICAgICAgIGNvbnN0IGZyb21EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmcm9tRGF0YS5hcHBlbmQoJ2ltZycsIGJsb2IpOyAvLyDovazmjaLkuLpmcm9tIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBmZXRjaCgnL2NsYXNzaWZ5LycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZyb21EYXRhIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIGRhdGEuanNvbigpOyAvLyDovazmjaLkuLpqc29uIG9iamVjdFxuICAgICAgICAgICAgaWYgKE51bWJlcihqc29uLnNjb3JlKSA8IDAuNClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kaW5nQm94ID0ganNvbi5iYm94O1xuICAgICAgICAgICAgICAgIHJldHVybiBbYm91bmRpbmdCb3hbMF0gKyBib3VuZGluZ0JveFsyXSAvIDIsIGJvdW5kaW5nQm94WzFdICsgYm91bmRpbmdCb3hbM10gLyAyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnBsYXlncm91bmRSZXF1ZXN0SGFuZGxlciA9IHBsYXlncm91bmRSZXF1ZXN0SGFuZGxlcjtcbmZ1bmN0aW9uIHN3aXRjaEhhbmRsZXIodGFyZ2V0LCBsYXllcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGF5ZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyO1xuZnVuY3Rpb24gb3BhY2l0eUhhbmRsZXIodGFyZ2V0LCBsYXllciwgaWQpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICBsYXllci5zZXRPcGFjaXR5KE51bWJlcih0YXJnZXQudmFsdWUpKTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGFuZGxlcik7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xufVxuZXhwb3J0cy5vcGFjaXR5SGFuZGxlciA9IG9wYWNpdHlIYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhbWFwX2pzYXBpX2xvYWRlcl8xID0gcmVxdWlyZShcIkBhbWFwL2FtYXAtanNhcGktbG9hZGVyXCIpO1xucmVxdWlyZShcIkBhbWFwL2FtYXAtanNhcGktdHlwZXNcIik7XG5jb25zdCBBbmFseXNpc0xheWVyXzEgPSByZXF1aXJlKFwiLi9BbmFseXNpc0xheWVyXCIpO1xuY29uc3QgaGFuZGxlcnNfMSA9IHJlcXVpcmUoXCIuL2hhbmRsZXJzXCIpO1xuYW1hcF9qc2FwaV9sb2FkZXJfMS5sb2FkKHtcbiAgICBrZXk6ICcxYzk2ZDVhNzA1YTYwYzE2MjczNWQ4OWZjYjdhNjQ0ZCcsXG4gICAgdmVyc2lvbjogJzIuMCcsXG4gICAgcGx1Z2luczogWydBTWFwLlNjYWxlJywgJ0FNYXAuVG9vbEJhcicsICdBTWFwLkhhd2tFeWUnXSAvLyDlrprkuYnmj5Lku7Zcbn0pLnRoZW4oKEFNYXApID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGxldCBtYXAgPSBuZXcgQU1hcC5NYXAoJ2NvbnRhaW5lcicsIHtcbiAgICAgICAgY2VudGVyOiBbMTE2LjM5NzQyOCwgMzkuOTA5MjNdLFxuICAgICAgICB6b29tOiAxNCxcbiAgICAgICAgem9vbXM6IFszLCAxNV1cbiAgICB9KTsgLy8g5a6a5LmJ5Zyw5Zu+5Y+C5pWwXG4gICAgY29uc3Qgcm9hZExheWVyID0gQW5hbHlzaXNMYXllcl8xLmdldE5ld0FuYWx5c2lzTGF5ZXIoQU1hcCwgJy9yb2FkLycpOyAvLyDot6/nvZHlm77lsYJcbiAgICBjb25zdCBkaXZpZGVMYXllciA9IEFuYWx5c2lzTGF5ZXJfMS5nZXROZXdBbmFseXNpc0xheWVyKEFNYXAsICcvZGl2aWRlLycpOyAvLyDliIblibLlm77lsYJcbiAgICBjb25zdCBjbGFzc2lmeUxheWVyID0gQW5hbHlzaXNMYXllcl8xLmdldE5ld0FuYWx5c2lzTGF5ZXIoQU1hcCwgJy9jbGFzc2lmeS8nKTsgLy8g6K+G5Yir5YiG57G75Zu+5bGCIHBsYXlncm91bmRcbiAgICBtYXAuc2V0TGF5ZXJzKFtcbiAgICAgICAgbmV3IEFNYXAuVGlsZUxheWVyLlNhdGVsbGl0ZSgpLFxuICAgICAgICByb2FkTGF5ZXIsXG4gICAgICAgIGRpdmlkZUxheWVyLFxuICAgICAgICBjbGFzc2lmeUxheWVyXG4gICAgXSk7IC8vIOiuvue9ruWbvuWxglxuICAgIHJvYWRMYXllci5oaWRlKCk7XG4gICAgZGl2aWRlTGF5ZXIuaGlkZSgpO1xuICAgIGNsYXNzaWZ5TGF5ZXIuaGlkZSgpO1xuICAgIC8vIOmakOiXj1xuICAgIG1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlNjYWxlKCkpO1xuICAgIG1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlRvb2xCYXIoeyBwb3NpdGlvbjogJ1JUJyB9KSk7XG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEFNYXAuSGF3a0V5ZSh7IHZpc2libGU6IHRydWUgfSkpO1xuICAgIGNvbnN0IHJvYWRfc3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvYWRfc3dpdGNoJyk7XG4gICAgY29uc3QgY2xhc3NpZnlfc3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzaWZ5X3N3aXRjaCcpO1xuICAgIGNvbnN0IGRpdmlkZV9zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2aWRlX3N3aXRjaCcpO1xuICAgIGhhbmRsZXJzXzEuc3dpdGNoSGFuZGxlcihyb2FkX3N3aXRjaCwgcm9hZExheWVyKTtcbiAgICBoYW5kbGVyc18xLnN3aXRjaEhhbmRsZXIoY2xhc3NpZnlfc3dpdGNoLCBjbGFzc2lmeUxheWVyKTtcbiAgICBoYW5kbGVyc18xLnN3aXRjaEhhbmRsZXIoZGl2aWRlX3N3aXRjaCwgZGl2aWRlTGF5ZXIpO1xuICAgIC8vIOe7keWumuW8gOWFs+S6i+S7tlxuICAgIGNvbnN0IHJvYWRfb3BhY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2FkX29wYWNpdHknKTtcbiAgICBjb25zdCBkaXZpZGVfb3BhY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZpZGVfb3BhY2l0eScpO1xuICAgIGhhbmRsZXJzXzEub3BhY2l0eUhhbmRsZXIocm9hZF9vcGFjaXR5LCByb2FkTGF5ZXIsIFwicm9hZF9vcGFfdmFsXCIpO1xuICAgIGhhbmRsZXJzXzEub3BhY2l0eUhhbmRsZXIoZGl2aWRlX29wYWNpdHksIGRpdmlkZUxheWVyLCBcImRpdmlkZV9vcGFfdmFsXCIpO1xuICAgIC8vIOe7keWumumAj+aYjuW6pua7keadoVxuICAgIHJvYWRMYXllci5zZXRPcGFjaXR5KDAuNik7XG4gICAgZGl2aWRlTGF5ZXIuc2V0T3BhY2l0eSgwLjYpO1xuICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsJyk7XG4gICAgKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kZWwgZGlzcGxheS1tb2RlbCcpO1xuICAgIH0pO1xuICAgIChfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0X2JpdCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kZWwnKTtcbiAgICB9KTtcbn0pLmNhdGNoKChlKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==