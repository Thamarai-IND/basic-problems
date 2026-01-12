// Method 1 : Naive Way

function allDivisors1(num) {
    if (num < 3) return;

    for(let i=1; i<=num; i++) {
        if(num % i === 0) {
            console.log(num+" divisible by ",i)
        }
    }
   // Time Complexity : O(n)  - Auxiliary Space : O(1)
}

allDivisors1(100)


// Method 2: Efficient Way

function allDivisors2(num) {
    if (num < 3) return;
    let result = [];
    for(let i=1; i*i<=num; i++) {
        if(num % i === 0) {
            console.log(num+" divisible by ",i);
            result.push(i);

            if( i !== num/i) {
                console.log(num+" divisible by ",num/i);
                result.push(num/i);
            } 
        }
    }
} // Time Complexity: O(sqrt(n))  - Auxiliary Space : O(1)

allDivisors2(450);

// Method 2: Efficient Way with sorting 

function printDivisors(n) {
  let i = 1;
  for (i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }

  for (; i >= 1; i--) {
    if (n % i == 0) {
      console.log(n / i);
    }
  } 
}  // Time Complexity: O(sqrt(n))  - Auxiliary Space : O(1)

const n = 450;

printDivisors(n);
