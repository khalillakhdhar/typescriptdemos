function calculeTVA(quantite:number,prix:number):number {
   const totale=quantite*prix;
   console.log("Le prix total est de "+totale);
   var tva=0;
   if(totale<1000)
   tva=totale*0.1;
    else if( totale<=2000)
    tva=totale*0.15;
    else
    tva=totale*0.2;
    
    return tva;
}
function divCinque(a:number):void
{
    let unite=a%10; // obtient l'unité
    if(unite==0 || unite==5)
    console.log(a+" est divisible par 5");
    else
    console.log(a+" n'est pas divisible par 5");
}
function divTrois(ch:number):void {
    let unite=ch%10; // obtient l'unité
    let dizaine=(ch%100)/10; // obtient la dizaine
    let centaine=ch/100; // obtient la centaine
    let somme=unite+dizaine+centaine;
    if(somme%3==0)
    console.log(ch+" est divisible par 3");
    else
    console.log(ch+" n'est pas divisible par 3");
}

const taxe=calculeTVA(15,200);
console.log("La taxe est de "+taxe);

