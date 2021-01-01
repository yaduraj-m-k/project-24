class Paper{
  constructor(x,y,radius){
      var options = {
         // isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,  
      }
      this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     World.add(world,this.body)
  }  
  display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    fill("yellow");
   ellipse (0,0,this.radius,this.radius);
   console.log(this.body.position.x)
   console.log(this.body.position.y)
   pop();
  
  }
}