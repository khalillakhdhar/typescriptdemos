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
const taxe=calculeTVA(15,200);
console.log("La taxe est de "+taxe);

