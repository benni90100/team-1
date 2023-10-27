function persona (name, surname, age, city, hobby, favFood, favVideogame, favFilm, favBook, petName){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.city=city;
    this.hobby=hobby;
    this.favFood=favFood;
    this.favVideogame=favVideogame;
    this.favFilm=favFilm;
    this.favFood=favBook;
    this.petName=petName;
}

let Benny = new persona("benni", "Miceli", 33, "Palermo", "musica", "lasagne", "Rome of war", "Inception",
 "Tropico del capricorno", "jump");
 console.log(Benny);