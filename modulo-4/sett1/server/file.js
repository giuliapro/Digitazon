let arr = [
    {
        nome: 'Mario',
        cognome: 'Rossi'
    },
    {
        nome: 'Gianni',
        cognome: 'Bianchi'
    }
]

let obj = {
    'Mario' : {
        nome: 'Mario',
        cognome: 'Rossi' 
    },
    'Gianni' : {
        nome: 'Gianni',
        cognome: 'Bianchi'
    }
}

function searchName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (name === arr[i].nome) { // 'nome' è il nome della chiave
            return true
        }
    }
    return false
}

function searchName2(obj, name) {
    return !! obj[name]
}

// il secondo metodo è più veloce,
// PERO' è adeguato se devo cercare tutta la chiave, se so esattamente il nome di essa
// se invece ne conosco solo una parte, è meglio il primo
// QUINDI: se vogliamo cercare solo un pezzo di nome o di numero, meglio il primo con il ciclo