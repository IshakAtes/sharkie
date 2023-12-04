class Level {
    enemies;
    ground;
    level_end_x = 2244;

    /**
     * The constructor is always executed first when the structure is called
     * 
     * @param {object} enemies 
     * @param {object} ground 
     */
    constructor(enemies, ground){
        this.enemies = enemies;
        this.ground = ground;
    }
}