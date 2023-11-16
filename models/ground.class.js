class Floor extends MovableObject {
    width = 1024;
    height = 500;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 768 - this.height; // y-koordinate berechnen indem die height (vom Object 500) von der vergebenen canvas höhe (768) abgezogen wird. So kann das Objekt an der unteren stelle vom Canvas positioniert werden, ohne mehrmals zu korrigieren oder anzupassen.
    }
}