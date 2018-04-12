var cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')

var grav = 2

var background = {
  url: 'assets/farm.jpg',
  load: false
}

var chicken = {
  url: 'assets/chiken2.png',
  load: false,
  y: 450,
  x: 0,
  speedx: 0,
  speedy: 0,
  onGround: true
}

var cloud = {
  url: 'assets/cloud.png',
  load: false,
  x: 800,
  y: 300
}

var flame = {
  url: 'assets/flame2.png',
  load: false,
  x: 1000,
  y: 450
}

background.image = new Image()
background.image.src = background.url
background.image.addEventListener('load', loadBackground)


chicken.image = new Image ()
chicken.image.src = chicken.url
chicken.image.addEventListener('load', loadChicken)


cloud.image = new Image ()
cloud.image.src = cloud.url
chicken.image.addEventListener('load', loadCloud)

flame.image = new Image ()
flame.image.src = flame.url
flame.image.addEventListener('load', loadFlame)

function loadBackground () {
  background.load = true
  draw()
}

function loadChicken () {
  chicken.load = true
  draw()
}
function loadCloud () {
  cloud.load = true
  draw()
}
function loadFlame () {
  flame.load = true
  draw()
}
function draw () {
  if (background.load) {
    ctx.drawImage(background.image, 0, 0)
  }

  if (chicken.load) {
    ctx.drawImage(chicken.image, 0, chicken.y)
  }

  if (cloud.load) {
    ctx.drawImage(cloud.image, cloud.x, cloud.y)
    // moveCloud()
  }

  if (flame.load) {
    // ctx.drawImage(flame.image, flame.initialx, flame.initialy)
    moveFlame()
  }
}

function moveCloud () {
  ctx.drawImage(cloud.image, cloud.x, cloud.y)
  updateCanvas()
  requestAnimationFrame(draw)
}

function moveFlame () {
  ctx.drawImage(flame.image, flame.x, flame.y)
  updateCanvas()
  requestAnimationFrame(draw)
}

 function clearCanvas () {
   ctx.clearRect(0, 0, cvs.width, cvs.height)
}

function  updateCanvas () {
  flame.x -= 1
  cloud.x -= 0.25
}

document.addEventListener('keydown', jump)
document.addEventListener('keyup', gravity)

function jump () {
  chicken.y -= 250
}

function gravity () {
  chicken.y += 250
}

// console.log('chicken');
// var cvs = document.getElementById('canvas');
//
// var ctx = cvs.getContext('2d');
// var chicken = new Image();
// chicken.src = 'assets/chiken2.png';
//
//
// var bg = new Image();
// bg.src = 'assets/cloud.png';
// var fg = new Image();
// var flame = new Image();
// flame.src = 'assets/flame2.png';
// ctx.drawImage(chicken, 200, cvs.height/4, 10, 200);
//
//
// // some variables
//
// var gravity = 1.5;
// var score = 0;
// //var x_position = cvs.width;
// //var y_position = cvs.height/2;
// var bX = 100;
// var bY = 150;
// var obstacle = [];
//
// obstacle[0] = {
//   x : cvs.width,
//   y : cvs.height/2
// };
//
// bg_move = [];
// bg_move[0] = {
//   x: cvs.width,
//   y: cvs.height/12
// };
// document.addEventListener('keyup', moveUp);
//
// function moveUp() {
//   y_position -= 40;
// }
// function draw (){
//   //ctx.drawImage(chicken, 100, 150, 50, 50);
//
//   for (var i = 0; i < obstacle.length; i++){
//     ctx.drawImage(flame, obstacle[i].x, obstacle[i].y);
//     obstacle[i].x--;
//     ctx.drawImage(bg, bg_move[i].x, bg_move[i].y);
//     bg_move[i].x = bg_move[i].x - 0.50;
//
//
//
//
//     if (bX + chicken.width >= obstacle[i].x && bX + chicken.width <= flame.width || bY + chicken.height >= obstacle[i].y) {
//       location.reload(); // reload the page
//     }
//
//     ctx.fillStyle = "#000";
//     ctx.font = "20px Verdana";
//     ctx.fillText("Score : " + score, 10, cvs.height - 20);
//
// requestAnimationFrame(draw);
//   }
//   ctx.drawImage(fg, 0, (cvs.height - fg.height));
//   ctx.drawImage(chicken, 0, 0);
//   bY += gravity;
// }
//
//
//
// draw();
