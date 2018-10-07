// var Mousquetaires = {
//     init: function(nom) {
//         this.nom = nom;
//     }, 
//     decrire: function() {
//         var description = this.nom;
//         return description
//     }
// }

// var moustique1 = Object.create(Mousquetaires) 
// moustique1.init("Athos")

// var moustique2 = Object.create(Mousquetaires) 
// moustique2.init("Porthos")

// var moustique3 = Object.create(Mousquetaires) 
// moustique3.init("Aramis")

// console.log("Voici les trois moustiques : ")

// var moustique = []
// moustique.push(moustique1)
// moustique.push(moustique2)
// moustique.push(moustique3)

// moustique.forEach(function(moustique) {
//     console.log(moustique.decrire())
// })

// var moustique4 = Object.create(Mousquetaires) 
// moustique4.init("Artagnan")

// console.log("A présent, ils sont quatre ")

// moustique.push(moustique4)
// moustique.forEach(function(moustique) {
//     console.log(moustique.decrire())
// })



var moustiques = ["Athos", "Porthos", "Aramis"]

console.log("Voici les trois moustiques : ")

for(var i = 0; i<moustiques.length; i++) {
    console.log(moustiques[i])
}

moustiques.push("Aragan")
console.log("A present ils sont à quatre : ")
moustiques.forEach(function(moustique) {
    console.log(moustique)
})