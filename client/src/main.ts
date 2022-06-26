import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";


load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d',//首次load key为必填
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.DistrictLayer', 'AMap.RectangleEditor']
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container');

    let district = new AMap.DistrictLayer.Province(
        {
            zIndex: 10,
            SOC: 'CHN',
            depth: 1,
            styles: {
                'nation-stroke': '#22ffff',
                'coastline-stroke': [0.8, 0.63, 0.94, 1],
                'province-stroke': 'red',
                'fill': ''
            }
        }
    );

    map.setLayers(
        [
            new AMap.TileLayer.Satellite(),
            district
        ]);

    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());

    var southWest = new AMap.LngLat(116.356449, 39.859008)
    var northEast = new AMap.LngLat(116.417901, 39.893797)

    var bounds = new AMap.Bounds(southWest, northEast)

    var rectangle: AMap.Rectangle = new AMap.Rectangle({
        bounds: bounds,
        strokeColor: 'red',
        strokeWeight: 6,
        strokeOpacity: 0.5,
        strokeStyle: 'solid',
        fillColor: '',
        cursor: 'pointer',
        zIndex: 50,
    })

    map.add(rectangle);
    // 缩放地图到合适的视野级别
    map.setFitView([rectangle])

    var rectangleEditor = new AMap.RectangleEditor(map, rectangle)

    document.getElementById("start_edit")?.addEventListener("click", () => rectangleEditor.open())
    document.getElementById("end_edit")?.addEventListener("click", () => rectangleEditor.close())

    rectangleEditor.on("end", ()=>{
        // 这里重新设置Rectangle为正方形
    })

}).catch((e) => {
    console.error(e);
});

