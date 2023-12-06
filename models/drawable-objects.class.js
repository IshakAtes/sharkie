class DrawableObjects {
    finslap = false;
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 300;
    height = 150;
    width = 150;


    /**
     * This function load the image
     * @param {string} path cointain the link to the image 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This function make the image visible on the canvas
     * @param {*} ctx 
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading image', error);
            console.log('Could not load image', this.img.src);
        }
    }


    /**
     * This function draws a frame around the objects
     * @param {*} ctx 
     */
    drawCollisionFrame(ctx) {
        if(this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof BigBoss){
            ctx.beginPath();
            ctx.stroke();
        }
    }


    /**
     * This function load a Array with some images from an Object
     * @param {object} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}