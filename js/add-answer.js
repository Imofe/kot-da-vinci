const inputField = document.getElementsByTagName('input');
const varNumber = document.querySelector('.variants_types').id;

function attachEvents () {
    for (let index = 0; index < inputField.length; index++) {
        const currentInput = inputField[index];
        currentInput.addEventListener('change', compareAnswer);
    }
    localStorage.setItem('varNumber', varNumber);    
}

function compareAnswer () {
    localStorage.setItem(this.id, this.value)
}

attachEvents()


















// for (let index = 0; index < replyButtons.length; index++) {
//     const currentButton = replyButtons[index];
//     currentButton.addEventListener('click', function (event) {
//         const target = event.target;
//         const answerId = target.closest('li').id;
//         const fieldInput = document.getElementById(`t-${answerId}`);
//         const answer = fieldInput.value;
//         if (ANSWERS[answerId] === answer) {
//             // fieldInput.style.background = 'rgb(60, 179, 113, 0.7)';
//             localStorage.setItem(`${answerId}`,`yes`)
//         } else {
//             // fieldInput.style.background = 'rgb(179, 60, 67, 0.7)';
//             localStorage.setItem(`${answerId}`,`no`)
//         }
//     });
// }



// f (input) {
//     input.value = localStorage.getItem("example-name-adress") || "";

//     input.addEventListener('input', function() {
//       localStorage.setItem("example-name-adress", this.value);
//     });
//   }
