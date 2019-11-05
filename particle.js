function Particle(x, y)

 {
  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
	
	this.fallRate =random(0.05, 0.15);    //下落速度
	 //this.resistance = random(0.85, 0.98); 
     this.resistance =1;//抵抗力
	this.baseWidth = random(30, 40);
	this.minHeight = random(10, 15);
}


