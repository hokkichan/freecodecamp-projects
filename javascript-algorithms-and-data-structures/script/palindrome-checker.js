function palindrome(str) {
  var regex = /[a-zA-Z0-9]/gi;
  var broken = str.match(regex);
  var brokenReverse = str.match(regex).reverse();
  var combined = broken.join("").toLowerCase();
  var combinedReverse = brokenReverse.join("").toLowerCase();
  if (combined === combinedReverse) {
    return true;
  } else {
  return false;
  }
}
palindrome("A man, a plan, a canal. Panama");
