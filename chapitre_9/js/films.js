var films = {
    init: function(titre, annee, auteur) {
        this.titre = titre;
        this.annee = annee;
        this.auteur= auteur
    },
    decrire: function() {
        var description = this.titre + " (" + this.annee + ")" + " realisé par " + this.auteur
        return description
    }
 }

 var film1 = Object.create(films)
 film1.init("Le loup de Wall Street", 2013, "Ronaldo")

 var film2 = Object.create(films)
 film2.init("Vice-Versa", 2015, "Boby")

 var film3 = Object.create(films)
 film3.init("Friends", 2009, "dany")

var films = []
films.push(film1)
films.push(film2)
films.push(film3)

films.forEach(function(film) {
    console.log(film.decrire())
})
