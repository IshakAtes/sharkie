class AttackObject extends MovableObject {

    constructor(x, y){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.bubbleAttack();
    }

    bubbleAttack() {
        setTimeout(() => {
            this.applyGravity();
        }, 200);
        setInterval(() => {
            if (this.y > 0) {
                this.x += 2;
                setTimeout(() => {
                    this.y -= 5.0;
                }, 2500);
            }
        }, 1000 / 100);
    }

    
}