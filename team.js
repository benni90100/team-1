let Persona = [alessandro = {
    name: "Alessandro",
    surname: "Castelli",
    age: 28,
    city: "Palermo",
    hobby: "Motociclismo",
    favFood: "Riso",
    favVideogame: "Fallout 3",
    favFilm: "The Wolf Of Wall Street",
    favBook: "L'Ombra del Sole",
    petName: "Briciola",
}
    ,
Benny = {
    name: "Benni",
    surname: "Miceli",
    age: 33,
    city: "Palermo",
    hobby: "musica",
    favoriteFood: "lasagne",
    favoriteVideoGame: "CoD",
    favoriteFilm: "inception",
    favoriteBook: "tropicoo del cancro",
    petName: "Jump",
},


annagiusi = {
    name: "Annagiusi",
    surname: "Volpe",
    age: 27,
    city: "Salerno",
    hobby: "gym",
    favFood: "sushi",
    favVideogame: "Skryrim",
    favFilm: "Shutter Island",
    favBook: "Neuromarketing",
    petName: "Bug",
},
ChiaRa = {
    name: "Chiara",
    surname: "Rapisardi",
    age: 27,
    city: "Palermo",
    hobby: "Natura",
    favoriteFood: "Mandorle",
    favoriteVideoGame: "Soulblade(ps1)",
    favoriteFilm: "Interstate 60",
    favoriteBook: "L'alchimista",
    petName: "Ernestina",
},


]

function whoHasAPet() {
    let whoHasAPet = [];

    for (let i = 0; i < Persona.length; i++) {

        if (Persona[i].petName !== "") {
            whoHasAPet.push(Persona[i].name);
        }
    }
    return whoHasAPet

}
let peapleWithPet = whoHasAPet();
console.log(peapleWithPet);


function nomiUguali() {
    let nomi = {};
    let doppi = [];
    for (let i = 0; i < Persona.length; i++) {
        let nome = Persona[i].name;
        if (nomi[nome]) {
            doppi.push(nome)

        }

    }
    return doppi

}


let doppioni = nomiUguali();

if (doppioni.length > 0) {
    console.log(`ci sono membri con lo stesso nome = ${doppioni}`);

} else {
    console.log(`non ci sono membri con lo stesso nome`);
}

function favGame() {
    let giocaALol = [];
    for (let i = 0; i < Persona.length; i++) {
        if (Persona[i].favoriteVideoGame == "LoL" || Persona[i].favoriteVideoGame == "League Of Leggend") {
            giocaALol.push(Persona[i].name);

        }


    }
    return giocaALol
}
let lolGamer = favGame()
if (lolGamer.length > 0) {
    console.log(`i giocatori di LoL sono: ${lolGamer}`);

} else {
    console.log(`non ci sono giocatori di LoL`);

}