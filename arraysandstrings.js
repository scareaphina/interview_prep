////////
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
console.log(isPermutation("these", "the"));
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
console.log(replaceSpaces("My cat is a weirdo."));

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

  if (Math.abs(first.length - second.length) > 1) {
    return false;
  }

  let edited = false;

  for (let i = 0, j = 0; i < first.length && j < second.length; ++i, ++j) {
    if (first[i] !== second[j]) {
      if (edited) {
        return false;
      }

      if (first.length > second.length) {
        --j;
      } else if (first.length < second.length) {
        --i;
      }
      edited = true;
    }
  }

  return true;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("paling", "pale"));

////////
// 1.6
// a method to perform string compression using the counts of repeated characters
// example: aabcccccaaa would become a2b1c5a3

function compressString(str) {
  var a = "";

  for (i = 0; i < str.length; ++i) {
    var char = str[i],
    start = i;

    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }

    a += (i - start + 1) + char;
  }

  return a.length < str.length ? a : str;

}

console.log(compressString("aabcccccaaa"));
console.log(compressString("banana"));

////////
// 1.7
// given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. can you do this in place?

export function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new error("invalid matrix");
  }
  if (matrix.length < 2) {
    return matrix;
  }

  let len = matrix.length - 1,
    half = Math.floor(matrix.length / 2);

  for (let start = 0; start < half; ++start) {

    for (let i = 0; i < len - (start * 2); ++i) {
      let y = start,
        x = start + i,
        prev = matrix[y][x];

      for (let j = 0; j < 4; ++j) {
        let nextY = x,
          nextX = len - y,
          next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }
  }

  return matrix;
}

////////
// 1.8
// write an algorithm such that if an element in an MxN matrix is 0, its entire row and columns are set to 0

export function zeroMatrix(matrix) {
  if (!matrix) {
    throw new Error("invalid matrix");
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length),
  cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
}
