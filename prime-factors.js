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

// const response1 = PrimeFactor(34);

// Method 2 : Efficient way

function PrimeFactor2(n) {
    if(n<1) return;
    for(let i=2; i*i<=n; i++) {
        while(n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }
    if (n > 1) console.log(n);
} // Time Complexity - O(n^1/2 log n)

PrimeFactor2(450)

// Method 3 :  More Efficient Way

function PrimeFactor3(n) {
    if(n<1) return;
    while(n%2 === 0) {
        console.log(2);
        n=n/2
    }
    while(n%3 === 0) {
        console.log(3);
        n=n/3
    }
    for(let i=5; i*i<=n; i=i+6) {
        while(n % i === 0) {
            console.log(i);
            n = n / i;
        }
        while(n % (i+2) === 0) {
            console.log(i+2);
            n = n / (i+2);
        }
    }
    if (n > 3) console.log(n);
} // Time Complexity - O(n^1/2 log n)

PrimeFactor3(450)