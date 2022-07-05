import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getNewAnalysisLayer } from "./AnalysisLayer";
import { opacityHandler, switchHandler } from "./handlers";

load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d', // 首次load key为必填
    version: '2.0', // 2.0 无法切片但性能更佳
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.HawkEye'] // 定义插件
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        zoom: 14,
        zooms: [3, 15]
    }); // 定义地图参数

    const roadLayer: AMap.TileLayer = getNewAnalysisLayer(AMap, '/road/'); // 路网图层
    const divideLayer: AMap.TileLayer = getNewAnalysisLayer(AMap, '/divide/'); // 分割图层
    const classifyLayer: AMap.TileLayer = getNewAnalysisLayer(AMap, '/classify/'); // 识别分类图层 playground

    map.setLayers(
        [
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

    const road_switch = document.getElementById('road_switch') as HTMLInputElement;
    const classify_switch = document.getElementById('classify_switch') as HTMLInputElement;
    const divide_switch = document.getElementById('divide_switch') as HTMLInputElement;

    switchHandler(road_switch, roadLayer);
    switchHandler(classify_switch, classifyLayer);
    switchHandler(divide_switch, divideLayer);
    // 绑定开关事件

    const road_opacity = document.getElementById('road_opacity') as HTMLInputElement;
    const divide_opacity = document.getElementById('divide_opacity') as HTMLInputElement;

    opacityHandler(road_opacity, roadLayer, "road_opa_val");
    opacityHandler(divide_opacity, divideLayer, "divide_opa_val");
    // 绑定透明度滑条

    roadLayer.setOpacity(0.6);
    divideLayer.setOpacity(0.6);

    const model = document.getElementById('model') as HTMLElement;

    document.getElementById('bit')?.addEventListener('click', () => {
        model.setAttribute('class', 'model display-model');
    });

    document.getElementById('exit_bit')?.addEventListener('click', ()=>{
        model.setAttribute('class', 'model');
    });

}).catch((e) => {
    console.error(e);
});
