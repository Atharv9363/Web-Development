let input = prompt("What would you like to do?");
 const todos = ['CollectChicken eggs', 'Clean litter box'];
while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        console.log('**************');
        for(let i=0; i<todos.length; i++ ){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**************');
    }else if(input === 'new'){
        const newTodo = prompt('Ok, What is the new todo?');
        todos.push(newTodo);
        console.log(`$(newTodo) added to the list!`);
    }else if(input === 'delete'){
        const index = parseInt(prompt('OK, enter an index o delete:'));
        if(!Number.isNaN(index)){
            const deleted = todos.slice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log('Unknown index')
        }
    }
    input = prompt("What would you like to do?");
}
console.log("OK YOU QUIT THE APP");