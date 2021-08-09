
var guess = 0; // Number, номер попытки
var secretNumber = getRandomNumber(1, 10);

function getRandomNumber(from, to) {
    var randomNumber = Math.floor(Math.random() * (to-from+1)) + from; // 0..1 -> 1..10 ?
    return randomNumber;
}

function startNewGame () {
    guess = 0;
    secretNumber = getRandomNumber(1, 10);
}

function checkGuess() {

    // берем значение введенное в поле с id = "guess"
    var x = document.getElementById('guess').value;
    if (!x || x == "") { // проверка на то, что x не является undefined, null ИЛИ пустой строкой
        alert('Fill out the number!');
        return false;
    }
    if(x < 1||x > 10) {
        alert('Enter number from 1 to 10');
        return false;
    }

    guess = guess + 1;
    if (guess > 3) {
        // истекли попытки, новая игра, сбрасываем число попыток
        alert('Game over! No more guesses available.');
        startNewGame();
    }
    else {
        // Проверяем меньше - больше - попал
        if (x < secretNumber) {
            alert('Try bigger number!');
        } else if (x > secretNumber) {
            alert('Try smaller number!');
        } else { // x равен secretNumber (случайному числу в данном раунде игры)
            alert('You win!');
            startNewGame();
        }
    }
    
    return false;
}

