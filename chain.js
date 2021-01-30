class Rope {
    constructor(body1,body2,xoffset){
        var option={
            bodyA:body1,
            bodyB:body2,stiffnes:1,length:200,
            pointB:{x:xoffset,y:0}

        }
        this.xoffset=xoffset
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        stroke("WHITE")
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
    }
}