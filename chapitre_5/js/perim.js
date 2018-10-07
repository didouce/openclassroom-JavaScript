function perim (r) {
    return 2 * r * Math.PI
}

function aire (r) {
    return Math.pow(r, 2) * Math.PI
}

var r = Number(prompt("Entrez le rayon du cercle : "))
console.log("son perimetre vaut : " +perim(r))
console.log("son aire vaut : " +aire(r))
