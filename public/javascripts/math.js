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
let balloons = document.getElementById("balloons");

//Timer Variables
let minutes = 0;
let seconds = 0;
let tens = 0;
let Interval;

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
        resultMessage.textContent = 'Congratulations!';
        balloons.style.display = "inline-block";
    } else {
        resultMessage.textContent = "Oops, you missed " + numIncorrect + " out of " + totalProblems
    }

    numPercentage.textContent = Math.round(finalScore * 100).toFixed(0) + '%';
    results.style.display = "inline-block";

    results.classList.remove("fadeOutDown");
    results.classList.add("fadeInUp");



    //stop timer
    clearInterval(Interval)
});

//reset Button
resetAnswersBtn.addEventListener('click', function() {
    console.log('Reset');
    setTimeout(location.reload.bind(location), 1000);
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

//Get Operator


//Correct Answers
function correctAnswers() {
    let correctAnswers = [];
    //defining operators
    let operator = document.getElementsByClassName("operator");
    let sign = operator[0].textContent;
    let mathOperators = {
        "+": function (x, y) {return x + y},
        "x": function (x, y) {return x * y},
        "-": function (x, y) {return x - y}
    };

    //determines which operator to use to calculate answer

    for (let i = 0; i < answers.length; i++) {
        if (sign === "+") {
            correctAnswers.push(answers[i].textContent = mathOperators["+"](Number(numerator[i].textContent),Number(denominator[i].textContent)))
        } else if (sign === "x") {
            correctAnswers.push(answers[i].textContent = mathOperators["x"](Number(numerator[i].textContent),Number(denominator[i].textContent)))
        } else if (sign ==="-") {
            correctAnswers.push(answers[i].textContent = mathOperators["-"](Number(numerator[i].textContent),Number(denominator[i].textContent)))
        }
    }
    console.log(correctAnswers);
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

    //reset timmer
    selectTens.innerHTML = "00";
    selectSeconds.innerHTML = "00";
    selectMinutes.innerHTML = "00";


}

//****************************
//STOP WATCH
//****************************


//SELECTORS
let selectTens = document.getElementById("tens");
let selectSeconds = document.getElementById("seconds");
let selectMinutes = document.getElementById("minutes");

function startClock() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function startTimer() {
    tens++;

    if(tens < 9) {
        selectTens.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        selectTens.innerHTML = tens;
    }

    if(tens > 99) {
        seconds++;
        selectSeconds.innerHTML = "0" + seconds;
        tens = 0;
        selectTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        selectSeconds.innerHTML = seconds;
    }

    if(seconds > 59) {
        minutes++;
        selectMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        selectSeconds.innerHTML = seconds;
    }
}
