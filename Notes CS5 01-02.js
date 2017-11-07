function reverseString(str) {  // Done by the teacher!
  return str.split('').reverse().join('');
}

function reverseString(str) { // Done by myself
  // code here
  let reversedString = '';
  for (let i = str.length-1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

reverseString('hello world');
reverseString('asdf');
reverseString('CS rocks!');