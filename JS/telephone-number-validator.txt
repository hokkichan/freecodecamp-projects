function telephoneCheck(str) {
  var regexContain = /[0-9\(\)\-]/g;
  var regexBracket = /[-0-9\s]*\([-0-9\s]*\)[-0-9\s]*/g;
  var regexNoBracket = /(?!\()(?!\))|(?!\))(?!\()/;
  var regexSingleBracket = /[-0-9\s]*\([-0-9\s]*(?!\))|[-0-9\s]*\)[-0-9\s]*(?!\()/;
  var regexShort = /[0-9]/g;
  var regexTel = /^1\d{10}$|^\d{10}$/;
  var regexTelHead = /^1|^\d|^\(/;
  var regexTelTail = /\d$/;
  var regexQuestion = /[\\?]/;
  var newStr = str.match(regexShort).join("")
  if ((regexQuestion.test(str)) === false &&
     (regexTel.test(newStr)) === true && 
     (regexTelHead.test(str)) === true && 
     (regexTelTail.test(str)) === true && 
     (regexContain.test(str)) === true && 
     ((regexBracket.test(str)) === true || (regexBracket.test(str)) === false && (regexNoBracket.test(str)) === true && (regexSingleBracket.test(str)) === false)) {
  return true;
  } else {
  return false;
  }
  
//console.log(regexSingleBracket.test(str))  
}

telephoneCheck("(555)5(55?)-5555")
