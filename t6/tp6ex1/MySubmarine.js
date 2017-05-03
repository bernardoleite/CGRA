/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var rotLeft = 0;

 
function MySubmarine(scene) {
	CGFobject.call(this,scene);


	//this.initBuffers();
	this.tampo = new MyPolygon(this.scene,100,1);
	this.sub1 = new MyCylinder(this.scene, 100, 1);
	this.head = new MyCylinder(this.scene, 100, 1);
	this.pipe = new MyCylinder(this.scene, 100, 1);
	this.helice = new MyHelice(this.scene);
	this.telescope = new MyTelescope(this.scene);
	this.ssphere = new MySemiSphere(this.scene, 100, 5);
	this.trapezius = new MyTrapezius(this.scene);
	this.backhelice = new MyBackHelice(this.scene);
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;


MySubmarine.prototype.update = function() {

	this.RotateLeft(); 
	  		
  }


//RODAR ESQUERDA - TECLA A
  MySubmarine.prototype.RotateLeft = function() {

	rotLeft = rotLeft + 0.3;
  }






MySubmarine.prototype.display = function (){


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
	this.helice.display();
this.scene.popMatrix();

}






