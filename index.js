/* Learning console.log(), vars and functions */
//Prints on the console
//console.log("Hello World")
//console.log("Hello World")

//A var defined by a let command is not typed, so we can set it to anything
let myVariable = "Hello World"
console.log(myVariable)

//number
myVariable = 10
console.log(myVariable)
//boolean
myVariable = true
console.log(myVariable)
//undefined var
let myEmpty
console.log(myEmpty) 

//A const var cannot be changed so it will caused an error
const myConst = true
//myConst = false
console.log(myConst)

//Normal function - reusable set of script that we can call again and again
function myFunction() {
    console.log("Hello World")
}
//Function calls
myFunction()
myFunction()
//Prints the function so a function is like a var
console.log(myFunction)
//Arrow function - can be used inside other functions
const myFunction2 = () => {
    console.log("Hello World")
}
myFunction2() 

/* Manipulating our HTML elements */ 
//By using the windows.onload() function, the script will be running after the whole html body is loaded.
window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    //Change the content of the button
    btn.innerHTML = "Hello"

    //Add interactivity to the button
    //Can use an arrow function directly
    //btn.onclick = () => {
    //    console.log("Clicked")
    //}
    //Can use an arrow function indirectly
    //const handleClick = () => {
    //   console.log("Clicked")
    //}
    //btn.onclick = handleClick

    //Introducing states - alternating between states using a boolean var.
    let blue = false

    const handleClick = () => {
        if (blue) { //blue is true
           console.log("Blue is true")
           //btn.style = "color: red"
           btn.classList.add("btn-red")
        } else { //blue is false
            console.log("Blue is false")
            //btn.style = "color: blue"
            btn.classList.remove("btn-red")
        }
        blue = !blue  
    }

    btn.onclick = handleClick

    const p = document.getElementById("id-example-1")
    console.log(p) //check to see we got the right element
    console.log(p.classList) //print the element's classes
    //Alter the # of classes in a single element
    p.classList.remove("class-example-2")
    p.classList.add("class-example-2")
}

