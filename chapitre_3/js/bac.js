var moyenne = Number(prompt("Entrez votre moyenne"));

if(moyenne < 10) {
    console.log("vous etes recalé")
}
else if ((moyenne => 10) && (moyenne < 12)) {
    console.log("Vous etes reçu")
}
else if (moyenne => 12) {
    console.log("Vous etes reçu avec mention")
}
