// This was my initial code to test connectivity of the index.js file, by printing a message that I could see using the Chrome dev tools, inspect feature console.log("Hello from index.js!"); In this file I will attempt to write the code that will make this game an actual game, with the use of JavaScript functionality.

const holes = document.querySelectorAll(".hole");

let score = document.querySelector(".score");

let timer = document.querySelector(".timer");

let time = 45;
let hitPosition;
let result = 0;


// The code on lines (13-29) have been commented out, because as per Luke's instructions we were NOT to use the forEach method as it had not been covered in class. I started to attempt to use it because I wanted to see the finshed product. Unfortunately, I could not see the porject to the end with an alternative loop to the forEach method. 


// function randomBox () {
//   holes.forEach(square => square.classList.remove("mole"))

//    let randomPosition = holes[Math.floor(Math.random() * 9)]
//    randomPosition.classList.add("mole") 
//    hitPosition = randomPosition.id 


// }
// let interval = setInterval(randomBox, 700);

// holes.forEach(square => square.addEventListener("mousedown", function() {
//   if (square.id === hitPosition) {
//     result++;
//     score.textContent = result;
//   }
// }))

// function timeLeft () {
//   timer--;
//   time.textContent = timer
//   if (timer === 0 ) {
//     prompt("Your game is over!");
//     clearInterval(interval)
//     clearInterval(timeLeft)
//   }
// }

// setInterval(timeLeft, 1000);