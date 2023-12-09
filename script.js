
const button = document.getElementById('button');

const nextPage = document.querySelector('.next-page');

button.addEventListener('click', () => {
    console.log('Button clicked!'); 
    window.location.href = 'main';

    document.querySelector('.enter').style.opacity = '30';

    document.querySelector('.enter').style.opacity = '1';

    setTimeout(() => {
        nextPage.style.display = 'flex';
        nextPage.style.opacity = '30';
    }, 100);
});
