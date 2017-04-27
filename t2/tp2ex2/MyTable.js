/**
 * MyTable.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.table= new MyUnitCubeQuad(this.scene);
	
	//this.table.initBuffers();

	//this.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function (){


this.scene.pushMatrix();

		this.scene.scale(0.3, 3.5, 0.3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.table.display();

this.scene.popMatrix();

this.scene.pushMatrix();

		this.scene.translate(0, 0, 2.7);

		this.scene.scale(0.3, 3.5, 0.3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.table.display();

this.scene.popMatrix();

this.scene.pushMatrix();

		this.scene.translate(4.7, 0, 0);

		this.scene.scale(0.3, 3.5, 0.3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.table.display();

this.scene.popMatrix();

this.scene.pushMatrix();

		this.scene.translate(4.7, 0, 2.7);

		this.scene.scale(0.3, 3.5, 0.3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.table.display();

this.scene.popMatrix();

this.scene.pushMatrix();

		this.scene.translate(0, 3.5, 0);

		this.scene.scale(5, 0.3, 3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.table.display();

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
