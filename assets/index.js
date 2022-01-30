var start = document.querySelector('#start');
var timerEl = document.getElementById('timer');

var qContainer = document.getElementById('questionsContainer');
var questionEl = document.getElementById('question');
var answerA = document.getElementById('A');
var answerB = document.getElementById('B');
var answerC = document.getElementById('C');
var answerD = document.getElementById('D');
var options =document.getElementById('answers') ;
var index = 0;



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
        options: { A: "A) variables", B: "B) arrays", C: "C) booleans", D: "D) arguments", },
        correct: "D",
    }, {
        question: "JSON is an acronym that stands for:",
        options: { A: "A) Java Subject Oriented Node" , B: "B) JavaScript Object Notation" , C: "C) Java Sequenced Object Notation" , D: "D) Java Script Oriented Node" , },
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


document.getElementById("start").addEventListener("click",function(){
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = "Let's see how you did!";
            clearInterval(timeInterval);
        }
    }, 1000);
 
});

var questionsIndex = 0;

var qAndAsShown = 
 document.getElementById("start").addEventListener("click",function(){
    document.getElementById('question').innerHTML = questions[index].question;
    document.getElementById('A').innerHTML = questions[index].answerA;
    document.getElementById('B').innerHTML = questions[index].answerB;
    document.getElementById('C').innerHTML = questions[index].answerC;
    document.getElementById('D').innerHTML = questions[index].answerD;
});

var userChoice = document.getElementById("answers");
var answersList = document.querySelectorAll("#A, #B, #C, #D");
var answersArray = [...answersList]

userChoice.addEventListener("click", function(event){
    var element = event.target;

    if (element.matches(".answer")){
        var state = questions.answersList;
        
        if (state == questions.correct) {
            console.log('correct answer')
        } 
    }
});



// function showQuestions() {
//     if (index >= questions.length) 
//     return;
//     var show =document.getElementById("question");
//     var qAdd = questions[index];
//     show.innerHTML = qAdd.answers;
//     showQuestions.innerHTML= qAdd;
//     Object.entries(qAdd.options).forEach(([letter,text])=>{
//         var answers = document.getElementById(letter);
//         answers.innerHTML = text
//         answers.dataset.correct = qAdd.correct === letter;
//     })
//     index++;
// }

// showQuestions();

//this will check answers
// document.getElementById("answers").addEventListener("click", function(e) {
//     const tgt = e.target;
//     if (tgt.type && tgt.type === "button") {
//       document.getElementById("result").innerText = tgt.dataset.correct === "true" ? "Correct" : "Incorrect"
//     }
//   })

// var quizClicks = document.getElementById('A','B','C','D');

// quizClicks.addEventListener('click',function(event){
//     var element = event.target;
//     if (element.matches(".answer")){

//     }
// })
                




// function clickable(){
//     var correctChoice = questions[index].correct;
    
// }



// var start = document.getElementById('start');
//  start.addEventListener("click",function () {
//         console.log('clicked');
// });


// function startQuiz() {
//     if (){}
// }


// startTimer();
// start.addEventListener("click", questionsCalled);

//from line 43: // function startTimer() {



// startButton();
// function startButton(){
//     document.querySelector("startButton");{   
// }
// for (var i = 0; i < questions.length;i++){
//     questions[i].setAttribute("style", "color:green; font-size: 22px")
// }














