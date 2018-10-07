var Animal = {
    init: function(nom, race, taille, aboie) {
        this.nom= nom;
        this.race= race;
        this.taille=taille;
        this.aboie= aboie;
     }, 
    decrire: function() {
        var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm " + " Ce chien aboie : " + this.aboie
        return description;
    }
}

var chien = Object.create(Animal)
chien.init("Crockdur", "matin", 1.75, "Grr ! Grr!")
console.log(chien.decrire())


