import move from './move.js';
import merge from './merge.js';

const boxElem = document.querySelectorAll('.js-box');

let highScore = JSON.parse(localStorage.getItem('highScore')) || 0;
let score = 0;

document.querySelector('.score-js').innerHTML = `
        <p>Score : ${score}</p>
        <p>HighScore : ${highScore}</p>
  `;

let generateNumber = generateRandomNumber(boxElem);

boxElem[generateNumber[0]].textContent = generateNumber[1];

document.body.addEventListener('keydown', event => {

    if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'w' ||
        event.key === 'a' ||
        event.key === 's' ||
        event.key === 'd'
    ) {

        moveNumber(event, boxElem);

        // Check if the game is over
        if (isLose(boxElem)) {
            highScore = Math.max(score, highScore);

            localStorage.setItem(
                'highScore',
                JSON.stringify(highScore)
            );
        }
        else {
            // Only generate a new number if the game isn't over
            const generateNumberResult =
                generateRandomNumber(boxElem);

            boxElem[generateNumberResult[0]].textContent =
                generateNumberResult[1];
        }

    }

});

function generateRandomNumber(boxElem) {

    const randomNumber = Math.random() < 1 / 4 ? 4 : 2;

    while (true) {

        const randomPosition =
            Math.floor(Math.random() * 16);

        if (!boxElem[randomPosition].textContent) {
            return [randomPosition, randomNumber];
        }
    }
}


function moveNumber(event, boxElem) {

    switch (event.key) {

        case 'ArrowUp':
        case 'w':
            move(boxElem, event);
            score += merge(boxElem, 'up');
            move(boxElem, event);
            break;

        case 'ArrowDown':
        case 's':
            move(boxElem, event);
            score += merge(boxElem, 'down');
            move(boxElem, event);
            break;

        case 'ArrowLeft':
        case 'a':
            move(boxElem, event);
            score += merge(boxElem, 'left');
            move(boxElem, event);
            break;

        case 'ArrowRight':
        case 'd':
            move(boxElem, event);
            score += merge(boxElem, 'right');
            move(boxElem, event);
            break;
    }

    document.querySelector('.score-js').innerHTML = `
        <p>Score : ${score}</p>
        <p>HighScore : ${highScore}</p>
    `;
}


function isLose(boxElem) {

    for (let i = 0; i < boxElem.length; i++) {

        if (!boxElem[i].textContent) {
            return false;
        }
    }

    return true;
}