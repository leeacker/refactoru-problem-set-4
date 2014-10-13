// // Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

var addNumbers = function(string){
	var stringArray = string.split('');
	var numbers = [];
	for(var i = 0; i<stringArray.length; i++){
		if( i>0 && Number.isInteger(+stringArray[i]) && Number.isInteger(+stringArray[i-1]) && stringArray[i-1] !== ' '){
			var prevNum = numbers[numbers.length-1];
			var thisNum = stringArray[i];
			var newNum = prevNum + thisNum;
			numbers[numbers.length-1] = +newNum;
			
		} else if(Number.isInteger(+stringArray[i])){
			numbers.push(stringArray[i]);
		} 
	}
	var addedNumbers = 0;
	for(i = 0; i<numbers.length; i++){
		addedNumbers = addedNumbers + (+numbers[i]);
	}
	return addedNumbers;

};

console.log(addNumbers('55Hello'));
console.log(addNumbers('5Hello 5'));
console.log(addNumbers('5Hello3 589'));



// Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var longestWord = function(string){
	var wordsArray = string.split(' ');
	var previousWord = 0;
	var longest;
	 for(var i = 0; i < wordsArray.length ; i++){
	 	var currentWord = wordsArray[i];
	 	var lettersArray = currentWord.split('');
	 	
	 	var noPunctuation = [];

	 	for(var b = 0; b < lettersArray.length ; b++){
	 		if(alphabet.indexOf(lettersArray[b]) >= 0){
	 			noPunctuation.push(lettersArray[b]);
	 		}	
	 	}
	 	var wordLength = noPunctuation.length;

	 	if(wordLength > previousWord){
	 		longest = currentWord;
	 		previousWord = wordLength;
	 	}
	 }

	 return longest;
};

console.log('longest:', longestWord('which is the longest word?'));
console.log('woodchuck: ', longestWord('how much wood would a woodchuck chuck?'));
console.log('tigers: ', longestWord('lions and tigers and bears, oh my!'));
console.log('words: ', longestWord('words word\'s words\' bear\'s'));




// Bonus:
// Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.


var averageStringNumbers = function(string){
	var stringArray = string.split('');
	var numSum = 0;
	var alphaArray = [];

	for (var i = 0 ; i<string.length ; i++){
		
		if(alphabet.indexOf(stringArray[i].toLowerCase()) === -1 && Number.isInteger(+stringArray[i])){
			numSum = numSum + +stringArray[i];
			console.log('numSum: ', numSum);
		} else if(alphabet.indexOf(stringArray[i].toLowerCase()) !== -1){
			alphaArray.push(stringArray[i]);
			console.log('AlphaArray: ', alphaArray);
		}
	}

	var finalNum = numSum / (alphaArray.length);
	return Math.round(finalNum);
};
console.log(averageStringNumbers('Hello6 9World 2, Nic8e D7ay!'));