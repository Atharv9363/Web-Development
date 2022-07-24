let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter ypur first guess!"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("too high! enter a new guess:");
    }
    
    else{
        guess = prompt("too low! enter a new guess:");
    }    
    
}
if(guess === 'q'){
    console.log("Ok, You Quit!");
}
else{
    console.log("Congrats! You Win!!")
    console.log(`You got it!! It took you ${attempts} guesses.`);
}
