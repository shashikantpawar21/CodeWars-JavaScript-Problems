/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

function moveZeros(list) {
  let zeroCount = 0;
  filteredList = list.filter((l) => {
    let isZero = l === 0;
    if (isZero) zeroCount++;
    return !isZero;
  });
  let arr = filteredList.concat(Array(zeroCount).fill(0));
  console.log(arr);
}

function moveZeros1(arr) {
  let result = arr.filter((c) => c !== 0);
  let count = arr.length - result.length;
  console.log(result.concat(Array(count).fill(0)));
  return result.concat(Array(count).fill(0));
}

moveZeros1([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
moveZeros1([]);
