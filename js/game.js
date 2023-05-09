let canvas;
let world;
let keyboard = new Keyboard();
let background_sound = new Audio('./sounds/underwater.mp3');



function init(){
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    background_sound.play();

    console.log('My Character is', world);
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