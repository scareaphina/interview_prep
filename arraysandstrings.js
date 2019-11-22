// 1.1
// an algorithm to determine if a string has all unique characters

function findDoubles(sent) {
  var i, ch;

  var len = sent.length;
  if (len > 127) {
    return false;
  }

  for (i = 0; i < len; i++) {
    ch = sent[i];
    if (sent.indexOf(ch, i + 1) > -1) {
      return false;
    }
  }

  return true;

}

console.log(findDoubles("apple"));
console.log(findDoubles("pickle"));

////////
// 1.2
// a method to decide if one string is a permutation of another

function isPermutation(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.split("").sort().join() === b.split("").sort().join();
}

console.log(isPermutation("apple", "pickle"));
console.log(isPermutation("the", "these"));
console.log(isPermutation("ten", "net"));
