// set variables
var startBtnEl = document.querySelector("#startBtn");
var testEl = document.getElementById("test");


// function to start timer and count down
function start() {
    var counter = 30;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('sorry, out of time');
            clearInterval(counter);
        }
    }, 1000);

};

// function to hide start button when clicked
function hide() {

    if (testEl.style.display === "none") {
        testEl.style.display = "block";
    } else {
        testEl.style.display = "none";
    }
}

startBtnEl.addEventListener("click", function(){
    hide();
    start();

})

// function myFunction() {
//     var x = document.getElementById("test");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }



// questions array
// let myQuestions = [
//     {
//         question: "Bulbasaur is a grass type pokemon. Bulbasaur is weak against fire. Which attack would be super effective?",
//         answers: {
//             a: "Flamethrower",
//             b: "Watergun",
//             c: "Thunderbolt",
//             d: "Growl"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Charmander is a fire type pokemon. Charmander is weak against water. Which attack would be super effective?",
//         answers: [
//             a: "Flamethrower",
//             b: "Watergun",
//             c: "Thunderbolt",
//             d: "Growl"
//         ]
//         correctAnswer: "b"
//     },
//     {
//         question: "Squirtle is a water type pokemon. Squirtle is weak against electricity. Which attack would be super effective?",
//         answers: [
//             "Flamethrower",
//             "Watergun",
//             "Thunderbolt",
//             "Growl"
//         ],
//         correctAnswer: 2
//     }
// ];

