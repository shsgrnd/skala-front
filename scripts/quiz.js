

const quizzes = [
    {
        question: "HTML에서 가장 큰 제목 태그는?",
        options: ["h1", "h6", "header"],
        answer: "h1"
    },
    {
        question: "클릭 이벤트를 연결하는 메서드는?",
        options: ["querySelector", "addEventListener", "textContent"],
        answer: "addEventListener"
    },
    {
        question: "요소에 CSS 클래스를 추가하는 방법은?",
        options: [
            "classList.add()",
            "textContent.add()",
            "style.push()"
        ],
        answer: "classList.add()"
    }
];

const progressText = document.querySelector("#quiz-progress");
const scoreText = document.querySelector("#quiz-score");
const questionText = document.querySelector("#quiz-question");
const optionsBox = document.querySelector("#quiz-options");
const resultText = document.querySelector("#quiz-result");
const nextButton = document.querySelector("#next-question");

let currentQuizIndex = 0;
let score = 0;
let answered = false;

function showQuiz() {
    const currentQuiz = quizzes[currentQuizIndex];

    answered = false;
    progressText.textContent = `${currentQuizIndex + 1} / ${quizzes.length}`;
    scoreText.textContent = `점수: ${score}`;
    questionText.textContent = currentQuiz.question;
    resultText.textContent = "정답이라고 생각하는 보기를 선택하세요.";
    resultText.className = "quiz-result";
    nextButton.textContent =
        currentQuizIndex === quizzes.length - 1 ? "결과 보기" : "다음 문제";
    nextButton.disabled = true;

    optionsBox.replaceChildren();

    currentQuiz.options.forEach(function (option) {
        const optionButton = document.createElement("button");

        optionButton.type = "button";
        optionButton.classList.add("quiz-option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", checkAnswer);
        optionsBox.appendChild(optionButton);
    });
}

function checkAnswer(event) {
    if (answered) {
        return;
    }

    answered = true;

    const selectedButton = event.currentTarget;
    const selectedAnswer = selectedButton.textContent;
    const correctAnswer = quizzes[currentQuizIndex].answer;
    const optionButtons = optionsBox.querySelectorAll(".quiz-option");

    optionButtons.forEach(function (button) {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score += 1;
        resultText.textContent = "정답입니다!";
        resultText.classList.add("correct-message");
    } else {
        selectedButton.classList.add("wrong");
        resultText.textContent = `오답입니다. 정답은 ${correctAnswer}입니다.`;
        resultText.classList.add("wrong-message");
    }

    scoreText.textContent = `점수: ${score}`;
    nextButton.disabled = false;
}

function showFinalResult() {
    progressText.textContent = "퀴즈 완료";
    scoreText.textContent = `최종 점수: ${score} / ${quizzes.length}`;
    questionText.textContent =
        score === quizzes.length
            ? "모든 문제를 맞혔습니다!"
            : "복습 퀴즈가 끝났습니다.";

    optionsBox.replaceChildren();
    resultText.textContent =
        score >= 2
            ? "핵심 개념을 잘 이해하고 있습니다."
            : "틀린 개념을 다시 확인해 보세요.";
    resultText.className = "quiz-result final-message";

    nextButton.textContent = "다시 풀기";
    nextButton.disabled = false;
    nextButton.classList.add("restart");
}

function handleNextQuestion() {
    if (currentQuizIndex === quizzes.length - 1) {
        showFinalResult();
        return;
    }

    currentQuizIndex += 1;
    showQuiz();
}

function restartQuiz() {
    currentQuizIndex = 0;
    score = 0;
    nextButton.classList.remove("restart");
    showQuiz();
}

nextButton.addEventListener("click", function () {
    if (nextButton.classList.contains("restart")) {
        restartQuiz();
    } else {
        handleNextQuestion();
    }
});

showQuiz();
