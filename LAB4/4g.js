function typeOF(object) {
    return typeof (object);
}


var numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);

var person = {
    name: "Seda Nur", 
    age: 22
}
console.log(person);
console.log(typeof person);

var hello = function (){
    console.log("Hello");
}

console.log(hello);
console.log(typeof hello);
console.log(typeOF("seda"));

console.log(typeOF(3.1));
console.log(typeOF(8));
console.log(typeOF(null));


var date = new Date();
console.log(date);
console.log(typeof date);


