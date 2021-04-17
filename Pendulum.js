class Pendulum{
    constructor(x,y,r){
        let options = {
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity,
            density:0.8
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        let angle = this.body.angle;
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(255);
        fill(0);
        ellipse(0,0,60,60);
        pop();
    }
}