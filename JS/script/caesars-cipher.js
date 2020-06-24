var arrAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrNew = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
function rot13(str) {
var separated = str.split("");
var new13 = [];
//console.log(separated);
//console.log(separated[1]);
//console.log(arrAlphabet[4]);
//console.log(arrNew[4]);
for (var i=0; i<separated.length; i++) {
  if (arrNew.indexOf(separated[i]) === -1) {
  new13.push(separated[i]);
  }
  for (var j=0; j<26; j++) {
  if (separated[i] === arrAlphabet[j]) {
      new13.push(arrNew[j]);
      } 
  }

                 }
return new13.join("");
}
rot13("SERR PBQR PNZC");
