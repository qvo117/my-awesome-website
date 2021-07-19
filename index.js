//console.log("Hello World")
//let myVariable = "Hello World"
//console.log(myVariable)

//myVariable = 10
//console.log(myVariable)

//function myFunction() {
    //console.log("Hello World")
//}

//myFunction()


//const myFunction2 = () => {
    //console.log("Hello World")
//}

//let myVariable = true
//myVariable = false
window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "World"

    let blue = false

   

    const handleClick = () => {
        if (blue) {
            console.log("Blue is true")
            btn.classList.add("btn-red")
        } else{
            console.log("Blue is false")
            btn.classList.remove("btn-blue")
        }
        blue = !blue
        
    }

    btn.onclick = handleClick

    const p = document.getElementById("id-example-1")
    console.log(p)

    console.log(p.classList)
    p.classList.remove("class-example-2")
    p.classList.add("class-example-2")
}

