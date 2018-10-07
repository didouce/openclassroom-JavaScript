// var nombre = Number(prompt("Introduisez un nombre : "))
// for(i =1; i<=10; i++) {
//     console.log(nombre +"*" + i+ "=" +nombre*i)
// }


var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
    for(var i =1; i<=10; i++) {
        console.log(nombre +"*" + i+ "=" +nombre*i)
    }
}
console.log("Non")




