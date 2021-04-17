class Sling{
    constructor(bodyA,pointB){
        let options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:255,
        }
        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    display(){
        if (this.sling.bodyA){
            let pointA=this.sling.bodyA.position;
            let pointB=this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            strokeWeight(15)
            point(pointA.x,pointA.y);
            point(pointB.x,pointB.y);
            pop();
        }
    }
}