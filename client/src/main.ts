import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types";


load({ //首次调用 load
    key: '1c96d5a705a60c162735d89fcb7a644d',//首次load key为必填
    version: '2.0',
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.DistrictLayer', 'AMap.RectangleEditor']
}).then((AMap) => {
    let map: AMap.Map = new AMap.Map('container');
    const canvas = document.getElementsByClassName('amap-layer').item(0) as HTMLCanvasElement;

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

    var southWest = new AMap.LngLat(116.356449, 39.859008);
    var northEast = new AMap.LngLat(116.417901, 39.893797);

    var bounds = new AMap.Bounds(southWest, northEast);

    var rectangle: AMap.Rectangle = new AMap.Rectangle({
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

    document.getElementById("start_edit")?.addEventListener("click", () => rectangleEditor.open());
    document.getElementById("end_edit")?.addEventListener("click", () => rectangleEditor.close());
    document.getElementById("analysis")?.addEventListener("click", ()=> {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d') as CanvasRenderingContext2D;
        const left_bottom:AMap.Pixel = map.lngLatToContainer(rectangle.getBounds()?.getSouthWest() as AMap.LngLat);
        const right_top:AMap.Pixel = map.lngLatToContainer(rectangle.getBounds()?.getNorthEast() as AMap.LngLat);
        const hw = Math.abs(left_bottom.getX() - right_top.getY());
        ctx.drawImage(canvas, left_bottom.getX(), right_top.getY(), hw, hw);
        const img = document.getElementById('test_img') as HTMLImageElement;
        img.src = c.toDataURL('image/png')
    });

    rectangleEditor.on("adjust", (data:{target:AMap.Rectangle, lnglat:AMap.LngLat, pixel:AMap.Pixel})=>{
        // 重新设置Rectangle为正方形
        const left_bottom:AMap.Pixel = map.lngLatToContainer(data.target.getBounds()?.getSouthWest() as AMap.LngLat);
        const right_top:AMap.Pixel = map.lngLatToContainer(data.target.getBounds()?.getNorthEast() as AMap.LngLat);

        const length1 = Math.abs(left_bottom.getX() - right_top.getY());
        const length2 = Math.abs(left_bottom.getY() - right_top.getY());
        const short = Math.min(length1, length2);
        const southWest:AMap.LngLat = map.containerToLngLat([left_bottom.getX() + short, right_top.getY()])
        const northEast:AMap.LngLat = map.containerToLngLat([left_bottom.getX(), right_top.getY() + short])
        const bound:AMap.Bounds = new AMap.Bounds(southWest, northEast);

        data.target.setBounds(bound);
    })

}).catch((e) => {
    console.error(e);
});

