
//findSecondSmallestBiggest

function Numbers(num){
    
    var SecondBiggiest = num.sort(function(a, b) 
    { 
        return b - a; })[1];
    var Secondsmallest = num.sort(function(a, b) 
    { 
        return a - b; })[1];
        return [SecondBiggiest,Secondsmallest];
} 

var arr = [18, 19020, 19050, 312, 25, 38];
console.log(Numbers(arr));
