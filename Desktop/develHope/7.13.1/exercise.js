function SayHelloName(callback) {
    setTimeout(function() {
        console.log('Hello');
        callback();
    }, 1000);
} 
function printName () {
    console.log("Maria")
}

SayHelloName(printName);
