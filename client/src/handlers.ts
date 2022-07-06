/**
 * 处理图块生成请求
 * @param x x
 * @param y y
 * @param z z
 * @param request 请求地址
 * @returns objectURL
 */
export async function blockRequestHandler(x: number, y: number, z: number, request: string) {
    const url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;

    try {
        const response = await fetch(url, { method: 'GET' });
        const blob = await response.blob(); // get map image

        const fromData = new FormData();
        fromData.append('img', blob); // to from data

        const imgData = await fetch(request, { method: 'POST', body: fromData });
        const rawImage = await imgData.blob(); // get analysis image

        return URL.createObjectURL(rawImage)
    } catch (e) {
        console.error(e);
        return '';
    }
}

/**
 * 处理物体位置识别标签
 * @param x x
 * @param y y
 * @param z z
 * @returns 标记位置
 */
export async function playgroundRequestHandler(x: number, y: number, z: number) {
    const url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;

    try {
        let response = await fetch(url, { method: 'GET' });

        if (response.status !== 200) {
            response = await fetch(url, { method: 'GET' }); // retry
        }

        const blob = await response.blob(); // 从api获取地图

        const fromData = new FormData();
        fromData.append('img', blob); // 转换为from data

        const data = await fetch('/classify/', { method: 'POST', body: fromData });
        const json = await data.json(); // 转换为json object

        if (Number(json.score) < 0.4) return null;
        else {
            const boundingBox: number[] = json.bbox;
            return [boundingBox[0] + boundingBox[2] / 2, boundingBox[1] + boundingBox[3] / 2];
        }
    } catch (e) {
        console.error(e);
        return null;
    }
}

/**
 * 处理开关
 * @param target 开关
 * @param layer 图层
 */
export function switchHandler(target: HTMLInputElement, layer: AMap.TileLayer) {
    target.addEventListener('change', () => {
        if (target.checked) {
            layer.show();
        } else {
            layer.hide();
        }
    });
}

/**
 * 处理透明度
 * @param target 滑条
 * @param layer 图层
 * @param id 标签id
 */
export function opacityHandler(target: HTMLInputElement, layer: AMap.TileLayer, id: 'road_opa_val' | 'divide_opa_val') {

    function handler() {
        (document.getElementById(id) as HTMLSpanElement).innerText = target.value;
        layer.setOpacity(Number(target.value));
    }

    target.addEventListener('input', handler);
    target.addEventListener('change', handler);
}

/**
 * 处理UI图片传输
 * @param img 图片
 */
export function imgDragHandler(img: HTMLImageElement, num: number) {
    img.addEventListener('drop', (ev) => {
        ev.preventDefault();

        const fileList = ev.dataTransfer?.files as FileList;
        if (fileList.length === 0) {
            return false;
        }
        // 获取文件

        if (fileList[0].type.indexOf('image') === -1) {
            return false;
        }
        // 判断是否为图片

        img.src = URL.createObjectURL(fileList[0]);
    });
    // 拖放事件
    const input = document.getElementById('input_' + num) as HTMLInputElement;
    img.addEventListener('click', () => {
        input.click();
    });
    input.addEventListener('change', ()=>{
        if (input.files) {
            img.src = URL.createObjectURL(input.files[0]);
        }
    })
    // 点击事件
}

