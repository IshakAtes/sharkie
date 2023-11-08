let canvas;
let world;
let keyboard = new Keyboard();
let background_sound = new Audio('./sounds/underwater.mp3');
let audioOn = false;
// wenn das Projekt fertig ist AudioOn = true setzen. Ansonsten Wenn man das spiel
// startet, ist das spiel lautlos aber es ist das Lautsprecher offen icon zusehen.


function init(){
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    backgroundAudio();
    console.log('My Character is', world);
}

function backgroundAudio() {
    if (audioOn) {
        background_sound.play();
        background_sound.loop = true;
    }
}


// MOVE CONTROLLER FOR SMARTPHONES
function moveUp() {
    keyboard.UP = true;
}

function moveDown() {
    keyboard.DOWN = true;
}

function moveRight() {
    keyboard.RIGHT = true;
}

function moveLeft() {
    keyboard.LEFT = true;
}

function moveSlap() {
    keyboard.V = true;
}

function movePoisenAtk() {
    keyboard.B = true;
}

function moveNormalAtk() {
    keyboard.SPACE = true;
}


function clearUp() {
    keyboard.UP = false;
}

function clearDown() {
    keyboard.DOWN = false;
}

function clearRight() {
    keyboard.RIGHT = false;
}

function clearLeft() {
    keyboard.LEFT = false;
}

function clearSlap() {
    keyboard.V = false;
}

function clearPoisenAtk() {
    keyboard.B = false;
}

function clearNormalAtk() {
    keyboard.SPACE = false;
}


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
});


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
    console.log(event)
});