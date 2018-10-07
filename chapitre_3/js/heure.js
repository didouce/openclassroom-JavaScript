var heure = Number(prompt("Introduisez l'heure"))
var minutes = Number(prompt("Introduisez les minutes"))
var secondes = Number(prompt("Introduisez les secondes"))

if ((heure =>0) && (heure <=23) && (minutes =>0) && (minutes<=59) && (secondes => 0) && (secondes <=59)) {
    secondes++
    if(secondes===60) {
        secondes=0
        minutes++
        if(minutes===60) {
            minutes=0
            heure++
            if(heure===24) {
                heure=0
            }
        }
    }
console.log("Dans une seconde, il sera " + heure + " h, " +minutes + " min et " + secondes + " s");
} else {
    console.log("Heure incorrecte !");
}
