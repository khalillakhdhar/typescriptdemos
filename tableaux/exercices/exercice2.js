function maxNumber(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [11, 2, 19, 14, 5, 6, 7, 8, 9, 10];
console.log("max ", maxNumber(numbers));
