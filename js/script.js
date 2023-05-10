let gameStatement = false;


function startGame() {
    let startScreen = document.getElementById('startCtnId');
    startScreen.style.display = 'none';
    gameStatement = true;
    init();
}


function toggleSound() {
    let speakerPath = document.getElementById('speakerId');
    if (audioOn) {
        audioOn = false;
        background_sound.pause();
        speakerPath.src = "./img/7.Controlls/stumm (2).png";
    } else {
        if (gameStatement) {
            background_sound.play();
            background_sound.loop = true
        }
        audioOn = true;
        speakerPath.src = "./img/7.Controlls/mittleres-volumen.png";
    }
}


function toggleFullscreen() {
    let canvas = document.getElementById('canvasId');
    canvas.requestFullscreen();
}