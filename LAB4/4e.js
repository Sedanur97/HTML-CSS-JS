function Find_longest(str) {

    let splt = str.split(" ");
    let max = 0;
    let word = "";
    for ( let i = 0; i < splt.length; i++) {
        if (splt[max].length < splt[i].length) {
            max = i;
            word = splt[i];
        }
    }
    return word;
}
let str = "Hello there, My name is Sedanur Sevilmisdal";
console.log(Find_longest (str) + " is lonsgest world ");
