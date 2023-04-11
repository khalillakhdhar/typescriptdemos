function getPaire(tab:number[]):number[]
{
    let tabPaire:number[]=[];
    for(let i=0;i<tab.length;i++)
    {
        if(tab[i]%2==0)
        {
            tabPaire.push(tab[i]); // push ajoute un élément à la fin du tableau
        }
    }
    return tabPaire;
}

const tab=[11,2,19,14,5,6,7,8,9,10];
console.log(getPaire(tab));