function startGame() {
    let startScreen = document.getElementById('startCtnId');
    startScreen.style.display = 'none';
    init();
}


function toggleSound() {
    if (audioOn) {
        audioOn = false;
        background_sound.pause();
    } else {
        audioOn = true;
        background_sound.play();
        background_sound.loop = true
    }
}