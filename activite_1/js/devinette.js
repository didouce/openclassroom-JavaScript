console.log("Bienvenue de ce jeux de devinette !")

solution = Math.floor((Math.random() * 100) + 1);

console.log("La solution est " + solution)

var nombre = Number(prompt("Entrez un nombre : "))

var nombre = 0;
for(var i = 0; i<7; i++) {
    if(nombre==solution) {
        console.log("Bravo vous avez trouvé la solution était " + solution)
        console.log("Vous avez trouvé en " + i + " essai(s)")
    }
}


