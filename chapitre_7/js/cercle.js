var cercle = {
    perimetre: function(r) {
        return 2 * Math.PI *r
    },
    aire: function(r) {
        return Math.PI * r * r
    }

}
var r = Number(prompt('Entrez un rayon : '))
console.log("Son périmetre vaut " + cercle.perimetre(r))
console.log("Son aire vaut " + cercle.aire(r))
