$(document).ready(function(){
  cvs = document.getElementById('canvas')
  ctx = cvs.getContext('2d')
  cvs.addEventListener('onload', draw)
  horizon = cvs.height - 60
  score = 0
  obstacles = []
  obstacles[0] = {
    x: cvs.width,
    y: horizon
  }

  chicken = new GameImage('assets/chicken2.png',100,300, ctx, cvs)
  flame = new GameImage('assets/flame2.png',cvs.width,300, ctx, cvs)
  obstacleSpeed = 5

  flame = {};
  while (chicken.isAlive){
    setTimeout(function(){resetObstable()}, 1100);
  }
  // $('#flame').css({right:250});
  // $('#flame').animate ({
  //   right: '+=1000',
  // }, 0, 'linear', function(){
  // });


});
function resetObstable(){
  $("#flame").css({right: 250});
  setTimeout(function(){$("#flame").css({right: 750});},100);
}

function draw(){
  drawHorizon()
  chicken.drawElement(chicken ,100, horizon, ctx, cvs)
  chicken.moveImageRight(chicken)
  debugger
  newObstacles()
  flame.drawElement(flame,cvs.width, horizon,ctx,cvs )
  flame.moveImageLeft(flame)
  handleObstacles()
  requestAnimationFrame(draw)
}

function drawHorizon () {
  ctx.beginPath()
  ctx.moveTo(0, horizon)
  ctx.lineTo(cvs.width, horizon)
  ctx.stroke()

  ctx.fillStyle = '#000'
  ctx.font = '24px Verdana'
  ctx.fillText('Score : ' + score, 10, cvs.width - 30)
  requestAnimationFrame(drawHorizon)
}

function handleObstacles () {
  for (var i = 0; i < obstacles.length; i++) {
    var obsX = ctx.getImageData.x
    obstacles[i].updateImage(flame, cvs, horizon, obstacleSpeed)
    obstacles[i].drawElement(flame, obsX, horizon, cvs)

    if (obstacles[i].hit(chicken)) {
      endGame()
    }
    else {
      newObstacles()
      score += 5
    }

    if (!obstacles[i].onScreen) {
      obstacles.splice(i, 1)
    }
  }
}

function newObstacles () {
  flame = new GameImage('assets/flame2.png')
}

document.addEventListener('UP_ARROW', keyPressed)
function keyPressed () {
  if ((keyCode === UP_ARROW || keyCode === 32) && chicken.onGround){
    chicken.jump()
  }
}

function endGame () {
  ctx.fillStyle = '#000'
  ctx.font = '24px Verdana'
  ctx.fillText('press spacerbar to restart : ', cvs.width / 2, cvs.height / 2)
}
