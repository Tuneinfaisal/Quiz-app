const quizData = [
    {
        question: "Q.1 Capital of India ?",
        a: "Delhi",
        b: "Berlin",
        c: "Paris",
        d: "London",
        correct: "a",
    },
    {
        question: "Q.2 Capital of Germany ?",
        a: "Delhi",
        b: "Berlin",
        c: "Paris",
        d: "London",
        correct: "b",
    },
    {
        question: "Q.3 Capital of France ?",
        a: "Delhi",
        b: "Berlin",
        c: "Paris",
        d: "London",
        correct: "c",
    },
    {
        question: "Q.4 Capital of England ?",
        a: "Delhi",
        b: "Berlin",
        c: "Paris",
        d: "London",
        correct: "d",
    },
    {
        question: "Q.5 Capital of USA ??",
        a: "Delhi",
        b: "Washington",
        c: "Paris",
        d: "London",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a = document.getElementById('optionA');
const b = document.getElementById('optionB');
const c = document.getElementById('optionC');
const d = document.getElementById('optionD');
const submitBtn = document.getElementById('submitButton');
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            var percentage = (score/5) * 100;
            var date = moment().format("MMM Do YY");
            quiz.innerHTML =
            `<h2>You answered ${score} out of ${quizData.length} correctly <br> 
            Your score is ${percentage}
            As on ${date}</h2>`
        }
    }
})