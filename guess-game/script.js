
var guess = 0; // Number, номер попытки
var minNumber = 1;
var maxNumber = 2;
var attempts = 3;//кол-во попыток
var secretNumber = getRandomNumber(minNumber, maxNumber);

function updateRemainAttempts() {
    var attemptsEl = document.getElementById('attempts');
    var remains = attempts - guess;
    var remainsText = 'Осталось: ' + remains + ' ';
    if (remains == 1) {
        remainsText += 'попытка';
    } else if(remains % 5 == 0) {
        remainsText += 'попыток';
    } else {
        remainsText += 'попытки';
    }

    attemptsEl.innerText = remainsText;
}

// все, что внутри блока выполняется когда наш документ html полностью загружен
// и тогда можно изменять свойства элементов
$(function(){
    var welcomeEl = document.getElementById('welcome');
    welcomeEl.innerText = 'Тебе нужно угадать число от '+ minNumber + ' до '+ maxNumber;

    updateRemainAttempts();
});

function getRandomNumber(from, to) {
    var randomNumber = Math.floor(Math.random() * (to-from+1)) + from;
    return randomNumber;
}

function startNewGame () {
    guess = 0;
    secretNumber = getRandomNumber(minNumber, maxNumber);
}

function checkGuess() {

    // берем значение введенное в поле с id = "guess"
    var x = document.getElementById('guess').value;
    if (!x || x == "") { // проверка на то, что x не является undefined, null ИЛИ пустой строкой
        alert('Впишите число');
        return false;
    }

    if (x < minNumber || x > maxNumber) {
        alert('Введите число от '+ minNumber + ' до '+ maxNumber);
        return false;
    }

    guess = guess + 1;
    if (guess > attempts) {
        // истекли попытки, новая игра, сбрасываем число попыток
        alert('Игра закончена! Попробуйте заново');
        startNewGame();
    }
    else {
        // Проверяем меньше - больше - попал
        if (x < secretNumber) {
            alert('Попробуй ввести число побольше!');
        } else if (x > secretNumber) {
            alert('Попробуй ввести число поменьше!');
        } else { // x равен secretNumber (случайному числу в данном раунде игры)
            alert('Поздравляю, ты победил!!!');
            startNewGame();
        }
    }
    updateRemainAttempts();
    
    return false;
}

