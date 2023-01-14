class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new JellyFish(),
        new BigBoss(),
    ];
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw();
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemyFish => {
            this.ctx.drawImage(enemyFish.img, enemyFish.x, enemyFish.y, enemyFish.width, enemyFish.height);
        });

            let self = this;
            requestAnimationFrame(function(){
                self.draw();
            });
    }
}