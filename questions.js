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
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitButton');
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
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
            quiz.innerHTML =
            `<h2>You answered ${score} out of ${quizData.length} <br> Your score is ${percentage} </h2>`
        }
    }
})