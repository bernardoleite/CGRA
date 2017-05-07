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

    this.perZ = -0.5;

	//this.initBuffers();
	this.tampo = new MyPolygon(this.scene,100,1);
	this.sub1 = new MyCylinder(this.scene, 100, 1);
	this.head = new MyCylinder(this.scene, 100, 1);
	this.pipe = new MyCylinder(this.scene, 100, 1);
	this.helice1 = new MyHelice(this.scene);
	this.helice2 = new MyHelice(this.scene);
	this.telescope = new MyTelescope(this.scene);
	this.ssphere = new MySemiSphere(this.scene, 100, 5);
	this.trapezius = new MyTrapezius(this.scene);
	this.backhelice = new MyBackHelice(this.scene);
	this.heli = new MyHeli(this.scene);

};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

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

};

MySubmarine.prototype.goBack = function() {

		this.speed += 0.1;
		this.rangle = 0;
		this.updown = 0;
		this.dir = 1;

};

MySubmarine.prototype.goUp = function() {
			
		this.y += 0.5;
		this.updown = 1;
		this.dir = 0;
		this.rangle = Math.PI/2;

};

MySubmarine.prototype.goDown = function() {

		this.y -= 0.5;
		this.updown = 1;
		this.dir = 0;
		this.rangle = Math.PI/2;

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

		/////////// ventoinha trazeira

			this.scene.pushMatrix();
				this.backhelice.display();
			this.scene.popMatrix();
		

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

			

}






