function calculeIMC(poid:number,taille:number):number {
    return poid/(taille*taille);
}
const indice=Math.round(calculeIMC(80,1.80));
console.log("Votre indice de masse corporelle est de "+indice);