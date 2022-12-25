const submitButton = document.querySelector('.registration form');
const a = document.querySelector('.registration a');

submitButton.addEventListener('submit', (evt) => {
    console.log('jopa');
    evt.preventDefault()
    a.click();
});
