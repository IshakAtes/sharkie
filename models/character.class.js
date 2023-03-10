class Character extends MovableObject {
    // x = 150;
    speed = 8; //make it 8 if game finish
    images_IDLE = [
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
    images_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        './img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png',
    ];
    images_SWIM = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ];
    images_BUBBLE = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    world;
    swimming_Sound = new Audio('sounds/swimmingFish.mp3')

    constructor(){
        super().loadImage('./img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_IDLE);
        this.loadImages(this.images_DEAD);
        this.loadImages(this.images_SWIM);
        this.loadImages(this.images_BUBBLE);
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.swimming_Sound.pause();
            
            if (this.isDead()) {
                this.playAnimation(this.images_DEAD);
            } else if (this.world.keyboard.V) {
                // Bubble Attack
                this.bubbleAttack();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                // Swimm Animation
                this.playAnimation(this.images_SWIM);
                this.swimming_Sound.play();
            }
            
        }, 100);


        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT && this.x > -814) {
                this.moveLeft();
                this.otherDirection = true; 
            }

            this.world.camera_x = -this.x + 200;

            if (this.world.keyboard.UP) {
                this.moveUp();
            }

            if (this.world.keyboard.DOWN) {
                this.moveDown();
            }
        }, 30);

        setInterval(() => {
            this.playAnimation(this.images_IDLE);
        }, 140);
    }

    // attack(){
    // }

}