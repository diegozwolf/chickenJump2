class GameImage{
  constructor (url,x,y) {
    this.image = document.createElement('IMG')
    this.image.setAttribute("src", url)
    this.image.setAttribute("x", x)
    this.image.setAttribute("y" ,y)

    if (url === 'assets/chicken2.png') {
      this.image.id = 'chicken'

    } else {
      this.image.id = 'flame'
    }
    document.body.appendChild(this.image)

    this.onOnground = true
    this.yVelocity = 0
    this.speed = 1
    this.isAlive = true

    $( document ).keydown(function() {

      $("#chicken").css('top', '150px')
      $("#chicken").css('left','300px', 'easeInSine')

      setTimeout(function (){
        $("#chicken").css('top', '350px');
        $("#chicken").css('left', '400px');
      }, 500)



    })
  }


  updateImage (img, cvs, horizon, speed) {
    var nextBottom = horizon + this.yVelocity
    if (this.img.src === 'assets/chicken2.png') {
      if (this.img.y <= horizon  && nextBottom >= horizon) {
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
    if (this.image.x > (cvs.width -(cvs.width-1)) && this.image.x + this.image.width < cvs.width){
      this.isAlive = true
    } else {
      this.isAlive = false
    }
  }

  drawElement(img, x, y, ctx, cvs){
    // ctx = cvs.getContext('2d')
    ctx.drawImage(img,x,y)
    ctx.fillStyle = "#fff"
    ctx.fillRect(0,0, cvs.width, cvs.height)
    ctx.clearRect(0,0, cvs.width, cvs.height)
    requestAnimationFrame(drawElement)
  }

  hit (img, obs){
    return (obs.x <= image.x && obs.x >= img.x - img.width)
  }

  jump(){
    this.yVelocity = -(image.width / 2) * 0.75

  }
  moveImageRight(img){
    for(var i=0; i<=cvs.width; i++){
      img.y += this.speed
    }
  }
  moveImageLeft(img){
    for(var i=0; i<=cvs.width; i++){
      img.y -= this.speed
    }
  }
}
