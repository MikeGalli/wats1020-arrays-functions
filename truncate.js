var shortText = "";
var truncateWords = function (longText, numWords) {
    var shortTextArray = longText.split(" ");
console.log(shortTextArray);
}
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
//console.log('shortText: ' + shortText);
