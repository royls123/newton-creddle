class Bob{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,restitution:0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        
        this.radius= radius;
        
       

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        
        
       fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        
        pop();
      }
}