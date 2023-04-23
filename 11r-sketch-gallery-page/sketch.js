let colors = [
  "Crimson",
  "DarkMagenta",
  "AliceBlue",
  "Black",
  "DarkOliveGreen"
];
let name = [
  "Optimus Prime",
  "Optronix Optimus Prime",
  "Magnus Prime",
  "Nemesis Prime",
  "Toxitron",
]

let bodyColor;
let primeName;
let d, a
function setup() {
  let canvas = createCanvas(600, 800);
  canvas.parent(canvasContainer)
  angleMode(DEGREES);
  d = 0;
  a = 0;

  randomIndex = floor(random(colors.length));
  bodyColor = colors[randomIndex];
  primeName = name[randomIndex]
}

function draw() {
  background(220);
  fill(bodyColor)
  textSize(15)
  text(primeName, 20, 30)
  textSize(11)
  text("Press the mouse to let him transform to a truck!!!", 10, 50)
  text("Press the key 'T' to let him transform back", 10, 70)
  if (mouseIsPressed) {
    if (d < 90) {
      d = d + 1
    }
    if (a < 80 && d == 90) {
      a = a + 1
    }
  }
  if (keyIsPressed) {
    if (key == "t") {
      if (d > 0 && a == 0) {
        d = d - 1;
      }
      if (a > 0) {
        a = a - 1;
      }
    }
  }
  if (bodyColor == "Black") {
    stroke(255);
  }

  drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
  push();
  translate(x, y);

  drawhead(-25, -379 + d)

  drawarm(-215 + a, -300, d)
  drawarm(185 - a, -300, d)
  drawleg(-100, -20, d)
  drawleg(60, -20, d)
  drawbody(-225, -350)
  drawwheel1(-55, -70, d)
  drawwheel2(105, -70, d)

  pop();

}

function drawhead(x, y) {
  push();
  translate(x, y);
  fill(76, 84, 222)
  arc(50, 50, 80, 80, PI - QUARTER_PI, QUARTER_PI, OPEN);
  fill(200);
  rect(22, 45, 56, 33);
  strokeWeight(1);
  line(50, 45, 50, 78);
  strokeWeight(3);
  stroke(76, 84, 222);
  line(10, 50, 10, 0);
  line(90, 50, 90, 0);
  fill(194, 196, 81);
  stroke(0);
  strokeWeight(1);
  rect(26, 37, 20, 8)
  rect(54, 37, 20, 8);
  fill(255);
  rect(43, -1, 14, 24);

  pop();
}
function drawbody(x, y) {
  push();
  translate(x, y);
  fill(bodyColor)
  rect(90, 50, 320, 150);
  rect(170, 150, 160, 130)
  fill(133, 209, 234);
  rect(125, 75, 100, 60);
  rect(275, 75, 100, 60);
  for (let i = 0; i <= 9; i++) {
    fill(176, 191, 196)
    rect(200, i * 13 + 150, 100, 13)
  }
  fill(200)
  rect(170, 280, 160, 50)

  pop()
}

function drawwheel1(x, y, d) {
  push()
  translate(x, y)
  rotate(-d)
  fill(200)
  rect(-50, -80, 50, 80)
  fill(20)
  rect(-80 - d / 3, -80, 30 + d / 3, 50)


  pop()
}
function drawwheel2(x, y, d) {
  push()
  translate(x, y)
  rotate(d)
  fill(200)
  rect(0, -80, 50, 80)
  fill(20)
  rect(50, -80, 30 + d / 3, 50)


  pop()
}

function drawarm(x, y, d) {
  push();
  fill(bodyColor)
  translate(x, y);
  rect(0, 0, 80, 150);
  beginShape();
  vertex(0, 150);
  vertex(0, 300 - d * 5 / 3)
  vertex(80, 300 - d * 5 / 3)
  vertex(80, 150)
  endShape()

  beginShape()
  vertex(0, 300 - d * 5 / 3)
  vertex(40 - d * 4 / 9, 300 - d * 7 / 9)
  vertex(40 + d * 4 / 9, 300 - d * 7 / 9)
  vertex(80, 300 - d * 5 / 3)
  endShape()



  pop();
}

function drawleg(x, y, d) {
  push();
  translate(x, y)
  fill(76, 84, 222)
  beginShape()
  vertex(0, 0);
  vertex(0 + d / 2, 300 - d * 10 / 3)
  vertex(90 - d / 2, 300 - d * 10 / 3)
  vertex(90, 0);
  endShape()
  pop();
}