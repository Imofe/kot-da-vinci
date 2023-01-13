const inputs = document.querySelectorAll('.field-input');

const TOTAL_TASKS_COUNT = 675

function changeHandler () {
    localStorage.setItem(this.name, this.value);
}

function checkStorage () {
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = localStorage.getItem(inputs[index].name);
    }

    attachEvents ()
}

function attachEvents () {
    for (let index = 0; index < inputs.length; index++) {
        const currentInput = inputs[index];
        currentInput.addEventListener('change', changeHandler);
    }
}

checkStorage();

const tasksCounter = document.querySelector('.solved_tasks-counter');
tasksCounter.innerHTML = ''
tasksCounter.innerHTML = `${localStorage.solvedQuestions} / ${TOTAL_TASKS_COUNT} <br> верно рещенных заданий`

const fill = document.querySelector('.fill');
fill.style.width = `${localStorage.solvedQuestions / 50 * 100}%`;
