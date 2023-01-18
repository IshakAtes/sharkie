class Character extends MovableObject {
    speed = 8;
    Images_Idle = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png',
    ];
    Images_SWIM = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ];
    world;

    constructor(){
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.Images_Idle);
        this.loadImages(this.Images_SWIM);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                let i = this.currentImage % this.Images_SWIM.length;
                let path = this.Images_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 160);


        setInterval(() => {
            if (this.world.keyboard.right) {
                this.x += this.speed;
            }
        }, 1000 / 30);

        setInterval(() => {
            if (this.world.keyboard.left) {
                this.x -= this.speed;
            }
        }, 1000 / 30);

        setInterval(() => {
            if (this.world.keyboard.up) {
                this.y -= this.speed;
            }
        }, 120);

        setInterval(() => {
            if (this.world.keyboard.down) {
                this.y += this.speed;
            }
        }, 120);



        setInterval(() => {
            let i = this.currentImage % this.Images_Idle.length;
            let path = this.Images_Idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 155);
    }

    // attack(){
    // }

}


// if (this.world.keyboard.right) {
//     let i = this.currentImage % this.Images_SWIM.length;
//     let path = this.Images_SWIM[i];
//     this.img = this.imageCache[path];
//     this.currentImage++;
// }