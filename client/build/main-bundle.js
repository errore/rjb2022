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
amap_jsapi_loader_1.load({
    key: '1c96d5a705a60c162735d89fcb7a644d',
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.DistrictLayer', 'AMap.RectangleEditor']
}).then((AMap) => {
    var _a, _b, _c;
    let map = new AMap.Map('container');
    const canvas = document.getElementsByClassName('amap-layer').item(0);
    let district = new AMap.DistrictLayer.Province({
        zIndex: 10,
        SOC: 'CHN',
        depth: 1,
        styles: {
            'nation-stroke': '#22ffff',
            'coastline-stroke': [0.8, 0.63, 0.94, 1],
            'province-stroke': 'red',
            'fill': ''
        }
    });
    map.setLayers([
        new AMap.TileLayer.Satellite(),
        district
    ]);
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());
    var southWest = new AMap.LngLat(116.356449, 39.859008);
    var northEast = new AMap.LngLat(116.417901, 39.893797);
    var bounds = new AMap.Bounds(southWest, northEast);
    var rectangle = new AMap.Rectangle({
        bounds: bounds,
        strokeColor: 'red',
        strokeWeight: 6,
        strokeOpacity: 0.5,
        strokeStyle: 'solid',
        fillColor: '',
        cursor: 'pointer',
        zIndex: 50,
    });
    map.add(rectangle);
    // 缩放地图到合适的视野级别
    map.setFitView([rectangle]);
    var rectangleEditor = new AMap.RectangleEditor(map, rectangle);
    (_a = document.getElementById("start_edit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => rectangleEditor.open());
    (_b = document.getElementById("end_edit")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => rectangleEditor.close());
    (_c = document.getElementById("analysis")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        var _a, _b;
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const left_bottom = map.lngLatToContainer((_a = rectangle.getBounds()) === null || _a === void 0 ? void 0 : _a.getSouthWest());
        const right_top = map.lngLatToContainer((_b = rectangle.getBounds()) === null || _b === void 0 ? void 0 : _b.getNorthEast());
        const hw = Math.abs(left_bottom.getX() - right_top.getY());
        ctx.drawImage(canvas, left_bottom.getX(), right_top.getY(), hw, hw);
        const img = document.getElementById('test_img');
        img.src = c.toDataURL('image/png');
    });
    rectangleEditor.on("adjust", (data) => {
        var _a, _b;
        // 重新设置Rectangle为正方形
        const left_bottom = map.lngLatToContainer((_a = data.target.getBounds()) === null || _a === void 0 ? void 0 : _a.getSouthWest());
        const right_top = map.lngLatToContainer((_b = data.target.getBounds()) === null || _b === void 0 ? void 0 : _b.getNorthEast());
        const length1 = Math.abs(left_bottom.getX() - right_top.getY());
        const length2 = Math.abs(left_bottom.getY() - right_top.getY());
        const short = Math.min(length1, length2);
        const southWest = map.containerToLngLat([left_bottom.getX() + short, right_top.getY()]);
        const northEast = map.containerToLngLat([left_bottom.getX(), right_top.getY() + short]);
        const bound = new AMap.Bounds(southWest, northEast);
        data.target.setBounds(bound);
    });
}).catch((e) => {
    console.error(e);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktbG9hZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbWFwL2FtYXAtanNhcGktdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYSxlQUFlLEtBQXNELG9CQUFvQixTQUE2RSxDQUFDLGtCQUFrQixjQUFjLFNBQVMsOEJBQThCLDBCQUEwQixzQkFBc0IsY0FBYyxpQ0FBaUMsU0FBUyx5QkFBeUIsbUJBQW1CLHNFQUFzRTtBQUNyZCw4QkFBOEIsbUJBQW1CLDZDQUE2QyxtQkFBbUIsc0VBQXNFLHlCQUF5QixpREFBaUQsc0JBQXNCLGtCQUFrQix1Q0FBdUMsb0JBQW9CLGtCQUFrQiw4Q0FBOEMsdUJBQXVCLElBQUksS0FBSyxtQ0FBbUM7QUFDdmUsYUFBYSxRQUFRLGdCQUFnQiwyQkFBMkIsRUFBRSxhQUFhLGdCQUFnQiw0QkFBNEIsaUJBQWlCLGdMQUFnTCx1QkFBdUIsSUFBSSxLQUFLLG1DQUFtQyw4QkFBOEIsSUFBSTtBQUNqYSwwQkFBMEIsa0RBQWtELHVCQUF1QixJQUFJLEtBQUssbUNBQW1DLDhCQUE4QixJQUFJLE1BQU0sRUFBRSxFQUFFLGNBQWMsaUNBQWlDLHFFQUFxRSw0QkFBNEIsaUJBQWlCLHlDQUF5QywwRUFBMEU7QUFDL2MsS0FBSyxRQUFRLCtCQUErQix1Q0FBdUMseUJBQXlCLG9EQUFvRCxzQkFBc0IsZ0JBQWdCLHVDQUF1QyxvQkFBb0IsZ0JBQWdCLFFBQVEsY0FBYywwQkFBMEIsa0JBQWtCO0FBQ25WLDBGQUEwRixXQUFXLEVBQUUsRUFBRSxrRUFBa0UsTUFBTSxhQUFhLG9CQUFvQixvQkFBb0Isa0JBQWtCLGtCQUFrQixVQUFVLEdBQUcsT0FBTyxhQUFhLDRCQUE0QixTQUFTLHlCQUF5QixPQUFPLGlCQUFpQixJQUFJLCtDQUErQyxJQUFJLDBCQUEwQixvQkFBb0I7QUFDdGUsOENBQThDLE9BQU8saUJBQWlCLGlDQUFpQywwQkFBMEIsMkJBQTJCLG9DQUFvQyxpUkFBaVIsNkJBQTZCO0FBQzllLGNBQWMsOENBQThDLGVBQWUsY0FBYyxTQUFTLG9CQUFvQixnTkFBZ04sZ0JBQWdCLEtBQUssOENBQThDLCtGQUErRjtBQUN4ZSw4RkFBOEYsS0FBSyxLQUFLLHFCQUFxQixtQkFBbUIsb0VBQW9FLDRDQUE0QyxxQkFBcUIsZUFBZSxjQUFjLEVBQUUsMEJBQTBCLGVBQWUsY0FBYywyRUFBMkU7QUFDdGIsS0FBSyxTQUFTLHFCQUFxQixtQkFBbUIsb0VBQW9FLGFBQWEsNENBQTRDLHFCQUFxQixlQUFlLGNBQWMsRUFBRSwwQkFBMEIsZUFBZSxjQUFjLEdBQUcsRUFBRSxrQkFBa0IsbUJBQW1CLHFCQUFxQixtQkFBbUIsR0FBRyxhQUFhLDRCQUE0QixTQUFTLHlCQUF5QixPQUFPLGtCQUFrQixHQUFHO0FBQzFkLGdCQUFnQixHQUFHLDZCQUE2Qjs7Ozs7Ozs7Ozs7O0FDVmhEOzs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCw0QkFBNEIsbUJBQU8sQ0FBQyxxRkFBeUI7QUFDN0QsbUJBQU8sQ0FBQyw4RUFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4tYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24obSxwKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXAoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShwKToobT1tfHxzZWxmLG0uQU1hcExvYWRlcj1wKCkpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIG0oYSl7dmFyIGI9W107YS5BTWFwVUkmJmIucHVzaChwKGEuQU1hcFVJKSk7YS5Mb2NhJiZiLnB1c2gocihhLkxvY2EpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYil9ZnVuY3Rpb24gcChhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxjKXt2YXIgZj1bXTtpZihhLnBsdWdpbnMpZm9yKHZhciBlPTA7ZTxhLnBsdWdpbnMubGVuZ3RoO2UrPTEpLTE9PWQuQU1hcFVJLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZmLnB1c2goYS5wbHVnaW5zW2VdKTtpZihnLkFNYXBVST09PWIuZmFpbGVkKWMoXCJcXHU1MjRkXFx1NmIyMVxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKTtcbmVsc2UgaWYoZy5BTWFwVUk9PT1iLm5vdGxvYWQpe2cuQU1hcFVJPWIubG9hZGluZztkLkFNYXBVSS52ZXJzaW9uPWEudmVyc2lvbnx8ZC5BTWFwVUkudmVyc2lvbjtlPWQuQU1hcFVJLnZlcnNpb247dmFyIGw9ZG9jdW1lbnQuYm9keXx8ZG9jdW1lbnQuaGVhZCxrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ay50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7ay5zcmM9XCJodHRwczovL3dlYmFwaS5hbWFwLmNvbS91aS9cIitlK1wiL21haW4uanNcIjtrLm9uZXJyb3I9ZnVuY3Rpb24oYSl7Zy5BTWFwVUk9Yi5mYWlsZWQ7YyhcIlxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKX07ay5vbmxvYWQ9ZnVuY3Rpb24oKXtnLkFNYXBVST1iLmxvYWRlZDtpZihmLmxlbmd0aCl3aW5kb3cuQU1hcFVJLmxvYWRVSShmLGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj1mLmxlbmd0aDthPGI7YSsrKXt2YXIgYz1mW2FdLnNwbGl0KFwiL1wiKS5zbGljZSgtMSlbMF07d2luZG93LkFNYXBVSVtjXT1cbmFyZ3VtZW50c1thXX1mb3IoaCgpO24uQU1hcFVJLmxlbmd0aDspbi5BTWFwVUkuc3BsaWNlKDAsMSlbMF0oKX0pO2Vsc2UgZm9yKGgoKTtuLkFNYXBVSS5sZW5ndGg7KW4uQU1hcFVJLnNwbGljZSgwLDEpWzBdKCl9O2wuYXBwZW5kQ2hpbGQoayl9ZWxzZSBnLkFNYXBVST09PWIubG9hZGVkP2EudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5BTWFwVUkudmVyc2lvbj9jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBBTWFwVUkgXFx1NmRmN1xcdTc1MjhcIik6Zi5sZW5ndGg/d2luZG93LkFNYXBVSS5sb2FkVUkoZixmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9Zi5sZW5ndGg7YTxiO2ErKyl7dmFyIGM9ZlthXS5zcGxpdChcIi9cIikuc2xpY2UoLTEpWzBdO3dpbmRvdy5BTWFwVUlbY109YXJndW1lbnRzW2FdfWgoKX0pOmgoKTphLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuQU1hcFVJLnZlcnNpb24/YyhcIlxcdTRlMGRcXHU1MTQxXFx1OGJiOFxcdTU5MWFcXHU0ZTJhXFx1NzI0OFxcdTY3MmMgQU1hcFVJIFxcdTZkZjdcXHU3NTI4XCIpOlxubi5BTWFwVUkucHVzaChmdW5jdGlvbihhKXthP2MoYSk6Zi5sZW5ndGg/d2luZG93LkFNYXBVSS5sb2FkVUkoZixmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9Zi5sZW5ndGg7YTxiO2ErKyl7dmFyIGM9ZlthXS5zcGxpdChcIi9cIikuc2xpY2UoLTEpWzBdO3dpbmRvdy5BTWFwVUlbY109YXJndW1lbnRzW2FdfWgoKX0pOmgoKX0pfSl9ZnVuY3Rpb24gcihhKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaCxjKXtpZihnLkxvY2E9PT1iLmZhaWxlZCljKFwiXFx1NTI0ZFxcdTZiMjFcXHU4YmY3XFx1NmM0MiBMb2NhIFxcdTU5MzFcXHU4ZDI1XCIpO2Vsc2UgaWYoZy5Mb2NhPT09Yi5ub3Rsb2FkKXtnLkxvY2E9Yi5sb2FkaW5nO2QuTG9jYS52ZXJzaW9uPWEudmVyc2lvbnx8ZC5Mb2NhLnZlcnNpb247dmFyIGY9ZC5Mb2NhLnZlcnNpb24sZT1kLkFNYXAudmVyc2lvbi5zdGFydHNXaXRoKFwiMlwiKSxsPWYuc3RhcnRzV2l0aChcIjJcIik7aWYoZSYmIWx8fCFlJiZsKWMoXCJKU0FQSSBcXHU0ZTBlIExvY2EgXFx1NzI0OFxcdTY3MmNcXHU0ZTBkXFx1NWJmOVxcdTVlOTRcXHVmZjAxXFx1ZmYwMVwiKTtcbmVsc2V7ZT1kLmtleTtsPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmhlYWQ7dmFyIGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtrLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtrLnNyYz1cImh0dHBzOi8vd2ViYXBpLmFtYXAuY29tL2xvY2E/dj1cIitmK1wiJmtleT1cIitlO2sub25lcnJvcj1mdW5jdGlvbihhKXtnLkxvY2E9Yi5mYWlsZWQ7YyhcIlxcdThiZjdcXHU2YzQyIEFNYXBVSSBcXHU1OTMxXFx1OGQyNVwiKX07ay5vbmxvYWQ9ZnVuY3Rpb24oKXtnLkxvY2E9Yi5sb2FkZWQ7Zm9yKGgoKTtuLkxvY2EubGVuZ3RoOyluLkxvY2Euc3BsaWNlKDAsMSlbMF0oKX07bC5hcHBlbmRDaGlsZChrKX19ZWxzZSBnLkxvY2E9PT1iLmxvYWRlZD9hLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuTG9jYS52ZXJzaW9uP2MoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIExvY2EgXFx1NmRmN1xcdTc1MjhcIik6aCgpOmEudmVyc2lvbiYmYS52ZXJzaW9uIT09ZC5Mb2NhLnZlcnNpb24/XG5jKFwiXFx1NGUwZFxcdTUxNDFcXHU4YmI4XFx1NTkxYVxcdTRlMmFcXHU3MjQ4XFx1NjcyYyBMb2NhIFxcdTZkZjdcXHU3NTI4XCIpOm4uTG9jYS5wdXNoKGZ1bmN0aW9uKGEpe2E/YyhhKTpjKCl9KX0pfWlmKCF3aW5kb3cpdGhyb3cgRXJyb3IoXCJBTWFwIEpTQVBJIGNhbiBvbmx5IGJlIHVzZWQgaW4gQnJvd3Nlci5cIik7dmFyIGI7KGZ1bmN0aW9uKGEpe2Eubm90bG9hZD1cIm5vdGxvYWRcIjthLmxvYWRpbmc9XCJsb2FkaW5nXCI7YS5sb2FkZWQ9XCJsb2FkZWRcIjthLmZhaWxlZD1cImZhaWxlZFwifSkoYnx8KGI9e30pKTt2YXIgZD17a2V5OlwiXCIsQU1hcDp7dmVyc2lvbjpcIjEuNC4xNVwiLHBsdWdpbnM6W119LEFNYXBVSTp7dmVyc2lvbjpcIjEuMVwiLHBsdWdpbnM6W119LExvY2E6e3ZlcnNpb246XCIxLjMuMlwifX0sZz17QU1hcDpiLm5vdGxvYWQsQU1hcFVJOmIubm90bG9hZCxMb2NhOmIubm90bG9hZH0sbj17QU1hcDpbXSxBTWFwVUk6W10sTG9jYTpbXX0scT1bXSx0PWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGEmJlxuKGcuQU1hcD09PWIubG9hZGVkP2Eod2luZG93LkFNYXApOnEucHVzaChhKSl9O3JldHVybntsb2FkOmZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihoLGMpe2lmKGcuQU1hcD09Yi5mYWlsZWQpYyhcIlwiKTtlbHNlIGlmKGcuQU1hcD09Yi5ub3Rsb2FkKXt2YXIgZj1hLmtleSxlPWEudmVyc2lvbixsPWEucGx1Z2lucztmPyh3aW5kb3cuQU1hcCYmXCJsYnMuYW1hcC5jb21cIiE9PWxvY2F0aW9uLmhvc3QmJmMoXCJcXHU3OTgxXFx1NmI2MlxcdTU5MWFcXHU3OWNkQVBJXFx1NTJhMFxcdThmN2RcXHU2NWI5XFx1NWYwZlxcdTZkZjdcXHU3NTI4XCIpLGQua2V5PWYsZC5BTWFwLnZlcnNpb249ZXx8ZC5BTWFwLnZlcnNpb24sZC5BTWFwLnBsdWdpbnM9bHx8ZC5BTWFwLnBsdWdpbnMsZy5BTWFwPWIubG9hZGluZyxlPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmhlYWQsd2luZG93Ll9fX29uQVBJTG9hZGVkPWZ1bmN0aW9uKGQpe2RlbGV0ZSB3aW5kb3cuX19fb25BUElMb2FkZWQ7aWYoZClnLkFNYXA9XG5iLmZhaWxlZCxjKGQpO2Vsc2UgZm9yKGcuQU1hcD1iLmxvYWRlZCxtKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyk7cS5sZW5ndGg7KXEuc3BsaWNlKDAsMSlbMF0oKX0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGwudHlwZT1cInRleHQvamF2YXNjcmlwdFwiLGwuc3JjPVwiaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcz9jYWxsYmFjaz1fX19vbkFQSUxvYWRlZCZ2PVwiK2QuQU1hcC52ZXJzaW9uK1wiJmtleT1cIitmK1wiJnBsdWdpbj1cIitkLkFNYXAucGx1Z2lucy5qb2luKFwiLFwiKSxsLm9uZXJyb3I9ZnVuY3Rpb24oYSl7Zy5BTWFwPWIuZmFpbGVkO2MoYSl9LGUuYXBwZW5kQ2hpbGQobCkpOmMoXCJcXHU4YmY3XFx1NTg2YlxcdTUxOTlrZXlcIil9ZWxzZSBpZihnLkFNYXA9PWIubG9hZGVkKWlmKGEua2V5JiZhLmtleSE9PWQua2V5KWMoXCJcXHU1OTFhXFx1NGUyYVxcdTRlMGRcXHU0ZTAwXFx1ODFmNFxcdTc2ODQga2V5XCIpO2Vsc2UgaWYoYS52ZXJzaW9uJiZcbmEudmVyc2lvbiE9PWQuQU1hcC52ZXJzaW9uKWMoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEpTQVBJIFxcdTZkZjdcXHU3NTI4XCIpO2Vsc2V7Zj1bXTtpZihhLnBsdWdpbnMpZm9yKGU9MDtlPGEucGx1Z2lucy5sZW5ndGg7ZSs9MSktMT09ZC5BTWFwLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZmLnB1c2goYS5wbHVnaW5zW2VdKTtpZihmLmxlbmd0aCl3aW5kb3cuQU1hcC5wbHVnaW4oZixmdW5jdGlvbigpe20oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX0pO2Vsc2UgbShhKS50aGVuKGZ1bmN0aW9uKCl7aCh3aW5kb3cuQU1hcCl9KVtcImNhdGNoXCJdKGMpfWVsc2UgaWYoYS5rZXkmJmEua2V5IT09ZC5rZXkpYyhcIlxcdTU5MWFcXHU0ZTJhXFx1NGUwZFxcdTRlMDBcXHU4MWY0XFx1NzY4NCBrZXlcIik7ZWxzZSBpZihhLnZlcnNpb24mJmEudmVyc2lvbiE9PWQuQU1hcC52ZXJzaW9uKWMoXCJcXHU0ZTBkXFx1NTE0MVxcdThiYjhcXHU1OTFhXFx1NGUyYVxcdTcyNDhcXHU2NzJjIEpTQVBJIFxcdTZkZjdcXHU3NTI4XCIpO1xuZWxzZXt2YXIgaz1bXTtpZihhLnBsdWdpbnMpZm9yKGU9MDtlPGEucGx1Z2lucy5sZW5ndGg7ZSs9MSktMT09ZC5BTWFwLnBsdWdpbnMuaW5kZXhPZihhLnBsdWdpbnNbZV0pJiZrLnB1c2goYS5wbHVnaW5zW2VdKTt0KGZ1bmN0aW9uKCl7aWYoay5sZW5ndGgpd2luZG93LkFNYXAucGx1Z2luKGssZnVuY3Rpb24oKXttKGEpLnRoZW4oZnVuY3Rpb24oKXtoKHdpbmRvdy5BTWFwKX0pW1wiY2F0Y2hcIl0oYyl9KTtlbHNlIG0oYSkudGhlbihmdW5jdGlvbigpe2god2luZG93LkFNYXApfSlbXCJjYXRjaFwiXShjKX0pfX0pfSxyZXNldDpmdW5jdGlvbigpe2RlbGV0ZSB3aW5kb3cuQU1hcDtkZWxldGUgd2luZG93LkFNYXBVSTtkZWxldGUgd2luZG93LkxvY2E7ZD17a2V5OlwiXCIsQU1hcDp7dmVyc2lvbjpcIjEuNC4xNVwiLHBsdWdpbnM6W119LEFNYXBVSTp7dmVyc2lvbjpcIjEuMVwiLHBsdWdpbnM6W119LExvY2E6e3ZlcnNpb246XCIxLjMuMlwifX07Zz17QU1hcDpiLm5vdGxvYWQsQU1hcFVJOmIubm90bG9hZCxcbkxvY2E6Yi5ub3Rsb2FkfTtuPXtBTWFwOltdLEFNYXBVSTpbXSxMb2NhOltdfX19fSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhbWFwX2pzYXBpX2xvYWRlcl8xID0gcmVxdWlyZShcIkBhbWFwL2FtYXAtanNhcGktbG9hZGVyXCIpO1xyXG5yZXF1aXJlKFwiQGFtYXAvYW1hcC1qc2FwaS10eXBlc1wiKTtcclxuYW1hcF9qc2FwaV9sb2FkZXJfMS5sb2FkKHtcclxuICAgIGtleTogJzFjOTZkNWE3MDVhNjBjMTYyNzM1ZDg5ZmNiN2E2NDRkJyxcclxuICAgIHZlcnNpb246ICcyLjAnLFxyXG4gICAgcGx1Z2luczogWydBTWFwLlNjYWxlJywgJ0FNYXAuVG9vbEJhcicsICdBTWFwLkRpc3RyaWN0TGF5ZXInLCAnQU1hcC5SZWN0YW5nbGVFZGl0b3InXVxyXG59KS50aGVuKChBTWFwKSA9PiB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIGxldCBtYXAgPSBuZXcgQU1hcC5NYXAoJ2NvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW1hcC1sYXllcicpLml0ZW0oMCk7XHJcbiAgICBsZXQgZGlzdHJpY3QgPSBuZXcgQU1hcC5EaXN0cmljdExheWVyLlByb3ZpbmNlKHtcclxuICAgICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICAgIFNPQzogJ0NITicsXHJcbiAgICAgICAgZGVwdGg6IDEsXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICduYXRpb24tc3Ryb2tlJzogJyMyMmZmZmYnLFxyXG4gICAgICAgICAgICAnY29hc3RsaW5lLXN0cm9rZSc6IFswLjgsIDAuNjMsIDAuOTQsIDFdLFxyXG4gICAgICAgICAgICAncHJvdmluY2Utc3Ryb2tlJzogJ3JlZCcsXHJcbiAgICAgICAgICAgICdmaWxsJzogJydcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hcC5zZXRMYXllcnMoW1xyXG4gICAgICAgIG5ldyBBTWFwLlRpbGVMYXllci5TYXRlbGxpdGUoKSxcclxuICAgICAgICBkaXN0cmljdFxyXG4gICAgXSk7XHJcbiAgICBtYXAuYWRkQ29udHJvbChuZXcgQU1hcC5TY2FsZSgpKTtcclxuICAgIG1hcC5hZGRDb250cm9sKG5ldyBBTWFwLlRvb2xCYXIoKSk7XHJcbiAgICB2YXIgc291dGhXZXN0ID0gbmV3IEFNYXAuTG5nTGF0KDExNi4zNTY0NDksIDM5Ljg1OTAwOCk7XHJcbiAgICB2YXIgbm9ydGhFYXN0ID0gbmV3IEFNYXAuTG5nTGF0KDExNi40MTc5MDEsIDM5Ljg5Mzc5Nyk7XHJcbiAgICB2YXIgYm91bmRzID0gbmV3IEFNYXAuQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcclxuICAgIHZhciByZWN0YW5nbGUgPSBuZXcgQU1hcC5SZWN0YW5nbGUoe1xyXG4gICAgICAgIGJvdW5kczogYm91bmRzLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiAncmVkJyxcclxuICAgICAgICBzdHJva2VXZWlnaHQ6IDYsXHJcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC41LFxyXG4gICAgICAgIHN0cm9rZVN0eWxlOiAnc29saWQnLFxyXG4gICAgICAgIGZpbGxDb2xvcjogJycsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgekluZGV4OiA1MCxcclxuICAgIH0pO1xyXG4gICAgbWFwLmFkZChyZWN0YW5nbGUpO1xyXG4gICAgLy8g57yp5pS+5Zyw5Zu+5Yiw5ZCI6YCC55qE6KeG6YeO57qn5YirXHJcbiAgICBtYXAuc2V0Rml0VmlldyhbcmVjdGFuZ2xlXSk7XHJcbiAgICB2YXIgcmVjdGFuZ2xlRWRpdG9yID0gbmV3IEFNYXAuUmVjdGFuZ2xlRWRpdG9yKG1hcCwgcmVjdGFuZ2xlKTtcclxuICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRfZWRpdFwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZWN0YW5nbGVFZGl0b3Iub3BlbigpKTtcclxuICAgIChfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kX2VkaXRcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVjdGFuZ2xlRWRpdG9yLmNsb3NlKCkpO1xyXG4gICAgKF9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmFseXNpc1wiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29uc3QgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRfYm90dG9tID0gbWFwLmxuZ0xhdFRvQ29udGFpbmVyKChfYSA9IHJlY3RhbmdsZS5nZXRCb3VuZHMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFNvdXRoV2VzdCgpKTtcclxuICAgICAgICBjb25zdCByaWdodF90b3AgPSBtYXAubG5nTGF0VG9Db250YWluZXIoKF9iID0gcmVjdGFuZ2xlLmdldEJvdW5kcygpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Tm9ydGhFYXN0KCkpO1xyXG4gICAgICAgIGNvbnN0IGh3ID0gTWF0aC5hYnMobGVmdF9ib3R0b20uZ2V0WCgpIC0gcmlnaHRfdG9wLmdldFkoKSk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShjYW52YXMsIGxlZnRfYm90dG9tLmdldFgoKSwgcmlnaHRfdG9wLmdldFkoKSwgaHcsIGh3KTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdF9pbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gYy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgfSk7XHJcbiAgICByZWN0YW5nbGVFZGl0b3Iub24oXCJhZGp1c3RcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIC8vIOmHjeaWsOiuvue9rlJlY3RhbmdsZeS4uuato+aWueW9olxyXG4gICAgICAgIGNvbnN0IGxlZnRfYm90dG9tID0gbWFwLmxuZ0xhdFRvQ29udGFpbmVyKChfYSA9IGRhdGEudGFyZ2V0LmdldEJvdW5kcygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0U291dGhXZXN0KCkpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0X3RvcCA9IG1hcC5sbmdMYXRUb0NvbnRhaW5lcigoX2IgPSBkYXRhLnRhcmdldC5nZXRCb3VuZHMoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldE5vcnRoRWFzdCgpKTtcclxuICAgICAgICBjb25zdCBsZW5ndGgxID0gTWF0aC5hYnMobGVmdF9ib3R0b20uZ2V0WCgpIC0gcmlnaHRfdG9wLmdldFkoKSk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoMiA9IE1hdGguYWJzKGxlZnRfYm90dG9tLmdldFkoKSAtIHJpZ2h0X3RvcC5nZXRZKCkpO1xyXG4gICAgICAgIGNvbnN0IHNob3J0ID0gTWF0aC5taW4obGVuZ3RoMSwgbGVuZ3RoMik7XHJcbiAgICAgICAgY29uc3Qgc291dGhXZXN0ID0gbWFwLmNvbnRhaW5lclRvTG5nTGF0KFtsZWZ0X2JvdHRvbS5nZXRYKCkgKyBzaG9ydCwgcmlnaHRfdG9wLmdldFkoKV0pO1xyXG4gICAgICAgIGNvbnN0IG5vcnRoRWFzdCA9IG1hcC5jb250YWluZXJUb0xuZ0xhdChbbGVmdF9ib3R0b20uZ2V0WCgpLCByaWdodF90b3AuZ2V0WSgpICsgc2hvcnRdKTtcclxuICAgICAgICBjb25zdCBib3VuZCA9IG5ldyBBTWFwLkJvdW5kcyhzb3V0aFdlc3QsIG5vcnRoRWFzdCk7XHJcbiAgICAgICAgZGF0YS50YXJnZXQuc2V0Qm91bmRzKGJvdW5kKTtcclxuICAgIH0pO1xyXG59KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=