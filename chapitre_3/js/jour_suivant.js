// var jour = String(prompt("Introduisez un jour"));
// if (jour === "samedi") {
//     console.log("Demain, nous serons Dimanche")
// }
// else if (jour === "dimanche") {
//     console.log("Demain, nous serons Lundi")
// }
// else {
//     console.log("Jour de semaine")
// }




var jour = String(prompt("Introduisez un jour"));
switch(jour) {
    case "samedi":
        console.log("Demain, nous serons Dimanche")
        break
    case "dimanche": {
        console.log("Demain, nous serons Lundi")
        break
    }
    default: {
        console.log("Jour de semaine")
    }
}