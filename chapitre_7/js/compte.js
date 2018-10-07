var Compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function(montant) {
        this.solde = this.solde + montant
    }, 
    debiter: function(montant) {
        this.solde = this.solde - montant
    }, 
    decrire: function() {
        var description = "Titulaire : " + this.titulaire + ", solde " + this.solde + " euros "
        return description
    }
}


console.log(Compte.decrire())
var credit = Number(prompt("Entrez un montant à crediter : "))
Compte.crediter(credit)
var debit = Number(prompt("Entrez un montant à debiter : "))
Compte.debiter(debit)
console.log(Compte.decrire())
