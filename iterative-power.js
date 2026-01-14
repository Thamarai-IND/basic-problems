// Traditional Method

function myPow1(x,n) {
    let sum = 1;

    while(n>0) {
        if(n%2 !== 0)
            sum = sum * x;
        x = x * x;
        n = Math.floor(n/2);
    }
    return sum;
} // Time Complexity - O(n)

const response1 = myPow1(3,5);
console.log(response1);