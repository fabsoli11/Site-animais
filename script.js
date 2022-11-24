var imgAtual = "imagens/Imagem-Animais-Safari-PNG.png";
var imgAnterior = "imagens/p.png";

function trocar(){    
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}