// var mois = Number(prompt("Entrez le numero d'un moins entre 1 et 12"));

// switch(mois) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Ce mois comporte 31 jours")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Ce mois comporte 30 jours")
//         break
//     case 2:
//         console.log("Ce mois comporte 28 ou 29 jours")
//         break
//     default:
//         console.log("Mois non reconnu !")
// }



var mois = Number(prompt("Entrez le numero d'un moins entre 1 et 12"));
if((mois===1) || (mois===3) || (mois===5) || (mois===7) || (mois===8) || (mois===10) || (mois===12)) {
    console.log("Ce mois comporte 31 jours")
}
else if ((mois===4) || (mois===6) || (mois===9) || (mois===11)) {
    console.log("Ce mois comporte 30 jours")
}
else if (mois===2) {
    console.log("Ce mois comporte 28 ou 29 jours")
}
else {
    console.log("Mois non reconnu !")
}
