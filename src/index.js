const startButton = document.getElementById("start-btn")
const startPage = document.getElementById("start")
const firstQuestion = document.getElementById("q-1")
const questionText = document.getElementById("title")
const answerButtonsGroup = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-button")
const score = document.getElementById("score")
const finalScore = document.getElementById("final-score")
const finalScoreText = document.getElementById("finalscoretext")
const restart = document.getElementById("goHome")
let correctAnswer = 0
score.innerText = correctAnswer

startButton.addEventListener("click", startGame)
let currentQuestion 


function startGame() {
    currentQuestion = -1
    startPage.classList.add('hide')
    firstQuestion.classList.remove('hide')
    setNextQuestion()
}

function endGame() {
    correctAnswer = 0
    startPage.classList.remove('hide')
    firstQuestion.classList.add('hide')
    finalScore.classList.add("hide")
}

restart.addEventListener("click", endGame)
function showFinalScore() {
    finalScore.classList.remove("hide")
    finalScoreText.innerHTML = correctAnswer
    firstQuestion.classList.add('hide')
}

function setNextQuestion() {
    resetState()
    currentQuestion++
    score.innerText = correctAnswer
    showQuestion(questions[currentQuestion])
    if (currentQuestion === 5) {
        showFinalScore()
    }
}

function showNextButton() {
    nextButton.classList.remove('unvisible')
    nextButton.addEventListener("click", setNextQuestion)
    
}

function resetState() {
    nextButton.classList.add('unvisible')
    while (questionText.firstChild) {
        questionText.removeChild(questionText.firstChild)
    }
    while (answerButtonsGroup.firstChild) {
        answerButtonsGroup.removeChild(answerButtonsGroup.firstChild)
    }
}

function showQuestion(question) {
    const title = document.createElement('p')
    title.innerText = question.question
    title.classList.add('question__description')
    questionText.appendChild(title)
    question.answer.forEach((el) => {
            const button = document.createElement('button')
            button.innerText = el.text
            button.classList.add('answers__btn')
            button.id = "selected_button"
            if (el.correct) {
                button.dataset.correct = el.correct
            }
            button.addEventListener("click", function(e) {
            const selected = e.target
            const correct = selected.dataset.correct
            if (correct) {
                correctAnswer++
                button.classList.add("selected--true")
            } else button.classList.add("selected--false")
            showNextButton()
            })
            answerButtonsGroup.appendChild(button)
        })
     


}


const questions = [
    {
        question: "1. What is published year of HTML",
        answer: [
            {
                text: 1993, correct: true
            },
            {
                text: 1991, correct: false
            },
            {
                text: 1992, correct: false
            },
            {
                text: 1995, correct: false
            },
        ]
    },
    {
        question: "2. What is extention of WWW",
        answer: [
            {
                text: "World wide wall", correct: false
            },
            {
                text: "World wide web", correct: false
            },
            {
                text: "Word wide web", correct: true
            },
            {
                text: "Wide word web", correct: false
            },
        ]
    },
    {
        question: "3. What is extention of CSS",
        answer: [
            {
                text: "Custome sheets of styles", correct: false
            },
            {
                text: "Created styling styles", correct: false
            },
            {
                text: "Custome style sheets", correct: false
            },
            {
                text: "Cascading style sheets", correct: true
            },
        ]
    },
    {
        question: "4. Show designer's tools",
        answer: [
            {
                text: "VScode, sublime, figma", correct: false
            },
            {
                text: "Figma, Photoshop, CorelDraw", correct: true
            },
            {
                text: "Jira, Notion, Figma", correct: false
            },
            {
                text: "None of them are correct", correct: false
            },
        ]
    },
    {
        question: "5. What is a capital of Uzbekistan",
        answer: [
            {
                text: "Samarqand", correct: false
            },
            {
                text: "Andijan", correct: false
            },
            {
                text: "Tashkent", correct: true
            },
            {
                text: "Buxara", correct: false
            },
        ]
    },
    {
        question: "5. What is a capital of Uzbekistan",
        answer: [
            {
                text: "Samarqand", correct: false
            },
            {
                text: "Andijan", correct: false
            },
            {
                text: "Tashkent", correct: true
            },
            {
                text: "Buxara", correct: false
            },
        ]
    },
]

