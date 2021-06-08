class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
          
           
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed<3){
          var angle = this.body.angle;
        var pos= this.body.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
    
        }else{
          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity-5;
          tint(255,this.visibility);
          pop();
        }
        
      }
}