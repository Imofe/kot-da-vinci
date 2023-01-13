import { ANSWERS } from "./Answers.js";
const TASK_COUNT = 27;

var varNumber = localStorage.getItem('varNumber');

function myAnswer () {
    for (let i = 1; i <= TASK_COUNT; i++) {
        let ans = localStorage.getItem(`v${varNumber}t${i}`);
        if (ans === null) {
            document.getElementById(`1-${i}`).innerHTML = '—'
        } else {
            document.getElementById(`1-${i}`).innerHTML = `${localStorage.getItem(`v${varNumber}t${i}`)}`;
        }
    }
}

function correctAnswers () {
    for (let i = 1; i <= TASK_COUNT; i++) {
        document.getElementById(`2-${i}`).innerHTML = ANSWERS[`v${varNumber}t${i}`]
    }
}

function compareAnswer () {
    let counter = 0;
    for (let i = 1; i <= TASK_COUNT; i++) {
        if (document.getElementById(`1-${i}`).textContent === document.getElementById(`2-${i}`).textContent) {
            counter += 1;
        }
        localStorage.removeItem(`v${varNumber}t${i}`);
    }

    document.querySelector('.count-point').innerHTML = `Количество баллов: ${counter}`;
}

myAnswer();
correctAnswers();
compareAnswer();