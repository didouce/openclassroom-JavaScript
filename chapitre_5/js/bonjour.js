function direBonjour (prenom, nom) {
    var message = "Bonjour " + prenom + " " + nom + "!"
    return message
}
var p = String(prompt("Entrez votre prenom : "))
var n = String(prompt("Entrez votre nom : "))
console.log(direBonjour(p, n))