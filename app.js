$(document).ready(function(){
  var cvs = document.getElementById('canvas')
  var ctx = cvs.getContext('2d')
  cvs.addEventListener('onload', draw)
  var horizon = cvs.height - 60
  var score = 0
  var obstacles = []
  obstacles[0] = {
    x: cvs.width,
    y: horizon
  }
  var chicken = new Image('assets/chicken2.png', 100, horizon, cvs)
  var obstacleSpeed = 5

  var flame


  function draw () {
    drawHorizon()
    chicken.update(horizon)
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
    flame = new Image('assets/flame2.png', cvs.width, horizon, cvs)
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
})
