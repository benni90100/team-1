

function scelta(array) {
    return array.sort(() => Math.random() - 0.5);
}

let sceltaTask = ["benni", "annagiusi", "chiaraP", "chiaraG", "alex", "enrico"];
let sceltaCasuale = scelta(sceltaTask);

console.log(sceltaCasuale);