/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var clockSecAngle = 90;
 
function MySubmarine(scene) {
	CGFobject.call(this,scene);

	this.angle = Math.PI/2;
	this.rangle = 0;
	this.rx = 1.4;
	this.ry = 0;
	this.rz = -5.75;

	this.updown = 0;
	this.dir = 1;
	this.y = 0;
    this.x = 0;
    this.z = 0;
    this.speed = 0;
    this.rrangle = 0;

    this.perZ = -0.5;

	//this.initBuffers();
	this.tampo = new MyPolygon(this.scene,100,1);
	this.sub1 = new MyCylinder(this.scene, 100, 1);
	this.head = new MyCylinder(this.scene, 100, 1);
	this.pipe = new MyCylinder(this.scene, 100, 1);
	this.helice1 = new MyHelice(this.scene);
	this.helice2 = new MyHelice(this.scene);
	this.telescope = new MyTelescope(this.scene);
	this.ssphere = new MyLamp(this.scene, 100, 5);
	this.trapezius = new MyTrapezius(this.scene);
	this.backhelice = new MyBackHelice(this.scene);
	this.heli = new MyHeli(this.scene);
	this.torpedo = new Torpedo (this.scene, 0, 0, 0,Math.PI/2);

};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

   MySubmarine.prototype.update2 = function(t) {

this.newPointx = Math.pow((1-t), 3)*this.p1x+ 3*t*Math.pow((1-t), 2)*this.p2x + 3*Math.pow(t,2)*(1-t)*this.p3x + Math.pow(t,3)*this.p4x;
this.newPointy = Math.pow((1-t), 3)*this.p1y+ 3*t*Math.pow((1-t), 2)*this.p2y + 3*Math.pow(t,2)*(1-t)*this.p3y + Math.pow(t,3)*this.p4y;
this.newPointz = Math.pow((1-t), 3)*this.p1z+ 3*t*Math.pow((1-t), 2)*this.p2z + 3*Math.pow(t,2)*(1-t)*this.p3z + Math.pow(t,3)*this.p4z;	
		  		
  }

  MySubmarine.prototype.setAngleSec = function(ang) {
	clockSecAngle=ang;
  }

  //right x = 2.5, 0, 1.2

MySubmarine.prototype.goLeft = function() {
	let newAng = this.angle + 10 * degToRad;
	if (newAng > 2 * Math.PI)
		this.angle = newAng - 2 * Math.PI;
	else
		this.angle = newAng;

	this.rangle = - Math.PI/7;
	this.rrangle = -Math.PI/7;
	this.updown = 0;
	this.dir = 1;
}
;

MySubmarine.prototype.goRight = function() {
    let newAng = this.angle - 10 * degToRad;
    if (newAng < 0)
        this.angle = 2 * Math.PI + newAng;   //newAng is <0
    else
        this.angle = newAng;

    this.rangle = Math.PI/7;
   this.rrangle = Math.PI/7;
    this.updown = 0;
	this.dir = 1;
};


MySubmarine.prototype.update = function() {

    	this.x -= this.speed*Math.cos(this.angle);
    	this.z += this.speed*Math.sin(this.angle);
			
    	this.heli.up(clockSecAngle, this.speed);


};

MySubmarine.prototype.goFront = function() {
			
		this.speed -= 0.1;
		this.rangle = 0;
		this.updown = 0;
		this.dir = 1;
	   this.rrangle = 0;


};

MySubmarine.prototype.goBack = function() {

		this.speed += 0.1;
		this.rangle = 0;
		this.updown = 0;
		this.dir = 1;
			   this.rrangle = 0;


};

MySubmarine.prototype.goUp = function() {
			
		this.y += 0.5;
		this.updown = 1;
		this.dir = 0;
		this.rangle = Math.PI/2;
			   this.rrangle = 0;


};

MySubmarine.prototype.goDown = function() {

		this.y -= 0.5;
		this.updown = 1;
		this.dir = 0;
		this.rangle = Math.PI/2;
			   this.rrangle = 0;


};

MySubmarine.prototype.goPerUp = function() {
			
		if(this.perZ != 0.5){
			this.perZ += 0.1;
		}

};

MySubmarine.prototype.goPerDown = function() {

		if(this.perZ != -0.5){
			this.perZ -= 0.1;
		}

};



MySubmarine.prototype.display = function (){



	this.scene.pushMatrix();
		this.scene.translate(this.x, this.y, this.z);
		this.scene.rotate(this.angle + Math.PI/2 , 0, 1, 0);
		
		this.scene.pushMatrix()
			this.scene.rotate(Math.PI/2,0,1,0);

			this.scene.pushMatrix();
				this.scene.translate(-5.65,0,-1.4);
				this.heli.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(-5.65,0,1.4);
				this.heli.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(-2,2,0);
				this.scene.scale(1,2,1);
				this.scene.rotate(Math.PI/2,1,0,0);
				this.head.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.scale(6,1,1);
				this.scene.rotate(Math.PI/2,0,0,1);
				this.scene.rotate(-Math.PI/2,1,0,0);
				this.sub1.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.rotate(Math.PI/2,0,1,0);
				this.scene.rotate(-Math.PI/2,1,0,0);
				this.scene.translate(0,2,2);
				this.tampo.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,this.perZ,0);
				this.telescope.display();
			this.scene.popMatrix();


			this.scene.pushMatrix();
				this.scene.rotate(Math.PI/2,0,1,0);
				this.scene.translate(0,0,0);
				this.ssphere.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
					this.scene.rotate(Math.PI/2,0,1,0);
					this.scene.rotate(Math.PI/2,0,0,1);
					this.scene.rotate(Math.PI/2,1,0,0);
					this.scene.rotate(Math.PI/2,0,1,0);
					this.scene.translate(0,0,0);
					this.scene.translate(0,-6.5,0);
					this.scene.translate(0,4.5,1.25);
					this.scene.scale(0.8,0.5,0.2);
					this.trapezius.display();
			this.scene.popMatrix();

		/////////// ventoinha trazeira - foi alterado desde aqui até:
			this.scene.pushMatrix();
				this.scene.translate(-6.0,0,0);
				this.scene.rotate(Math.PI/2, 0,1,0);
				this.scene.rotate(this.rrangle/2, 0,1,0);
				this.backhelice.display();
			this.scene.popMatrix();
		//// aqui! (nao esquecer de substituir o codigo do MybackHelice todo pelo desta versao!)
		

			this.scene.pushMatrix();
				this.scene.rotate(Math.PI/2, 0,1,0);

				this.scene.pushMatrix();
					this.scene.translate(-1.4,0,-5.75);
					this.scene.rotate(this.rangle,this.updown,this.dir,0);
					this.helice2.display();
				this.scene.popMatrix();

				this.scene.pushMatrix();
					this.scene.translate(1.4,0,-5.75);
					this.scene.rotate(this.rangle,this.updown,this.dir,0);
					this.helice1.display();
				this.scene.popMatrix();
				
			this.scene.popMatrix();

		this.scene.popMatrix();
  	this.scene.popMatrix();


this.scene.pushMatrix();
if (this.scene.ACTIVATE_TORPEDO == true){
	this.scene.translate(this.newPointx-this.torpedo.posx,this.newPointy-this.torpedo.posy, this.newPointz-this.torpedo.posz);
	this.torpedo.display();
}
this.scene.popMatrix();

  	if(this.scene.ACTIVATE_TORPEDO == true){
		
	this.p1x = this.torpedo.posx;
	this.p1y = this.torpedo.posy;
	this.p1z = this.torpedo.posz;

	//console.log ('ponto p1:',this.p1x, this.p1y, this.p1z );

	this.p2x = this.torpedo.posx + Math.cos(this.angle)*6;
	this.p2y = this.torpedo.posy;
	this.p2z = this.torpedo.posz+ Math.sin(this.angle)*6;

	//console.log('this.angle:', this.angle);
	//console.log('Math.cos(this.angle):', Math.cos(this.angle));
	//console.log ('ponto p2:',this.p2x, this.p2y, this.p2z );

	this.p3x = this.scene.targets[this.scene.NR_TARGET].posx;
	this.p3y = this.scene.targets[this.scene.NR_TARGET].posy+3;
	this.p3z = this.scene.targets[this.scene.NR_TARGET].posz;

	//console.log ('ponto p3:',this.p3x, this.p3y, this.p3z );

	this.p4x = this.scene.targets[this.scene.NR_TARGET].posx;
	this.p4y = this.scene.targets[this.scene.NR_TARGET].posy;
	this.p4z = this.scene.targets[this.scene.NR_TARGET].posz;

	//console.log ('ponto p4:',this.p4x, this.p4y, this.p4z );

	
}

/*this.scene.pushMatrix();
				this.backhelice.display();
			this.scene.popMatrix();*/



}






