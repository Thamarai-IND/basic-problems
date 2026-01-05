// method 1 : Using Loops
/**
 * 
 *  Normal Factorial Formula N! = N * (N-1) - Recursion Method Formula
 */
function factorial1(n) { 

    let sum = 1;

    for(let i=2; i<=n; i++) {
        sum = sum * i
    }
    return sum;
}
let num1 = 6;
const response1 = factorial1(num1);
console.log("Factorial of "+num1+" is "+response1);

/**
 *  Time Complexity - O(N)
 *  Space Complexity - O(1)
 */ 


// method 2: Using recursion => Factorial Formula - N * factorial(N-1)

function factorial2(n) {

    if(n==0) return 1;
    return n * factorial2(n-1);
}
let num2 = 8;
const response2 = factorial1(num2);
console.log("Factorial of "+num2+" is "+response2);

/**
 *  Time Complexity - O(N)
 *  Space Complexity - O(N)
 */ 
