// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=0; i<=20; i+=2){
//     console.log(i);
// }

// for(let i=100; i>=0; i-=10){
//     console.log(i);
// }

// for(let i=10; i<=1000; i*=10){
//     console.log(i);
// }

//Nested loops
// for(let i=1; i<= 10; i++){
//     console.log(`i is: ${i}`);
//     for(let j=1; j<4; j++ ){
//         console.log(`       j is: ${j}`);
//     }
// }

// const seatingChart =[
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geofery', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Sasuke', 'Itachi']
// ]

// for(let i=0; i<seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i+1}`)
//     for(let j=0; j<row.length; j++){
//         console.log(row[j]);
//     }
// }



//============== While loop ==============
// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count);
// }

// const SECRET = "Naruto";

// let guess = prompt("Enter the secret code...");
// while(guess !== SECRET){
//     guess = prompt("Enter the secret code...");
// }
// console.log("Congrats You got the secret!!!")

// let input = prompt("Hey say something");
// while(true){
//     input=prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok you win");

// ============ For...of loop ===========
// const seatingChart =[
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geofery', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Sasuke', 'Itachi']
// ]

// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }

// for(let char of "hello world"){
//     console.log(char);
// }

// ============== Iterating over objects ============
const testScores ={
    keenan : 80,
    damon : 86,
    kim : 97,
    shawn : 87,
    marlon : 76,
    nadia : 78,
    vonnie : 74
}

// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`)
// }

//Total : 
// let total = 0;
// for(let score of Object.values(testScores)){
//     total += score;
// }

//
let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}
console.log(total / scores.length);