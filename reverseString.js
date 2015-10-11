// write a recursive function that reverses a string

var recursiveReverse = function(string) {
  
  var newString = arguments.length === 1 ? '' : arguments[1];
  var index = arguments.length === 1 ? string.length - 1 :  arguments[2];

  newString += string[index];
  if (newString.length === string.length) {
    return newString;
  } else {
    return recursiveReverse(string, newString, index - 1);
  }
};

// console.log(recursiveReverse('abcd'));

