const questions =[
    {
        question: "Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girraffe",correct:false},
        ]
    },{
        question: "Which is the largest land animal?",
        answers:[
            {text:"Elephant",correct:true},
            {text:"Blue Whale",correct:false},
            {text:"Shark",correct:false},
            {text:"Girraffe",correct:false},
        ]
    },{
        question: "Which is the fastest land animal?",
        answers:[
            {text:"Elephant",correct:false},
            {text:"Blue Whale",correct:false},
            {text:"Cheetah",correct:true},
            {text:"Girraffe",correct:false},
        ]
    },{
        question: "Which is the largest bird in the world?",
        answers:[
            {text:"Elephant",correct:false},
            {text:"Blue Whale",correct:false},
            {text:"Cheetah",correct:false},
            {text:"Ostrich",correct:true},
        ]
    }
];

const questionElemment=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElemment.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        
}});
}

function resetState() {}
    nextButton.style.display= "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct==="true";
        if (isCorrect) {
            selectedButton.classList.add("correct");
            score++;
        } else {
            selectedButton.classList.add("incorrect");
        }
    
    }

startQuiz();