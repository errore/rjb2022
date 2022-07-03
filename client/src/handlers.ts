export async function blockClickHandler(x: number, y: number, z: number, cxt: CanvasRenderingContext2D) {
    let url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x=' + x + '&y=' + y + '&z=' + z;

    try {
        const response = await fetch(url, { method: 'GET' });
        const blob = await response.blob(); // get map image

        let fromData = new FormData();
        fromData.append('img', blob); // to from data

        const imgData = await fetch('/road/', { method: 'POST', body: fromData });
        const rawImage = await imgData.blob(); // get analysis image
        const img = document.createElement('img');
        img.src = URL.createObjectURL(rawImage);

        cxt.drawImage(img, 0, 0);

    } catch (e) {
        return console.error(e);
    }
}