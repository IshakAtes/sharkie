let canvas;
let world;
let keyboard = new Keyboard();
let background_sound = new Audio('./sounds/underwater.mp3');
let audioOn = false;


/**
 * This function load the Game
 */
function init(){
    canvas = document.getElementById('canvasId');
    backgroundAudio();
    world = new World(canvas, keyboard);
}

/**
 * This function check the audioOn boolean and place the correct speaker image in the ControllPanel area
 */
function backgroundAudio() {
    if (audioOn == true) {
        let speaker = document.getElementById('speakerId');
        speaker.src = './img/7.Controlls/mittleres-volumen.png';
        background_sound.play();
        background_sound.loop = true;
    } else if (audioOn == false) {
        audioOn = false;
        let speaker = document.getElementById('speakerId');
        speaker.src = './img/7.Controlls/stumm (2).png';
        background_sound.pause();
    }
}


/**
 * Smartphone Start Move Up
 */
function moveUp() {
    keyboard.UP = true;
    document.getElementById('up').style.opacity = '0.7';
}

/**
 * Smartphone Start Move Down
 */
function moveDown() {
    keyboard.DOWN = true;
    document.getElementById('down').style.opacity = '0.7';
}

/**
 * Smartphone Start Move Right
 */
function moveRight() {
    keyboard.RIGHT = true;
    document.getElementById('right').style.opacity = '0.7';
}

/**
 * Smartphone Start Move Left
 */
function moveLeft() {
    keyboard.LEFT = true;
    document.getElementById('left').style.opacity = '0.7';
}

/**
 * Smartphone Start Move Slap
 */
function moveSlap() {
    keyboard.V = true;
    document.getElementById('slap').style.opacity = '0.8';
}

/**
 * Smartphone Start Move Poisen Attack
 */
function movePoisenAtk() {
    keyboard.B = true;
    document.getElementById('poisenAttack').style.opacity = '0.8';
}

/**
 * Smartphone Start Move Normal Bubble Attack
 */
function moveNormalAtk() {
    keyboard.SPACE = true;
    document.getElementById('normalBubble').style.opacity = '0.8';
}

/**
 * Smartphone Stop Move Up
 */
function clearUp() {
    keyboard.UP = false;
    document.getElementById('up').style.opacity = '0.5';
}

/**
 * Smartphone Stop Move Down
 */
function clearDown() {
    keyboard.DOWN = false;
    document.getElementById('down').style.opacity = '0.5';
}

/**
 * Smartphone Stop Move Right
 */
function clearRight() {
    keyboard.RIGHT = false;
    document.getElementById('right').style.opacity = '0.5';
}

/**
 * Smartphone Stop Move Left
 */
function clearLeft() {
    keyboard.LEFT = false;
    document.getElementById('left').style.opacity = '0.5';
}

/**
 * Smartphone Stop Move Slap
 */
function clearSlap() {
    keyboard.V = false;
    document.getElementById('slap').style.opacity = '0.6';
}

/**
 * Smartphone Stop Move Poisen Attack
 */
function clearPoisenAtk() {
    keyboard.B = false;
    document.getElementById('poisenAttack').style.opacity = '0.6';
}

/**
 * Smartphone Stop Move Normal Bubble Attack
 */
function clearNormalAtk() {
    keyboard.SPACE = false;
    document.getElementById('normalBubble').style.opacity = '0.6';
}


/**
 * Check which keys are pressed
 */
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    // Attack Methods
    if (event.keyCode == 86) {
        keyboard.V = true;
    }

    if (event.keyCode == 66) {
        keyboard.B = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 27) {
        keyboard.ESC = true;
    }
});

/**
 * Check which keys you let off
 */
window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    // Attack Methods
    if (event.keyCode == 86) {
        keyboard.V = false;
    }
    if (event.keyCode == 66) {
        keyboard.B = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 27) {
        keyboard.ESC = false;
    }
});


document.addEventListener('touchstart', (event) => {
    if (event.keyCode == 39) {
        event.preventDefault();
    }
    if (event.keyCode == 37) {
        event.preventDefault();
    }
    if (event.keyCode == 38) {
        event.preventDefault();
    }
    if (event.keyCode == 40) {
        event.preventDefault();
    }

    if (event.keyCode == 86) {
        event.preventDefault();
    }

    if (event.keyCode == 66) {
        event.preventDefault();
    }

    if (event.keyCode == 32) {
        event.preventDefault();
    }

    if (event.keyCode == 27) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});