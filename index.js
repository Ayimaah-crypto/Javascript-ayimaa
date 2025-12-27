// function increment() {
//     console.log("number has been increased")
// } 

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// function increment() {
//     lapsCompleted = lapsCompleted + 1
// }
// Run it three times
// increment()
// increment()
// increment()



// console.log(lapsCompleted)

// let count = 0
// console.log(count)

// function increment() {
//     count = count + 1
//     document.getElementById("count-el").innerText = count
// }
// increment()

// let countEl = document.getElementById("count-el")
// console.log(countEl)


// let count = 0 
// function increment() {
// count = count + 1
// countEl.innerText = count
// console.log()
// }
// increment()

// function save() {
    
//     console.log(count)
// }
// save()

// let welcomeEl = document.getElementById("welcome-el")


// // Create two variables (name & greeting) that contains your name
// let name = "Theodora"
// let greeting = "Hi!, I am "
// // and the greeting we want to render on the page

// // Render the welcome message using welcomeEl.innerText
// let finalGreeting = greeting + name

// function wel() {
    
//     welcomeEl.innerText = finalGreeting
//     welcomeEl.innerText += "!"
//     console.log()
// }
// wel()

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")

// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }
//  let entries = count + " - "
// function save() {
    
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
   
//     // 3. Render the v ariable in the saveEl using innerText
    
//     saveEl.innerText += entries
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// my achievemnet
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0 
function increment() {
    count = count + 1 
    countEl.innerText = count
    console.log()
}
increment()


function save() {
   saveEl.innerText += " " + count * 2 
   console.log()
}
save()