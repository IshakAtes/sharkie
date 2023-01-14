class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new JellyFish(),
        new BigBoss(),
    ];
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }


    draw(){
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }
}