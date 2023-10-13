import inquirer from "inquirer";

let todo:string[] =[];  // array for storing data
let loop = true;        // loop condition value. True while the user not set it as false to exit the process.

while(loop){
    const answer:{  // here answer is an object
        TODO: string,
        addmore: boolean
    } = await inquirer.prompt([{ 
        // input from the user for adding the data into the to-do list.
        type: 'input',
        name: 'TODO',
        message: 'What do you want to add in your to-do-list: '
    },
    { // input from the user for condition: checking if he wants to add more list or not?
        type: 'confirm',
        name: 'addmore',
        message: 'Do you want to add more to-do-list ?',
        default: false // if user just enter then the loop will not run as the defualt value is false.
}])
const {TODO,addmore} = answer; // de-structuring the object. 
console.log(answer); // consoling the entered data
loop = addmore // pasing the value "addmore: boolean (default=false)"
if(TODO){
    todo.push(TODO); // pushing values into array.
}
else{
    console.log("Invalid input!!!");
}
}


// if else condition checking weather the array has any data or not.
if(todo.length>0){
    console.log("Your todo list: ");
    todo.forEach(todo => { // fo each loop checking the every sinle element of array.
        console.log(todo); // consoling the array data.  
    });
}
else{
    console.log("No todo list created yet! ");
}