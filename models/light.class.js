class Light extends MovableObject {
    world;
    y = 0;
    width = 4000;
    height = 900;

    constructor(){
        super().loadImage('./img/3. Background/Layers/1. Light/COMPLETO.png');
        this.x = -500;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveLight(), 100);
    }

    moveLight() {
        if (this.world.keyboard.RIGHT) {
            this.x -= 1;
        }
        if (this.world.keyboard.LEFT) {
            this.x += 1;
        }
    }
}