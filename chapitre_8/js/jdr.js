// var Perso = {
//     nom: "",
//     sante: 0,
//     force: 0,
//     xp: 0,
//     decrire: function() {
//         var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
//         return description;
//     }
// };
// var perso1 = Object.create(perso);
// perso1.nom = "Aurora";
// perso1.sante = 150;
// perso1.force = 25;

// var perso2 = Object.create(perso);
// perso2.nom = "Glacius";
// perso2.sante = 130;
// perso2.force = 35;

// console.log(perso1.decrire())
// console.log(perso2.decrire())







// var Perso = {
//         init: function(nom, sante, force) {
//             this.nom = nom;
//             this.sante = sante;
//             this.force = force;
//             this.xp = 0;
//         },
//         decrire: function() {
//             var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
//             return description
            
//         }
//     }

// var perso1 = Object.create(Perso)
// perso1.init("Aurora", 150, 25)

// var perso2 = Object.create(Perso)
// perso2.init("Glacius", 130, 30)

// console.log(perso1.decrire())
// console.log(perso2.decrire())







// var Perso = {
//     initPerso: function(nom, sante, force) {
//         this.nom=nom;
//         this.sante=sante;
//         this.force=force;
//     }
// };

// var Joueur = Object.create(Perso)
// Joueur.initJoueur = function(nom, sante, force, xp) {
//     this.initPerso(nom, sante, force)
//     this.xp=0
// };

// Joueur.decrire = function() {
//     var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
//     return description
// }

// var Adversaire = Object.create(Perso)
// Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
//     this.initPerso(nom, sante, force)
//     this.race= race
//     this.valeur=valeur
// }

// var Joueur1 = Object.create(Joueur)
// Joueur1.initJoueur("Aurora", 150, 25)

// var Joueur2 = Object.create(Joueur)
// Joueur2.initJoueur("Glacius", 130, 30)

// console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
// console.log(Joueur1.decrire())
// console.log(Joueur2.decrire())


// var monstre = Object.create(Adversaire)
// monstre.initAdversaire("ZogZog", 40, 20, "orc", 10)


// console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);













// var Perso = {
//     initPerso: function(nom, sante, force){
//         this.nom = nom;
//         this.sante = sante;
//         this.force = force;
//     },
// }

// var Joueur = Object.create(Perso)
// Joueur.initJoueur = function(nom, sante, force, xp) {
//     this.initPerso(nom, sante, force);
//     this.xp = 0;
// } 

// var Adversaire = Object.create(Perso)
// Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
//     this.initPerso(nom, sante, force)
//     this.race = race;
//     this.valeur = valeur;
// }

// Joueur.decrire = function() {
//     var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
//     return description;
// }

// var Joueur1 = Object.create(Joueur)
// Joueur1.initJoueur("Aurora", 150, 25)

// var Joueur2 = Object.create(Joueur)
// Joueur2.initJoueur("Glasius", 140, 30)

// console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
// console.log(Joueur1.decrire())
// console.log(Joueur2.decrire())


// var monstre = Object.create(Adversaire)
// monstre.initAdversaire("ZogZog", 40, 20, "orc", 10)

// console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom)








// //Mon travail 
// var Personnage = {
//     initPerso: function(nom, sante, force) {
//         this.nom = nom; 
//         this.sante = sante;
//         this.force= force;
//     }
// }

// var Joueur = Object.create(Personnage)
// Joueur.initJoueur = function(nom, sante, force, xp) {
//     this.initPerso(nom, sante, force)
//     this.xp= 0;
// }
// Joueur.decrire = function() {
//      var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
//      return description;
    
// }

// var Adversaire = Object.create(Personnage)
// Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
//     this.initPerso(nom, sante, force)
//     this.race = race;
//     this.valeur = valeur;
// }

// Adversaire.sub = function() {
//     var sub = "Un affreux monstre arrive : c'est un " + this.race + " nommé " + this.nom;
//     return sub
// }

// var joueur1 = Object.create(Joueur)
// joueur1.initJoueur("Aurora", 150, 25)

// var joueur2 = Object.create(Joueur)
// joueur2.initJoueur("Glacius", 130, 30)

// var monstre = Object.create(Adversaire)
// monstre.initAdversaire("ZogZog", 40, 20, "orc", 10)

// console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :")

// console.log(joueur1.decrire())
// console.log(joueur2.decrire())
// console.log(monstre.sub())








var Personnage = {
    initPerso: function(nom, sante, force) {
        this.nom = nom; 
        this.sante = sante;
        this.force= force;
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
     var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
     return description;
    
}

Joueur.combattre = function(adversaire) {
    this.attaquer(adversaire)
    if(adversaire.sante===0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience")
        this.xp +=adversaire.valeur;
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


