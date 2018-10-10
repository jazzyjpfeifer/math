let increaseLevel = document.getElementById("js-level");
let levelNumber = document.getElementById("js-level-number");
let levelNumerator = document.getElementsByClassName("js-numerator");
let levelDenominator = document.getElementsByClassName("js-denominator");


increaseLevel.addEventListener('click', function () {
    let level = parseInt(levelNumber.textContent);
    let max_level = 3;
    level++;
    levelNumber.textContent = Math.min(level, max_level);

    console.log(level);

    if (level === 2) {
        for (let i = 0; i < levelNumerator.length; i++) {
            let random = Math.floor(Math.random() * 9) + 1;
            levelNumerator[i].innerHTML = levelNumerator[i].textContent + random}

    } else if (level === 3) {

        for (let i = 0; i < levelDenominator.length; i++) {
            let random = Math.floor(Math.random() * 9) + 1;
            levelDenominator[i].innerHTML = levelDenominator[i].textContent + random;}
    }






});
