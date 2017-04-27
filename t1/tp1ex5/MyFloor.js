/**
 * MyTable.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyFloor(scene) {
	CGFobject.call(this,scene);

	this.floor= new MyUnitCubeQuad(this.scene);
	this.movetable= new MyTable(this.scene);
	
	//this.table.initBuffers();

	//this.initBuffers();
};

MyFloor.prototype = Object.create(CGFobject.prototype);
MyFloor.prototype.constructor=MyFloor;

MyFloor.prototype.display = function (){


this.scene.pushMatrix();
		
		this.scene.scale(8, 0.1, 6);
	
		this.scene.translate(0.5, 0.5, 0.5);

		this.floor.display();

this.scene.popMatrix();


}



/*
MyTable.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
            0.5, 0.5, 0
			];

	this.indices = [
            0, 1, 2, 
			3, 2, 1
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};*/
