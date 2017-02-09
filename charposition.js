function charPosition (str) {
  var myObj = {};
  str = str.replace(/\s/g,'');
  for (var i = 0; i < str.length; i++) {
    if (!myObj[str[i]]) {
      myObj[str[i]] = i;
    }
    else {
      myObj[str[i]] += ',' + i;
    }
  }
  return myObj;
}

console.log(charPosition('lighthouse in the house'));