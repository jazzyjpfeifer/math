/***SELECTORS***/
let input = document.getElementsByClassName('input');
let answers = document.getElementsByClassName("answer");
let numerator = document.getElementsByClassName('js-numerator');
let denominator = document.getElementsByClassName('js-denominator');

//Button Selectors
let checkAnswerBtn = document.getElementById("js-checkAnswers");
let resetAnswersBtn = document.getElementById("js-resetAnswers");

//Icon Selectors
let checkIcons = document.querySelectorAll(".js-check");

//Dynamic Text Content Selectors
let results = document.getElementById("results");
let resultMessage = document.getElementById("resultMessage");
let numPercentage = document.getElementById('numPercentage');



/***EVENT LISTENERS***/
//check Answers
checkAnswerBtn.addEventListener('click', function () {
    let check = isCorrect();
    for (let i = 0; i < checkIcons.length; i++) {
        if(check[i] === true) {
            checkIcons[i].style.display = "inline-block";
            checkIcons[i].classList.remove("fadeOut");
            checkIcons[i].classList.add("fadeIn");
            checkIcons[i].style.color = "#00C05E";
            checkIcons[i].textContent = "check_circle";
        } else {
            checkIcons[i].style.display = "inline-block";
            checkIcons[i].classList.remove("fadeOut");
            checkIcons[i].classList.add("fadeIn");
            checkIcons[i].style.color = "#FF5C28";
            checkIcons[i].textContent = 'cancel';
        }
    }

    //Displaying Results
    let numCorrect = check.filter(value => value).length;
    let numIncorrect = check.filter(value => !value).length;
    let totalProblems = input.length;
    let finalScore = numCorrect / totalProblems;

    console.log(numCorrect, numIncorrect, totalProblems,finalScore);

    if (numCorrect === totalProblems) {
        resultMessage.textContent = 'Congratulations!'
    } else {
        resultMessage.textContent = "Oops, you missed " + numIncorrect + " out of " + totalProblems
    }

    numPercentage.textContent = Math.round(finalScore * 100).toFixed(0) + '%';
    results.style.display = "block";

    results.classList.remove("fadeOutDown");
    results.classList.add("fadeInUp");

});

//reset Button
resetAnswersBtn.addEventListener('click', function() {
    console.log('Reset');
    reset();
});

/*** FUNCTIONS ***/
//User Answers
function userAnswers() {
    let answers = [];
    for (let i = 0; i < input.length; i++) {
        answers.push(Number(input[i].value));
    }
    return answers
}

//Correct Answers
function correctAnswers() {
    let correctAnswers = [];
    for (let i = 0; i < answers.length; i++) {
        correctAnswers.push(answers[i].textContent = Number(numerator[i].textContent) + Number(denominator[i].textContent))
    }
    return correctAnswers
}

//Checking If Answer is Correct
function isCorrect() {
    let userAnswer = userAnswers();
    let correctAnswer = correctAnswers();
    let arrayLength = Math.max(userAnswer.length, correctAnswer.length);
    let isCorrect = [];
    for (let i = 0; i < arrayLength; i++) {
        isCorrect.push(userAnswer[i] === correctAnswer[i])
    }
    return isCorrect
}

//Reset Input
function reset() {
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        checkIcons[i].classList.remove("fadeIn");
        checkIcons[i].classList.add("fadeOut");
    }
    results.classList.remove("fadeInUp");
    results.classList.add("fadeOutDown");

}
