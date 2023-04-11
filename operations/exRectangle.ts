function rectangle(hauteur: number, largeur: number): void {
  let surface=hauteur * largeur;
    let perimetre=2*(hauteur+largeur);
    console.log("La surface du rectangle est de "+surface+" et son périmètre est de "+perimetre);
}
rectangle(5, 10);