Persona=[ 
Chiara = {
    name: "paluzzi",
    surname: "chiara",
    age: 23,
    city: "civita castellana",
    hobby: "ballare",
    favoriteFood: "fettuccine",
    favoriteVideoGame: "CoD",
    favoriteFilm: "darty dancing",
    favoriteBook: "tre volte te",
    petName: "chloe",
},
]

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



    Enrico = {
        name: "Enrico",
        surname: "Caliandro",
        age: 28,
        city: "Grottaglie",
        hobby: "Drawing",
        favoriteFood: "Pasta",
        favoriteVideoGame: "Crash Bandicoot",
        favoriteFilm: "Into the Spiderverse",
        favoriteBook: "Il manuale del guerriero della luce",
        petName: "Miele",
    }
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




function sort_name(a,b){
    if(a.name<b.name){ 
        return -1;
    }else if(a.name>b.name){
        return 1;
    }else return 0;

}
console.log("ORDER NAME \n");
let order_name = Persona.sort(sort_name)
for(let i=0; i < Persona.length; i++){
    console.log(order_name[i].name)
}

console.log("\n");

function sort_surname(a,b){
    if(a.surname<b.surname){
        return -1;
    }else if(a.surname>b.surname){
        return 1;
    }else return 0;
}

console.log("ORDER SURNAME \n");
let order_surname = Persona.sort(sort_surname)
for(let i=0; i < Persona.length; i++){
    console.log(order_surname[i].surname)
}

console.log("\n");

function sort_age(a,b) {
    return a.age - b.age;
}

console.log("ORDER AGE \n");
let order_age = Persona.sort(sort_age);
for(let i=0; i < Persona.length; i++){
    console.log(Persona[i].name + ": " +  order_age[i].age)
}

console.log("\n");

function middle_age_team(){
    let sum=0;

    for (let i=0; i < Persona.length; i++){
        sum += Persona[i].age;
    }
    let middle_age = sum/Persona.length;
    console.log(middle_age + "\n");
}

console.log("MIDDLE AGE TEAM \n");
middle_age_team();


function owner_pet_name() {

    let owner_pet = "";
    for(let i=0; i < Persona.length;i++){
        if(Persona[i].petName.length > 0){
            owner_pet += Persona[i].name + " petName: " + Persona[i].petName + ", \n";
        }
    }
    console.log(owner_pet)
}
console.log("OWNER PET: \n");
owner_pet_name();


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

