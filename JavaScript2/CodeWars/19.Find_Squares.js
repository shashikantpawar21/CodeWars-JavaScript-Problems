/*
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
3
*/

function findSquare(n) {
  for (let i = 1; i <= n; i++) {
    let diff = Math.pow(i + 1, 2) - Math.pow(i, 2);
    if (diff === n) {
      console.log(Math.pow(i + 1, 2) + "-" + Math.pow(i, 2));
      return;
    }
  }
}

const findSquares = (num) => {
  let max = Math.ceil(num / 2);
  let min = num - max;
  return `${max * max}-${min * min}`;
};

findSquare(9);
findSquare(7);
findSquare(3);
