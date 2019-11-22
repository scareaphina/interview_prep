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

////////
// 1.3
// a method to replace all spaces in a string with '%20'

function replaceSpaces(sent) {
  var arr = sent.split(" ");

  var newString = arr.join("%20");

  return newString;
}

console.log(replaceSpaces("I am doing the thing!"));

////////
// 1.4
// write a function to check if a string is a permutation of a palindrome

function isPalindrome(string) {
  var removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  var palindrome = removeChar.split("").reverse().join("");

  return (removeChar === palindrome);
}

console.log(isPalindrome("never odd or even"));
console.log(isPalindrome("elephant"));

////////
// 1.5
// given two strings, write a function to check if they are one edit or zero edits away from one another

function oneAway(first, second) {
  let a = first.length;
  let b = second.length;

  if ((a - b) > 1)
  return false;

  
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
