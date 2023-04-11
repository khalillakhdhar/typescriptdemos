function isDateValid(jour, mois, annee) {
    var bissextille = (annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0;
    if (jour < 1 || jour > 31 || mois < 1 || mois > 12 || annee < 1)
        console.log("La date n'est pas valide");
    else if ((mois == 4 || mois == 6 || mois == 9 || mois == 11) && jour >= 31)
        console.log("La date n'est pas valide");
    else if (mois == 2 && bissextille && jour >= 30 || mois == 2 && !bissextille && jour >= 29)
        console.log("La date n'est pas valide");
    else
        console.log("La date est valide");
}
isDateValid(29, 2, 2020);
isDateValid(29, 2, 2021);
isDateValid(12, 3, 2022);
