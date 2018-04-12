$(document).ready(function(){
  function Image (url, x, y, cvs) {
    this.image = document.createElement('IMG')
    this.image.setAttribute("src", url)
    this.image.setAttribute("x", x)
    this.image.setAttribute("y",y)
    document.body.appendChild(this.image)
    this.onOnground = true
    this.yVelocity = 0
    this.speed = 1
  }


  function updateImage(img, cvs, horizon, speed) {
    var nextBottom = horizon + this.yVelocity
    if (this.img.src === 'assets/chicken2.png') {
      if ( this.img.y <= horizon  && nextBottom >= horizon) {
        this.onGround = true
        img.y = horizon - this.yVelocity
        this.yVelocity = 0
      } else if(horizon - this.img.y > 1){
        this.yVelocity += speed
        this.onGround = false
      }
    } else {
      this.onScreen = (this.image.x > (cvs.width -(cvs.width-1)) && this.image.x + this.image.width < cvs.width)
      this.image.x -= speed
    }
  }

  function drawElement(img, x,y, cvs){
    ctx = cvs.getContext('2d')
    ctx.drawImage(img,x,y)
    ctx.fillStyle = "#fff"
    ctx.fillRect(0,0,cvs.width,cvs.height)
    ctx.clearRect(0,0,cvs.width,cvs.height)
    requestAnimationFrame(drawElement)
  }

  function hit (img, obs){
    return (obs.x <= image.x && obs.x >= img.x - img.width)
  }

  function jump(){
    this.yVelocity = -(image.width / 2) * 0.75
  }

})
