/*Selector*/
g = (k) => { return document.querySelector(k) };
/*Selector All*/
gA = (k) => { return document.querySelectorAll(k) };
/*//Create Elemet */
create = (k) => { return document.createElement(k) }; /*Append Child Element*/
append = (k, l) => { return k.appendChild(l) }; /*Insert Element Before*/
iB = (j, k, l) => { return j.insertBefore(k, l) };

elementState = localStorage.getItem('elementState');

const video = g("#video");
let videoCont = g("#video-container");
let sound = g("#sound");
let menu = g("#menug");
let player = g("#play");
let stoper = g("#stop");
let prog = g("#volume");
let full = g("#full");
let fullscre = g("#fulls");
let randomColor = g("#dots");


function updateElementState(state) {
    localStorage.setItem('elementState', String(state));
    elementState = localStorage.getItem('elementState');
    if (elementState === 'played') {
        player.classList.add("pause");
        player.classList.remove("play");
    } else {
        if (state === 'initial') {
            video.currentTime = 0;
        }
        player.classList.add("play");
        player.classList.remove("pause");
    }
}

pl = () => {
    if (video.src !== '') {
        if (video.paused || elementState === 'paused') {
            video.play();

            updateElementState('played');

        } else if (video.played || elementState === 'played') {

            video.pause();

            updateElementState('paused');

        } else {
            video.pause();
            updateElementState('paused');
        }
    }
};

mute = () => {
    video.muted = !video.muted;
    sound.classList.toggle('muted');
    if (video.muted) {
        volume.value = 0;
    } else {
        volume.value = 5;
    }
};

volumeV = () => {
    video.volume = volume.value / 10;
    let tit = video.volume;
    volume.title = `volume = ${String(tit).slice(1-2)}00`;

};

songEnd = () => {
    updateElementState('initial');
    g("#next").click();
};

stop = () => {
    video.pause();
    updateElementState('initial');
};

//let progp =   g("#volumeP");
let volume = g("#volumeV");

let newMediaControllers = require('./assets/js/mediaControllers.js');
let mediaControllers = new newMediaControllers();
// ;
player.addEventListener("click", _ => mediaControllers.play(g("#video")));
stoper.addEventListener("click", mediaControllers.stop);
// sound.addEventListener("click", mute);