function afficheDiviseur(entier, a, b) {
    for (var i = a; i <= b; i++) {
        if (entier % i == 0) {
            console.log(i);
        }
    }
}
afficheDiviseur(12, 2, 8);
