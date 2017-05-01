/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var rotLeft = 0;

 
function MySubmarine(scene) {
	CGFobject.call(this,scene);


	//this.initBuffers();

	this.sub= new MyPolygon(this.scene,3,1);
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;


MySubmarine.prototype.update = function() {

	this.RotateLeft(); 
	  		
  }


//RODAR ESQUERDA - TECLA A
  MySubmarine.prototype.RotateLeft = function() {

	rotLeft = rotLeft + 0.3;
  }






MySubmarine.prototype.display = function (){

this.scene.pushMatrix();

	//this.scene.scale(1,1,0.4);
	//this.scene.translate(mov,0,0);
	this.scene.rotate(-rotLeft,0,0,1);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.sub.display();
	
this.scene.popMatrix();
	



}






