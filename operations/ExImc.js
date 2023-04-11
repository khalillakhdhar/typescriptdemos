function calculeIMC(poid, taille) {
    return poid / (taille * taille);
}
var indice = Math.round(calculeIMC(80, 1.80));
console.log("Votre indice de masse corporelle est de " + indice);
