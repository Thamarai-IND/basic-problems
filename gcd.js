// Function to compute GCD using Euclidean Algorithm
/**
 * 
 * Since GCD or HCF has to divide both a and b, the maximum possible value is going to be min of a and b for divisor.
 * example a = 4 and b = 6, so maximum divisor is 4 only, and GCD for this two numbers is 2.
 */


// naive method

function gcd1(a,b) {
    let temp = Math.min(a,b);
    while(temp > 0) {
        console.log("temp : ",temp)
        if( a % temp == 0 && b % temp == 0){
            return temp;
        }
        temp--;
    }

    return temp;
}

const response1 = gcd1(4,6);
console.log("GCD value is ",response1);

// method 2
function gcd(a, b) {
  // while (b !== 0) {
  //   let temp = b;
  //   b = a % b;  // remainder
  //   a = temp;
  // }
  // or
  while (b !== 0) {
    a = a % b;
    [a,b] = [b,a%b];
  }
  return a;
}

console.log(gcd(12, 18)); // Output: 6
console.log(gcd(20, 28)); // Output: 4


// method 3: Using Recursion

function gcd3(a,b) {
  if(b===0) return a;
  return gcd3(b,a%b); // Time Complexity O(log min(a,b))
}

const response3 = gcd3(40,60);
console.log("Given number GCD using recursion method is ",response3)