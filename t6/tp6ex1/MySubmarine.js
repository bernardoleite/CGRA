/**
 * MySubmarine.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */


function MySubmarine(scene) {
	CGFobject.call(this,scene);

	this.submarine= new MyPolygon(this.scene,3,1);
	

};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

   MySubmarine.prototype.update = function() {

	  		
  }

  MySubmarine.prototype.setAngleHours = function(ang) {
	
  }
  MySubmarine.prototype.setAngleMin = function(ang) {
	
  }
  MySubmarine.prototype.setAngleSec = function(ang) {
	
  }



MySubmarine.prototype.display = function (){

this.scene.pushMatrix();
	
	//this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.translate(7,5,7);
	this.submarine.display();

this.scene.popMatrix();


}


