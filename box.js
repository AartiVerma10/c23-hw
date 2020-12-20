class Box {
    constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1,
        'isStatic':false

    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    
    World.add(world,this.body);
  
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("red");
        rect(this.x,this.y,this.width,this.height);
       
    }

}
