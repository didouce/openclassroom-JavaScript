// var perso = {
//     nom: "Aurora",
//     sante: 150,
//     force: 25
// };
// console.log(perso.nom + " a " + perso.sante + "  points de vie et " + perso.force + " en force ")

// perso.sante -= 20
// perso.force +=10

// console.log(perso.nom + " a " + perso.sante + "  points de vie et " + perso.force + " en force ")




// var perso = {
//     nom: "Aurora",
//     sante: 150,
//     force: 25,

//     decrire: function() {
//         var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force";
//         return description
//     }
// };
// console.log(perso.decrire())

// perso.sante -=20;
// perso.force +=10

// console.log(perso.decrire())




var perso = {}
perso.nom = "Aurora"
perso.sante = 150
perso.force = 25
perso.decrire = function() {
    var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force";
    return description
}
console.log(perso.decrire())

perso.sante -=20;
perso.force +=10

console.log(perso.decrire())







// console.log(Math.random())