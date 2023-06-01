//array 5 exercises



//exercise 1

let isArray = [1, 2, 3]
document.getElementById("p_array_exercise1").innerHTML = (Array.isArray(isArray))



//exercise 2
// Write a simple JavaScript program to join all elements of the following array into a string.

let colorArray = ["Red", "Green", "White", "Black"]
let ColorArrayConnected = document.getElementById("p_array_exercise2")
ColorArrayConnected.innerHTML = colorArray[0] + "," + colorArray[1] + "," + colorArray[2] + ","+ colorArray[3]



//exercise 3
//17. Write a JavaScript program to shuffle an array.

function shuffleArrayFunction(array) {
  return array.sort(() => Math.random() - 0.5)
}
let orderedArray = [1, 2, 3, 4, 5]
let shuffledArray = shuffleArrayFunction(orderedArray)
document.getElementById("p_array_exercise3").innerHTML = shuffledArray




//exercise 4
//31. Write a JavaScript function to remove a specific element from an array.
removeElementFromArray()
function removeElementFromArray() {
    let normalArray = [1, 2, 3, 4, 5]
    removedArray = normalArray.splice(1, 1)
    document.getElementById("p_array_exercise4a").innerHTML = normalArray
    document.getElementById("p_array_exercise4b").innerHTML = removedArray

}


//exercise 5
//35. Write a JavaScript function to get random items from an array.
function randomItemFromArray(){
  let arrayInitial = [1, 2, 3, 4, 5]
  arrayRandomItem = Math.ceil(Math.random(arrayInitial) * 5 )
  document.getElementById("p_array_exercise5a").innerHTML = arrayInitial
  document.getElementById("p_array_exercise5b").innerHTML = arrayRandomItem
  
}
randomItemFromArray()





//math 5 exercises


//exercise 1
//2. Write a JavaScript function to convert a binary number to a decimal number.
function binToDec(){
  let initialBinaryNumber = 100
  let binToDecimal = parseInt(initialBinaryNumber, 2)
  document.getElementById("p_math_ex1a").innerText = initialBinaryNumber
  document.getElementById("p_math_ex1b").innerText = binToDecimal
}
binToDec()


//exercise 2
//3. Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number.
function decToBinaryHexOctal(){
  let initialDecimalNumber = 120
  let decToBinary = initialDecimalNumber.toString(2)
  let decToHex = initialDecimalNumber.toString(16)
  let decToOctal = initialDecimalNumber.toString(8)
  document.getElementById("p_math_ex2a").innerText = decToBinary
  document.getElementById("p_math_ex2b").innerText = decToHex
  document.getElementById("p_math_ex2c").innerText = decToOctal
}
decToBinaryHexOctal()


//exercise 3
//4. Write a JavaScript function to generate a random integer.
function generateRandomInteger(){
  let randomIntegerOneToHundred = Math.floor((Math.random() * 100) + 1)
  document.getElementById("p_math_ex3").innerText = randomIntegerOneToHundred
}
generateRandomInteger()



//exercise 4
//5. Write a JavaScript function to format a number up to specified decimal places.
function TwoNumbersAfterDot(){
  initialAfterDotNumber = 15.8743212
  let newNumberTwoAfterDot = initialAfterDotNumber.toFixed(2)
  document.getElementById("p_math_ex4").innerText = newNumberTwoAfterDot
}
TwoNumbersAfterDot()



//exercise 5
//15. Write a JavaScript function to check whether a value is an integer or not.
function isItInteger(){
  let initialValueIntegerOrNot = 12
  let resultIsInteger = Number.isInteger(initialValueIntegerOrNot)
  document.getElementById("p_math_ex5").innerText = resultIsInteger
}
isItInteger()



//String/Text 5 exercises

//exercise 1
//1. Write a JavaScript function to check whether an 'input' is a string or not.
function isInputString(){
  let inputStringOrNot = "hello"
 if (typeof inputStringOrNot === "string") {
  document.getElementById("p_string_ex1").innerText = "true"
  }
  else {
    document.getElementById("p_string_ex1").innerText = "false"
  }

}
isInputString()




//exercise 2
//2. Write a JavaScript function to check whether a string is blank or not.
function isStringBlank(){
  let fullStringOrBlank = "hello"
  if(fullStringOrBlank.length === 0){
    document.getElementById("p_string_ex2a").innerText = fullStringOrBlank
    document.getElementById("p_string_ex2b").innerText = "blank string"
  }else{
    document.getElementById("p_string_ex2a").innerText = fullStringOrBlank
    document.getElementById("p_string_ex2b").innerText = "full string"
  }
}
isStringBlank()



//exercise 3
//3. Write a JavaScript function to split a string and convert it into an array of words.
function stringToArray(){
  let stringNotArray = "Robin Singh"
  let modifiedString = stringNotArray.split(" ");
  document.getElementById("p_string_ex3a").innerText = modifiedString
}
stringToArray()


//exercise 4
//4. Write a JavaScript function to extract a specified number of characters from a string.
function sliceFromString(){
  let notSlicedString = "hello i am not sliced"
  let slicedString = notSlicedString.slice(14 , 21)
  document.getElementById("p_string_ex4a").innerHTML = notSlicedString
  document.getElementById("p_string_ex4b").innerHTML = slicedString
}
sliceFromString()


//exercise 5
//8. Write a JavaScript function to capitalize the first letter of a string.
function capitalizeFirstLetter(){
  let notCapFirstLetterText = "js string exercises";
  let capitalizedFirstLetterText = notCapFirstLetterText.charAt(0).toUpperCase() + notCapFirstLetterText.slice(1)
  document.getElementById("p_string_ex5a").innerHTML = notCapFirstLetterText
  document.getElementById("p_string_ex5b").innerHTML = capitalizedFirstLetterText
}
capitalizeFirstLetter()





//Datetime 5 exercises

//exercise 1
//1. Write a JavaScript function to check whether an `input` is a date object or not.
function checkIsDateOrNot() {
  return dateOrNot.constructor.toString().indexOf("Date") > -1;
}
const dateOrNot = new Date()
let isItDate = checkIsDateOrNot(dateOrNot)
document.getElementById("p_datetime_ex1a").innerHTML = dateOrNot
document.getElementById("p_datetime_ex1b").innerHTML = isItDate
checkIsDateOrNot()



//exercise 2
//3. Write a JavaScript function to get the number of days in a month.
let yearOfMonthDays = Number(2012)
let enterMonth = Number(7)
function getDaysOfMonth(year, month) {
  return new Date(year, month, 0).getDate()
}
const daysInMonth = getDaysOfMonth(yearOfMonthDays, enterMonth)
document.getElementById("p_datetime_ex2a").innerHTML = "month " + enterMonth
document.getElementById("p_datetime_ex2b").innerHTML = "days " + daysInMonth



//exercise 3
//13. Write a JavaScript function that returns the number of minutes in hours and minutes.
function PrintHoursAndMinutes(){
    let totalMinutesBeforeChange = 200
    let hoursFromTotalMinutes = Math.floor(totalMinutesBeforeChange / 60)
    let minutesRemainder = totalMinutesBeforeChange % 60
    document.getElementById("p_datetime_ex3a").innerHTML = "minutes before change: " + totalMinutesBeforeChange
    document.getElementById("p_datetime_ex3b").innerHTML = "hours: " + hoursFromTotalMinutes
    document.getElementById("p_datetime_ex3c").innerHTML = "minutes: " + minutesRemainder
      }
  PrintHoursAndMinutes()




//exercise 4
//18. Write a JavaScript program to calculate age.
function calculateAge(){
  let yearOfBirth = 2000
  let currentYear = new Date().getFullYear()
  let calculatedAge = currentYear - yearOfBirth
  document.getElementById("p_datetime_ex4a").innerHTML = "year of birth: " + yearOfBirth
  document.getElementById("p_datetime_ex4b").innerHTML = "calculated Age: " + calculatedAge

}
calculateAge()




//exercise 5
//19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.
function dayOfMonthWithZero(){
  let currentDate = new Date(2015, 10, 1)
  let dayOfMonth = currentDate.getDate()
  document.getElementById("p_datetime_ex5").innerHTML = "date of month: " + 0 + dayOfMonth
}
dayOfMonthWithZero()








//Conditional statements and loops 5 exercises

//exercise 1
//1. Write a JavaScript program that displays the largest integer among two integers.
function largestIntegerFunction(){
  let firstNumberCompare = 10
  let secondNumberCompare = 1
  document.getElementById("p_conditional_loops_ex1a").innerHTML = "first number is: " + firstNumberCompare 
  document.getElementById("p_conditional_loops_ex1b").innerHTML = "second number is: " + secondNumberCompare 
  if(firstNumberCompare > secondNumberCompare){
  document.getElementById("p_conditional_loops_ex1c").innerHTML = "bigger number is: " + firstNumberCompare
  }
  else if(secondNumberCompare > firstNumberCompare){
  document.getElementById("p_conditional_loops_ex1d").innerHTML = "bigger number is: " + secondNumberCompare
  }else 
  document.getElementById("p_conditional_loops_ex1e").innerHTML = "equal"

}
largestIntegerFunction()




//exercise 2
//2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
function signProductOfThreeNum(){
  let firstNumProduct = 10
  let secondNumProduct = -30
  let thirdNumProduct = 1
  let threeNumbersResult = firstNumProduct + secondNumProduct + thirdNumProduct
  let threeNumbersResultMathSign = Math.sign(threeNumbersResult)
  if(threeNumbersResultMathSign == -1){
    document.getElementById("p_conditional_loops_ex2").innerHTML = "product sign is: -"
  }
  else if(threeNumbersResultMathSign == 1){
    document.getElementById("p_conditional_loops_ex2").innerHTML = "product sign is: +"
  }
  else
  document.getElementById("p_conditional_loops_ex2").innerHTML = "product sign is: 0"
}
signProductOfThreeNum()


//exercise 3
//5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
for (let isEven = 0; isEven <= 15; isEven++) {
  if(isEven % 2 ==  0){
  console.log( "number " + isEven + " is even")
  }else if(isEven % 2 !== 0 )
  console.log( "number " + isEven + " is odd")
}

//exercise 4
//7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
for (let fizzOrBuzz = 1; fizzOrBuzz <= 100; fizzOrBuzz++) {
  if(fizzOrBuzz % 3 ==  0 && fizzOrBuzz % 5 == 0){
  console.log(fizzOrBuzz + " fizzbuzz")
  }else if(fizzOrBuzz % 5 == 0 ){
  console.log(fizzOrBuzz + " buzz")
  }else if(fizzOrBuzz % 3 ==  0){
    console.log(fizzOrBuzz + " fizz")
  }else
  console.log(fizzOrBuzz);
}

//exercise 5
//4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
let isLargestFirstNum = 7
let isLargestSecondNum = 8
let isLargestThirdNum = 3
let isLargestForthNum = 4
let isLargestFifthNum = 5
let largestNumber = isLargestFirstNum

if(isLargestSecondNum > largestNumber){
  largestNumber = isLargestSecondNum
}
if(isLargestThirdNum > largestNumber){
  largestNumber = isLargestThirdNum
}
if(isLargestForthNum > largestNumber){
  largestNumber = isLargestForthNum
}
if(isLargestFifthNum > largestNumber){
  largestNumber = isLargestFifthNum
}
document.getElementById("p_conditional_loops_ex5").innerHTML = "biggest number is: " + largestNumber
