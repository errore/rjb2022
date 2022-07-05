import { blockRequestHandler } from "./handlers";

export function getNewAnalysisLayer(AMap: any, mode: '/road/'|'/divide/'|'/classify/') {
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

                    // c.src = await blockRequestHandler(x, y, z, mode); // 等待请求

                    success(c); // 通知API切片创建完成
                }
            })
        default:
            throw new Error("Invalid mode");
    }
}
