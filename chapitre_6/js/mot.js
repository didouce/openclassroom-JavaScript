// function compterNbVoyelles(mot) {
//     var nbVoyelles = 0;
//     for (var i = 0; i < mot.length; i++) {
//         var lettre = mot[i].toLowerCase();
//         if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
//             (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
//             nbVoyelles++;
//         }
//     }
//     return nbVoyelles;
// }

// function inverser(mot) {
//     var motInverse = "";
//     for (var i = 0; i < mot.length; i++) {
//         motInverse = mot[i] + motInverse;
//     }
//     return motInverse;
// }

// function convertirEnLeetSpeek(mot) {
//     var motLeet = "";
//     for (var i = 0; i < mot.length; i++) {
//         motLeet = motLeet + trouverLettreLeet(mot[i]);
//     }
//     return motLeet;
// }

// function trouverLettreLeet(lettre) {
//     // Par défaut, la lettre ne change pas
//     var lettreLeet = lettre;
//     switch (lettre.toLowerCase()) {
//     case "a":
//         lettreLeet = "4";
//         break;
//     case "b":
//         lettreLeet = "8";
//         break;
//     case "e":
//         lettreLeet = "3";
//         break;
//     case "l":
//         lettreLeet = "1";
//         break;
//     case "o":
//         lettreLeet = "0";
//         break;
//     case "s":
//         lettreLeet = "5";
//         break;
//     case "t":
//         lettreLeet = "7";
//         break;
//         // ...
//     }
//     return lettreLeet;
// }

// var motSaisi = prompt("Entrez un mot :");

// var longueurMot = motSaisi.length;
// console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
// console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
// console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

// var nbVoyelles = compterNbVoyelles(motSaisi);
// console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

// var motInverse = inverser(motSaisi);
// console.log("Il s'écrit à l'envers " + inverser(motSaisi));

// if (motInverse.toLowerCase() === motSaisi.toLowerCase()) {
//     console.log("C'est un palindrome");
// } else {
//     console.log("Ce n'est pas un palindrome");
// }

// var motLeetSpeak = convertirEnLeetSpeek(motSaisi);
// console.log("Il s'écrit en leet speak " + motLeetSpeak);







function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for(var i = 0; i<mot.length; i++) {
        var lettre = mot[i].toLowerCase() 
        if(lettre==='a' || lettre==='e' || lettre==='y' || lettre ==='u' || lettre==='i' || lettre==='o') {
            nbVoyelles++;
        }
    }
    return nbVoyelles
}

var motSaisi = prompt("Introduisez un mot : ")

var longueurMot = motSaisi.length;
console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

var nbVoyelles = compterNbVoyelles(motSaisi)
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot-nbVoyelles) + " consonne(s)")


function reverseString(mot) {
    mot = mot.split("").reverse().join("")

    return mot;
}
var motInverse = reverseString(motSaisi)
console.log("Il s'ecrit à l'envers :" + motInverse)


function convertirEnLeetSpeek(mot) {
var motLeetSpeak = ""
for(var i =0; i<mot.length; i++) {
    motLeetSpeak = motLeetSpeak + trouverLettreLeet(mot[i])
}
return motLeetSpeak;
}

function trouverLettreLeet(lettre) {
    var lettreLeet = lettre;
    switch(lettre) {
        case "a":
        lettreLeet = '4'
        break;
        case "b":
        lettreLeet = '8'
        break;
        case "e": 
        lettreLeet = '3'
        break;
        case "l":
        lettreLeet = '1'
        break;
        case "o":
        lettreLeet = '0'
        break;
        case "s":
        lettreLeet = '5'
        break;
    }
    return lettreLeet
}

var motLeetSpeak = convertirEnLeetSpeek(motSaisi)
console.log("Il s'écrit en leetspeak " +motLeetSpeak)

if(motInverse ===motSaisi) {
    console.log("C'est un plindrome")
} else {
    console.log("Ce mot n'est pas un plindrome")
}