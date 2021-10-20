/**
 * Data for QuizApp
 */

let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Robbie Williams",
        "answer2": "Lady Gaga",
        "answer3": "Tim Berners-Lee",
        "answer4": "Justin Bieber",
        "rightAnswer": 3
    },
    {
        "question": "Was bedeutet das HTML <a> Tag?",
        "answer1": "fetter Text",
        "answer2": "Ein Container",
        "answer3": "Ein Link",
        "answer4": "kurisver Text",
        "rightAnswer": 3
    },
    {
        "question": "Wie bindet mann eine Website in eine Website ein?",
        "answer1": "<iframe>, <frame>, <frameset>",
        "answer2": "<iframe>",
        "answer3": "<frame>",
        "answer4": "<frameset>",
        "rightAnswer": 2
    },
    {
        "question": "Was bedeutet das HTML <a> Tag?",
        "answer1": "fetter Text",
        "answer2": "Ein Container",
        "answer3": "Ein Link",
        "answer4": "kurisver Text",
        "rightAnswer": 3
    },
    {
        "question": "Wie stellt man Text fett dar?",
        "answer1": "<em> Tag",
        "answer2": "<b> Tag",
        "answer3": "<i> Tag",
        "answer4": "<strong> Tag",
        "rightAnswer": 4
    },
    {
        "question": "Welches Atttribut kann man nicht für <textarea> verwenden",
        "answer1": "readonly",
        "answer2": "max",
        "answer3": "from",
        "answer4": "spellcheck",
        "rightAnswer": 1
    },
    {
        "question": "Wie selektierst du alle <a> Elemente die ein 'title' Attribut haben",
        "answer1": "a[title] {...}",
        "answer2": "a>[title]{...}",
        "answer3": "a.title{...}",
        "answer4": "a=title{...}",
        "rightAnswer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer1": "let 100 = rate;",
        "answer2": "let rate = 100;",
        "answer3": "rate = 100;",
        "answer4": "100 = let rate;",
        "rightAnswer": 2
    },
]

/**
 * global variables
 */

let currentQuestion = 0;
let answerCard = document.getElementsByClassName('card');
let correctAnswers = 0;

/** load autmomaticly after DOM is loaded */
function init() {
    insertQuestionAndAnswer();
}

/**
 * Event-Listeners
 */
addEventListener('load', init);
/**Events - click on answerCards */
document.getElementById('answerBox1').addEventListener('click', answerSelection);
document.getElementById('answerBox2').addEventListener('click', answerSelection);
document.getElementById('answerBox3').addEventListener('click', answerSelection);
document.getElementById('answerBox4').addEventListener('click', answerSelection);



function insertQuestionAndAnswer() {
    let questionElement = document.getElementById('questionText');
    let answerElements = document.getElementsByClassName('card-text');

    /**Insert the Question */
    questionElement.textContent = questions[currentQuestion]['question'];

    /**Insert the Answers */
    for (i = 0; i < answerElements.length; i++) {
        answerElements[i].textContent = questions[currentQuestion]['answer' + (i + 1)];        
    }
}





/**function evaluate if selected answer is correct */
function answerSelection() {
    let clickedElementId = this.id;
    lastCharacterofID = clickedElementId.slice(-1);
    let correctAnswer = questions[currentQuestion]['rightAnswer'];
    let idRightAnswer = 'answerBox'+correctAnswer;
    let backgroundElement = document.getElementById('quizContent');
    
    if(lastCharacterofID == correctAnswer) {
        this.style.backgroundColor ='#7cec7c80';
        backgroundElement.style ='background-image: url("https://acegif.com/wp-content/gif/confetti-4.gif")';
        correctAnswers ++;
    } else {
        this.style.backgroundColor ='#e0153d66';
        document.getElementById(idRightAnswer).style.backgroundColor='#7cec7c80';
    }    
    removeTheEventListeners();
}
    
function removeTheEventListeners(){
    document.getElementById('answerBox1').removeEventListener('click', answerSelection);
    document.getElementById('answerBox2').removeEventListener('click', answerSelection);
    document.getElementById('answerBox3').removeEventListener('click', answerSelection);
    document.getElementById('answerBox4').removeEventListener('click', answerSelection);
}  
    
    
    
    
    








