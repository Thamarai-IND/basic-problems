// Naive Method

function countZerosFact1(n) {

    let fact = 1;

    // compute factorial
    for(let i=2; i<=n; i++) {
        fact = fact * i
    }
    
    // after loop iteration fact of 11 is 39916800 - so here we need to remove the trailing zeros
    let trailCount = 0;

    // counting the trailing zeros of computed factorial to avoid the huge memory storage issue for big integers
    while(fact % 10 == 0) {
        trailCount++;
        fact = fact/10;
    }
  
    return {fact,trailCount}; // fact : 399168 & trailZeroCount : 2

    /**
     *  why we are eliminating the trail zeros because of storing huge integer value which leads to memory issue
     */
}
let num1 = 11;
let response1 = countZerosFact1(num1);

console.log("Factorial of "+num1+" is "+response1.fact+" and trail zero count is "+ response1.trailCount);

/**
 *  Output : Factorial of 11 is 399168 and trail zero count is 2
 */





// efficient method for counting the trailing zeros

function countZerosFact2(n) {

    let fact = 0;

    for(let i=5; i<=n; i=i*5) {
        fact = fact + Math.floor(n/i);
    }
    return fact
}

let num2 = 50;
let response2 = countZerosFact2(num2);
console.log("Factorial of "+num2+" trail zero count is "+ response2);

/**
 *  Output
 *  Factorial of 11 is 399168 and trail zero count is 2
 *  Factorial of 50 trail zero count is 12
 */


/**
 *      
            n	n!
            0	1
            1	1
            2	2
            3	6
            4	24
    5 =>    5	120
            6	720
            7	5,040
            8	40,320
            9	362,880
            10	3,628,800
            11	39,916,800
            12	479,001,600
            13	6,227,020,800
            14	87,178,291,200
            15	1,307,674,368,000
            16	20,922,789,888,000
            17	355,687,428,096,000
            18	6,402,373,705,728,000
            19	121,645,100,408,832,000
            20	2,432,902,008,176,640,000
 */

