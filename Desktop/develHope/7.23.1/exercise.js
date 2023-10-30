function smartphone(brand, name, price) {
    this.brand= brand;
    this.name = name;
    this.price = price;
}

let Motorola = new smartphone ("MTRL", 'j5', 200); 
console.log(Motorola)

let Samsung = new smartphone ("SMG", "lolo", 450);
console.log(Samsung)