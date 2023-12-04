class BackgroundObject extends MovableObject {
    world;
    width = 1024;
    height = 600;

    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {string} imagePath Contains the link to the image
     * @param {number} x Shows the coordinates on the x axis
     * @param {number} y Shows the coordinates on the y axis
     * @param {number} speed determines how fast it goes
     */
    constructor(imagePath, x, y, speed){
        super().loadImage(imagePath);
        this.x = x;
        this.y = y - this.height;
        this.animate(speed);
    }

    /**
     * This function set the intervall how fast the Shadows moves
     * 
     * @param {number} speed 
     */
    animate(speed) {
        setInterval(() => this.moveBackground(speed), 100);
    }

    /**
     * This function animate the Shadows in the Background, if the Character moves
     * @param {number} speed 
     */
    moveBackground(speed) {
        if (this.world.keyboard.RIGHT && this.world.character.x < this.world.level.level_end_x) {
            this.x -= speed;
        }
        if (this.world.keyboard.LEFT && this.world.character.x > -814) {
            this.x += speed;
        }
    }
}