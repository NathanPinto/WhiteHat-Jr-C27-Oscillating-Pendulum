class Ball {
    constructor(x,y,radiusX,radiusY){
        
        this.body = Bodies.circle(x,y,radiusX, radiusY)
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        World.add(world,this.body);
    }
    display(){
    fill("red")
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,this.radiusX,this.radiusY)

    if(keyCode === 32){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
    if (keyCode === ENTER){
        this.body.position.x = 250;
        this.body.position.y = 250
    }
    }
}