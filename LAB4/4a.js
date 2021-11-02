//example 5! = 5.4.3.2.1
//iteration 

function fac (x){
    var fac =1;
    for(var i=1; i<x; i++){
        fac*=i;
    }
    return fac;
    
  
}
// recursive
let recursive = function (x) {

    if (x === 0) {
        return 1;
    }
    return x * recursive(x - 1);
};
console.log(fac(3));
console.log(recursive(6));
