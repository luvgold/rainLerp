
var noiseScale = 0.005;
var noiseSpeed = 2;
var Particles = [];
var Particles1= [];
var Particles2= [];
var Particles3= [];

var pm25;
var o3;
var no2;

function setup() {

	createCanvas(1080,1410);
	duqu(0);
	ellipseMode(CENTER);

}
var count=0;
var i=0
var Calp = 25;
var Colerp = 0.0;
function draw() {

     if(count==500)
     {   count=0;
     	duqu(i%9);
         i++;


	         }//读取数据
	background(0,0,0,15);  
	
    count++;

    Calp = (Calp + 0.2) % 255;
    if (Colerp <= 0)
        Colerp += 0.05;
    if (Colerp >= 1)
        Colerp -= 0.05;
 //屏幕内数值映射
	let Count = int(map(no2, 0, width, 1, 50));  

	for (let i = 0; i <Count ; i++) {

		Particles.push(new Particle(random(576,1728), -10));
	}
	
	strokeWeight(0.5);
	
	for (let i = Particles.length-1; i > -1; i--) {
		let p = Particles[i];
		
		p.acc.add(new p5.Vector(0, p.fallRate));
		
		let n = noise((frameCount*(noiseSpeed*2))*noiseScale, 
								(frameCount*noiseSpeed)*noiseScale);
		
		
		if (n > 0.5) {
			p.vel.mult(p.resistance);
        }
      
		p.vel.add(p.acc );
		p.pos.add(p.vel);
		p.acc.mult(0);
	
        //fill(216, 29, 29);
        //fill(180, 255, 131, Calp);
        a = lerpColor(color(180, 255, 131, Calp), color(216, 29, 29, Calp), map(mouseX, 0, width, 0, 1));
        fill(a,Calp);
		let w = max(0.5, p.baseWidth-p.vel.mag()*2);
		let h = max(p.minHeight, p.vel.mag()*4);
		ellipse(p.pos.x, p.pos.y, w, h);
		 

		if (p.pos.y > height) {
		 Particles.splice(i, 1);
		}
	}
	



let Count1 = int(map(o3, 0, width, 1, 30));  //数量处理

	for (let i = 0; i <Count1; i++) {

		Particles1.push(new Particle(random(width),-10));
	}
	
	
	strokeWeight(0.5);
	
	for (let j = Particles1.length-1; j > -1; j--) {
		let q = Particles1[j];
		
  
		q.acc.add(new p5.Vector(0, q.fallRate));
		
		
		let m = noise((frameCount*(noiseSpeed*2))*noiseScale, 
									(frameCount*noiseSpeed)*noiseScale);
        if (m > 0.5) {
            q.vel.mult(q.resistance);
        }
         
        q.vel.add(q.acc);
        q.pos.add(q.vel);
        q.acc.mult(0);
		
        //map(mouseX, 0, width, 0, 1)
        b = lerpColor(color(0, 204, 53, Calp), color(237, 96, 0, Calp), map(mouseX, 0, width, 0, 1) );
        fill(b);
        //fill(237, 96, 0);
		//fill(0,204,53,Calp);   //最大
		let w = max(0.5, q.baseWidth-q.vel.mag()*2);
		let h = max(q.minHeight, q.vel.mag()*4);
		ellipse(q.pos.x, q.pos.y, w, h);
		


        if (q.pos.y > height) {
			Particles1.splice(j, 1);
		}
	}
	
	

	let Count3 = int(map(70, 0, width, 1,30));  //数量处理

	for (let i = 0; i < Count3; i++) {

	Particles3.push(new Particle(random(width),height));      //左边
	}
	
	
	strokeWeight(0.5);
	
	for (let j = Particles3.length-1; j > -1; j--) {
		let q = Particles3[j];
		
	
		q.acc.add(new p5.Vector(0, -q.fallRate));
		
	
		let m = noise((frameCount*(noiseSpeed*2)+q.pos.y)*noiseScale, 
									(frameCount*noiseSpeed+q.pos.x)*noiseScale);
		
         
		if (m > 0.5) {
			q.vel.mult(q.resistance);
		}
		
      
		q.vel.add(q.acc );
		q.pos.add(q.vel);
		q.acc.mult(0);
       // fill(255, 243, 169);
        //fill(3, 114, 87, Calp);
        c = lerpColor(color(3, 114, 87, Calp), color(255, 243, 169, Calp), map(mouseX, 0, width, 0, 1));
        fill(c);
		let w = max(0.5, q.baseWidth-q.vel.mag()*2);
		let h = max(q.minHeight, q.vel.mag()*4);
		ellipse(q.pos.x, q.pos.y, w, h);

		if (q.pos.y <0) {
			Particles3.splice(j, 1);
		}
	}
    let Count2 = int(map(pm25, 0, width, 1, 30));  //数量处理

    for (let i = 0; i < Count2; i++) {

        Particles2.push(new Particle(0, random(0, height)));      //左边
    }


    //strokeWeight(0.5);
    noStroke();

    for (let j = Particles2.length - 1; j > -1; j--) {
        let q = Particles2[j];


        q.acc.add(new p5.Vector(q.fallRate, 0));


        let m = noise((frameCount * (noiseSpeed * 2)) * noiseScale,
            (frameCount * noiseSpeed) * noiseScale);

        if (m > 0.5) {
            q.vel.mult(q.resistance);
        }


        q.vel.add(q.acc);
        q.pos.add(q.vel);
        q.acc.mult(0);
        // fill(252, 179, 48);
       // fill(255, 252, 136,Calp);
        d = lerpColor(color(255, 252, 136, Calp), color(252, 179, 48, Calp), map(mouseX, 0, width, 0, 1));
        fill(d);
        let w = max(0.5, q.baseWidth - q.vel.mag() * 2);
        let h = max(q.minHeight, q.vel.mag() * 4);

        ellipse(q.pos.x, q.pos.y, h, w);


        if (q.pos.x > width) {
            Particles2.splice(j, 1);
        }
    }


	
    textSize(20); 
	fill(255,193,51);
	text("".concat("PM2.5: ",pm25), width-200, height-60);

	fill(255,230,237);
	text("".concat("No2: ",no2), width-200, height-160 );

	fill(77,114,154);
	text("".concat("O3: ",o3),width-200, height-110);


}