const inputs = document.querySelectorAll('.field-input');



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
