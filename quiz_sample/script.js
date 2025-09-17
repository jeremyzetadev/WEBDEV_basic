const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Multi Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');

function loadQuestion() {
    selectedOption = null;
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsEl.appendChild(button);
    });
    resultEl.textContent = ''; // Clear previous result message
}

function selectOption(button, option) {
    // Remove 'selected' class from previously selected option
    const previouslySelected = document.querySelector('.option-btn.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    // Add 'selected' class to current option
    button.classList.add('selected');
    selectedOption = option;
}

submitBtn.addEventListener('click', () => {
    if (selectedOption) {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            score++;
            resultEl.textContent = 'Correct!';
            resultEl.style.color = 'green';
        } else {
            resultEl.textContent = `Incorrect. The correct answer was: ${questions[currentQuestionIndex].answer}`;
            resultEl.style.color = 'red';
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 1500); // Load next question after a delay
        } else {
            setTimeout(() => {
                questionEl.textContent = `Quiz Finished! Your score: ${score} out of ${questions.length}`;
                optionsEl.innerHTML = '';
                submitBtn.style.display = 'none';
                resultEl.textContent = '';
            }, 1500);
        }
    } else {
        resultEl.textContent = 'Please select an answer!';
        resultEl.style.color = 'orange';
    }
});

loadQuestion(); // Initialize the quiz
