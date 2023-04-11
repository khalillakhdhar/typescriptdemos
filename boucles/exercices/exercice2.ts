/*
a=5 , b=15
pgcd(a,b)
b=b-a=10
b=b-a=5
b-a==0 => pgcd=5

*/
function pgcd(a:number,b:number):number {
console.log("pgcd("+a+","+b+")");
    while(a!=b)
    {
        if(a>b)
        a=a-b;
        else
        b=b-a;
    }
    return a;
}
console.log(pgcd(16,48));