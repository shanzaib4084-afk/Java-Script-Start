// Assignment No 1

// Chapter No 1

// alert("Error! Please enter a valid password.")
// alert("Welcome to JS Land....\nHappy coding");


// alert("Welcome to JS Land.....\nHappy coding")


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





// var a = 5

// var num=1


// document.writeln("Value after variable declaration is:??")
// document.writeln("<br>")
// document.writeln("initial value: " + a)
// document.writeln("<br>")
// document.writeln("Value after increment is: " + ++a)
// document.writeln("<br>")
// document.writeln("Value after addition is: " + (a + 7))
// document.writeln("<br>")
// document.writeln("Value after decrement is: " - (a - --a))


// var cost = 600
// var numberOfTickets = 5
// var totalCost = cost * numberOfTickets

// document.writeln("Total cost to buy " + numberOfTickets + "tickets to a movie is " + totalCost + " PKR")

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

// var num = 5

// num++

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


// Java Script prompt

// prompt("Enter user name", "Shanzaib")

// var msg ="Enter user name"
// var name = "Shanzaib"
// var user = prompt(msg, name)

// document.writeln("<h1>" + "<i>" + (user) + "</i>" + "</h1>")


// document.writeln(typeof(user))

// var test = +prompt
// document.writeln(typeof(test))

// var num1 = +prompt("Enter number 1")
// var num2 = +prompt("Enter number 2")

// var add = num1 + num2
// var sub = num1 - num2
// var mul = num1 * num2
// var div = num1 / num2
// var mod = num1 % num2

// document.writeln(
//         `The sum of ${num1} and ${num2} is ${add} <br>
//          The sub of ${num1} and ${num2} is ${sub} <br>
//          The mul of ${num1} and ${num2} is ${mul} <br>
//          The div of ${num1} and ${num2} is ${div.toFixed(2)} <br>
//          The mod of ${num1} and ${num2} is ${mod} <br>`

// )


// var a =+prompt("Enter Value 1")
// var b =+prompt("Enter Value 2")

// var add = (a+b)
// var sub=(a-b)
// var mul=(a*b)
// var div=(a/b)
// var mod=(a%b)

// document.writeln(`
//         The Addition of ${a} and ${b} is ${add} <br.>
//         The Subtraction of ${a} and ${b} is ${sub}<br>
//         The Multiplication of ${a} and ${b} is ${mul}<br>
//         The Division of ${a} and ${b} is ${div.toFixed(2)}<br>
//         The Modulus of ${a} and ${b} is ${mod}<br>
        
//         `)

// Template Literals

// We use tilt or backtick instead of using plus sign everytime

// var firstName = "Shan"
// var lastName = "Zaib"

// document.writeln(`My First Name is <h1>${firstName}</h1> and My Last Name is <h1>${lastName}</h1>`)


// if,else

// var username ="Shanzai"

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



