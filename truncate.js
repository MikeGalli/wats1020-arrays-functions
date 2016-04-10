//var shortText = "";
var truncateWords = function (longText, numWords) {
    var shortTextArray = longText.split(" ").splice(0, wordLimit);
    shortTextArray.push('...');
console.log('shortTextArray: ' + shortTextArray);
    shortText = shortTextArray.join(' ');
    return shortText;

}
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
