// solution 1
// var age =Number(prompt('Enter your age'))
// if(age>=60){
//     console.log("You are senior citizen.")
// }
// else if(age >=18 && age<60) {
//      console.log("You are adult.")
// }
// else{
//   console.log("you are minor.")
// }

// solution 2
// var no1= Number(prompt("Enter first number."));
// var no2= Number(prompt("Enter second number"));
// var sum=no1+no2;
// if(sum% 2 == 0){
//   console.log("sum is even i.e is", sum)
// }
// else{
//   console.log("sum is odd i.e is",sum)
// }

// solution 3

// var letter= prompt("enter any character")
// var ch=['a','b','c','d','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var upcase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// ch.forEach(element => {

//   if(element == letter){
//     console.log(letter,"is lowercase")
//   }

//   else{

//     upcase.forEach(element => {
//       var result;

//       if(element == letter){
//         console.log(letter,"is uppercase")
//       }
//       else{
//         result=letter;
//       }
//       if(result != null){
//         console.log(result,"ihih")
//       }

//     });

//   }

// });

// solution 4
// var no1= Number(prompt("enter first number"))
// var no2= Number(prompt("enter second number"))
// var no3=Number(prompt("enter three number"))
// var res=(no1>no2 && no1>no3 )? no1 : (no2>no3 ? no2 : no3) ;
// console.log("Greates number is ",res);

// solution 5

//solution 6
// var no1= Number(prompt("enter first number"))
// var no2= Number(prompt("enter second number"))
// var no3=(prompt("enter operation"))

// if(no3=='+'){
//   console.log("sum of number is ", no1+no2)
// }
// else if(no3=='-'){
//   console.log("Difference of number is ", no1-no2)
// }
// else if(no3=='*'){
//   console.log("Multiply of number is ", no1*no2)
// }
// else{
//   console.log("sum of number is ", no1/no2)
// }

//solution 7
// var number=Number(prompt("enter any number"))
// console.log(number > 0? "Positive number": (number==0 ? "Entered no. is Zero" : " Negative number"));

//solution 8
// var time= Number(prompt("enter time in HR.MIN format"))
// var meridian = prompt("enter time meridian");
// var uname= prompt("Enter your name")
// var greet;
// if(meridian=="am" || meridian == "AM"){
//     greet="Good morning."
//      if(time>=5 && time < 12){
//           greet="Good morning."
//      }

//   else
//   {
//      greet="Good NIGHT."
//   }

// }

// else{

//   if((time>=12.00  && time <= 12.59) || (time>=1.00  && time < 5) ){
//     greet="Good Afternoon"
//   }
//   else if(time>=5 && time <9){
//     greet="Good Evening"
//   }
//   else if( (time>=9.00  && time < 12) ){
//      greet="Good Night"
//   }

//   else{
//     greet="you are died, bro!"
//   }
// }

// console.log(greet,uname);

//solution 9

// var color= prompt("what is color")
// console.log((color == "red") ? "Red : STOP" :(color== "yellow" ? 'YELLOW: GET READY!' : "Green: Go!"));

//solution 10

// var nu= Number(prompt("Enter any number."))
// for(var i=1; i<11;i++){
//     console.log( `${nu} * ${i} =`,nu * i);

// }


//solution 11

// var marks = Number(prompt("Enter your makrs betwee 0 to 100"))
// var grade;
// if(marks >=90 && marks <= 100)
// {
//  grade= "A"
// }
// else if(marks >=80 && marks <= 89)
// {
//  grade= "B"
// }
// else if(marks >=70 && marks <= 79)
//   {
//    grade= "C"
//   }
// else if(marks >=60 && marks <= 69)
//   {
//    grade= "D"
//   }

//   else{
//     grade= "F"
//   }

// console.log("Score is ",grade)

//solution 12
// var username ="Waris"
// var pass ="123"

// if(username == prompt("Enter username") && pass == prompt("Enter password"))
// {
//   console.log("Login successfull")
// }
// else{
//   console.log("Invalid username or password")
// }


//solution 13
var a=Number(prompt("enter first number"));
var b=Number(prompt("enter first number"));

console.log("Before swapping number is" , a ,b);
b= a+b; 
a=b-a; 
b=b-a; 

console.log("after swapping number is" , a ,b);


