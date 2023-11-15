class DrawableObjects {
    world;
    poisenBubbleAttackActive = false;
    bubbleAttackActive = false;
    finslap = false;
    img;
    imageCache = {};
    currentImage = 0;
    x = 20;
    y = 300;
    height = 150;
    width = 150;



    loadImage(path) {
        this.img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
        this.img.src = path;
    }


    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Error loading image', error);
            console.log('Could not load image', this.img.src);
        }
    }


    drawCollisionFrame(ctx) {
        if(this instanceof Character || this instanceof PufferFish || this instanceof JellyFish || this instanceof BigBoss){
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            if (this instanceof Character) {
                ctx.strokeStyle = 'red';
                ctx.rect(this.x + 25, this.y + 60, this.width - 50, this.height - 90);
            }
            ctx.stroke();
        }
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); // new Image() ist keine Klasse. Es ist das gleiche wie ein img tag in Javascript <img src="#" alt="">
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    drawBubble() {
        if(!this.world.character.otherDirection) {
            let bubble = new AttackObject(this.world.character.x + 122, this.world.character.y + 60); //112, 72
            this.world.attackingObjects.push(bubble);
        } else if(this.world.character.otherDirection) {
            let bubble = new AttackObject(this.world.character.x + 0, this.world.character.y + 60, this.world.character.otherDirection); //70, 72
            this.world.attackingObjects.push(bubble);
        }
    }


    drawPoisenBubble() {
        if(!this.world.character.otherDirection && this.world.character.myPoisens >= 10) {
            let infectedBubble = new PoisenAttack(this.world.character.x + 122, this.world.character.y + 60); //112, 72
            this.world.attackingObjects.push(infectedBubble);
            this.world.character.myPoisens -= 10;
            this.world.poisenBar.setPercentage(this.world.character.myPoisens);
        } else if(this.world.character.otherDirection && this.world.character.myPoisens >= 10) {
            let infectedBubble = new PoisenAttack(this.world.character.x + 0, this.world.character.y + 60, this.world.character.otherDirection); //70, 72
            this.world.attackingObjects.push(infectedBubble);
            this.world.character.myPoisens -= 10;
            this.world.poisenBar.setPercentage(this.world.character.myPoisens);
        }
    }
}