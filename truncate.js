


document.write("kljgadFKJHsdfkhjadsghjk")
var truncateWords = function(longText, numWords) {
  var shortTextArray = originalText.split(' ').splice(0, wordLimit)
  console.log('Check_shortTextArray ' + shortTextArray);
  shortTextArray.push('...');
  console.log('Check_shortTextArray2 ' + shortTextArray);

  var shortText = shortTextArray.join(' ');
  console.log("Check short str1 " + shortText);
  console.log('FFFFFFF' + shortText);
  return shortText;
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
console.log('originalText: ' + originalText);
document.write('originalText: ' + originalText);
//console.log('shortText: ' + shortText);
//document.write('shortText: ' + shortText);
