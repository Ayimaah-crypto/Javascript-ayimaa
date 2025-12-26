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

let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0 
function increment() {
count = count + 1
countEl.innerText = count
console.log()
}
increment()

function save() {
    
    console.log(count)
}
save()