// Method 1 : Naive Way

function PrimeFactor(n) {
    for(let i=2; i<=n; i++) {
        if(isPrime(i)) {
            let x = i;
            while(n % x === 0) {
                console.log(i);
                x = x * i;
            }
        }
    }
} // Time Complexity - O(n^3/2 log n)

function isPrime(num) {
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

const response1 = PrimeFactor(34);
