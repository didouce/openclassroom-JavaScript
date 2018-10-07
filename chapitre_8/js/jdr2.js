var Personnage = {
    initPerso: function(nom, sante, force, pieces, cle) {
        this.nom = nom; 
        this.sante = sante;
        this.force= force;
        this.pieces= 10;
        this.cle= 1;
    },
    attaquer: function(cible) {
        if(this.sante >0) {
            var degats = this.force
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégats");
            cible.sante = cible.sante - degats;
            if(cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + "points de vie")
            } else {
                cible.sante = 0
                console.log(cible.nom + " est mort")
            }
        } else {
            console.log(this.nom + " ne peut plus attaquer ")
        }
    }  
}

var Joueur = Object.create(Personnage)
Joueur.initJoueur = function(nom, sante, force, xp) {
    this.initPerso(nom, sante, force)
    this.xp= 0;
}

Joueur.decrire = function() {
     var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience ," + this.pieces + " pieces d'or et  " + this.cle + " clé(s)" 
     return description;
    
}

Joueur.combattre = function(adversaire) {
    this.attaquer(adversaire)
    if(adversaire.sante===0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience" + ", ainsi que " + adversaire.pieces + " pieces et " + adversaire.cle + " clé(s)")
        this.xp +=adversaire.valeur;
        this.pieces+=adversaire.pieces
        this.cle+=adversaire.cle
    }
}

var Adversaire = Object.create(Personnage)
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force)
    this.race = race;
    this.valeur = valeur;
}

Adversaire.sub = function() {
    var sub = "Un affreux monstre arrive : c'est un " + this.race + " nommé " + this.nom;
    return sub
}

var joueur1 = Object.create(Joueur)
joueur1.initJoueur("Aurora", 150, 25)

var joueur2 = Object.create(Joueur)
joueur2.initJoueur("Glacius", 130, 30)

var monstre = Object.create(Adversaire)
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10)

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :")

console.log(joueur1.decrire())
console.log(joueur2.decrire())
console.log(monstre.sub())

monstre.attaquer(joueur1)
monstre.attaquer(joueur2)

joueur1.combattre(monstre)
joueur2.combattre(monstre)


console.log(joueur1.decrire())
console.log(joueur2.decrire())


