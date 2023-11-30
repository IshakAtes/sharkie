class BackgroundObject extends MovableObject {
    world;
    width = 1024;
    height = 600;

    constructor(imagePath, x, y, speed){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y - this.height;
        this.animate(speed);
    }

    animate(speed) {
        setInterval(() => this.moveBackground(speed), 100);
    }

    moveBackground(speed) {
        if (this.world.keyboard.RIGHT) {
            this.x -= speed;
            console.log(this.world);
        }
        if (this.world.keyboard.LEFT) {
            this.x += speed;
        }
    }
}