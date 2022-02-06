var start = document.querySelector('#start');
var timerEl = document.getElementById('timer');
var qContainer = document.getElementById('questionsContainer');
var questionEl = document.getElementById('question');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');
var scoreEl = document.getElementById('scorecard');
var index = 0;
var timeLeft = 30;
var score = 0;

var questions= [
    {
        question: "Which symbol is an example of a JavaScript Assignment Operator?",
        answerA: "A) !",
        answerB: "B) $",
        answerC: "C) =",
        answerD: "D) %",
        correct: "C",
    }, {
        question: "Function (_____) are the values received by the function when it is invoked(called)?",
        answerA: "A) variables",
        answerB: "B) arrays",
        answerC: "C) booleans",
        answerD: "D) arguments",
        correct: "D",
    }, {
        question: "JSON is an acronym that stands for:",
        answerA: "A) Java Subject Oriented Node",
        answerB: "B) JavaScript Object Notation",
        answerC: "C) Java Sequenced Object Notation",
        answerD: "D) Java Script Oriented Node",
        correct: "B",
    }, {
        question: "When variables or values are equal in value and type we use this operator to represent that:",
        answerA: "A) ===",
        answerB: "B) ==",
        answerC: "C) =",
        answerD: "D) !==",
        correct: "A",
    }
];

    

function startQuiz () {
    questionShows()
    timerStarts()
}

function timerStarts() {
    var timeInterval = setInterval(function(){
        qContainer.classList.remove('hide');
        start.disabled = true;
        
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = "Let's see how you did!";
            clearInterval(timeInterval);
            endQuiz()
        }

        if(index >= questions.length) {
            clearInterval(timeInterval)
            endQuiz()
        }
    }, 1000);
}

function questionShows() {
    document.getElementById('question').innerHTML = questions[index].question;
    document.getElementById('A').innerHTML = questions[index].answerA;
    document.getElementById('B').innerHTML = questions[index].answerB;
    document.getElementById('C').innerHTML = questions[index].answerC;
    document.getElementById('D').innerHTML = questions[index].answerD;
}

var correctAnswer1 = questions[0].correct;
var question1 = questions[0];
var state = questions.answersList;

function checkAnswerAndGoForth (event) {
    var pickedChoice = event.target.id
    if(pickedChoice == questions[index].correct) {
        scoreEl.textContent = 5 + score;
        score += 5;
        
        console.log("correct")
    }else {
        console.log("incorrect")
        
        timeLeft -= 2;
    }
    index++;
    if(index < questions.length) {
        questionShows();
    }
}

var scoreValue= scoreEl.textContent;
var highScoreContainer = document.getElementById("highScoreContainer");
var addInitials = document.createElement("li");
var initialsAndScore = document.createTextNode(initials + " " + score);

function initialsPrompt(){
     highScoreContainer.classList.remove('hide'); 
}

var initials = document.querySelector("#initials");

function send(){
    console.log(initials.value);
    var arrOfScores = JSON.parse(localStorage.getItem("scoresInitials")) || [];
    var scoreValue = "Name: " + initials.value + " Score:"+" " +  score;
    
    arrOfScores.push(scoreValue);
    localStorage.setItem("scoresInitials", JSON.stringify(arrOfScores));
}

function endQuiz() {
    initialsPrompt();
    // playAgain();
    qContainer.classList.add('hide');
    
    // start.disabled = false;
    
        
    
    // }
}

function playAgain(){
        document.location.reload();
}

document.getElementById("playAgain").addEventListener("click", playAgain);


document.getElementById("start").addEventListener("click", startQuiz);
document.getElementById('A').addEventListener("click", checkAnswerAndGoForth)
document.getElementById('B').addEventListener("click", checkAnswerAndGoForth)
document.getElementById('C').addEventListener("click", checkAnswerAndGoForth)
document.getElementById('D').addEventListener("click", checkAnswerAndGoForth)

// var submit = document.getElementById("submit");
// var rankedList = document.getElementById("rank");


// function getInitials() {
    // var initials = document.getElementById("initials");
    // console.log(initials.value);
    
// } 

// function inputChange(event){
//     console.log(document.getElementById("initials").value);
// }







// function storeInitials(){
//     var savedAndStored = JSON.parse(localStorage.getItem("user"));
//     if (savedAndStored !== null){
//         document.getElementById("rank").innerHTML = savedAndStored.initials;
//     } 
// }

// submit.addEventListener("click", function(event){
//     event.preventDefault();
//     saveInitials();
//     storeInitials();
// });

// function init(){
//     storeInitials();
// }
// init();





// save.addEventListener("click", function(event){
//     event.preventDefault();
//     storeScore();
//     saveLast();
// });

// function saved() {
//     var inSaved = initialsSave();
    // var k = document.getElementById("highScore");
//     k.value = inSaved;
// }

// var saveTo = getElementById("highScoreContainer");








    



















