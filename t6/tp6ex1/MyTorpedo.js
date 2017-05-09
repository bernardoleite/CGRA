/**
 * MyTorpedo.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTorpedo(scene, posx = 0, posy =0, posz = 0, orient = 0) {
	CGFobject.call(this,scene);

	this.posx = posx;
	this.posy = posy;
	this.posz = posz;


	this.corpo= new MyCylinder(this.scene, 100, 1);
	this.front = new MyLamp (this.scene,100,5 );
	this.back = new MyLamp (this.scene,100,5);
	this.trap1 = new MyTrapezius(this.scene);
	this.trap2 = new MyTrapezius(this.scene);



	this.targets = [this.scene.target1,this.scene.target2];
	
};

MyTorpedo.prototype = Object.create(CGFobject.prototype);
MyTorpedo.prototype.constructor=MyTorpedo;

MyTorpedo.prototype.display = function (){


	this.scene.pushMatrix();
		

		this.scene.translate(-7,-2,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(1/4,1/4,2);
		this.scene.translate(0,0,2);
		this.scene.translate(0,8,1);
		this.corpo.display();

	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.translate(-7,-2,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,6);
		this.scene.scale(1/4,1/4,1/4);
		this.scene.translate(0,8,8);
		this.front.display();

	this.scene.popMatrix();

	this.scene.pushMatrix();

		this.scene.translate(-7,-2,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,4);
		this.scene.scale(1/4,1/4,1/4);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.translate(0,8,-8);
		this.back.display();

	this.scene.popMatrix();


	this.scene.pushMatrix();
		
		this.scene.translate(-7,-2,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,4);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(1/4,1/6,1/13);
		this.scene.translate(0,24,0);
		this.scene.translate(0,0,-27);
		this.trap1.display();

	this.scene.popMatrix();


	this.scene.pushMatrix();
		
		this.scene.translate(-7,-2,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.translate(0,0,4);
		this.scene.rotate(Math.PI/2,0,1,0)
		this.scene.rotate(Math.PI/2,0,0,1);
		this.scene.scale(1/4,1/6,1/13);
		this.scene.translate(0,24,0);
		this.scene.translate(8,0,0);
		this.trap2.display();


	this.scene.popMatrix();


this.posx = this.scene.submarine.x;
this.posz = this.scene.submarine.z-1;
this.posy = this.scene.submarine.y - 2;
 






}



