let box1;
let t1, t2, t3, t4, t5, t6, t7, t8, t9;
let b;
let hint;

function preload() {
  img3 = loadImage("assets/3.png");
  img4 = loadImage("assets/4.png");
  img5 = loadImage("assets/5.png");
  img6 = loadImage("assets/6.png");
  img7 = loadImage("assets/7.png");
  img8 = loadImage("assets/8.png");
  img9 = loadImage("assets/9.png");
  img10 = loadImage("assets/10.png");
  img11 = loadImage("assets/11.png");
  img21 = loadImage("assets/21.png")
}

function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent(canvasContainer);
  t1 = 1
  t2 = 2
  t3 = 4
  t4 = 3
  t5 = 6
  t6 = 5
  t7 = 7
  t8 = 9
  t9 = 8
  b = 0
  hint = 0
  imageMode(CORNER)
}

function draw() {
  background(49);
  if (keyIsPressed) {
    if (key == "h" && hint == 0) {
      hint = 1
    }
  }
  if (hint == 1) {
    push()
    fill(255)
    textSize(15);
    text(t1 + 2, 0, 15)
    text(t2 + 2, 15, 15)
    text(t3 + 2, 30, 15)
    text(t4 + 2, 0, 30)
    text(t5 + 2, 15, 30)
    text(t6 + 2, 30, 30)
    text(t7 + 2, 0, 45)
    text(t8 + 2, 15, 45)
    text(t9 + 2, 30, 45)
    pop()
  }
  box1 = new Box1(100, 100);
  box2 = new Box2(500, 100);
  box3 = new Box3(900, 100);
  box4 = new Box4(100, 500);
  box5 = new Box5(500, 500);
  box6 = new Box6(900, 500);
  box7 = new Box7(100, 900);
  box8 = new Box8(500, 900);
  box9 = new Box9(900, 900);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  if (mouseIsPressed && prevkey == false) {
    prevkey = true
    if (mouseX < 300 && mouseY < 300 && mouseX > 100 && mouseY > 100) {
      box1.move();
    }
    if (mouseX < 500 && mouseX > 300 && mouseY < 300 && 100 < mouseY) {
      box2.move();
    }
    if (key == "3") {
      box3.move();
    }
    if (mouseX < 300 && mouseX > 100 && mouseY < 500 && 300 < mouseY) {
      box4.move();
    }
    if (mouseX < 500 && mouseX > 300 && mouseY < 500 && 300 < mouseY) {
      box5.move();
    }
    if (mouseX < 700 && mouseX > 500 && mouseY < 500 && 300 < mouseY) {
      box6.move();
    }
    if (mouseX < 300 && mouseX > 100 && mouseY < 700 && 500 < mouseY) {
      box7.move();
    }
    if (mouseX < 500 && mouseX > 300 && mouseY < 700 && 500 < mouseY) {
      box8.move();
    }
    if (key == "9") {
      box9.move();
    }
  }
  if (mouseIsPressed == false) {
    prevkey = false
  }

  if (t1 == 2 && t2 == 9 && t4 == 7 && t5 == 5 && t6 == 3 && t7 == 6 && t8 == 1) {
    //if (t1 == 1 && t2 == 3 && t4 == 3 && t5 == 6 && t6 == 5 && t7 == 7 && t8 == 9) {
    fill(255)
    rect(50, 50, 600, 600)
    push()
    imageMode(CENTER)
    if (b < 600) {
      b = b + 50
    }
    img21.resize(b, b)
    image(img21, width / 2, height / 2)
    pop()
    textSize(20)
    text("Click the right bottom Corner to go to the next Page", 50, 680)

  }

}

class Box1 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t1 == 1) {
      image(img3, this.x, this.y)
    }
    if (t1 == 2) {
      image(img4, this.x, this.y)
    }
    if (t1 == 3) {
      image(img5, this.x, this.y)
    }
    if (t1 == 4) {
      image(img6, this.x, this.y)
    }
    if (t1 == 5) {
      image(img7, this.x, this.y)
    }
    if (t1 == 6) {
      image(img8, this.x, this.y)
    }
    if (t1 == 7) {
      image(img9, this.x, this.y)
    }
    if (t1 == 8) {
      image(img10, this.x, this.y)
    }
    if (t1 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t1 < 10) {
      t1 = t1 + 1
    }
    if (t1 == 10) {
      t1 = 1
    }
  }

}

class Box2 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t2 == 1) {
      image(img3, this.x, this.y)
    }
    if (t2 == 2) {
      image(img4, this.x, this.y)
    }
    if (t2 == 3) {
      image(img5, this.x, this.y)
    }
    if (t2 == 4) {
      image(img6, this.x, this.y)
    }
    if (t2 == 5) {
      image(img7, this.x, this.y)
    }
    if (t2 == 6) {
      image(img8, this.x, this.y)
    }
    if (t2 == 7) {
      image(img9, this.x, this.y)
    }
    if (t2 == 8) {
      image(img10, this.x, this.y)
    }
    if (t2 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t2 < 10) {
      t2 = t2 + 1
    }
    if (t2 == 10) {
      t2 = 1
    }
  }

}

class Box3 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t3 == 1) {
      image(img3, this.x, this.y)
    }
    if (t3 == 2) {
      image(img4, this.x, this.y)
    }
    if (t3 == 3) {
      image(img5, this.x, this.y)
    }
    if (t3 == 4) {
      image(img6, this.x, this.y)
    }
    if (t3 == 5) {
      image(img7, this.x, this.y)
    }
    if (t3 == 6) {
      image(img8, this.x, this.y)
    }
    if (t3 == 7) {
      image(img9, this.x, this.y)
    }
    if (t3 == 8) {
      image(img10, this.x, this.y)
    }
    if (t3 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    /*if(t3<10){
      t3=t3+1
    }
    if(t3==10){
      t3=1
    }*/
  }

}

class Box4 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t4 == 1) {
      image(img3, this.x, this.y)
    }
    if (t4 == 2) {
      image(img4, this.x, this.y)
    }
    if (t4 == 3) {
      image(img5, this.x, this.y)
    }
    if (t4 == 4) {
      image(img6, this.x, this.y)
    }
    if (t4 == 5) {
      image(img7, this.x, this.y)
    }
    if (t4 == 6) {
      image(img8, this.x, this.y)
    }
    if (t4 == 7) {
      image(img9, this.x, this.y)
    }
    if (t4 == 8) {
      image(img10, this.x, this.y)
    }
    if (t4 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t4 < 10) {
      t4 = t4 + 1
    }
    if (t4 == 10) {
      t4 = 1
    }
  }
}

class Box5 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t5 == 1) {
      image(img3, this.x, this.y)
    }
    if (t5 == 2) {
      image(img4, this.x, this.y)
    }
    if (t5 == 3) {
      image(img5, this.x, this.y)
    }
    if (t5 == 4) {
      image(img6, this.x, this.y)
    }
    if (t5 == 5) {
      image(img7, this.x, this.y)
    }
    if (t5 == 6) {
      image(img8, this.x, this.y)
    }
    if (t5 == 7) {
      image(img9, this.x, this.y)
    }
    if (t5 == 8) {
      image(img10, this.x, this.y)
    }
    if (t5 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t5 < 10) {
      t5 = t5 + 1
    }
    if (t5 == 10) {
      t5 = 1
    }
  }
}

class Box6 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t6 == 1) {
      image(img3, this.x, this.y)
    }
    if (t6 == 2) {
      image(img4, this.x, this.y)
    }
    if (t6 == 3) {
      image(img5, this.x, this.y)
    }
    if (t6 == 4) {
      image(img6, this.x, this.y)
    }
    if (t6 == 5) {
      image(img7, this.x, this.y)
    }
    if (t6 == 6) {
      image(img8, this.x, this.y)
    }
    if (t6 == 7) {
      image(img9, this.x, this.y)
    }
    if (t6 == 8) {
      image(img10, this.x, this.y)
    }
    if (t6 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t6 < 10) {
      t6 = t6 + 1
    }
    if (t6 == 10) {
      t6 = 1
    }
  }
}

class Box7 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t7 == 1) {
      image(img3, this.x, this.y)
    }
    if (t7 == 2) {
      image(img4, this.x, this.y)
    }
    if (t7 == 3) {
      image(img5, this.x, this.y)
    }
    if (t7 == 4) {
      image(img6, this.x, this.y)
    }
    if (t7 == 5) {
      image(img7, this.x, this.y)
    }
    if (t7 == 6) {
      image(img8, this.x, this.y)
    }
    if (t7 == 7) {
      image(img9, this.x, this.y)
    }
    if (t7 == 8) {
      image(img10, this.x, this.y)
    }
    if (t7 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t7 < 10) {
      t7 = t7 + 1
    }
    if (t7 == 10) {
      t7 = 1
    }
  }

}

class Box8 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t8 == 1) {
      image(img3, this.x, this.y)
    }
    if (t8 == 2) {
      image(img4, this.x, this.y)
    }
    if (t8 == 3) {
      image(img5, this.x, this.y)
    }
    if (t8 == 4) {
      image(img6, this.x, this.y)
    }
    if (t8 == 5) {
      image(img7, this.x, this.y)
    }
    if (t8 == 6) {
      image(img8, this.x, this.y)
    }
    if (t8 == 7) {
      image(img9, this.x, this.y)
    }
    if (t8 == 8) {
      image(img10, this.x, this.y)
    }
    if (t8 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    if (t8 < 10) {
      t8 = t8 + 1
    }
    if (t8 == 10) {
      t8 = 1
    }
  }
}

class Box9 {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }
  display() {
    push()
    scale(0.5)
    if (t9 == 1) {
      image(img3, this.x, this.y)
    }
    if (t9 == 2) {
      image(img4, this.x, this.y)
    }
    if (t9 == 3) {
      image(img5, this.x, this.y)
    }
    if (t9 == 4) {
      image(img6, this.x, this.y)
    }
    if (t9 == 5) {
      image(img7, this.x, this.y)
    }
    if (t9 == 6) {
      image(img8, this.x, this.y)
    }
    if (t9 == 7) {
      image(img9, this.x, this.y)
    }
    if (t9 == 8) {
      image(img10, this.x, this.y)
    }
    if (t9 == 9) {
      image(img11, this.x, this.y)
    }
    pop()
  }
  move() {
    /*if(t9<10){
      t9=t9+1
    }
    if(t9==10){
      t9=1
    }*/
  }

}

// HTML / JS functions
//function openPaper() {


  //let img = document.getElementById("hint-img");
  //img.src = none;
  //console.log(img.src);


/*
  let box1 = document.getElementById("hint-paper-box");
  console.log(box);
  box.style.display = "none";
*/


