class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.i=255
    
  }

  display(){
    
    
    var pos = this.body.position
    
    console.log(this.body.speed);
    if(this.body.speed>3){
      World.remove(world,this.body);
      push();
      this.i=this.i-5;
      tint(255,this.i);
      image(this.image,pos.x,pos.y,50,50);
      pop();

    }
    else{super.display()
    }

  }

};