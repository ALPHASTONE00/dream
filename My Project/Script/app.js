const signBtn = document.querySelector('#sign-btn');
const formSection = document.querySelector('.sign');
const submit = document.querySelector('.submit button');

signBtn.addEventListener('click', () => {
    formSection.style.display = 'block';
})

submit.addEventListener('click', () => {
    formSection.style.display = 'none';
})