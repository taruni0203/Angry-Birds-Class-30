class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility = 255
    this.image = loadImage("sprites/enemy.png");
  }
  display(){

    //console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      tint(255,this.visibility);
      this.visibility = this.visibility - 2;
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }

};