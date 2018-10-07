var Animal = {
    init: function(nom, race, taille, aboie, grogne) {
        this.nom= nom;
        this.race= race;
        this.taille= taille
        this.aboie= "Woof ! Woof"
        this.grogne="Grr ! Grr"
        
    }, 
    decrireChien: function() {
        var description = this.nom + " est un chien " + this.race + " mesurant " + this.taille + " cm " + " Ce chien aboie: " +this.aboie
        return description;
    },
    decrireChat: function() {
        var sub = this.nom + " est un chat " + this.race + " mesurant " + this.taille + " cm " + " Ce chat grogne : " +this.grogne
        return sub;
    }
}

var chien1 = Object.create(Animal)
chien1.init("Crokdur", "matin de Naples", 75)
console.log(chien1.decrireChien())

var chat = Object.create(Animal)
chat.init("Pupuce", "bichon", 22)
console.log(chat.decrireChat())





