import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { getNewAnalysisLayer } from "./AnalysisLayer";
import { imgDragHandler, opacityHandler, switchHandler } from "./handlers";

const model = document.getElementById('model');

document.getElementById('bit')?.addEventListener('click', () => {
    model?.setAttribute('class', 'model display-model');
});

document.getElementById('exit_bit')?.addEventListener('click', () => {
    model?.setAttribute('class', 'model');
});
// 绑定bit界面

const img_1 = document.getElementById('img_1') as HTMLImageElement;
const img_2 = document.getElementById('img_2') as HTMLImageElement;

let file1 = new File([],'t1');
let file2 = new File([], 't2');

img_1.addEventListener('dragover', (ev) => ev.preventDefault());
img_2.addEventListener('dragover', (ev) => ev.preventDefault());

imgDragHandler(img_1, 1, file1);
imgDragHandler(img_2, 2, file2);
// 绑定拖放点击

const input_1 = document.getElementById('input_1') as HTMLInputElement;
const input_2 = document.getElementById('input_2') as HTMLInputElement;

const layer_0 = document.getElementById('bit_layer_0') as HTMLImageElement;
const layer_1 = document.getElementById('bit_layer_1') as HTMLImageElement;
const layer_2 = document.getElementById('bit_layer_2') as HTMLImageElement;



document.getElementById('bit_send')?.addEventListener('click', async () => {
    if (!(input_1.files && input_2.files)) return false;

    try {
        const t1 = file1;
        const t2 = file2;

        let formData = new FormData();
        formData.append("t1", t1);
        formData.append("t2", t2);

        const response = await fetch('/bit/', { method: "POST", body: formData });
        const blob = await response.blob();

        layer_0.src = URL.createObjectURL(t1);
        layer_1.src = URL.createObjectURL(t2);
        layer_2.src = URL.createObjectURL(blob);

        layer_1.setAttribute('class', 'bit-layer bit-animate');
        layer_1.setAttribute('class', 'bit-layer bit-animate');
    } catch (e) {
        return false
    }
});
// 绑定BIT按钮



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

}).catch((e) => {
    console.error(e);
});
