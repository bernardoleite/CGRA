/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
           -0.5, -0.5, 0.5,
           0.5, -0.5, 0.5,
           0.5, 0.5, 0.5,
           -0.5, 0.5, 0.5,
           -0.5, -0.5, -0.5,
           0.5, -0.5, -0.5,
           -0.5, 0.5, -0.5,
           0.5, 0.5, -0.5  
			];

	this.indices = [
            0,1,2,
            2,3,0,
			6,7,5,
			5,4,6,
			2,7,6,
			6,3,2,
			1,5,7,
			7,2,1,
			0,3,6,
			0,6,4,
			4,5,1,
			1,0,4,
			0,6,4


        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
