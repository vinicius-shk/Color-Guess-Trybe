let rgbHtml = document.getElementById('rgb-color');
let cores = document.querySelector('.cores');
let bolaCores = document.querySelector('.cores').children;
let secaoCores = document.getElementsByTagName('section');
function textoJogo(string) {
    let textoDoJogo = document.createElement('p');
    textoDoJogo.setAttribute('id', 'answer');
    textoDoJogo.innerText = string;
    secaoCores[0].appendChild(textoDoJogo);
}
function rgbGen(elemento) {
    let rgb = [];
    let sorteioRgb = 0;
    for (let index = 0; index < 3; index += 1) {
        sorteioRgb = Math.floor(Math.random() * 256);
        rgb.push(sorteioRgb);
    }
    return elemento.innerText = "(" + rgb + ")";
}
//Gera os 6 elementos com cores aleatórias
function geraCores() {
    for (let key = 0; key < 6; key += 1) {
    let cor = document.createElement('div');
    cor.className = 'ball';
    let sorteioCor = '';
    sorteioCor = rgbGen(sorteioCor);
    cor.style.backgroundColor = 'rgb' + sorteioCor;
    cor.addEventListener('click', verificacao);
    cores.appendChild(cor);
    }
}
//Atribui o elemento com ID answer e atribui a cor designada
function resposta() {
    let escolhaResposta = bolaCores[Math.floor(Math.random() * 6)];
    escolhaResposta.setAttribute('id', 'resposta');
    escolhaResposta.style.backgroundColor = 'rgb' + rgbHtml.innerHTML;
}
//Verificação se o clique foi no elemento com ID especificado
function verificacao(evento) {
    if (evento.target.id === 'resposta') {
        secaoCores[0].lastChild.innerText = "Acertou!";
    } else {
        secaoCores[0].lastChild.innerText = "Errou! Tente novamente!";
    }
}
rgbGen(rgbHtml);
geraCores();
resposta();
textoJogo("Escolha uma cor");