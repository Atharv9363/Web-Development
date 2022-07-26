//============== Try and Catch ==============
//they go together and they have to do with errors or exceptions in JavaScript specifically, they have to do with catching errors and preventing them from breaking or or stopping the execution of our
//code.Sometimes you might anticipate this could go wrong.There might be an error here, and if there is, I want to grab it and stop it from propagating outwards
//and crashing everything.

//hello.toUpperCase();  //Writing only this will give an error so we put it in try and catvh block
try{
    hello.toUpperCase();
}
catch{
    console.log("ERROR!!!");
}

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        console.log('Please pass a string next time!');
    }
}