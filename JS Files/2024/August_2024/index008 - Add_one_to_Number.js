// Solution 1 ----------------------->
module.exports = {
  //param A : array of integers
  //return an array of integers
  plusOne: function (A) {
    let carry = 1;

    for (let i = A.length - 1; i >= 0; i--) {
      let temp = A[i] + carry;
      carry = Math.floor(temp / 10);
      A[i] = temp % 10;

      if (carry === 0) {
        while (A.length > 1 && A[0] === 0) {
          A.shift();
        }
        return A;
      }
    }

    if (carry === 1) {
      A.unshift(1);
    }

    while (A.length > 1 && A[0] === 0) {
      A.shift();
    }

    return A;
  },
};

// Solution 2 ---------------------------->

function plusOne(A) {
  let i = A.length - 1;
  while (A[i] == 9 && i >= 0) A[i--] = 0;
  if (i === -1) return [1, ...A];
  A[i]++;
  i = 0;
  while (A[i] === 0) i++;
  return A.slice(i, A.length);
}

/**
 * Problem Description
 * 
Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

The digits are stored such that the most significant digit is at the head of the list.

NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: 
for this problem, following are some good questions to ask :

Q : Can the input have 0's before the most significant digit. Or in other words, is 0 1 2 3 a valid input?
A : For the purpose of this question, YES
Q : Can the output have 0's before the most significant digit? Or in other words, is 0 1 2 4 a valid output?
A : For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.


Problem Constraints
1 <= |A| <= 106
0 <= Ai <= 9


Input Format
First argument is an array of digits.



Output Format
Return the array of digits after adding one.



Example Input
Input 1:

[1, 2, 3]


Example Output
Output 1:

[1, 2, 4]


Example Explanation
Explanation 1:

Given vector is [1, 2, 3].
The returned vector should be [1, 2, 4] as 123 + 1 = 124.
 * 
 */
