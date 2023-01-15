class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new JellyFish(),
        new BigBoss(),
    ];
    lights = [
        new Light(),
    ];
    barriers = [
        new BarrierBlock(),
    ];
    ground = [
        new Floor(),
    ];
    water = [
        new Water()
    ];
    fondo = [
        new Fondo2('./img/3. Background/Legacy/Layers/4.Fondo 2/L1.png'),
        new BackgroundObject('./img/3. Background/Legacy/Layers/3.Fondo 1/L1.png'),
    ];
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.water.forEach(waterStripes => {
            this.ctx.drawImage(waterStripes.img, waterStripes.x, waterStripes.y, waterStripes.width, waterStripes.height);
        });


        this.fondo.forEach(background => {
            this.ctx.drawImage(background.img, background.x, background.y, background.width, background.height);
        });


        this.barriers.forEach(barrier => {
            this.ctx.drawImage(barrier.img, barrier.x, barrier.y, barrier.width, barrier.height);
        });


        this.ground.forEach(floor => {
            this.ctx.drawImage(floor.img, floor.x, floor.y, floor.width, floor.height);
        });


        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemyFish => {
            this.ctx.drawImage(enemyFish.img, enemyFish.x, enemyFish.y, enemyFish.width, enemyFish.height);
        });


        this.lights.forEach(waterLight => {
            this.ctx.drawImage(waterLight.img, waterLight.x, waterLight.y, waterLight.width, waterLight.height);
        });



        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}