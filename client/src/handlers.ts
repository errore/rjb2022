export async function blockRequestHandler(x: number, y: number, z: number, request: string) {
    let url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;

    try {
        const response = await fetch(url, { method: 'GET' });
        const blob = await response.blob(); // get map image

        let fromData = new FormData();
        fromData.append('img', blob); // to from data

        const imgData = await fetch(request, { method: 'POST', body: fromData });
        const rawImage = await imgData.blob(); // get analysis image

        return URL.createObjectURL(rawImage)
    } catch (e) {
        console.error(e);
        return ''
    }
}

async function playgroundRequestHandler(x: number, y: number, z: number) {
    
}