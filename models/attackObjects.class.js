// class AttackObject extends MovableObject {

//     constructor(){
//         super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
//         this.x = 30;
//         this.y = 320;
//         this.height = 40;
//         this.width = 40;
//         this.bubble(130, 340);
//     }

//     bubble(x, y) {
//         this.x = x;
//         this.y = y;
//         // this.speedY = 30;
//         // this.applyGravity();
//         // setInterval( ()=> {
//         //     this.x += 4;
//         // }, 1000 / 60)
//     }

// }



class AttackObject extends MovableObject {

    constructor(){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.height = 40;
        this.width = 40;
        this.bubble();
    }

    bubble() {
        this.x = 130;
        this.y = 340;
        // this.speedY = 30;
        // this.applyGravity();
        // setInterval( ()=> {
        //     this.x += 4;
        // }, 1000 / 60)
    }

}