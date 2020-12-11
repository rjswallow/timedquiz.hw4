// set variables

// 
var startBtnEl = document.querySelector("#startBtn");
var testEl = document.getElementById("test");
let questionNumber = 0;


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

function newQuestion() {
let currentQ = myQuestions[questionNumber]
document.getElementById("question").textContent = currentQ.question
document.getElementById("answer1").textContent = currentQ.answers[0]
document.getElementById("answer2").textContent = currentQ.answers[1]
document.getElementById("answer3").textContent = currentQ.answers[2]
document.getElementById("answer4").textContent = currentQ.answers[3]
}

questionsarray;
let myQuestions = [
    {
        question: "Bulbasaur is a grass type pokemon. Bulbasaur is weak against fire. Which attack would be super effective?",
        answers: [
         "Flamethrower",
         "Watergun",
         "Thunderbolt",
         "Growl",
        ],
        correctAnswer: "Flamethrower"
    },
    {
        question: "Charmander is a fire type pokemon. Charmander is weak against water. Which attack would be super effective?",
        answers: [
             "Flamethrower",
             "Watergun",
             "Thunderbolt",
             "Growl",
    ],
        correctAnswer: "Watergun"
    },
    {
        question: "Squirtle is a water type pokemon. Squirtle is weak against electricity. Which attack would be super effective?",
        answers: [
            "Flamethrower",
            "Watergun",
            "Thunderbolt",
            "Growl",

        ],

        correctAnswer: "Thunderbolt"
    }
];

