// function myName(){
//     console.log("AT");
//     console.log("ha");
//     console.log("rv");
// }
// myName()

// function greet(firstName){
//     console.log(`Hey there, ${firstName}`);
// }

// function greet1(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes){
//     let result = '';
//     for(let i=0; i<numTimes; i++){
//         result += str;
//     }
//     console.log(result);
// }


//================ Function Scope ==================
// function add(x,y){
//     let sum = x + y;
//     return sum; //return just not only print the value it also stops the execution of the function block...
// }

// function helpMe(){
//     let msg = "I'm on fire!";  //msg is scoped to the helpMe function
//     msg; 
// }
// msg; ///not defined!

// let bird = 'madarin duck';
// function birdWatch(){
//     let bird = 'Golden Pheasant';   //bird is scoped to birdWatch function
//     bird; //golden pheasant
// }
// bird; //manadain duck

//=================== Block Scope =====================
// let radius = 8;
// if(radius > 0){
//     const PI = 3.14;
//     let circ = 2* PI * radius;   //PI and circ are scoped to the block
// }
// console.log(radius); //8
// console.log(PI); //not defined
// console.log(circ); //not defined

// //================= Lexical Scope ======================
// function bankRobbery(){
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Aquaman'];
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`Please Help Us, ${hero.toLocaleUpperCase()}.`);
//         }
//     }
//     cryForHelp();
// }

//================== Function Expressions ==================
// const add = function(x,y){ //Javasript considers function just like a value
//     return x+y;
// } 

//=================== Higher order Functions ================
//Higher Order Functions : Functions that operate on/ with functions.
//They can : ==> Accept other functions as arguments.
//           ==> Return a function.

//1. Accept other functions as arguments
// function callTwice(func){
//     func();
//     func();
// }
// function callTenTimes(f){
//     for(let i=0; i<10; i++){
//         f();
//     }
// }
// function rollDice(){
//     const roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

//2. Return a function
// function makeMysteryFunc(){
//     const random = Math.random();
//     if(random > 0.5){
//         return function(){
//             console.log("Congrats, I am a Good Function!");
//             console.log("You win a million dollars!");
//         }
//     }
//     else{
//        return function(){
//         alert("You have been infected!!");
//        } 
//     }
// }

// function makeBetweenFunc(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

//=============== Methods =================
// We can add functions as properties on objects we call them methods.
// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;     //We do this often that there's a new shorthand way of adding methods.
//     },
//     cube: function(num){
//         return num**3;
//     }
// }
            //Or
// const myMath ={
//     PI: 3.14159,
//     square(num){
//         return num*num;
//     },
//     cube(num){
//         return num ** 3;
//     }
// }

//=============== this keyword =================
const cat = { 
    name : 'Blue Steele',
    color: 'grey',
    breed: 'Scotish fold',
    meow(){
        console.log("This is:", this);
        console.log(`${this.name} says MEOWWWW`);
    }
}
const meow2 = cat.meow;
