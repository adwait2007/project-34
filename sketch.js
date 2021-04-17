const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;
const Mouse=Matter.Mouse;
const Render=Matter.Render;

let world,engine;
let box1,box2,box3,box4,box5;
let rope1,rope2,rope3,rope4,rope5;
let mConstraint;


function setup(){
 createCanvas(500,500);

 engine=Engine.create();
 world=engine.world;


    box1=new Pendulum(100,300,15);
    box2=new Pendulum(162,300,15);
    box3=new Pendulum(224,300,15);
    box4=new Pendulum(286,300,15);
    box5=new Pendulum(348,300,15);

    rope1=new Sling(box1.body,{x:100,y:45});
    rope2=new Sling(box2.body,{x:162,y:45});
    rope3=new Sling(box3.body,{x:224,y:45});
    rope4=new Sling(box4.body,{x:286,y:45});
    rope5=new Sling(box5.body,{x:348,y:45});

    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });
    

}

function draw(){
    background(0);
    Engine.update(engine);

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse,
    }
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY});
}