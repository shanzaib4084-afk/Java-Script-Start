// Assignment No 1

// Chapter No 1

// alert("Error! Please enter a valid password.")
// alert("Welcome to JS Land....\nHappy coding");


// alert("Welcome to JS Land.....\nHappy coding")


// alert(age)
// alert(course)

// alert("Welcome to JS Land.... ")
// alert("Happy Coding!")

// Chapter No 2

// var username =""

// var myname = "SHANZAIB"

// var message = "Hello World"

// alert(message)

// var studentName = "SHANZAIB"

// var age = 25

// var course = "Web App & Mobile Development"

// alert("Student Name: " + studentName)
// alert("Age: " + age)
// alert("Course: " + course)

// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// var email ="shanzaib4084@gmail.com"

// alert("My email address is: " + email)

// var book = "I am trying to learn from the book A smarter way to learn Java Script"

// alert(book)

// document.writeln("Yah! I can write HTML content through Java Scritp")

// var line = ("ʻʻ-------۝۩۞۝۩-------“")

// alert(line)


// Chapter No 3

// var age = "I am 25 Years old"

// alert(age)

// var visit = 15

// alert("Your have visited this site " + visit + " times")

// var birthyear = 1996

// document.writeln("My Birth Year is " + birthyear)

// var visiterName = "Shanzaib"

// var numberoforder = "5"

// var storeName = "XYZ Clothing Store"

// document.writeln("<b>" + visiterName +  "</b>" + " Ordered " + "<strong>" + numberoforder + "</strong>" + " T-Shirts on " + storeName)


// Chapter No 4

// 3 Variables in one statement

// var name = "Shanzaib", age = 25, course = "Web and Mobile App Development"

// Legal variables

// firstName
// name1st
// my1stName
// $money
// _firstName

// // illegal variables

// 1stName
// // var 123 =`
// var user-name =`
// var &age =
// var @price

// document.writeln("<h1>" + " Rules for naming JS Variables" + "</h1>" + "<br>" + "Variable names can only contain, numbers, $ and _. For Example $my_1stVariable" + "<br>" + "Variable must begin with a letter, $ or _. For example: $name or _name or name" + "<br>" + "Variable names are case sensitive" + "<br>" + "Variable names should not be JS Keywords")






// Chapter No 5

// Point No 1

// var num1 = 3
// var num2 = 5
// var add = num1 + num2

// document.writeln("Sum of " + num1 + " and " + num2 + " is " + add)


// Point No 2

// var num1 = 3
// var num2 = 5
// var sub = num1 - num2

// document.writeln("Substratction of " + num1 + " and " + num2 + " is " + sub + "<br>")


// var num1 = 3
// var num2 = 5
// var mul = num1 * num2

// document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>")

// var num1 = 15
// var num2 = 5
// var div = num1 / num2

// document.writeln("Division of " + num1 + " and " + num2 + " is " + div + "<br>")

// var num1 = 15
// var num2 = 5
// var mod = num1 % num2

// document.writeln("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br>")


// Point No 3

// var num =

// document.writeln(`Value after variable declaration is ${num}<br>`)

// num = 5

// document.writeln(`initial value: ${num}<br>value after increment is ${++num} <br>`)

// num = num + 7

// document.writeln(`value after addtion is ${num}<br> value after decrement is ${--num}<br> The remainder is ${num%3}`)


// Point No 4


// var costOfMovie = 600

// var quantity = 5

// var eq = quantity * costOfMovie

// document.writeln(`Total cost to buy ${quantity} tickets to a movie is ${eq}PKR`)


// Point No 5

// for(i=1; i<=10; i++){
//         document.writeln(`4 x ${i} = ${4 * i}<br>`)
// }

// point No 6

// // var celsius = 25

// // var fahrenheit = (celsius * 9/5) + 32

// // document.writeln(`${celsius} is ${fahrenheit}<br>`)

// // var fahrenheit = 77

// // var celsius = (fahrenheit -32) * 5/9

// document.writeln(`${fahrenheit} is ${celsius}`)


// Point No 7

// var item1 = 650
// var item2 = 100
// var item1Quantity = 3
// var item2Quantity = 7
// var shippingCharges = 100

// document.writeln(`Price of Item 1 is ${item1}<br>Quantity of Item 1 is ${item1Quantity}<br>Price of Item 2 is ${item2}<br>Quantity of Item 2 is ${item2Quantity}<br>Shipping Charges ${shippingCharges}<br><br>Total Cost of Your Order is ${item1 * item1Quantity + item2 * item2Quantity + shippingCharges}` )


// Point No 8

// var totalMarks = 980;
// var obtainedMarks = 804;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln(`Total Marks: ${totalMarks}<br>
// Marks Obtained: ${obtainedMarks}<br>
// Percentage: ${percentage.toFixed(2)}%`);

// Point No 9

// var usDollars = 10
// var usDollar01 = 104.80
// var saudiRiyals = 25
// var saudiRiyal01 = 28

// var PKR = (usDollars * usDollar01 + saudiRiyals * saudiRiyal01)

// document.writeln(`Total Currency in PKR ${PKR}`)

// Point No 10

// var num = 4

// document.writeln(`${num + 5 * 10 / 2}`)


// Point No 11

// var birthYear = 1996
// var currentYear = 2026
// var age = (currentYear - birthYear)

// document.writeln(`Your Age is ${age}`)



        






// let number = prompt("Enter a number to display its multiplication table:");

//     // Convert input to number
//     number = 4;

//     // Display multiplication table from 1 to 10
//     document.write("<h2>Multiplication Table of " + number + "</h2>");

//     for (let i = 1; i <= 10; i++) {
//         document.write(number + " x " + i + " = " + (number * i) + "<br>");
//     }


// Chapter No 6

// Maths Expression
// Unfamilier Operators 

// var num = 2

// document.writeln(num++ + ++num)

//             // 2 + 4 - 3


// var num = 6

// document.writeln(num++ + num++ - --num + --num)

//             // 6 + 7 - 7 + 6
//             // 12


// var a = 1
// var b = 2

// document.writeln(a++ + b++ + ++b - --b + --a + a-- + b-- + b + a) 

        // 1 + 2 + 4 - 3 + 1 + 1 + 3 + 2 + 0
        // 11

// let num = 5

// num+5

// document.writeln(num)

// var num = 5
// num+5

// document.writeln(num)

// num = num + 5

// document.writeln(num)

// num = -5
// document.writeln(num)

// num -= 5

// document.writeln(num)

// num = -5+10

// document.writeln(num)

// num += 5+10
// document.writeln(num)

// num -= 5+10
// document.writeln(num)


// Chapter No 7

// Concatenating Text Strings

// var firstName = "Shanzaib"
// var lastName = "Maqbool"

// document.writeln(firstName + " " + lastName)


// document.writeln("The plus of 2 + 2 is equal to " + 2 + 2)







// Template Literals

// We use tilt or backtick instead of using plus sign everytime

// var firstName = "Shan"
// var lastName = "Zaib"

// document.writeln(`My First Name is <h1>${firstName}</h1> and My Last Name is <h1>${lastName}</h1>`)


// if,else

// var username ="Shanzaib"

// if(username==="Shanzaib"){document.writeln("Good")} else {document.writeln("Nikal")}


// var option = prompt("Enter Message")


// if(option=="sir k dost nahi ay"){document.writeln("11:00 to 01:00")} else {document.writeln("01:00 - 03:00")}





// var user = prompt("Enter user name")

// if(user=="shanzaib"){document.writeln("Login Success")}else {document.writeln("Nikal")}




// var report =prompt("study")

// if(report=="study"){document.writeln("Pass")}else{document.writeln("Fail")}

// var username= prompt("Enter the User Name")

// if(username=="Shanzaib"){document.writeln("Login Success")}else{document.writeln("Invalid Credentials")}


// Printing Functions

// document.writeln()
// alert()
// console.log()


// document.writeln(typeof"Shanzaib")  string
// document.writeln(typeof(15))  number

// document.writeln("30"%10)
// document.writeln("30"-10)
// document.writeln("30"/10)
// document.writeln("30"*10)
// document.writeln(`<h1> ${"30"*10} </h1>`)

// document.writeln("Saad" + " " + "Ali")

// alert("Hello world")

// console.log("SHANZAIB " + "MAQBOOL")

// var firstName= "Shanzaib "
// var lastName= "Maqbool"

// var username= firstName + lastName

// console.log(firstName + lastName)

// var firstName= ? (undefined)

// console.log(fristname)   (is not defined)

// var num1= 10
// var num2= 5

// console.log(`The addition of Number 1 and Number 2 is ${num1 + num2}`)


// Math Expression Unfamilier Operator

// // ++num pre increment
// // num++ post increment
// // --m pre decrement
// m-- post decrement

// var num=5

// var eq =++num + num++ + ++num
//         // 6 + 6 + 8
//         // 20
// document.writeln(eq)

// var a=5
// var b=6

// var eq= a++ + b++ - b-- + ++b + ++a + a++ - b + a

//         // 5 +   6 - 7 + 7 + 7 + 7 - 7 + 8
//         // 26

// document.writeln(eq)


// var num= 5
// num -= -5+10

// document.writeln(num)




// prompt to take the input from user

// prompt accept 02 perimeters

// var name="Enter FIrst Name"
// var msg= "Shanzaib"

// var username =prompt(name, msg)


// document.writeln(`<h1> ${username} </h1>`)





// var username= prompt("Shanzaib")
// document.writeln(typeof(username))

// var num1= +prompt("Enter Number 1")
// document.writeln(typeof(num1))


// var num1= +prompt("Enter Number 1")
// var num2= +prompt("Enter Number 2")

// var add= num1 + num2
// var sub= num1 - num2
// var mul= num1 * num2
// var div= num1 / num2
// var mod= num1 % num2

// document.writeln(`
//         The addition of ${num1} and ${num2} is ${add} <br>
//         The substraction of ${num1} and ${num2} is ${sub} <br>
//         The multiplication of ${num1} and ${num2} is ${mul} <br>
//         The division of ${num1} and ${num2} is ${div.toFixed(2)} <br>
//         The modulus of ${num1} and ${num2} is ${mod} <br>
//          `)






















// if, else

// // var username= prompt("Enter User Name")

// if(username=="Shanzaib"){document.writeln("Login Success")}else{document.writeln("Wrong Username")}

// False values
// six falsy values
// false
// null
// NaN
// ''
// 0


// False values practice
// var eq = false && true               
// var eq = 5 == "5" && 6>5
// var eq = 5 == "5" || 6>7       
// var eq = 7>5 && "Asad" && 10
// var eq = 0 && "Asad" && "Saad"
// var eq = false && "Pappu" && undefined || "Pink Billi"

// console.log(eq)


// Email by User

// var email = prompt("Enter Your Email")
// var password = prompt("Enter Your Password")

// if(email == "hareemfatima@gmail.com" && password === "123456"){document.writeln("Login Successfull")}else{alert("login Failed")}


// Nested, if  (if k ander doosra if)

// var a = 6
// var b = 10

// if(a==6){if(b==10) {document.writeln("both are true")}
// else{document.writeln("b is not true")}}
// else {document.writeln("a is not ture")}




// Aray [Collection of Data]

// var student1= ["Satti"]

// var names = ["Satti", "Yasir", "Nasir", "Hammad","Zeeshan"]

// console.log(names[1], names[3])

// var names =["Satti", "Shanzaib", "Asad", "Ghulam"]
// document.writeln(names[1], names[2] )

// var names = ["Satti", "Shanzaib", "Asad", "Ghulam", "Sohail"]

// names.length = 0

// console.log(names)


// array methods
// Push  akhir sy daaly
// , Pop akhir sy nikaly ga
// , Shift shuru sy nikaly ga
// , Unshift shuru sy daly ga
// , Slice copy kr k new array return krta hai
//  Splice kahin sy b daaly ga kahin sy b nikaly ga

// var fruits = ["Apple ", "Banana ", "Mango ", "Strawbery ", "Melon "]
// // fruits.pop()
// // fruits.unshift("Kaila")
// // fruits.shift()
// // fruits.splice(3,1,"Kaila")
// var result = fruits.slice(2,4)       (2 starting Index and 4 length)
// document.writeln(result)
// document.writeln(fruits)

// fruits.splice(2, 1, "Grapes")  
// (2 sy Start, 1 sy delete, "Grapes add")



// Table made by User.

// var num = prompt("Enter Your Number")

// for(var i=1; i<=20; i++){
//         document.writeln(`${num} x ${i} = ${num * i} <br>` )
// }


// for(i=1; i<=10; i++){
//         document.writeln(`${i} Rehan<br> 
//                 `)
// }

// Concatenating Text Strings

// var message = "Thanks "
// var userName = prompt("Enter User Name")
// var banger = " !"
// var customMess = (message + userName + banger)

// alert(customMess)


// Break & Continue

// Break

// for (var i=1; i<=10; i++){
        
//         if(i==5)break         
//         document.writeln(`${i} <br>`)
// }

// Continue

// for (var i=1; i<=10; i++){
        
//         if(i==5)continue         
//         document.writeln(`${i} <br>`)
// }


// For Loops

// // Flags
// var match = "no"  (Match is the flags)

// // Booleans
// var match = false    (false is the boolean)

// break

// number of elements in the array
// var numOfCars= Cars.length  (but we can also use cars.length in for loop)



// var cars = ["BMW", "Mehran", "FX", "Alto", "Suzuki", "Khyber"]
// var numOfCars = cars.length
// var user = prompt("Enter your car name")

// match=false                          


// ak ak element k liy loop lagaty hain for ka

// for (var i=0; i<numOfCars; i++){
        
//         if(user==cars[i]){match=true
//                 document.writeln(user + " Car Available")
//                    break
//         }
// }

// if(match==false){
//                 document.writeln(user + " Car Not Available")
//         }


// var cityNames= ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Chakwal"]

// var user = prompt("Enter Your City Name")
// match=false

// for(var i=0; i<cityNames.length; i++){
//         if(user==cityNames[i]){match=true
//                 document.writeln(user + " City is Clean")
//                 break 
//         }  
// }

// if(match==false){
//         document.writeln(user + " City is Not Clean")
// }


// for loops nested

// var students = ["Saad", "Rehan", "Rohan", "Zameer", "Ahmed"]
//  var father = ["Maqbool"]

//  for (var i=0; i<students.length; i++){
//         document.writeln(students[i] + " " + father + "<br>")
//  }


// var students = ["Saad", "Rehan", "Rohan", "Zameer", "Ahmed"]
//  var father = ["Maqbool", "Ahmed"]

//  for (var i=0; i<students.length; i++){
//         for (j=0; j<father.length; j++)
//         document.writeln(students[i] + " " + father[j] + "<br>")
//  }



// 1
// 1 2
// 1 2 3
// 1 2 3 4
// // 1 2 3 4 5
// for (var i=1; i<=5; i++){
//         for(var j=1; j<=i; j++){
//                 document.write(j + " ")
//         }

//         document.writeln("<br>")
        
// }

// for reverse
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for (var i = 1; i <= 5; i++) {       // Rows
//     for (var j = 5; j >= 6 - i; j--) {  // Numbers in reverse
//         document.writeln(j + " ");
//     }
//     document.writeln("<br>");
// }

// Star Pattern

// for (var i=1; i<=5; i++){
//         for(var j=5; j>=6-i; j--){
//                 document.writeln("*" + " ")
//         }
//         document.writeln("<br>")
                
// }



// 1 to 100 with single loop

// for (var i = 1; i <= 100; i++) {
//     document.writeln(i + " ");
//     if (i % 10 == 0) {         // har 10 numbers ke baad row break
//         document.writeln("<br>");
//     }
// }


// 1 to 100 with double loop

// for (var i = 1; i <= 100; i += 10) {    // outer loop → starting number of each row
//     for (var j = i; j < i + 10; j++) {  // inner loop → print 10 numbers
//         document.writeln(j + " ");
//     }
//     document.writeln("<br>");           // row complete
// }

// ***********************************************************************************************

// UpperCase and LowerCase

// let str = ("shanzaib")

// console.log(str.toUpperCase())

// console.log(str.toLowerCase())

// -----------------------------------------------------------------------------------------------

// let str = ("aTiTude bOY")

// // console.log(str)

// let first = str.slice(0 , 1).toUpperCase()
// let remain = str.slice(1 , 11).toLowerCase()

// let result = first + remain

// console.log(result)

// ------------------------------------------------------------------------------------------------------

// Agr Har Word ka 1st letter Capital krna ho to

// let str = "aTiTude bOY";

// let words = str.split(" ");

// let firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
// let secondWord = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();

// let result = firstWord + " " + secondWord;

// console.log(result);

// --------------------------------------------------------------------------------------------

// Agr user sy input lyna ho to

// let str = prompt("Enter Your Name")

// // console.log(str)

// let first = str.slice(0 , 1).toUpperCase()
// let remain = str.slice(1 , 11).toLowerCase()

// let result = first + remain

// console.log(result)

// ********************************************************************************************

// Math.round (Agr Point k Bad >=5 value ho gi to Number increase kr dy Ga) *****

// let a = 9.14

// document.writeln(Math.round(a))

// *********************

// Math.ceil (Agr value k bad point aa gya aur Value 1 ya 1 sy zyada hoi to ak Number increase kr dy Ga)

// let a = 7.1

// document.writeln(Math.ceil(a))

// *********************

// Math.floor (Point ko Ignore kr dy ga)

// let a = 7.332

// document.writeln(Math.floor(a))

// *********************

// Math.random (Koi bhi random value likhny k liy i.e password Generator etc)

// let a = (Math.random() * 11).toFixed(0)

// document.writeln(a)

// ----------------------------------------------------------------------------------------------------

// Password Generator

// function generatePassword(length) {
//         let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//         let password = "";

//         for(i=0; i<length; i++){
//                 let i = Math.floor(Math.random() * chars.length);
//                 password += chars[i];
//         }
//         return password;
// }

// console.log(generatePassword(8))


// **************************************************************************************************

// Generate Password by User Length

// let chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

// let password = "";

// let passwordLength = +prompt("Enter Your Password Length")

// for(i=0; i<passwordLength; i++){
//         let randomIndex = Math.floor(Math.random() * chars.length);

//         password+= chars[randomIndex] 
// }

// document.writeln(password)


// -----------------------------------------------------------------------------------------------------

// Head Tail Game

// let heads = prompt("Enter Your Name")
// let tails = prompt("Enter Your Name")

// var toss = Math.floor(Math.random() * 2)

// if (toss == 0){
//         console.log(heads + " Win")
// } else {console.log(tails + " Win")}


// ***************************************************************************************************

// Functions

// Two types of Functions
// 1. User Defined Function (Built by User)

        // e.g
//         function greet() {
//   console.log("Hello!");
// }
// greet();

// 2. Built in Function (Built by Default JavaScript)

        // alert("Hello");       
        // console.log("Hi");    
        // Math.sqrt(16);   
        

// important Tips
// ------------------------------------------------------------------------------------------

// function m ham kitny bhi perimeters dy sakty hain

// function sum(a,b,c,d,e,f,g,h){
//         console.log(a+b+c)
// }
// sum(1,2,3) (Extra perimeters ko ignore kr dy ga)

// ----------------------------------------------------------------------------------------------
// undefined + undefined = NaN

// function sum(a,b){
// document.writeln(a+b)
// }
// sum()      // undefined + undefined = NaN

// -------------------------------------------------------------------------------------------------

// 10 + undefined = NaN

// function sum(a,b){
//         console.log(a+b)
// }
// sum(10)

// -----------------------------------------------------------------------------------------------------

// string aa jay to operation perform nai ho ga. Concate kr jay ga

// string + underfined = stringundefined

// function sum(a,b){
//         console.log(a+b)
// }
// sum("10")


// -----------------------------------------------------------------------------------------------

// Get 3 Prompt from user and if + and * else -

// function getNumber(){
//         let num1 = +prompt("Enter Number 1");
//         let num2 = +prompt("Enter Number 2");
//         let action = prompt("Enter Your Action");

//         if(action == "+"){
//                 alert(num1+num2);
//         }
//         else if(action == "*"){
//                 alert(num1*num2);
//         }
//         else {
//                 alert(num1-num2)
//         }
// }

// getNumber()

// -------------------------------------------------------------------------------------------------

// function greet(name){
//         return "Welcome" + name
// }

// let getValue = "Saad"
// let getValue2 = "Asad"
// console.log(getValue, getValue2)


// ---------------------------------------------------------------------------------------------------------

// getelementbyId

// function showMessage(){
//         let getInput = document.getElementById("message");

//         document.getElementById("output").innerHTML = getInput.value

// }

// ------------------------------------------------------------------------------------------------------------

// Calculate the Value


// let showMessage = document.getElementById("msg-box");

// function calculate(){

//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let op = document.getElementById("op").value;

//     if(op == "+"){
//         showMessage.innerHTML = num1 + num2;
//     } 
//     else if(op == "*"){
//         showMessage.innerHTML = num1 * num2;
//     } 
//     else if(op == "-"){
//         showMessage.innerHTML = num1 - num2;
//     } 
//     else if(op == "/"){
//         showMessage.innerHTML = num1 / num2;
//     } 
//     else if(op == "%"){
//         showMessage.innerHTML = num1 % num2;
//     }
//     else {
//         alert("Please enter correct operator (+, -, *, /, %)");
//     }
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// calculate the value by option

// let showMessage = document.getElementById("msg-box")

// function calculate(){
//         let num1 = Number(document.getElementById("num1").value);
//         let op = document.getElementById("op").value;
//         let num2 = Number(document.getElementById("num2").value);

//         if(op === "+"){
//                showMessage.innerHTML = num1 + num2;
//         }
//         else if(op === "-"){
//                showMessage.innerHTML = num1 - num2;
//         }
//         else if(op === "*"){
//                showMessage.innerHTML = num1 * num2;
//         }
//         else if(op === "/"){
//                showMessage.innerHTML = num1 / num2;
//         }
//         else if(op === "%"){
//                showMessage.innerHTML = num1 % num2;
//         }
//         else {
//                 alert("Please enter the value")
//         }

// }

// or

// if(num1 === "" && num2 === "" && op === ""){
//         alert("Plese enter the value")
// }


let showMessage = document.getElementById('output')

function calculate(){

        let num1 = Number(document.getElementById('num1').value);
        let op = document.getElementById('op').value;
        let num2 = Number(document.getElementById('num2').value);

        if(op === "+"){
                showMessage.innerHTML = num1 + num2;
        }
        
        else if(op === "-"){
                showMessage.innerHTML = num1 - num2;
        }
        
        else if(op === "*"){
                showMessage.innerHTML = num1 * num2;
        }
        
        else if(op === "/"){
                showMessage.innerHTML = num1 / num2;
        }
        
        else if(op === "%"){
                showMessage.innerHTML = num1 % num2;
        }

        else {
                alert("Plese enter the value")
        }

}


// -------------------------------------------------------------------------------------------------------------------------------------------


// String ko array m convert krna ho to

// var str = ("Shanzaib")

// console.log(str.split())   // (is sy shanzaib array m aa jay ga)

// console.log(str.split(""))
// // is sy shanzaib ka har word alag alag array m convert ho jay ga

// ---------------------------------------------------------------------------

// Querry Selector

// document.querySelector('')      ye tag ko represent krta hai

// document.querySelector('#')     ye id ko represent krta hai

// document.querySelector('.')        ye class ko represent krta hai     


// ------------------------------------------------------------------------------------------

// JS Methods

// setInterval()   Start ho jay to continue rehta hai jb tk manual stop na kro
                //    setInterval 2 cheezain leta ha. ak function aur dosra time in Miliseconds

// setTimeout()       Ak bar krta hai
// clearInterval()    setinterval ko stop krta hai
// clearTimeout()  

// Jo function kisi method k ander ho to wo function sirf us ka hi hai.
// e.g setInterval(shani)  Ye function sirf ak hi function ho ga.

// Practice

// setInterval(function(){
//         document.write("awais-danish" + "<br>")
// }, 1000)


// is main ak function hai aur 2nd time hai, means k 1000ms = 1sec (ye continue print krta rhy ga)

// let i = 1;

// setInterval(function(){
//         document.writeln(i++ + "<br>" )
// }, 1000)


// ****************************************************************************
// setTimeout(function(){
//         document.write("Malik Shan" + "<br>")
// }, 1000)               ye timeout function sirf ak dafa print kry ga


// -------------------------------------------------------------------------------------------

// Read More

// function para(){
//         var inp = prompt("Enter Some Text")
//         document.querySelector("#readMore").innerHTML = inp
// }

// Method 2

// Agr para k end sy next text continue krna ho to getPara.innerHTML += inp likhna ho gadc

// function para(){
//         var inp = prompt("Enter Some Text")
//         var getPara = document.querySelector("#readMore")
        
//         getPara.innerHTML += " " + inp
// }


// ----------------------------------------------------------------------------------------------------------------------

// Agr user koi amount add kry to pta chal saky k is m kity hundred hain, kitny 20 hain, kitny 9 hai, aur kitna 1 h

// function calculate(){

        
//         let num = Number(prompt("Enter a number"));
        
//         let hundred = Math.floor(num / 100);
//         num = num % 100;
        
//         let twenty = Math.floor(num / 20);
//         num = num % 20;
        
//         let nine = Math.floor(num / 9);
//         num = num % 9;
        
//         let one = Math.floor(num / 1);
        
        
        
//         document.getElementById('cal').innerHTML = ([hundred, twenty, nine, one]);
// }

// -----------------------------------------------------------------------------------------------------------------

// Eidul Adha main kitny days baqi hain

// let eidDate = new Date("28 May 2026");

// let today = new Date();

// let diff = eidDate - today;

// document.writeln(Math.ceil(diff/(1000 * 60 * 60 * 24)))

// ____________________________________________________________________________________________________________

// Q No 1
// User se 2 numbers input lo (prompt) aur unka substraction, multiplication aur division display kro.

// let num1 = +prompt("Enter Number 1");
// let num2 = +prompt("Enter Number 2");

// document.writeln(`
//         The Sum of ${num1} and ${num2} is ${num1 + num2} <br>
//         The Substraction of ${num1} and ${num2} is ${num1 - num2} <br>
//         The Multiplication of ${num1} and ${num2} is ${num1 * num2} <br>
//         The Division of ${num1} and ${num2} is ${num1 / num2} <br>
//         The Modulus of ${num1} and ${num2} is ${num1 % num2} <br>
//         `)

// ---------------------------------------------------------------------------------------------------------------

// Q No 2

// Ek Program likho jo check kare ke diya gya number even hai ya odd

// let num = +prompt("Enter Your Number")

// if(num%2 === 0){
//         alert("Your Number is Even")
// }
// else {
//         alert("Your Number is Odd")
// }

// ---------------------------------------------------------------------------------------------------------------
// Q No 3

// User se age input lo aur check kro ko woh voting k liy eligible hai ya Nahi (18+)

// let age = +prompt("Enter Your Age");

// if(age >= 18){
//         alert("Your are eligible for Voting")
// }
// else{
//         alert("Your are not eligible for voting")
// }

// -------------------------------------------------------------------------------------------------------------

// Q No 4
// Ek Array banao jisme 5 numbers hon, aur unka total sub calculate kro using loop

// let array = [1,2,3,4,5];

// let total = 0;

// for(i=0; i<array.length; i++){
//         total += array[i]
// }

// alert(total)

// ------------------------------------------------------------------------------------------------------------

// Q No 5

// User sy ak string lo aur check karo ke woh palindrome hai ya nahi

// let str = prompt("Enter Any Word");

// let reverse = str.split('').reverse().join('');

// if(str === reverse){
//         alert("Your Word is Palindrome")
// }
// else{
//         alert("Your word is not a Palindrome")
// }

// -------------------------------------------------------------------------------------------------------------

// Q NO 6
// Ek function banao jo 3 numbers main se largest number return kare

// let num1 = +prompt("Enter Number 1")
// let num2 = +prompt("Enter Number 2")
// let num3 = +prompt("Enter Number 3")

// function number(){
//         if(num1 > num2 && num1 > num3){
//                 return num1;
//         }
//         else if(num2 > num1 && num2 > num3){
//                 return num2;
//         }
//         else if(num3 > num1 && num3 > num2){
//                 return num3;
//         }
// }

// document.writeln(number())


// or

// function findLargestNumber(a,b,c){
//         if(a > b && a > c){
//                 return a;
//         }
//         else if(b > a && b > c){
//                 return b;
//         }
//         else if(c > a && c > b){
//                 return c;
//         }
// }

// let result = findLargestNumber(20,25,19)

// document.writeln(result)
// ----------------------------------------------------------------------------------------------------------

// Q No 7

// 1 se 20 tak numbers print karo lekin sirf even show karo (loop use kro)

// for(i=1; i<=20; i++){
//         if(i % 2 == 0){
//                 document.writeln(i + "<br>")
//         }
// }

// 1 se 20 tak numbers print karo lekin sirf odd show karo (loop use kro)

// for(i=1; i<=20; i++){
//         if(i % 2 !== 0){
//                 document.writeln(i + "<br>")
//         }
// }

// -------------------------------------------------------------------------------------------------------------

// Q No 8

// Ek program likho jo kisi bhi numbers ka factorial calculate kry

// let number = +prompt("Enter Your Number")

// let factorial = 1;

// for(i=1; i<=number; i++){
//         factorial *= i;
// }

// alert(`The factorial of ${number} is ${factorial}`)

// ------------------------------------------------------------------------------------------------------------------

// Q No 9
// Ak array m 5 No store kro aur unko reverse order m store kro

// let array = [10,20,30,40,50];

// let reverse = array.reverse();

// document.writeln(reverse)

// ------------------------------------------------------------------------------------------------------------

// Q No 10

// User se password lo aur check kro agar 8 characters sy kam hai to Weak Password warna strong Password

// let password = prompt("Enter Your Password");

// if(password.length > 8){
//         alert("Strong Password")
// }
// else{
//         alert("Weak Password")
// }

// ----------------------------------------------------------------------------------------------------------------

// Object
// Object created using curly brackets


// let obj = {
//         id : 1,
//         fname : "Malik Shan",
//         lname : "Maqbool"
// }

// console.log(obj.fname)
// console.log(obj.lname)

// or 2nd Method is

// console.log(obj['fname'])

// Sab cheezain ak sath print krny k liy
// // for in ka loop sirf object py chalta hai

// for(var key in obj){
//         document.writeln(`${key} : ${obj[key]} <br>`)
// }

// Characteristics of Object

// Objects accepts every data type
// String
// number
// Array
// function
// another object

// Add Array in object

// let obj = {
//         id: 1,
//         fname : "Malik Shan",
//         lname : "Maqbool",
//         chars : ["Student", "Good Boy", "Healthy Man"]
// }
// document.writeln(obj["chars"].join("<br>"))  

// Add function in object

// function nahi likhty, function ka name likhty hai

// let obj = {
//         id: 1,
//         fname : "Malik Shan",
//         lname : "Maqbool",
//         arr : ["Student", "Good Boy", "Healthy Man"],
//         qualities : function(){
//                 alert("He is a Good Man of Good Deeds")
//         }
// }

// obj.qualities()

// Add object in object

// let obj = {
//         id : 1,
//         fname : "Malik Shan",
//         lname : "Maqbool",
//         arr : ["Student", "Good Boy", "Healthy Man"],
//         qualities : function(){
//                 alert("He is a Good Man with Good Deeds")
//         },
//         myIntro : {
//                 "Name" : "Malik Shan",
//                 "Age" : "28",
//                 "Mobile No" : "03321905316"
//         }
// }

// for(let key in obj.myIntro){

// document.writeln(`${key} : ${obj.myIntro[key]} <br>`)
// }

// To Print the whole object

// for(let key in obj){
//         document.writeln(`${key} : ${JSON.stringify(obj[key])} <br>`)
// }

// Is main function undefined aa rha hai isko seekhna hai

// **********************************************************************************************************************************

// 2nd Mehtod of Object

// object constructor (created by using round brackets ()) i.e new Object()

// let stars = new Object()

//         stars.id = "01"
//         stars.name = "Salman Khan"

// for(let key in stars){
//         document.writeln(`${key} : ${stars[key]} <br>`)
// }

// Task

// 3 objects in object

// let cars = {
//         Toyota : {
//                "Name" : "Corolla",
//                "Model" : "2026",          
//                "Color" : "Black",         
//                "Price" : "50 Lac",         
//         },
        
//         Suzuki : {
//                "Name" : "Swift",
//                "Model" : "2026",         
//                "Color" : "Black",         
//                "Price" : "50 Lac",         
//         },

//         Honda : {
//                "Name" : "Civic",
//                "Model" : "2026",         
//                "Color" : "Black",         
//                "Price" : "50 Lac",         
//         }
// }

// for (let key in cars) {
//     document.writeln(`
//         ${key} <br>
//         Name : ${cars[key].Name} <br>
//         Model : ${cars[key].Model} <br>
//         Color : ${cars[key].Color} <br>
//         Price : ${cars[key].Price} <br><br>
//     `);
// }

