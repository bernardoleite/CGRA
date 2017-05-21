/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var mov = 0;

 
function MySubmarine(scene) {
	CGFobject.call(this,scene);


	//this.initBuffers();

	this.sub= new MyPolygon(this.scene,3,1);
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;


MySubmarine.prototype.update = function() {

	this.MoveFront(); 
	  		
  }

  MySubmarine.prototype.MoveFront = function() {
  	console.log("Key 'A' pressed");
	mov=mov+0.5;
  }






MySubmarine.prototype.display = function (){

this.scene.pushMatrix();

	//this.scene.scale(1,1,0.4);
	//this.scene.translate(7.3,7,0);
	this.scene.rotate(-Math.PI,1,0,0);
	this.sub.display();
	
this.scene.popMatrix();
	



}






