function isPrimeORnot(n) {
   
        for (let x = 2; x < n; x++) {
            if (n % 2 === 0) {
                return false;
            }
        }
        return true;
    }

console.log(isPrimeORnot(13))
