const line = document.querySelector('.line');
const btn = document.querySelector('button');
const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');

const changeLine = () => {
    window.innerWidth < 600 ? line.innerHTML = '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>' : line.innerHTML = '<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>'
};

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    adviceNumber.innerHTML = data.slip.id;
    adviceText.innerHTML = data.slip.advice;
    console.log(data.slip)
}

window.addEventListener('load', () => {
    getAdvice();
    changeLine();
})

window.onresize = changeLine;
btn.addEventListener('click', getAdvice);
