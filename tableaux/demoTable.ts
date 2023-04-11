var cars=["Saab","Volvo","BMW"];
console.log("avant: "+cars);
cars.push("Audi");
console.log("après: "+cars);
console.log("taille: "+cars.length);
cars.shift();
console.log("après shift: "+cars);
console.log("index de Volvo: "+cars.indexOf("Volvo"));
console.log("index de Mercedes: "+cars.indexOf("Mercedes"));
//console.log(cars.includes("Volvo")); // incompatible avec ts ES5
