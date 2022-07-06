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
    const input = document.getElementById('input_' + num);
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
        if (input.files) {
            input.files[0] = fileList[0];
        }
    });
    // 拖放事件
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
    if (input_1.files.length === 0 || input_2.files.length === 0)
        return false;
    try {
        const t1 = input_1.files[0];
        const t2 = input_2.files[0];
        let formData = new FormData();
        formData.append("t1", t1);
        formData.append("t2", t2);
        const response = yield fetch('/bit/', { method: "POST", body: formData });
        if (response.status === 500)
            return false;
        const blob = yield response.blob();
        layer_0.src = img_1.src;
        layer_1.src = img_2.src;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuYWx5c2lzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmEsZUFBZSxLQUFzRCxvQkFBb0IsU0FBNkUsQ0FBQyxrQkFBa0IsY0FBYyxTQUFTLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGNBQWMsaUNBQWlDLFNBQVMseUJBQXlCLG1CQUFtQixzRUFBc0U7QUFDcmQsOEJBQThCLG1CQUFtQiw2Q0FBNkMsbUJBQW1CLHNFQUFzRSx5QkFBeUIsaURBQWlELHNCQUFzQixrQkFBa0IsdUNBQXVDLG9CQUFvQixrQkFBa0IsOENBQThDLHVCQUF1QixJQUFJLEtBQUssbUNBQW1DO0FBQ3ZlLGFBQWEsUUFBUSxnQkFBZ0IsMkJBQTJCLEVBQUUsYUFBYSxnQkFBZ0IsNEJBQTRCLGlCQUFpQixnTEFBZ0wsdUJBQXVCLElBQUksS0FBSyxtQ0FBbUMsOEJBQThCLElBQUk7QUFDamEsMEJBQTBCLGtEQUFrRCx1QkFBdUIsSUFBSSxLQUFLLG1DQUFtQyw4QkFBOEIsSUFBSSxNQUFNLEVBQUUsRUFBRSxjQUFjLGlDQUFpQyxxRUFBcUUsNEJBQTRCLGlCQUFpQix5Q0FBeUMsMEVBQTBFO0FBQy9jLEtBQUssUUFBUSwrQkFBK0IsdUNBQXVDLHlCQUF5QixvREFBb0Qsc0JBQXNCLGdCQUFnQix1Q0FBdUMsb0JBQW9CLGdCQUFnQixRQUFRLGNBQWMsMEJBQTBCLGtCQUFrQjtBQUNuViwwRkFBMEYsV0FBVyxFQUFFLEVBQUUsa0VBQWtFLE1BQU0sYUFBYSxvQkFBb0Isb0JBQW9CLGtCQUFrQixrQkFBa0IsVUFBVSxHQUFHLE9BQU8sYUFBYSw0QkFBNEIsU0FBUyx5QkFBeUIsT0FBTyxpQkFBaUIsSUFBSSwrQ0FBK0MsSUFBSSwwQkFBMEIsb0JBQW9CO0FBQ3RlLDhDQUE4QyxPQUFPLGlCQUFpQixpQ0FBaUMsMEJBQTBCLDJCQUEyQixvQ0FBb0MsaVJBQWlSLDZCQUE2QjtBQUM5ZSxjQUFjLDhDQUE4QyxlQUFlLGNBQWMsU0FBUyxvQkFBb0IsZ05BQWdOLGdCQUFnQixLQUFLLDhDQUE4QywrRkFBK0Y7QUFDeGUsOEZBQThGLEtBQUssS0FBSyxxQkFBcUIsbUJBQW1CLG9FQUFvRSw0Q0FBNEMscUJBQXFCLGVBQWUsY0FBYyxFQUFFLDBCQUEwQixlQUFlLGNBQWMsMkVBQTJFO0FBQ3RiLEtBQUssU0FBUyxxQkFBcUIsbUJBQW1CLG9FQUFvRSxhQUFhLDRDQUE0QyxxQkFBcUIsZUFBZSxjQUFjLEVBQUUsMEJBQTBCLGVBQWUsY0FBYyxHQUFHLEVBQUUsa0JBQWtCLG1CQUFtQixxQkFBcUIsbUJBQW1CLEdBQUcsYUFBYSw0QkFBNEIsU0FBUyx5QkFBeUIsT0FBTyxrQkFBa0IsR0FBRztBQUMxZCxnQkFBZ0IsR0FBRyw2QkFBNkI7Ozs7Ozs7Ozs7OztBQ1ZoRDs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pEYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRCwrQ0FBK0M7QUFDL0M7QUFDQSx5Q0FBeUM7QUFDekMsa0RBQWtELGlDQUFpQztBQUNuRixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBLDZDQUE2QyxnQkFBZ0IsRUFBRTtBQUMvRDtBQUNBLCtDQUErQztBQUMvQztBQUNBLHlDQUF5QztBQUN6QyxvREFBb0QsaUNBQWlDO0FBQ3JGLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFJYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNEJBQTRCLG1CQUFPLENBQUMscUZBQXlCO0FBQzdELG1CQUFPLENBQUMsOEVBQXdCO0FBQ2hDLHdCQUF3QixtQkFBTyxDQUFDLCtDQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUNBQWlDO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1AsMEVBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RCxxQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4tYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24obSxwKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXAoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShwKToobT1tfHxzZWxmLG0uQU1hcExvYWRlcj1wKCkpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIG0oYSl7dmFyIGI9W107YS5BTWFwVUkmJmIucHVzaChwKGEuQU1hcFVJKSk7YS5Mb2NhJiZiLnB1c2gocihhLkxvY2EpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYil9ZnVuY3Rpb24gcChhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxjKXt2YXIgZj1bXTtpZihhLnBsdWdpbnMpZm9yKHZhciBlPTA7ZTxhLnBsdWdpbnMubGVuZ3RoO2UrPTEpLTE9PWQuQU1hcFVJLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZmLnB1c2goYS5wbHVnaW5zW2VdKTtpZihnLkFNYXBVST09PWIuZmFpbGVkKWMoXCJcXHU1MjRkXFx1NmIyMVxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKTtcbmVsc2UgaWYoZy5BTWFwVUk9PT1iLm5vdGxvYWQpe2cuQU1hcFVJPWIubG9hZGluZztkLkFNYXBVSS52ZXJzaW9uPWEudmVyc2lvbnx8ZC5BTWFwVUkudmVyc2lvbjtlPWQuQU1hcFVJLnZlcnNpb247dmFyIGw9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuaGVhZCxrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ay50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7ay5zcmM9XCJodHRwczovL3dlYmFwaS5hbWFwLmNvbS91aS9cIitlK1wiL21haW4uanNcIjtrLm9uZXJyb3I9ZnVuY3Rpb24oYSl7Zy5BTWFwVUk9Yi5mYWlsZWQ7YyhcIlxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKX07ay5vbmxvYWQ9ZnVuY3Rpb24oKXtnLkFNYXBVST1iLmxvYWRlZDtpZihmLmxlbmd0aCl3aW5kb3cuQU1hcFVJLmxvYWRVSShmLGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj1mLmxlbmd0aDthPGI7YSsrKXt2YXIgYz1mW2FdLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF07d2luZG93LkFNYXBVSVtjXT1cbmFyZ3VtZW50c1thXX1mb3IoaCgpO24uQU1hcFVJLmxlbmd0aDspbi5BTWFwVUkuc3BsaWNlKDAsMSlbMF0oKX0pO2Vsc2UgZm9yKGgoKTtuLkFNYXBVSS5sZW5ndGg7KW4uQU1hcFVJLnNwbGljZSgwLDEpWzBdKCl9O2wuYXBwZW5kQ2hpbGQoayl9ZWxzZSBnLkFNYXBVST09PWIubG9hZGVkP2EudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5BTWFwVUkudmVyc2lvbj9jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBBTWFwVUkgXFx1NmRmN1xcdTc1MjhcIik6Zi5sZW5ndGg/d2luZG93LkFNYXBVSS5sb2FkVUkoZixmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9Zi5sZW5ndGg7YTxiO2ErKyl7dmFyIGM9ZlthXS5zcGxpdChcIi9cIikuc2xpY2UoLTEpWzBdO3dpbmRvdy5BTWFwVUlbY109YXJndW1lbnRzW2FdfWgoKX0pOmgoKTphLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuQU1hcFVJLnZlcnNpb24/YyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgQU1hcFVJIFxcdTZkZjdcXHU3NTI4XCIpOlxubi5BTWFwVUkucHVzaChmdW5jdGlvbihhKXthP2MoYSk6Zi5sZW5ndGg/d2luZG93LkFNYXBVSS5sb2FkVUkoZixmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9Zi5sZW5ndGg7YTxiO2ErKyl7dmFyIGM9ZlthXS5zcGxpdChcIi9cIikuc2xpY2UoLTEpWzBdO3dpbmRvdy5BTWFwVUlbY109YXJndW1lbnRzW2FdfWgoKX0pOmgoKX0pfSl9ZnVuY3Rpb24gcihhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxjKXtpZihnLkxvY2E9PT1iLmZhaWxlZCljKFwiXFx1NTI0ZFxcdTZiMjFcXHU4YmY3XFx1NmM0MiBMb2NhIFxcdTU5MzFcXHU4ZDI1XCIpO2Vsc2UgaWYoZy5Mb2NhPT09Yi5ub3Rsb2FkKXtnLkxvY2E9Yi5sb2FkaW5nO2QuTG9jYS52ZXJzaW9uPWEudmVyc2lvbnx8ZC5Mb2NhLnZlcnNpb247dmFyIGY9ZC5Mb2NhLnZlcnNpb24sZT1kLkFNYXAudmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKSxsPWYuc3RhcnRzV2l0aChcIjJcIik7aWYoZSYmIWx8fCFlJiZsKWMoXCJKU0FQSSBcXHU0ZTBlIExvY2EgXFx1NzI0OFxcdTY3MmNcXHU0ZTBkXFx1NWJmOVxcdTVlOTRcXHVmZjAxXFx1ZmYwMVwiKTtcbmVsc2V7ZT1kLmtleTtsPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmhlYWQ7dmFyIGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtrLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtrLnNyYz1cImh0dHBzOi8vd2ViYXBpLmFtYXAuY29tL2xvY2E/dj1cIitmK1wiJmtleT1cIitlO2sub25lcnJvcj1mdW5jdGlvbihhKXtnLkxvY2E9Yi5mYWlsZWQ7YyhcIlxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKX07ay5vbmxvYWQ9ZnVuY3Rpb24oKXtnLkxvY2E9Yi5sb2FkZWQ7Zm9yKGgoKTtuLkxvY2EubGVuZ3RoOyluLkxvY2Euc3BsaWNlKDAsMSlbMF0oKX07bC5hcHBlbmRDaGlsZChrKX19ZWxzZSBnLkxvY2E9PT1iLmxvYWRlZD9hLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuTG9jYS52ZXJzaW9uP2MoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIExvY2EgXFx1NmRmN1xcdTc1MjhcIik6aCgpOmEudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5Mb2NhLnZlcnNpb24/XG5jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBMb2NhIFxcdTZkZjdcXHU3NTI4XCIpOm4uTG9jYS5wdXNoKGZ1bmN0aW9uKGEpe2E/YyhhKTpjKCl9KX0pfWlmKCF3aW5kb3cpdGhyb3cgRXJyb3IoXCJBTWFwIEpTQVBJIGNhbiBvbmx5IGJlIHVzZWQgaW4gQnJvd3Nlci5cIik7dmFyIGI7KGZ1bmN0aW9uKGEpe2Eubm90bG9hZD1cIm5vdGxvYWRcIjthLmxvYWRpbmc9XCJsb2FkaW5nXCI7YS5sb2FkZWQ9XCJsb2FkZWRcIjthLmZhaWxlZD1cImZhaWxlZFwifSkoYnx8KGI9e30pKTt2YXIgZD17a2V5OlwiXCIsQU1hcDp7dmVyc2lvbjpcIjEuNC4xNVwiLHBsdWdpbnM6W119LEFNYXBVSTp7dmVyc2lvbjpcIjEuMVwiLHBsdWdpbnM6W119LExvY2E6e3ZlcnNpb246XCIxLjMuMlwifX0sZz17QU1hcDpiLm5vdGxvYWQsQU1hcFVJOmIubm90bG9hZCxMb2NhOmIubm90bG9hZH0sbj17QU1hcDpbXSxBTWFwVUk6W10sTG9jYTpbXX0scT1bXSx0PWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGEmJlxuKGcuQU1hcD09PWIubG9hZGVkP2Eod2luZG93LkFNYXApOnEucHVzaChhKSl9O3JldHVybntsb2FkOmZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihoLGMpe2lmKGcuQU1hcD09Yi5mYWlsZWQpYyhcIlwiKTtlbHNlIGlmKGcuQU1hcD09Yi5ub3Rsb2FkKXt2YXIgZj1hLmtleSxlPWEudmVyc2lvbixsPWEucGx1Z2lucztmPyh3aW5kb3cuQU1hcCYmXCJsYnMuYW1hcC5jb21cIiE9PWxvY2F0aW9uLmhvc3QmJmMoXCJcXHU3OTgxXFx1NmI2MlxcdTU5MWFcXHU3OWNkQVBJXFx1NTJhMFxcdThmN2RcXHU2NWI5XFx1NWYwZlxcdTZkZjdcXHU3NTI4XCIpLGQua2V5PWYsZC5BTWFwLnZlcnNpb249ZXx8ZC5BTWFwLnZlcnNpb24sZC5BTWFwLnBsdWdpbnM9bHx8ZC5BTWFwLnBsdWdpbnMsZy5BTWFwPWIubG9hZGluZyxlPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmhlYWQsd2luZG93Ll9fX29uQVBJTG9hZGVkPWZ1bmN0aW9uKGQpe2RlbGV0ZSB3aW5kb3cuX19fb25BUElMb2FkZWQ7aWYoZClnLkFNYXA9XG5iLmZhaWxlZCxjKGQpO2Vsc2UgZm9yKGcuQU1hcD1iLmxvYWRlZCxtKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyk7cS5sZW5ndGg7KXEuc3BsaWNlKDAsMSlbMF0oKX0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGwudHlwZT1cInRleHQvamF2YXNjcmlwdFwiLGwuc3JjPVwiaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcz9jYWxsYmFjaz1fX19vbkFQSUxvYWRlZCZ2PVwiK2QuQU1hcC52ZXJzaW9uK1wiJmtleT1cIitmK1wiJnBsdWdpbj1cIitkLkFNYXAucGx1Z2lucy5qb2luKFwiLFwiKSxsLm9uZXJyb3I9ZnVuY3Rpb24oYSl7Zy5BTWFwPWIuZmFpbGVkO2MoYSl9LGUuYXBwZW5kQ2hpbGQobCkpOmMoXCJcXHU4YmY3XFx1NTg2YlxcdTUxOTlrZXlcIil9ZWxzZSBpZihnLkFNYXA9PWIubG9hZGVkKWlmKGEua2V5JiZhLmtleSE9PWQua2V5KWMoXCJcXHU1OTFhXFx1NGUyYVxcdTRlMGRcXHU0ZTAwXFx1ODFmNFxcdTc2ODQga2V5XCIpO2Vsc2UgaWYoYS52ZXJzaW9uJiZcbmEudmVyc2lvbiE9PWQuQU1hcC52ZXJzaW9uKWMoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEpTQVBJIFxcdTZkZjdcXHU3NTI4XCIpO2Vsc2V7Zj1bXTtpZihhLnBsdWdpbnMpZm9yKGU9MDtlPGEucGx1Z2lucy5sZW5ndGg7ZSs9MSktMT09ZC5BTWFwLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZmLnB1c2goYS5wbHVnaW5zW2VdKTtpZihmLmxlbmd0aCl3aW5kb3cuQU1hcC5wbHVnaW4oZixmdW5jdGlvbigpe20oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX0pO2Vsc2UgbShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpfWVsc2UgaWYoYS5rZXkmJmEua2V5IT09ZC5rZXkpYyhcIlxcdTU5MWFcXHU0ZTJhXFx1NGUwZFxcdTRlMDBcXHU4MWY0XFx1NzY4NCBrZXlcIik7ZWxzZSBpZihhLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuQU1hcC52ZXJzaW9uKWMoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEpTQVBJIFxcdTZkZjdcXHU3NTI4XCIpO1xuZWxzZXt2YXIgaz1bXTtpZihhLnBsdWdpbnMpZm9yKGU9MDtlPGEucGx1Z2lucy5sZW5ndGg7ZSs9MSktMT09ZC5BTWFwLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZrLnB1c2goYS5wbHVnaW5zW2VdKTt0KGZ1bmN0aW9uKCl7aWYoay5sZW5ndGgpd2luZG93LkFNYXAucGx1Z2luKGssZnVuY3Rpb24oKXttKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyl9KTtlbHNlIG0oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX0pfX0pfSxyZXNldDpmdW5jdGlvbigpe2RlbGV0ZSB3aW5kb3cuQU1hcDtkZWxldGUgd2luZG93LkFNYXBVSTtkZWxldGUgd2luZG93LkxvY2E7ZD17a2V5OlwiXCIsQU1hcDp7dmVyc2lvbjpcIjEuNC4xNVwiLHBsdWdpbnM6W119LEFNYXBVSTp7dmVyc2lvbjpcIjEuMVwiLHBsdWdpbnM6W119LExvY2E6e3ZlcnNpb246XCIxLjMuMlwifX07Zz17QU1hcDpiLm5vdGxvYWQsQU1hcFVJOmIubm90bG9hZCxcbkxvY2E6Yi5ub3Rsb2FkfTtuPXtBTWFwOltdLEFNYXBVSTpbXSxMb2NhOltdfX19fSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXROZXdBbmFseXNpc0xheWVyID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlcnNfMSA9IHJlcXVpcmUoXCIuL2hhbmRsZXJzXCIpO1xuZnVuY3Rpb24gZ2V0TmV3QW5hbHlzaXNMYXllcihBTWFwLCBtb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgJy9yb2FkLyc6XG4gICAgICAgIGNhc2UgJy9kaXZpZGUvJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQU1hcC5UaWxlTGF5ZXIuRmxleGlibGUoe1xuICAgICAgICAgICAgICAgIGNhY2hlU2l6ZTogMzAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA1MDAsXG4gICAgICAgICAgICAgICAgY3JlYXRlVGlsZTogZnVuY3Rpb24gKHgsIHksIHosIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHlpZWxkIGhhbmRsZXJzXzEuYmxvY2tSZXF1ZXN0SGFuZGxlcih4LCB5LCB6LCBtb2RlKTsgLy8g562J5b6F6K+35rGCXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nLnNyYyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsKCk7IC8vIOivt+axguWksei0pVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhpbWcpOyAvLyDpgJrnn6VBUEnliIfniYfliJvlu7rlrozmiJBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJy9jbGFzc2lmeS8nOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBTWFwLlRpbGVMYXllci5GbGV4aWJsZSh7XG4gICAgICAgICAgICAgICAgY2FjaGVTaXplOiAzMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDUwMCxcbiAgICAgICAgICAgICAgICBjcmVhdGVUaWxlOiBmdW5jdGlvbiAoeCwgeSwgeiwgc3VjY2VzcywgZmFpbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBjLndpZHRoID0gMjU2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMCwgMTAwLCAyNTUpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHlpZWxkIGhhbmRsZXJzXzEucGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyKHgsIHksIHopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZWxsaXBzZShwb3NbMF0sIHBvc1sxXSwgMTAsIDEwLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoYyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtb2RlXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0TmV3QW5hbHlzaXNMYXllciA9IGdldE5ld0FuYWx5c2lzTGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbWdEcmFnSGFuZGxlciA9IGV4cG9ydHMub3BhY2l0eUhhbmRsZXIgPSBleHBvcnRzLnN3aXRjaEhhbmRsZXIgPSBleHBvcnRzLnBsYXlncm91bmRSZXF1ZXN0SGFuZGxlciA9IGV4cG9ydHMuYmxvY2tSZXF1ZXN0SGFuZGxlciA9IHZvaWQgMDtcbi8qKlxuICog5aSE55CG5Zu+5Z2X55Sf5oiQ6K+35rGCXG4gKiBAcGFyYW0geCB4XG4gKiBAcGFyYW0geSB5XG4gKiBAcGFyYW0geiB6XG4gKiBAcGFyYW0gcmVxdWVzdCDor7fmsYLlnLDlnYBcbiAqIEByZXR1cm5zIG9iamVjdFVSTFxuICovXG5mdW5jdGlvbiBibG9ja1JlcXVlc3RIYW5kbGVyKHgsIHksIHosIHJlcXVlc3QpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93ZWJzdDAyLmlzLmF1dG9uYXZpLmNvbS9hcHBtYXB0aWxlP3N0eWxlPTYmeD0nICsgeCArICcmeT0nICsgeSArICcmej0nICsgejtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpOyAvLyBnZXQgbWFwIGltYWdlXG4gICAgICAgICAgICBjb25zdCBmcm9tRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZnJvbURhdGEuYXBwZW5kKCdpbWcnLCBibG9iKTsgLy8gdG8gZnJvbSBkYXRhXG4gICAgICAgICAgICBjb25zdCBpbWdEYXRhID0geWllbGQgZmV0Y2gocmVxdWVzdCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZnJvbURhdGEgfSk7XG4gICAgICAgICAgICBjb25zdCByYXdJbWFnZSA9IHlpZWxkIGltZ0RhdGEuYmxvYigpOyAvLyBnZXQgYW5hbHlzaXMgaW1hZ2VcbiAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKHJhd0ltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ibG9ja1JlcXVlc3RIYW5kbGVyID0gYmxvY2tSZXF1ZXN0SGFuZGxlcjtcbi8qKlxuICog5aSE55CG54mp5L2T5L2N572u6K+G5Yir5qCH562+XG4gKiBAcGFyYW0geCB4XG4gKiBAcGFyYW0geSB5XG4gKiBAcGFyYW0geiB6XG4gKiBAcmV0dXJucyDmoIforrDkvY3nva5cbiAqL1xuZnVuY3Rpb24gcGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyKHgsIHksIHopIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93ZWJzdDAyLmlzLmF1dG9uYXZpLmNvbS9hcHBtYXB0aWxlP3N0eWxlPTYmeD0nICsgeCArICcmeT0nICsgeSArICcmej0nICsgejtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KTsgLy8gcmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7IC8vIOS7jmFwaeiOt+WPluWcsOWbvlxuICAgICAgICAgICAgY29uc3QgZnJvbURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZyb21EYXRhLmFwcGVuZCgnaW1nJywgYmxvYik7IC8vIOi9rOaNouS4umZyb20gZGF0YVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGZldGNoKCcvY2xhc3NpZnkvJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZnJvbURhdGEgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgZGF0YS5qc29uKCk7IC8vIOi9rOaNouS4umpzb24gb2JqZWN0XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGpzb24uc2NvcmUpIDwgMC40KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRpbmdCb3ggPSBqc29uLmJib3g7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtib3VuZGluZ0JveFswXSArIGJvdW5kaW5nQm94WzJdIC8gMiwgYm91bmRpbmdCb3hbMV0gKyBib3VuZGluZ0JveFszXSAvIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyID0gcGxheWdyb3VuZFJlcXVlc3RIYW5kbGVyO1xuLyoqXG4gKiDlpITnkIblvIDlhbNcbiAqIEBwYXJhbSB0YXJnZXQg5byA5YWzXG4gKiBAcGFyYW0gbGF5ZXIg5Zu+5bGCXG4gKi9cbmZ1bmN0aW9uIHN3aXRjaEhhbmRsZXIodGFyZ2V0LCBsYXllcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGF5ZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyO1xuLyoqXG4gKiDlpITnkIbpgI/mmI7luqZcbiAqIEBwYXJhbSB0YXJnZXQg5ruR5p2hXG4gKiBAcGFyYW0gbGF5ZXIg5Zu+5bGCXG4gKiBAcGFyYW0gaWQg5qCH562+aWRcbiAqL1xuZnVuY3Rpb24gb3BhY2l0eUhhbmRsZXIodGFyZ2V0LCBsYXllciwgaWQpIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICBsYXllci5zZXRPcGFjaXR5KE51bWJlcih0YXJnZXQudmFsdWUpKTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGFuZGxlcik7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xufVxuZXhwb3J0cy5vcGFjaXR5SGFuZGxlciA9IG9wYWNpdHlIYW5kbGVyO1xuLyoqXG4gKiDlpITnkIZVSeWbvueJh+S8oOi+k1xuICogQHBhcmFtIGltZyDlm77niYdcbiAqL1xuZnVuY3Rpb24gaW1nRHJhZ0hhbmRsZXIoaW1nLCBudW0pIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF8nICsgbnVtKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldikgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZpbGVMaXN0ID0gKF9hID0gZXYuZGF0YVRyYW5zZmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlsZXM7XG4gICAgICAgIGlmIChmaWxlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDojrflj5bmlofku7ZcbiAgICAgICAgaWYgKGZpbGVMaXN0WzBdLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDliKTmlq3mmK/lkKbkuLrlm77niYdcbiAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUxpc3RbMF0pO1xuICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgIGlucHV0LmZpbGVzWzBdID0gZmlsZUxpc3RbMF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDmi5bmlL7kuovku7ZcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZmlsZXMpIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOeCueWHu+S6i+S7tlxufVxuZXhwb3J0cy5pbWdEcmFnSGFuZGxlciA9IGltZ0RyYWdIYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfYSwgX2IsIF9jO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYW1hcF9qc2FwaV9sb2FkZXJfMSA9IHJlcXVpcmUoXCJAYW1hcC9hbWFwLWpzYXBpLWxvYWRlclwiKTtcbnJlcXVpcmUoXCJAYW1hcC9hbWFwLWpzYXBpLXR5cGVzXCIpO1xuY29uc3QgQW5hbHlzaXNMYXllcl8xID0gcmVxdWlyZShcIi4vQW5hbHlzaXNMYXllclwiKTtcbmNvbnN0IGhhbmRsZXJzXzEgPSByZXF1aXJlKFwiLi9oYW5kbGVyc1wiKTtcbmNvbnN0IG1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsJyk7XG4oX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYml0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RlbCBkaXNwbGF5LW1vZGVsJyk7XG59KTtcbihfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0X2JpdCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kZWwnKTtcbn0pO1xuLy8g57uR5a6aYml055WM6Z2iXG5jb25zdCBpbWdfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfMScpO1xuY29uc3QgaW1nXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nXzInKTtcbmltZ18xLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KSA9PiBldi5wcmV2ZW50RGVmYXVsdCgpKTtcbmltZ18yLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KSA9PiBldi5wcmV2ZW50RGVmYXVsdCgpKTtcbmhhbmRsZXJzXzEuaW1nRHJhZ0hhbmRsZXIoaW1nXzEsIDEpO1xuaGFuZGxlcnNfMS5pbWdEcmFnSGFuZGxlcihpbWdfMiwgMik7XG4vLyDnu5Hlrprmi5bmlL7ngrnlh7tcbmNvbnN0IGlucHV0XzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfMScpO1xuY29uc3QgaW5wdXRfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF8yJyk7XG5jb25zdCBsYXllcl8wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdF9sYXllcl8wJyk7XG5jb25zdCBsYXllcl8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdF9sYXllcl8xJyk7XG5jb25zdCBsYXllcl8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpdF9sYXllcl8yJyk7XG4oX2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYml0X3NlbmQnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKCEoaW5wdXRfMS5maWxlcyAmJiBpbnB1dF8yLmZpbGVzKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChpbnB1dF8xLmZpbGVzLmxlbmd0aCA9PT0gMCB8fCBpbnB1dF8yLmZpbGVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHQxID0gaW5wdXRfMS5maWxlc1swXTtcbiAgICAgICAgY29uc3QgdDIgPSBpbnB1dF8yLmZpbGVzWzBdO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidDFcIiwgdDEpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0MlwiLCB0Mik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goJy9iaXQvJywgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBmb3JtRGF0YSB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICBsYXllcl8wLnNyYyA9IGltZ18xLnNyYztcbiAgICAgICAgbGF5ZXJfMS5zcmMgPSBpbWdfMi5zcmM7XG4gICAgICAgIGxheWVyXzIuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgbGF5ZXJfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpdC1sYXllciBiaXQtYW5pbWF0ZScpO1xuICAgICAgICBsYXllcl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYml0LWxheWVyIGJpdC1hbmltYXRlJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KSk7XG4vLyDnu5HlrppCSVTmjInpkq5cbmFtYXBfanNhcGlfbG9hZGVyXzEubG9hZCh7XG4gICAga2V5OiAnMWM5NmQ1YTcwNWE2MGMxNjI3MzVkODlmY2I3YTY0NGQnLFxuICAgIHZlcnNpb246ICcyLjAnLFxuICAgIHBsdWdpbnM6IFsnQU1hcC5TY2FsZScsICdBTWFwLlRvb2xCYXInLCAnQU1hcC5IYXdrRXllJ10gLy8g5a6a5LmJ5o+S5Lu2XG59KS50aGVuKChBTWFwKSA9PiB7XG4gICAgbGV0IG1hcCA9IG5ldyBBTWFwLk1hcCgnY29udGFpbmVyJywge1xuICAgICAgICBjZW50ZXI6IFsxMTYuMzk3NDI4LCAzOS45MDkyM10sXG4gICAgICAgIHpvb206IDE0LFxuICAgICAgICB6b29tczogWzMsIDE1XVxuICAgIH0pOyAvLyDlrprkuYnlnLDlm77lj4LmlbBcbiAgICBjb25zdCByb2FkTGF5ZXIgPSBBbmFseXNpc0xheWVyXzEuZ2V0TmV3QW5hbHlzaXNMYXllcihBTWFwLCAnL3JvYWQvJyk7IC8vIOi3r+e9keWbvuWxglxuICAgIGNvbnN0IGRpdmlkZUxheWVyID0gQW5hbHlzaXNMYXllcl8xLmdldE5ld0FuYWx5c2lzTGF5ZXIoQU1hcCwgJy9kaXZpZGUvJyk7IC8vIOWIhuWJsuWbvuWxglxuICAgIGNvbnN0IGNsYXNzaWZ5TGF5ZXIgPSBBbmFseXNpc0xheWVyXzEuZ2V0TmV3QW5hbHlzaXNMYXllcihBTWFwLCAnL2NsYXNzaWZ5LycpOyAvLyDor4bliKvliIbnsbvlm77lsYIgcGxheWdyb3VuZFxuICAgIG1hcC5zZXRMYXllcnMoW1xuICAgICAgICBuZXcgQU1hcC5UaWxlTGF5ZXIuU2F0ZWxsaXRlKCksXG4gICAgICAgIHJvYWRMYXllcixcbiAgICAgICAgZGl2aWRlTGF5ZXIsXG4gICAgICAgIGNsYXNzaWZ5TGF5ZXJcbiAgICBdKTsgLy8g6K6+572u5Zu+5bGCXG4gICAgcm9hZExheWVyLmhpZGUoKTtcbiAgICBkaXZpZGVMYXllci5oaWRlKCk7XG4gICAgY2xhc3NpZnlMYXllci5oaWRlKCk7XG4gICAgLy8g6ZqQ6JePXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEFNYXAuU2NhbGUoKSk7XG4gICAgbWFwLmFkZENvbnRyb2wobmV3IEFNYXAuVG9vbEJhcih7IHBvc2l0aW9uOiAnUlQnIH0pKTtcbiAgICBtYXAuYWRkQ29udHJvbChuZXcgQU1hcC5IYXdrRXllKHsgdmlzaWJsZTogdHJ1ZSB9KSk7XG4gICAgY29uc3Qgcm9hZF9zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9hZF9zd2l0Y2gnKTtcbiAgICBjb25zdCBjbGFzc2lmeV9zd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NpZnlfc3dpdGNoJyk7XG4gICAgY29uc3QgZGl2aWRlX3N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZpZGVfc3dpdGNoJyk7XG4gICAgaGFuZGxlcnNfMS5zd2l0Y2hIYW5kbGVyKHJvYWRfc3dpdGNoLCByb2FkTGF5ZXIpO1xuICAgIGhhbmRsZXJzXzEuc3dpdGNoSGFuZGxlcihjbGFzc2lmeV9zd2l0Y2gsIGNsYXNzaWZ5TGF5ZXIpO1xuICAgIGhhbmRsZXJzXzEuc3dpdGNoSGFuZGxlcihkaXZpZGVfc3dpdGNoLCBkaXZpZGVMYXllcik7XG4gICAgLy8g57uR5a6a5byA5YWz5LqL5Lu2XG4gICAgY29uc3Qgcm9hZF9vcGFjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvYWRfb3BhY2l0eScpO1xuICAgIGNvbnN0IGRpdmlkZV9vcGFjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdmlkZV9vcGFjaXR5Jyk7XG4gICAgaGFuZGxlcnNfMS5vcGFjaXR5SGFuZGxlcihyb2FkX29wYWNpdHksIHJvYWRMYXllciwgXCJyb2FkX29wYV92YWxcIik7XG4gICAgaGFuZGxlcnNfMS5vcGFjaXR5SGFuZGxlcihkaXZpZGVfb3BhY2l0eSwgZGl2aWRlTGF5ZXIsIFwiZGl2aWRlX29wYV92YWxcIik7XG4gICAgLy8g57uR5a6a6YCP5piO5bqm5ruR5p2hXG4gICAgcm9hZExheWVyLnNldE9wYWNpdHkoMC42KTtcbiAgICBkaXZpZGVMYXllci5zZXRPcGFjaXR5KDAuNik7XG59KS5jYXRjaCgoZSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=