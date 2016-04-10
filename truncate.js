var truncateWords = function (longText, numWords) {
    var originalTextLength = longText.split(" ").length;
                console.log("The Length of the orginial text is: " + originalTextLength);
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
var outputText = "////////stretch goals start here: //////////"
console.log(outputText);
outputText = "original text: " + originalText;

outputText = outputText + " The length of the original text is: " + originalText.split(" ").length;

outputText = outputText + " The number of words to use is: " + wordLimit;

outputText = outputText + " Here's the string that will be created: " + shortText;
console.log(outputText);
