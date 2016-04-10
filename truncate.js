var outputText = "";

var truncateWords = function (longText, numWords) {
    var originalTextLength = longText.split(" ").length;
                console.log("The Length of the orginial text is: " + originalTextLength);
    var shortTextArray = longText.split(" ").splice(0, wordLimit);
    shortTextArray.push('...');
              console.log('shortTextArray: ' + shortTextArray);
    shortText = shortTextArray.join(' ');
    return shortText;
}
var ffff = "";
outputText += originalText + '<br>' + ffff;
ffff = (originalText.split(' ').length);
//"Final Word Count is: " + shortTextArray + '<br>'nnnnn
//"Short Text " + shortText;
console.log(ffff);



var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
