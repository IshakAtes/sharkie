let canvas;
let world;



function init(){
    canvas = document.getElementById('canvasId');
    world = new World(canvas);

    console.log('My Character is', world);
}