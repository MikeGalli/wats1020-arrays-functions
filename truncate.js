


document.write("kljgadFKJHsdfkhjadsghjk")

var truncateWords = function(longText, numWords) {
  var shortTextArray = originalText.split(' ').splice(0, wordLimit)
  console.log('Check_shortTextArray ' + shortTextArray);
  document.write('Check_shortTextArray ' + shortTextArray);

  shortTextArray.push('...');
  console.log('Check_shortTextArray2 ' + shortTextArray);
  document.write('Check_shortTextArray2 ' + shortTextArray);

  shortText = shortTextArray.join(' ');
  console.log("Check short str1 " + shortText);
  document.write("Check short str1 " + shortText);

  shortText = shortText.slice(0,-4) + "...";
  console.log("Check short str2 " + shortText);
  document.write("Check short str2 " + shortText);
  return shortText;
}

var originalTextLength = originalText.split(' ').length;
console.log('Original Text Length is ' + originalTextLength);
document.write('Original Text Length is ' + originalTextLength);

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
document.write('originalText: ' + originalText);
console.log('shortText: ' + shortText);
document.write('shortText: ' + shortText);
