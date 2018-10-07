var Personnage = {
    initPerso: function(nom, sante, force, xp) {
        this.nom=nom;
        this.sante= sante;
        this.force= force
        this.xp=0;
    },
    decrire: function() {
        var description = this.nom + " a " + this.sante + " de vie, " + this.force + " en force " + " et " + this.xp + " points d'experience"
        return description;
    }
}

var perso1 = Object.create(Personnage)
perso1.initPerso("Aurora", 125, 25)

var perso2 = Object.create(Personnage)
perso2.initPerso("Aurora", 130, 35)

console.log(perso1.decrire())
console.log(perso2.decrire())
