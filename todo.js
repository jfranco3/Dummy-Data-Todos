



let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {

    //start for loop here
    for (i=0; i < arrayOfTodos.length; i++) {  

    let toDos = document.getElementById("todo-list")

    let toDoList = document.createElement("LI")

    let toDoTextNode = document.createTextNode(arrayOfTodos[i].title) //first title

    toDoList.appendChild(toDoTextNode)  //<li>first title</li>
    
    toDos.appendChild(toDoList)

}//end loop here 

} //end fxn

function clearTodos () {
    //do it like i did for Tic Tac Toe


const todos = document.getElementsByTagName("OL"); 

//loops over the html collection of IDs and clear out the Xs and Os 
for (i=0; i < todos.length; i++) {

    //will log out the id of each square as it loops over them.
    console.log(todos[i].id);

    //sets the innerHTML to null to replace the "X" or "O"
    todos[i].innerHTML=null;
    }
}

function filterById () {
    //const filterById = () => {   *means exactly the same thing as function filterById () {*

    let toDos = document.getElementById("todo-list")

    let num= document.getElementById("number_input").value

    //filter the array
    //const result = words.filter(word) => word.length > 6);
    let filteredArray = arrayOfTodos.filter(array => array.userId ==num) //****add completed is false****

    
    for ( let i = 0; i < filteredArray.length; i++) {


        //createElement to make a new LI
        let toDoList = document.createElement("LI")

        //createTextNode inside the li using the title property
        let toDoTextNode = document.createTextNode(filteredArray[i].title)

        //now append the text to the new element
        toDoList.appendChild(toDoTextNode)

        //then append the element to the ol element
        toDos.appendChild(toDoList)
    }
}




//NEW function to filter by userId and completed

//filter the array where the userId = input num and completed = true
//let filteredArray = arrayOfTodos.filter(array => array.userId --num && array.completed -- true)

function filterById () {

    let toDos = document.getElementById("todo-list")

    let num= document.getElementById("number_input").value

    //filter the array
    //const result = words.filter(word) => word.length > 6);
    let filteredArray = arrayOfTodos.filter(array => array.userId ==num) //****add completed is false****

    
    for ( let i = 0; i < filteredArray.length; i++) {


        //createElement to make a new LI
        let toDoList = document.createElement("LI")

        //createTextNode inside the li using the title property
        let toDoTextNode = document.createTextNode(filteredArray[i].title)

        //now append the text to the new element
        toDoList.appendChild(toDoTextNode)

        //then append the element to the ol element
        toDos.appendChild(toDoList)
    }
}





//// Start with getting just the first item and its title property.
//// Then capture the ol item into a variable (getElementById)
//// createElement to make a new LI
////createTextNode inside the li using the title property.
//// Now append the text to the new element
//// Then append the element to the ol element.
//// Put all of that inside your populateTodos function.
//// git status, add, commit, push
// Now that you have one element created and showing up on the screen, put the same code inside a for loop and iterate over the length of the array. But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)

//for (initialize for your counter; how long loop will run; increment counter) { }

// for (i=0; i < arrofNums.length; i++) {  