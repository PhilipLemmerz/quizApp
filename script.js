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




function init() {
    insertQuestionAndAnswer();  
    clickAnswer();   
}

/**
 * Events
 */

addEventListener('load', init);

/**Event - click on answer */
function clickAnswer(){   
    for (let i = 0; i < answerCard.length; i++) {
        answerCard[i].addEventListener('click', () => {
            let indexAnswer = i + 1;
            answerSelection(indexAnswer);
                                                
        });
    }    
}


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
function answerSelection(index) {
    let correctAnswer = questions[currentQuestion]['rightAnswer'];
    let backgroundElement = document.getElementById('quizContent');

    if (index == correctAnswer) {
        backgroundElement.style ='background-image: url("https://acegif.com/wp-content/gif/confetti-4.gif")';
        answerCard[(correctAnswer-1)].style.backgroundColor ='#7cec7c80';
                       
    } else {
        answerCard[(correctAnswer-1)].style.backgroundColor ='#7cec7c80';
        answerCard[index-1].style.backgroundColor = '#ff003366';
        
    }
    
}








