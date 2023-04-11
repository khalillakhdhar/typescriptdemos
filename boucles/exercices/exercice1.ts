function afficheDiviseur(entier:number):void {
    for (let i = 1; i <= entier; i++) {
        if (entier % i == 0) {
            console.log(i);
        }
    }
}
afficheDiviseur(12);