

// header search
const headerInput = document.querySelector('.js-header__search-input');
const headerButton = document.querySelector('.js-header__search-button');
const headerSearch = document.querySelector('.header__search');


headerButton.onclick = function() {
    headerInput.classList.toggle('header__search-input-active');
    headerSearch.classList.toggle('header__search-active')
}



// slider video
const sliderVideo = document.querySelector('#slider__video');
const sliderHide = document.querySelector('.js-slider__img-content');


sliderVideo.onclick = function() {
    if (sliderVideo.paused) {
        sliderVideo.play();
        playPause.innerText = "Pause";
    } else {
        sliderVideo.pause();
        playPause.innerText = "Play"
    }
}


// play slider viddeo
const playSlider = document.querySelector('.slider__img-content--play');
const playPause = document.querySelector('.slider__img-content--play span');
const playIconPlay = document.querySelector('.slider__img-content--play i');

playSlider.onclick = function() {
    if (sliderVideo.paused) {
        sliderVideo.play();
        playPause.innerText = "Pause"
    } else {
        sliderVideo.pause();
        playPause.innerText = "Play"
    }
}




const footerBtn = document.querySelector('.js-footer__button');


footerBtn.onclick = function() {
    footerBtn.innerText = "26/8/2002"
}