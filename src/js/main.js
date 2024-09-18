let currentStep = 0;
document.getElementsByClassName('step')[currentStep].classList.add('active');

function nextStep(step) {
document.getElementsByClassName('step')[currentStep].classList.remove('active');
currentStep++;
document.getElementsByClassName('step')[currentStep].classList.add('active');
}

function prevStep(step) {
document.getElementsByClassName('step')[currentStep].classList.remove('active');
currentStep--;
document.getElementsByClassName('step')[currentStep].classList.add('active');
}


const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    // Сдвиг слайдов
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

showSlide(currentSlide);

function submit() {
alert("Thanks!");
}

const button = document.getElementById('toggleButton');

    button.addEventListener('click', () => {
        button.classList.toggle('active'); 
    });