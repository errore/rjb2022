import { load } from "@amap/amap-jsapi-loader";
import "@amap/amap-jsapi-types"

load({ //首次调用 load
    key:'1c96d5a705a60c162735d89fcb7a644d',//首次load key为必填
    version:'2.0',
    plugins:['AMap.Scale','AMap.ToolBar']
}).then((AMap)=>{
    let map = new AMap.Map('container');
    map.addControl(new AMap.Scale())
    map.addControl(new AMap.ToolBar())
    map.add(new AMap.Marker({
        position:map.getCenter()
    }));
}).catch((e)=>{
    console.error(e);
});

load({
    plugins: ['AMap.MapType'],
    key: "",
    version: ""
}).then((AMap)=>{
    AMap.addControl(new AMap.MapType())
}).catch((e)=>{
    console.error(e);
});