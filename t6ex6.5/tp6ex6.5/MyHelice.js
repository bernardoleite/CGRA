/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyHelice(scene) {
	CGFobject.call(this,scene);
	
	this.sub1 = new MyCylinder(this.scene, 100, 1);
	this.cube = new MyUnitCubeQuad(this.scene);
	
};

MyHelice.prototype = Object.create(CGFobject.prototype);
MyHelice.prototype.constructor=MyHelice;

MyHelice.prototype.display = function (){


this.scene.pushMatrix();

	this.scene.rotate(Math.PI,1,0,0);
	this.scene.translate(0,0,-0.2);

	this.scene.pushMatrix();
		this.scene.scale(0.1,0.1,0.1);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.sub1.display();	
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.scale(0.4,0.4,0.4);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.sub1.display();
	this.scene.popMatrix();

this.scene.popMatrix();

/*this.scene.pushMatrix();
this.scene.translate(-5.5,0,0);

	this.scene.pushMatrix();

		this.scene.scale(0.1,0.1,0.1);
		//this.scene.translate(mov,0,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.translate(0,14,0);
		this.sub1.display();	
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.scale(0.4,0.4,0.4);
		//this.scene.translate(mov,0,0);
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.translate(0,3.5,0);
		this.sub1.display();
	this.scene.popMatrix();

	
this.scene.popMatrix();*/

}