class Light extends MovableObject {
    world;
    y = 0;
    width = 4000;
    height = 900;
    stopMove = false;

    constructor(){
        super().loadImage('./img/3. Background/Layers/1. Light/COMPLETO.png');
        this.x = -300;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveLight(), (1000 / 60)/ 0.2);
    }

    moveLight() {
        let sunLight = this.world.lights[0].x > -300;
        if (this.world.lights[0].x >= -400 && !this.stopMove) {
            this.x -= 1;
        } else {
            this.stopMove = true;
            this.x += 1;
            if (sunLight) {
                this.stopMove = false;
            }
        }
    }
}