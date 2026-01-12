// Method 1 : Naive way

function PrintPrimes1(num) {
    for(let i=2; i<=num; i++) {
        if(isPrime3(i)) {
            console.log(i)
        }
    }
}

PrintPrimes1(25);

function isPrime3(num) {
    if(num === 1) return false;
    if(num === 2 || num === 3) return true;
    if((num % 2) === 0 || (num % 3) === 0) return false;

    for(let i=5; i*i<=num; i=i+6) {
        if(num%i === 0 || num % (i+2) === 0) {
            return false;
        }
    }
    return true
}