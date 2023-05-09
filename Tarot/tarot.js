let buttonA;
let buttonB;
let buttonC;

function preload() {
    imageBack = loadImage("assets/CardBack.png");
    img0p = loadImage("assets/0p.png");
    img1p = loadImage("assets/1p.png");
    img2p = loadImage("assets/2p.png");
    img3p = loadImage("assets/3p.png");
    img4p = loadImage("assets/4p.png");
    img5p = loadImage("assets/5p.png");
    img6p = loadImage("assets/6p.png");
    img7p = loadImage("assets/7p.png");
    img8p = loadImage("assets/8p.png");
    img9p = loadImage("assets/9p.png");
    img10p = loadImage("assets/10p.png");
    img11p = loadImage("assets/11p.png");
    img12p = loadImage("assets/12p.png");
    img13p = loadImage("assets/13p.png");
    img14p = loadImage("assets/14p.png");
    img15p = loadImage("assets/15p.png");
    img16p = loadImage("assets/16p.png");
    img17p = loadImage("assets/17p.png");
    img18p = loadImage("assets/18p.png");
    img19p = loadImage("assets/19p.png");
    img20p = loadImage("assets/20p.png");
    img21p = loadImage("assets/21p.png");
}

function setup() {
    angleMode(DEGREES)
    imageMode(CENTER)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(canvasContainer);
    background(0);

    buttonA = new Button(width / 4, height / 2, 196, 340);
    buttonB = new Button(width / 2, height / 2, 196, 340);
    buttonC = new Button(width * 0.75, height / 2, 196, 340);
}

function draw() {
    imageBack.resize(196, 340)
    background(0);

    buttonA.checkMouse();
    buttonA.display();

    buttonB.checkMouse();
    buttonB.display();

    buttonC.checkMouse();
    buttonC.display();
}

class Button {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = 22;
        this.t = int(random(1, 3))
    }
    checkMouse() {

        if (mouseIsPressed) {
            if (
                mouseX > this.x - this.w / 2 &&
                mouseX < this.x + this.w / 2 &&
                mouseY > this.y - this.h / 2 &&
                mouseY < this.y + this.h / 2
            ) {
                this.a = int(random(0, 22))
            }
        }
    }
    display() {
        push();
        translate(this.x, this.y);
        if (this.t == 1) {
            rotate(180)
        } else {

        }
        if (this.a == 22) {
            image(imageBack, 0, 0)
        } else if (this.a == 1) {
            image(img1p, 0, 0)
        } else if (this.a == 0) {
            image(img0p, 0, 0)
        } else if (this.a == 2) {
            image(img2p, 0, 0)
        } else if (this.a == 3) {
            image(img3p, 0, 0)
        } else if (this.a == 4) {
            image(img4p, 0, 0)
        } else if (this.a == 5) {
            image(img5p, 0, 0)
        } else if (this.a == 6) {
            image(img6p, 0, 0)
        } else if (this.a == 7) {
            image(img7p, 0, 0)
        } else if (this.a == 8) {
            image(img8p, 0, 0)
        } else if (this.a == 9) {
            image(img9p, 0, 0)
        } else if (this.a == 10) {
            image(img10p, 0, 0)
        } else if (this.a == 11) {
            image(img11p, 0, 0)
        } else if (this.a == 12) {
            image(img12p, 0, 0)
        } else if (this.a == 13) {
            image(img13p, 0, 0)
        } else if (this.a == 14) {
            image(img14p, 0, 0)
        } else if (this.a == 15) {
            image(img15p, 0, 0)
        } else if (this.a == 16) {
            image(img16p, 0, 0)
        } else if (this.a == 17) {
            image(img17p, 0, 0)
        } else if (this.a == 18) {
            image(img18p, 0, 0)
        } else if (this.a == 19) {
            image(img19p, 0, 0)
        } else if (this.a == 20) {
            image(img20p, 0, 0)
        } else if (this.a == 21) {
            image(img21p, 0, 0)
        }
        //console.log(this.a)
        pop();
    }

}