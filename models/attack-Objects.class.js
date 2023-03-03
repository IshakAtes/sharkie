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
//         this.speedY = 30;
//         // this.applyGravity();
//         // setInterval( ()=> {
//         //     this.x += 4;
//         // }, 1000 / 60)
//     }

// }



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
        // this.x = 132; // mit this.x greif ich auf die variable x in Moveable-Object zu, was ja die vorlage für alle UnterOrdner ist. Danach ändere ich diese, NUR FÜR dieses Object hier.
        // this.y = 372;
        this.applyGravity();
        // setInterval(() => {
        //     this.y -= 2;
        // }, 1000 / 60);
    }
}