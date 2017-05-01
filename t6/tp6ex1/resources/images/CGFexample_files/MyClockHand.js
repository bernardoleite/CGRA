/**
 * MyClockHand.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 
function MyClockHand(scene,size,comp) {
	CGFobject.call(this,scene);

	this.size = size;
	this.comp = comp;


	this.initBuffers();



};

MyClockHand.prototype = Object.create(CGFobject.prototype);
MyClockHand.prototype.constructor=MyClockHand;


MyClockHand.prototype.initBuffers = function (){


	this.vertices = [
	-0.015*this.comp, this.size,0,
	0.015*this.comp, this.size,0,
	this.comp*-0.015, 0, 0,
	this.comp*0.015,0,0
	];

	this.indices = [
	1,0,2,
	2,3,1
	];


	this.normals = [
	0,0,-1,
	0,0,-1,
	0,0,-1,
	0,0,-1
	];

	this.texCoords = [
	1,0,
	1,1,
	0,0,
	0,1
	];


	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
	


}


