var num = 5;
var i;
//console.log("i"+i); // undefined
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i; // factorial=factorial*i
}
console.log(factorial);
