function typeOF(object) {
    return typeof (object);
}


var numbers = [1,2,3,4,5];
console.log(numbers);

var person = {
    name: "Seda Nur", 
    age: 22
}

console.log(type(null));

var date = new Date();
console.log(date);
console.log(typeof date);

var hello = function (){
    console.log("Hello");
}
console.log(hello);
console.log(typeof hello);
console.log(type("seda"));

console.log(person);
console.log(typeof person);

console.log(typeof numbers);
console.log(type(3.14));
console.log(type(8));
