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
