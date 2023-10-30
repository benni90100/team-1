let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (const value in user) {
  newUser [value] = user [value];
}

newUser['name'] = "Paolo";

console.log(newUser);
console.log(user);


