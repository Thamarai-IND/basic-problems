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

// Method 2 :  Efficient Way

// JavaScript program to print all primes smaller than or equal to
// n using Sieve of Eratosthenes

function SieveOfEratosthenes(n) {
    let prime = [];
    for (let i = 0; i <= n; i++) {
        prime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
        if (prime[p] === true) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    let result = [];
    for (let p = 2; p <= n; p++) {
        if (prime[p]) {
            result.push(p);
        }
    }

    return result;
}

// Driver code
let n = 25;
console.log("Following are the prime numbers smaller than or equal to " + n + ": ");
console.log(SieveOfEratosthenes(n));