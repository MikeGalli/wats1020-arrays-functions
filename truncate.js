/*this function will truncate text from __ words to __ words.
When it is called on line 17, it will truncate from 15 words to 8 words.*/
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
/*This calls the function(line 3). THIS time, when line 17 calls the function:
the values "originalText" & the number 8 will be used in the function above.*/
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

//Create an object, outputText and put a bunch of info in it. Then print it to the console.
var outputText = "////////stretch goals start here: //////////"
console.log(outputText);
outputText = "original text: " + originalText;
outputText = outputText + " The length of the original text is: " + originalText.split(" ").length;
outputText = outputText + " The number of words to use is: " + wordLimit;
outputText = outputText + " Here's the string that will be created: " + shortText;
console.log(outputText);
