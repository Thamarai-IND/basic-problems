// method 1: Using Loops

function isPalindrome1(n) {

    if(n<0 || n%10 == 0 || n==0) return false;

    let sum = 0; 
    let temp = n;
    while(temp!=0) {
        let lastDigit = temp%10;
        sum = sum * 10 + lastDigit;
        temp = Math.floor(temp/10);
    }
    return sum==n;
}

const response1 = isPalindrome1(686);
response1 == true ? console.log("Give number which is Palindrome") : console.log("Give number which is not a Palindrome")

// method 2: Using Javascript built-in functions

function isPalindrome2(num) {
    const str = num.toString(); 
    const reversed = str.split('').reverse().join(''); 
    return str === reversed;
}

const response2 = isPalindrome2(687);
response2 == true ? console.log("Give number which is Palindrome") : console.log("Give number which is not a Palindrome")


// Strings

// method 1: Using Loops

function isPalindrome3(str) {

    let left = 0;
    let right = str.length - 1; // 4

    while(left < right) {
        if( str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;

    /**
    *       🧩 Step-by-step Explanation
    
            let left = 0;  
            Initializes a pointer at the start of the string.

            let right = str.length - 1;  
            Initializes a pointer at the end of the string.

            while (left < right)  
            Loop continues as long as the left pointer is before the right pointer.

            if (str[left] !== str[right]) return false;  
            Compares characters at both ends. If they differ, the string is not a palindrome.

            left++; right--;  
            Moves both pointers inward toward the center.

            return true;  
            If all character pairs match, the string is a palindrome.

            ✅ Example
            For input "level":

            Compare 'l' and 'l' → match

            Compare 'e' and 'e' → match

            Middle 'v' → no need to compare further

            Returns true

            For input "hello":

            Compare 'h' and 'o' → mismatch

            Returns false
     */
}

const response3 = isPalindrome3("madam");
response3 == true ? console.log("Give string which is Palindrome") : console.log("Give string which is not a Palindrome")

// method 2: Using Javascript Built-In functions

function isPalindrome4(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const response4 = isPalindrome4("madam");
response4 == true ? console.log("Give string which is Palindrome") : console.log("Give string which is not a Palindrome")

// some time if any special characters inside string, you can use replace method to ignore those special symbols, numbers etc

function isCleanPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

// Usage
console.log(isCleanPalindrome('A man, a plan, a canal: Panama!')); // true
console.log(isCleanPalindrome('No lemon, no melon'));              // true


/**
 * Output : 
 * 
 *  Give number which is Palindrome
    Give number which is not a Palindrome
    Give string which is Palindrome
    Give string which is Palindrome
    true
    true
 */