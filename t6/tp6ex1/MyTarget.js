/**
 * MyTarget.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTarget(scene, posx = 0, posy =0, posz = 0) {
	CGFobject.call(this,scene);

	this.posx = posx;
	this.posy = posy;
	this.posz = posz;
	this.bool = true;


	this.targett= new MyCylinder(this.scene, 10, 1);

	
};

MyTarget.prototype = Object.create(CGFobject.prototype);
MyTarget.prototype.constructor=MyTarget;

MyTarget.prototype.display = function (){


this.scene.pushMatrix();

this.scene.translate(this.posx,this.posy,this.posz);

this.scene.translate(0,1,0);

this.scene.rotate(Math.PI/2,1,0,0);

this.targett.display();

this.scene.popMatrix();



}



