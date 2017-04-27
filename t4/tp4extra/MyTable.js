/**
 * MyTable.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.table= new MyUnitCubeQuad(this.scene);

	//sem texturas
	/*this.materialMad = new CGFappearance(this.scene); //imp
	this.materialMad.setAmbient(0.1,0.1,0.1,1);
	this.materialMad.setDiffuse(153/255,76/255,0,1);
	this.materialMad.setSpecular(0,0,0,1);	
	this.materialMad.setShininess(120);

	//sem texturas
	this.materialMet = new CGFappearance(this.scene); //imp
	this.materialMet.setAmbient(0.1,0.1,0.1,1);
	this.materialMet.setDiffuse(0.5,0.5,0.5,1);
	this.materialMet.setSpecular(1,1,1,1);	
	this.materialMet.setShininess(120);*/

	//com texturas
	this.materialMad = new CGFappearance(this.scene); //imp
	this.materialMad.setAmbient(0.1,0.1,0.1,1);
	this.materialMad.setDiffuse(1,1,1,1); //+
	this.materialMad.loadTexture("resources/images/table.png");
	this.materialMad.setSpecular(0.1,0.1,0.1,1);	//--
	this.materialMad.setShininess(50); //--

 	//com texturas
	this.materialMet = new CGFappearance(this.scene); //imp
	this.materialMet.setAmbient(0.1,0.1,0.1,1);
	this.materialMad.setDiffuse(153/255,76/255,0,1);
	this.materialMet.setSpecular(1,1,1,1);	
	this.materialMet.setShininess(120);
	
	//this.table.initBuffers();

	//this.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function (){


this.scene.pushMatrix();

		this.scene.scale(0.3, 3.5, 0.3);

		this.scene.translate(0.5, 0.5, 0.5);

		this.materialMet.apply();

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

		this.materialMad.apply();

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
