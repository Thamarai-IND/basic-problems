let x = 3;  // 000...0011
let y = 6;  // 000...0110
console.log(x & y); // Output: 2 (000...0010)
console.log(x | y); // Output: 7 (000...0111) // Bitwise AND
console.log(x ^ y); // Output: 5 (000...0101) // Bitwise XOR
console.log(~x);    // Output: -4 (111...1100) // Bitwise NOT
console.log(x << 1); // Output: 6 (000...0110) // Left Shift
console.log(y >> 1); // Output: 3 (000...0011) // Right Shift

// Explanation of Bitwise Operators
// 1. AND (&): Compares each bit of two numbers and returns a new number where each bit is set to 1 only if both bits are 1.
// 2. OR (|): Compares each bit of two numbers and returns a new number where each bit is set to 1 if at least one of the bits is 1.
// 3. XOR (^): Compares each bit of two numbers and returns a new number where each bit is set to 1 if the bits are different.
// 4. NOT (~): Inverts all the bits of a number, turning 0s into 1s and 1s into 0s.
// 5. Left Shift (<<): Shifts all bits in a number to the left by a specified number of positions, filling in with 0s on the right.
// 6. Right Shift (>>): Shifts all bits in a number to the right by a specified number of positions. For positive numbers, it fills in with 0s on the left.
// Note: Bitwise operations are performed on 32-bit signed integers in JavaScript.
// Example Usage
let a = 5;  // 000...0101
let b = 3;  // 000...0011
let result = a & b; // result is 1 (000...0001)
console.log("Bitwise AND of 5 and 3 is: ", result);
// Time complexity - O(1) and Space complexity - O(1)

// Additional Example: Checking if a number is odd or even using bitwise AND
function isEven(num) {
    return (num & 1) === 0;
}   // Time complexity - O(1) and Space complexity - O(1)

const number = 4;
console.log(`Is ${number} even? `, isEven(number));
// Additional Example: Swapping two numbers using XOR
function swapUsingXOR(a, b) {
    a = a ^ b; 
    b = a ^ b; 
    a = a ^ b; 
    return [a, b];
}   // Time complexity - O(1) and Space complexity - O(1)
let num1 = 10, num2 = 15;
[num1, num2] = swapUsingXOR(num1, num2);
console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
// Output: After swapping: num1 = 15, num2 = 10


// Additional Example: Counting the number of set bits (1s) in a number
function countSetBits(num) {
    let count = 0;
    while (num) {
        count += num & 1;
        num = num >> 1;
    }
    return count;
}   // Time complexity - O(log n) and Space complexity - O(1)
const testNum = 29; // Binary: 11101
console.log(`Number of set bits in ${testNum} is: `, countSetBits(testNum));
// Output: Number of set bits in 29 is: 4




























// Additional Example: Finding the unique element in an array where every other element appears twice
function findUnique(arr) {
    let unique = 0;
    for (let num of arr) {
        unique ^= num;
    }
    return unique;
}   // Time complexity - O(n) and Space complexity - O(1)
const array = [2, 3, 5, 4, 5, 3, 2];
console.log(`The unique element in the array is: `, findUnique(array));
// Output: The unique element in the array is: 4


// Additional Example: Checking if a number is a power of two using bitwise AND
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}   // Time complexity - O(1) and Space complexity - O(1)
const powerTestNum = 16;
console.log(`Is ${powerTestNum} a power of two? `, isPowerOfTwo(powerTestNum));
// Output: Is 16 a power of two?  true



// Additional Example: Finding the two numbers that appear only once in an array where every other element appears twice
function findTwoUnique(arr) {
    let xorAll = 0;
    for (let num of arr) {
        xorAll ^= num;
    }
    let rightmostSetBit = xorAll & -xorAll;
    let num1 = 0, num2 = 0;
    for (let num of arr) {
        if (num & rightmostSetBit) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    return [num1, num2];
}   // Time complexity - O(n) and Space complexity - O(1)
const arrayWithTwoUniques = [2, 3, 5, 4, 5, 3, 2, 7];
console.log(`The two unique elements in the array are: `, findTwoUnique(arrayWithTwoUniques));
// Output: The two unique elements in the array are:  [4, 7]




// Additional Example: Finding the maximum and minimum in an array using bitwise operators
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = (arr[i] > max) ? arr[i] : max;
        min = (arr[i] < min) ? arr[i] : min;
    }
    return { max, min };
}   // Time complexity - O(n) and Space complexity - O(1)
const sampleArray = [3, 5, 1, 8, 2];
const { max, min } = findMaxMin(sampleArray);
console.log(`In the array, Max is: ${max}, Min is: ${min}`);
// Output: In the array, Max is: 8, Min is: 1



// Additional Example: Checking if a number is prime using bitwise operators
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if ((num & 1) === 0 || (num % 3) === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}   // Time complexity - O(√n) and Space complexity - O(1)
const primeTestNum = 29;
console.log(`Is ${primeTestNum} a prime number? `, isPrime(primeTestNum));
// Output: Is 29 a prime number?  true



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
// More Examples of Set bits Counting

