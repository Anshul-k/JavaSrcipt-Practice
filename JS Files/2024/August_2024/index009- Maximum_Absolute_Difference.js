module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let Bmax = -Infinity,
      Bmin = Infinity,
      Cmax = -Infinity,
      Cmin = Infinity;

    for (i = 0; i <= A.length; i++) {
      if (A[i] + i > Bmax) {
        Bmax = A[i] + i;
      }
      if (A[i] + i < Bmin) {
        Bmin = A[i] + i;
      }
      if (A[i] - i > Cmax) {
        Cmax = A[i] - i;
      }
      if (A[i] - i < Cmin) {
        Cmin = A[i] - i;
      }
    }

    return Bmax - Bmin > Cmax - Cmin ? Bmax - Bmin : Cmax - Cmin;
  },
};

/***
 * 
 * You are given an array of N integers, A1, A2 ,..., AN. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N. f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.


Problem Constraints
1 <= |A| <= 105
-109 <= Ai <= 109


Input Format
The first argument is an integer array A.


Output Format
Return an integer equal to the maximum value of f(i, j)


Example Input
A = [1, 3, -1]


Example Output
5


Example Explanation
Given A = [1, 3, -1], 
f(1, 1) = f(2, 2) = f(3, 3) = 0
f(1, 2) = f(2, 1) = |1 - 3| + |1 - 2| = 3
f(1, 3) = f(3, 1) = |1 - (-1)| + |1 - 3| = 4
f(2, 3) = f(3, 2) = |3 - (-1)| + |2 - 3| = 5
The maximum value is 5, which is of f(2, 3)
 * 
 * 
 */
