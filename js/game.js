let canvas;
let ctx;
let character = new Image();


function init(){
    canvas = document.getElementById('canvasId');
    ctx = canvas.getContext('2d');

    character.src = './img/1.Sharkie/1.IDLE/1.png';

    setTimeout(function ff() {
        ctx.drawImage(character, 20, 20, 50, 150);
    }, 2000);
}