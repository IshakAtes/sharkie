let gameStatement = false;
let tryAgainStatement = false;


function checkAndReplay(){
    console.log('Replay', tryAgainStatement);
    if (tryAgainStatement) {
        startGame();
    }
}


function tryAgain() {
    tryAgainStatement = true;
    console.log(tryAgainStatement);
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}


function startGame() {
    tryAgainStatement = false;
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