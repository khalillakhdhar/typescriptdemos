var arr:number [] = [12,13] // 2 éléments dans le tableau
var [x,y ] = arr // 2 variables destructurées
console.log("x",x)
console.log("y",y)
var j:any;
var nums:string [] = ["1001","1002","1003","1004"]
for(j in nums ) { // j est un entier
console.log("j:",nums [j])
}