import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";
import { blockClickHandler } from "./handlers";


load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d',//首次load key为必填
    version: '1.4.15',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.DistrictLayer', 'AMap.RectangleEditor']
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 14,
        zooms: [3, 20],
        expandZoomRange: true
    });

    var layer: AMap.TileLayer = new AMap.TileLayer.Flexible({
        cacheSize: 30,
        zIndex: 500,
        createTile: function (x: number, y: number, z: number, success: any, fail: any) {
            var c = document.createElement('canvas');
            c.width = c.height = 256;

            var cxt = c.getContext("2d") as CanvasRenderingContext2D;
            cxt.strokeStyle = "#FF0000";
            cxt.strokeRect(0, 0, 256, 256);

            c.addEventListener("click", () => blockClickHandler(x, y, z, cxt));
            // 通知API切片创建完成
            success(c);
        }
    });

    map.setLayers(
        [
            new AMap.TileLayer.Satellite(),
            layer
        ]);

    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());

}).catch((e) => {
    console.error(e);
});

