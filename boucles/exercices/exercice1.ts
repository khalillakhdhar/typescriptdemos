function afficheDiviseur(entier:number,a:number,b:number):void {
    for (let i = a; i <= b; i++) {
        if (entier % i == 0) {
            console.log(i);
        }
    }
}
afficheDiviseur(12,2,8);