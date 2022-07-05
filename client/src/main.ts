import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getNewAnalysisLayer } from "./AnalysisLayer";


load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d', // 首次load key为必填
    version: '2.0', // 2.0 无法切片但性能更佳
    plugins: ['AMap.Scale', 'AMap.ToolBar'] // 定义插件
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 14,
        zooms: [3, 15],
        expandZoomRange: true
    }); // 定义地图参数

    const roadLayer:AMap.TileLayer = getNewAnalysisLayer(AMap, '/road/'); // 路网图层
    const divideLayer:AMap.TileLayer = getNewAnalysisLayer(AMap, '/divide/'); // 分割图层
    
    map.setLayers(
        [
            new AMap.TileLayer.Satellite(),
            roadLayer,
            divideLayer
        ]); // 设置图层

    roadLayer.hide();
    divideLayer.hide();

    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());

}).catch((e) => {
    console.error(e);
});

