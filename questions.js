// finding a missing number in an integer array

var numArray = [1, 2, 4, 5, 6, 7];
var mia = [];

for (var i = 1; i < numArray.length; i++) {
  if (numArray[i] - numArray[i - 1] != 1) {
    var x = numArray[i] - numArray[i - 1];
    var j = 1;
    while (j < x) {
      mia.push(numArray[i - 1 ] + j);
      j++;
    }
  }
}

console.log(mia);


// finding duplicates in an integer array

function findDuplicates(data) {

  let result = [];

  data.forEach(function(element, index) {

  // find if there is a duplicate or not
  if (data.indexOf(element, index + 1) > -1) {

    // find if the element is already in the result array or not
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  }
});

return result;
}

console.log(findDuplicates([]));
console.log(findDuplicates([1, 1, 1]));
console.log(findDuplicates([1, 2, 3, 1, 2, 1]));


// find the largest and smallest number in an unsorted integer array

var numbers = [2, 4, 9, 2, 0, 16, 24];

var largest = numbers[0];
var smallest = numbers [0];

for (var i = 1; i <numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

  console.log(largest);
  console.log(smallest);


// find all pairs of an integer array whose sum is equal to a given number

function twoSums(nums, targetNum) {
  var map = [];
  var indexNum = [];

  for (var x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      index = map[nums[x]];
      indexNum[0] = index + 1;
      indexNum[1] = x + 1;
      break;
    } else {
      map[targetNum - nums[x]] = x;
    }
  }
  return indexNum;
}

console.log(twoSums([10, 20, 10, 40, 50, 60, 70], 50));
