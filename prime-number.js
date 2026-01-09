// method 1: naive way

function isPrime1(num) {
    if(num == 1) return false;

    for(let i=2; i<num; i++) {
        if(num%i == 0) {
            return false;
        }
        return true
    }
} // Time complexity - O(n) and Space complexity - O(1)

const response1 = isPrime1(37);
console.log("Naive way: Given Number is Prime ? ", response1);

// method 2 : efficient way

function isPrime2(num) {
    if(num === 1) return false;

    for(let i=2; i*i<=num; i++) {
        if(num%i == 0) {
            return false;
        }
        return true
    }
} // Time complexity - O(n) and Space complexity - O(1)

const response2 = isPrime2(37);
console.log("Efficient way : Given Number is Prime ? ", response2);


// method 3: more efficient way

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

const response3 = isPrime3(13);// === true ? "Give Number is Prime" : "Give number is not Prime";

console.log(response3)