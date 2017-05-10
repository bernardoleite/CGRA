/**
 * Torpedo.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function Torpedo(scene, posx = 0, posy =0, posz = 0, orient = 0) {
	CGFobject.call(this,scene);

	this.posx = posx;
	this.posy = posy;
	this.posz = posz;


	this.corpo= new MyCylinder(this.scene, 100, 1);
	this.front = new MyLamp (this.scene,100,5 );
	this.back = new MyLamp (this.scene,100,5);
	this.trap1 = new MyTrapezius(this.scene);
	this.trap2 = new MyTrapezius(this.scene);
	this.torpedo = new MyTorpedo (this.scene, 0, 0, 0,Math.PI/2);


	this.targets = [this.scene.target1,this.scene.target2];
	
};

Torpedo.prototype = Object.create(CGFobject.prototype);
Torpedo.prototype.constructor=Torpedo;

Torpedo.prototype.display = function (){

this.scene.pushMatrix();

this.scene.translate(this.posx,this.posy,this.posz);
this.scene.rotate(this.scene.submarine.angle, 0,1,0);

this.torpedo.display();

this.scene.popMatrix();


this.posx = this.scene.submarine.x;
this.posz = this.scene.submarine.z-1;
this.posy = this.scene.submarine.y - 2;





}



