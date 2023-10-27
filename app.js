const backgrounds = [
    'pic/00.jpg',
    'pic/01.jpg',
    'pic/02.jpg',
    'pic/03.jpg',
    'pic/04.jpg',
    'pic/05.jpg',
    'pic/06.jpg',
    'pic/07.jpg',
    'pic/08.jpg',
    'pic/09.jpg',
];
let currentBackground = 0;

const body = document.body;
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

function showBg(){
    body.style.background = 
    `url(${backgrounds[currentBackground]})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
}
showBg();

previousButton.addEventListener('click', () =>{
    if(currentBackground === 0) {
        currentBackground = currentBackground + 
        backgrounds.length - 1;
    } else {
        currentBackground--;
    }
    showBg();
    saveBg();
});

nextButton.addEventListener('click', () =>{
    if(currentBackground === backgrounds.length - 1) {
        currentBackground = 0;
    } else {
        currentBackground++;
    }
    showBg();
    saveBg();
})

function saveBg(){
    localStorage.setItem('backgroundImage', body.style.backgroundImage);
}

function showSavedBg(){
    const savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
        body.style.backgroundImage = savedBackground;
  }
}
showSavedBg();