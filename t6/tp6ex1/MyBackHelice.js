/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyBackHelice(scene) {
	CGFobject.call(this,scene);
	
	this.ssphere = new MyLamp(this.scene, 100, 5);
	this.trapezius = new MyTrapezius(this.scene);
	
};

MyBackHelice.prototype = Object.create(CGFobject.prototype);
MyBackHelice.prototype.constructor=MyBackHelice;

MyBackHelice.prototype.display = function (){

this.scene.pushMatrix();
this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(6.0,0,0);
	this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.translate(0,0,6);
		this.ssphere.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,-6);
		this.ssphere.display();
	this.scene.popMatrix();


	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.translate(0,-6.5,-0.1);
		this.scene.scale(0.8,0.5,0.2);
		this.trapezius.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);

		this.scene.translate(0,0,0);
		this.scene.translate(0,-6.5,0);
		this.scene.scale(0.8,0.5,0.2);
		this.trapezius.display();
	this.scene.popMatrix();

this.scene.popMatrix();

}
