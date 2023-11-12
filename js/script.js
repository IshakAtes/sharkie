let gameStatement = false;
let tryAgainStatement = false;
let autoStart = localStorage.getItem('tryAgainLS');


function toggleControllPanel() {
    let panel = document.getElementById('controllsOverlay');
    panel.classList.toggle('toggleControlls');
}


function tryAgain() {
    localStorage.setItem('tryAgainLS', true);
    window.location.href = 'index.html';
}


function checkAndReplay(){
    if (autoStart == 'true') {
        localStorage.setItem('tryAgainLS', false);
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


    // let canvas = document.getElementById('canvasId');
    // canvas.requestFullscreen();
    function openFullscreen() {
        let fullscreen = document.getElementById('screenId');
        let iconCt = document.getElementById('panelCtId');
        iconCt.innerHTML = generateControllPanelHTML();
        enterFullscreen(fullscreen);
        document.getElementById('canvasId').classList.add('fullscreen-Class');
        document.getElementById('startScreenImageId').classList.add('fullscreen-Class');
        document.getElementById('startCtnId').style.top = '0';
        document.getElementById('gameOverOverlay').classList.add('fullscreenAndTopZero');
        document.getElementById('winningOverlay').classList.add('fullscreenAndTopZero');
    }

    function enterFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
            element.msRequestFullscreen();
        } else if(element.webkitRequestFullscreen) {  // iOS Safari
            element.webkitRequestFullscreen();
        }
    }

    function generateControllPanelHTML() {
        return`
            <img onclick="toggleControllPanel()" src="./img/7.Controlls/spielcontroller.png" alt="">
            <img onclick="toggleSound()" id="speakerId" src="./img/7.Controlls/stumm (2).png" alt="SoundOnOrOff">
            <img onclick="closeFullscreen()" id="fullscreenId" src="./img/7.Controlls/fullscreen (2).png" alt="fullscreen">
        `;
    }


    function closeFullscreen() {
        let iconCt = document.getElementById('panelCtId');
        iconCt.innerHTML = generateStandartControllPanelHTML();
        exitFullscreen();
        document.getElementById('canvasId').classList.remove('fullscreen-Class');
        document.getElementById('startScreenImageId').classList.remove('fullscreen-Class');
        document.getElementById('startCtnId').style.top = '87px';
        document.getElementById('gameOverOverlay').classList.remove('fullscreenAndTopZero');
        document.getElementById('winningOverlay').classList.remove('fullscreenAndTopZero');
    }

    function exitFullscreen() {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }



    function generateStandartControllPanelHTML() {
        return`
            <img onclick="toggleControllPanel()" src="./img/7.Controlls/spielcontroller.png" alt="">
            <img onclick="toggleSound()" id="speakerId" src="./img/7.Controlls/stumm (2).png" alt="SoundOnOrOff">
            <img onclick="openFullscreen()" id="fullscreenId" src="./img/7.Controlls/maximize.png" alt="fullscreen">
        `;
    }