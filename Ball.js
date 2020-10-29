class Ball {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 5){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        }else{
          //do nothing
          World.remove(world , this.body)
          push();
          this.visiblity = this.visiblity - 5
          tint(255 , this.visiblity)
          image(this.image,0,0,this.width,this.height);
          pop();
        }
      }
    }