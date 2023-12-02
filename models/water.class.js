class Water extends MovableObject {
    world;
    y = 0;
    width = 1024;
    height = 800;
    waterRightCommand = false;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveWater(), 1000 / 60);
    }

    /**
     * Make Water moveable
     */
    moveWater() {
        let waterDirection = this.world.waters[0].x <= -1024;
        if (this.world.waters[12].x > this.world.level.level_end_x && !this.waterRightCommand) {
            this.x -= 1;
        } else {
            this.waterRightCommand = true;
            this.x += 1;
            if (waterDirection == false) {
                this.waterRightCommand = false;
            }
        }
    }
}