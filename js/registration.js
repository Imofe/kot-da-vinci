const submitButton = document.querySelector('.registration button[type="submit"]');
const a = document.querySelector('.registration a');

submitButton.addEventListener('click', (evt) => {
    console.log('jopa');
    evt.preventDefault()
    a.click();
});
