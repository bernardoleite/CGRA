/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTelescope(scene) {
	CGFobject.call(this,scene);
	
	this.pipe = new MyCylinder(this.scene, 100, 1);
	this.tampo = new MyPolygon(this.scene,100,1);
	
};

MyTelescope.prototype = Object.create(CGFobject.prototype);
MyTelescope.prototype.constructor=MyTelescope;

MyTelescope.prototype.display = function (){

this.scene.pushMatrix();
	this.scene.translate(-1.7,3,0);
	this.scene.scale(0.5,0.1,0.1);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.pipe.display();
	
this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.translate(0,3,1.7);
	this.scene.scale(0.1,0.1,0.1);
	this.tampo.display();
	
this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.translate(-1.5,3,0);
	this.scene.scale(0.1,1.5,0.1);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.pipe.display();
	
this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.translate(0,3,-1.2);
	this.scene.scale(0.1,0.1,0.1);
	this.tampo.display();
	
this.scene.popMatrix();

}
