class BigBoss extends MovableObject {
    width = 400;
    height = 300;
    images_IDLE = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    constructor(){
        super().loadImage('./img/2.Enemy/3 Final Enemy/1.Introduce/10.png');
        this.loadImages(this.images_IDLE);
        this.x = 700;
        this.animate();
        // this.loadImage(this.images_IDLE);
        // this.x = 900 + Math.random() * 500;
        // this.y = -50;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.images_IDLE);
        }, 200);
    }


}