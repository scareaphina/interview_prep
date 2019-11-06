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
