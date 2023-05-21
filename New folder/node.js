//Chapter 21 (Changing Case)
// 1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase; Note: Correct this statement by yourself.
// var userInput = prompt("")
// var allLower = userInput.toLowerCase();
// console.log(allLower)

//2. Convert the string represented by x to lower-case and assign the result to the same variable.

var a ="WASIF AHMED"
var b = a.toLowerCase()
console.log(b)

// 3. Convert the string represented by y to upper-case and assign the result to the same variable.

// var a ="wasif"
// var b = a.toUpperCase()
// console.log(b)

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

var a ="WASIF AHMED"
var b = a.toLowerCase()
console.log(b)

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

// var arr =["WASIF","AHMED","KHAN","ATIF"]
// for (let i = 0; i < arr.length; i++) {
    
//     var b = arr[i].toLowerCase()
//     console.log(b)
    
// }


// Display in an alert the upper-case version of the string
// represented by a variable.

// var a=prompt("")
// var b = a.toUpperCase()
// console.log(b)


// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

// var cityName = "kaRacHi";
// var firstlettercopy=cityName.slice(0,1)
// var uppercase = firstlettercopy.toLocaleUpperCase()
// var secondlettercopy=cityName.slice(1)
// var lowerCase=secondlettercopy.toLowerCase()
// var add = uppercase+lowerCase
// console.log(add)

// Chapter 22 - 25 (Strings)

// "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

// var  sameWords = "captain";
// var b = sameWords.slice(1,3)
// console.log(b)


// 2. The number of characters in the string will be assigned to the
// variable.


// The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.


// var animal = "elephant"
// var b = animal.slice(2,6)
// console.log(b)

// 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
//  var b = "wasifahmmed"
//  var c = b.indexOf("a")
//  console.log(c)

//  5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

// var names = "wasif"
// var copy = names.slice(1,4)
// console.log(copy)

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx)

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// console.log(indx)


// Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.


    
// var a= "wasif"

// var b = a.indexOf()
// if(b !== -1){
//     alert("yes")
// }

// In this string "abcde", what character is at index 2? (UsecharAt)

// var a= "abcde"
// var b = a.charAt(2)
// console.log(b)

// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared
// beforehand.

// var a= "I AM A WASIF"
// var cha = a.charAt(10)
// console.log(cha)

// Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.

// var names = "Wasif ahmed khan 99"
// var b = names.charAt(18)
// console.log(b)

//Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

// var animal =  "loin Tiger Elephant cat "
// var b = animal.charAt(5)
// console.log(b)

// 14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular
// character.

// var a = "Wasif Ahmed Khan "
// var b=  a.charAt(7)
// if ( b ==="h") {
//     alert("correct")
// }


// Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.


// var str="wasif ahmed khan"
// var strReplace=str.replace("wasif","Atif")
// console.log(strReplace)

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

var a = ["1","two"]
for (let i = 0; i < a.length; i++) {
    
    var b = a[i].replace("1","one")
    console.log(b)
    
}

// If you want all instances replaced, enter 3 characters that
// need to appear in this statement.

// var a = "wasif wasif wasif ahmed ahmed"
// var b = a.replaceAll("wasif","Khan")
// console.log(b)

// Chapter 26 (Rounding Numbers)

// 1. Form a statement that rounds a number to the nearest integer.

// var num = 1.6
// var b = Math.round(num)
// console.log(b)

// Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// var b = 0.5
// b=Math.ceil(b)
// console.log(b)

// Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// var b = 0.6
// b=Math.floor(b)
// console.log(b)

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

// var num = 2.5;
// var roundedNum = Math.round(num);

// console.log(roundedNum)

// Chapter 27 (Random Numbers)

// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

// var a=Math.ceil(Math.random()* 50 )+1;
// console.log(a)

// var a= Math.random()
// var b = Math.ceil(a*50)
// console.log(b)

// Generate a random number and assign it to a variable that hasn't
// been declared beforehand.

// var a = Math.random()
// console.log(a)

// var a = Math.random()
// var b = Math.ceil(a*6)
// console.log(b)

// var a= Math.random()
// var b = Math.floor(a*2)

// if(b===0){
//     alert("head")
// }else{
//     alert("tail")
// }



// Chapter 28, 29 (Converting Strings)



//1. How do you convert a string to an integer in JavaScript?

// var b = "1234"
// var c = Number(b)
// console.log(c)


// Write a JavaScript function to convert the string "123" to an
// integer.

// var b = "1234"
// var c = Number(b)
// console.log(c)



// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?

// var a = "134.323854"
// var b = Number(a)
// console.log(b)


// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
// var a = "134.323854"
// var b = Number(a)
// console.log(typeof(b))

// How can you convert a number to a string in JavaScript?

// var a = 134.323854

// a=a.toString();

// console.log(typeof(a))


// var a = 134.323854
// var b = a.toFixed(3)

// console.log(+(b))


// 6. Write a JavaScript function to convert the number 42 to a string.

// var  a = 42;
// var b = a.toString()
// console.log(b)



// Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

// var b =168.989728
// var a=b.toFixed(3)
// console.log(a)

// In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

// var a = 12.2345
// a= a.toFixed(2)
// console.log(a)

// Chapter 31 - 34 (Date & Time)

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

// var date = new Date()
// console.log(date)

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

// var date = new Date()
// console.log(date.toString())

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

// var newdate= new Date()
// var week= newdate.getDay
// console.log(week)

// The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

// var d = new Date()
// var day = d.getDay()
// var dayname=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// alert(dayname[day])

// // Extract all parts of the Date and Time and assign it to the variable
// // which has not been declared beforehand.

// var d = new Date();

// var year = d.getFullYear();
// var month = d.getMonth() + 1; 
// var day = d.getDate();
// var hour = d.getHours();
// var minute = d.getMinutes();
// var second = d.getSeconds();
// var millisecond = d.getMilliseconds();



// Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

// var d = new Date(2020,10,15)
// console.log(d)

// Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

// var d = new Date(1992,10,15)
// console.log(d)


// Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
// alert(new Date().getTime() - new Date("January 1, 1980").getTime());

//9. How do you change the year of a date in JavaScript?9. How do you change the year of a date in JavaScript?
var  d = new Date();
d.setFullYear(2021)
console.log(d)

//10. Write a JavaScript function to change the month of a given date to January.
// var  d = new Date();
// d.setMonth(2021)
// console.log(d)

// What is the method to change the day of the week for a
// specific date in JavaScript?

// var d = new Date();
// d.setDate(2021)
// console.log(d)

// Chapter 35 - 37 (Functions)

// 1. Code the first line of a function displayAlert.

function displayAlert() {
    alert("hello")
}

// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.

// function askName(params) {
//     var names=prompt("askName")
// console.log(names)
// }
// askName()
// Code a function that calls 2 other functions
// function main() {
//     greet();
//     goodbye();
//   }
  
//   function greet() {
//     alert("Hello, world!");
//   }
  
//   function goodbye() {
//     alert("Goodbye, world!");
//   }
  
//   main();

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.

// function askName(params) {
//         var names=prompt("askName")
//     alert(names)
//     }
//     askName()

// Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.


// function foo(name) {
//     alert(name)
// }
// foo("wasif")

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.

// function foo(fistname,lastname) {
//     alert(fistname,lastname)
// }
// foo("wasif"+"atif")

// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.

// function foo(a,b,c) {
//     var b = a+b*c/3
//     b=Math.ceil(b)
//     console.log(b)
// }
// foo(4,7,8)

// Write a JavaScript function that takes two parameters and returns
// their sum.

// function foo(a,b) {
    
//     return a+b;
// }
// var c = foo(12,45*4)
// console.log(c)

// You have to capture the returned value from a function and
// store it in a variable?

// function foo(a,b) {
    
    //     return a+b;
    // }
    // var c = foo(12,45*4)
    // console.log(c)



    // Write a function which tells letter counts of (word).
    // function letter(word) {
        
   
    //     var b = word.length
    //     console.log(b)    
       
    // }

    // letter("wasif")

    // Write a function to set (year) in date object.

    // function years(year){
    //     var n=new Date()
    //      n.setFullYear(year)
    //     console.log(n)
    // }
    // years(1999)


//     Write a function which tells the age of a person who Born on
// (dateOfBirth)

// function foo(DOB) {
//     var n = new Date()
//     var dob=    new Date(DOB)
//     var nt = n.getTime()
//     var dt=dob.getTime()
//     var sub = nt-dt
//     var final = sub/(1000*60*60*24*365)
//     var floor = Math.floor(final)
//     console.log(floor)
// }
// foo(prompt("DOB"))

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

// function foo(word) {
//     array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
//    var check = array.indexOf(word)
//    if (check !== -1) {
//     alert("true")
//    }else{
//     alert("flase")
//    }

//         }
        
// foo("zaid")

// function repeat(letter) {
//    
//    var b= letter.repeat(10)
//     console.log(b)
// }
// repeat()


// function arr() {
//     var reverse=['a','b','c','d','e']
//     var c=reverse.reverse()
//     console.log(c)
// }
// arr()


// Chapter 38 (Local vs. Global Variables)

// function localVariable() {
//     var myVar = "This is a local variable";
//     console.log(myVar);
//   }
  
//   localVariable();

// How can you access a global variable inside a function in
// JavaScript?

// var b ;
// function global() {
//     b="Global"
//     alert(b)
// }
// global()

// Chapter 39, 40 (Switch Statements)

// var b = ["wasif","khan","ahmed"]
// switch (b) {
//     case "wasif":
//         alert("yes")
        
//         break;

//     default: "no"
//         break;
// }

// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

// var cityName=["karachi","Hyderabad","Lahore"]
// switch (cityName){
//     case "karachi":
//     alert("karachi")
// break

//     case "Hyderabad":
//         alert("karachi")

// break
// default:"correct your city"
// break;
// }