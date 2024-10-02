// Chapter 17 (ARRAYS AND LOOP)
// Q1
// var multiArr = []

// Q2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Q3
// for(var i = 0;i<=10;i++){
//     document.write(i+"<br>")
// }

// Q4
// var tableNumber = prompt("Enter the number for which you want the multiplication table:"); 
//         var tableLength = prompt("Enter the length of the multiplication table:"); 
        
//         tableNumber = parseInt(tableNumber);
//         tableLength = parseInt(tableLength);

//         var output = ""; 

//         for (var i = 1; i <= tableLength; i++) {
//             output += tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>"; 
//         }

//         document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");
//         document.write(output); 

// Q5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
//  for(var i = 0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
//  }

// Q6
// var countingArr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var reverseArr =[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// var evenArr =[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// var oddArr =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// var seriesArr =[`2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k`]
// document.write(`<h1>Counting:</h1>
//     <br> ${countingArr}
//     <br><br><br><br> <h1>Reverse counting:</h1>
//     <br>${reverseArr}
//     <br><br><br><br> <h1>Even:</h1>
//     <br>${evenArr}
//     <br><br><br><br> <h1>Odd:</h1>
//     <br>${oddArr} 
//     <br><br><br><br> <h1>Series:</h1>
//     <br>${seriesArr}`)

// Q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search in the array:").toLowerCase();

// if (A.map(item => item.toLowerCase()).includes(userInput)) {
//     var indexNum = A.findIndex(item => item.toLowerCase() === userInput);
//     alert(userInput + ` is available at index ${indexNum} in the array.`);
// } else {
//     alert(userInput + " is not available in our bakery.");
// }

// Q8
// var A = [24, 53, 78, 91, 12];

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i]; 
//     }
// }

// console.log("The largest number in the array is: " + largestNumber);

// Q9
// var A = [24, 53, 78, 91, 12];

// var smallestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i]; 
//     }
// }

// console.log("The smallest number in the array is: " + smallestNumber);

// Q10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i+"<br>"); 
//     }
// }


// Chapter 21 (STRING METHODS)
// Q1
// var firstName = prompt("Enter your First Name")
// var lastName = prompt("Enter your Last Name")
// var fullName = `${firstName} ${lastName}`
// alert(fullName) 

// Q2
// var mubile = prompt("Enter your favorite mobile module");
// var length = mubile. length
// document.write(`My favorite mobile module is: ${mubile}<br> Length of string ${length} `);

// Q3
// var index = "Pakistani"
// var indexNum = index.indexOf("n")
// document.write(`index of "n" is ${indexNum}`)

// Q4
// var index = "Hello World"
// var indexNum = index.lastIndexOf("l")
// document.write(`Last index of "l" is ${indexNum}`)

// Q5
// var string = "Pakistani"
// var char = string.charAt(3)
// document.write(`Character at index 3 is ${char}`)

// Q6


// Q7
// var message ="Hyderabad"
//  var updatedMessage =message.replaceAll("Hyder","Islam")
// document.write(`${message}<br>${updatedMessage}`)

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replaceAll("and", "&");
// document.write(updatedMessage);

// Q9
// var str = "472";        
// var num = Number(str);        

// document.write(`String value: ${str}<br>Type:${typeof str}<br>`);
// document.write(`Number value:${num}<br>Type:${typeof num}`);

// Q10
// var userInput= prompt("Enter any word")
// var word = userInput.toUpperCase()
// document.write(`User Input:${userInput}<br>Upper Case:${word}`)

// Q11
// var userInput = prompt("Enter a sentence:"); 
//         var words = userInput.split(" "); 
//         var titleCase = ""; 

//         for (var i = 0; i < words.length; i++) {
//             var word = words[i]; 
//             titleCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " "; 
//         }

//         document.write("Title Case: " + titleCase.trim());

// Q12
// var num = 35.36;
// var numStr = num.toString().replace(".", "");
// console.log(numStr);

// Q13
// var username = prompt("Enter your username:");

// var invalidChars = [33, 44, 46, 64]; 
// var isValid = true;


// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (invalidChars.includes(charCode)) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Please enter a valid username without special symbols like @, ., , , !");
// } else {
//     alert("Username is valid: " + username);
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search in the array:").toLowerCase();

// if (A.map(item => item.toLowerCase()).includes(userInput)) {
//     var indexNum = A.findIndex(item => item.toLowerCase() === userInput);
//     alert(userInput + ` is available at index ${indexNum} in our bakery.`);
// } else {
//     alert(userInput + " is not available in our bakery.");
// }

// Q15

// Q16
// var university = `University of Karachi`;
// for(var i = 0;i<university.length;i++){
//     document.write(university[i]+"<br>")
//  }

// Q17
// var userInput = "Pakistan";

// if (userInput) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);

//     document.write(`The last character is:${userInput} is: ${lastCharacter}`);
// }

// Q18
// var text = "The quick brown fox jumps over the lazy dog";
//     var wordToFind = "the";
//     var count = 0;

//     var lowerText = text.toLowerCase();

//     var wordsArray = lowerText.split(" ");

//     for (var i = 0; i < wordsArray.length; i++) {
//         if (wordsArray[i] === wordToFind) {
//             count++;
//         }
//     }

//     document.write("The word '" + wordToFind + "' occurs " + count + " times.");

// Chapter 26:(MATH METHODS)
// Q1
// var num = 3.45214;
// var round= Math.round(num)
// var floor= Math.floor(num)
// var ceil= Math.ceil(num)

// document.write(`Value:${num}<br>
//     Round value:${round}<br>
//     Floor value:${floor}<br>
//     Ceil value:${ceil}<br>`)

// Q2
// var num = -3.45214;
// var round= Math.round(num)
// var floor= Math.floor(num)
// var ceil= Math.ceil(num)

// document.write(`Value:${num}<br>
//     Round value:${round}<br>
//     Floor value:${floor}<br>
//     Ceil value:${ceil}<br>`)

// Q3
// var number = prompt("Please enter a number:");

// var num = Number(number);

// var absoluteValue = (num < 0) ? -num : num;

// document.write("Absolute value of " + num + " is " + absoluteValue + ".");

// Q4
    // var diceValue = Math.floor(Math.random() * 6) + 1;

    // document.write("You rolled a dice and got: " + diceValue);

    // Q5
//     var headUser = prompt("Enter head username");

// var tailUser = prompt("Enter tail username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if (floor === 0) {
//   alert(headUser + " " + " win the toss");
// } else {
//   alert(tailUser + " " + "win the toss");
// }

// Q6
// var random =Math.random()*100
// var floor = Math.floor(random)
// document.write(`random numbers between 1 and 100 is:${floor}`)

// Q7



// Q8
// var secretNumber = Math.floor(Math.random() * 10) + 1; 
// secretNumber=2
// var userInput = prompt("Enter a number between 1 and 10:"); // Ask the user for their guess
//         var userGuess = parseInt(userInput); // Parse the user input to an integer

//         if (userGuess === secretNumber) {
//             document.write("Congratulations! You guessed the secret number: " + secretNumber); // Congratulate the user
//         } else {
//             document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!"); // Inform the user of the correct answer
//         }