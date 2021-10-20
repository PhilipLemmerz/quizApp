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
        "question": "Wie stellt man Text AM BESTEN fett dar?",
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
];
/**
 * global variables
 */

let currentQuestion = 0;
let answerCard = document.getElementsByClassName('card');
let correctAnswers = 0;
let checkAnswerGiven;

/** load autmomaticly after DOM is loaded */
function init() {
    insertQuestionAndAnswer();
    addTheEventListener();
}

/**
 * Event-Listeners
 */
addEventListener('load', init);
/**click-on-answer EVENT */
function addTheEventListener() {
    document.getElementById('answerBox1').addEventListener('click', answerSelection);
    document.getElementById('answerBox2').addEventListener('click', answerSelection);
    document.getElementById('answerBox3').addEventListener('click', answerSelection);
    document.getElementById('answerBox4').addEventListener('click', answerSelection);
    /**next question EVENT */
    document.getElementById('nextQuestionBTN').addEventListener('click', nextQuestion);
}
/**
 * End Event-Listers
 */

function insertQuestionAndAnswer() {
    checkAnswerGiven = false;
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
    let lastCharacterofID = clickedElementId.slice(-1);
    let correctAnswer = questions[currentQuestion]['rightAnswer'];
    let idRightAnswer = 'answerBox' + correctAnswer;
    let backgroundElement = document.getElementById('quizContent');
    /**if answer is correct change the Colors */
    if (lastCharacterofID == correctAnswer) {
        this.style.backgroundColor = '#7cec7c80';
        backgroundElement.style = 'background-image: url("https://acegif.com/wp-content/gif/confetti-4.gif")';
        correctAnswers++;
    } else {
        this.style.backgroundColor = '#e0153d66';
        document.getElementById(idRightAnswer).style.backgroundColor = '#7cec7c80';
    }
    removeTheEventListeners();
    document.getElementById('noAnswerGivenDiv').style.display = 'none'; /**hide the info-Box "noAnswergiven" */
    document.getElementById('nextQuestionBTN').classList.remove('disabled'); /** enable the nextQuestion Button */
    checkAnswerGiven = true;
    ifQuizEndShowResultBTN();
}

function removeTheEventListeners() {
    document.getElementById('answerBox1').removeEventListener('click', answerSelection);
    document.getElementById('answerBox2').removeEventListener('click', answerSelection);
    document.getElementById('answerBox3').removeEventListener('click', answerSelection);
    document.getElementById('answerBox4').removeEventListener('click', answerSelection);
}
/**execute if user clicks "nextQuerstion" Button */
function nextQuestion() {
    if (checkAnswerGiven == true && currentQuestion < 7) {
        currentQuestion++;
        insertQuestionAndAnswer();
        addTheEventListener();
        changeStyleToDefault();
    }
    /** if no aswer ist seleected*/
    else if (checkAnswerGiven == false) {
        document.getElementById('noAnswerGivenDiv').style = 'display: block';
    }
    /**last question is answerd call result Function */
    else {
        result();
    }
}

/**when next Question is shown, the Design must change To default */
function changeStyleToDefault() {
    for (let i = 0; i < answerCard.length; i++) {
        answerCard[i].style.backgroundColor = 'white'; /**Color of  Cards change to white */
    }
    document.getElementById('quizContent').style.backgroundImage = 'none'; /**confetti stops */
}

/**if last Question done BTN change to Result BTN */
function ifQuizEndShowResultBTN() {
    let nextQuestionBTN = document.getElementById('nextQuestionBTN');
    if (currentQuestion == (questions.length - 1)) {
        nextQuestionBTN.textContent = 'Ergebnis anzeigen';
        nextQuestionBTN.style.backgroundColor = 'green';
        nextQuestionBTN.style.border = 'green';
    } else {
        /**change button style to default style */
        nextQuestionBTN.textContent = 'nächste Frage';
        nextQuestionBTN.style.backgroundColor = '';
        nextQuestionBTN.style.border = '';
    }
}

/** creates the result Content */
function result() {
    let currentContent = document.getElementById('quizContent');
    /**hide the current question content*/
    currentContent.classList.remove('d-flex');
    currentContent.classList.add('d-none');

    displayResultBox();   
}

function displayResultBox(){
    let parentBox = document.getElementById('outerContentDiv');
    /**create a new div element with the result */
    let resultBox = document.createElement('div');
    resultBox.setAttribute('id', 'resultPopup');
    resultBox.innerHTML = `
         <div id="resultBoxinnerDiv" class="bg-light">
             <h4> Herzlichen Glückwunsch </h4>
             <p> Du hast <strong>${correctAnswers}</strong> von insgesamt <strong>${questions.length}</strong> Fragen 
                 richtig beantwortet
             </p>
             <button id="startAgainButton" onclick="startAgain()" type="button" class="btn btn-primary"> neu starten </button>
         </div>
     `;   
    parentBox.appendChild(resultBox);
}

/** function restart the Quiz */
function startAgain() {
    currentQuestion = 0;
    correctAnswers = 0;
    let parentBox = document.getElementById('outerContentDiv');
    let resultBox = document.getElementById('resultPopup');
    let quizContent = document.getElementById('quizContent');    
    /**delete the ResultBox completely */
    parentBox.removeChild(resultBox);    
    /**display the quizContent again */
    quizContent.classList.remove('d-none');
    quizContent.classList.add('d-flex');    
    /** turn result button into next question button */
    ifQuizEndShowResultBTN();
    /**show default colors of cards again*/
    changeStyleToDefault();
    init();
}







