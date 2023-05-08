let a;

function preload() {
    imageBack = loadImage("assets/0noalter.png");
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
    img0pp = loadImage("assets/0p.png");
    img1pp = loadImage("assets/1p.png");
    img2pp = loadImage("assets/2p.png");
    img3pp = loadImage("assets/3p.png");
    img4pp = loadImage("assets/4p.png");
    img5pp = loadImage("assets/5p.png");
    img6pp = loadImage("assets/6p.png");
    img7pp = loadImage("assets/7p.png");
    img8pp = loadImage("assets/8p.png");
    img9pp = loadImage("assets/9p.png");
    img10pp = loadImage("assets/10p.png");
    img11pp = loadImage("assets/11p.png");
    img12pp = loadImage("assets/12p.png");
    img13pp = loadImage("assets/13p.png");
    img14pp = loadImage("assets/14p.png");
    img15pp = loadImage("assets/15p.png");
    img16pp = loadImage("assets/16p.png");
    img17pp = loadImage("assets/17p.png");
    img18pp = loadImage("assets/18p.png");
    img19pp = loadImage("assets/19p.png");
    img20pp = loadImage("assets/20p.png");
    img21pp = loadImage("assets/21p.png");
    img0 = loadImage("assets/0.png")
    img1 = loadImage("assets/1.png")
    img2 = loadImage("assets/2.png")
    img3 = loadImage("assets/3.png")
    img4 = loadImage("assets/4.png")
    img5 = loadImage("assets/5.png")
    img6 = loadImage("assets/6.png")
    img7 = loadImage("assets/7.png")
    img8 = loadImage("assets/8.png")
    img9 = loadImage("assets/9.png")
    img10 = loadImage("assets/10.png")
    img11 = loadImage("assets/11.png")
    img12 = loadImage("assets/12.png")
    img13 = loadImage("assets/13.png")
    img14 = loadImage("assets/14.png")
    img15 = loadImage("assets/15.png")
    img16 = loadImage("assets/16.png")
    img17 = loadImage("assets/17.png")
    img18 = loadImage("assets/18.png")
    img19 = loadImage("assets/19.png")
    img20 = loadImage("assets/20.png")
    img21 = loadImage("assets/21.png")

}

function setup() {
    let canvas = createCanvas(1400, 800);
    //canvas.parent(canvasContainer2);
    imageMode(CENTER);
    angleMode(DEGREES);
    a = 23;
}

function draw() {
    //console.log(img0p.width)
    background(0);
    scale(1.2)
    imageBack.resize(300, 300);
    image(imageBack, 350, 350);
    push();
    translate(350, 350);
    img1p.resize(39.2, 68);
    img2p.resize(39.2, 68);
    img3p.resize(39.2, 68);
    img4p.resize(39.2, 68);
    img5p.resize(39.2, 68);
    img6p.resize(39.2, 68);
    img7p.resize(39.2, 68);
    img8p.resize(39.2, 68);
    img9p.resize(39.2, 68);
    img10p.resize(39.2, 68);
    img11p.resize(39.2, 68);
    img12p.resize(39.2, 68);
    img13p.resize(39.2, 68);
    img14p.resize(39.2, 68);
    img15p.resize(39.2, 68);
    img16p.resize(39.2, 68);
    img17p.resize(39.2, 68);
    img18p.resize(39.2, 68);
    img19p.resize(39.2, 68);
    img20p.resize(39.2, 68);
    img21p.resize(39.2, 68);
    img0p.resize(39.2, 68);
    image(img0p, 250, 0);
    image(img1p, 250 * cos(360 / 22), 250 * sin(360 / 22));
    image(img2p, 250 * cos((360 / 22) * 2), 250 * sin((360 / 22) * 2));
    image(img3p, 250 * cos((360 / 22) * 3), 250 * sin((360 / 22) * 3));
    image(img4p, 250 * cos((360 / 22) * 4), 250 * sin((360 / 22) * 4));
    image(img5p, 250 * cos((360 / 22) * 5), 250 * sin((360 / 22) * 5));
    image(img6p, 250 * cos((360 / 22) * 6), 250 * sin((360 / 22) * 6));
    image(img7p, 250 * cos((360 / 22) * 7), 250 * sin((360 / 22) * 7));
    image(img8p, 250 * cos((360 / 22) * 8), 250 * sin((360 / 22) * 8));
    image(img9p, 250 * cos((360 / 22) * 9), 250 * sin((360 / 22) * 9));
    image(img10p, 250 * cos((360 / 22) * 10), 250 * sin((360 / 22) * 10));
    image(img11p, 250 * cos((360 / 22) * 11), 250 * sin((360 / 22) * 11));
    image(img12p, 250 * cos((360 / 22) * 12), 250 * sin((360 / 22) * 12));
    image(img13p, 250 * cos((360 / 22) * 13), 250 * sin((360 / 22) * 13));
    image(img14p, 250 * cos((360 / 22) * 14), 250 * sin((360 / 22) * 14));
    image(img15p, 250 * cos((360 / 22) * 15), 250 * sin((360 / 22) * 15));
    image(img16p, 250 * cos((360 / 22) * 16), 250 * sin((360 / 22) * 16));
    image(img17p, 250 * cos((360 / 22) * 17), 250 * sin((360 / 22) * 17));
    image(img18p, 250 * cos((360 / 22) * 18), 250 * sin((360 / 22) * 18));
    image(img19p, 250 * cos((360 / 22) * 19), 250 * sin((360 / 22) * 19));
    image(img20p, 250 * cos((360 / 22) * 20), 250 * sin((360 / 22) * 20));
    image(img21p, 250 * cos((360 / 22) * 21), 250 * sin((360 / 22) * 21));
    pop();
    //console.log(a)

    if (a == 0) {
        fill(255);
        textSize(30);
        text("Number0: the Fool", 700, 170);
        image(img0pp, 800, 360);
        img0.resize(200, 200)
        image(img0, 1000, 360)
    }
    if (a == 1) {
        fill(255);
        textSize(30);
        text("Number1: the Magician", 700, 170);
        image(img1pp, 800, 360);
        img1.resize(200, 200)
        image(img1, 1000, 360)
    }
    if (a == 2) {
        fill(255);
        textSize(30);
        text("Number2: the High Priestress", 700, 170);
        image(img2pp, 800, 360);
        img2.resize(200, 200)
        image(img2, 1000, 360)
    }
    if (a == 3) {
        fill(255);
        textSize(30);
        text("Number3: the empress", 700, 170);
        image(img3pp, 800, 360);
        img3.resize(200, 200)
        image(img3, 1000, 360)
    }
    if (a == 4) {
        fill(255);
        textSize(30);
        text("Number4: the Emperor", 700, 170);
        image(img4pp, 800, 360);
        img4.resize(200, 200)
        image(img4, 1000, 360)
    }
    if (a == 5) {
        fill(255);
        textSize(30);
        text("Number5: the Hierophant", 700, 170);
        image(img5pp, 800, 360);
        img5.resize(200, 200)
        image(img5, 1000, 360)
    }
    if (a == 6) {
        fill(255);
        textSize(30);
        text("Number6: the Lovers", 700, 170);
        image(img6pp, 800, 360);
        img6.resize(200, 200)
        image(img6, 1000, 360)
    }
    if (a == 7) {
        fill(255);
        textSize(30);
        text("Number7: the Chariot", 700, 170);
        image(img7pp, 800, 360);
        img7.resize(200, 200)
        image(img7, 1000, 360)
    }
    if (a == 8) {
        fill(255);
        textSize(30);
        text("Number8: the Strength", 700, 170);
        image(img8pp, 800, 360);
        img8.resize(200, 200)
        image(img8, 1000, 360)
    }
    if (a == 9) {
        fill(255);
        textSize(30);
        text("Number9: the Hermit", 700, 170);
        image(img9pp, 800, 360);
        img9.resize(200, 200)
        image(img9, 1000, 360)
    }
    if (a == 10) {
        fill(255);
        textSize(30);
        text("Number10: the Wheel of Fortune", 700, 170);
        image(img10pp, 800, 360);
        img10.resize(200, 200)
        image(img10, 1000, 360)
    }
    if (a == 11) {
        fill(255);
        textSize(30);
        text("Number11: the Justice", 700, 170);
        image(img11pp, 800, 360);
        img11.resize(200, 200)
        image(img11, 1000, 360)
    }
    if (a == 12) {
        fill(255);
        textSize(30);
        text("Number12: the Hanged Man", 700, 170);
        image(img12pp, 800, 360);
        img12.resize(200, 200)
        image(img12, 1000, 360)
    }
    if (a == 13) {
        fill(255);
        textSize(30);
        text("Number13: Death", 700, 170);
        image(img13pp, 800, 360);
        img13.resize(200, 200)
        image(img13, 1000, 360)
    }
    if (a == 14) {
        fill(255);
        textSize(30);
        text("Number14: Temperance", 700, 170);
        image(img14pp, 800, 360);
        img14.resize(200, 200)
        image(img14, 1000, 360)
    }
    if (a == 15) {
        fill(255);
        textSize(30);
        text("Number15: the Devil", 700, 170);
        image(img15pp, 800, 360);
        img15.resize(200, 200)
        image(img15, 1000, 360)
    }
    if (a == 16) {
        fill(255);
        textSize(30);
        text("Number16: the Tower", 700, 170);
        image(img16pp, 800, 360);
        img16.resize(200, 200)
        image(img16, 1000, 360)
    }
    if (a == 17) {
        fill(255);
        textSize(30);
        text("Number17: the Star", 700, 170);
        image(img17pp, 800, 360);
        img17.resize(200, 200)
        image(img17, 1000, 360)
    }
    if (a == 18) {
        fill(255);
        textSize(30);
        text("Number18: the Moon", 700, 170);
        image(img18pp, 800, 360);
        img18.resize(200, 200)
        image(img18, 1000, 360)
    }
    if (a == 19) {
        fill(255);
        textSize(30);
        text("Number19: the Sun", 700, 170);
        image(img19pp, 800, 360);
        img19.resize(200, 200)
        image(img19, 1000, 360)
    }
    if (a == 20) {
        fill(255);
        textSize(30);
        text("Number20: the Judgement", 700, 170);
        image(img20pp, 800, 360);
        img20.resize(200, 200)
        image(img20, 1000, 360)
    }
    if (a == 21) {
        fill(255);
        textSize(30);
        text("Number21: the World", 700, 170);
        image(img21pp, 800, 360);
        img21.resize(200, 200)
        image(img21, 1000, 360)
    }
}

function mousePressed() {
    if (
        mouseX > 600 * 1.2 - 15 * 1.2 &&
        mouseX < 600 * 1.2 + 15 * 1.2 &&
        mouseY > 350 * 1.2 - 30 * 1.2 &&
        mouseY < 350 * 1.2 + 30 * 1.2
    ) {
        a = 0;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 1) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 1) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 1) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 1) * 1.2
    ) {
        a = 1;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 2) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 2) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 2) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 2) * 1.2
    ) {
        a = 2;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 3) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 3) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 3) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 3) * 1.2
    ) {
        a = 3;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 4) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 4) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 4) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 4) * 1.2
    ) {
        a = 4;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 5) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 5) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 5) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 5) * 1.2
    ) {
        a = 5;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 6) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 6) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 6) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 6) * 1.2
    ) {
        a = 6;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 7) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 7) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 7) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 7) * 1.2
    ) {
        a = 7;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 8) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 8) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 8) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 8) * 1.2
    ) {
        a = 8;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 9) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 9) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 9) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 9) * 1.2
    ) {
        a = 9;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 10) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 10) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 10) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 10) * 1.2
    ) {
        a = 10;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 11) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 11) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 11) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 11) * 1.2
    ) {
        a = 11;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 12) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 12) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 12) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 12) * 1.2
    ) {
        a = 12;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 13) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 13) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 13) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 13) * 1.2
    ) {
        a = 13;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 14) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 14) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 14) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 14) * 1.2
    ) {
        a = 14;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 15) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 15) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 15) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 15) * 1.2
    ) {
        a = 15;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 16) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 16) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 16) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 16) * 1.2
    ) {
        a = 16;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 17) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 17) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 17) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 17) * 1.2
    ) {
        a = 17;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 18) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 18) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 18) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 18) * 1.2
    ) {
        a = 18;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 19) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 19) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 19) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 19) * 1.2
    ) {
        a = 19;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 20) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 20) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 20) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 20) * 1.2
    ) {
        a = 20;
    } else if (
        mouseX < 365 * 1.2 + 250 * cos((360 / 22) * 21) * 1.2 &&
        mouseX > 335 * 1.2 + 250 * cos((360 / 22) * 21) * 1.2 &&
        mouseY < 380 * 1.2 + 250 * sin((360 / 22) * 21) * 1.2 &&
        mouseY > 320 * 1.2 + 250 * sin((360 / 22) * 21) * 1.2
    ) {
        a = 21;
    } else {
        a = 23;
    }
}
