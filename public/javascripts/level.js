let increaseLevel = document.getElementById("js-level");
let levelNumber = document.getElementById("js-level-number");
let levelNumerator = document.getElementsByClassName("js-numerator");
let levelDenominator = document.getElementsByClassName("js-denominator");


increaseLevel.addEventListener('click', function () {
    let level = parseInt(levelNumber.textContent);
    let max_level = 10;
    level++;
    levelNumber.textContent = Math.min(level, max_level);
    if (level < 8) {
        for (let i = 0; i < levelNumerator.length; i++) {
            let random = Math.floor(Math.random() * 9) + 1;
            levelNumerator[i].innerHTML = Number(levelNumerator[i].textContent) + random}

    } else if (level > 7 && level < 11 ) {

        for (let i = 0; i < levelDenominator.length; i++) {
            let random = Math.floor(Math.random() * 9) + 1;
            levelDenominator[i].innerHTML = Number(levelDenominator[i].textContent) + random;}
    }






});
