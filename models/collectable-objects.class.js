class Coin extends MovableObject {
    height = 50;
    width = 50;
    x = (200 + Math.random() * 500) + 1200 * Math.random();
    y = 200 + Math.random() * 500;
    images_Coin = [
        './img/4. Marcadores/1. Coins/1.png',
        './img/4. Marcadores/1. Coins/2.png',
        './img/4. Marcadores/1. Coins/3.png',
        './img/4. Marcadores/1. Coins/4.png',
    ];

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(){
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.images_Coin);
        this.animate();
    }

    /**
     * This function set the Intervall, how fast the Coins are Animated
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Coin);
        }, 99);
    }

}



class Poisen extends MovableObject {
    height = 64;
    width = 45;
    x = (Math.random() * 900) + 1200 * Math.random();
    y = 640;
    images_Poisen = [
        './img/4. Marcadores/Posión/Animada/1.png',
        './img/4. Marcadores/Posión/Animada/2.png',
        './img/4. Marcadores/Posión/Animada/3.png',
        './img/4. Marcadores/Posión/Animada/4.png',
        './img/4. Marcadores/Posión/Animada/5.png',
        './img/4. Marcadores/Posión/Animada/6.png',
        './img/4. Marcadores/Posión/Animada/7.png',
        './img/4. Marcadores/Posión/Animada/8.png',
    ];

    /**
     * The constructor is always executed first when the structure is called
     */
    constructor(){
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.images_Poisen);
        this.animate();
    }


    /**
     * This function set the Intervall, how fast the PoisenBottles are Animated
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Poisen);
        }, 99);
    }
}