function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function myFunction2(num2) {
  var num2 = document.getElementById("numberical").innerHTML;
  document.getElementById("demo").innerHTML = num2;
}

function convertToRoman(num) {
 var num = document.getElementById("numberical").innerHTML;
 var roman = [];
 var romanJoin;

 while (num>=1000) {
   roman.push("M");
   num-=1000;
 }
 while (num>=900) {
   roman.push("CM");
   num-=900;
 }
 while (num>=500) {
   roman.push("D");
   num-=500;
  while (num>=100 && num<400) {
   roman.push("C");
   num-=100;
 }
 }
 while (num>=400) {
   roman.push("CD");
   num-=400;
 }
 while (num>=100) {
   roman.push("C");
   num-=100;
 }
 while (num>=90) {
   roman.push("XC");
   num-=90;
 }
 while (num>=50) {
   roman.push("L");
   num-=50;
  while (num>=10 && num<40) {
   roman.push("X");
   num-=10;
 }
 }
 while (num>=40) {
   roman.push("XL");
   num-=40;
 }
 while (num>=10) {
   roman.push("X");
   num-=10;
 }
 while (num==9) {
   roman.push("IX");
   num-=9;
 }
  while (num>=5) {
   roman.push("V");
   num-=5;
   while (num>=1 && num<4) {
   roman.push("I");
   num-=1;
 }
 }
 while (num==4) {
   roman.push("IV");
   num-=4;
 }
 while (num>=1) {
   roman.push("I");
   num-=1;
 }
 romanJoin = roman.join("");
 document.getElementById("demo").innerHTML = romanJoin;
}

