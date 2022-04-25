let rgbHtml = document.getElementById('rgb-color');
let cores = document.querySelector('.cores');
function rgbGen(elemento) {
    let rgb = [];
    let sorteioRgb = 0;
    for (let index = 0; index < 3; index += 1) {
        sorteioRgb = Math.floor(Math.random() * 256);
        rgb.push(sorteioRgb);
    }
    return elemento.innerText = "(" + rgb + ")";
}
function geraCores() {
    for (let key = 0; key < 6; key += 1) {
    let cor = document.createElement('div');
    cor.className = 'ball';
    let sorteioCor = '';
    sorteioCor = rgbGen(sorteioCor);
    cor.style.backgroundColor = 'rgb' + sorteioCor;
    cores.appendChild(cor);
    }
}
geraCores();
rgbGen(rgbHtml);