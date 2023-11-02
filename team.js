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

