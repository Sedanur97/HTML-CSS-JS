function alphaSort(str) {
    let arr = str.split("");
    
    return arr.sort().join("");
}

console.log(alphaSort("sevilmisdalsedanur"));
