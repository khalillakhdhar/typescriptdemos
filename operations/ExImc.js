function calculeIMC(poid, taille) {
    return poid / (taille * taille);
}
var indice = Math.round(calculeIMC(64, 1.86));
console.log("Votre indice de masse corporelle est de " + indice);
if (indice < 20) {
    console.log("Vous êtes en dessous de votre poids idéal");
}
else if (indice >= 20 && indice <= 25) {
    console.log("Vous êtes dans votre poids idéal");
}
else {
    console.log("Vous êtes en surpoids");
}
