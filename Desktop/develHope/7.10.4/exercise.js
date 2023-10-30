let primitive = 'cest la vie';
//console.log(typeof(primitive))
//if (typeof primitive === "string") { 
  //  console.log("is a stringa");
//} else if (typeof primitive === "number") {
   // console.log("a number");
//} else console.log("buliano")

//costrutto swicth

switch (typeof primitive) {
    case "string":
        console.log("is a string");
        break;
    case 'number' :
         console.log('a number');
        break;
    case 'boolean' : console.log ('is a boolean')
        break;
}