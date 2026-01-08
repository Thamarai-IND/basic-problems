// method 1 - Naive way

function lcm1(a,b) {
    let max = Math.max(a,b);
    while(true) {
        if(max % a == 0 && max % b == 0) {
            return max;
        }
        max++;
    }
}   // time complexity - O(A*B - Max(A,B));
const response1 = lcm1(17,56);
console.log("Naive way : LCM of two number is ",response1)


// Method 2 - Efficient way

function lcm2(a,b) {
    return (a * b / gcd(a,b)) // time complexity is - O(log min(a,b))
}
function gcd(a,b) {
  if(b===0) return a;
  return gcd(b,a%b); // Time Complexity O(log min(a,b))
}
const response2 = lcm2(17,56);
console.log("Efficient way : LCM of two number is ",response2)