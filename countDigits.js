function countDigit(n) {
  if (n === 0) return 1; // Special case for 0
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 10); // Remove the last digit
    count++; // Increment the digit count
  }
  return count;
}

const n = 345289467;
console.log(`Number of digits: \${countDigit(n)}`);

/**
 * 
 * To find the number of digits, we follow these steps:

    Using Iterative Method
    Let’s break down the iterative approach to count the number of digits in a given number N

    Algorithm:

    Handle Special Case:
    If N=0, return 1 (since 0 has 1 digit).
    Initialize Counter:
    Set count=0.
    Loop Until N Becomes 0:
    Divide N by 10 (using integer division) to remove the last digit.
    Increment the counter countcount by 1.
    Return the Counter:
    The value of countcount is the number of digits in N.

    n = 34528946, count = 1
    n = 3452894, count = 2
    n = 345289, count = 3
    n = 34528, count = 4
    n = 3452, count = 5
    n = 345, count = 6
    n = 34, count = 7
    n = 3, count = 8
    n = 0, count = 9
    Output : Number of digits : 9

    Time Complexity:
    The loop runs for the number of digits in N.
    If N has d digits, the loop runs d times.
    Time Complexity: O(log₁₀(n)) or θ(number of digits).
    
    Space Complexity:
    The algorithm uses a constant amount of extra space.
    Auxiliary Space: O(1).

    Conclusion:
    The iterative method for counting digits in a number is a simple and efficient approach. 
    By repeatedly dividing the number by 10 and incrementing a counter, we can determine the number of digits. 
    The time complexity is O(log₁₀(n)), and the space complexity is O(1), making it an optimal solution for this problem. 
    This method is easy to implement and works well for both small and large numbers.

 */