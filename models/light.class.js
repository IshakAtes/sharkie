class Light extends MovableObject {
    world;
    y = 0;
    width = 4000;
    height = 900;
    stopMove = false;

    /**
     * the constructor is always executed first when the structure is called
     */
    constructor(){
        super().loadImage('./img/3. Background/Layers/1. Light/COMPLETO.png');
        this.x = -300;
        this.animate();
    }

    /**
     * this function start to animate the Sun light
     */
    animate() {
        setInterval(() => this.moveLight(), (1000 / 60)/ 0.2);
    }

    /**
     * This function shows how the sun is animated
     */
    moveLight() {
        if (this.x >= -400 && !this.stopMove) {
            this.x -= 1;
        } else {
            this.stopMove = true;
            this.x += 1;
            if (this.x > -300) {
                this.stopMove = false;
            }
        }
    }
}