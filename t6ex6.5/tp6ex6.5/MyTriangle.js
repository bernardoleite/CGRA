/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTriangle(scene, minS = 0, maxS=1, minT=0) {
	CGFobject.call(this,scene);
	
	this.minS = minS;
	this.minT = minT;
	this.maxS = maxS;
	
	this.initBuffers();
};

MyTriangle.prototype = Object.create(CGFobject.prototype);
MyTriangle.prototype.constructor=MyTriangle;

MyTriangle.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
			];

	this.indices = [
            0, 1, 2, 
        ];

   
    this.texCoords = [ 
    	1,0,
    	0,1,
    	1,1,
    ];

		
	this.primitiveType=this.scene.gl.TRIANGLES;


	   this.normals = [
		0, 0, 1,
		0, 0, 1,
		0, 0, 1
       ]


	this.initGLBuffers();
};
