// Traditional Method

function myPow1(x,n) {
    let sum = 1;
    for(let i=0; i<n; i++) {
        sum = sum * x;
    }
    return sum;
} // Time Complexity - O(n)

const response1 = myPow1(2,3);
console.log(response1);



// Efficient Method - Time Complexity - O(logn) and SC - O(logn)

function myPow2(x,n) {
    if(n==0) return 1;

    let temp = 0;
    temp = myPow2(x, Math.floor(n/2));
    temp = temp * temp;

    if(n%2 === 0) {
        return temp;
    }
    else return temp * x;
} // Time Complexity - O(logn)

const response2 = myPow2(2,3);
console.log(response2);