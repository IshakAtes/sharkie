let gameStatement = false;
let tryAgainStatement = false;
let autoStart = localStorage.getItem('tryAgainLS');


function tryAgain() {
    localStorage.setItem('tryAgainLS', true);
    window.location.href = 'index.html';
}


function checkAndReplay(){
    if (autoStart == 'true') {
        tryAgainStatement = false;
        localStorage.setItem('tryAgainLS', tryAgainStatement);
        startGame();
    }
}


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