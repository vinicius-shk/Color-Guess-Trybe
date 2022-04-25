let rgbHtml = document.getElementById('rgb-color');
function rgbGen() {
    let rgb = [];
    let sorteioRgb = 0;
    for (let index = 0; index < 3; index += 1) {
        sorteioRgb = Math.floor(Math.random() * 256);
        rgb.push(sorteioRgb);
    }
    rgbHtml.innerText ="(" + rgb + ")";
}
rgbGen();