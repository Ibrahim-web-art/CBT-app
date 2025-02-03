
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

if(username==""){
   document.getElementById("username").style.border = "1px solid red";
}
else{
   document.getElementById("username").style.border = "1px solid green";
}
if(password==""){
   document.getElementById("password").style.border = "1px solid red";
}
else{
   document.getElementById("password").style.border = "1px solid green";
}
if(username=="" || password== ""){
   document.getElementById("error").innerHTML = "Please fill in the details";
}
else{
   document.getElementById("login-container").style.display= "none";
    document.getElementById("quiz-container").style.display= "inline";
}

}
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed the Java programming language?",
        options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "styles"],
        answer: "style"
    },
    {
        question: "Which language is primarily used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"},
        {
            question: "Which is not a JavaScript framework?",
            options: ["Python Script", "JQuery", "Django", "NodeJS"],
            answer: "Django"
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            options: ["//", "/*", "#", "<!--"],
            answer: "//"
        },
        {
            question: "Which method is used to write into an alert box in JavaScript?",
            options: ["alert()", "msg()", "prompt()", "alertBox()"],
            answer: "alert()"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: ["<style>", "<script>", "<css>", "<link>"],
            answer: "<style>"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["class", "style", "font", "styles"],
            answer: "style"
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["color", "bgcolor", "background-color", "bgColor"],
            answer: "background-color"
        },
        {
            question: "Which CSS property is used to change the text color?",
            options: ["color", "text-color", "font-color", "fontColor"],
            answer: "color"
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: "<ul>"
        },
        {
            question: "Which HTML tag is used to define an ordered list?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: "<ol>"
        },
        {
            question: "Which HTML tag is used to define a list item?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: "<li>"
        },
        {
            question: "Which HTML tag is used to define a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<hyperlink>"],
            answer: "<a>"
        },
        {
            question: "Which HTML tag is used to define an image?",
            options: ["<img>", "<image>", "<pic>", "<picture>"],
            answer: "<img>"
        },
        {
            question: "Which HTML attribute is used to define the source of an image?",
            options: ["src", "href", "link", "source"],
            answer: "src"
        },
        {
            question: "Which HTML attribute is used to define alternative text for an image?",
            options: ["alt", "title", "description", "text"],
            answer: "alt"
        },
        {
            question: "Which HTML tag is used to define a table?",
            options: ["<table>", "<tr>", "<td>", "<tab>"],
            answer: "<table>"
        },
        {
            question: "Which HTML tag is used to define a table row?",
            options: ["<table>", "<tr>", "<td>", "<tab>"],
            answer: "<tr>"
        },
        {
            question: "Which HTML tag is used to define a table cell?",
            options: ["<table>", "<tr>", "<td>", "<tab>"],
            answer: "<td>"
        },
        {
            question: "Which HTML tag is used to define a table header?",
            options: ["<th>", "<thead>", "<header>", "<head>"],
            answer: "<th>"
        },
        {
            question: "Which HTML tag is used to define a form?",
            options: ["<form>", "<input>", "<textarea>", "<button>"],
            answer: "<form>"
        },
        {
            question: "Which HTML tag is used to define an input field?",
            options: ["<form>", "<input>", "<textarea>", "<button>"],
            answer: "<input>"
        },
        {
            question: "Which HTML tag is used to define a text area?",
            options: ["<form>", "<input>", "<textarea>", "<button>"],
            answer: "<textarea>"
        },
        {
            question: "Which HTML tag is used to define a button?",
            options: ["<form>", "<input>", "<textarea>", "<button>"],
            answer: "<button>"
        },
        {
            question: "Which HTML attribute is used to define the action of a form?",
            options: ["action", "method", "type", "name"],
            answer: "action"
        },
        {
            question: "Which HTML attribute is used to define the method of a form?",
            options: ["action", "method", "type", "name"],
            answer: "method"
        },
        {
            question: "Which HTML attribute is used to define the type of an input field?",
            options: ["action", "method", "type", "name"],
            answer: "type"
        },
        {
            question: "Which HTML attribute is used to define the name of an input field?",
            options: ["action", "method", "type", "name"],
            answer: "name"
        },
        {
            question: "Which HTML attribute is used to define the value of an input field?",
            options: ["value", "name", "type", "placeholder"],
            answer: "value"
        },
        {
            question: "Which HTML attribute is used to define a placeholder for an input field?",
            options: ["value", "name", "type", "placeholder"],
            answer: "placeholder"
        },
        {
            question: "Which HTML attribute is used to define a required input field?",
            options: ["required", "name", "type", "placeholder"],
            answer: "required"
        },
        {
            question: "Which HTML attribute is used to define a disabled input field?",
            options: ["disabled", "name", "type", "placeholder"],
            answer: "disabled"
        },
        {
            question: "Which HTML attribute is used to define a read-only input field?",
            options: ["readonly", "name", "type", "placeholder"],
            answer: "readonly"
        },
        {
            question: "Which HTML attribute is used to define a checked input field?",
            options: ["checked", "name", "type", "placeholder"],
            answer: "checked"
        },
        {
            question: "Which HTML attribute is used to define a selected option in a dropdown?",
            options: ["selected", "name", "type", "placeholder"],
            answer: "selected"
        },
        {
            question: "Which HTML attribute is used to define a multiple selection in a dropdown?",
            options: ["multiple", "name", "type", "placeholder"],
            answer: "multiple"
        },
        {
            question: "Which HTML attribute is used to define the size of an input field?",
            options: ["size", "name", "type", "placeholder"],
            answer: "size"
        },
        {
            question: "Which HTML attribute is used to define the maximum length of an input field?",
            options: ["maxlength", "name", "type", "placeholder"],
            answer: "maxlength"
        },
        {
            question: "Which HTML attribute is used to define the minimum length of an input field?",
            options: ["minlength", "name", "type", "placeholder"],
            answer: "minlength"
        },
        {
            question: "Which HTML attribute is used to define the pattern of an input field?",
            options: ["pattern", "name", "type", "placeholder"],
            answer: "pattern"
        },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10; // Time for each question in seconds
let timer;

const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const nextButton = document.querySelector('.nxt-btn');
const submit =document.querySelector('.submit');
const resultElement = document.querySelector('.quiz-result');
const timerElement = document.querySelector('.timer');

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showNextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    startTimer();
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
}

function selectOption(e) {
    // clearInterval(timer);
    const selectedOption = e.target;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption.textContent === currentQuestion.answer) {
        selectedOption.classList.add('correct');
        selectedOption.style.backgroundColor = "green";
        score++;
    } else {
        selectedOption.classList.add('incorrect');
        selectedOption.style.backgroundColor = "red"
    }
    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct');
            button.style.backgroundColor = "green"
        }
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
        document.getElementById("quiz-container").style.display= "none";
    }
}

function showResult() {
    resultElement.innerHTML = `<h2>You have scored ${score} out of ${quizQuestions.length}.</h2>`;
    resultElement.style.display = 'block';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', showNextQuestion);

loadQuestion();
function endexam(){
    resultElement.innerHTML = `<h2>You have scored ${score} out of ${quizQuestions.length}.</h2>`;
    resultElement.style.display = 'block';
    nextButton.style.display = 'none';
    submit.style.display = "none";
    document.getElementById("quiz-container").style.display= "none";

}