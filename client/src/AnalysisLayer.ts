import { blockRequestHandler, playgroundRequestHandler } from "./handlers";

export function getNewAnalysisLayer(AMap: any, mode: '/road/' | '/divide/' | '/classify/') {
    switch (mode) {
        case '/road/':
        case '/divide/':
            return new AMap.TileLayer.Flexible({
                cacheSize: 30,
                zIndex: 500,
                createTile: async function (x: number, y: number, z: number, success: any, fail: any) {
                    const img = document.createElement('img');

                    img.src = await blockRequestHandler(x, y, z, mode); // 等待请求

                    if (img.src === '') {
                        fail(); // 请求失败
                    } else {
                        success(img); // 通知API切片创建完成
                    }
                }
            })
        case '/classify/':
            return new AMap.TileLayer.Flexible({
                cacheSize: 30,
                zIndex: 500,
                createTile: async function (x: number, y: number, z: number, success: any, fail: any) {
                    const c = document.createElement('canvas');
                    c.height = c.width = 256;
                    const ctx = c.getContext('2d') as CanvasRenderingContext2D;
                    ctx.fillStyle = 'rgb(0, 100, 255)';

                    const pos = await playgroundRequestHandler(x, y, z);
                    if (pos) {
                        ctx.beginPath();
                        ctx.ellipse(pos[0], pos[1], 10, 10, 1, 0, 2 * Math.PI);
                        ctx.fill();
                        success(c);
                    }else{
                        fail();
                    }
                }
            })
        default:
            throw new Error("Invalid mode");
    }
}
