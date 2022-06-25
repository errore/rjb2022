import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";


let tiles_handler = function (this: GlobalEventHandlers, ev: MouseEvent){
    console.log(this);
}

load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d',//首次load key为必填
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar']
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container');
    let tiles: AMap.TileLayer = new AMap.TileLayer.Flexible({
                cacheSize: 300,
                zIndex: 200,
                createTile: function (x: number, y: number, z: number, success: (arg0: HTMLCanvasElement) => void, fail: any) {
                    let c = document.createElement('canvas');
                    c.width = c.height = 256;
                    
                    let cxt = c.getContext("2d") as CanvasRenderingContext2D;
                    cxt.font = "15px Verdana";
                    cxt.fillStyle = "#ff0000";
                    cxt.strokeStyle = "#FF0000";
                    cxt.strokeRect(0, 0, 256, 256);
                    cxt.fillText('(' + [x, y, z].join(',') + ')', 10, 30);
                    c.onclick = tiles_handler
                    
                    // 通知API切片创建完成
                    success(c);
                }
            });

    map.setLayers(
        [
            new AMap.TileLayer.Satellite(),
            tiles
        ]);

    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());
    map.add(new AMap.Marker({
        position: map.getCenter()
    }));
}).catch((e) => {
    console.error(e);
});
