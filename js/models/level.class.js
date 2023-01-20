class Level {
    enemies;
    ground;
    water;
    bgShadow;
    level_end_x = 2470;

    constructor(enemies, ground, water, bgShadow){
        this.enemies = enemies;
        this.ground = ground;
        this.water = water;
        this.bgShadow = bgShadow;
    }
}