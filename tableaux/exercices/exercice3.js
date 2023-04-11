function concatenateStrings(strings) {
    var result = "";
    for (var i = 0; i < strings.length; i++) {
        result += strings[i] + " ";
    }
    return result.trim(); // trim() supprime les espaces en début et fin de chaîne
}
console.log(concatenateStrings([" Hello", "typescript", "and", "node js", "!"]));
