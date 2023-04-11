function afficheDiviseur(entier) {
    for (var i = 1; i <= entier; i++) {
        if (entier % i == 0) {
            console.log(i);
        }
    }
}
afficheDiviseur(12);
