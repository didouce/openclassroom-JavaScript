// var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"]
// console.log(films.length)



// var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"]
// console.log(films[0])
// console.log(films[1])
// console.log(films[2])
// console.log(films[3])





// var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"]
// for(var i=0; i<films.length; i++) {
//     console.log(films[i])
// }




// var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"]
// films.forEach(function(film) {
//     console.log(film)
// });



// var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"]
// films.push("Les Bronzés")
// console.log(films)



var films = {
    init: function(titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    decrire: function() {
        var description = this.titre + " (" + this.annee + ")"
        return description
    }
 }

 var film1 = Object.create(films)
 film1.init("Le loup de Wall Street", 2013)

 var film2 = Object.create(films)
 film2.init("Vice-Versa", 2015)

var films = []
films.push(film1)
films.push(film2)

films.forEach(function(film) {
    console.log(film.decrire())
})

